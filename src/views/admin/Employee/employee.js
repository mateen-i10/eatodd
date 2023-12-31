// ** React Imports
import React, {Fragment, useRef, useState} from 'react'
import '../style.css'
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
import FormModal from "../../../components/FormModal"
import {FieldTypes} from "../../../utility/enums/FieldType"
import httpService, {baseURL} from "../../../utility/http"
import {toast} from "react-toastify"
import {addEmployee, deleteEmployee, getEmployee, loadEmployees, updateEmployee} from "../../../redux/employee/action"
import {setEmployee, setIsEdit, setIsEmployeeError} from "../../../redux/employee/reducer"

const Employees = (props) => {

    const employeeList = useSelector(state => state.employee.list)
    const formInitialState = useSelector(state => state.employee.object)
    const miscData = useSelector(state => state.employee.miscData)
    const isEdit = useSelector(state => state.employee.isEdit)
    const isLoading = useSelector(state => state.employee.isLoading)
    const isError = useSelector(state => state.employee.isError)
    const isSuccess = useSelector(state => state.employee.isSuccess)
    const dispatch = useDispatch()

    // ** refs
    const formModalRef = useRef(null)

    const [currentPage, setCurrentPage] = useState(miscData && miscData.pageIndex ? miscData.pageIndex : 1)
    const [pageSize] = useState(10)
    const [searchValue, setSearchValue] = useState('')

    const restaurants = async (input) => {
        return httpService._get(`${baseURL}restaurant?pageIndex=1&&pageSize=12&&searchQuery=${input}`)
            .then(response => {
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

    const permissions = async () => {
        return httpService._get(`${baseURL}permission/permissions`)
            .then(response => {
                console.log('permisions', response)
                // success case
                if (response.status === 200 && response.data.statusCode === 200) {
                    const keys = Object.keys(response.data.data)
                    const final = []
                     keys.map(d =>  {
                         response.data.data[d].map(c => {
                             final.push({ label: c, value: c })
                        })
                    })
                    return final
                } else {
                    //general Error Action
                    toast.error(response.data.message)
                }
            }).catch(error => {
                toast.error(error.message)
            })
    }

    // ** local States
    const [modalTitle, setModalTitle] = useState('Add Employee')
    const [edit, setEdit] = useState(false)
    const [formState, setFormState] = useState({})
    const [isModal, setModal] = useState(false)
    const [isModalLoading,  setModalLoading] = useState(false)
    const [formData, setFormData] = useState([])

    const [schema, setSchema] = useState(Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        password: Joi.string().required().label("Password"),
        email: Joi.string().required().label("Email"),
        restaurants: Joi.array().min(1).error(() => {
            return {
                message: '"Restaurants" is required'
            }
        })
    }))

    // ** Function to handle filter
    const toggle = () => {
    if (isModal) setEdit(false)
    setModal(!isModal)
    setFormState({...formInitialState})
    if (isModalLoading) setModalLoading(false)
    }

        // custom hooks
        useLoadData(isSuccess, loadEmployees, isModal, toggle, currentPage, pageSize, searchValue)
        useEdit(isEdit, setModalLoading, setFormState, formInitialState, setEdit, setIsEdit, setEmployee, {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            contactNo:'',
            address: '',
            phoneNo: '',
            restaurants: [],
            permission: []
            })
        useModalError(isError, setModalLoading, setIsEmployeeError)

    const addClick = () => {
        setFormData([
            {type:FieldTypes.Text, label: 'First Name', placeholder: 'Enter First Name', name:'firstName', isRequired:true, fieldGroupClasses: 'col-6'},
            {type:FieldTypes.Text, label: 'Last Name', placeholder: 'Enter Last Name', name:'lastName', isRequired:true, fieldGroupClasses: 'col-6'},
            {type:FieldTypes.Email, label: 'Email', placeholder: 'Enter email', name:'email', isRequired:true, fieldGroupClasses: 'col-6'},
            {type:FieldTypes.Password, label: 'Password', placeholder: 'Enter password', name:'password', isRequired:true, fieldGroupClasses: 'col-6'},
            {type:FieldTypes.Text, label: 'Contact Number', placeholder: 'Enter Contact Number', name:'contactNo', isRequired:false, fieldGroupClasses: 'col-6'},
            {type:FieldTypes.Select, label: 'Restaurants', placeholder: 'Select Restaurants', name:'restaurants', isRequired:false, fieldGroupClasses: 'col-6', loadOptions:restaurants, isAsyncSelect: true, isMulti:true},
            {type:FieldTypes.Select, label: 'Permissions', placeholder: 'Select Permissions', name:'permission', isRequired:false, fieldGroupClasses: 'col-6', loadOptions:permissions, isAsyncSelect: true, isMulti:true}
        ])
        setModalTitle('Add Employee')
        toggle()
    }

    const editClick = (id) => {
        setFormData([
            {type:FieldTypes.Text, label: 'First Name', placeholder: 'Enter First Name', name:'firstName', isRequired:true, fieldGroupClasses: 'col-6'},
            {type:FieldTypes.Text, label: 'Last Name', placeholder: 'Enter Last Name', name:'lastName', isRequired:true, fieldGroupClasses: 'col-6'},
            {type:FieldTypes.Email, label: 'Email', placeholder: 'Enter email', name:'email', isRequired:true, fieldGroupClasses: 'col-6'},
            {type:FieldTypes.Text, label: 'Contact Number', placeholder: 'Enter Contact Number', name:'contactNo', isRequired:false, fieldGroupClasses: 'col-6'},
            {type:FieldTypes.Select, label: 'Restaurants', placeholder: 'Select Restaurants', name:'restaurants', isRequired:false, fieldGroupClasses: 'col-6', loadOptions:restaurants, isAsyncSelect: true, isMulti:true},
            {type:FieldTypes.Select, label: 'Permissions', placeholder: 'Select Permissions', name:'permission', isRequired:false, fieldGroupClasses: 'col-6', loadOptions:permissions, isAsyncSelect: true, isMulti:true}
        ])
        setSchema(Joi.object({
            firstName: Joi.string().required().label("First Name"),
            lastName: Joi.string().required().label("Last Name"),
            email: Joi.string().required().label("Email"),
            restaurants: Joi.array().min(1).error(() => {
                return {
                    message: '"Restaurants" is Required'
                }
            })
        }))
        toggle()
        dispatch(getEmployee(id, true))
        setModalTitle('Edit Employee')
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
           dispatch(deleteEmployee(id))
       }
    })
    }

    const detailOptClick = (id, e) => {
    e.preventDefault()
    props.history.push(`/employee/${id}`)
    }

    const handleSubmit = (event) => {
    console.log('formState', formState)
    event.preventDefault()
    const isError = formModalRef.current.validate(formState)
    if (isError) return

       const final = {
            id: formState.id,
           applicationUser: {...formState, id: formState.applicationUserId, permission: formState.permission.map(p => p.value).toString(), passwordHash: formState.password, username: formState.firstName},
           restaurants: formState.restaurants.map(r => {
           return { restaurantId: r.value }
           })}
    // call api
    setModalLoading(true)
    edit ? dispatch(updateEmployee(final)) : dispatch(addEmployee(final))
    }

    const handleFilter = e => {
    console.log('e.keyCode', e.keyCode)
    const value = e.target.value
    if (e.keyCode === 13) {
       dispatch(loadEmployees(currentPage, pageSize,  value))
    }
    setSearchValue(value)
    }

    // ** Function to handle Pagination
    const handlePagination = page => {
    dispatch(loadEmployees(page.selected + 1, pageSize, searchValue))
    setCurrentPage(page.selected + 1)
    }

    const columns = [
        {
           name: 'User Name',
           selector: (row) => `${row.applicationUser?.firstName} ${row.applicationUser?.lastName}`,
           sortable: true,
           minWidth: '50px'
        },
        {
            name: 'Email',
            selector: (row) => row.applicationUser?.email,
            sortable: true,
            minWidth: '50px'
        },
        {
           name: 'Contact No',
           selector: (row) => row.applicationUser?.contactNo,
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
    if (employeeList.length > 0) {
       return employeeList
    }  else {
       return employeeList.slice(0, pageSize)
    }
    }

    return (
    <Fragment>
       <UILoader blocking={isLoading}>
           <Card>
               <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
                   <div>
                       <CardTitle tag='h4'>Employees</CardTitle>
                   </div>
                   <Button.Ripple bssize='sm' color='primary' onClick={(e) => addClick(e)}>Add Employee</Button.Ripple>
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
       />

    </Fragment>
    )
    }

export default Employees
