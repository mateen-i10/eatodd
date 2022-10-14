// ** Icon Imports
// ** Reactstrap Imports
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    CardText,
    CardTitle,
    Col,
    Form,
    Input,
    Label,
    Row,
    Spinner
} from 'reactstrap'
import {cartTotalPrice, clearCart, getCartData} from "../../../utility/Utils"
import {useSelector} from "react-redux"
import {useEffect, useState} from "react"
import useAPI from "../../../utility/customHooks/useAPI"
import {getUserData} from "../../../auth/utils"
import UILoader from "../../../@core/components/ui-loader"
import {useHistory} from "react-router-dom"
import {toast} from "react-toastify"
import {PaymentForm, CreditCard} from 'react-square-web-payments-sdk'
import {Fragment} from "@fullcalendar/core"
import http, {baseURL} from "../../../utility/http"

const Payment = () => {
    const restaurantId = localStorage.getItem('restaurantId')
    const cartData = getCartData()
    const isCatering = cartData && cartData.catering && cartData.catering.length > 0

    // states in redux store
    const shippingAddress = useSelector(s => s.cartItems.shippingAddress)
    const billingAddress = useSelector(s => s.cartItems.billingAddress)
    // local state
    const [placeOrder, setPlaceOrder] = useState({ url: '', order: {}})
    const [loading, setLoading] = useState(false)
    const [loadingMessage, setLoadingMessage] = useState('Payment InProgress...')
    // hooks
    const history = useHistory()
    const [isLoading, response] = useAPI(placeOrder.url, 'post', {...placeOrder.order}, {}, true, false)

    useEffect(() => {
        setLoading(isLoading)
        if (response && response.data) {
            history.push('/confirmOrder', {data: response.data})
            //isCatering ? history.push('/catering') : history.push('/home')
            clearCart()
        } else setPlaceOrder({url: '', order: {}})
    }, [response, isLoading])

    const placeMealOrder = (paymentId, paymentDateTime) => {
        const orderDetails = []
        if (cartData) {
            // adding meals to order
            if (cartData.meals && cartData.meals.length > 0) cartData.meals.forEach(m => {
                orderDetails.push({
                    meal:{
                        name: m.mealName,
                        categoryId: m.categoryId,
                        mealProducts : m.selectedProducts && m.selectedProducts.length > 0 ? m.selectedProducts.map(p => {
                            return {
                                productId : p.id,
                                quantity: p.selectedQuantity,
                                unitPrice : p.price,
                                optionId: p.options && p.options.length > 0 ? p.options.find(p => p.isSelected)?.id : null
                            }
                        }) : []
                    }
                })
            })

            //adding wines to order
            if (cartData.wines && cartData.wines.length > 0) cartData.wines.forEach(p => {
                orderDetails.push({
                    productId : p.id,
                    productQuantity: p.selectedQuantity,
                    unitPrice : p.price,
                    productOptionId: p.options && p.options.length > 0 ? p.options.find(p => p.isDefault)?.id : null
                })
            })

            // final order object
            const order = {
                shippingAddress: shippingAddress ? shippingAddress.payload : null,
                billingAddress: billingAddress ? billingAddress.payload : null,
                ordersDetail: [...orderDetails],
                totalPrice: cartTotalPrice(),
                customerId: getUserData()?.customerId,
                quantity: orderDetails.length,
                restaurantId: Number(restaurantId),
                paymentId,
                paymentDateTime
            }
            setPlaceOrder({url: 'order', order: {...order}})
        }
    }
    const placeCateringOrder = (paymentId, paymentDateTime) => {
        const cateringOrderMenuItems = []
        let cateringOrderSectionItems = []
        const cateringOrderWines = []
        if (cartData) {
            if (cartData.catering && cartData.catering.length > 0) {
                cartData.catering.forEach(i => {
                    cateringOrderMenuItems.push({
                        quantity : i.quantity,
                        unitPrice: i.perPersonPrice,
                        cateringMenuItemId: i.id
                    })
                    cateringOrderSectionItems = i.selectedProducts && i.selectedProducts.length > 0 ? i.selectedProducts.map(p => {
                            return {
                                sectionItemId: p.id,
                                cateringMenuItemId: i.id,
                                unitPrice: p.price,
                                quantity: 1
                            }
                        }) : []
                })
            }
            if (cartData.wines && cartData.wines.length > 0) {
                cartData.wines.forEach(i => {
                    cateringOrderWines.push({
                        quantity : i.selectedQuantity,
                        unitPrice: i.price,
                        wineId: i.id
                    })
                })
            }
            const totalQuantity = cateringOrderSectionItems.map(i => i.quantity).reduce((pre, next) => pre + next) + cateringOrderMenuItems.map(i => i.quantity).reduce((pre, next) => pre + next) + cateringOrderWines.map(i => i.quantity).reduce((pre, next) => pre + next)
            // final order object
            const order = {
                shippingAddress: shippingAddress ? shippingAddress.payload : null,
                billingAddress: billingAddress ? billingAddress.payload : null,
                totalPrice: cartTotalPrice(),
                customerId: getUserData()?.customerId,
                quantity: totalQuantity,
                cateringOrderSectionItems,
                cateringOrderMenuItems,
                cateringOrderWines,
                restaurantId: Number(restaurantId),
                paymentId,
                paymentDateTime
            }
            console.log('order', order)
            setPlaceOrder({url: 'cateringOrder', order: {...order}})
        }

    }
    const submitOrder = (payment) => {
        if (isCatering) placeCateringOrder(payment.id, payment.createdAt)
        else placeMealOrder(payment.id, payment.createdAt)
    }

    const getToken = async (token, verifiedBuyer) => {
        console.info('Token:', token)
        console.info('Verified Buyer:', verifiedBuyer)
        if (token && token.token && token.status === "OK" && verifiedBuyer && verifiedBuyer.token) {
            const body = {
                sourceId: token.token,
                locationId: process.env.SQUARE_LOCATION_ID,
                verificationToken: verifiedBuyer.token,
                customerEmail: getUserData().email,
                amountMoney: {
                    amount: cartTotalPrice(),
                    currency: 'USD'
                }
            }
            setLoading(true)
            setLoadingMessage('Payment InProgress...')
            const res = await http._post(`${baseURL}payment`, {...body})
            if (res && res.status === 200 && res.data.statusCode === 200) {
                setLoadingMessage('Booking Order...')
                submitOrder(res.data.data)
            } else {
                setLoading(false)
                toast.error(res && res.data ? res.data.message : "Unexpected error occurred while adding payment")
            }
            console.info('payment details', res)
        }

    }
    const Loader = () => {
        return (
            <Fragment>
                <Spinner />
                <CardText className='mb-0 mt-3 text-white'>{loadingMessage}</CardText>
            </Fragment>
        )
    }

    return (
        <Form className='list-view product-checkout' onSubmit={e => e.preventDefault()}>
            <UILoader blocking={loading} loader={<Loader />} >
                <section>
                    <div className="container-sm">
                        <Row>
                            <Col md='9' sm='12'>
                                <div className='payment-type'>
                                    <Card>
                                        <CardHeader className='flex-column align-items-start'>
                                            <CardTitle tag='h4'>Payment Details</CardTitle>
                                            <CardText className='text-muted mt-25'>
                                                Be sure to enter the correct payment data
                                            </CardText>
                                        </CardHeader>
                                        <CardBody>
                                            <section>
                                                <div className="container-sm">
                                                    <Card>
                                                        <Row>
                                                            <PaymentForm  applicationId={process.env.REACT_APP_SQUARE_APPLICATION_ID}
                                                                          locationId={process.env.REACT_APP_SQUARE_LOCATION_ID}
                                                                          createVerificationDetails={() => {
                                                                              setLoading(true)
                                                                              return {
                                                                              amount: `${cartTotalPrice()}`,
                                                                              /* collected from the buyer */
                                                                              billingContact: {
                                                                                  addressLines: [`${billingAddress?.payload?.address1}`],
                                                                                  familyName: '',
                                                                                  givenName: '',
                                                                                  countryCode: 'US',
                                                                                  city: billingAddress?.payload?.city
                                                                              },
                                                                              currencyCode: 'USD',
                                                                              intent: 'CHARGE'
                                                                          }
                                                                          }}
                                                                          cardTokenizeResponseReceived={getToken}>
                                                                            <CreditCard />
                                                            </PaymentForm>
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
            </UILoader>
        </Form>
    )
}

export default Payment
