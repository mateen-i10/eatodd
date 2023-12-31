// ** React Imports
import React, {Fragment, useRef, useState} from 'react'

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
import FormModal from "../../../components/FormModal"
import {FieldTypes} from "../../../utility/enums/FieldType"
import useLoadData from "../../../utility/customHooks/useLoadData"
import useEdit from "../../../utility/customHooks/useEdit"
import useModalError from "../../../utility/customHooks/useModalError"
import {
    addIngredient,
    deleteIngredient,
    getIngredient,
    loadIngredients,
    updateIngredient
} from "../../../redux/ingredients/action"
import {setIngredient, setIsEdit, setIsIngredientError} from "../../../redux/ingredients/reducer"

const Ingredients = (props) => {

    const ingredientList = useSelector(state => state.ingredient.list)
    const formInitialState = useSelector(state => state.ingredient.object)
    const miscData = useSelector(state => state.ingredient.miscData)
    const isEdit = useSelector(state => state.ingredient.isEdit)
    const isLoading = useSelector(state => state.ingredient.isLoading)
    const isError = useSelector(state => state.ingredient.isError)
    const isSuccess = useSelector(state => state.ingredient.isSuccess)
    const dispatch = useDispatch()

    // ** refs
    const formModalRef = useRef(null)

    const [currentPage, setCurrentPage] = useState(miscData && miscData.pageIndex ? miscData.pageIndex : 1)
    const [pageSize] = useState(10)
    const [searchValue, setSearchValue] = useState('')

    const Unit = async () => [
        {value: "kg", label: 'Kg'},
        {value: "grams", label: 'Grams'}
    ]

    // ** local States
    const [modalTitle, setModalTitle] = useState('Add Ingredient')
    const [edit, setEdit] = useState(false)
    const [formState, setFormState] = useState({})
    const [isModal, setModal] = useState(false)
    const [isModalLoading, setModalLoading] = useState(false)
    const [formData] = useState([
        {
            type: FieldTypes.Text,
            label: 'Name',
            placeholder: 'Enter Option Name',
            name: 'name',
            isRequired: true,
            fieldGroupClasses: 'col-6'
        },
        {
            type: FieldTypes.Number,
            label: 'Quantity',
            placeholder: 'Enter Quantity',
            name: 'quantity',
            isRequired: true,
            fieldGroupClasses: 'col-6'
        },
        {
            type: FieldTypes.Select,
            label: 'Unit',
            placeholder: 'Enter Unit',
            name: 'unit',
            isRequired: false,
            fieldGroupClasses: 'col-6',
            loadOptions: Unit,
            isAsyncSelect: true,
            isMulti: false
        },
        {
            type: FieldTypes.Number,
            label: 'Calories',
            placeholder: 'Enter Calories',
            name: 'calories',
            isRequired: true,
            fieldGroupClasses: 'col-6'
        },
        {
            type: FieldTypes.Number,
            label: 'Fat',
            placeholder: 'Enter Fat',
            name: 'fat',
            isRequired: true,
            fieldGroupClasses: 'col-6'
        },
        {
            type: FieldTypes.Number,
            label: 'Protein',
            placeholder: 'Enter Protein',
            name: 'protein',
            isRequired: true,
            fieldGroupClasses: 'col-6'
        },
        {
            type: FieldTypes.Number,
            label: 'Carb',
            placeholder: 'Enter Carb',
            name: 'carb',
            isRequired: true,
            fieldGroupClasses: 'col-6'
        },
        {
            type: FieldTypes.TextArea,
            label: 'Description',
            placeholder: 'Enter Description',
            name: 'description',
            fieldGroupClasses: 'col-12'
        }
    ])

    const schema = Joi.object({
        name: Joi.string().required().label("Name"),
        quantity: Joi.number().required().label("Quantity"),
        calories: Joi.number().required().label("Calories"),
        fat: Joi.number().required().label("Fat"),
        protein: Joi.number().required().label("Protein"),
        carb: Joi.number().required().label("Carb"),
        unit: Joi.string().required().label("Unit")
    })
    // ** Function to handle filter
    const toggle = () => {
        if (isModal) setEdit(false)
        setModal(!isModal)
        setFormState({...formInitialState})
        if (isModalLoading) setModalLoading(false)
    }

    // custom hooks
    useLoadData(isSuccess, loadIngredients, isModal, toggle, currentPage, pageSize, searchValue)
    useEdit(isEdit, setModalLoading, setFormState, formInitialState, setEdit, setIsEdit, setIngredient, {
        name: '',
        quantity: '',
        unit: '',
        description: '',
        calories: '',
        fat: '',
        protein: '',
        carb: ''
    })
    useModalError(isError, setModalLoading, setIsIngredientError)

    const addClick = () => {
        setModalTitle('Add Ingredient')
        toggle()
    }

    const editClick = (id) => {
        toggle()
        dispatch(getIngredient(id, true))
        setModalTitle('Edit Ingredient')
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
                dispatch(deleteIngredient(id))
            }
        })
    }

    const detailOptClick = (id, e) => {
        e.preventDefault()
        props.history.push(`/ingredient/${id}`)
    }

    const handleSubmit = (event) => {
        console.log('formState', formState)

        const final = {...formState, unit: formState.unit?.value}
        console.log(final, 'see')

        event.preventDefault()
        const isError = formModalRef.current.validate(final)
        if (isError) return

        // call api
        setModalLoading(true)
        edit ? dispatch(updateIngredient(final)) : dispatch(addIngredient(final))
    }

    const handleFilter = e => {
        console.log('e.keyCode', e.keyCode)
        const value = e.target.value
        if (e.keyCode === 13) {
            dispatch(loadIngredients(currentPage, pageSize, value))
        }
        setSearchValue(value)
    }

    // ** Function to handle Pagination
    const handlePagination = page => {
        dispatch(loadIngredients(page.selected + 1, pageSize, searchValue))
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
            name: 'Quantity',
            selector: (row) => row.quantity,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Unit',
            selector: (row) => row.unit,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Calories',
            selector: (row) => row.calories,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Fat',
            selector: (row) => row.fat,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Protein',
            selector: (row) => row.protein,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Carb',
            selector: (row) => row.carb,
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
        if (ingredientList.length > 0) {
            return ingredientList
        } else {
            return ingredientList.slice(0, pageSize)
        }
    }

    return (
        <Fragment>
            <UILoader blocking={isLoading}>
                <Card>
                    <CardHeader
                        className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
                        <div>
                            <CardTitle tag='h4'>Ingredients</CardTitle>
                        </div>
                        <Button.Ripple bssize='sm' color='primary' onClick={(e) => addClick(e)}>Add
                            Ingredient</Button.Ripple>
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

export default Ingredients
