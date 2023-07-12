import {useState} from "react"
import {useDispatch} from "react-redux"
import {Button, Card, CardBody, CardHeader, CardText, CardTitle, Col, Input, Label, Row} from 'reactstrap'
import {addBillingAddress, addShippingAddress} from "../../../redux/cartItems/cartItemsReducer"
import Joi from "joi-browser"

const Address = props => {

    //schema for validation
    const schema = Joi.object({
        shipCity: Joi.string().required().label("Shipping Town/City"),
        shipState: Joi.string().required().label("Shipping State"),
        shipCountry: Joi.string().required().label("Shipping Country"),
        shipPhoneNo: Joi.number().required().label("Shipping Phone Number"),
        shipZipCode: Joi.number().required().label("Shipping Zip Code"),
        shipAddress: Joi.string().required().label("Shipping Address"),
        billCity: Joi.string().required().label("Billing Town/City"),
        billState: Joi.string().required().label("Billing State"),
        billCountry: Joi.string().required().label("Billing Country"),
        billPhoneNo: Joi.number().required().label("Billing Phone Number"),
        billZipCode: Joi.number().required().label("Billing Zip Code"),
        billAddress: Joi.string().required().label("Billing Address")
    })
    // ** Props
    const {stepper} = props

    // local states
    const [shipCity, setShipCity] = useState()
    const [shipState, setShipState] = useState()
    const [shipCountry, setShipCountry] = useState()
    const [shipZipCode, setShipZipCode] = useState()
    const [shipPhoneNo, setShipPhoneNo] = useState()
    const [shipAddress, setShipAddress] = useState()
    const [billCity, setBillCity] = useState()
    const [billState, setBillState] = useState()
    const [billCountry, setBillCountry] = useState()
    const [billZipCode, setBillZipCode] = useState()
    const [billPhoneNo, setBillPhoneNo] = useState()
    const [billAddress, setBillAddress] = useState()
    const [customerNote, setCustomerNote] = useState()
    const [errors, setErrors] = useState({})

    // hooks
    const dispatch = useDispatch()

    // functions
    const onSubmit = (e) => {
        e.preventDefault()
        const billAdd = {
            billCity,
            billState,
            billCountry,
            billZipCode,
            billPhoneNo,
            billAddress
        }
        const shipAdd = {
            shipCity,
            shipState,
            shipCountry,
            shipZipCode,
            shipPhoneNo,
            shipAddress
        }
        const note = localStorage.setItem('note', customerNote)
        const result = Joi.validate({...shipAdd, ...billAdd}, schema, {abortEarly: false})
        console.log('result', result)
        const final = {...result, note}
        console.log('final', final)
        const {error} = final
        if (!error) {
            dispatch(addShippingAddress({
                city: shipCity,
                state: shipState,
                country: shipCountry,
                zipCode: shipZipCode,
                phoneNumber: shipPhoneNo,
                address1: shipAddress
            }))
            dispatch(addBillingAddress({
                city: billCity,
                state: billState,
                country: billCountry,
                zipCode: billZipCode,
                phoneNumber: billPhoneNo,
                address1: billAddress
            }))
            stepper.next()
            console.log("ship add and bill add", shipAdd, billAdd)
        } else {
            const errorData = {}
            for (const item of error.details) {
                const name = item.path[0]
                const message = item.message
                errorData[name] = message
            }
            // console.log(errors)
            setErrors(errorData)
            return errorData
        }


    }
    // console.log("error state", errors)

    return (
        <>
            <div className='container-sm'>
                <Row>
                    <Col xl={9}>
                        <Card>
                            <CardHeader className='flex-column align-items-start'>
                                <CardTitle tag='h4'>Add New Address</CardTitle>
                                <CardText className='text-muted mt-25'>
                                    Be sure to check "Deliver to this address" when you have finished
                                </CardText>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col sm='6'>
                                        <Card>
                                            <CardHeader className='flex-column align-items-start'>
                                                <CardTitle tag='h4'>Shipping Address</CardTitle>
                                            </CardHeader>
                                            <CardBody>
                                                <Col sm='12'>
                                                    <div className='mb-2'>
                                                        <Label className='form-label' for='city'>
                                                            Town/City:
                                                        </Label>
                                                        <Input
                                                            id='city'
                                                            name='shipCity'
                                                            placeholder='Los Angeles'
                                                            onChange={(e) => setShipCity(e.target.value)}
                                                            invalid={!shipCity ? errors.shipCity && true : null}
                                                        />
                                                        {!shipCity ? errors.shipCity && (
                                                            <div className="text-danger">
                                                                {errors.shipCity}
                                                            </div>
                                                        ) : null}
                                                    </div>
                                                </Col>
                                                <Col sm='12'>
                                                    <div className='mb-2'>
                                                        <Label className='form-label' for='state'>
                                                            State:
                                                        </Label>
                                                        <Input
                                                            id='state'
                                                            name="shipState"
                                                            placeholder='California'
                                                            onChange={(e) => setShipState(e.target.value)}
                                                            invalid={!shipState ? errors.shipState && true : null}
                                                        />
                                                        {!shipState ? errors.shipState && (
                                                            <div className="text-danger">
                                                                {errors.shipState}
                                                            </div>
                                                        ) : null}
                                                    </div>
                                                </Col>
                                                <Col sm='12' className='mb-1'>
                                                    <Label className='form-label' for='country'>
                                                        Country
                                                    </Label>
                                                    <Input
                                                        id='country'
                                                        name='shipCountry'
                                                        placeholder='USA'
                                                        onChange={(e) => setShipCountry(e.target.value)}
                                                        invalid={!shipCountry ? errors.shipCountry && true : null}
                                                    />
                                                    {!shipCountry ? errors.shipCountry && (
                                                        <div className="text-danger">
                                                            {errors.shipCountry}
                                                        </div>
                                                    ) : null}
                                                </Col>
                                                <Col sm='12' className='mb-2'>
                                                    <Label className='form-label' for='zipCodeAddress'>
                                                        Zip Code
                                                    </Label>
                                                    <Input type='number'
                                                           id='zipCodeAddress'
                                                           name='shipZipCode'
                                                           placeholder='123456'
                                                           maxLength='6'
                                                           onChange={(e) => setShipZipCode(e.target.value)}
                                                           invalid={!shipZipCode ? errors.shipZipCode : null}
                                                    />
                                                    {!shipZipCode ? errors.shipZipCode && (
                                                        <div className="text-danger">
                                                            {errors.shipZipCode}
                                                        </div>
                                                    ) : null}
                                                </Col>
                                                <Col sm='12'>
                                                    <div className='mb-2'>
                                                        <Label className='form-label' for='phonenumb'>
                                                            Mobile Number:
                                                        </Label>
                                                        <Input
                                                            type='number'
                                                            id='phonenumb'
                                                            name='shipPhoneNo'
                                                            placeholder='01245667'
                                                            onChange={(e) => setShipPhoneNo(e.target.value)}
                                                            invalid={!shipPhoneNo ? errors.shipPhoneNo && true : null}
                                                        />
                                                        {!shipPhoneNo ? errors.shipPhoneNo && (
                                                            <div className="text-danger">
                                                                {errors.shipPhoneNo}
                                                            </div>
                                                        ) : null}
                                                    </div>
                                                </Col>
                                                <Col sm='12'>
                                                    <div className='mb-2'>
                                                        <Label className='form-label' for='checkoutLandmark'>
                                                            Address:
                                                        </Label>
                                                        <Input
                                                            id='checkoutLandmark'
                                                            placeholder='Near Apollo Hospital'
                                                            name='shipAddress'
                                                            onChange={(e) => setShipAddress(e.target.value)}
                                                            invalid={!shipAddress ? errors.shipAddress && true : null}
                                                        />
                                                        {!shipAddress ? errors.shipAddress && (
                                                            <div className="text-danger">
                                                                {errors.shipAddress}
                                                            </div>
                                                        ) : null}
                                                    </div>
                                                </Col>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col md='6' sm='12'>
                                        <Card>
                                            <CardHeader className='flex-column align-items-start'>
                                                <CardTitle tag='h4'>Billing Address</CardTitle>
                                            </CardHeader>
                                            <CardBody>
                                                <Col sm='12'>
                                                    <div className='mb-2'>
                                                        <Label className='form-label' for='city'>
                                                            Town/City:
                                                        </Label>
                                                        <Input
                                                            id='city'
                                                            name='billCity'
                                                            placeholder='Los Angeles'
                                                            onChange={(e) => setBillCity(e.target.value)}
                                                            invalid={!billCity ? errors.billCity && true : null}
                                                        />
                                                        {!billCity && errors.billCity && (
                                                            <div className="text-danger">
                                                                {errors.billCity}
                                                            </div>
                                                        )}
                                                    </div>
                                                </Col>
                                                <Col sm='12'>
                                                    <div className='mb-2'>
                                                        <Label className='form-label' for='state'>
                                                            State:
                                                        </Label>
                                                        <Input
                                                            id='state'
                                                            name='billState'
                                                            placeholder='California'
                                                            onChange={(e) => setBillState(e.target.value)}
                                                            invalid={!billState ? errors.billState && true : null}
                                                        />
                                                        {!billState && errors.billState && (
                                                            <div className="text-danger">
                                                                {errors.billState}
                                                            </div>
                                                        )}

                                                    </div>
                                                </Col>
                                                <Col sm='12' className='mb-1'>
                                                    <Label className='form-label' for='country'>
                                                        Country
                                                    </Label>
                                                    <Input
                                                        id='country'
                                                        name='billCountry'
                                                        placeholder='USA'
                                                        onChange={(e) => setBillCountry(e.target.value)}
                                                        invalid={!billCountry ? errors.billCountry && true : null}
                                                    />
                                                    {!billCountry && errors.billCountry && (
                                                        <div className="text-danger">
                                                            {errors.billCountry}
                                                        </div>
                                                    )}
                                                </Col>
                                                <Col sm='12' className='mb-2'>
                                                    <Label className='form-label' for='zipCodeAddress'>
                                                        Zip Code
                                                    </Label>
                                                    <Input type='number' id='zipCodeAddress' name='billZipCode'
                                                           placeholder='123456' maxLength='6'
                                                           onChange={(e) => setBillZipCode(e.target.value)}
                                                           invalid={!billZipCode ? errors.billZipCode && true : null}
                                                    />
                                                    {!billZipCode && errors.billZipCode && (
                                                        <div className="text-danger">
                                                            {errors.billZipCode}
                                                        </div>
                                                    )}
                                                </Col>
                                                <Col sm='12'>
                                                    <div className='mb-2'>
                                                        <Label className='form-label' for='phonenumb'>
                                                            Mobile Number:
                                                        </Label>
                                                        <Input
                                                            type='number'
                                                            id='phonenumb'
                                                            name='billPhoneNo'
                                                            placeholder='012345698'
                                                            onChange={(e) => setBillPhoneNo(e.target.value)}
                                                            invalid={!billPhoneNo ? errors.billPhoneNo && true : null}
                                                        />
                                                        {!billPhoneNo && errors.billPhoneNo && (
                                                            <div className="text-danger">
                                                                {errors.billPhoneNo}
                                                            </div>
                                                        )}
                                                    </div>
                                                </Col>
                                                <Col sm='12'>
                                                    <div className='mb-2'>
                                                        <Label className='form-label' for='checkoutLandmark'>
                                                            Address:
                                                        </Label>
                                                        <Input
                                                            id='checkoutLandmark'
                                                            name='billAddress'
                                                            placeholder='Near Apollo Hospital'
                                                            onChange={(e) => setBillAddress(e.target.value)}
                                                            invalid={!billAddress ? errors.billAddress && true : null}
                                                        />
                                                        {!billAddress && errors.billAddress && (
                                                            <div className="text-danger">
                                                                {errors.billAddress}
                                                            </div>
                                                        )}
                                                    </div>
                                                </Col>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col md='6'>
                                        <Input
                                            id='note'
                                            name='customerNote'
                                            placeholder='Enter Note'
                                            onChange={(e) => setCustomerNote(e.target.value)}
                                        />
                                    </Col>
                                    <Col sm='6'>
                                        <Button color='primary' onClick={() => stepper.previous()}>
                                            Go Back
                                        </Button>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xl={3}>
                        <div className='customer-card'>
                            <Card>
                                <CardHeader>
                                    <CardTitle tag='h4'>Shipping Address</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <CardText>{shipAddress !== undefined ? `Shipping Address: ${shipAddress}` : ''}</CardText>
                                    <CardText>{shipPhoneNo !== undefined ? `Phone Number: ${shipPhoneNo}` : ''}</CardText>


                                {shipAddress !== undefined ? <Button
                                    block
                                    type='button'
                                    color='primary'
                                    onClick={onSubmit}
                                    className="btn-next delivery-address text-uppercase"
                                >
                                    Deliver To This Address
                                </Button> : []}
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Address
