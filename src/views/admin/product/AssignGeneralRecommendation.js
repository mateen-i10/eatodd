import React, {Fragment, useState} from 'react'
import {useDispatch} from "react-redux"
import {toast} from "react-toastify"
import {Button, Col, Label, Modal, ModalBody, ModalHeader, Row} from "reactstrap"
import AsyncSelect from "react-select/async"
import {Delete, Plus} from "react-feather"
import {loadOptions} from "../../../utility/Utils"
import {setDetailLoading} from "../../../redux/generalRecommendation/reducer"
import {addGeneralRecommendationProduct} from "../../../redux/generalRecommendation/action"

const AssignGeneralRecommendation = (props) => {

    const RecommendedObject = {productId: 0, recommendedProducts: []}
    const [product, setProduct] = useState(RecommendedObject)

    const dispatch = useDispatch()

    const products = async (search) => {
        return loadOptions('product', search, 1, 10)
    }

    const onSelectProduct = (e) => {
        console.log('eee', e)
        setProduct({productId: e.value, recommendedProducts: product.recommendedProducts})
    }

    const onSelectRecommendedProduct = (e) => {
        console.log('eee', e)
        setProduct({productId: product.productId, recommendedProducts: e.map(l => l)})
    }

    const handleClose = () => {
        setProduct({productId: 0, RecommendedProducts: []})
    }

    const onModalClose = (event) => {
        props.onCloseModal(event)
        handleClose()
    }

    const handleSubmit = () => {
        try {
            console.log('recommendedProduct', product)
            const finalData = {
                productId: product.productId,
                recommendedProducts: product.recommendedProducts.map(p => p.value).toString()
            }
            dispatch(setDetailLoading(true))
            dispatch(addGeneralRecommendationProduct(finalData))
            console.log('finalData', finalData)
            onModalClose()
        } catch (e) {
            toast.error(e.message)
        }
    }

        return (
            <Fragment>
                <Modal isOpen={props.IsModalOpened} className='modal-dialog-centered modal-lg'>
                    <ModalHeader className='bg-transparent' onClick={e => onModalClose(e)}></ModalHeader>
                    <ModalBody className='mx-50 pb-5'>
                        <div className='text-center mb-2'>
                            <h1 className='mb-1'>Assign items To Product</h1>
                        </div>
                        <Row tag='form' className='gy-1 pt-75'>
                            <div className='col-6'>
                                <Label className='form-label' for='name'>Select General Product:</Label>
                                <AsyncSelect
                                    cacheOptions
                                    defaultOptions
                                    //defaultValue={i.generalProductId}
                                    onChange={(e) => onSelectProduct(e)}
                                    loadOptions={products}
                                    closeMenuOnSelect={true}
                                    isMulti = {false}
                                />
                            </div>
                            <div className='col-6'>
                                <Label className='form-label' for='name'>Select Location:</Label>
                                <AsyncSelect
                                    cacheOptions
                                    defaultOptions
                                    //defaultValue={productId}
                                    onChange={(e) => onSelectRecommendedProduct(e)}
                                    loadOptions={products}
                                    closeMenuOnSelect={true}
                                    isMulti = {true}
                                />
                            </div>
                            <Col xs={12} className='text-end mt-2 pt-50'>
                                <Button type='reset' color='secondary' onClick={e => onModalClose(e)}>
                                    Close
                                </Button>
                                <Button className='ms-1' color='primary' onClick={handleSubmit}>
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </ModalBody>
                </Modal>
            </Fragment>
        )

}

export default AssignGeneralRecommendation