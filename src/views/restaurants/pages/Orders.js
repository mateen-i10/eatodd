// ** React Imports
import React, {Fragment, useEffect, useState} from 'react'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import {
    ArrowLeftCircle,
    ChevronDown
} from 'react-feather'
import {
    Card,
    CardTitle,
    Input,
    Row,
    Col
} from 'reactstrap'
import {useDispatch, useSelector} from "react-redux"
import UILoader from "../../../@core/components/ui-loader"
import '@styles/react/libs/flatpickr/flatpickr.scss'
import {loadOrdersByRestaurant} from "../../../redux/restaurant/actions"
import StatsCard from "../../../ui-elements/Cards/StatsCard"
import StatCard from "../../../ui-elements/Cards/statistics/StatsCard"
import {useHistory, useParams} from "react-router-dom"
import {loadAdminDashBoardOrderByStatData} from "../../../redux/adminDashboard/actions"
import AsyncSelect from "react-select/async"


const Orders = () => {

    // const OrdersByRestaurantList = useSelector(state => state.restaurant.orderList)

    const OrdersByRestaurantList = useSelector(state => state.AdminDashReducer.list)
    console.log(OrdersByRestaurantList, 'order by rest status')

    const [status, setStatus] = useState(0)
    console.log(status, "stats")

    const miscData = useSelector(state => state.restaurant.miscData)
    const dispatch = useDispatch()
    const history = useHistory()

    const options = async () => [
        { value: 1, label: 'Paid' },
        { value: 2, label: 'Pending' },
        { value: 3, label: 'Cancelled' },
        { value: 4, label: 'Completed' },
        { value: 5, label: 'Cooking' },
        { value: 6, label: 'ReadyToDeliver' },
        { value: 7, label: 'FoodOnTheWay' },
        { value: 8, label: 'Deliverd' },
        { value: 9, label: 'Confirmed' },
        { value: 10, label: 'Refunded' },
        { value: 11, label: 'Scheduled' }
    ]

    // ** refs
    const [currentPage, setCurrentPage] = useState(miscData && miscData.pageIndex ? miscData.pageIndex : 1)
    const [pageSize] = useState(10)
    const [searchValue, setSearchValue] = useState('')

    //for restaurant id
    const { id } = useParams()
    console.log('stateId', id)

    useEffect(() => {
        // dispatch(loadOrdersByRestaurant(currentPage, pageSize, searchValue, id))
        dispatch(loadAdminDashBoardOrderByStatData(1, 12, null, 1, status))
    }, [status])

    console.log(OrdersByRestaurantList, "hh")

    const handleFilter = e => {
        console.log('e.keyCode', e.keyCode)
        const value = e.target.value
        if (e.keyCode === 13) {
            dispatch(loadOrdersByRestaurant(currentPage + 1, pageSize, value, id))
        }
        setSearchValue(value)
    }

    // ** Function to handle Pagination
    const handlePagination = page => {
        dispatch(loadOrdersByRestaurant(page.selected + 1, pageSize, searchValue, id))
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
                <Col xs='12'>
                    <StatCard cols={{xl: '2', sm: '6'}}/>
                </Col>
                <Card>
                        <section>
                            <div className="mt-2 p-1">
                                <Row>
                                    <Col xl={8} lg={8} md={6}>
                                        <CardTitle tag='h4' style={{marginTop: '4px'}}>
                                            <span onClick={goPackagesPage} className='cursor-pointer me-1'>
                                                <ArrowLeftCircle size={30} style={{color: "#81be41"}}/>
                                            </span>
                                                Orders by Restaurant
                                        </CardTitle>
                                    </Col>
                                    <Col xl={4} lg={4} md={6}>
                                        <AsyncSelect
                                            loadOptions={options}
                                            defaultOptions
                                            isLoading={true}
                                            onChange={e => setStatus(e.value)}
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </section>


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
