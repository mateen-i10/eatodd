// ** React Imports
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Card, CardBody, CardText, Row, Col, Badge, Table} from 'reactstrap'
// ** Styles
import '../../../../@core/scss/base/pages/app-invoice.scss'
import tempimg from '../../../../../src/assets/images/images/images.jpg'
import UILoader from "../../../../@core/components/ui-loader"
import {getGenralProduct} from '../../../../redux/genralProduct/actions'

const ProductDetail = ({match}) => {
    const id = match.params.id
    const dispatch = useDispatch()

    //getting data from store
    const isLoading = useSelector(state => state.genralProduct.isLoading)
    const genralProduct = useSelector(state => state.genralProduct.object)
    console.log('genralProduct', genralProduct)
    useEffect(() => {
        dispatch(getGenralProduct(id))
    }, [])

    return (
        <div>
            <UILoader blocking={isLoading}>
                <Card>
                    <Row className='p-2'>
                        <Col className='d-flex' md='3' xs='12'>
                            <div className='d-flex'>
                                <img className='img-fluid product-img' src={tempimg} alt="User Profile Image" style={{padding: 25, maxHeight:266}} />
                            </div>
                        </Col>
                        <Col md='9' xs='12'>
                            <CardBody style={{maxHeight: 450}}>
                                <h2 className='mb-75'>Genral Product Details</h2>
                                <Row>
                                    <Col xl={6}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Name:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText className="text-capitalize">{genralProduct.name}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Description:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{genralProduct.description}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Discount:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{genralProduct.discount}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Quantity:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{genralProduct.quantity}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Tax Amount:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{genralProduct.taxAmount}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Tax Percentage:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{genralProduct.taxPercentage}</CardText>
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

export default ProductDetail

