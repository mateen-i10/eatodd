// ** Icon Imports
// ** Reactstrap Imports
import {Card, CardBody, CardHeader, CardText, CardTitle, Col, Form, Row, Spinner} from 'reactstrap'
import {
    cartTotalPrice,
    clearCart,
    clearGroupOrder,
    clearJoinByLink,
    getCartData,
    getGroupOrderId
} from "../../../utility/Utils"
import {useDispatch, useSelector} from "react-redux"
import {useEffect, useState} from "react"
import useAPI from "../../../utility/customHooks/useAPI"
import {getUserData} from "../../../auth/utils"
import UILoader from "../../../@core/components/ui-loader"
import {useHistory} from "react-router-dom"
import {toast} from "react-toastify"
import {Fragment} from "@fullcalendar/core"
import http, {baseURL} from "../../../utility/http"
import {calculateTotalItems} from "../../../redux/cartItems/actions"
import SquareCard from "../../../components/SquareCard"

const Payment = (props) => {
    const {stepper} = props
    const restaurantId = localStorage.getItem('restaurantId')
    const cartData = getCartData()
    const isCatering = cartData && cartData.catering && cartData.catering.length > 0

    // states in redux store
    const shippingAddress = useSelector(s => s.cartItems.shippingAddress)
    const billingAddress = useSelector(s => s.cartItems.billingAddress)
    const note = localStorage.getItem('note')
    const fullFilmentType = parseInt(localStorage.getItem('fullFilmentType'))

    // local state
    const [placeOrder, setPlaceOrder] = useState({url: '', order: {}})
    const [paymentBody, setPaymentBody] = useState({})
    const [loading, setLoading] = useState(false)
    const [loadingMessage, setLoadingMessage] = useState('Payment InProgress...')
    // hooks
    const history = useHistory()
    const dispatch = useDispatch()
    const [isLoading, response] = useAPI(placeOrder.url, 'post', {...placeOrder.order}, null, true, false)

    const createPayment = async (body) => {
        setLoading(true)
        setLoadingMessage('Payment InProgress...')
        console.log('body data:', body)
        const res = await http._post(`${baseURL}payment`, {...body})
        console.log('final data:', res)
        if (res && res.data.statusCode === 200) {
            history.push('/confirmOrder', {data: response.data})
            //isCatering ? history.push('/catering') : history.push('/home')
            clearCart()
            clearGroupOrder()
            clearJoinByLink()
            dispatch(calculateTotalItems())
            console.log('final data inside:', res)
            //setLoadingMessage('Booking Order...')
        } else {
            setLoading(false)
            toast.error(res && res.data ? res.data.message : "Unexpected error occurred while adding payment")
        }
        console.info('payment details', res)
        console.log('final data after:', res)

    }
    useEffect(async () => {
        setLoading(isLoading)
        console.log('response', response)
        if (response && response.data) {
            console.log('paymentBody2', paymentBody)
            const payment = {...paymentBody, orderId: response?.data?.squareOrderId, locationId: response.data.squareLocationId, customerId: response.data.squareCustomerId, amountMoney: response.data.totalPrice}
            await createPayment(payment)
        } else {
            setPlaceOrder({url: '', order: {}})
        }
    }, [response, isLoading])

    const placeMealOrder = () => {
        const orderDetails = []
        if (cartData) {
            console.log('cartData', cartData)
            // adding meals to order
            if (cartData.meals && cartData.meals.length > 0) cartData.meals.forEach(m => {
                orderDetails.push({
                    meal: {
                        name: m.mealName,
                        categoryId: m.categoryId,
                        mealProducts: m.selectedProducts && m.selectedProducts.length > 0 ? m.selectedProducts.map(p => {
                            console.log('p', p)
                            return {
                                productId: p.id,
                                quantity: p.selectedQuantity,
                                unitPrice: p.price * 100,
                                optionId: p.options && p.options.length > 0 ? p.options.find(p => p.isSelected)?.id : null,
                                squareItemId: p.squareItemId
                            }
                        }) : []
                    }
                })
            })

            //adding wines to order
            if (cartData.wines && cartData.wines.length > 0) cartData.wines.forEach(p => {
                orderDetails.push({
                    productId: p.id,
                    productQuantity: p.selectedQuantity,
                    unitPrice: p.price * 100,
                    productOptionId: p.options && p.options.length > 0 ? p.options.find(p => p.isDefault)?.id : null
                })
            })

            // final order object
            const order = {
                shippingAddress: shippingAddress ? shippingAddress.payload : null,
                billingAddress: billingAddress ? billingAddress.payload : null,
                ordersDetail: [...orderDetails],
                totalPrice: Number(cartTotalPrice() * 100),
                customerId: getUserData()?.customerId,
                quantity: orderDetails.length,
                restaurantId: Number(restaurantId),
                locationId: process.env.REACT_APP_SQUARE_LOCATION_ID,
                pickUpAt: localStorage.getItem('pickUpAt'),
                isNoContactDelivery: false,
                note,
                fullFilmentType,
                groupOrderId : getGroupOrderId() ? Number(getGroupOrderId()) : null
            }
            console.log("Final data after call", order)
            console.log("totalPrice", order.totalPrice)
            setPlaceOrder({url: 'order', order: {...order}})
        }
    }
    const placeCateringOrder = () => {
        console.log('yes')
        const cateringOrderMenuItems = []
        const cateringOrderSectionItems = []
        const cateringOrderWines = []
        if (cartData) {
            if (cartData.catering && cartData.catering.length > 0) {
                cartData.catering.forEach(i => {
                    cateringOrderMenuItems.push({
                        quantity: i.quantity,
                        unitPrice: i.perPersonPrice,
                        cateringMenuItemId: i.id
                    })
                    if (i.selectedProducts && i.selectedProducts.length > 0) i.selectedProducts.forEach(p => {
                        cateringOrderSectionItems.push({
                            sectionItemId: p.id,
                            cateringMenuItemId: i.id,
                            unitPrice: p.price * 100,
                            quantity: 1
                        })
                    })
                })
            }
            if (cartData.wines && cartData.wines.length > 0) {
                cartData.wines.forEach(i => {
                    cateringOrderWines.push({
                        quantity: i.selectedQuantity,
                        unitPrice: i.price * 100,
                        wineId: i.id
                    })
                })
            }
            const totalQuantity = cateringOrderSectionItems && cateringOrderSectionItems.length > 0 ? cateringOrderSectionItems.map(i => i.quantity).reduce((pre, next) => pre + next) : 0 +
            cateringOrderMenuItems && cateringOrderMenuItems.length > 0 ? cateringOrderMenuItems.map(i => i.quantity).reduce((pre, next) => pre + next) : 0 +
            cateringOrderWines && cateringOrderWines.length > 0 ? cateringOrderWines.map(i => i.quantity).reduce((pre, next) => pre + next) : 0
            // final order object
            const order = {
                shippingAddress: shippingAddress ? shippingAddress.payload : null,
                billingAddress: billingAddress ? billingAddress.payload : null,
                totalPrice: cartTotalPrice() * 100,
                customerId: getUserData()?.customerId,
                quantity: totalQuantity,
                cateringOrderSectionItems,
                cateringOrderMenuItems,
                cateringOrderWines,
                restaurantId: Number(restaurantId),
                locationId: process.env.REACT_APP_SQUARE_LOCATION_ID,
                isNoContactDelivery: false,
                note
            }
            console.log('orderObj', order)
            setPlaceOrder({url: 'cateringOrder', order: {...order}})
        }

    }
    const submitOrder = () => {
        if (isCatering) placeCateringOrder()
        else placeMealOrder()
    }

    const getToken = async (token, verifiedBuyer) => {
        if (token && token.token && token.status === "OK" && verifiedBuyer && verifiedBuyer.token) {
            const body = {
                sourceId: token.token,
                //locationId: response.data.squareLocationId,
                verificationToken: verifiedBuyer.token,
                customerEmail: getUserData().email
                //customerId: response.data.squareCustomerId,
                //amountMoney: Number(cartTotalPrice() * 100)
                /*amountMoney: {
                    amount: Number(cartTotalPrice() * 100),
                    currency: 'USD'
                }*/
            }
            console.log('body', body)
            setPaymentBody({...body})
            setLoading(true)
            setLoadingMessage('Booking Order...')
            submitOrder()
        }

    }

    const cardVerification = () => {
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
    }
    const Loader = () => {
        return (
            <Fragment>
                <Spinner/>
                <CardText className='mb-0 mt-3 text-white'>{loadingMessage}</CardText>
            </Fragment>
        )
    }

    return (
        <Form className='list-view product-checkout' onSubmit={e => e.preventDefault()}>
            <UILoader blocking={loading} loader={<Loader/>}>
                <section>
                    <div className="container-sm">
                        <Row>
                            <Col md='9' sm='12'>
                                <div className="container-sm">
                                    <SquareCard getTokenFunc={getToken}
                                                cardVerificationFunc={cardVerification} stepper={stepper} />

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
