// ** React Imports
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Card, CardBody, CardText, Row, Col, Button, Label, Input, Badge, CardTitle} from 'reactstrap'
// ** Styles
import '../../../@core/scss/base/pages/app-invoice.scss'
import UILoader from "../../../@core/components/ui-loader"
import {getCustomer} from '../../../redux/customer/actions'
import {ArrowLeftCircle} from "react-feather"
import {useHistory} from "react-router-dom"

const CustomerDetail = ({match}) => {
    const id = match.params.id
    const dispatch = useDispatch()
    const history = useHistory()

    //getting data from store
    const isLoading = useSelector(state => state.customer.isLoading)
    const customer = useSelector(state => state.customer.object)

    console.log(customer.applicationUser, "whats this")


    useEffect(() => {
        dispatch(getCustomer(id))
    }, [])

    const goPackagesPage = () => {
        history.push('/customers')
    }

    return (
        <div>
            <UILoader blocking={isLoading}>
                <Card>
                    <Row>
                        <Col xl={12} lg={12} md={12}>
                            <CardTitle tag='h4' style={{paddingTop: '40px', paddingLeft: '30px', marginBottom: '0px'}}>
                                <span onClick={goPackagesPage} className='cursor-pointer me-1'>
                                    <ArrowLeftCircle size={30} style={{color: "#81be41"}}/>
                                </span>
                                Customer Detail
                            </CardTitle>
                        </Col>
                    </Row>
                    <Row className='p-2'>
                        <Col md='12' xs='12'>
                            <CardBody style={{maxHeight: 450}}>
                                <Row>
                                    <Col xl={6}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>First Name:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{customer.applicationUser?.firstName}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Last Name:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{customer.applicationUser?.lastName}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>User Name:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{customer.applicationUser?.userName}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Email:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{customer.applicationUser?.email}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Confirmation:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <Badge className='rounded-pill btn-sm' color={customer.applicationUser?.emailConfirmed ? 'primary' : 'danger'}>
                                                    <CardText>{customer.applicationUser?.emailConfirmed ? "Confirmed" : "Not Confirmed"}</CardText>
                                                </Badge>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Status:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <Badge className='rounded-pill btn-sm' color={customer.applicationUser?.isActive ? 'primary' : 'danger'}>
                                                    <CardText>{customer.applicationUser?.isActive ? "Active" : "Not Active"}</CardText>
                                                </Badge>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Col>
                    </Row>
                </Card>
            </UILoader>
        </div>
    )
}

export default CustomerDetail