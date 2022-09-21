// ** Icon Imports
// ** Reactstrap Imports
import {Button, Card, CardBody, CardHeader, CardText, CardTitle, Col, Form, Input, Label, Row} from 'reactstrap'
import {cartTotalPrice} from "../../../utility/Utils"

const Payment = (props) => {

    const {stepper} = props
    return (
        <Form className='list-view product-checkout' onSubmit={e => e.preventDefault()}>
            <section>
                <div className="container-sm">
                    <Row>
                        <Col md='9' sm='12'>
                            <div className='payment-type'>
                                <Card>
                                    <CardHeader className='flex-column align-items-start'>
                                        <CardTitle tag='h4'>Payment options</CardTitle>
                                        <CardText className='text-muted mt-25'>Be sure to enter the correct payment
                                            data</CardText>
                                    </CardHeader>
                                    <CardBody>
                                        <section>
                                            <div className="container-sm">
                                                <Card>
                                                    <Row>
                                                        <Col md='6' sm='12'>
                                                            <div className='mb-2'>
                                                                <Label className='form-label' for='email'>
                                                                    Email:
                                                                </Label>
                                                                <Input type='email' id='email'
                                                                       placeholder='Someone@gmail.com'/>
                                                            </div>
                                                        </Col>

                                                        <Col md='6' sm='12'>
                                                            <div className='mb-2'>
                                                                <Label className='form-label' for='name'>
                                                                    Name On Card
                                                                </Label>
                                                                <Input type='text' id='name' placeholder='john doe'/>
                                                            </div>
                                                        </Col>

                                                        <Col md='6' sm='12'>
                                                            <div className='mb-2'>
                                                                <Label className='form-label' for='cardnumber'>
                                                                    Card Number
                                                                </Label>
                                                                <Input type='number' id='cardnumber'
                                                                       placeholder='1234 1234 1234 1234'/>
                                                            </div>
                                                        </Col>

                                                        <Col md='6' sm='12'>
                                                            <div className='mb-2'>
                                                                <Label className='form-label' for='expiry'>
                                                                    Expire Month/Year
                                                                </Label>
                                                                <Input type='number' id='expiry' placeholder='MM/YY'/>
                                                            </div>
                                                        </Col>

                                                        <Col md='6' sm='12'>
                                                            <div className='mb-2'>
                                                                <Label className='form-label' for='cvc'>
                                                                    CVC
                                                                </Label>
                                                                <Input type='number' id='cvc' placeholder='CVC'/>
                                                            </div>
                                                        </Col>

                                                        <Col md='6' sm='12'>
                                                            <div className='mb-2'>
                                                                <Label className='form-label' for='add-type'>
                                                                    Country
                                                                </Label>
                                                                <Input type='select' name='add-type' id='add-type'>
                                                                    <option value='home'>--</option>
                                                                    <option value='work'>Pakistan</option>
                                                                    <option value='work'>India</option>
                                                                    <option value='work'>Africa</option>
                                                                </Input>
                                                            </div>
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
                                                </Card>
                                            </div>
                                        </section>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                        <Col md='3' sm='12'>
                            <div className='amount-payable checkout-options'>
                                <Card>
                                    <CardHeader>
                                        <CardTitle tag='h4'>Price Details</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <ul className='list-unstyled price-details'>
                                            <li className='price-detail'>
                                                <div className='details-title'>Total Price</div>
                                                <div className='detail-amt'>
                                                    <strong>${cartTotalPrice()}</strong>
                                                </div>
                                            </li>
                                            <li className='price-detail'>
                                                <div className='details-title'>Delivery Charges</div>
                                                <div className='detail-amt discount-amt text-success'>0</div>
                                            </li>
                                            <li className='price-detail'>
                                                <div className='details-title'>Tax</div>
                                                <div className='detail-amt discount-amt text-success'>0</div>
                                            </li>
                                        </ul>
                                        <hr/>
                                        <ul className='list-unstyled price-details'>
                                            <li className='price-detail'>
                                                <div className='details-title'>Amount Payable</div>
                                                <div className='detail-amt fw-bolder'>${cartTotalPrice()}</div>
                                            </li>
                                        </ul>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </Form>
    )
}

export default Payment
