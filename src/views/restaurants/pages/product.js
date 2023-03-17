// ** React Imports
import React, {Fragment, useEffect, useLayoutEffect, useState, useRef} from 'react'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import {
    ArrowLeftCircle,
    ChevronDown,
    Edit,
    FileText,
    MoreVertical, Search,
    Trash
} from 'react-feather'
import {
    Card,
    CardHeader,
    CardTitle,
    Button,
    Input,
    Row,
    Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledTooltip
} from 'reactstrap'
import {useDispatch, useSelector} from "react-redux"
import UILoader from "../../../@core/components/ui-loader"
import '@styles/react/libs/flatpickr/flatpickr.scss'
import {loadProductsByRestaurant} from "../../../redux/restaurant/actions"
import {useHistory, useParams} from "react-router-dom"
import httpService, {baseURL} from "../../../utility/http"
import {toast} from "react-toastify"
import {isObjEmpty, loadOptions} from "../../../utility/Utils"
import {FieldTypes} from "../../../utility/enums/FieldType"
import useLoadData from "../../../utility/customHooks/useLoadData"
import {
    addproduct,
    deleteproduct,
    getproduct,
    // getProductByrest,
    loadproducts,
    updateproduct
} from "../../../redux/products/actions"
import useEdit from "../../../utility/customHooks/useEdit"
import {setIsEdit, setIsproductError, setproduct} from "../../../redux/products/reducer"
import useModalError from "../../../utility/customHooks/useModalError"
import Swal from "sweetalert2"
import Joi from "joi-browser"
import AsyncSelect from "react-select/async"
import SubcategoryDropdown from "../../admin/Components/SubcategoryDropdown"
import Child from "../../admin/product/ProductFormChild"
import FormModal from "../../../components/FormModal"


