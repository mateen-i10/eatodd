// ** React Imports
import React, {Fragment, useRef, useState} from 'react'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import {ChevronDown, Edit, FileText, MoreVertical, Trash} from 'react-feather'
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
import httpService, {baseURL} from "../../../utility/http"
import {toast} from "react-toastify"
import {
    addCateringMenu,
    deleteCateringMenuItem,
    getCateringMenuItem,
    loadCateringMenuItems, updateCateringMenu
} from "../../../redux/cateringMenuItem/action"
import {setCateringMenuItem, setIsCateringMenuItemError, setIsEdit} from "../../../redux/cateringMenuItem/reducer"

const CateringMenuItems = (props) => {

    const cateringMenuItemList = useSelector(state => state.cateringMenuItem.list)
    const formInitialState = useSelector(state => state.cateringMenuItem.object)
    const miscData = useSelector(state => state.cateringMenuItem.miscData)
    const isEdit = useSelector(state => state.cateringMenuItem.isEdit)
    const isLoading = useSelector(state => state.cateringMenuItem.isLoading)
    const isError = useSelector(state => state.cateringMenuItem.isError)
    const isSuccess = useSelector(state => state.cateringMenuItem.isSuccess)
    const dispatch = useDispatch()

    // ** refs
    const formModalRef = useRef(null)

    const [currentPage, setCurrentPage] = useState(miscData && miscData.pageIndex ? miscData.pageIndex : 1)
    const [pageSize] = useState(10)
    const [searchValue, setSearchValue] = useState('')

    const caterings = async (input) => {
        return httpService._get(`${baseURL}cateringMenu?pageIndex=1&&pageSize=12&&searchQuery=${input}`)
            .then(response => {
                console.log('response', response)
                // success case
                if (response.status === 200 && response.data.statusCode === 200) {
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
    }

    // ** local States
    const [modalTitle, setModalTitle] = useState('Add Catering Menu Item')
    const [edit, setEdit] = useState(false)
    const [formState, setFormState] = useState({})
    const [isModal, setModal] = useState(false)
    const [isModalLoading,  setModalLoading] = useState(false)
    const [formData, setFormData] = useState([])
   /* const [formData] = useState([
        {type:FieldTypes.Text, label: 'Name', placeholder: 'Enter Name', name:'name', isRequired:true, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Number, label: 'Limit', placeholder: 'Enter Limit', name:'limit', isRequired:false, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Number, label: 'Price', placeholder: 'Enter Price', name:'price', isRequired:false, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Select, label: 'Catering', placeholder: 'Select Catering', name:'cateringMenuId', isRequired:false, fieldGroupClasses: 'col-6', loadOptions:caterings, isAsyncSelect: true, isMulti:false},
        {type:FieldTypes.TextArea, label: 'Description', placeholder: 'Enter Description', name:'description', isRequired:false, fieldGroupClasses: 'col-12'}
    ])*/

    const [schema, setSchema] = useState(Joi.object({
        name: Joi.string().required().label("Name")
    }))

    // ** Function to handle filter
    const toggle = () => {
        if (isModal) setEdit(false)
        setModal(!isModal)
        setFormState({...formInitialState})
        if (isModalLoading) setModalLoading(false)
    }

    // custom hooks
    useLoadData(isSuccess, loadCateringMenuItems, isModal, toggle, currentPage, pageSize, searchValue)
    useEdit(isEdit, setModalLoading, setFormState, formInitialState, setEdit, setIsEdit, setCateringMenuItem, {
        name: '',
        limit: '',
        price: '',
        cateringMenuId:{},
        description: ''
    })
    useModalError(isError, setModalLoading, setIsCateringMenuItemError)

    const addClick = () => {
        setFormData([
            {type:FieldTypes.Text, label: 'Name', placeholder: 'Enter Name', name:'name', isRequired:true, fieldGroupClasses: 'col-6'},
            {type:FieldTypes.Number, label: 'Limit', placeholder: 'Enter Limit', name:'limit', isRequired:false, fieldGroupClasses: 'col-6'},
            {type:FieldTypes.Number, label: 'Price', placeholder: 'Enter Price', name:'price', isRequired:false, fieldGroupClasses: 'col-6'},
            {type:FieldTypes.Select, label: 'Catering', placeholder: 'Select Catering', name:'cateringMenuId', isRequired:false, fieldGroupClasses: 'col-6', loadOptions:caterings, isAsyncSelect: true, isMulti:false},
            {type: FieldTypes.File, label: 'Image', placeholder: 'Enter Attachment', name: 'image', isRequired: false, fieldGroupClasses: 'col-6'},
            {type:FieldTypes.TextArea, label: 'Description', placeholder: 'Enter Description', name:'description', isRequired:false, fieldGroupClasses: 'col-12'}
        ])
        setModalTitle('Add Catering Menu Item')
        toggle()
    }

    const editClick = (id) => {
        setFormData([
            {type:FieldTypes.Text, label: 'Name', placeholder: 'Enter Name', name:'name', isRequired:true, fieldGroupClasses: 'col-6'},
            {type:FieldTypes.Number, label: 'Limit', placeholder: 'Enter Limit', name:'limit', isRequired:false, fieldGroupClasses: 'col-6'},
            {type:FieldTypes.Number, label: 'Price', placeholder: 'Enter Price', name:'price', isRequired:false, fieldGroupClasses: 'col-6'},
            {type:FieldTypes.Select, label: 'Catering', placeholder: 'Select Catering', name:'cateringMenuId', isRequired:false, fieldGroupClasses: 'col-6', loadOptions:caterings, isAsyncSelect: true, isMulti:false},
            {type:FieldTypes.TextArea, label: 'Description', placeholder: 'Enter Description', name:'description', isRequired:false, fieldGroupClasses: 'col-12'}
        ])
        setSchema(Joi.object({
            name: Joi.string().required().label("Name")
        }))
        toggle()
        dispatch(getCateringMenuItem(id, true))
        setModalTitle('Edit Catering Menu')
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
                dispatch(deleteCateringMenuItem(id))
            }
        })
    }

    const detailOptClick = (id, e) => {
        e.preventDefault()
        props.history.push(`/cateringMenuItem/${id}`)
    }

    const handleSubmit = (event) => {
        console.log('formState', formState)
        event.preventDefault()
        const finalData = {...formState, cateringMenuId: formState.cateringMenuId?.value}

        const isError = formModalRef.current.validate(formState)
        if (isError) return

        console.log("finalData", finalData)
        // call api
        setModalLoading(true)
        edit ? dispatch(updateCateringMenu(finalData)) : dispatch(addCateringMenu(finalData))
    }

    const handleFilter = e => {
        console.log('e.keyCode', e.keyCode)
        const value = e.target.value
        if (e.keyCode === 13) {
            dispatch(loadCateringMenuItems(currentPage + 1, pageSize, value))
        }
        setSearchValue(value)
    }

    // ** Function to handle Pagination
    const handlePagination = page => {
        dispatch(loadCateringMenuItems(page.selected + 1, pageSize, searchValue))
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
            name: 'Limit',
            selector: (row) => row.limit,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Price',
            selector: (row) => row.price,
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
        if (cateringMenuItemList.length > 0) {
            return cateringMenuItemList
        }  else {
            return cateringMenuItemList.slice(0, pageSize)
        }
    }

    return (
        <Fragment>
            <UILoader blocking={isLoading}>
                <Card>
                    <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
                        <div>
                            <CardTitle tag='h4'>Catering Menu Items</CardTitle>
                        </div>
                        <Button.Ripple bssize='sm' color='primary' onClick={(e) => addClick(e)}>Add Catering Menu Item</Button.Ripple>
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
            />

        </Fragment>
    )
}

export default CateringMenuItems
