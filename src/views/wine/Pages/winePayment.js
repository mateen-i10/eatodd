import {Button, Card, CardBody, CardHeader, CardText, CardTitle, Col, Form, Input, Label, Row} from 'reactstrap'
import {cartTotalPrice} from "../../../utility/Utils"
import UILoader from "../../../@core/components/ui-loader"
import Headerwine from "../../../shared/wine-header/Header-wine"
import {useHistory} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {useState} from "react"
import Joi from "joi-browser"
import {addWinePayment} from "../../../redux/subscription/action"

const winePayment = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const data = useSelector(state => state.subscriptionReducer.object)
    console.log('wineData', data)

    const [email, setEmail] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [cvc, setCvc] = useState('')
    const [expiryDate, setExpiryDate] = useState('')
    const [cardHolderName, setCardHolderName] = useState('')

    const defaultValues = {
        email,
        cardNumber,
        cvc,
        expiryDate,
        cardHolderName
    }

    const [errors, setErrors] = useState({})

    const schema = {
        email: Joi.string().required(),
        cardNumber: Joi.number().required(),
        cvc: Joi.number().required(),
        expiryDate: Joi.string().required(),
        cardHolderName: Joi.string().required()
    }

    const goBack = () => {
        history.push('/wine/membership')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const result = Joi.validate(defaultValues, schema, { abortEarly: false })
        const { error } = result
        if (!error) {
            setErrors({})

            dispatch(addWinePayment(data, history))
        } else {
            const errorData = {}
            for (const item of error.details) {
                const name = item.path[0]
                const message = item.message

                errorData[name] = message
            }
            setErrors(errorData)
        }
    }

    return (
        <>
            <Headerwine />
            <Form className='list-view product-checkout' onSubmit={e => e.preventDefault()}>
                <section className='mt-3'>
                    <div className="container-sm">
                        <Row>
                            <Col md='9' sm='12'>
                                <div className='payment-type'>
                                    <Card>
                                        <CardHeader className='flex-column align-items-start'>
                                            <CardTitle tag='h4'>Payment Details</CardTitle>
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
                                                                    <Input type='email' id='email' name='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Someone@gmail.com'/>
                                                                    {errors !== null && errors.email && (<div className="alert alert-danger">{errors.email}</div>)}
                                                                </div>
                                                            </Col>

                                                            <Col md='6' sm='12'>
                                                                <div className='mb-2'>
                                                                    <Label className='form-label' for='cardHolderName'>
                                                                        Name On Card
                                                                    </Label>
                                                                    <Input type='text' id='cardHolderName' name='cardHolderName' value={cardHolderName} onChange={(e) => setCardHolderName(e.target.value)} placeholder='john doe'/>
                                                                    {errors !== null && errors.cardHolderName && (<div className="alert alert-danger">{errors.cardHolderName}</div>)}
                                                                </div>
                                                            </Col>

                                                            <Col md='6' sm='12'>
                                                                <div className='mb-2'>
                                                                    <Label className='form-label' for='cardNumber'>
                                                                        Card Number
                                                                    </Label>
                                                                    <Input type='number' id='cardNumber' name='cardNumber' value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder='1234 1234 1234'/>
                                                                    {errors !== null && errors.cardNumber && (<div className="alert alert-danger">{errors.cardNumber}</div>)}
                                                                </div>
                                                            </Col>

                                                            <Col md='6' sm='12'>
                                                                <div className='mb-2'>
                                                                    <Label className='form-label' for='expiryDate'>
                                                                        Expire Month/Year
                                                                    </Label>
                                                                    <Input type='text' id='expiryDate' name='expiryDate' value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} placeholder='MM/YY'/>
                                                                    {errors !== null && errors.expiryDate && (<div className="alert alert-danger">{errors.expiryDate}</div>)}
                                                                </div>
                                                            </Col>

                                                            <Col md='6' sm='12'>
                                                                <div className='mb-2'>
                                                                    <Label className='form-label' for='cvc'>
                                                                        CVC
                                                                    </Label>
                                                                    <Input type='number' id='cvc' name='cvc' value={cvc} onChange={(e) => setCvc(e.target.value)} placeholder='CVC'/>
                                                                    {errors !== null && errors.cvc && (<div className="alert alert-danger">{errors.cvc}</div>)}
                                                                </div>
                                                            </Col>

                                                            <Col sm='6'></Col>
                                                            <Col sm='6'>
                                                                <Button color='primary' onClick={goBack}>
                                                                    Go Back
                                                                </Button>
                                                            </Col>

                                                            <Col sm='6' className="text-end">
                                                                <Button color='primary' onClick={(e) => handleSubmit(e)}>
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
        </>
    )
}

export default winePayment
