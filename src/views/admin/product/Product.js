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
import {setIsEdit, setIsproductError, setproduct} from "../../../redux/products/reducer"
import FormModal from "../../../components/FormModal"
import {FieldTypes} from "../../../utility/enums/FieldType"
import '@styles/react/libs/flatpickr/flatpickr.scss'
// import Datetime from "react-datetime"

// my changes
import {deleteproduct, loadproducts, getproduct, addproduct, updateproduct} from "../../../redux/products/actions"
import httpService, {baseURL} from "../../../utility/http"
import {toast} from "react-toastify"

const Product = (props) => {

    const productList = useSelector(state => state.product.list)
    const formInitialState = useSelector(state => state.product.object)
    const miscData = useSelector(state => state.product.miscData)
    const isEdit = useSelector(state => state.product.isEdit)
    const isLoading = useSelector(state => state.product.isLoading)
    const isError = useSelector(state => state.product.isError)
    const isSuccess = useSelector(state => state.product.isSuccess)
    const dispatch = useDispatch()

    // ** refs
    const formModalRef = useRef(null)

    const [currentPage, setCurrentPage] = useState(miscData && miscData.pageIndex ? miscData.pageIndex : 1)
    const [pageSize] = useState(10)
    const [searchValue, setSearchValue] = useState('')

    const subCategories = async (input) => {
        return httpService._get(`${baseURL}SubCategory?pageIndex=1&&pageSize=12&&searchQuery=${input}`)
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

    const generalProduct = async (input) => {
        return httpService._get(`${baseURL}GeneralProduct?pageIndex=1&&pageSize=12&&searchQuery=${input}`)
            .then(response => {
                // success case
                if (response.status === 200 && response.data.statusCode === 200) {
                    console.log(response, "genral product resp")
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

    const Restaurant = async (input) => {
        return httpService._get(`${baseURL}Restaurant?pageIndex=1&&pageSize=12&&searchQuery=${input}`)
            .then(response => {
                // success case
                if (response.status === 200 && response.data.statusCode === 200) {
                    console.log(response, "Restaurant resp")
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
    const [modalTitle, setModalTitle] = useState('Add Product')
    const [edit, setEdit] = useState(false)
    const [formState, setFormState] = useState({})
    const [isModal, setModal] = useState(false)
    const [isModalLoading,  setModalLoading] = useState(false)
    const [formData, setFormData] = useState([{type:FieldTypes.Select, label: 'Select Product', placeholder: 'Select Product', name:'generalProduct', isRequired:false, fieldGroupClasses: 'col-6', loadOptions:generalProduct, isAsyncSelect: true, isMulti:false}])
    const [formFeilds, setFormFeilds] = useState(0)

    const AddNewData = () => {
        setFormData([
            {type:FieldTypes.Text, label: 'Name', placeholder: 'Enter Product Name', name:'name', isRequired:false, fieldGroupClasses: 'col-6'},
            {type:FieldTypes.Text, label: 'Description', placeholder: 'Enter Description', name:'description', isRequired:false, fieldGroupClasses: 'col-6'},
            {type:FieldTypes.Number, label: 'WholePrice', placeholder: 'Enter WholePrice', name:'wholePrice', isRequired:false, fieldGroupClasses: 'col-6'},
            {type:FieldTypes.Number, label: 'RetailPrice', placeholder: 'Enter RetailPrice', name:'retailPrice', isRequired:false, fieldGroupClasses: 'col-6'},
            {type:FieldTypes.Number, label: 'OnlinePrice', placeholder: 'Enter OnlinePrice', name:'onlinePrice', isRequired:false, fieldGroupClasses: 'col-6'},
            {type:FieldTypes.Number, label: 'Discount', placeholder: 'Enter Discount', name:'discount', isRequired:false, fieldGroupClasses: 'col-6'},
            {type:FieldTypes.Number, label: 'Quantity', placeholder: 'Enter Quantity', name:'quantity', isRequired:false, fieldGroupClasses: 'col-6'},
            {type:FieldTypes.Number, label: 'TaxAmount', placeholder: 'Enter TaxAmount', name:'taxAmount', isRequired:false, fieldGroupClasses: 'col-6'},
            {type:FieldTypes.Number, label: 'TaxPercentage', placeholder: 'Enter TaxPercentage', name:'taxPercentage', isRequired:false, fieldGroupClasses: 'col-6'},
            {type:FieldTypes.File, label: 'Image', placeholder: 'image', name:'image', isRequired:false, fieldGroupClasses: 'col-6'},
            {type:FieldTypes.Select, label: 'SubCategory', placeholder: 'Select SubCategory', name:'subcategory', isRequired:false, fieldGroupClasses: 'col-6', loadOptions:subCategories, isAsyncSelect: true, isMulti:false},
            {type:FieldTypes.Select, label: 'Restaurant', placeholder: 'Select Restaurant', name:'restaurant', isRequired:false, fieldGroupClasses: 'col-6', loadOptions:Restaurant, isAsyncSelect: true, isMulti:false}
        ])

        setFormFeilds(1)
    }

    const AddFromExistingData = () => {
        setFormData([{type:FieldTypes.Select, label: 'Select Product', placeholder: 'Select Product', name:'generalProduct', isRequired:false, fieldGroupClasses: 'col-6', loadOptions:generalProduct, isAsyncSelect: true, isMulti:false}])

        setFormFeilds(0)
    }


    const child = () => {
        return (
            <>
                {formFeilds === 0 && (
                    <div className='col-md-6 mt-2 text-end'>
                        <Button type="button" color='primary' onClick={AddNewData}>Add new</Button>
                    </div>
                )}
                {formFeilds === 1 && (
                    <div className='col-md-12 mt-2 text-center mb-3'>
                        <h5 className='mb-3' color='primary'>Or</h5>
                        <Button type="button" color='primary' onClick={AddFromExistingData}>Choose from existing one</Button>
                    </div>
                )}
            </>
            )

    }


    // ** schema for validations
    const schema = Joi.object({
        //name: Joi.string().required().label("Name")
    })

    // ** Function to handle filter
    const toggle = () => {
        if (isModal) setEdit(false)
        setModal(!isModal)
        setFormState({...formInitialState})
        if (isModalLoading) setModalLoading(false)
    }

    // custom hooks
    useLoadData(isSuccess, loadproducts, isModal, toggle, currentPage, pageSize, searchValue)
    useEdit(isEdit, setModalLoading, setFormState, formInitialState, setEdit, setIsEdit, setproduct, {
        name: '',
        description:'',
    })
    useModalError(isError, setModalLoading, setIsproductError)

    const addClick = () => {
        setModalTitle('Add Product')
        toggle()
    }

    const editClick = (id) => {
        console.log("edit", id)
        toggle()
        dispatch(getproduct(id, true))
        setModalTitle('Edit Product')
        setEdit(true)
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
                dispatch(deleteproduct(id))
            }
        })
    }

    const detailOptClick = (id, e) => {
        e.preventDefault()
        props.history.push(`/productsDetail/${id}`)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
       if (formFeilds === 1) {
           // eslint-disable-next-line no-var
           var finalData = {...formState, subCategoryId: formState.subcategory?.value, restaurantId: formState.restaurant?.value}
           console.log("Hello", finalData)
       } else {
           // eslint-disable-next-line no-var
           var finalData = {...formState, generalProductId: formState.generalProduct?.value }
       }
        console.log(finalData, "lets see")
        const isError = formModalRef.current.validate(formState)
        if (isError) return

        // call api
        setModalLoading(true)
        edit ? dispatch(updateproduct(finalData)) : dispatch(addproduct(finalData))
    }

    const handleFilter = e => {
        console.log('e.keyCode', e.keyCode)
        const value = e.target.value
        if (e.keyCode === 13) {
            dispatch(loadproducts(currentPage + 1, pageSize, value))
        }
        setSearchValue(value)
    }

    // ** Function to handle Pagination
    const handlePagination = page => {
        dispatch(loadproducts(page.selected + 1, pageSize, searchValue))
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
                            <DropdownToggle className='pe-1' tag='span'>
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
        if (productList.length > 0) {
            return productList
        }  else {
            return productList.slice(0, pageSize)
        }
    }

    return (
        <Fragment>
            <UILoader blocking={isLoading}>
                <Card>
                    <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
                        <div>
                            <CardTitle tag='h4'>Product</CardTitle>
                            <h6>Friday June 10, 2022, 08:10 AM</h6>
                        </div>
                        <Button.Ripple bssize='sm' color='primary' onClick={(e) => addClick(e)}>Add a new Product</Button.Ripple>
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
                       children={child()}
            />

        </Fragment>
    )
}

export default Product
