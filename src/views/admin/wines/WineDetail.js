// ** React Imports
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Card, CardBody, CardText, Row, Col, Button, Label, Input} from 'reactstrap'
// ** Styles
import '../../../@core/scss/base/pages/app-invoice.scss'
import UILoader from "../../../@core/components/ui-loader"
import {getWine, updateImage} from '../../../redux/wines/actions'
// import ProductImage from "../../../home/components/product/ProductImage"
// import {default as defaultImage} from "../../../../assets/images/default/defaultImage.png";
import useAPI from "../../../utility/customHooks/useAPI"
// import {loadOptions} from "../../../../utility/Utils"

const ProductDetail = ({match}) => {
    const id = match.params.id
    const dispatch = useDispatch()

    //getting data from store
    // const isLoading = useSelector(state => state.product.isLoading)
    const wine = useSelector(state => state.wines.object)

    // console.log("product", product)

    const defaultImage = require("../../../assets/images/default/defaultImage.png").default
    const [imageURL, setImageURL] = useState(!wine.attachment || !wine.attachment?.path ? defaultImage : '')
    const [imagePath, setImagePath] = useState('')

    // hooks
    const [isLoading, response] = useAPI(imagePath, 'get', {}, 'blob')

    useEffect(() => {
        if (wine.attachment && wine.attachment.path && wine.attachment.extension) {
            setImagePath(`media/getMediaByPath?path=${wine.attachment.path}&&extension=${wine.attachment.extension}`)
        }
    }, [wine.attachment])

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
        formData.append("attachmentId", wine.attachmentId)

        dispatch(updateImage(formData))
    }

    useEffect(() => {
        dispatch(getWine(id))
        console.log(imageURL, 'image url')
    }, [])

    return (
        <div>
            <UILoader blocking={isLoading}>
                <Card>
                    <Row className='p-2'>
                        <Col md='3' xs='12'>
                            <div className='text-center' style={{marginRight: 10, marginTop: 30}}>
                                <div className='me-25'>
                                    {/*<img className='rounded me-50' src={avatar} alt='Generic placeholder image' height='100' width='100'/>*/}
                                    {/*<ProductImage attachment={product.attachment} styles={{width: "200px", height: "180px"}} />*/}
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
                                <h2 className='mb-75'>Wines Details</h2>
                                <Row>
                                    <Col xl={6}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Name:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText className="text-capitalize">{wine.name}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Description:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{wine.description}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Retail Price:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{wine.retailPrice}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Discount:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{wine.discount}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Quantity:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{wine.quantity}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Tax Amount:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{wine.taxAmount}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Tax Percentage:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{wine.taxPercentage}</CardText>
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
