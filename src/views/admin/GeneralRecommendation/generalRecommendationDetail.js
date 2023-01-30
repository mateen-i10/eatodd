// ** React Imports
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Card, CardBody, CardText, Row, Col, Badge, Table, CardImg} from 'reactstrap'
// ** Styles
import '../../../@core/scss/base/pages/app-invoice.scss'
import UILoader from "../../../@core/components/ui-loader"
import coverImage from '@src/assets/images/pages/vuexy-login-bg.jpg'
import {getGeneralRecommendation} from "../../../redux/generalRecommendation/action"

const generalRecommendationDetail = ({match}) => {
    const id = match.params.id
    const dispatch = useDispatch()
    console.log('match', match)

    //getting data from store
    const isLoading = useSelector(state => state.generalRecommendation.isLoading)
    const genRecommendation = useSelector(state => state.generalRecommendation.object)
    console.log('generalRecommendation', genRecommendation)

    useEffect(() => {
        dispatch(getGeneralRecommendation(id))
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
                                                <h2 className='text-black text-capitalize'>{genRecommendation?.product?.name}</h2>
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
                                                    <p className='fw-bolder'>Product Name:</p>
                                                    <CardText className="mmb-25 ms-1 mb-1">{genRecommendation?.product?.name}</CardText>
                                                </div>
                                                <div className='mt-2 invoice-date-wrapper ps-1'>
                                                    <p className='fw-bolder'>Recommended Products:</p>
                                                    <CardText className="mmb-25 ms-1 mb-1">
                                                        <Badge className="" color={'light-primary'} pill>
                                                            {genRecommendation?.recoProducts?.map(r => `${r.name },`)}
                                                        </Badge>
                                                    </CardText>
                                                </div>
                                            </Col>
                                        </Row>
                                        <hr />
                                    </CardBody>
                                </Card>

                            </Col>
                        </Row>
                    </div>
                </Card>
            </UILoader>
        </div>
    )
}

export default generalRecommendationDetail
