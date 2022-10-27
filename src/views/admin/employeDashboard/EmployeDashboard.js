import {
    Row,
    Col,
    Table,
    Input
} from 'reactstrap'
// ** React Imports
import React, {useContext, useEffect, useState} from 'react'
// ** Context
import { ThemeColors } from '../../../utility/context/ThemeColors'
// ** Demo Components
import Earnings from '../../../ui-elements/Cards/analytics/Earnings'
import StatsCard from '../../../ui-elements/Cards/statistics/StatsCard'
import ReactPaginate from "react-paginate"
import {useDispatch, useSelector} from "react-redux"
import {getEmployeesDashboard} from "../../../redux/employeeDashboard/action"
import UILoader from "../../../@core/components/ui-loader"
import EmpCards from "../../../ui-elements/Cards/employeeDashboard/EmpCards"

const EmployeeDashboard = () => {
    // ** Context
    const { colors } = useContext(ThemeColors)

    //getting data from store
    const isLoading = useSelector(state => state.employeeDashboard.isDetailLoading)
    const miscData = useSelector(state => state.employeeDashboard.miscData)
    const empDashboardOrders = useSelector(state => state.employeeDashboard.list)
    console.log('emp', empDashboardOrders)

    // hooks
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getEmployeesDashboard())
    }, [])

    // ** refs
    const [currentPage, setCurrentPage] = useState(miscData && miscData.pageIndex ? miscData.pageIndex : 1)
    const [pageSize] = useState(10)
    const [searchValue, setSearchValue] = useState('')

    const handleFilter = e => {
        console.log('e.keyCode', e.keyCode)
        const value = e.target.value
        if (e.keyCode === 13) {
            dispatch(getEmployeesDashboard(currentPage, pageSize, value))
        }
        setSearchValue(value)
    }

    const handlePagination = page => {
        dispatch(getEmployeesDashboard(page.selected + 1, pageSize, searchValue))
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

            <div id='dashboard-ecommerce'>
                <Row className='match-height'>
                    <Col xl='4' md='6' xs='12'>
                        <Earnings success={colors.success.main} />
                    </Col>
                    <Col xl='8' md='6' xs='12'>
                        <StatsCard cols={{ xl: '3', sm: '6' }} />
                    </Col>
                </Row>
            </div>

            <Row>
                <Col xl={12} md={12} sm={12}>
                    <div className="card">
                        <div className="card-header d-flex align-items-start pb-2">
                            <div>
                                <h3 className="font-weight-bolder">Pending Orders</h3>
                            </div>
                        </div>
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
                                    <th>Job Name</th>
                                    <th>Budget</th>
                                    <th>Estimated Hours</th>
                                </tr>
                                </thead>
                                <tbody>
                                {empDashboardOrders && empDashboardOrders.map(e => {
                                    return <>
                                        <tr>
                                            <td>{e.name}</td>
                                            <td>qw</td>
                                            <td>qw</td>
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

export default EmployeeDashboard
