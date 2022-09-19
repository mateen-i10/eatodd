// ** React Imports
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Card, CardBody, CardText, Row, Col, CardImg, Badge} from 'reactstrap'
// ** Styles
import '../../../@core/scss/base/pages/app-invoice.scss'
import coverImage from '@src/assets/images/pages/vuexy-login-bg.jpg'
import profileImage from '@src/assets/images/avatars/avatar-blank.png'
import UILoader from "../../../@core/components/ui-loader"
import {getEmployee} from "../../../redux/employee/action"

const profileImgStyle = {
    maxHeight: '115px',
    borderRadius: '80px'
}

const EmployeeDetail = ({match}) => {
    const id = match.params.id
    const dispatch = useDispatch()

    //getting data from store
    const isLoading = useSelector(state => state.employee.isDetailLoading)
    const employee = useSelector(state => state.employee.object)
    console.log('employeeDetail', employee)
    useEffect(() => {
        dispatch(getEmployee(id))
    }, [])

    return (
        <div>
            <UILoader blocking={isLoading}>
                <div className='invoice-preview-wrapper'>
                    <Row className='invoice-preview'>
                        <Col xl={12} md={12} sm={12}>

                            <Card className='profile-header mb-2'>
                                <CardImg src={coverImage} alt='User Profile Image' top style={{maxHeight: 150}}/>
                                <div className='position-absolute' style={{paddingLeft: "50px", paddingTop: "15px"}}>
                                    <div className='profile-img-container d-flex align-items-center'>
                                        <div className='profile-img'>
                                            <img className='img-fluid no-borderRadius' src={profileImage}
                                                 alt='Card image' style={profileImgStyle}/>
                                        </div>
                                        <div className='profile-title ms-3'>
                                            <h2 className='text-black text-capitalize'>{`${employee.applicationUser?.firstName}  ${employee.applicationUser?.lastName}`}</h2>
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
                                                <CardText
                                                    className="mmb-25 ms-1 mb-1">{`${employee.applicationUser?.firstName} ${employee.applicationUser?.lastName}`}</CardText>
                                            </div>
                                            <div className='mt-2 invoice-date-wrapper ps-1'>
                                                <p className='fw-bolder'>Email:</p>
                                                <CardText className="mmb-25 ms-1 mb-1">{employee.applicationUser?.email}</CardText>
                                            </div>
                                        </Col>
                                        <Col xl={6} className="p-0">
                                            <div className='mt-2 invoice-date-wrapper ps-1'>
                                                <p className='fw-bolder'>Contact Number:</p>
                                                <CardText className="mmb-25 ms-1 mb-1">{employee.applicationUser?.contactNo}</CardText>
                                            </div>
                                            <div className='mt-2 invoice-date-wrapper ps-1'>
                                                <p className='fw-bolder'>Status:</p>
                                                <Badge className="mmb-25 ms-1 mb-1"
                                                       color={employee.isActive ? 'light-success' : 'light-danger'}
                                                       pill>
                                                    {employee.isActive ? 'Active' : 'Inactive'}
                                                </Badge>
                                            </div>
                                        </Col>
                                        <Col xl={12} className="p-0">
                                            <div className='mt-2 invoice-date-wrapper ps-1'>
                                                <p className='fw-bolder'>Restaurants:</p>
                                                {employee.restaurants?.map(i => {
                                                    return <Badge key={i.id} className="mmb-25 ms-1 mb-1"
                                                                  color={'light-primary'}
                                                                  pill>
                                                        {i.restaurant.name}
                                                    </Badge>
                                                })}
                                            </div>
                                        </Col>
                                        <Col xl={12} className="p-0">
                                            <div className='mt-2 invoice-date-wrapper ps-1'>
                                                <p className='fw-bolder'>Permissions:</p>
                                                 <Badge className="mmb-25 ms-1 mb-1" color={'light-primary'} pill>
                                                     {` ${employee.applicationUser?.permission}  `}
                                                 </Badge>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>

                        </Col>
                    </Row>
                </div>
            </UILoader>
        </div>
    )
}

export default EmployeeDetail
