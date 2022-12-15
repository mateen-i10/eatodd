// ** React Imports
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Card, CardBody, CardText, Row, Col, Badge, Table, CardImg} from 'reactstrap'
// ** Styles
import '../../../@core/scss/base/pages/app-invoice.scss'
import UILoader from "../../../@core/components/ui-loader"
import coverImage from '@src/assets/images/pages/vuexy-login-bg.jpg'
import moment from "moment"
import {getCampaign} from "../../../redux/campaign/action"

const campaignDetail = ({match}) => {
    const id = match.params.id
    const dispatch = useDispatch()

    //getting data from store
    const isLoading = useSelector(state => state.campaign.isLoading)
    const campaign = useSelector(state => state.campaign.object)
    console.log('campaign', campaign)
    useEffect(() => {
        dispatch(getCampaign(id))
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
                                                <h2 className='text-black text-capitalize'>{`${campaign.name} `}</h2>
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
                                                    <CardText className="mmb-25 ms-1 mb-1">{`${campaign.name}`}</CardText>
                                                </div>
                                                <div className='mt-2 invoice-date-wrapper ps-1'>
                                                    <p className='fw-bolder'>Template:</p>
                                                    <CardText className="mmb-25 ms-1 mb-1">
                                                        <Badge className="" color={'light-success'} pill>
                                                            {campaign.template?.name}
                                                        </Badge>
                                                    </CardText>
                                                </div>
                                            </Col>
                                            <Col xl={6} className="p-0">
                                                <div className='mt-2 invoice-date-wrapper ps-1'>
                                                    <p className='fw-bolder'>Announce Type:</p>
                                                    <CardText className="mmb-25 ms-1 mb-1">
                                                        <Badge className="" color={'light-success'} pill>
                                                            {campaign.type === 1 ? 'SMS' : 'Email'}
                                                        </Badge>
                                                    </CardText>
                                                </div>
                                            </Col>
                                        </Row>
                                        <hr />
                                        <Row>
                                            <h2 className='mb-75'>Template Detail:</h2>
                                            <Col xl={6} className="p-0">
                                                <div className='mt-2 invoice-date-wrapper ps-1'>
                                                    <p className='fw-bolder'>Template Name:</p>
                                                    <CardText className="mmb-25 ms-1 mb-1">{`${campaign.template?.name}`}</CardText>
                                                </div>
                                                {/*<div className='mt-2 invoice-date-wrapper ps-1'>
                                                    <p className='fw-bolder'>isHTML:</p>
                                                    <CardText className="mmb-25 ms-1 mb-1">
                                                        <Badge className="" color={'light-success'} pill>
                                                            {campaign.template?.isHtml ? 'True' : 'False'}
                                                        </Badge>
                                                    </CardText>
                                                </div>*/}
                                            </Col>
                                            <Col xl={6} className="p-0">
                                                <div className='mt-2 invoice-date-wrapper ps-1'>
                                                    <p className='fw-bolder'>Subject:</p>
                                                    <CardText className="mmb-25 ms-1 mb-1">
                                                        <Badge className="" color={'light-success'} pill>
                                                            {campaign.template?.subject}
                                                        </Badge>
                                                    </CardText>
                                                </div>
                                            </Col>
                                            <Col xl={6} className="p-0">
                                                <div className='mt-2 invoice-date-wrapper ps-1'>
                                                    <p className='fw-bolder'>Body:</p>
                                                    <CardText className="mmb-25 ms-1 mb-1">
                                                        {campaign.template?.body}
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
                                        <th>Schedule Day</th>
                                        <th>Date</th>
                                        <th>Repeat</th>
                                    </tr>
                                    </thead>
                                    {campaign.schedules?.map(i => (
                                        <tbody key={i.scheduleDay}>
                                        <tr>
                                            <td>{i.scheduleDay === 1 ? 'Today' : i.scheduleDay === 2 ? 'Tomorrow' : i.scheduleDay === 3 ? 'Next Week' : i.scheduleDay === 4 ? 'Pick A Date' : '--'}</td>
                                            <td>{i.scheduleDate ? moment(i.scheduleDate).format('DD-MM-YY, hh:mm:A') : '--'}</td>
                                            <td>{i.repeat === 1 ? 'Daily' : i.repeat === 2 ? 'Week Days' : i.repeat === 3 ? 'Weekly' : i.repeat === 4 ? 'Monthly' : '--' }</td>
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

export default campaignDetail
