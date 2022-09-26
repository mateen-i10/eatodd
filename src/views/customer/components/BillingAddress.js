// ** React Imports
import {Fragment, useEffect, useState} from 'react'

// ** Reactstrap Imports
import {
    Row,
    Col,
    Card,
    Label,
    Input,
    Modal,
    Button,
    CardBody,
    CardTitle,
    ModalBody,
    CardHeader,
    ModalHeader,
    FormFeedback
} from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import {getUserData} from "../../../auth/utils"
import {useDispatch, useSelector} from "react-redux"
import UILoader from "../../../@core/components/ui-loader"
import {getCustomerAddress} from "../../../redux/customer/actions"

const BillingAddress = () => {
    const customerId = getUserData().customerId
    console.log('customerId', customerId)
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
    //const isRequestCompleted = useSelector(state => state.customer.isRequestCompleted)
    //const isSuccess = useSelector(state => state.customer.isSuccess)

    console.log("addressObj", addressObj)

    useEffect(() => {
        dispatch(getCustomerAddress(customerId))
    }, [])

    // ** Hooks

    return (
        <Fragment>
            <UILoader blocking={isLoading}>
                <Card>
                <Row className='pe-3 pt-3'>
                    <Col xl='6'></Col>
                    {showEdit === false && <Col className='p-0' xl='6'>
                            <Button className='float-end' color='primary' onClick={() => setShowEdit(true)}>
                                Edit Address
                            </Button>
                        </Col>}
                    {showEdit === true && <Col className='p-0' xl='6'>
                            <Button color='primary' className='float-end'>
                                <span className='align-middle d-sm-inline-block d-none'>Save</span>
                            </Button>
                            <Button color='danger' className='float-end me-2' onClick = {() => {
                                setShowEdit(false)
                            }}>
                                <span className='align-middle d-sm-inline-block d-none'>Cancel</span>
                            </Button>
                        </Col>}
                </Row>
                <hr />
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
                                        lahore
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
                                        Punjab
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
                                        Pakistan
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
                                        37300
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
                                        37300-123-456777
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
                                        Lahore punjab pakistan street # 1
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
                                        lahore
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
                                        Punjab
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
                                        Pakistan
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
                                        37300
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
                                        37300-123-456777
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
                                        Lahore punjab pakistan street # 1
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
