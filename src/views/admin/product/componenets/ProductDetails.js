// ** React Imports
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Card, CardBody, CardText, Row, Col, Badge, Table} from 'reactstrap'
// ** Styles
import '../../../../@core/scss/base/pages/app-invoice.scss'
import tempimg from '../../../../../src/assets/images/images/images.jpg'
import UILoader from "../../../../@core/components/ui-loader"
import {getproduct} from '../../../../redux/products/actions'

const ProductDetail = ({match}) => {
    const id = match.params.id
    const dispatch = useDispatch()

    //getting data from store
    const isLoading = useSelector(state => state.product.isLoading)
    const product = useSelector(state => state.product.object)
    console.log('product', product)
    useEffect(() => {
        dispatch(getproduct(id))
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
                            <CardBody>
                                <h2 className='mb-75'>Product Details</h2>
                                <Row>
                                    <Col xl={12}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Product Name:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText className="text-capitalize">{product.name}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={12}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Description:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{product.description}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={12}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Online Price:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{product.onlinePrice}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={12}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Quantity :</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{product.quantity}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={12}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Retail Price:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{product.retailPrice}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={12}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Tax Amount:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{product.taxAmount}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={12}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Tax Percentage:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{product.taxPercentage}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={12}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Whole Price:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{product.wholePrice}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={12}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Discount:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{product.discount}</CardText>
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
