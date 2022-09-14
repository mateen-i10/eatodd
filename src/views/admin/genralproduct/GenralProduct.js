// ** React Imports
import React, {Fragment, useEffect, useRef, useState} from 'react'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import {ChevronDown, Edit, FileText, MoreVertical, Trash} from 'react-feather'
import {
    Button,
    Card,
    CardHeader,
    CardTitle,
    Col,
    DropdownItem,
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
import {setGenralProduct, setIsGenralProductEdit, setIsGenralProductError} from "../../../redux/genralProduct/reducer"
import FormModal from "../../../components/FormModal"
import {FieldTypes} from "../../../utility/enums/FieldType"
import '@styles/react/libs/flatpickr/flatpickr.scss'
// my changes
import {
    addGenralProduct,
    deleteGenralProduct,
    getGenralProduct,
    loadGenralProducts,
    updateGenralProduct
} from "../../../redux/genralProduct/actions"
import {isObjEmpty, loadOptions} from "../../../utility/Utils"
import Child from '../../admin/product/ProductFormChild'


const GenralProducts = (props) => {

    const productList = useSelector(state => state.genralProduct.list)
    const formInitialState = useSelector(state => state.genralProduct.object)
    const miscData = useSelector(state => state.genralProduct.miscData)
    const isEdit = useSelector(state => state.genralProduct.isEdit)
    const isLoading = useSelector(state => state.genralProduct.isLoading)
    const isError = useSelector(state => state.genralProduct.isError)
    const isSuccess = useSelector(state => state.genralProduct.isSuccess)
    const dispatch = useDispatch()

    // select subCategory
    const categories = async (input) => {
        return loadOptions('category', input, 1, 12)
    }

    const Ingredient = async (input) => {
        return loadOptions('Ingredient', input, 1, 12)
    }

    const options = async () => [
        { value: 1, label: 'Default' },
        { value: 2, label: 'Numeric' }
    ]

    // ** refs
    const formModalRef = useRef(null)

    const [currentPage, setCurrentPage] = useState(miscData && miscData.pageIndex ? miscData.pageIndex : 1)
    const [pageSize] = useState(10)
    const [searchValue, setSearchValue] = useState('')
    const [subcategoryId, setSubcategoryId] = useState(0)

    const [showOption] = useState(true)

    const showOptionObject = {name: '', description: '', price: 0, min: 0, max: 0}
    const [optionType, setOptionType] = useState([showOptionObject])

    useEffect(() => {
        if (formInitialState && formInitialState.options) {
            setOptionType([...formInitialState.options])
        }
        if (formInitialState && formInitialState.subCategory && !isObjEmpty(formInitialState.subCategory)) {
            setSubcategoryId(formInitialState.subCategory.id)
        }
    }, [isEdit])
    const removeOption = (index) => {
        const newArray = [...optionType]
        newArray.splice(index, 1)
        setOptionType(newArray)
    }
    const addOption = () => {
        const newArray = [...optionType, showOptionObject]
        setOptionType(newArray)
    }
    const onValueChange = (index, name, event) => {
        const newArray = optionType.map((option, i) => {
            if (i === index) {
                option[name] = event.target.value
            }
            return option
        })
        setOptionType(newArray)
    }

    // ** local States
    const [modalTitle, setModalTitle] = useState('Add Product')
    const [edit, setEdit] = useState(false)
    const [formState, setFormState] = useState({})
    const [isModal, setModal] = useState(false)
    const [isModalLoading, setModalLoading] = useState(false)
    const [formData, setFormData] = useState([])

    // ** schema for validations
    const [schema, setSchema] = useState(Joi.object({
        name: Joi.string().required().label("Name")
    }))


    // ** Function to handle filter
    const toggle = () => {
        if (isModal) setEdit(false)
        setModal(!isModal)
        setFormState({...formInitialState})
        setOptionType([showOptionObject])
        if (isModalLoading) setModalLoading(false)
    }

    // custom hooks
    useLoadData(isSuccess, loadGenralProducts, isModal, toggle, currentPage, pageSize, searchValue)
    useEdit(isEdit, setModalLoading, setFormState, formInitialState, setEdit, setIsGenralProductEdit, setGenralProduct, {
        name: '',
        description: '',
        wholePrice: '',
        discount: '',
        quantity: '',
        taxAmount: '',
        taxPercentage: '',
        generalProductIngredients: [],
        optionType: {},
        category: {}
    })
    useModalError(isError, setModalLoading, setIsGenralProductError)
    const addClick = () => {
        setFormData([
            {type: FieldTypes.Text, label: 'Name', placeholder: 'Enter Product Name', name: 'name', isRequired: true, fieldGroupClasses: 'col-6'},
            {type: FieldTypes.Text, label: 'Description', placeholder: 'Enter Description', name: 'description', isRequired: false, fieldGroupClasses: 'col-6'},
            {type: FieldTypes.Number, label: 'Whole Price', placeholder: 'Enter Whole Price', name: 'wholePrice', isRequired: false, fieldGroupClasses: 'col-6'},
            {type: FieldTypes.Number, label: 'Discount', placeholder: 'Enter Discount', name: 'discount', isRequired: false, fieldGroupClasses: 'col-6'},
            {type: FieldTypes.Number, label: 'Quantity', placeholder: 'Enter Quantity', name: 'quantity', isRequired: false, fieldGroupClasses: 'col-6'},
            {type: FieldTypes.Number, label: 'Tax Amount', placeholder: 'Enter Tax Amount', name: 'taxAmount', isRequired: false, fieldGroupClasses: 'col-6'},
            {type: FieldTypes.Number, label: 'Tax Percentage', placeholder: 'Enter Percentage', name: 'taxPercentage', isRequired: false, fieldGroupClasses: 'col-6'},
            {type: FieldTypes.File, label: 'Image', placeholder: 'Enter Attachment', name: 'image', isRequired: false, fieldGroupClasses: 'col-6'},
            {type: FieldTypes.Select, label: 'Ingredients', placeholder: 'Select ingredients', name: 'generalProductIngredients', isRequired: false, fieldGroupClasses: 'col-12', loadOptions: Ingredient, isAsyncSelect: true, isMulti: true},
            {type:FieldTypes.Select, label: 'OptionType', placeholder: 'Select option type', name:'optionType', isRequired:false, fieldGroupClasses: 'col-6', loadOptions:options, isAsyncSelect: true, isMulti:false},
            {type: FieldTypes.Select, label: 'Category', placeholder: 'Select Category', name: 'category', isRequired: false, fieldGroupClasses: 'col-6', loadOptions: categories, isAsyncSelect: true, isMulti: false}
        ])
        setModalTitle('Add Product')
        toggle()
    }

    const editClick = (id) => {
        setFormData([
            {type: FieldTypes.Text, label: 'Name', placeholder: 'Enter Product Name', name: 'name', isRequired: true, fieldGroupClasses: 'col-6'},
            {type: FieldTypes.Text, label: 'Description', placeholder: 'Enter Description', name: 'description', isRequired: false, fieldGroupClasses: 'col-6'},
            {type: FieldTypes.Number, label: 'Whole Price', placeholder: 'Enter Whole Price', name: 'wholePrice', isRequired: false, fieldGroupClasses: 'col-6'},
            {type: FieldTypes.Number, label: 'Discount', placeholder: 'Enter Discount', name: 'discount', isRequired: false, fieldGroupClasses: 'col-6'},
            {type: FieldTypes.Number, label: 'Quantity', placeholder: 'Enter Quantity', name: 'quantity', isRequired: false, fieldGroupClasses: 'col-6'},
            {type: FieldTypes.Number, label: 'Tax Amount', placeholder: 'Enter Tax Amount', name: 'taxAmount', isRequired: false, fieldGroupClasses: 'col-6'},
            {type: FieldTypes.Number, label: 'Tax Percentage', placeholder: 'Enter Percentage', name: 'taxPercentage', isRequired: false, fieldGroupClasses: 'col-6'},
            {type: FieldTypes.Select, label: 'Ingredients', placeholder: 'Select ingredients', name: 'generalProductIngredients', isRequired: false, fieldGroupClasses: 'col-12', loadOptions: Ingredient, isAsyncSelect: true, isMulti: true},
            {type:FieldTypes.Select, label: 'OptionType', placeholder: 'Select option type', name:'optionType', isRequired:false, fieldGroupClasses: 'col-6', loadOptions:options, isAsyncSelect: true, isMulti:false},
            {type: FieldTypes.Select, label: 'Category', placeholder: 'Select Category', name: 'category', isRequired: false, fieldGroupClasses: 'col-6', loadOptions: categories, isAsyncSelect: true, isMulti: false}
        ])
        setSchema(Joi.object({
            name: Joi.string().required().label("Name")
        }))
        toggle()
        dispatch(getGenralProduct(id, true))
        setModalTitle('Edit Product')
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
                dispatch(deleteGenralProduct(id))
            }
        })
    }

    const detailOptClick = (id, e) => {
        e.preventDefault()
        props.history.push(`/genralProductsDetail/${id}`)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const ingredients = formState.generalProductIngredients?.map(i => {
            return {ingredientId: i.value}
        })
        const finalData = {...formState, subCategoryId: subcategoryId, categoryId: formState.category?.value, optionsString: JSON.stringify(optionType), optionType: formState.optionType?.value, generalProductIngredientsString: JSON.stringify(ingredients)}

        const isError = formModalRef.current.validate(finalData)
        if (isError) return

        console.log("Final Data", finalData)

        // call api
        setModalLoading(true)
        edit ? dispatch(updateGenralProduct(finalData)) : dispatch(addGenralProduct(finalData))
    }

    const handleFilter = e => {
        console.log('e.keyCode', e.keyCode)
        const value = e.target.value
        if (e.keyCode === 13) {
            dispatch(loadGenralProducts(currentPage + 1, pageSize, value))
        }
        setSearchValue(value)
    }

    // ** Function to handle Pagination
    const handlePagination = page => {
        dispatch(loadGenralProducts(page.selected + 1, pageSize, searchValue))
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
            name: 'WholePrice',
            selector: (row) => row.wholePrice,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Discount',
            selector: (row) => row.discount,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Quantity',
            selector: (row) => row.quantity,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'TaxAmount',
            selector: (row) => row.taxAmount,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'TaxPercentage',
            selector: (row) => row.taxPercentage,
            sortable: true,
            minWidth: '50px'
        },
        /*{
            name: 'Image',
            selector: (row) => row.image,
            sortable: true,
            minWidth: '50px'
        },*/
        {
            name: 'Actions',
            allowOverflow: true,
            cell: row => {
                return (
                    <div className='d-flex'>
                        <UncontrolledDropdown>
                            <DropdownToggle className='pe-1' tag='span'>
                                <MoreVertical size={15}/>
                            </DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem tag='a' href='/' className='w-100'
                                              onClick={e => detailOptClick(row.id, e)}>
                                    <FileText size={15}/>
                                    <span className='align-middle ms-50'>Details</span>
                                </DropdownItem>
                                <DropdownItem tag='a' href='/' className='w-100' onClick={e => deleteClick(row.id, e)}>
                                    <Trash size={15}/>
                                    <span className='align-middle ms-50'>Delete</span>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <span className='cursor-pointer' onClick={() => {
                            editClick(row.id)
                        }}><Edit size={15}/></span>
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
        } else {
            return productList.slice(0, pageSize)
        }
    }

    return (
        <Fragment>
            <UILoader blocking={isLoading}>
                <Card>
                    <CardHeader
                        className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
                        <div>
                            <CardTitle tag='h4'>Genral Products</CardTitle>
                            <h6>Friday June 10, 2022, 08:10 AM</h6>
                        </div>
                        <Button.Ripple bssize='sm' color='primary' onClick={(e) => addClick(e)}>Add a new Genral
                            Product</Button.Ripple>
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
                       children={<Child
                                subcategoryId={subcategoryId}
                                setSubcategoryId={setSubcategoryId}
                                showOption={showOption}
                                removeOption={removeOption}
                                addOption={addOption}
                                onValueChange={onValueChange}
                                options={optionType}
                                categoryId = {formState && formState.category && !isObjEmpty(formState.category) ? formState.category.value : null}
                                optionType={formState.optionsType?.value}
                            />}
                        />

        </Fragment>
    )
}

export default GenralProducts
