// ** React Imports
import React, {Fragment, useEffect, useRef, useState} from 'react'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import {
    Book,
    BookOpen,
    ChevronDown,
    Codesandbox,
    DollarSign,
    Edit,
    FileText,
    MoreVertical,
    Trash,
    UserPlus
} from 'react-feather'
import {
    Card,
    CardHeader,
    CardTitle,
    Button,
    Input,
    Row,
    Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap'
import {
    addRestaurant,
    deleteRestaurant,
    getRestaurant,
    loadRestaurants,
    updateRestaurant
} from "../../../redux/restaurant/actions"
import {useDispatch, useSelector} from "react-redux"
import Swal from "sweetalert2"
import Joi from "joi-browser"
import UILoader from "../../../@core/components/ui-loader"
import useLoadData from "../../../utility/customHooks/useLoadData"
import useEdit from "../../../utility/customHooks/useEdit"
import useModalError from "../../../utility/customHooks/useModalError"
import {setIsEdit, setIsRestaurantError, setRestaurant} from "../../../redux/restaurant/reducer"
import FormModal from "../../../components/FormModal"
import {FieldTypes} from "../../../utility/enums/FieldType"
import '@styles/react/libs/flatpickr/flatpickr.scss'
import Datetime from "react-datetime"
import httpService, {baseURL} from "../../../utility/http"
import {toast} from "react-toastify"
import moment from "moment"

const Restaurant = (props) => {

    const restaurantList = useSelector(state => state.restaurant.list)
    const formInitialState = useSelector(state => state.restaurant.object)
    const miscData = useSelector(state => state.restaurant.miscData)
    const isEdit = useSelector(state => state.restaurant.isEdit)
    const isLoading = useSelector(state => state.restaurant.isLoading)
    const isError = useSelector(state => state.restaurant.isError)
    const isSuccess = useSelector(state => state.restaurant.isSuccess)
    const dispatch = useDispatch()

    // ** refs
    const formModalRef = useRef(null)

    const [currentPage, setCurrentPage] = useState(miscData && miscData.pageIndex ? miscData.pageIndex : 1)
    const [pageSize] = useState(10)
    const [searchValue, setSearchValue] = useState('')
    const resSchedules = [
        {
            name: 'Monday',
            day: 1,
            startDate: null,
            endDate: null,
            isClosed: false,
            isTwentyFourHoursOpened: false
        },
        {
            name: 'Tuesday',
            day: 2,
            startDate: null,
            endDate: null,
            isClosed: false,
            isTwentyFourHoursOpened: false
        },
        {
            name: 'Wednesday',
            day: 3,
            startDate: null,
            endDate: null,
            isClosed: false,
            isTwentyFourHoursOpened: false
        },
        {
            name: 'Thursday',
            day: 4,
            startDate: null,
            endDate: null,
            isClosed: false,
            isTwentyFourHoursOpened: false
        },
        {
            name: 'Friday',
            day: 5,
            startDate: null,
            endDate: null,
            isClosed: false,
            isTwentyFourHoursOpened: false
        },
        {
            name: 'Saturday',
            day: 6,
            startDate: null,
            endDate: null,
            isClosed: false,
            isTwentyFourHoursOpened: false
        },
        {
            name: 'Sunday',
            day: 0,
            startDate: null,
            endDate: null,
            isClosed: false,
            isTwentyFourHoursOpened: false
        }
    ]
    const [restaurantSchedule, setRestaurantSchedule] = useState([...resSchedules])

    useEffect(() => {
        if (formInitialState && formInitialState.restaurantSchedules) {
            const final = formInitialState.restaurantSchedules.map((i, index) => {
                return {...i, name : resSchedules[index].name}
            })
            console.log('final', final)
            setRestaurantSchedule([...final])
        }
    }, [isEdit])

    const onValueChange = (index, name, event) => {
        console.log("event.target.checked", event.target.checked)
        console.log("event.target", event.target)
        const newArray = restaurantSchedule.map((element, i) => {
            if (i === index) {
                if (event.target.type === "checkbox") {
                    element[name] = event.target.checked
                }  else {
                    element[name] = event.target.value
                }
            }
            return element
        })

        setRestaurantSchedule(newArray)
    }

    const handleDateChange = (index, e, name) => {
        if (typeof (e) === "object") {
            const newArray = restaurantSchedule.map((element, i) => {
                if (i === index) {
                    element[name] = moment(e.toDate()).format()
                }
                return element
            })

            setRestaurantSchedule(newArray)
        }

    }

    const child = () => {
        return <div className='ms-1'>
            <div className="text-center">
                <h4>Hours Of Operation</h4>
            </div>
            <hr style={{color:'black'}} className='my-1' />

            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Day</th>
                    <th scope="col">Start Time</th>
                    <th scope="col">End Time</th>
                    <th scope="col">Closed</th>
                    <th scope="col">24 hour open</th>
                </tr>
                </thead>
                <tbody>
                {restaurantSchedule.map((r, index) => {
                    return <tr key={r.day}>
                        <td>{r.name}</td>
                        <td>
                            <Datetime
                                locale="en-gb"
                                initialViewMode={'time'}
                                value={r.startDate ? new Date(r.startDate) : null}
                                dateFormat={false}
                                closeOnSelect={true}
                                onChange={(e) => handleDateChange(index, e, 'startDate')}
                            />
                        </td>
                        <td>
                            <Datetime
                                locale="en-gb"
                                initialViewMode={'time'}
                                value={r.endDate ? new Date(r.endDate) : null}
                                dateFormat={false}
                                closeOnSelect={true}
                                onChange={(e) => handleDateChange(index, e, 'endDate')}
                            />
                        </td>
                        <td>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" checked={r.isClosed}
                                       onChange={(e) => onValueChange(index, 'isClosed', e)}
                                       id={`isClosed${r.name}`} name={`isClosed${r.name}`}/>
                                <label className="form-check-label" htmlFor={`isClosed${r.name}`}>
                                    Closed
                                </label>
                            </div>
                        </td>
                        <td>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={r.isTwentyFourHoursOpened}
                                    onChange={(e) => onValueChange(index, 'isTwentyFourHoursOpened', e)}
                                    id={`isTwentyFourHoursOpened${r.name}`} name={`isTwentyFourHoursOpened${r.name}`} />
                                <label className="form-check-label" htmlFor={`isTwentyFourHoursOpened${r.name}`}>
                                    Open 24hours
                                </label>
                            </div>
                        </td>
                    </tr>
                })
                }
                </tbody>
            </table>

        </div>
    }

    const cuisines = async (input) => {
        return httpService._get(`${baseURL}cuisine?pageIndex=1&&pageSize=12&&searchQuery=${input}`)
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
    const [modalTitle, setModalTitle] = useState('Add Restaurant')
    const [edit, setEdit] = useState(false)
    const [formState, setFormState] = useState({})
    const [isModal, setModal] = useState(false)
    const [isModalLoading,  setModalLoading] = useState(false)
    const [formData] = useState([
        {type:FieldTypes.Text, label: 'Name', placeholder: 'Enter Restaurant Name', name:'name', isRequired:true, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Text, label: 'Description', placeholder: 'Enter Description', name:'description', isRequired:false, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Text, label: 'Address', placeholder: 'Enter Address', name:'address1', isRequired:true, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Text, label: 'phone Number', placeholder: 'Enter Phone Number', name:'phoneNo', isRequired:false, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Number, label: 'Latitude', placeholder: 'Enter Latitude', name:'latitude', isRequired:false, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Number, label: 'Longitude', placeholder: 'Enter Longitude', name:'longitude', isRequired:false, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Select, label: 'Cuisine', placeholder: 'Select Cuisine', name:'cuisines', isRequired:false, fieldGroupClasses: 'col-12', loadOptions:cuisines, isAsyncSelect: true, isMulti:true},
        {type:FieldTypes.SwitchButton, label: 'Available For Delivery', name:'isAvailableForDelivery', isRequired:false, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.SwitchButton, label: 'Vine Club Included', name:'isVineClub', isRequired:false, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.SwitchButton, label: 'Catering Included', name:'isCatering', isRequired:false, fieldGroupClasses: 'col-6'}
    ])

    const [date, setDate] = useState(new Date())

    //for get current date and time
    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }

    })

    // ** schema for validations
    const schema = Joi.object({
        name: Joi.string().required().label("Name"),
        address1: Joi.string().required().label("Address")
    })

    // ** Function to handle filter
    const toggle = () => {
        if (isModal) setEdit(false)
        setModal(!isModal)
        setFormState({...formInitialState})
        setRestaurantSchedule([...resSchedules])
        if (isModalLoading) setModalLoading(false)
    }

    // custom hooks
    useLoadData(isSuccess, loadRestaurants, isModal, toggle, currentPage, pageSize, searchValue)
    useEdit(isEdit, setModalLoading, setFormState, formInitialState, setEdit, setIsEdit, setRestaurant, {
        name: '',
        description:'',
        address: {},
        phoneNo: '',
        cuisines: [],
        restaurantSchedules:[],
        isAvailableForDelivery: false,
        isVineClub: false,
        isCatering: false
    })
    useModalError(isError, setModalLoading, setIsRestaurantError)

    const addClick = () => {
        setModalTitle('Add Restaurant')
        toggle()
    }

    const editClick = (id) => {
        console.log("edit", id)
        toggle()
        dispatch(getRestaurant(id, true))
        setModalTitle('Edit Restaurant')
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
                dispatch(deleteRestaurant(id))
            }
        })
    }

    const detailOptClick = (id, e) => {
        e.preventDefault()
        props.history.push(`/restaurantDetail/${id}`)
    }

    const orderClick = (e) => {
        e.preventDefault()
        props.history.push(`/dashboard/orders`)
    }
    const productClick = (e) => {
        e.preventDefault()
        props.history.push(`/products`)
    }
    const promotionClick = (e) => {
        e.preventDefault()
        props.history.push(`/dashboard/promotion`)
    }
    const customerClick = (e) => {
        e.preventDefault()
        props.history.push(`/dashboard/customer`)
    }

    const handleSubmit = (event) => {
        console.log('restaurantSchedule', restaurantSchedule)
        console.log('formState', formState)
        const finalData = {...formState,
            address: {address1: formState.address1, longitude: formState.longitude, latitude: formState.latitude},
            restaurantSchedules: restaurantSchedule,
            cuisines: formState.cuisines.map(e => { return {cuisineId: e.value} })
        }
        console.log('finalData', finalData)
        event.preventDefault()
        const isError = formModalRef.current.validate(formState)
        if (isError) return

        // call api
        setModalLoading(true)
        edit ? dispatch(updateRestaurant(finalData)) : dispatch(addRestaurant(finalData))
    }

    const handleFilter = e => {
        console.log('e.keyCode', e.keyCode)
        const value = e.target.value
        if (e.keyCode === 13) {
            dispatch(loadRestaurants(currentPage + 1, pageSize, value))
        }
        setSearchValue(value)
    }

    // ** Function to handle Pagination
    const handlePagination = page => {
        dispatch(loadRestaurants(page.selected + 1, pageSize, searchValue))
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
            name: 'Phone No',
            selector: (row) => row.phoneNo,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Address',
            selector: (row) => row.address?.address1,
            sortable: true,
            minWidth: '250px'
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
                                <DropdownItem tag='a' href='' className='w-100' onClick={e => orderClick(e)}>
                                    <Book size={15} />
                                    <span className='align-middle ms-50'>Orders</span>
                                </DropdownItem>
                                <DropdownItem tag='a' href='' className='w-100' onClick={e => productClick(e)}>
                                    <Codesandbox size={15} />
                                    <span className='align-middle ms-50'>Products</span>
                                </DropdownItem>
                                <DropdownItem tag='a' href='' className='w-100' onClick={e => promotionClick(e)}>
                                    <DollarSign size={15} />
                                    <span className='align-middle ms-50'>Promotion</span>
                                </DropdownItem>
                                <DropdownItem tag='a' href='' className='w-100' onClick={e => customerClick(e)}>
                                    <UserPlus size={15} />
                                    <span className='align-middle ms-50'>Customer</span>
                                </DropdownItem>
                                <DropdownItem tag='a' href='' className='w-100'>
                                    <BookOpen size={15} />
                                    <span className='align-middle ms-50'>Inventory</span>
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
        if (restaurantList.length > 0) {
            return restaurantList
        }  else {
            return restaurantList.slice(0, pageSize)
        }
    }

    return (
        <Fragment>
            <UILoader blocking={isLoading}>
                <Card>
                    <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
                        <div>
                            <CardTitle tag='h4'>Restaurant</CardTitle>
                            <h6 className='mt-1'>{date.toLocaleTimeString('en-us', { weekday:"long", month:"long", year:"numeric", day:"numeric"})}</h6>
                        </div>
                        <Button.Ripple bssize='sm' color='primary' onClick={(e) => addClick(e)}>Add a new Restaurant</Button.Ripple>
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

export default Restaurant
