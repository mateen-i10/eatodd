// ** React Imports
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Card, CardBody, CardText, Row, Col, Button, Label, Input} from 'reactstrap'
// ** Styles
import '../../../@core/scss/base/pages/app-invoice.scss'
import UILoader from "../../../@core/components/ui-loader"
import {getCategory, updateImage} from '../../../redux/restaurantPages/category/actions'

import useAPI from "../../../utility/customHooks/useAPI"

const CategoryDetail = ({match}) => {
    const id = match.params.id
    const dispatch = useDispatch()

    const Category = useSelector(state => state.category.object)

    console.log(Category, 'category')

    const defaultImage = require("../../../assets/images/default/defaultImage.png").default
    const [imageURL, setImageURL] = useState(!Category.attachment || !Category.attachment?.path ? defaultImage : '')
    const [imagePath, setImagePath] = useState('')

    // hooks
    const [isLoading, response] = useAPI(imagePath, 'get', {}, 'blob')

    useEffect(() => {
        if (Category.attachment && Category.attachment.path && Category.attachment.extension) {
            setImagePath(`media/getMediaByPath?path=${Category.attachment.path}&&extension=${Category.attachment.extension}`)
        }
    }, [Category.attachment])

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
        formData.append("attachmentId", Category.attachmentId)

        dispatch(updateImage(formData))
    }

    useEffect(() => {
        dispatch(getCategory(id))
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
                                <h2 className='mb-75'>Product Details</h2>
                                <Row>
                                    <Col xl={6}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Name:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText className="text-capitalize">{Category.name}</CardText>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className='mt-2 row'>
                                            <div className='col-5'>
                                                <h5 className='mb-75'>Description:</h5>
                                            </div>
                                            <div className='col-7'>
                                                <CardText>{Category.description}</CardText>
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

export default CategoryDetail
