// ** React Imports
import React, {Fragment, useRef, useState, useEffect} from 'react'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import {ChevronDown, Edit, FileText, MoreVertical, Trash, Search} from 'react-feather'
import {
    Card,
    CardHeader,
    CardTitle,
    Button,
    Input,
    Row,
    Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledTooltip, Badge
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
import {
    deleteproduct,
    loadproducts,
    getproduct,
    addproduct,
    updateproduct
} from "../../../redux/products/actions"
import Child from './ProductFormChild'
import {isObjEmpty, loadOptions} from "../../../utility/Utils"
import AsyncSelect from "react-select/async"

import SubcategoryDropdown from "../Components/SubcategoryDropdown"
import httpService, {baseURL} from "../../../utility/http"
import {toast} from "react-toastify"
import AssignItems from "./AssignItems"
import {useHistory, useLocation} from "react-router-dom"
import ProductImage from "../../home/components/product/ProductImage"
// import AssignGeneralRecommendation from "./AssignGeneralRecommendation"
import '../style.css'
const getQueryParams = (search) => {
    return search ? (/^[?#]/.test(search) ? search.slice(1) : search)
        .split("&")
        .reduce((params, param) => {
            const [key, value] = param.split("=")
            params[key] = value ? decodeURIComponent(value.replace(/\+/g, " ")) : ""
            return params
        }, {}) : {}
}
const Product = (props) => {

    const history = useHistory()
    const location = useLocation()

    const queryParams = getQueryParams(location.search)
    const [subcategoryId, setSubcategoryId] = useState(
        queryParams.subcategoryId ? parseInt(queryParams.subcategoryId, 10) : 0
    )
    const [catId, setCatId] = useState(queryParams.categoryId ? parseInt(queryParams.categoryId, 10) : 0)
    const productList = useSelector(state => state.product.list)
    const formInitialState = useSelector(state => state.product.object)
    const miscData = useSelector(state => state.product.miscData)
    const isEdit = useSelector(state => state.product.isEdit)
    const isLoading = useSelector(state => state.product.isLoading)
    const isError = useSelector(state => state.product.isError)
    const isSuccess = useSelector(state => state.product.isSuccess)
    const dispatch = useDispatch()

    console.log('productList', productList)

    // ** refs
    const formModalRef = useRef(null)
    const [currentPage, setCurrentPage] = useState(miscData && miscData.pageIndex ? miscData.pageIndex : 1)
    const [pageSize] = useState(10)
    const [searchValue, setSearchValue] = useState('')

    const [d, setD] = useState()

    const [modalIsOpen, setIsOpen] = useState(false)


    const handleCloseModal = (event) => {
        console.log(event)
        setIsOpen(false)
    }

    /*const [recommendedModalIsOpen, setRecommendedModalIsOpen] = useState(false)
    const openRecommendedFromParent = () => {
        setRecommendedModalIsOpen(true)
    }*/
    /*const handleRecommendedCloseModal = (event) => {
        console.log(event)
        setRecommendedModalIsOpen(false)
    }*/

    const generalProducts = (input) => {
        return httpService._get(`${baseURL}GeneralProduct?pageIndex=1&&pageSize=12&&searchQuery=${input}&&refId=${subcategoryId}`)
            .then(response => {
                console.log(response, "gp response")
                // success case
                if (response.status === 200 && response.data.statusCode === 200) {
                    return response.data.data.map(d =>  {
                        setD(response.data.data)
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

    const categories = async (input) => {
        return loadOptions('category', input, 1, 12)
    }

    const Restaurant = async (input) => {
        return loadOptions('Restaurant', input, 1, 12)
    }

    const Ingredient = async (input) => {
        return loadOptions('Ingredient', input, 1, 12)
    }

    const options = async () => [
        { value: 1, label: 'Default' },
        { value: 2, label: 'Numeric' }
    ]

    const Flavour = async () => [
        { value: 'Spicy', label: 'Spicy' },
        { value: 'Normal', label: 'Normal' },
        { value: 'Contains Almonds', label: 'Contains Almonds' },
        { value: 'Vegan', label: 'Vegan' },
        { value: 'Gluten free', label: 'Gluten free' },
        { value: 'Vegetarian', label: 'Vegetarian' }
    ]

    // ** local States
    const [modalTitle, setModalTitle] = useState('Add Product')

    const [schema] = useState({})

    const [commonFields] = useState([
        {type:FieldTypes.Text, label: 'Name', placeholder: 'Enter Product Name', name:'name', isRequired:true, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Text, label: 'Description', placeholder: 'Enter Description', name:'description', isRequired:false, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Number, label: 'WholePrice', placeholder: 'Enter WholePrice', name:'wholePrice', isRequired:true, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Number, label: 'Discount', placeholder: 'Enter Discount', name:'discount', isRequired:false, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Number, label: 'Quantity', placeholder: 'Enter Quantity', name:'quantity', isRequired:true, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Number, label: 'TaxAmount', placeholder: 'Enter TaxAmount', name:'taxAmount', isRequired:false, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Number, label: 'TaxPercentage', placeholder: 'Enter TaxPercentage', name:'taxPercentage', isRequired:false, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Select, label: 'Restaurant', placeholder: 'Select Restaurant', name:'restaurant', isRequired:true, fieldGroupClasses: 'col-6', loadOptions:Restaurant, isAsyncSelect: true, isMulti:false},
        {type:FieldTypes.Select, label: 'Ingredients', placeholder: 'Select ingredients', name:'productIngredients', isRequired:false, fieldGroupClasses: 'col-6', loadOptions:Ingredient, isAsyncSelect: true, isMulti:true},
        {type:FieldTypes.Select, label: 'OptionType', placeholder: 'Select option type', name:'optionType', isRequired:true, fieldGroupClasses: 'col-6', loadOptions:options, isAsyncSelect: true, isMulti:false},
        {type:FieldTypes.Select, label: 'Category', placeholder: 'Select category', name:'category', isRequired:true, fieldGroupClasses: 'col-6', loadOptions:categories, isAsyncSelect: true, isMulti:false},
        {type:FieldTypes.Select, label: 'Flavour', placeholder: 'Select Flavour', name:'flavour', isRequired:false, fieldGroupClasses: 'col-6', loadOptions:Flavour, isAsyncSelect: true, isMulti:true},
        {type:FieldTypes.SwitchButton, label: 'Is Drink', name:'isDrink', isRequired:false, fieldGroupClasses: 'col-6 mt-2'},
        {type:FieldTypes.SwitchButton, label: 'Is Blank', name:'isBlank', isRequired:false, fieldGroupClasses: 'col-6 mt-2'},
        {type:FieldTypes.SwitchButton, label: 'Is Extra', name:'isExtra', isRequired:false, fieldGroupClasses: 'col-6 mt-2'}
    ])

    const [edit, setEdit] = useState(false)
    const [isSubmit, setSubmit] = useState(false)
    const [formState, setFormState] = useState({})
    const [isModal, setModal] = useState(false)
    const [isModalLoading,  setModalLoading] = useState(false)
    const [formData, setFormData] = useState([{type:FieldTypes.Select, label: 'Select Product', placeholder: 'Select Product', name:'generalProduct', isRequired:false, fieldGroupClasses: 'col-6', loadOptions:generalProducts, isAsyncSelect: true, isMulti:false}])
    const [formFeilds, setFormFeilds] = useState(0)
    const [showOption, setShowOption] = useState(true)

    const [restaurantProduct, setRestaurantProduct] = useState(0)

    // my work
    const showOptionObject = {name: '', description: '', price: 0, min: 0, max: 0}
    const [optionType, setOptionType] = useState([])
    // my work ends
    const AddNewData = () => {
            setFormData([
                ...commonFields,
                {type:FieldTypes.File, label: 'Image', placeholder: 'image', name:'image', isRequired:false, fieldGroupClasses: 'col-6'}
            ])
        setFormFeilds(1)
        setShowOption(true)
    }

    useEffect(() => {
        if (formState.category?.label === 'Wine' && formFeilds === 3) {
            setFormData([
                ...commonFields,
                {type:FieldTypes.Number, label: 'Retail Price', placeholder: 'Enter Price', name:'retailPrice', isRequired:true, fieldGroupClasses: 'col-6'}
            ])
        } else if (formState.category?.label === 'Wine' && formFeilds === 1) {
            setFormData([
                ...commonFields,
                {type:FieldTypes.File, label: 'Image', placeholder: 'image', name:'image', isRequired:false, fieldGroupClasses: 'col-6'},
                {type:FieldTypes.Number, label: 'Retail Price', placeholder: 'Enter Price', name:'retailPrice', isRequired:true, fieldGroupClasses: 'col-6'}
            ])

        } else if (formFeilds === 1) {
            setFormData([
                ...commonFields,
                {type:FieldTypes.File, label: 'Image', placeholder: 'image', name:'image', isRequired:false, fieldGroupClasses: 'col-6'}
            ])

        } else {
            setFormData([...commonFields])
        }
        // AddNewData()
    }, [formState.category?.label])

    const AddFromExistingData = () => {
        setFormData([
            {type:FieldTypes.Select, label: 'Select Product', placeholder: 'Select Product', name:'generalProduct', isRequired:false, fieldGroupClasses: 'col-6', loadOptions:generalProducts, isAsyncSelect: true, isMulti:false},
            {type:FieldTypes.Select, label: 'Select Restaurant', placeholder: 'Select Restaurant', name:'restaurant', isRequired:false, fieldGroupClasses: 'col-6', loadOptions:Restaurant, isAsyncSelect: true, isMulti:false}
        ])
        setFormFeilds(0)
        setShowOption(false)
    }

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

    // console.log(formState, "hello")

    // ** Function to handle filter
    const toggle = () => {
        if (isModal) setEdit(false)
        setModal(!isModal)
        setFormState({...formInitialState})
        // setOptionType([showOptionObject])
        if (isModalLoading) setModalLoading(false)
    }

    // custom hooks
    useLoadData(isSuccess, loadproducts, isModal, toggle, currentPage, pageSize, searchValue)
    useEdit(isEdit, setModalLoading, setFormState, formInitialState, setEdit, setIsEdit, setproduct, {
        name: '',
        description:'',
        wholePrice: '',
        discount: '',
        taxAmount: '',
        taxPercentage: '',
        isDrink: false,
        isSpicy: false,
        retailPrice: ''

    })
    useModalError(isError,
        setModalLoading, setIsproductError)

    const addClick = () => {
        setModalTitle('Add Product')
        toggle()
        return AddFromExistingData()
    }
    const editClick = (id) => {
        console.log("edit", id)
        toggle()
        dispatch(getproduct(id, true))
        setModalTitle('Edit Product')
        setEdit(true)
        setFormData([...commonFields])
        setFormFeilds(3)
        setShowOption(true)
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

    const openFromParent = () => {
        setIsOpen(true)
        //toggle()
        //return AddFromExistingData()
    }

    const detailOptClick = (id, e) => {
        e.preventDefault()
        props.history.push(`/productsDetail/${id}`)
    }

    /*const productClick = (id, e) => {
        e.preventDefault()
        dispatch(loadProductsByRestaurant(currentPage, pageSize, searchValue, id))
    }*/

    const handleSubmit = (event) => {
        console.log('subcatId', subcategoryId)
        console.log('formState', formState)
        console.log('the option type wala!!!', optionType)
        setSubmit(true)
        event.preventDefault()

        console.log('lets see the value of :', formFeilds)

        let finalData = {}
        let finalSchema = {}
       if (formFeilds === 1 || formFeilds === 3 || edit === true) {
            finalSchema = Joi.object({
                name: Joi.string().required().label('Name'),
                wholePrice: Joi.number().required().label("WholePrice"),
                quantity: Joi.number().required().label("Quantity"),
                category: Joi.required().label('Category'),
                restaurant: Joi.required().label("Restaurant"),
                optionType: Joi.required().label("OptionType")
            })

           const Ingredient = formState.productIngredients?.map(i => {
               return {ingredientId: i.value}
           })
           finalData  = {...formState, retailPrice: formState.retailPrice, flavour: formState.flavour?.map(f => f?.value).toString(), subCategoryId: subcategoryId, restaurantId: formState.restaurant?.value, optionsString: JSON.stringify(optionType), optionType: formState.optionType?.value, categoryId: formState.category?.value, productIngredientsString: JSON.stringify(Ingredient)}
           delete finalData.generalProductId
       } else if (formFeilds === 0) {
           finalSchema = Joi.object({
               generalProduct: Joi.required().label("General product"),
               restaurant: Joi.required().label("Restaurant")
           })

           finalData = {generalProductId: formState.generalProduct?.value, restaurantId: formState.restaurant?.value, optionType: d[formState.generalProduct?.value]?.optionType}
       }

       const keys = Object.keys(finalData)
        console.log('key', keys)
        for (const key of keys) {
            // console.log('finalData[key]', finalData[key])
            if (finalData[key] === undefined || finalData[key] === null) delete finalData[key]
        }

        console.log(finalData, "lets see")
        console.log(d, "the d")
        console.log(formState, "formState")
        console.log(finalSchema, "finalSchema")

        const isError = formModalRef.current.validateWithSchema(formState, finalSchema)
        console.log(isError, "errors")
         if (isError) return

        // call api
        setModalLoading(true)
        edit ? dispatch(updateproduct(finalData)) : dispatch(addproduct(finalData))
    }

    const handleFilter = e => {
        console.log('e.keyCode', e.keyCode)
        const value = e.target.value
        if (e.keyCode === 13) {
            const refId = subcategoryId
            const restId = restaurantProduct?.value
            dispatch(loadproducts(currentPage, pageSize, value, refId, restId))
        }
        setSearchValue(value)
    }

    // ** Function to handle Pagination
    const handlePagination = page => {
        const refId = subcategoryId
        const restId = restaurantProduct?.value
        dispatch(loadproducts(page.selected + 1, pageSize, searchValue, refId, restId))
        setCurrentPage(page.selected + 1)
    }

    const callFunc = () => {
        const refId = subcategoryId
        const restId = restaurantProduct?.value
        console.log('restId', restId)

        history.push(`${location.pathname}?subcategoryId=${subcategoryId}`)
        dispatch(loadproducts(currentPage, pageSize, "", refId, restId))
        /*if (refId !== 0) {
        } else {
            console.log("Please select a value to search for")
        }*/
    }

    const columns = [
        {
            name: 'Photo',
            sortable: true,
            minWidth: '50px',
            cell: row => (
                <div className='d-flex align-items-center'>
                    <div className="thumbnail ">
                        <ProductImage attachment={row.attachment} styles={{width: "50px", height: "50px", margin: "5px"}}/>
                    </div>
                </div>
            )
        },
        {
            name: 'Name',
            selector: (row) => row.name,
            sortable: true,
            minWidth: '100px'
        }, {
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
            name: 'Square',
            selector: (row) => <Badge className="" color={'light-primary'} pill>{row.squareItemId !== null ? "Mapped" : ''}</Badge>,
            sortable: true,
            minWidth: '100px'
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
                            <CardTitle tag='h4'>Products</CardTitle>
                            {/*<h6>Friday June 10, 2022, 08:10 AM</h6>*/}
                        </div>
                        <Row>
                            <Col className='d-flex justify-content-end'>
                                <Button.Ripple bssize='sm' color='primary' onClick={openFromParent} style={{marginRight:'4px'}}>Assign Items to Product</Button.Ripple>
                                <Button.Ripple bssize='sm' color='primary' id='positionLeft' onClick={(e) => addClick(e)}>Add a new Product</Button.Ripple>
                                <UncontrolledTooltip placement='left' target='positionLeft'>
                                    To Load General products by Category and Subcategory Please apply the filters below before you open the form.
                                </UncontrolledTooltip>
                            </Col>
                        </Row>
                    </CardHeader>
                    <Row className='justify-content-end mx-0'>
                        <Col className='mt-1' md='12' sm='12'>
                            <Input
                                className='dataTable-filter mb-50'
                                type='text'
                                placeholder='Search'
                                id='search-input'
                                value={searchValue}
                                onKeyUp={handleFilter}
                                onChange={handleFilter}
                            />
                        </Col>
                        <Col className='mt-1' md='5' sm='12'>
                            <label>Search by Category <span className='text-danger'>*</span></label>
                            <AsyncSelect
                                loadOptions={categories}
                                defaultOptions
                                isLoading={true}
                                onChange={e => {
                                    setCatId(e.value)
                                    history.push(`${location.pathname}?subcategoryId=${subcategoryId}&categoryId=${e.value}`)
                                }}
                            />
                        </Col>
                        <Col className='mt-1' md='5' sm='12'>
                            <SubcategoryDropdown
                                categoryId={catId}
                                subcategoryId={subcategoryId}
                                setSubcategory={setSubcategoryId}
                                isFormSubmit={isSubmit}
                            />
                        </Col>
                        <Col md='2' sm='12' style={{marginTop:'32px'}}>
                            {catId !== 0 ? <Button style={{borderRadius: '50px', padding:'10px'}} type="button" color='primary' onClick={() => callFunc()}><Search size={18}/></Button> : []}
                        </Col>

                    </Row>
                    <hr />
                    <Row>
                        <Col md={5}>
                            <div className='mb-2 ms-1'>
                                <label>Select Restaurant for Products</label>
                                <AsyncSelect
                                    defaultOptions
                                    value={restaurantProduct}
                                    onChange={e => setRestaurantProduct(e)}
                                    loadOptions={Restaurant}
                                    //onClick={e => productClick(row.id, e)}
                                    closeMenuOnSelect={true}
                                    isMulti = {false}
                                />
                            </div>
                        </Col>
                        <Col md='2' sm='12' style={{marginTop:'20px'}}>
                            {restaurantProduct !== 0 ? <Button style={{borderRadius: '50px', padding:'10px'}} type="button" color='primary' onClick={() => callFunc()}><Search size={18}/></Button> : []}
                        </Col>
                    </Row>

                    <DataTable
                        noHeader
                        pagination
                        paginationServer
                        className='react-dataTable myDataTable'
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
                       children={<Child
                           subcategoryId={subcategoryId}
                           setSubcategoryId={setSubcategoryId}
                           showOption={showOption}
                           AddNewData={AddNewData}
                           removeOption={removeOption}
                           addOption={addOption}
                           onValueChange={onValueChange}
                           options={optionType}
                           formFeilds={formFeilds}
                           AddFromExistingData={AddFromExistingData}
                           categoryId = {formState && formState.category && !isObjEmpty(formState.category) ? formState.category.value : null}
                           optionType={formState.optionType?.value}
                           isFormSubmit={isSubmit}
                       />}
            />

            <AssignItems subcategoryId={subcategoryId} IsModalOpened={modalIsOpen} onCloseModal={handleCloseModal}
            />
           {/* <AssignGeneralRecommendation IsModalOpened={recommendedModalIsOpen}
                         onCloseModal={handleRecommendedCloseModal}
            />*/}
        </Fragment>
    )
}

export default Product
