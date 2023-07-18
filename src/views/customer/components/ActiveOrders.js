// ** React Imports
import React, {Fragment, useEffect, useState} from 'react'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import {ChevronDown, Edit, FileText, MoreVertical, RefreshCcw, Trash} from 'react-feather'
import {
    Card,
    CardHeader,
    CardTitle,
    Input,
    Row,
    Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap'
import {useDispatch, useSelector} from "react-redux"
import UILoader from "../../../@core/components/ui-loader"
import {loadActiveOrders} from "../../../redux/reorderhistory/actions"
import {getUserData} from "../../../auth/utils"

//import { useHistory } from "react-router-dom"
import moment from "moment"

const ActiveOrders = (props) => {

    const CustomerId = getUserData().customerId
    console.log(CustomerId, "customer id from meals")

    const activeOrdersList = useSelector(state => state.reorderHistory.activeOrdersList)
    const miscData = useSelector(state => state.reorderHistory.miscData)
    const isLoading = useSelector(state => state.reorderHistory.isLoading)
    const dispatch = useDispatch()

    console.log('activeOrdersList', activeOrdersList)

    const [currentPage, setCurrentPage] = useState(miscData && miscData.pageIndex ? miscData.pageIndex : 1)
    const [pageSize] = useState(10)
    const [searchValue, setSearchValue] = useState('')

    const [isActive, setIsActive] = useState(true)
    console.log('setIsActive', setIsActive)

    useEffect(() => {
        if (CustomerId && isActive === true) {
            dispatch(loadActiveOrders(currentPage, pageSize, searchValue, CustomerId, isActive === true))
            //setIsActive(true)
        }
        console.log(props.history, 'prop data')
    }, [isActive])

    const handleFilter = e => {
        console.log('e.keyCode', e.keyCode)
        const value = e.target.value
        if (e.keyCode === 13) {
            dispatch(loadActiveOrders(currentPage, pageSize, value, CustomerId, isActive === true))
        }
        setSearchValue(value)
    }

    // ** Function to handle Pagination
    const handlePagination = page => {
        dispatch(loadActiveOrders(page.selected + 1, pageSize, searchValue, CustomerId, isActive === true))
        setCurrentPage(page.selected + 1)
    }

    const cancelOrder = (id, e) => {
        e.preventDefault()
        console.log('user selected id', id)

    }

    const columns = [
        {
            name: 'Order Date',
            selector: (row) => moment(row.createdDate).format('YYYY-MM-DD HH:MM:A'),
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
            name: 'Total Price',
            selector: (row) => row.totalPrice,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Status',
            selector: (row) => { return row.status === 1 ? "Paid" : row.status === 2 ? "Pending" : row.status === 3 ? "Cancelled" : row.status === 4 ? "Completed" : row.status === 5 ? "Cooking" : row.status === 6 ? "Read To Deliver" : row.status === 7 ? "Food On Th eWay" : row.status === 8 ? "Delivered" : row.status === 9 ? "Confirmed" : row.status === 10 ? "Refunded" : row.status === 11 ? "Scheduled"  : '' },
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Actions',
            allowOverflow: true,
            cell: row => {
                return (
                    <div className='d-flex'>
                        <span className='cursor-pointer' onClick={() => { cancelOrder(row.id) }}><Trash size={15} /></span>
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
                'pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1 mb-1'
            }
        />
    }

    const dataToRender = () => {
        if (activeOrdersList.length > 0) {
            return activeOrdersList
        }  else {
            return activeOrdersList.slice(0, pageSize)
        }
    }

    return (
        <Fragment>
            <UILoader blocking={isLoading}>
                <Card>
                    <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
                        <div>
                            <CardTitle tag='h4'>Active Orders</CardTitle>
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

        </Fragment>
    )
}

export default ActiveOrders
