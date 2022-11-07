import React, {Fragment, useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import ReactPaginate from "react-paginate"
import UILoader from "../../../@core/components/ui-loader"
import {
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
} from "reactstrap"
import DataTable from "react-data-table-component"
import {ChevronDown, FileText, MoreVertical, Trash} from "react-feather"
import {deleteContact, loadContacts} from "../../../redux/contact/action"
import Swal from "sweetalert2"

const Contact = (props) => {

    const contactList = useSelector(state => state.contact.list)
    const miscData = useSelector(state => state.contact.miscData)
    const isLoading = useSelector(state => state.contact.isLoading)
    const isSuccess = useSelector(state => state.contact.isSuccess)
    const [currentPage, setCurrentPage] = useState(miscData && miscData.pageIndex ? miscData.pageIndex : 1)
    const [pageSize] = useState(10)
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState('')

    const storeState = useSelector(state => state)
    console.log("store state", storeState)

    // console.log("contact list", contactList)

    useEffect(() => {
        dispatch(loadContacts(currentPage, pageSize, searchValue))
    }, [isSuccess])
    const deleteClick = (id, e) => {
        e.preventDefault()
        console.log(id)
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
                dispatch(deleteContact(id))
            }
        })
    }
    const detailOptClick = (id, e) => {
        console.log(id)
        e.preventDefault()
        props.history.push(`/contact/${id}`)
    }

    const handlePagination = page => {
        dispatch(loadContacts(page.selected + 1, pageSize))
        setCurrentPage(page.selected + 1)
    }
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

    const handleFilter = e => {
        console.log('e.keyCode', e.keyCode)
        const value = e.target.value
        if (e.keyCode === 13) {
            dispatch(loadContacts(currentPage, pageSize))
        }
        setSearchValue(value)
    }

    const dataToRender = () => {
        if (contactList.length > 0) {
            return contactList
        } else {
            return contactList.slice(0, pageSize)
        }
    }
    const columns = [

        {
            name: 'Name',
            selector: (row) => row.name,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Email',
            selector: (row) => row.eamil,
            sortable: true,
            minWidth: '50px'
        },

        {
            name: 'Total Attendees',
            selector: (row) => row.noOfAttendees,
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
                    </div>
                )
            }
        }
    ]

    return (
        <Fragment>
            <UILoader blocking={isLoading}>
                <Card>
                    <CardHeader
                        className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
                        <div>
                            <CardTitle tag='h4'>Contact</CardTitle>
                        </div>
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

        </Fragment>
    )
}

export default Contact
