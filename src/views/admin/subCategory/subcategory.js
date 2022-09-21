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
import useLoadData from "../../../utility/customHooks/useLoadData"
import useEdit from "../../../utility/customHooks/useEdit"
import useModalError from "../../../utility/customHooks/useModalError"
import {setIsEdit, setIsSubCategoryError, setSubCategory} from "../../../redux/subcategory/reducer"
import FormModal from "../../../components/FormModal"
import {FieldTypes} from "../../../utility/enums/FieldType"
import '@styles/react/libs/flatpickr/flatpickr.scss'

// my changes
import {
    deleteSubCategory,
    loadSubCategorys,
    getSubCategory,
    updateSubCategory, addSubCategory
} from "../../../redux/subcategory/actions"
import httpService, {baseURL} from "../../../utility/http"
import {toast} from "react-toastify"

const SubCategory = (props) => {

    const categoryList = useSelector(state => state.subCategory.list)
    const formInitialState = useSelector(state => state.subCategory.object)
    const miscData = useSelector(state => state.subCategory.miscData)
    const isEdit = useSelector(state => state.subCategory.isEdit)
    const isLoading = useSelector(state => state.subCategory.isLoading)
    const isError = useSelector(state => state.subCategory.isError)
    const isSuccess = useSelector(state => state.subCategory.isSuccess)
    const dispatch = useDispatch()

    // ** refs
    const formModalRef = useRef(null)

    const [currentPage, setCurrentPage] = useState(miscData && miscData.pageIndex ? miscData.pageIndex : 1)
    const [pageSize] = useState(10)
    const [searchValue, setSearchValue] = useState('')

    const categories = async (input) => {
        return httpService._get(`${baseURL}category?pageIndex=1&&pageSize=12&&searchQuery=${input}`)
            .then(response => {
                // success case
                if (response.status === 200 && response.data.statusCode === 200) {
                    console.log(response, "resp")
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

    const [commonFields] = useState([
        {type:FieldTypes.Text, label: 'Name', placeholder: 'Enter Category Name', name:'name', isRequired:true, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Text, label: 'Description', placeholder: 'Enter Description', name:'description', isRequired:false, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Number, label: 'Filling Limit', placeholder: 'Enter Filling limits', name:'fillingLimit', isRequired:false, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Select, label: 'Category', placeholder: 'Select Category', name:'category', isRequired:false, fieldGroupClasses: 'col-6', loadOptions:categories, isAsyncSelect: true, isMulti:false}
    ])

    // ** local States
    const [modalTitle, setModalTitle] = useState('Add Category')
    const [edit, setEdit] = useState(false)
    const [formState, setFormState] = useState({})
    const [isModal, setModal] = useState(false)
    const [isModalLoading,  setModalLoading] = useState(false)
    const [formData, setFormData] = useState([
        ...commonFields,
        {type:FieldTypes.File, label: 'Image', placeholder: 'Select image', name:'image', isRequired:false, fieldGroupClasses: 'col-6'}
    ])

    // ** schema for validations
    const schema = Joi.object({
        name: Joi.string().required().label("Name")
    })

    // ** Function to handle filter
    const toggle = () => {
        if (isModal) setEdit(false)
        setModal(!isModal)
        setFormState({...formInitialState})
        if (isModalLoading) setModalLoading(false)
    }

    // custom hooks
    useLoadData(isSuccess, loadSubCategorys, isModal, toggle, currentPage, pageSize, searchValue)
    useEdit(isEdit, setModalLoading, setFormState, formInitialState, setEdit, setIsEdit, setSubCategory, {
        name: '',
        description:'',
        fillingLimit: null
    })
    useModalError(isError, setModalLoading, setIsSubCategoryError)

    const addClick = () => {
        setModalTitle('Add SubCategory')
        setFormData([
            ...commonFields,
            {type:FieldTypes.File, label: 'Image', placeholder: 'Select image', name:'image', isRequired:false, fieldGroupClasses: 'col-6'}
        ])
        toggle()
    }

    const editClick = (id) => {
        console.log("edit", id)
        toggle()
        dispatch(getSubCategory(id, true))
        setFormData([...commonFields])
        setModalTitle('Edit SubCategory')
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
                dispatch(deleteSubCategory(id))
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const finalData = {...formState, categoryId: formState.category?.value}
        console.log("final Data", finalData)
        const isError = formModalRef.current.validate(formState)
        if (isError) return

        // call api
        setModalLoading(true)
        edit ? dispatch(updateSubCategory(finalData)) : dispatch(addSubCategory(finalData))
    }

    const handleFilter = e => {
        console.log('e.keyCode', e.keyCode)
        const value = e.target.value
        if (e.keyCode === 13) {
            dispatch(loadSubCategorys(currentPage + 1, pageSize, value))
        }
        setSearchValue(value)
    }

    // ** Function to handle Pagination
    const handlePagination = page => {
        dispatch(loadSubCategorys(page.selected + 1, pageSize, searchValue))
        setCurrentPage(page.selected + 1)
    }

    const detailOptClick = (id, e) => {
        e.preventDefault()
        props.history.push(`/SubcategoryDetail/${id}`)
    }

    const columns = [
        {
            name: 'Name',
            selector: (row) => row.name,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Description',
            selector: (row) => row.description,
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
        if (categoryList.length > 0) {
            return categoryList
        }  else {
            return categoryList.slice(0, pageSize)
        }
    }

    return (
        <Fragment>
            <UILoader blocking={isLoading}>
                <Card>
                    <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
                        <div>
                            <CardTitle tag='h4'>Sub Category</CardTitle>
                            <h6>Friday June 10, 2022, 08:10 AM</h6>
                        </div>
                        <Button.Ripple bssize='sm' color='primary' onClick={(e) => addClick(e)}>Add a new Sub Category</Button.Ripple>
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

export default SubCategory
