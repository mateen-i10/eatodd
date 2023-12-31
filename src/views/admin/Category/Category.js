// ** React Imports
import React, {Fragment, useEffect, useRef, useState} from 'react'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import {ChevronDown, Edit, FileText, MoreVertical, Plus, Trash} from 'react-feather'
import {
    Badge,
    Button,
    Card,
    CardHeader,
    CardTitle,
    Col, DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Input,
    Row,
    UncontrolledDropdown
} from 'reactstrap'

import {useDispatch, useSelector} from "react-redux"
import Swal from "sweetalert2"
import Joi from "joi-browser"
import UILoader from "../../../@core/components/ui-loader"
import useLoadData from "../../../utility/customHooks/useLoadData"
import useEdit from "../../../utility/customHooks/useEdit"
import useModalError from "../../../utility/customHooks/useModalError"
import {setCategory, setIsCategoryError, setIsEdit} from "../../../redux/restaurantPages/category/reducer"
import FormModal from "../../../components/FormModal"
import {FieldTypes} from "../../../utility/enums/FieldType"
import '@styles/react/libs/flatpickr/flatpickr.scss'
// import Datetime from "react-datetime"
// my changes
import {
    addAtSquare,
    addCategory,
    deleteCategory,
    getCategory,
    loadCategorys,
    updateCategory
} from "../../../redux/restaurantPages/category/actions"
import {toast} from "react-toastify"

const Category = (props) => {

    const categoryList = useSelector(state => state.category.list)
    const formInitialState = useSelector(state => state.category.object)
    const miscData = useSelector(state => state.category.miscData)
    const isEdit = useSelector(state => state.category.isEdit)
    const isLoading = useSelector(state => state.category.isLoading)
    const isError = useSelector(state => state.category.isError)
    const isSuccess = useSelector(state => state.category.isSuccess)
    const dispatch = useDispatch()

    console.log('isSuccess', isSuccess)

    // ** refs
    const formModalRef = useRef(null)

    const [currentPage, setCurrentPage] = useState(miscData && miscData.pageIndex ? miscData.pageIndex : 1)
    const [pageSize] = useState(10)
    const [searchValue, setSearchValue] = useState('')

    // ** local States
    const [modalTitle, setModalTitle] = useState('Add Category')
    const [edit, setEdit] = useState(false)
    const [formState, setFormState] = useState({})
    const [isModal, setModal] = useState(false)
    const [isModalLoading, setModalLoading] = useState(false)
    const [formData, setFormData] = useState([])

    const [isSquareLoading, setIsSquareLoading] = useState(false)

    // ** schema for validations
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
    useLoadData(isSuccess, loadCategorys, isModal, toggle, currentPage, pageSize, searchValue)
    useEdit(isEdit, setModalLoading, setFormState, formInitialState, setEdit, setIsEdit, setCategory, {
        name: '',
        description: ''
    })
    useModalError(isError, setModalLoading, setIsCategoryError)

    const addClick = () => {
        setFormData([
            {
                type: FieldTypes.Text,
                label: 'Name',
                placeholder: 'Enter Category Name',
                name: 'name',
                isRequired: true,
                fieldGroupClasses: 'col-6'
            },
            {
                type: FieldTypes.Text,
                label: 'Description',
                placeholder: 'Enter Description',
                name: 'description',
                isRequired: false,
                fieldGroupClasses: 'col-6'
            },
            {
                type: FieldTypes.File,
                label: 'Image',
                placeholder: 'Enter Attachment',
                name: 'image',
                isRequired: false,
                fieldGroupClasses: 'col-6'
            }
        ])
        setModalTitle('Add Category')
        toggle()
    }

    const editClick = (id) => {
        console.log("edit", id)
        setFormData([
            {
                type: FieldTypes.Text,
                label: 'Name',
                placeholder: 'Enter Category Name',
                name: 'name',
                isRequired: true,
                fieldGroupClasses: 'col-6'
            },
            {
                type: FieldTypes.Text,
                label: 'Description',
                placeholder: 'Enter Description',
                name: 'description',
                isRequired: false,
                fieldGroupClasses: 'col-6'
            }
        ])

        setSchema(Joi.object({
            name: Joi.string().required().label("Name")
        }))

        toggle()
        dispatch(getCategory(id, true))
        setModalTitle('Edit Category')
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
                dispatch(deleteCategory(id))
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const isError = formModalRef.current.validate(formState)
        if (isError) return

        // call api
        setModalLoading(true)
        // delete formState.isActive
        edit ? dispatch(updateCategory(formState)) : dispatch(addCategory(formState))
    }

    const handleFilter = e => {
        console.log('e.keyCode', e.keyCode)
        const value = e.target.value
        if (e.keyCode === 13) {
            dispatch(loadCategorys(currentPage, pageSize, value))
        }
        setSearchValue(value)
    }

    // ** Function to handle Pagination
    const handlePagination = page => {
        dispatch(loadCategorys(page.selected + 1, pageSize, searchValue))
        setCurrentPage(page.selected + 1)
    }

    const detailOptClick = (id, e) => {
        e.preventDefault()
        props.history.push(`/CategoryDetail/${id}`)
    }

    const onAddCategoryAtSquare = async (id) => {
        setIsSquareLoading(true)
        console.log("event", id)
        dispatch(addAtSquare(id))
        toast("Category Added at Square Successfully")
        setTimeout(() => {
            setIsSquareLoading(false)
        }, 5000)
    }


  /*  const onAddCategoryAtSquare = async (id) => {
        setIsSquareLoading(true)
        dispatch(setLoading(true))

        // show sweet alert here
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to add products to square!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#7367f0',
            cancelButtonColor: '#d33'
        }).then((result) => {
            console.log('result', result)
            if (result.isConfirmed) {
                httpService._post(`${baseURL}Category/AddCategoryInSquare`
                ).then(response => {
                    console.log('responseA', response)
                    // success case
                    if (response.status === 200) {
                        const data = response.data
                        console.log('dataA', data)
                        const finalData = data.map(id)
                        console.log('finalDataA', finalData)
                        setIsSquareLoading(false)
                        toast.success('Category Added at Square Successfully')
                    } else {
                        //general Error Action
                        toast.error(response.data.message)
                    }
                }).catch(error => {
                    toast.error(error.message)
                })
            }
        })
    }*/

    useEffect(() => {

    }, [categoryList])

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
            name: 'Square',
            selector: (row) => <Badge className="" color={'light-primary'} pill>{row.isAddedSquare === true ? "Mapped" : ''}</Badge>,
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
                                <hr />
                                <DropdownItem className='w-100' onClick={() => onAddCategoryAtSquare(row.id)}>
                                    <Plus size={15} />
                                    <span className='align-middle ms-50'>Add Category At Square</span>
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
        } else {
            return categoryList.slice(0, pageSize)
        }
    }

    return (
        <Fragment>
            <UILoader blocking={(isLoading || isSquareLoading)}>
                <Card>
                    <CardHeader
                        className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
                        <div>
                            <CardTitle tag='h4'>Category</CardTitle>
                            <h6>Friday June 10, 2022, 08:10 AM</h6>
                        </div>
                        <Button.Ripple bssize='sm' color='primary' onClick={(e) => addClick(e)}>Add a new
                            Category</Button.Ripple>
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
                        sortIcon={<ChevronDown size={10}/>}
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
                       isLoading={isModalLoading}
                       handleSubmit={handleSubmit}
            />

        </Fragment>
    )
}

export default Category
