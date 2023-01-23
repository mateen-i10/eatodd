// ** React Imports
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Card, CardBody, CardText, Row, Col, Button, Label, Input} from 'reactstrap'
// ** Styles
import '../../../../@core/scss/base/pages/app-invoice.scss'
import UILoader from "../../../../@core/components/ui-loader"
import {getGenralProduct, updateImage} from '../../../../redux/genralProduct/actions'
import useAPI from "../../../../utility/customHooks/useAPI"

const ProductDetail = ({match}) => {
    const id = match.params.id
    const dispatch = useDispatch()

    //getting data from store
    // const isLoading = useSelector(state => state.genralProduct.isLoading)
    const genralProduct = useSelector(state => state.genralProduct.object)

    const defaultImage = require("../../../../assets/images/default/defaultImage.png").default
    const [imageURL, setImageURL] = useState(!genralProduct.attachment || !genralProduct.attachment?.path ? defaultImage : '')
    const [imagePath, setImagePath] = useState('')

    // hooks
    const [isLoading, response] = useAPI(imagePath, 'get', {}, 'blob')

    useEffect(() => {
        if (genralProduct.attachment && genralProduct.attachment.path && genralProduct.attachment.extension) {
            setImagePath(`media/getMediaByPath?path=${genralProduct.attachment.path}&&extension=${genralProduct.attachment.extension}`)
        }
    }, [genralProduct.attachment])

    useEffect(() => {
        if (response) {
            setImageURL(URL.createObjectURL(response))
        }
    }, [response])

    const onChange = e => {
        const reader = new FileReader(),
            files = e.target.files
        reader.onload = function () {
            setImageURL(reader.result)
        }
        reader.readAsDataURL(files[0])
        const formData = new FormData()
        formData.append("image",  e.target.files[0])
        formData.append("attachmentId", genralProduct.attachmentId !== null ? genralProduct.attachmentId : 0)
        formData.append("entityId", genralProduct.attachmentId === null ? genralProduct.id : 0)
        formData.append("entityName", null)
        dispatch(updateImage(formData))
    }

    useEffect(() => {
        dispatch(getGenralProduct(id))
        console.log(imageURL, 'image url')
    }, [])

    return (
        <div>
            <UILoader blocking={isLoading}>
                <Card>
                    <Row className='p-2'>
                        {/*<Col className='d-flex' md='3' xs='12'>*/}
                        {/*    <div className='d-flex'>*/}
                        {/*        <img className='img-fluid product-img' src={tempimg} alt="User Profile Image" style={{padding: 25, maxHeight:266}} />*/}
                        {/*    </div>*/}
                        {/*</Col>*/}
                        <Col md='3' xs='12'>
                            <div className='text-center' style={{marginRight: 10, marginTop: 30}}>
                                <div className='me-25'>
                                    <img src={imageURL} alt="product image" height='100' width='100' />
                                </div>
                                <div className='text-center align-items-end mt-75 ms-1'>
                                    <Button tag={Label} className='mb-75 me-75' size='sm' color='primary'>
                                        Change Image
                                        <Input type='file' onChange={onChange} hidden accept='image/*' />
                                    </Button>
                                </div>
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
                                    <Col xl={6}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Whole Price:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{genralProduct.wholePrice}</CardText>
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

