import {
    Row,
    Col,
    CardText, CardTitle, CardBody, Card, Badge
} from 'reactstrap'
// ** React Imports
import React, { useEffect, useLayoutEffect, useState} from 'react'

import {useDispatch, useSelector} from "react-redux"
import {getEmployeesDashboard, getRestStatus} from "../../../redux/employeeDashboard/action"
import UILoader from "../../../@core/components/ui-loader"
import {Box, DollarSign, TrendingUp, User} from "react-feather"
import Avatar from '@components/avatar'
import growth from "../../../assets/images/empDashboard/growth.png"
import Select from "react-select"
import useAPI from "../../../utility/customHooks/useAPI"
import {isBranchManager} from "../../../auth/utils"
import CardBrowserStates from "../../../ui-elements/Cards/advance/CardBrowserState"
import CardTransactions from "../../../ui-elements/Cards/advance/CardTransactions"
import {ThemeColors} from "../../../utility/context/ThemeColors"
import {getInvDistributorData} from "../../../tempData/fakeData"
import Earnings from "../../../ui-elements/Cards/analytics/Earnings"
import {getRestaurant} from "../../../redux/restaurant/actions"

import restImg from "../../../assets/images/empDashboard/cooking.png"
import statImg from "../../../assets/images/graphic-illustration-2.png"

