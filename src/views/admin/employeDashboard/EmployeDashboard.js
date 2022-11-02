import {
    Row,
    Col,
    Table,
    Input, CardText, CardHeader, CardTitle, CardBody, Card
} from 'reactstrap'
// ** React Imports
import React, {useEffect} from 'react'
// ** Context
import { ThemeColors } from '../../../utility/context/ThemeColors'
// ** Demo Components
import Earnings from '../../../ui-elements/Cards/analytics/Earnings'
import {useDispatch, useSelector} from "react-redux"
import {getEmployeesDashboard} from "../../../redux/employeeDashboard/action"
import UILoader from "../../../@core/components/ui-loader"
import {Box, DollarSign, TrendingUp, User} from "react-feather"
import Avatar from '@components/avatar'

const EmployeeDashboard = () => {
    // ** Context
    //const { colors } = useContext(ThemeColors)

    //getting data from store
    const isLoading = useSelector(state => state.employeeDashboard.isDetailLoading)
    const empDashboard = useSelector(state => state.employeeDashboard.object)
    console.log('empDash', empDashboard)

    // hooks
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getEmployeesDashboard())
    }, [])

    return (
        <UILoader blocking={isLoading}>

            <div id='dashboard-ecommerce'>
                <Row className='match-height'>
                    {/*<Col xl='4' md='6' xs='12'>
                        <Earnings success={colors.success.main} />
                    </Col>*/}
                    <Col xl='12' md='6' xs='12'>
                        {/*<StatsCard cols={{ xl: '3', sm: '6' }} />*/}
                        <Card className='card-statistics'>
                            <CardHeader>
                                <CardTitle tag='h4'>Statistics</CardTitle>
                                <CardText className='card-text font-small-2 me-25 mb-0'>Updated 1 month ago</CardText>
                            </CardHeader>
                            <CardBody className='statistics-body'>
                                <Row>
                                    <Col xl={3} sm={6}>
                                        <div className='d-flex align-items-center'>
                                            <Avatar color='light-primary' icon={<TrendingUp size={24} />} className='me-2' />
                                            <div className='my-auto'>
                                                <h4 className='fw-bolder mb-0'>{empDashboard.totalSale}</h4>
                                                <CardText className='font-small-3 mb-0'>Sales</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={3} sm={6}>
                                        <div className='d-flex align-items-center'>
                                            <Avatar color='light-info' icon={<User size={24} />} className='me-2' />
                                            <div className='my-auto'>
                                                <h4 className='fw-bolder mb-0'>{empDashboard.totalCustomer}</h4>
                                                <CardText className='font-small-3 mb-0'>Customers</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={3} sm={6}>
                                        <div className='d-flex align-items-center'>
                                            <Avatar color='light-danger' icon={<Box size={24} />} className='me-2' />
                                            <div className='my-auto'>
                                                <h4 className='fw-bolder mb-0'>{empDashboard.totalProduct}</h4>
                                                <CardText className='font-small-3 mb-0'>Products</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={3} sm={6}>
                                        <div className='d-flex align-items-center'>
                                            <Avatar color='light-success' icon={<DollarSign size={24} />} className='me-2' />
                                            <div className='my-auto'>
                                                <h4 className='fw-bolder mb-0'>{empDashboard.totalRevenue}</h4>
                                                <CardText className='font-small-3 mb-0'>Revenue</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>

        </UILoader>
    )
}

export default EmployeeDashboard
