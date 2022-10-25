import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Col,
    Form, FormGroup, Input, Label,
    Row
} from 'reactstrap'
import UILoader from "../../../@core/components/ui-loader"
import Headerwine from "../../../shared/wine-header/Header-wine"
import {useState} from "react"
import SquareCard from "../../../components/SquareCard"
import http, {baseURL} from "../../../utility/http"
import {toast} from "react-toastify"
import {useHistory, useLocation} from "react-router-dom"
import Joi from "joi-browser"
import {WinePackageBillType} from "../../../utility/enums/Types"

const winePayment = () => {

    const history = useHistory()
    const {state} = useLocation()
    console.log('tttt', state)
    const price = state && state.package && state.package.amount ? state.package.amount : 0
    const billType = state.package.billType === WinePackageBillType.Monthly ? "Month" : state.package.billType === WinePackageBillType.Yearly ? "Year" : ''
    //local state
    const [isLoading, setLoading] = useState(false)
    const [billCity, setBillCity] = useState()
    const [billState, setBillState] = useState()
    const [billCountry, setBillCountry] = useState()
    const [billPhoneNo, setBillPhoneNo] = useState()
    const [billAddress, setBillAddress] = useState()
    const [autoRenewable, setAutoRenewable] = useState(false)
    const [errors, setErrors] = useState({})

    //schema for validation
    const schema = Joi.object({
        billCity: Joi.string().required().label("Billing Town/City"),
        billCountry: Joi.string().required().label("Billing Country"),
        billAddress: Joi.string().required().label("Billing Address")
    })

    const getToken = async (token, verifiedBuyer) => {
        console.info('Token:', token)
        console.info('Verified Buyer:', verifiedBuyer)
        if (token && token.token && token.status === "OK" && verifiedBuyer && verifiedBuyer.token) {
            try {
            const body = {
                sourceId: token.token,
                locationId: process.env.SQUARE_LOCATION_ID,
                verificationToken: verifiedBuyer.token,
                customerId: state.customerId,
                packageId: state.package.id,
                isAutoRenual: autoRenewable,
                card: {
                    cardBrand: token.details.card.brand,
                    expMonth: token.details.card.expMonth,
                    expYear:token.details.card.expYear,
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
                console.log('body of add wine package', body)
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
                    countryCode: 'US',
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

    return (
        <>
            <Headerwine />
            <Form className='list-view product-checkout' onSubmit={e => e.preventDefault()}>
                <UILoader blocking={isLoading}>
                    <section className='mt-3'>
                        <div className="container-sm">
                            <Row>
                                <Col md='9' sm='12'>
                                    <Card>
                                        <Row className='pt-2 px-2'>
                                            <Col sm='7'><CardTitle tag='h4'>Billing Address </CardTitle></Col>
                                            <Col sm='5'>
                                                <FormGroup check inline>
                                                    <Input type='checkbox' checked={autoRenewable} onChange={(e) => setAutoRenewable(e.target.checked)} id='basic-cb-checked' />
                                                    <Label for='basic-cb-checked' check>
                                                         Renew subscription every {billType}
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
                    </section>
                </UILoader>
            </Form>
        </>
    )
}

export default winePayment