const EmployeeDashboard = () => {
    // ** Context
    //const { colors } = useContext(ThemeColors)

    const restaurant = useSelector(state => state.restaurant.object)
    console.log('restaurant', restaurant)

    //const { colors } = useContext(ThemeColors)

    const status = useSelector(state => state.employeeDashboard.status)
    console.log(status, "lets see what we get here")
    //getting data from store
    const isLoading = useSelector(state => state.employeeDashboard.isDetailLoading)
    const empDashboard = useSelector(state => state.employeeDashboard.object)

    const [opt] = useState([])

    const [selectedRestaurant, setSelectedRestaurant] = useState(0)

    const [IsLoading, response] = useAPI(isBranchManager() ? 'EmployeeDashboard/GetRestaurantList?PageIndex=1&PageSize=12' : '', 'get')

    const InvDistributorData = getInvDistributorData()

    console.log(response?.data, "lets see the response we getting")
    useLayoutEffect(() => {
        if (response?.data !== null) {
            response?.data.map(obj => {
                opt.push({value: obj.id, label: obj.name})
                console.log(obj, "let us see the obj")
            })
        }
    }, [response])

    console.log(opt, "letss see if it works")

    console.log('empDash', empDashboard)

    const customStyles = {
        control: base => ({
            ...base,
            height: 35,
            minHeight: 35,
            fontSize: '15px'
        })
    }

    // const options = [
    //     { value: 'Overall Stats', label: 'Overall Stats' },
    //     { value: 'Todays Stats', label: 'Todays Stats' },
    //     { value: 'This Month Stats', label: 'This Month Stats' }
    // ]

    // hooks
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getEmployeesDashboard())
    }, [])

    useEffect(() => {
        if (selectedRestaurant !== 0) {
            console.log(selectedRestaurant, "use eff value ")
            dispatch(getRestStatus(selectedRestaurant))
            dispatch(getRestaurant(selectedRestaurant))
        }
    }, [selectedRestaurant])

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
                            <CardTitle>
                                <section>
                                    <Row style={{justifyContent: 'space-between', padding: '15px', marginBottom: '-36px'}}>
                                        <Col lg={9}>
                                            <div style={{display:'flex'}}>
                                                {/*<img src={growth} width={20} height={20} style={{marginTop:'8px'}}/>*/}
                                                <h4 style={{marginTop: '10px', marginLeft: '5px'}}>Employee Dashboard</h4>
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <Select className='mb-1' options={opt} styles={customStyles} maxMenuHeight={100} onChange={e => setSelectedRestaurant(e.value)}/>
                                        </Col>
                                    </Row>
                                </section>
                            </CardTitle>

                            {/*<CardBody className='statistics-body'>
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
                            </CardBody>*/}
                        </Card>
                    </Col>
                </Row>
            </div>

            <Row className='match-height'>
                <Col lg='12' md='4'>
                    <Row className='match-height'>

                        <Col lg='6' md='6' xs='12'>
                            {/*<Earnings success={colors.success.main} />*/}
                            <Card className='card-statistics' style={{background: '#d9fab7'}}>
                                <CardTitle style={{justifyContent: 'space-between', padding: '15px', marginBottom: '-36px'}}>
                                    <div style={{display:'flex'}}>
                                        <img src={growth} width={20} height={20} style={{marginTop:'8px'}}/>
                                        <h4 style={{marginTop: '10px', marginLeft: '5px'}}>Statistics</h4>
                                    </div>
                                </CardTitle>
                                <CardBody className='statistics-body'>
                                    <Row>

                                        <Col xl={6} sm={12}>
                                            <Row>
                                                <Col xl={6} sm={12} className='mt-3'>
                                                    <div className='d-flex align-items-center'>
                                                        <Avatar color='light-primary' icon={<TrendingUp size={24} />} className='me-2' />
                                                        <div className='my-auto'>
                                                            <h4 className='fw-bolder mb-0'>{empDashboard.totalSale}</h4>
                                                            <CardText className='font-small-3 mb-0'>Sales</CardText>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xl={6} sm={6} className='mt-3'>
                                                    <div className='d-flex align-items-center'>
                                                        <Avatar color='light-info' icon={<User size={24} />} className='me-2' />
                                                        <div className='my-auto'>
                                                            <h4 className='fw-bolder mb-0'>{empDashboard.totalCustomer}</h4>
                                                            <CardText className='font-small-3 mb-0'>Customers</CardText>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xl={6} sm={6} className='mt-3'>
                                                    <div className='d-flex align-items-center'>
                                                        <Avatar color='light-danger' icon={<Box size={24} />} className='me-2' />
                                                        <div className='my-auto'>
                                                            <h4 className='fw-bolder mb-0'>{empDashboard.totalProduct}</h4>
                                                            <CardText className='font-small-3 mb-0'>Products</CardText>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xl={6} sm={6} className='mt-3'>
                                                    <div className='d-flex align-items-center'>
                                                        <Avatar color='light-success' icon={<DollarSign size={24} />} className='me-2' />
                                                        <div className='my-auto'>
                                                            <h4 className='fw-bolder mb-0'>{empDashboard.totalRevenue}</h4>
                                                            <CardText className='font-small-3 mb-0'>Revenue</CardText>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>

                                        <Col xl={6} sm={12}>
                                            <img src={statImg} style={{width: "auto", height: "145px", marginLeft: "72px", marginTop: '15%'}} />
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg='6' md='6' xs='12'>
                            <Card className='earnings-card' style={{background: 'rgba(40, 199, 111, 0.12)'}}>
                                <CardBody>
                                    <Row>
                                        <Col xs='6'>
                                            <CardTitle className='mb-1'>Top Restaurant</CardTitle>
                                            <img src={restImg} style={{width: "100px", height: "100px", marginBottom: "40px", marginTop: '25px', marginLeft: "20px"}} />
                                            <div className='font-small-2'>
                                                <Badge className=""
                                                       style={{marginLeft: "30px", fontSize: '15px'}}
                                                       color={restaurant.isActive ? 'light-success' : 'light-danger'}
                                                       pill>
                                                    {restaurant.isActive ? 'Active' : 'In Active'}
                                                </Badge>
                                            </div>
                                        </Col>
                                        <Col xs='6'>
                                            <CardTitle className='mb-1'>Featured Restaurant</CardTitle>
                                            {/*<h5 className='mb-1'>{restaurant.name ? restaurant.name : "Featured Restaurant"}</h5>*/}
                                            <h5 className='mb-1'>{restaurant.name}</h5>
                                            <h6 className='mb-1'>{restaurant.address?.address1}</h6>
                                            <CardText className='text-muted font-small-2'>
                                                <span style={{color: "black"}}> Contact: </span>
                                                <span className='fw-bolder' style={{color: "black", marginLeft: '5px'}}>{restaurant.phoneNo}</span>
                                            </CardText>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/*<Row className='match-height'>
                <Col lg='6' md='6' xs='12'>
                    <CardBrowserStates colors={colors} InvDistributorData={InvDistributorData} />
                </Col>
                <Col lg='6' md='6' xs='12'>
                    <CardTransactions selectedRestaurant={selectedRestaurant} />
                </Col>
            </Row>*/}

        </UILoader>
    )
}

export default EmployeeDashboard
