// ** React Imports
import React, {Fragment, useEffect, useState} from 'react'

// ** Form Modal Component for Add and Update
import FormModal from '../../../components/FormModal'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
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
import {deleteFP, getFP, loadFPs} from "../../../redux/facebookPosts/actions"
import {useDispatch, useSelector} from "react-redux"
import Joi from "joi-browser"
import Swal from "sweetalert2"
import AddFacebookPostForm from "./AddFacebookPostForm"

const FacebookPost = (props) => {
    const customerList = useSelector(state => state.facebookPost.list)
    const isEdit = useSelector(state => state.facebookPost.isEdit)
    const dispatch = useDispatch()

    // ** local States
    const [currentPage, setCurrentPage] = useState(0)
    const [searchValue, setSearchValue] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [isModal, setModal] = useState(false)
    const [editData, setEditData] = useState(0)
    // ** schema for validations


    useEffect(() => {
        dispatch(loadFPs())
    }, [isEdit])

    // ** Function to handle filter
    const toggle = () => {
        setModal(!isModal)
    }
    const addClick = (e) => {
        e.preventDefault()
        toggle()
    }
    const editClick = (data) => {
        toggle()
        dispatch(getFP(data.id, true))
        setEditData(data)
        console.log('id of the user', data.id, data.full_name)
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
                dispatch(deleteFP(id))
            }
        })
    }
    const detailOptClick = (id, e) => {
        e.preventDefault()
        console.log('call', props)
        props.history.push(`/customers/detail/${id}`)
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

    const columns = [
        {
            name: 'Id',
            selector: (row) => row.id,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Description',
            selector: (row) => row.description,
            sortable: true,
            minWidth: '250px'
        },
        {
            name: 'Image',
            selector: (row) => row.image,
            sortable: true,
            minWidth: '150px'
        },
        {
            name: 'Published',
            selector: (row) => row.published,
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
                        <span onClick={() => { editClick(row) }}><Edit size={15} /></span>
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
                    <div>
                        <CardTitle tag='h4'>FacebookPost</CardTitle>
                        <h6>Friday June 10, 2022, 08:10 AM</h6>
                    </div>
                        <Button.Ripple color='primary' onClick={(e) => addClick(e)}>Add a new Post</Button.Ripple>
                </CardHeader>
                <Row className='justify-content-end mx-0'>
                    <Col className='mt-1' md='12' sm='12'>
                        <Input
                            className='dataTable-filter mb-50'
                            type='text'
                            PlaceHolder='Search'
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
            <AddFacebookPostForm isShow={isModal} setShow={toggle} data={editData} />
        </Fragment>
    )
}

export default FacebookPost