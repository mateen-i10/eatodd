// ** React Imports
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Card, CardBody, CardText, Row, Col, Badge, Table} from 'reactstrap'
// ** Styles
import '../../../@core/scss/base/pages/app-invoice.scss'
import UILoader from "../../../@core/components/ui-loader"
import {getReview} from "../../../redux/review/action"


const reviewDetail = ({match}) => {
    const id = match.params.id
    const dispatch = useDispatch()

    //getting data from store
    const isLoading = useSelector(state => state.review.isLoading)
    const review = useSelector(state => state.review.object)
    console.log('review', review)

    useEffect(() => {
        dispatch(getReview(id))
    }, [])

    return (
        <div>
            <UILoader blocking={isLoading}>
                <div className='invoice-preview-wrapper'>
                    <Row className='invoice-preview'>
                        <Col xl={12} md={12} sm={12}>
                            <Card className='invoice-preview-card'>
                                <CardBody className='invoice-padding pb-0'>
                                    {/* Header */}
                                    <div className='d-flex justify-content-between flex-md-row flex-column mt-1 '>
                                        <div className='logo-wrapper'>
                                            <h3 className='text-primary invoice-logo text-capitalize'>{review.personName}</h3>
                                        </div>
                                    </div>
                                    {/* /Header */}
                                </CardBody>

                                <hr className='' />

                                {/* Address and Contact */}
                                <CardBody className='invoice-padding pt-0'>
                                    <Row className='invoice-spacing'>

                                        <Col xl={6} className="p-0">
                                            <div className='mt-1 invoice-date-wrapper ps-1'>
                                                <p className='fw-bolder'>Name:</p>
                                                <CardText className="mmb-25 ms-1 mb-1">{review.personName}</CardText>
                                            </div>
                                        </Col>
                                        <Col xl={6} className="p-0">
                                            <div className='mt-2 invoice-date-wrapper ps-1'>
                                                <p className='fw-bolder'> Rating:</p>
                                                <CardText className="mmb-25 ms-1 mb-1" style= {{
                                                    color: 'goldenrod',
                                                    fontSize: '35px',
                                                    paddingTop: '15px'
                                                } }>
                                                    {review.rating === 1 ? '*' : review.rating === 2 ? '* *' : review.rating === 3 ? '* * *' : review.rating === 4 ? '* * * *' : review.rating === 5 ? '* * * * *' : ''}
                                                </CardText>
                                            </div>
                                        </Col>
                                        <Col xl={12} className="p-0">
                                            <div className='mt-2 invoice-date-wrapper ps-1'>
                                                <p className='fw-bolder'> Address:</p>
                                                <CardText className="mmb-25 ms-1 mb-1">{review.address}</CardText>
                                            </div>
                                        </Col>
                                    </Row>

                                    <hr className='invoice-spacing' />

                                    <Row className='invoice-spacing'>
                                        <Col col={12} className="p-0">
                                            <div className='mt-2 invoice-date-wrapper ps-1'>
                                                <p className='fw-bolder'>Description:</p>
                                                <CardText  className="mmb-25 ms-1 mb-1">
                                                    {review.description}
                                                </CardText>
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

export default reviewDetail

