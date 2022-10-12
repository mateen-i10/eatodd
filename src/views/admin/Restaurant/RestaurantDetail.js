// ** React Imports
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Card, CardBody, CardText, Row, Col, Badge, Table, CardImg} from 'reactstrap'
// ** Styles
import '../../../@core/scss/base/pages/app-invoice.scss'
import UILoader from "../../../@core/components/ui-loader"
import {getRestaurant} from "../../../redux/restaurant/actions"
import {WeekDays} from "../../../utility/enums/WeekDays"
import coverImage from '@src/assets/images/pages/vuexy-login-bg.jpg'
import moment from "moment"

const RestaurantDetail = ({match}) => {
    const id = match.params.id
    const dispatch = useDispatch()

    //getting data from store
    const isLoading = useSelector(state => state.restaurant.isLoading)
    const restaurant = useSelector(state => state.restaurant.object)
    console.log('restaurant', restaurant)
    useEffect(() => {
        dispatch(getRestaurant(id))
    }, [])

    return (
        <div>
            <UILoader blocking={isLoading}>
                <Card>
                    <div className='invoice-preview-wrapper'>
                        <Row className='invoice-preview'>
                            <Col xl={12} md={12} sm={12}>

                                <Card className='profile-header mb-2'>
                                    <CardImg src={coverImage} alt='User Profile Image' top style={{maxHeight: 150}}/>
                                    <div className='position-absolute' style={{paddingLeft: "50px", paddingTop: "15px"}}>
                                        <div className='profile-img-container d-flex align-items-center'>
                                            <div className='profile-title ms-3 mt-3'>
                                                <h2 className='text-black text-capitalize'>{`${restaurant.name} `}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </Card>

                                <Card>
                                    <CardBody>
                                        <h2 className='mb-75'>Detail:</h2>
                                        <Row>
                                            <Col xl={6} className="p-0">
                                                <div className='mt-2 invoice-date-wrapper ps-1'>
                                                    <p className='fw-bolder'>Name:</p>
                                                    <CardText className="mmb-25 ms-1 mb-1">{`${restaurant.name}`}</CardText>
                                                </div>
                                                <div className='mt-2 invoice-date-wrapper ps-1'>
                                                    <p className='fw-bolder'>Phone No:</p>
                                                    <CardText className="mmb-25 ms-1 mb-1">{restaurant.phoneNo}</CardText>
                                                </div>
                                            </Col>
                                            <Col xl={6} className="p-0">
                                                <div className='mt-2 invoice-date-wrapper ps-1'>
                                                    <p className='fw-bolder'>Latitude:</p>
                                                    <CardText className="mmb-25 ms-1 mb-1">{restaurant.address?.latitude}</CardText>
                                                </div>
                                                <div className='mt-2 invoice-date-wrapper ps-1'>
                                                    <p className='fw-bolder'>Longitude:</p>
                                                    <CardText className="mmb-25 ms-1 mb-1">{restaurant.address?.longitude}</CardText>
                                                </div>
                                            </Col>
                                            <Col xl={6} className="p-0">
                                                <div className='mt-2 invoice-date-wrapper ps-1'>
                                                    <p className='fw-bolder'>Status:</p>
                                                    <CardText className="mmb-25 ms-1 mb-1">
                                                        <Badge className=""
                                                               color={restaurant.isActive ? 'light-success' : 'light-danger'}
                                                               pill>
                                                            {restaurant.isActive ? 'Active' : 'In Active'}
                                                        </Badge>
                                                    </CardText>
                                                </div>
                                            </Col>
                                            <Col xl={12} className="p-0">
                                                <div className='mt-2 invoice-date-wrapper ps-1'>
                                                    <p className='fw-bolder'>Address:</p>
                                                    <CardText className="mmb-25 ms-1 mb-1">
                                                        {` ${restaurant.address?.address1}  `}
                                                    </CardText>
                                                </div>
                                            </Col>
                                            <Col xl={12} className="p-0">
                                                <div className='mt-2 invoice-date-wrapper ps-1'>
                                                    <p className='fw-bolder'>Description:</p>
                                                    <CardText className="mmb-25 ms-1 mb-1">
                                                        {` ${restaurant.description}  `}
                                                    </CardText>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>

                            </Col>
                        </Row>
                    </div>

                    <hr />
                    <Row className='p-2'>
                        <Col md='12' xs='12'>
                            <CardBody>
                                <h2 className='mb-75'>Restaurant Schedules</h2>
                                <Table responsive>
                                    <thead>
                                    <tr>
                                        <th>Day</th>
                                        <th>Start Time</th>
                                        <th>End Time</th>
                                        <th>Status</th>
                                    </tr>
                                    </thead>
                                    {restaurant.restaurantSchedules?.map(i => (
                                        <tbody key={WeekDays[i.day]}>
                                        <tr>
                                            <td>{WeekDays[i.day]}</td>
                                            <td>{i.startDate ? moment(i.startDate).format('hh:mm:A') : '--'}</td>
                                            <td>{i.startDate ? moment(i.endDate).format('hh:mm:A') : '--'}</td>
                                            <td>{i.isClosed ? "Closed" : "Not Closed"}</td>
                                        </tr>
                                        </tbody>
                                    ))}
                                </Table>
                            </CardBody>
                        </Col>
                    </Row>
                </Card>
            </UILoader>
        </div>
    )
}

export default RestaurantDetail
