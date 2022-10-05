// ** React Imports
import {Fragment, useEffect, useState} from 'react'

// ** Reactstrap Imports
import {
    Row,
    Col,
    Card,
    Label,
    Input,
    Button,
    CardBody,
    CardTitle, CardHeader
} from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import {getUserData} from "../../../auth/utils"
import {useDispatch, useSelector} from "react-redux"
import UILoader from "../../../@core/components/ui-loader"
import {getCustomerAddress, updateCustomerAddress} from "../../../redux/customer/actions"
import {toast} from "react-toastify"
import {setDetailLoading} from "../../../redux/customer/reducer"

import {Edit, Delete, Save} from "react-feather"

const BillingAddress = () => {
    const customerId = getUserData().customerId
    const dispatch = useDispatch()

    // ** States
    const  [showEdit, setShowEdit] = useState(false)

    const [billingCity, setBillingCity] = useState('')
    const [billingState, setBillingState] = useState('')
    const [billingCountry, setBillingCountry] = useState('')
    const [billingZipCode, setBillingZipCode] = useState('')
    const [billingPhoneNumber, setBillingPhoneNumber] = useState('')
    const [billingAddress1, setBillingAddress1] = useState('')

    const [shippingCity, setShippingCity] = useState('')
    const [shippingState, setShippingState] = useState('')
    const [shippingCountry, setShippingCountry] = useState('')
    const [shippingZipCode, setShippingZipCode] = useState('')
    const [shippingPhoneNumber, setShippingPhoneNumber] = useState('')
    const [shippingAddress1, setShippingAddress1] = useState('')

    //getting data from store
    const isLoading = useSelector(state => state.customer.isDetailLoading)
    const addressObj = useSelector(state => state.customer.addressObject)
    const isRequestCompleted = useSelector(state => state.customer.isRequestCompleted)
    const isSuccess = useSelector(state => state.customer.isSuccess)

    console.log("addressObj", addressObj)

    useEffect(() => {
        dispatch(getCustomerAddress(customerId))
    }, [])

    const setData = () => {
        try {
            billingAddress : {
                setBillingCity(addressObj.billingAddress?.city)
                setBillingState(addressObj.billingAddress?.state)
                setBillingCountry(addressObj.billingAddress?.country)
                setBillingZipCode(addressObj.billingAddress?.zipCode)
                setBillingPhoneNumber(addressObj.billingAddress?.phoneNumber)
                setBillingAddress1(addressObj.billingAddress?.address1)
            }
            shippingAddress : {
                setShippingCity(addressObj.shippingAddress?.city)
                setShippingState(addressObj.shippingAddress?.state)
                setShippingCountry(addressObj.shippingAddress?.country)
                setShippingZipCode(addressObj.shippingAddress?.zipCode)
                setShippingPhoneNumber(addressObj.shippingAddress?.phoneNumber)
                setShippingAddress1(addressObj.shippingAddress?.address1)
            }
        } catch (e) {
            toast.error(e.message)
        }

    }

    useEffect(() => {
        setData()
    }, [addressObj])

    useEffect(() => {
        if (isSuccess) {
            setShowEdit(false)
            dispatch(getCustomerAddress(customerId))
            setData()
        }
    }, [isRequestCompleted, isSuccess])

    const updateAddressDetail = () => {
        try {
            const data = {id: customerId,
                billingAddress: {
                    id: addressObj.billingAddress?.id,
                    city: billingCity,
                    state: billingState,
                    country: billingCountry,
                    zipCode: billingZipCode,
                    phoneNumber: billingPhoneNumber,
                    address1: billingAddress1
                },
                shippingAddress: {
                id: addressObj.shippingAddress?.id,
                    city: shippingCity,
                    state: shippingState,
                    country: shippingCountry,
                    zipCode: shippingZipCode,
                    phoneNumber: shippingPhoneNumber,
                    address1: shippingAddress1
                }
            }
            console.log('edit data', data)
            dispatch(setDetailLoading(true))
            dispatch(updateCustomerAddress(data))
        } catch (e) {
            toast.error(e.message)
        }

    }
    return (
        <Fragment>
            <UILoader blocking={isLoading}>
                <Card>
                    <CardHeader className='border-bottom mb-2'>
                        <CardTitle tag='h4'>Address</CardTitle>
                        <div>
                            {showEdit === false && <div>
                               <Button className="btn-sm" color='primary' onClick={() => setShowEdit(true)}>Edit</Button>
                            </div>}
                            {showEdit === true && <div>
                                <Button className="btn-sm" color='danger' onClick={() => setShowEdit(false)}>Delete</Button>
                                <Button className="btn-sm" color='primary' style={{marginLeft: 10}} onClick={updateAddressDetail}>Save</Button>
                            </div>}
                        </div>
                    </CardHeader>
                <CardBody>
                    <Row>
                        <Col xl='6' xs='12' style={{borderRight: '1px solid #a8a0a0'}}>
                            <CardTitle tag='h4'>Billing Address</CardTitle>

                            <Row tag='dl' className='mb-0'>

                                {showEdit === false && <>
                                    <Col tag='dt' sm='4' className='fw-bolder mb-1'>
                                        City:
                                    </Col>
                                    <Col tag='dd' sm='8' className='mb-1'>
                                        {addressObj.billingAddress?.city}
                                    </Col>
                                </>}
                                {showEdit === true &&  <Col sm='12' className='mb-1'>
                                    <Label className='form-label' for='billingCity'>
                                       City
                                    </Label>
                                    <Input value={billingCity} onChange={e => setBillingCity(e.target.value)} placeholder='Enter City'/>
                                </Col>}

                                {showEdit === false && <>
                                    <Col tag='dt' sm='4' className='fw-bolder mb-1'>
                                        State:
                                    </Col>
                                    <Col tag='dd' sm='8' className='mb-1'>
                                        {addressObj.billingAddress?.state}
                                    </Col>
                                </>}
                                {showEdit === true &&  <Col sm='12' className='mb-1'>
                                    <Label className='form-label' for='billingState'>
                                        State
                                    </Label>
                                    <Input value={billingState} onChange={e => setBillingState(e.target.value)} placeholder='Enter State'/>
                                </Col>}

                                {showEdit === false && <>
                                    <Col tag='dt' sm='4' className='fw-bolder mb-1'>
                                        Country:
                                    </Col>
                                    <Col tag='dd' sm='8' className='mb-1'>
                                        {addressObj.billingAddress?.country}
                                    </Col>
                                </>}
                                {showEdit === true &&  <Col sm='12' className='mb-1'>
                                    <Label className='form-label' for='billingCountry'>
                                        Country
                                    </Label>
                                    <Input value={billingCountry} onChange={e => setBillingCountry(e.target.value)} placeholder='Enter Country'/>
                                </Col>}

                                {showEdit === false && <>
                                    <Col tag='dt' sm='4' className='fw-bolder mb-1'>
                                        Zip Code:
                                    </Col>
                                    <Col tag='dd' sm='8' className='mb-1'>
                                        {addressObj.billingAddress?.zipCode}
                                    </Col>
                                </>}
                                {showEdit === true &&  <Col sm='12' className='mb-1'>
                                    <Label className='form-label' for='billingZipCode'>
                                        Zip Code
                                    </Label>
                                    <Input value={billingZipCode} onChange={e => setBillingZipCode(e.target.value)} placeholder='Enter Zip Code'/>
                                </Col>}

                                {showEdit === false && <>
                                    <Col tag='dt' sm='4' className='fw-bolder mb-1'>
                                        Phone Number:
                                    </Col>
                                    <Col tag='dd' sm='8' className='mb-1'>
                                        {addressObj.billingAddress?.phoneNumber}
                                    </Col>
                                </>}
                                {showEdit === true &&  <Col sm='12' className='mb-1'>
                                    <Label className='form-label' for='billingPhoneNumber'>
                                        Phone Number
                                    </Label>
                                    <Input value={billingPhoneNumber} onChange={e => setBillingPhoneNumber(e.target.value)} placeholder='Enter Contact Number'/>
                                </Col>}

                                {showEdit === false && <>
                                    <Col tag='dt' sm='4' className='fw-bolder mb-1'>
                                        Address:
                                    </Col>
                                    <Col tag='dd' sm='8' className='mb-1'>
                                        {addressObj.billingAddress?.address1}
                                    </Col>
                                </>}
                                {showEdit === true &&  <Col sm='12' className='mb-1'>
                                    <Label className='form-label' for='billingAddress1'>
                                        Address
                                    </Label>
                                    <Input value={billingAddress1} onChange={e => setBillingAddress1(e.target.value)} placeholder='Enter Address'/>
                                </Col>}

                            </Row>
                        </Col>
                        <Col xl='6' xs='12'>
                            <CardTitle tag='h4'>Shipping Address</CardTitle>

                            <Row tag='dl' className='mb-0'>

                                {showEdit === false && <>
                                    <Col tag='dt' sm='4' className='fw-bolder mb-1'>
                                        City:
                                    </Col>
                                    <Col tag='dd' sm='8' className='mb-1'>
                                        {addressObj.shippingAddress?.city}
                                    </Col>
                                </>}
                                {showEdit === true &&  <Col sm='12' className='mb-1'>
                                    <Label className='form-label' for='shippingCity'>
                                        City
                                    </Label>
                                    <Input value={shippingCity} onChange={e => setShippingCity(e.target.value)} placeholder='Enter City'/>
                                </Col>}

                                {showEdit === false && <>
                                    <Col tag='dt' sm='4' className='fw-bolder mb-1'>
                                        State:
                                    </Col>
                                    <Col tag='dd' sm='8' className='mb-1'>
                                        {addressObj.shippingAddress?.state}
                                    </Col>
                                </>}
                                {showEdit === true &&  <Col sm='12' className='mb-1'>
                                    <Label className='form-label' for='shippingState'>
                                        State
                                    </Label>
                                    <Input value={shippingState} onChange={e => setShippingState(e.target.value)} placeholder='Enter State'/>
                                </Col>}

                                {showEdit === false && <>
                                    <Col tag='dt' sm='4' className='fw-bolder mb-1'>
                                        Country:
                                    </Col>
                                    <Col tag='dd' sm='8' className='mb-1'>
                                        {addressObj.shippingAddress?.country}
                                    </Col>
                                </>}
                                {showEdit === true &&  <Col sm='12' className='mb-1'>
                                    <Label className='form-label' for='shippingCountry'>
                                        Country
                                    </Label>
                                    <Input value={shippingCountry} onChange={e => setShippingCountry(e.target.value)} placeholder='Enter Country'/>
                                </Col>}

                                {showEdit === false && <>
                                    <Col tag='dt' sm='4' className='fw-bolder mb-1'>
                                        Zip Code:
                                    </Col>
                                    <Col tag='dd' sm='8' className='mb-1'>
                                        {addressObj.shippingAddress?.zipCode}
                                    </Col>
                                </>}
                                {showEdit === true &&  <Col sm='12' className='mb-1'>
                                    <Label className='form-label' for='shippingZipCode'>
                                        Zip Code
                                    </Label>
                                    <Input value={shippingZipCode} onChange={e => setShippingZipCode(e.target.value)} placeholder='Enter Zip Code'/>
                                </Col>}

                                {showEdit === false && <>
                                    <Col tag='dt' sm='4' className='fw-bolder mb-1'>
                                        Phone Number:
                                    </Col>
                                    <Col tag='dd' sm='8' className='mb-1'>
                                        {addressObj.shippingAddress?.phoneNumber}
                                    </Col>
                                </>}
                                {showEdit === true &&  <Col sm='12' className='mb-1'>
                                    <Label className='form-label' for='shippingPhoneNumber'>
                                        Phone Number
                                    </Label>
                                    <Input value={shippingPhoneNumber} onChange={e => setShippingPhoneNumber(e.target.value)} placeholder='Enter Contact Number'/>
                                </Col>}

                                {showEdit === false && <>
                                    <Col tag='dt' sm='4' className='fw-bolder mb-1'>
                                        Address:
                                    </Col>
                                    <Col tag='dd' sm='8' className='mb-1'>
                                        {addressObj.shippingAddress?.address1}
                                    </Col>
                                </>}
                                {showEdit === true &&  <Col sm='12' className='mb-1'>
                                    <Label className='form-label' for='billingAddress1'>
                                        Address
                                    </Label>
                                    <Input value={shippingAddress1} onChange={e => setShippingAddress1(e.target.value)} placeholder='Enter Address'/>
                                </Col>}

                            </Row>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            </UILoader>
        </Fragment>
    )
}

export default BillingAddress
