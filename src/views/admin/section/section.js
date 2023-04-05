// ** React Imports
import React, {Fragment, useEffect, useRef, useState} from 'react'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import {ChevronDown, Delete, Edit, FileText, MoreVertical, Plus, Trash} from 'react-feather'
import {
    Card,
    CardHeader,
    CardTitle,
    Button,
    Input,
    Row,
    Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap'
import {useDispatch, useSelector} from "react-redux"
import Swal from "sweetalert2"
import Joi from "joi-browser"
import UILoader from "../../../@core/components/ui-loader"
import FormModal from "../../../components/FormModal"
import {FieldTypes} from "../../../utility/enums/FieldType"
import useLoadData from "../../../utility/customHooks/useLoadData"
import useEdit from "../../../utility/customHooks/useEdit"
import useModalError from "../../../utility/customHooks/useModalError"
import {addSection, deleteSection, getSection, loadSections, updateSection} from "../../../redux/section/action"
import {setIsEdit, setIsSectionError, setSection} from "../../../redux/section/reducer"
import AsyncSelect from "react-select/async"
import httpService, {baseURL} from "../../../utility/http"
import {toast} from "react-toastify"

const Sections = (props) => {

    const sectionList = useSelector(state => state.section.list)
    const formInitialState = useSelector(state => state.section.object)
    const miscData = useSelector(state => state.section.miscData)
    const isEdit = useSelector(state => state.section.isEdit)
    const isLoading = useSelector(state => state.section.isLoading)
    const isError = useSelector(state => state.section.isError)
    const isSuccess = useSelector(state => state.section.isSuccess)
    const dispatch = useDispatch()

    // ** refs
    const formModalRef = useRef(null)

    const [currentPage, setCurrentPage] = useState(miscData && miscData.pageIndex ? miscData.pageIndex : 1)
    const [pageSize] = useState(10)
    const [searchValue, setSearchValue] = useState('')
    const sectionItemObject = {name: '', price: '', productId: 0}
    const [sectionItems, setSectionItem] = useState([sectionItemObject])
    const [existingProducts, setExistingProducts] = useState([])

    const products = async (input) => {
        const res = httpService._get(`${baseURL}product?pageIndex=1&&pageSize=12&&searchQuery=${input}`)
            .then(response => {
                if (response.status === 200 && response.data.statusCode === 200) {
                    setExistingProducts([...response.data.data])
                    return response.data.data.map(d =>  {
                        return {label: `${d.name}`, value: d.id}
                    })
                } else {
                    //general Error Action
                    toast.error(response.data.message)
                }
            }).catch(error => {
                toast.error(error.message)
            })

        return res
    }
    const sectionTypes = [
        {
            label: 'Modifier', value: 1
        },
        {
            label: 'Add-on', value: 2
        }
    ]
    const sectionItemTypes = [
        {
            label: 'Radio', value: 1
        },
        {
            label: 'Checkbox', value: 2
        }
    ]

    useEffect(() => {
        if (formInitialState && formInitialState.sectionItems) {
            const final = formInitialState.sectionItems && formInitialState.sectionItems.length > 0 && formInitialState.sectionItems.map(p => {
                return {...p, productId: {label: p.product?.name, value: p.product?.id}}
            })
            setSectionItem(final)
        }
    }, [isEdit])

    const removeSectionItem = (index) => {
        const newArray = [...sectionItems]
        newArray.splice(index, 1)
        setSectionItem(newArray)
    }
    const addSectionItem = () => {
        const newArray = [...sectionItems, sectionItemObject]
        setSectionItem(newArray)
    }
    const onValueChange = (index, name, event, isSelect = false) => {
        const newArray = sectionItems.map((item, i) => {
            if (i === index) {
                item[name] = isSelect ? event.value :  event.target.value
            }
            return item
        })

        setSectionItem(newArray)
    }

    const onSelectProduct = (index, productId) => {
        const final = [...sectionItems]
        final[index].productId = productId
        const found = existingProducts.find(p => p.id === productId.value)
        if (found) {
            final[index].name = found.name
            final[index].price = found.options ? found.options.find(f => f.isDefault)?.price : 0
        }
        setSectionItem(final)
    }

    const child = () => {
        return <div className='ms-1'>
            <h5>Section Item</h5>
            {sectionItems.map((i, index) => {
                return <div key={i.productId} className='row mt-1'>
                    <div className='col-4'>
                        <AsyncSelect
                            defaultOptions
                            value={i.productId}
                            onChange={(e) => onSelectProduct(index, e)}
                            loadOptions={products}
                            closeMenuOnSelect={true}
                            isMulti = {false}
                        />
                    </div>
                    <div className='col-4'>
                        <Input
                            placeholder='Name'
                            type= 'text'
                            required
                            value={i.name}
                            onChange={(e) => onValueChange(index, 'name', e)}
                        />
                    </div>
                    <div className='col-3'>
                        <Input
                            placeholder='Price'
                            type= 'number'
                            value={i.price}
                            onChange={(e) => onValueChange(index, 'price', e)}
                        />
                    </div>
                    {sectionItems.length > 1 && <div className='col-1'>
                        <Button.Ripple className='btn-icon' color='danger' onClick={() => removeSectionItem(index)}>
                            <Delete size={12}/>
                        </Button.Ripple>
                    </div>
                    }
                </div>
            })}
            <div className='col-2'>
                <Button.Ripple className='btn-icon mt-1 ms-1' color='primary' onClick={addSectionItem}>
                    <Plus size={12} />
                </Button.Ripple>
            </div>
        </div>
    }

    // ** local States
    const [modalTitle, setModalTitle] = useState('Add Modifier/Addon')
    const [edit, setEdit] = useState(false)
    const [formState, setFormState] = useState({})
    const [isModal, setModal] = useState(false)
    const [isModalLoading,  setModalLoading] = useState(false)
    const [formData] = useState([
        {type:FieldTypes.Text, label: 'Name', placeholder: 'Enter Name', name:'name', isRequired:true, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Number, label: 'Limit', placeholder: 'Enter Limit', name:'limit', isRequired:true, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Select, label: 'Type', placeholder: 'Select Type', name:'sectionType', isRequired:true, fieldGroupClasses: 'col-6', options: sectionTypes, isAsyncSelect: false},
        {type:FieldTypes.Select, label: 'Items Type', placeholder: 'Select Items Type', name:'sectionItemType', isRequired:true, fieldGroupClasses: 'col-6', options: sectionItemTypes, isAsyncSelect: false},
        {type:FieldTypes.TextArea, label: 'Description', placeholder: 'Enter Description', name:'description', fieldGroupClasses: 'col-12'}
    ])

    const schema = Joi.object({
        name: Joi.string().required().label("Name"),
        limit: Joi.number().required().label("Limit"),
        sectionType: Joi.number().required().label("Section Type"),
        sectionItemType: Joi.number().required().label("Section Item Type")
    })

    // ** Function to handle filter
    const toggle = () => {
        if (isModal) setEdit(false)
        setModal(!isModal)
        setFormState({...formInitialState})
        setSectionItem([sectionItemObject])
        if (isModalLoading) setModalLoading(false)
    }

    // custom hooks
    useLoadData(isSuccess, loadSections, isModal, toggle, currentPage, pageSize, searchValue)
    useEdit(isEdit, setModalLoading, setFormState, formInitialState, setEdit, setIsEdit, setSection, {
        name: '',
        limit: '',
        description: ''
    })
    useModalError(isError, setModalLoading, setIsSectionError)

    const addClick = () => {
        setModalTitle('Add Modifier/Addon')
        toggle()
    }

    const editClick = (id) => {
        toggle()
        dispatch(getSection(id, true))
        setModalTitle('Edit Modifier/Addon')
        setModalLoading(true)
    }

    const deleteClick = (id, e) => {
        e.preventDefault()
        // show sweet alert here
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#7367f0',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteSection(id))
            }
        })
    }

    const detailOptClick = (id, e) => {
        e.preventDefault()
        props.history.push(`/section/${id}`)
    }

    const handleSubmit = (event) => {
        const finalSectionItems = sectionItems && sectionItems.length > 0 ? sectionItems.map(i => ({...i, productId: i.productId.value})) : []
        const finalData = {...formState, sectionItems: finalSectionItems}
        event.preventDefault()
        const isError = formModalRef.current.validate(formState)
        if (isError) return
        // call api
        setModalLoading(true)
        edit ? dispatch(updateSection(finalData)) : dispatch(addSection(finalData))
    }

    const handleFilter = e => {
        console.log('e.keyCode', e.keyCode)
        const value = e.target.value
        if (e.keyCode === 13) {
            dispatch(loadSections(currentPage, pageSize, value))
        }
        setSearchValue(value)
    }

    // ** Function to handle Pagination
    const handlePagination = page => {
        dispatch(loadSections(page.selected + 1, pageSize, searchValue))
        setCurrentPage(page.selected + 1)
    }

    const columns = [
        {
            name: 'Name',
            selector: (row) => row.name,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Section Type',
            selector: (row) => `${row.sectionType === 1 ? 'Modifier' : row.sectionType === 2 ? 'Add-on' : ''}`,
            minWidth: '50px',
            sortable: true
        },
        {
            name: 'Limit',
            selector: (row) => row.limit,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Actions',
            allowOverflow: true,
            cell: row => {
                return (
                    <div className='d-flex'>
                        <UncontrolledDropdown>
                            <DropdownToggle className='pe-1 cursor-pointer' tag='span'>
                                <MoreVertical size={15} />
                            </DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem tag='a' href='/' className='w-100' onClick={e => detailOptClick(row.id, e)}>
                                    <FileText size={15} />
                                    <span className='align-middle ms-50'>Details</span>
                                </DropdownItem>
                                <DropdownItem tag='a' href='/' className='w-100' onClick={e => deleteClick(row.id, e)}>
                                    <Trash size={15} />
                                    <span className='align-middle ms-50'>Delete</span>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <span className='cursor-pointer' onClick={() => { editClick(row.id) }}><Edit size={15} /></span>
                    </div>
                )
            }
        }
    ]

    // ** Custom Pagination
    const CustomPagination = () => {
        const count = miscData?.totalPages ?? 0

        return <ReactPaginate
            previousLabel={''}
            nextLabel={''}
            breakLabel='...'
            pageCount={count || 1}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            activeClassName='active'
            forcePage={currentPage !== 0 ? currentPage - 1 : 0}
            onPageChange={page => handlePagination(page)}
            pageClassName={'page-item'}
            nextLinkClassName={'page-link'}
            nextClassName={'page-item next'}
            previousClassName={'page-item prev'}
            previousLinkClassName={'page-link'}
            pageLinkClassName={'page-link'}
            breakClassName='page-item'
            breakLinkClassName='page-link'
            containerClassName={
                'pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1'
            }
        />
    }

    const dataToRender = () => {
        if (sectionList.length > 0) {
            return sectionList
        }  else {
            return sectionList.slice(0, pageSize)
        }
    }

    return (
        <Fragment>
            <UILoader blocking={isLoading}>
                <Card>
                    <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
                        <div>
                            <CardTitle tag='h4'>Modifiers/Addons</CardTitle>
                        </div>
                        <Button.Ripple bssize='sm' color='primary' onClick={(e) => addClick(e)}>Add Modifier/Addon</Button.Ripple>
                    </CardHeader>
                    <Row className='justify-content-end mx-0'>
                        <Col className='mt-1' md='12' sm='12'>
                            <Input
                                className='dataTable-filter mb-50'
                                type='text'
                                placeholder='Search'
                                bsSize='sm'
                                id='search-input'
                                value={searchValue}
                                onKeyUp={handleFilter}
                                onChange={handleFilter}
                            />
                        </Col>
                    </Row>
                    <DataTable
                        noHeader
                        pagination
                        paginationServer
                        className='react-dataTable'
                        columns={columns}
                        sortIcon={<ChevronDown size={10} />}
                        paginationComponent={CustomPagination}
                        data={dataToRender()}
                    />
                </Card>
            </UILoader>
            <FormModal ref={formModalRef}
                       formState={formState}
                       formData={formData}
                       setFormState={setFormState}
                       schema={schema}
                       isModal={isModal}
                       toggleModal={toggle}
                       modalTitle={modalTitle}
                       primaryBtnLabel='Save'
                       secondaryBtnLabel='Cancel'
                       isLoading = {isModalLoading}
                       handleSubmit={handleSubmit}
                       children={child()}
            />

        </Fragment>
    )
}

export default Sections
