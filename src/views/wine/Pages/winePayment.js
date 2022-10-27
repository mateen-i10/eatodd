import {Button, Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input, Label, Row} from 'reactstrap'
import UILoader from "../../../@core/components/ui-loader"
import Headerwine from "../../../shared/wine-header/Header-wine"
import {useEffect, useState} from "react"
import SquareCard from "../../../components/SquareCard"
import http, {baseURL} from "../../../utility/http"
import {toast} from "react-toastify"
import {useHistory, useLocation} from "react-router-dom"
import Joi from "joi-browser"
import {WinePackageBillType} from "../../../utility/enums/Types"
import Select from "react-select"
import {getUserData} from "../../../auth/utils"

const winePayment = () => {
    // hooks
    const history = useHistory()
    const customerId = getUserData()?.customerId
    const {state} = useLocation()
    const price = state && state.package && state.package.amount ? state.package.amount : 0
    const billType = state.package.billType === WinePackageBillType.Monthly ? "Month" : state.package.billType === WinePackageBillType.Yearly ? "Year" : ''

    //local state
    const [isActivePackage, setIsActivePackage] = useState(state && state.currentPackage)
    const [useExistingCard, setExistingCard] = useState(state && state.currentPackage)
    const [isLoading, setLoading] = useState(false)
    const [billCity, setBillCity] = useState()
    const [billState, setBillState] = useState()
    const [billCountry, setBillCountry] = useState('US')
    const [billPhoneNo, setBillPhoneNo] = useState()
    const [billAddress, setBillAddress] = useState()
    const [autoRenewable, setAutoRenewable] = useState(false)
    const [errors, setErrors] = useState({})

    useEffect(() => {
            if (state && state.currentPackage) {
                setIsActivePackage(true)
                setExistingCard(true)
            } else {
                setIsActivePackage(false)
                setExistingCard(false)
            }

    }, [state])

    //schema for validation
    const schema = Joi.object({
        billCity: Joi.string().required().label("Billing Town/City"),
        billCountry: Joi.string().required().label("Billing Country"),
        billAddress: Joi.string().required().label("Billing Address")
    })

    const handleSubmit = async (body) => {
        const res = await http._put(`${baseURL}winePackage/AssignToCustomer`, {...body})
        if (res && res.status === 200 && res.data.statusCode === 200) {
            setLoading(false)
            console.log('response of add wine package', res)
            toast.success("Subscribed Successfully!!!")
            history.push('/home')
        } else {
            setLoading(false)
            toast.error(res && res.data ? res.data.message : "Unexpected error occurred while adding payment")
        }
    }

    const getToken = async (token, verifiedBuyer) => {
        console.info('Token:', token)
        console.info('Verified Buyer:', verifiedBuyer)
        if (token && token.token && token.status === "OK" && verifiedBuyer && verifiedBuyer.token) {
            try {
                const body = {
                    sourceId: token.token,
                    locationId: process.env.SQUARE_LOCATION_ID,
                    verificationToken: verifiedBuyer.token,
                    customerId,
                    packageId: state.package.id,
                    isAutoRenual: autoRenewable,
                    card: {
                        cardBrand: token.details.card.brand,
                        expMonth: token.details.card.expMonth,
                        expYear: token.details.card.expYear,
                        last4: token.details.card.last4,
                        billingAddress: {
                            city: billCity,
                            state: billState,
                            country: billCountry,
                            address1: billAddress,
                            phoneNumber: billPhoneNo,
                            zipCode: token.details.postalCode
                        }
                    }
                }
                await handleSubmit(body)
            } catch (e) {
                toast.error(e.message)
            }
        }
    }
    const cardVerification = () => {
        const billAdd = {
            billCity,
            billCountry,
            billAddress
        }
        const result = Joi.validate({...billAdd}, schema, {abortEarly: false})
        const {error} = result
        if (!error) {
            setLoading(true)
            return {
                billingContact: {
                    addressLines: [billAddress],
                    familyName: '',
                    givenName: '',
                    countryCode: billCountry,
                    city: billCity
                },
                currencyCode: 'USD',
                intent: 'STORE'
            }
        } else {
            const errorData = {}
            for (const item of error.details) {
                const name = item.path[0]
                const message = item.message
                errorData[name] = message
            }
            setErrors(errorData)
            return errorData
        }
    }
    const countryOptions = [
        {value: 'US', label: 'United States of America'},
        {value: 'AE', label: 'United Arab Emirates'},
        {value: 'AS', label: 'American Samoa'}
    ]

    return (
        <>
            <Headerwine/>
                <Form className='list-view product-checkout' onSubmit={e => e.preventDefault()}>
                    <UILoader blocking={isLoading}>
                        {isActivePackage && <Col sm='4'>
                            <FormGroup check inline>
                                <Input type='checkbox' checked={useExistingCard}
                                       onChange={(e) => setExistingCard(e.target.checked)}
                                       id='basic-cb-checked'/>
                                <Label for='basic-cb-checked' check>
                                    Use Existing card
                                </Label>
                            </FormGroup>
                            {useExistingCard && <FormGroup check inline>
                                <Button onClick={() => handleSubmit({
                                    customerId,
                                    packageId: state.package.id,
                                    isAutoRenual: autoRenewable
                                })}>Upgrade</Button>
                            </FormGroup>}
                        </Col>}
                        {!useExistingCard && <section className='mt-3'>
                            <div className="container-sm">
                                <Row>
                                    <Col md='9' sm='12'>
                                        <Card>
                                            <Row className='pt-2 px-2'>
                                                <Col sm='8'><CardTitle tag='h4'>Billing Address </CardTitle></Col>
                                                <Col sm='4'>
                                                    <FormGroup check inline>
                                                        <Input type='checkbox' checked={autoRenewable}
                                                               onChange={(e) => setAutoRenewable(e.target.checked)}
                                                               id='basic-cb-checked'/>
                                                        <Label for='basic-cb-checked' check>
                                                            Auto renew subscription every {billType}
                                                        </Label>
                                                    </FormGroup>
                                                </Col>
                                            </Row>

                                            <CardBody>
                                                <Row>
                                                    <Col sm='3'>
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
                                                    <Col sm='3'>
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
                                                    <Col sm='3' className='mb-1'>
                                                        <Label className='form-label' for='country'>
                                                            Country
                                                        </Label>
                                                        <Select
                                                            id='country'
                                                            name='billCountry'
                                                            className='react-select'
                                                            classNamePrefix='select'
                                                            defaultValue={countryOptions[0]}
                                                            options={countryOptions}
                                                            isClearable={false}
                                                            onChange={(e) => setBillCountry(e.value)}
                                                        />
                                                    </Col>
                                                    <Col sm='3'>
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
                                                </Row>
                                            </CardBody>
                                        </Card>
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
                                                                <strong>${price}</strong>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <hr/>
                                                    <ul className='list-unstyled price-details'>
                                                        <li className='price-detail'>
                                                            <div className='details-title'>Amount Payable</div>
                                                            <div className='detail-amt fw-bolder'>${price}</div>
                                                        </li>
                                                    </ul>
                                                </CardBody>
                                            </Card>
                                        </div>
                                    </Col>
                                    <Col md='9' sm='12'>
                                        <SquareCard cardVerificationFunc={cardVerification}
                                                    getTokenFunc={getToken}/>
                                    </Col>
                                </Row>
                            </div>
                        </section>}
                    </UILoader>
                </Form>
        </>
    )
}

export default winePayment
