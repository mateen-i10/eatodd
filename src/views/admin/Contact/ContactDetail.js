import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getContact} from "../../../redux/contact/action"
import {Card, CardBody, Col, Row} from 'reactstrap'
import UILoader from "../../../@core/components/ui-loader"
import moment from "moment"


const ContactDetail = ({match}) => {

    const storeState = useSelector(state => state)
    console.log("StoreState", storeState)
    const id = match.params.id
    const dispatch = useDispatch()

    const contactList = useSelector(state => state.contact.object.result)
    const isLoading = useSelector(state => state.contact.isLoading)

    console.log('contactList', contactList)
    useEffect(() => {
        dispatch(getContact(id))
    }, [])

    function getFormattedDate(eventDate) {
        const eventDateFormat = moment(eventDate).format('lll')
        return eventDateFormat
    }


    return (contactList !== undefined &&
        <UILoader blocking={isLoading}>
            <div className='invoice-preview-wrapper'>
                <Row className='invoice-preview'>
                    <Col xl={12} md={12} sm={12}>
                        <Card className='invoice-preview-card'>
                            <CardBody className='invoice-padding pb-0'>
                                {/* Header */}
                                <div className='d-flex justify-content-between flex-md-row flex-column mt-1 '>
                                    <div className='logo-wrapper'>
                                        <h3 className='text-primary invoice-logo text-capitalize'>{contactList.name}</h3>
                                    </div>
                                </div>
                                {/* /Header */}
                            </CardBody>

                            <hr className=''/>

                            {/* Address and Contact */}
                            <CardBody className='invoice-padding pt-0'>
                                <Row className='invoice-spacing'>
                                    <Col xl={6} className="p-0">
                                        <div className='mt-1 invoice-date-wrapper ps-1'>
                                            <span className='fw-bolder'>Name:</span>
                                            <span className="mmb-25 ms-1 mb-1">{contactList.name}</span>
                                        </div>
                                    </Col>
                                    <Col xl={6} className="p-0">
                                        <div className='mt-2 invoice-date-wrapper ps-1'>
                                            <span className='fw-bolder'> Email:</span>
                                            <span className="mmb-25 ms-1 mb-1">{contactList.eamil}</span>
                                        </div>
                                    </Col>
                                    <Col xl={6} className="p-0">
                                        <div className='mt-2 invoice-date-wrapper ps-1'>
                                            <span className='fw-bolder'> Contact No:</span>
                                            <span
                                                className="mmb-25 ms-1 mb-1">{contactList.contactNo}</span>
                                        </div>
                                    </Col>
                                    <Col xl={6} className="p-0">
                                        <div className='mt-2 invoice-date-wrapper ps-1'>
                                            <span className='fw-bolder'> No. of Attendees:</span>
                                            <span
                                                className="mmb-25 ms-1 mb-1">{contactList.noOfAttendees}</span>
                                        </div>
                                    </Col>
                                    <Col xl={6} className="p-0">
                                        <div className='mt-2 invoice-date-wrapper ps-1'>
                                            <span className='fw-bolder'> Event Date:</span>
                                            <span
                                                className="mmb-25 ms-1 mb-1">{getFormattedDate(contactList.eventDate)}</span>
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

export default ContactDetail
