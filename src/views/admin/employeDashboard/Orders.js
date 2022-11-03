import {
    Row,
    Col,
    Table,
    Input, Label
} from 'reactstrap'
// ** React Imports
import React, {useEffect, useState} from 'react'
// ** Demo Components
import ReactPaginate from "react-paginate"
import {useDispatch, useSelector} from "react-redux"
import UILoader from "../../../@core/components/ui-loader"
import EmpCards from "../../../ui-elements/Cards/employeeDashboard/EmpCards"
import {getEmployeesOrders} from "../../../redux/employeeDashboard/employeeOrders/action"
import Select from "react-select"
import {selectThemeColors} from "../../../utility/Utils"

const orderStatus = [
    { value: '1', label: 'Paid' },
    { value: '2', label: 'Pending' },
    { value: '3', label: 'Cancelled' },
    { value: '4', label: 'Completed' },
    { value: '5', label: 'Cooking' },
    { value: '6', label: 'Read To Deliver' },
    { value: '7', label: 'Food On Th eWay' },
    { value: '8', label: 'Delivered' },
    { value: '9', label: 'Confirmed' },
    { value: '10', label: 'Refunded' },
    { value: '11', label: 'Scheduled' }
]

const EmployeeOrders = () => {

    //getting data from store
    const isLoading = useSelector(state => state.empOrder.isDetailLoading)
    const miscData = useSelector(state => state.empOrder.miscData)
    const empOrders = useSelector(state => state.empOrder.list)
    console.log('emp', empOrders)

    // hooks
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getEmployeesOrders(1, 12, null, 1))
    }, [])

    // ** refs
    const [currentPage, setCurrentPage] = useState(miscData && miscData.pageIndex ? miscData.pageIndex : 1)
    const [pageSize] = useState(10)
    const [searchValue, setSearchValue] = useState('')

    const handleFilter = e => {
        console.log('e.keyCode', e.keyCode)
        const value = e.target.value
        if (e.keyCode === 13) {
            dispatch(getEmployeesOrders(currentPage, pageSize, value))
        }
        setSearchValue(value)
    }

    const handlePagination = page => {
        dispatch(getEmployeesOrders(page.selected + 1, pageSize, searchValue))
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

    return (
        <UILoader blocking={isLoading}>

            <EmpCards />

            <Row>
                <Col xl={12} md={12} sm={12}>
                    <div className="card">

                            <Row>
                                <Col xl={6} sm={12}>
                                    <div className="card-header d-flex align-items-start pb-2">
                                        <h3 className="font-weight-bolder">Orders List</h3>
                                    </div>
                                </Col>
                                <Col xl={6} sm={12}>
                                    <div>
                                        <Label className='form-label pt-2'><b>Select Status</b></Label>
                                        <Select
                                            theme={selectThemeColors}
                                            className='react-select'
                                            classNamePrefix='select'
                                            defaultValue={orderStatus[1]}
                                            options={orderStatus}
                                            isClearable={false}
                                        />
                                    </div>
                                </Col>
                            </Row>

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

                        <div className="card-body">
                            <Table className="table table-responsive" paginationComponent={CustomPagination}>
                                <thead>
                                <tr>
                                    <th>Meal Name</th>
                                    <th>Quantity</th>
                                    <th>Total Price</th>
                                    <th>City</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                {empOrders && empOrders.map(e => {
                                    return <>
                                        <tr>
                                            <td>{e.ordersDetail?.map(m => { return m.meal?.name })}</td>
                                            <td>{e.quantity}</td>
                                            <td>{e.totalPrice}</td>
                                            <td>{e.shippingAddress?.city}</td>
                                            <td>{e.status === 1 ? "Paid" : e.status === 2 ? "Pending" : e.status === 3 ? "Cancelled" : e.status === 4 ? "Completed" : e.status === 5 ? "Cooking" : e.status === 6 ? "Read To Deliver" : e.status === 7 ? "Food On The Way" : e.status === 8 ? "Delivered" : e.status === 9 ? "Confirmed" : e.status === 10 ? "Refunded" : e.status === 11 ? "Scheduled" : ""}</td>
                                            {/*<td>{moment(new Date(d.expectedStartDate)).format('YYYY-MM-DD') }</td>
                                            <td>{moment(new Date(d.expectedEndDate)).format('YYYY-MM-DD') }</td>*/}
                                        </tr>
                                    </>
                                })

                                }

                                </tbody>
                            </Table>
                        </div>

                    </div>
                </Col>
            </Row>
        </UILoader>
    )
}

export default EmployeeOrders
