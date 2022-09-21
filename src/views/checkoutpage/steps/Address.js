import {useState} from "react"
import {useDispatch} from "react-redux"
import {Button, Card, CardBody, CardHeader, CardText, CardTitle, Col, Form, Input, Label, Row} from 'reactstrap'
import {addBillingAddress, addShippingAddress} from "../../../redux/cartItems/cartItemsReducer"

const Address = props => {
    // ** Props
    const {stepper} = props

    // local states
    const [userAddress, setUserAddress] = useState("")
    const [userNumber, setUserNumber] = useState(0)
    const [shipCity, setShipCity] = useState("")
    const [shipState, setShipState] = useState("")
    const [shipCountry, setShipCountry] = useState("")
    const [shipZipCode, setShipZipCode] = useState(0)
    const [shipPhoneNo, setShipPhoneNo] = useState(0)
    const [shipAddress, setShipAddress] = useState("")
    const [billCity, setBillCity] = useState("")
    const [billState, setBillState] = useState("")
    const [billCountry, setBillCountry] = useState("")
    const [billZipCode, setBillZipCode] = useState(0)
    const [billPhoneNo, setBillPhoneNo] = useState(0)
    const [billAddress, setBillAddress] = useState("")

    // hooks
    const dispatch = useDispatch()

    // functions
    const onSubmit = (e) => {
        e.preventDefault()
        const billAdd = {
            city: billCity,
            state: billState,
            country: billCountry,
            zipCode: billZipCode,
            phoneNo: billPhoneNo,
            address: billAddress
        }
        const shipAdd = {
            city: shipCity,
            state: shipState,
            country: shipCountry,
            zipCode: shipZipCode,
            phoneNo: shipPhoneNo,
            address: shipAddress
        }

        setUserAddress(shipAddress)
        setUserNumber(shipPhoneNo)

        dispatch(addShippingAddress(shipAdd))
        dispatch(addBillingAddress(billAdd))

    }

    return (
        <>
            <Form className='list-view product-checkout' onSubmit={onSubmit} style={{marginBottom: 60}}>
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
                                                                placeholder='Los Angeles'
                                                                onChange={(e) => setShipCity(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col sm='12'>
                                                        <div className='mb-2'>
                                                            <Label className='form-label' for='state'>
                                                                State:
                                                            </Label>
                                                            <Input
                                                                id='state'
                                                                placeholder='California'
                                                                onChange={(e) => setShipState(e.target.value)}
                                                                required
                                                            />

                                                        </div>
                                                    </Col>
                                                    <Col sm='12' className='mb-1'>
                                                        <Label className='form-label' for='country'>
                                                            Country
                                                        </Label>
                                                        <Input
                                                            id='country'
                                                            placeholder='USA'
                                                            onChange={(e) => setShipCountry(e.target.value)}
                                                            required
                                                        />
                                                    </Col>
                                                    <Col sm='12' className='mb-2'>
                                                        <Label className='form-label' for='zipCodeAddress'>
                                                            Zip Code
                                                        </Label>
                                                        <Input type='number' id='zipCodeAddress' name='zipCodeAddress'
                                                               placeholder='123456' maxLength='6'
                                                               onChange={(e) => setShipZipCode(e.target.value)}
                                                               required
                                                        />
                                                    </Col>
                                                    <Col sm='12'>
                                                        <div className='mb-2'>
                                                            <Label className='form-label' for='phonenumb'>
                                                                Mobile Number:
                                                            </Label>
                                                            <Input
                                                                type="number"
                                                                id='phonenumb'
                                                                placeholder='01245667'
                                                                onChange={(e) => setShipPhoneNo(e.target.value)}
                                                                required
                                                            />
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
                                                                onChange={(e) => setShipAddress(e.target.value)}
                                                                required
                                                            />
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
                                                                placeholder='Los Angeles'
                                                                onChange={(e) => setBillCity(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col sm='12'>
                                                        <div className='mb-2'>
                                                            <Label className='form-label' for='state'>
                                                                State:
                                                            </Label>
                                                            <Input
                                                                id='state'
                                                                placeholder='California'
                                                                onChange={(e) => setBillState(e.target.value)}
                                                                required
                                                            />

                                                        </div>
                                                    </Col>
                                                    <Col sm='12' className='mb-1'>
                                                        <Label className='form-label' for='country'>
                                                            Country
                                                        </Label>
                                                        <Input
                                                            id='country'
                                                            placeholder='USA'
                                                            onChange={(e) => setBillCountry(e.target.value)}
                                                            required
                                                        />
                                                    </Col>
                                                    <Col sm='12' className='mb-2'>
                                                        <Label className='form-label' for='zipCodeAddress'>
                                                            Zip Code
                                                        </Label>
                                                        <Input type='number' id='zipCodeAddress' name='zipCodeAddress'
                                                               placeholder='123456' maxLength='6'
                                                               onChange={(e) => setBillZipCode(e.target.value)}
                                                               required
                                                        />
                                                    </Col>
                                                    <Col sm='12'>
                                                        <div className='mb-2'>
                                                            <Label className='form-label' for='phonenumb'>
                                                                Mobile Number:
                                                            </Label>
                                                            <Input
                                                                type="number"
                                                                id='phonenumb'
                                                                placeholder='012345698'
                                                                onChange={(e) => setBillPhoneNo(e.target.value)}
                                                                required
                                                            />
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
                                                                onChange={(e) => setBillAddress(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                    </Col>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col sm='6'>
                                            <Button color='primary' onClick={() => stepper.previous()}>
                                                Go Back
                                            </Button>
                                        </Col>
                                        <Col sm='6' className="text-end">
                                            <Button type='submit' color='primary'>
                                                Save
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
                                        <CardText>{userAddress !== '' ? <div>
                                            <h5>Shipping Address:</h5>
                                            <p>{userAddress}</p>
                                        </div> : []}</CardText>
                                        <CardText>{userNumber !== 0 ? <div>
                                            <h5>Phone Number:</h5>
                                            <p>{userNumber}</p>
                                        </div> : []}</CardText>
                                    </CardBody>

                                    {shipAddress !== "" ? <Button
                                        block
                                        type='button'
                                        color='primary'
                                        onClick={() => stepper.next()}
                                        className="btn-next delivery-address w-50"
                                    >
                                        Deliver To This Address
                                    </Button> : []}
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Form>
        </>
    )
}

export default Address