const Products = (props) => {

    const [catId, setCatId] = useState(0)

    const productsByRestaurantList = useSelector(state => state.product.list)

    const data = useSelector(state => state.product.dataaa)

    console.log(data, "lets see if data updates on search")
    // const miscData =

    const [miscData, setMiscData] = useState(useSelector(state => state.product.miscData))
    const formInitialState = useSelector(state => state.product.object)
    const isEdit = useSelector(state => state.product.isEdit)
    const isLoading = useSelector(state => state.product.isLoading)
    const isError = useSelector(state => state.product.isError)
    const isSuccess = useSelector(state => state.product.isSuccess)
    const dispatch = useDispatch()

    // ** refs
    const formModalRef = useRef(null)
    const [subcategoryId, setSubcategoryId] = useState(0)
    const [currentPage, setCurrentPage] = useState(miscData && miscData.pageIndex ? miscData.pageIndex : 1)
    const [pageSize] = useState(10)
    const [searchValue] = useState('')

    const [dispData, setDispData] = useState([])

    //for restaurant id
    //const {state} = useLocation()
    const { id } = useParams()
    console.log('stateId', id)

    const history = useHistory()

    useEffect(() => {
        dispatch(loadProductsByRestaurant(currentPage, pageSize, searchValue, id))
    }, [id])

    //Product Add Working Start
    const generalProducts = (input) => {
        return httpService._get(`${baseURL}GeneralProduct?pageIndex=1&&pageSize=12&&searchQuery=${input}&&refId=${subcategoryId}`)
            .then(response => {
                console.log(response, "gp response")
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

    useLayoutEffect(() => {
    }, [dispData])

    const letsSee = (id, subCatId) => {
        return httpService._get(`${baseURL}Product/ProductByRestaurant?pageIndex=${currentPage}&&pageSize=${pageSize}&&RestaurantId=${id}&&SubCategoryId=${subCatId}`)
            .then(response => {
                console.log(response.data, "letss see")
                setMiscData(response.data.miscData)
                setDispData(response.data.data.products)
                // success case
                if (response.status === 200 && response.data.statusCode === 200) {
                    return response.data.data.products.map(d => {
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
        { value: 'Normal', label: 'Normal' }
    ]

    const [modalTitle, setModalTitle] = useState('Add Product')

    const [schema] = useState({})

    const [commonFields] = useState([
        {type:FieldTypes.Text, label: 'Name', placeholder: 'Enter Product Name', name:'name', isRequired:true, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Text, label: 'Description', placeholder: 'Enter Description', name:'description', isRequired:false, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Number, label: 'WholePrice', placeholder: 'Enter WholePrice', name:'wholePrice', isRequired:true, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Number, label: 'Discount', placeholder: 'Enter Discount', name:'discount', isRequired:false, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Number, label: 'Quantity', placeholder: 'Enter Quantity', name:'quantity', isRequired:false, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Number, label: 'TaxAmount', placeholder: 'Enter TaxAmount', name:'taxAmount', isRequired:false, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Number, label: 'TaxPercentage', placeholder: 'Enter TaxPercentage', name:'taxPercentage', isRequired:false, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Select, label: 'Restaurant', placeholder: 'Select Restaurant', name:'restaurant', isRequired:true, fieldGroupClasses: 'col-6', loadOptions:Restaurant, isAsyncSelect: true, isMulti:false},
        {type:FieldTypes.Select, label: 'Ingredients', placeholder: 'Select ingredients', name:'productIngredients', isRequired:false, fieldGroupClasses: 'col-6', loadOptions:Ingredient, isAsyncSelect: true, isMulti:true},
        {type:FieldTypes.Select, label: 'OptionType', placeholder: 'Select option type', name:'optionType', isRequired:true, fieldGroupClasses: 'col-6', loadOptions:options, isAsyncSelect: true, isMulti:false},
        {type:FieldTypes.Select, label: 'Category', placeholder: 'Select category', name:'category', isRequired:true, fieldGroupClasses: 'col-6', loadOptions:categories, isAsyncSelect: true, isMulti:false},
        {type:FieldTypes.Select, label: 'Flavour', placeholder: 'Select Flavour', name:'flavour', isRequired:false, fieldGroupClasses: 'col-6', loadOptions:Flavour, isAsyncSelect: true, isMulti:false},
        {type:FieldTypes.SwitchButton, label: 'Drink', name:'isDrink', isRequired:false, fieldGroupClasses: 'col-6 mt-2'}
    ])

    const [edit, setEdit] = useState(false)
    const [isSubmit, setSubmit] = useState(false)
    const [formState, setFormState] = useState({})
    const [isModal, setModal] = useState(false)
    const [isModalLoading,  setModalLoading] = useState(false)
    const [formData, setFormData] = useState([{type:FieldTypes.Select, label: 'Select Product', placeholder: 'Select Product', name:'generalProduct', isRequired:false, fieldGroupClasses: 'col-6', loadOptions:generalProducts, isAsyncSelect: true, isMulti:false}])
    const [formFeilds, setFormFeilds] = useState(0)
    const [showOption, setShowOption] = useState(true)

    const showOptionObject = {name: '', description: '', price: 0, min: 0, max: 0}
    const [optionType, setOptionType] = useState([showOptionObject])

    const AddNewData = () => {
        setFormData([
            ...commonFields,
            {
                type:FieldTypes.File,
                label: 'Image',
                placeholder: 'image',
                name:'image',
                isRequired:false,
                fieldGroupClasses: 'col-6'}
        ])
        setFormFeilds(1)
        setShowOption(true)
    }

    const AddFromExistingData = () => {
        setFormData([
            {type:FieldTypes.Select, label: 'Select Product', placeholder: 'Select Product', name:'generalProduct', isRequired:false, fieldGroupClasses: 'col-6', loadOptions:generalProducts, isAsyncSelect: true, isMulti:false},
            {type:FieldTypes.Select, label: 'Select Restaurant', placeholder: 'Select Product', name:'restaurant', isRequired:false, fieldGroupClasses: 'col-6', loadOptions:Restaurant, isAsyncSelect: true, isMulti:false}
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

    const toggle = () => {
        if (isModal) setEdit(false)
        setModal(!isModal)
        setFormState({...formInitialState})
        setOptionType([showOptionObject])
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
        isSpicy: false
    })
    useModalError(isError, setModalLoading, setIsproductError)

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
        //setFormFeilds(3)
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

    const detailOptClick = (id, e) => {
        console.log('idP', id)
        e.preventDefault()
        props.history.push(`/productsDetail/${id}`)
    }

    const handleSubmit = (event) => {
        console.log('event', event)
        setSubmit(true)
        //event.preventDefault()

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
            finalData  = {...formState, flavour: formState.flavour?.value, subCategoryId: subcategoryId, restaurantId: formState.restaurant?.value, optionsString: JSON.stringify(optionType), optionType: formState.optionType?.value, categoryId: formState.category?.value, productIngredientsString: JSON.stringify(Ingredient)}
            delete finalData.generalProductId
        } else if (formFeilds === 0) {
            finalSchema = Joi.object({
                generalProduct: Joi.required().label("General product"),
                restaurant: Joi.required().label("Restaurant")
            })

            finalData = {generalProductId: formState.generalProduct?.value, restaurantId: formState.restaurant?.value}
        }

        const keys = Object.keys(finalData)
        console.log('key', keys)
        for (const key of keys) {
            // console.log('finalData[key]', finalData[key])
            if (finalData[key] === undefined || finalData[key] === null) delete finalData[key]
        }

        const isError = formModalRef.current.validateWithSchema(formState, finalSchema)
        if (isError) return

        // call api
        setModalLoading(true)
        edit ? dispatch(updateproduct(finalData)) : dispatch(addproduct(finalData))
    }

    const callFunc = () => {
         const refId = subcategoryId

        // if (refId !== 0) dispatch(loadproducts(currentPage, pageSize, "", refId))
        // if (refId !== 0) dispatch(getProductByrest(id, refId))
        letsSee(id, refId)
        // else console.log('please select a value to search for')
    }
    //Product Add Working End

    console.log(dispData, "coming from the function")

    //Products by Restaurant Search
    // const handleFilter = e => {
    //     // console.log('e.keyCode', e.keyCode)
    //     // const value = e.target.value
    //     // setSearchValue(value)
    //     // console.log(value, "lets see the value")
    //     if (e.key === 'Enter') {
    //         console.log("about to dispatch")
    //         dispatch(getProductByrest(currentPage, pageSize, searchValue, id))
    //     }
    // }

    // ** Function to handle Pagination
    const handlePagination = page => {
        // dispatch(loadproducts(page.selected + 1, pageSize, searchValue))
        dispatch(loadProductsByRestaurant(page.selected + 1, pageSize, searchValue, id))
        setCurrentPage(page.selected + 1)
    }

    const goPackagesPage = () => {
        history.push('/restaurant')
    }

    const columns = [
        {
            name: 'Name',
            selector: (row) => row.name,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Whole Price',
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
        if (dispData.length !== 0) {
            return dispData
        } else if (productsByRestaurantList.length > 0) {
            return productsByRestaurantList
        } else {
            return productsByRestaurantList.slice(0, pageSize)
        }
    }

    return (
        <Fragment>
            <UILoader blocking={isLoading}>
                <Card>
                    <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
                        <div>
                            <CardTitle tag='h4'>
                                <span onClick={goPackagesPage} className='cursor-pointer me-1'>
                                    <ArrowLeftCircle size={30} style={{color: "#81be41"}}/>
                                </span>
                                Products by Restaurant
                            </CardTitle>
                            {/*<h6>Friday June 10, 2022, 08:10 AM</h6>*/}
                        </div>
                        <Button.Ripple bssize='sm' color='primary' id='positionLeft' onClick={(e) => addClick(e)}>Add a new Product</Button.Ripple>
                        <UncontrolledTooltip placement='left' target='positionLeft'>
                            To Load General products by Category and Subcategory Please apply the filters below before you open the form.
                        </UncontrolledTooltip>
                    </CardHeader>
                    <Row className='justify-content-end mx-0'>
                        {/*<Col className='mt-1' md='12' sm='12'>*/}
                        {/*    <Input*/}
                        {/*        className='dataTable-filter mb-50'*/}
                        {/*        type='text'*/}
                        {/*        placeholder='Search'*/}
                        {/*        bsSize='sm'*/}
                        {/*        id='search-input'*/}
                        {/*        value={searchValue}*/}
                        {/*        onChange={e => setSearchValue(e.target.value)}*/}
                        {/*        onKeyDown={handleFilter}*/}
                        {/*    />*/}
                        {/*</Col>*/}
                        <Col className='mt-1' md='5' sm='12'>
                            <label>Search by Category <span className='text-danger'>*</span></label>
                            <AsyncSelect
                                loadOptions={categories}
                                defaultOptions
                                isLoading={true}
                                onChange={e => setCatId(e.value)}
                            />
                        </Col>
                        <Col className='mt-1' md='5' sm='12'>
                            {catId !== 0 ? <SubcategoryDropdown
                                categoryId={catId}
                                subcategoryId={subcategoryId}
                                setSubcategory={setSubcategoryId}
                                isFormSubmit={isSubmit}
                            /> : []}
                        </Col>
                        <Col md='2' sm='12' style={{marginTop:'32px'}}>
                            {catId !== 0 ? <Button style={{borderRadius: '50px', padding:'10px'}} type="button" color='primary' onClick={() => callFunc()}><Search size={18}/></Button> : []}
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
        </Fragment>
    )
}

export default Products