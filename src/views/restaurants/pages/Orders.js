// ** React Imports
import React, {Fragment, useEffect, useState} from 'react'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import {
    ArrowLeftCircle,
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
import {useDispatch, useSelector} from "react-redux"
import Swal from "sweetalert2"
import Joi from "joi-browser"
import UILoader from "../../../@core/components/ui-loader"
import '@styles/react/libs/flatpickr/flatpickr.scss'
import {loadOrdersByRestaurant} from "../../../redux/restaurant/actions"
import StatsCard from "../../../ui-elements/Cards/StatsCard"
import {useHistory, useLocation} from "react-router-dom"


const Orders = () => {
    const OrdersByRestaurantList = useSelector(state => state.restaurant.orderList)
    const miscData = useSelector(state => state.restaurant.miscData)
    const dispatch = useDispatch()
    const history = useHistory()

    // ** refs
    const [currentPage, setCurrentPage] = useState(miscData && miscData.pageIndex ? miscData.pageIndex : 1)
    const [pageSize] = useState(10)
    const [searchValue, setSearchValue] = useState('')

    //for restaurant id
    const {state} = useLocation()

    useEffect(() => {
        dispatch(loadOrdersByRestaurant(currentPage, pageSize, searchValue, state.id))
    }, [])

    console.log(OrdersByRestaurantList, "hh")

    const handleFilter = e => {
        console.log('e.keyCode', e.keyCode)
        const value = e.target.value
        if (e.keyCode === 13) {
            dispatch(loadOrdersByRestaurant(currentPage + 1, pageSize, value, state.id))
        }
        setSearchValue(value)
    }

    // ** Function to handle Pagination
    const handlePagination = page => {
        dispatch(loadOrdersByRestaurant(page.selected + 1, pageSize, searchValue, state.id))
        setCurrentPage(page.selected + 1)
    }

    const goPackagesPage = () => {
        history.push('/restaurant')
    }

    const columns = [
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
            selector: (row) => { return row.status === 1 ? "Paid" : row.status === 2 ? "Pending" : row.status === 3 ? "Cancelled" : row.status === 4 ? "Completed" : '' },
            sortable: true,
            minWidth: '50px'
        }
        /*{
            name: 'Actions',
            allowOverflow: true,
            cell: row => {
                return (
                    <div className='d-flex'>
                        <span className='cursor-pointer mx-1' onClick={e => detailOptClick(row.id, e)}><FileText size={15} /></span>
                    </div>
                )
            }
        }*/
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
        if (OrdersByRestaurantList.length > 0) {
            return OrdersByRestaurantList
        }  else {
            return OrdersByRestaurantList.slice(0, pageSize)
        }
    }

    return (
        <Fragment>
            <UILoader>
                <Col xs='12'>
                    <StatsCard cols={{xl: '2', sm: '6'}}/>
                </Col>
                <Card>
                    <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
                        <div>
                            <CardTitle tag='h4'>
                                <span onClick={goPackagesPage} className='cursor-pointer me-1'>
                                    <ArrowLeftCircle size={30} style={{color: "#81be41"}}/>
                                </span>
                                   Orders by Restaurant
                            </CardTitle>
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

export default Orders
