// ** React Imports
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Card, CardBody, CardText, Row, Col, Badge, Table} from 'reactstrap'
// ** Styles
import '../../../@core/scss/base/pages/app-invoice.scss'
import tempimg from '../../../assets/images/images/images.jpg'
import UILoader from "../../../@core/components/ui-loader"
import {getRestaurant} from "../../../redux/restaurant/actions"

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
                    <Row className='p-2'>
                        <Col className='d-flex align-items-center justify-content-center mb-1 mb-md-0' md='5' xs='12'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <img className='img-fluid product-img' src={tempimg} alt="User Profile Image" style={{padding: 25}} />
                            </div>
                        </Col>
                        <Col md='7' xs='12'>
                            <CardBody style={{maxHeight: 450}}>
                                <h2 className='mb-75'>Restaurant Details</h2>
                                <Row>
                                    <Col xl={12}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Restaurant Name:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText className="text-capitalize">{restaurant.name}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={12}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Description:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{restaurant.description}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={12}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Address:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{restaurant.address}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={12}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Phone Number:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{restaurant.address}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={12}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Latitude:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{restaurant.latitude}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={12}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Longitude:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{restaurant.longitude}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={12}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Status:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <Badge className="mb-1"
                                                       color={restaurant.isActive ? 'light-success' : 'light-danger'}
                                                       pill>
                                                    {restaurant.isActive ? 'Active' : 'In Active'}
                                                </Badge>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Col>
                    </Row>
                    <hr />
                    <Row className='p-2'>
                        <Col md='12' xs='12'>
                            <CardBody>
                                <h2 className='mb-75'>Restaurant Schedules</h2>
                                <Table responsive>
                                    <thead>
                                    <tr>
                                        <th>Restaurant id</th>
                                        <th>Day</th>
                                        <th>Start Time</th>
                                        <th>End Time</th>
                                        <th>Status</th>
                                    </tr>
                                    </thead>
                                    {restaurant.restaurantSchedules?.map(i => (
                                        <tbody key={i.id}>
                                        <tr>
                                            <td>{i.restaurantId}</td>
                                            <td>{i.day}</td>
                                            <td>{i.endDate}</td>
                                            <td>{i.startDate}</td>
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
