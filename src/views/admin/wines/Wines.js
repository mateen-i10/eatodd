// ** React Imports
import React, {Fragment, useRef, useState, useEffect} from 'react'

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
import {setIsEdit, setIswineError, setwine} from "../../../redux/wines/reducer"
import FormModal from "../../../components/FormModal"
import {FieldTypes} from "../../../utility/enums/FieldType"
import '@styles/react/libs/flatpickr/flatpickr.scss'
// import Datetime from "react-datetime"

// my changes
import {deleteWine, loadWines, getWine, addWine, updateWine} from "../../../redux/wines/actions"
import Child from '../../admin/product/ProductFormChild'
import {isObjEmpty, loadOptions} from "../../../utility/Utils"

const Wines = (props) => {

    const winesList = useSelector(state => state.wines.list)
    const formInitialState = useSelector(state => state.wines.object)
    const miscData = useSelector(state => state.wines.miscData)
    const isEdit = useSelector(state => state.wines.isEdit)
    const isLoading = useSelector(state => state.wines.isLoading)
    const isError = useSelector(state => state.wines.isError)
    const isSuccess = useSelector(state => state.wines.isSuccess)
    const dispatch = useDispatch()

    // ** refs
    const formModalRef = useRef(null)
    const [subcategoryId, setSubcategoryId] = useState(0)
    const [currentPage, setCurrentPage] = useState(miscData && miscData.pageIndex ? miscData.pageIndex : 1)
    const [pageSize] = useState(10)
    const [searchValue, setSearchValue] = useState('')

    const categories = async (input) => {
        return loadOptions('category', input, 1, 12)
    }

    const generalProduct = async (input) => {
        return loadOptions('GeneralProduct', input, 1, 12)
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

    // ** local States
    const [modalTitle, setModalTitle] = useState('Add Product')

    const [commonFields] = useState([
        {type:FieldTypes.Text, label: 'Name', placeholder: 'Enter Product Name', name:'name', isRequired:false, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Text, label: 'Description', placeholder: 'Enter Description', name:'description', isRequired:false, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Number, label: 'WholePrice', placeholder: 'Enter WholePrice', name:'wholePrice', isRequired:false, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Number, label: 'Discount', placeholder: 'Enter Discount', name:'discount', isRequired:false, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Number, label: 'Quantity', placeholder: 'Enter Quantity', name:'quantity', isRequired:false, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Number, label: 'TaxAmount', placeholder: 'Enter TaxAmount', name:'taxAmount', isRequired:false, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Number, label: 'TaxPercentage', placeholder: 'Enter TaxPercentage', name:'taxPercentage', isRequired:false, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Select, label: 'Restaurant', placeholder: 'Select Restaurant', name:'restaurant', isRequired:false, fieldGroupClasses: 'col-6', loadOptions:Restaurant, isAsyncSelect: true, isMulti:false},
        {type:FieldTypes.Select, label: 'Ingredients', placeholder: 'Select ingredients', name:'productIngredients', isRequired:false, fieldGroupClasses: 'col-6', loadOptions:Ingredient, isAsyncSelect: true, isMulti:true},
        {type:FieldTypes.Select, label: 'OptionType', placeholder: 'Select option type', name:'optionType', isRequired:false, fieldGroupClasses: 'col-6', loadOptions:options, isAsyncSelect: true, isMulti:false},
        {type:FieldTypes.Select, label: 'Category', placeholder: 'Select category', name:'category', isRequired:false, fieldGroupClasses: 'col-6', loadOptions:categories, isAsyncSelect: true, isMulti:false}
    ])

    const [edit, setEdit] = useState(false)
    const [formState, setFormState] = useState({})
    const [isModal, setModal] = useState(false)
    const [isModalLoading,  setModalLoading] = useState(false)
    const [formData, setFormData] = useState([{type:FieldTypes.Select, label: 'Select Product', placeholder: 'Select Product', name:'generalProduct', isRequired:false, fieldGroupClasses: 'col-6', loadOptions:generalProduct, isAsyncSelect: true, isMulti:false}])
    const [formFeilds, setFormFeilds] = useState(0)
    const [showOption, setShowOption] = useState(true)

    // my work
    const showOptionObject = {name: '', description: '', price: 0, min: 0, max: 0}
    const [optionType, setOptionType] = useState([showOptionObject])
    // my work ends

    const AddNewData = () => {
        setFormData([
            ...commonFields,
            {type:FieldTypes.File, label: 'Image', placeholder: 'image', name:'image', isRequired:false, fieldGroupClasses: 'col-6'}
        ])

        setFormFeilds(1)
        setShowOption(true)
    }

    const AddFromExistingData = () => {
        setFormData([
            {type:FieldTypes.Select, label: 'Select Product', placeholder: 'Select Product', name:'generalProduct', isRequired:false, fieldGroupClasses: 'col-6', loadOptions:generalProduct, isAsyncSelect: true, isMulti:false},
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

    // ** schema for validations
    const schema = Joi.object({
        //name: Joi.string().required().label("Name")
    })

    // ** Function to handle filter
    const toggle = () => {
        if (isModal) setEdit(false)
        setModal(!isModal)
        setFormState({...formInitialState})
        setOptionType([showOptionObject])
        if (isModalLoading) setModalLoading(false)
    }

    // custom hooks
    useLoadData(isSuccess, loadWines, isModal, toggle, currentPage, pageSize, searchValue)
    useEdit(isEdit, setModalLoading, setFormState, formInitialState, setEdit, setIsEdit, setwine, {
        name: '',
        description:'',
        wholePrice: '',
        discount: '',
        optionType: [],
        taxAmount: '',
        taxPercentage: '',
        restaurant: [],
        category: [],
        isDrink: false,
        isWine: true

    })
    useModalError(isError, setModalLoading, setIswineError)

    const addClick = () => {
        setModalTitle('Add Wines')
        toggle()
        return AddFromExistingData()
    }

    const editClick = (id) => {
        console.log("edit", id)
        toggle()
        dispatch(getWine(id, true))
        setModalTitle('Edit Wines')
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
                dispatch(deleteWine(id))
            }
        })
    }

    const detailOptClick = (id, e) => {
        e.preventDefault()
        props.history.push(`/WineDetail/${id}`)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let finalData = {}
        if (formFeilds === 1 || formFeilds === 3) {
            const Ingredient = formState.productIngredients?.map(i => {
                return {ingredientId: i.value}
            })
            finalData  = {...formState, subCategoryId: subcategoryId, restaurantId: formState.restaurant?.value, optionsString: JSON.stringify(optionType), optionType: formState.optionType?.value, categoryId: formState.category?.value, productIngredientsString: JSON.stringify(Ingredient)}
            delete finalData.generalProductId
        } else if (formFeilds === 0) {
            finalData = {generalProductId: formState.generalProduct?.value, restaurantId: formState.restaurant?.value}
        }
        console.log(finalData, "lets see")
        const isError = formModalRef.current.validate(formState)
        if (isError) return

        delete finalData.modifiedById
        delete finalData.modifiedDate

        // call api
        setModalLoading(true)
        edit ? dispatch(updateWine(finalData)) : dispatch(addWine(finalData))
    }

    const handleFilter = e => {
        console.log('e.keyCode', e.keyCode)
        const value = e.target.value
        if (e.keyCode === 13) {
            dispatch(loadWines(currentPage + 1, pageSize, value))
        }
        setSearchValue(value)
    }

    // ** Function to handle Pagination
    const handlePagination = page => {
        dispatch(loadWines(page.selected + 1, pageSize, searchValue))
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
        if (winesList.length > 0) {
            return winesList
        }  else {
            return winesList.slice(0, pageSize)
        }
    }

    return (
        <Fragment>
            <UILoader blocking={isLoading}>
                <Card>
                    <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
                        <div>
                            <CardTitle tag='h4'>Wines</CardTitle>
                            <h6>Friday June 10, 2022, 08:10 AM</h6>
                        </div>
                        <Button.Ripple bssize='sm' color='primary' onClick={(e) => addClick(e)}>Add a new Wines</Button.Ripple>
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
                       />}
            />

        </Fragment>
    )
}

export default Wines