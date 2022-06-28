// ** React Imports
import {Fragment, useEffect, useRef, useState} from 'react'

// ** Form Modal Component for Add and Update
import FormModal from '../../../components/FormModal'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import Avatar from '../../../@core/components/avatar'
import {ChevronDown, Edit, FileText, MoreVertical, Plus, Trash} from 'react-feather'
import {
    Card,
    CardHeader,
    CardTitle,
    Button,
    Input,
    Label,
    Row,
    Col, Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap'
import {deleteCustomer, getCustomer, loadCustomers} from "../../../redux/member/actions"
import {useDispatch, useSelector} from "react-redux"
import {FieldTypes} from "../../../utility/enums/FieldType"
import Joi from "joi-browser"
import {setCustomer} from "../../../redux/member/reducer"
import Swal from "sweetalert2"

const MembershipTypes = (props) => {
    const customerList = useSelector(state => state.member.list)
    const formInitialState = useSelector(state => state.member.object)
    const isEdit = useSelector(state => state.member.isEdit)
    const dispatch = useDispatch()

    // ** refs
    const formModalRef = useRef(null)

    // ** local States
    const [currentPage, setCurrentPage] = useState(0)
    const [searchValue, setSearchValue] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [modalTitle, setModalTitle] = useState('Add Customer')
    const [formState, setFormState] = useState({})
    const [isModal, setModal] = useState(false)
    const [isModalLoading,  setModalLoading] = useState(false)
    const [formData] = useState([
        {type:FieldTypes.Text, label: 'Name', placeholder: 'Enter Name', name:'full_name', isRequired:true, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Email, label: 'Price', placeholder: 'Enter Price', name:'price', isRequired:false, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Email, label: 'Status', placeholder: 'Enter Status', name:'status', isRequired:false, fieldGroupClasses: 'col-6'}
    ])

    // ** schema for validations
    const schema = Joi.object({
        full_name: Joi.string().required().label("Name"),
        email: Joi.string().required().label("Email")
    })


    useEffect(() => {
        dispatch(loadCustomers())
        // in case of edit get item from backend
        if (isEdit) setFormState({...formInitialState})
        else {
            dispatch(setCustomer({
                full_name: '', email: ''
            }))
        }
    }, [isEdit])

    // ** Function to handle filter
    const toggle = () => {
        setModal(!isModal)
        setFormState({...formInitialState})
    }
    // const addClick = () => {
    //     setModalTitle('Add Customer')
    //     toggle()
    // }
    const editClick = (id) => {
        toggle()
        dispatch(getCustomer(id, true))
        setModalTitle('Edit Customer')
    }
    const deleteClick = (id, e) => {
        e.preventDefault()
        // show sweet alert here
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteCustomer(id))
            }
        })
    }
    const detailOptClick = (id, e) => {
        e.preventDefault()
        console.log('call', props)
        props.history.push(`/customers/detail/${id}`)
    }
    const handleSubmit = (event) => {
        console.log("formState on submit", formState)
        event.preventDefault()
        const isError = formModalRef.current.validate(formState)
        if (isError) return

        // call api
        setModalLoading(true)
        console.log("form submitted")
    }
    const handleFilter = e => {
        const value = e.target.value
        let updatedData = []
        setSearchValue(value)

        const status = {
            1: { title: 'Current', color: 'light-primary' },
            2: { title: 'Professional', color: 'light-success' },
            3: { title: 'Rejected', color: 'light-danger' },
            4: { title: 'Resigned', color: 'light-warning' },
            5: { title: 'Applied', color: 'light-info' }
        }

        if (value.length) {
            updatedData = data.filter(item => {
                const startsWith =
                    item.full_name.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.post.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.email.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.age.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.salary.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.start_date.toLowerCase().startsWith(value.toLowerCase()) ||
                    status[item.status].title.toLowerCase().startsWith(value.toLowerCase())

                const includes =
                    item.full_name.toLowerCase().includes(value.toLowerCase()) ||
                    item.post.toLowerCase().includes(value.toLowerCase()) ||
                    item.email.toLowerCase().includes(value.toLowerCase()) ||
                    item.age.toLowerCase().includes(value.toLowerCase()) ||
                    item.salary.toLowerCase().includes(value.toLowerCase()) ||
                    item.start_date.toLowerCase().includes(value.toLowerCase()) ||
                    status[item.status].title.toLowerCase().includes(value.toLowerCase())

                if (startsWith) {
                    return startsWith
                } else if (!startsWith && includes) {
                    return includes
                } else return null
            })
            setFilteredData(updatedData)
            setSearchValue(value)
        }
    }

    // ** Function to handle Pagination
    const handlePagination = page => {
        setCurrentPage(page.selected)
    }

    // ** Table Common Column

    const columns = [
        {
            name: 'Name',
            selector: (row) => row.full_name,
            sortable: true,
            minWidth: '250px',
            cell: row => (
                <div className='d-flex align-items-center'>
                    <div className='user-info text-truncate ms-1'>
                        <span className='d-block font-weight-bold text-truncate'>{row.full_name}</span>
                        <small>{row.post}</small>
                    </div>
                </div>
            )
        },
        {
            name: 'Price',
            selector: (row) => row.price,
            sortable: true,
            minWidth: '250px'
        },
        {
            name: 'Status',
            selector: (row) => row.status,
            sortable: true,
            minWidth: '150px'
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
                        <span onClick={() => { editClick(row.id) }}><Edit size={15} /></span>
                    </div>
                )
            }
        }
    ]

    // ** Custom Pagination
    const CustomPagination = () => (
        <ReactPaginate
            previousLabel=''
            nextLabel=''
            forcePage={currentPage}
            onPageChange={page => handlePagination(page)}
            pageCount={searchValue.length ? filteredData.length / 7 : customerList.length / 7 || 1}
            breakLabel='...'
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            activeClassName='active'
            pageClassName='page-item'
            breakClassName='page-item'
            breakLinkClassName='page-link'
            nextLinkClassName='page-link'
            nextClassName='page-item next'
            previousClassName='page-item prev'
            previousLinkClassName='page-link'
            pageLinkClassName='page-link'
            containerClassName='pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1'
        />
    )

    return (
        <Fragment>
            <Card>
                <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
                    <CardTitle tag='h4'>Membership Types</CardTitle>
                    <div className='d-flex mt-md-0 mt-1'>
                    </div>
                </CardHeader>
                <Row className='justify-content-end mx-0'>
                    <Col className='d-flex align-items-center justify-content-end mt-1' md='12' sm='12'>
                        <Input
                            className='dataTable-filter mb-50'
                            placeHolder="Search"
                            type='text'
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
                    columns={columns}
                    paginationPerPage={7}
                    className='react-dataTable'
                    sortIcon={<ChevronDown size={10} />}
                    paginationDefaultPage={currentPage + 1}
                    paginationComponent={CustomPagination}
                    data={searchValue.length ? filteredData : customerList}
                />
            </Card>
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

export default MembershipTypes