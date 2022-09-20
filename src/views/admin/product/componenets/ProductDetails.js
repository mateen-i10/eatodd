// ** React Imports
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Card, CardBody, CardText, Row, Col, Badge, Table, Button, Label, Input} from 'reactstrap'
// ** Styles
import '../../../../@core/scss/base/pages/app-invoice.scss'
import tempimg from '../../../../../src/assets/images/images/images.jpg'
import UILoader from "../../../../@core/components/ui-loader"
import {getproduct} from '../../../../redux/products/actions'
// import {loadOptions} from "../../../../utility/Utils"
import httpService, {baseURL} from "../../../../utility/http"
import {toast} from "react-toastify"

const ProductDetail = ({match}) => {
    const id = match.params.id
    const dispatch = useDispatch()

    //getting data from store
    const isLoading = useSelector(state => state.product.isLoading)
    const product = useSelector(state => state.product.object)

    console.log("product", product)

    // const Images = async () => {
    //     return loadOptions(`/Media/GetMedia/${id}`)
    // }

    const Images = async () => {
        return httpService._get(`${baseURL}Media/GetMedia/${product.attachmentId}`)
            .then(response => {
                console.log('images', response)
                // success case
                if (response.status === 200 && response.data.statusCode === 200) {
                    return response.data.data.map(d =>  {
                        const img = JSON.stringify(d)
                        return {img}
                    })
                } else {
                    //general Error Action
                    toast.error(response.data.message)
                }
            }).catch(error => {
                toast.error(error.message)
            })
    }

    const [avatar, setAvatar] = useState(Images)

    const onChange = e => {
        const reader = new FileReader(),
            files = e.target.files
        reader.onload = function () {
            setAvatar(reader.result)
        }
        reader.readAsDataURL(files[0])
    }

    const handleImgReset = () => {
        setAvatar(tempimg)
    }

    useEffect(() => {
        dispatch(getproduct(id))
    }, [])

    return (
        <div>
            <UILoader blocking={isLoading}>
                <Card>
                    <Row className='p-2'>
                        <Col md='3' xs='12'>
                            <div className='text-center' style={{marginRight: 10, marginTop: 30}}>
                                <div className='me-25'>
                                    <img className='rounded me-50' src={avatar} alt='Generic placeholder image' height='100' width='100'/>
                                </div>
                                <div className='d-flex align-items-end mt-75 ms-1'>
                                    <div>
                                        <Button tag={Label} className='mb-75 me-75' size='sm' color='primary'>
                                            Upload
                                            <Input type='file' onChange={onChange} hidden accept='image/*'/>
                                        </Button>
                                        <Button className='mb-75 mx-1' color='secondary' size='sm' outline onClick={handleImgReset}>
                                            Reset
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md='9' xs='12'>
                            <CardBody style={{maxHeight: 450}}>
                                <h2 className='mb-75'>Product Details</h2>
                                <Row>
                                    <Col xl={6}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Name:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText className="text-capitalize">{product.name}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Description:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{product.description}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Retail Price:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{product.retailPrice}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Discount:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{product.discount}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Quantity:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{product.quantity}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Tax Amount:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{product.taxAmount}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Tax Percentage:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{product.taxPercentage}</CardText>
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
