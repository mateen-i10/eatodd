// ** Icon Imports
// ** Reactstrap Imports
import {Button, Card, CardBody, CardHeader, CardText, CardTitle, Col, Form, Input, Label, Row} from 'reactstrap'
import {cartTotalPrice, clearCart, getCartData} from "../../../utility/Utils"
import {useSelector} from "react-redux"
import {useEffect, useState} from "react"
import useAPI from "../../../utility/customHooks/useAPI"
import {getUserData} from "../../../auth/utils"
import UILoader from "../../../@core/components/ui-loader"
import {useHistory} from "react-router-dom"
import {toast} from "react-toastify"
import {PaymentForm, CreditCard} from 'react-square-web-payments-sdk'
import http, {baseURL} from '../../../utility/http'

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
    // hooks
    const history = useHistory()
    const [isLoading, response] = useAPI(placeOrder.url, 'post', {...placeOrder.order}, {}, true, false)

    useEffect(() => {
        setLoading(isLoading)
        if (response && response.data) {
            isCatering ? history.push('/catering') : history.push('/home')
            toast.success('Order placed successfully')
            clearCart()
        } else setPlaceOrder({url: '', order: {}})
    }, [response, isLoading])

    const placeMealOrder = () => {
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
                restaurantId: Number(restaurantId)
            }
            setPlaceOrder({url: 'order', order: {...order}})
        }
    }
    const placeCateringOrder = () => {
        const cateringOrderMenuItems = []
        let cateringOrderSectionItems = []
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
            const totalQuantity = cateringOrderSectionItems.map(i => i.quantity).reduce((pre, next) => pre + next) + cateringOrderMenuItems.map(i => i.quantity).reduce((pre, next) => pre + next)
            // final order object
            const order = {
                shippingAddress: shippingAddress ? shippingAddress.payload : null,
                billingAddress: billingAddress ? billingAddress.payload : null,
                totalPrice: cartTotalPrice(),
                customerId: getUserData()?.customerId,
                quantity: totalQuantity,
                cateringOrderSectionItems,
                cateringOrderMenuItems,
                restaurantId: Number(restaurantId)
            }
            console.log('order', order)
            setPlaceOrder({url: 'cateringOrder', order: {...order}})
        }

    }
    const submitOrder = () => {
        if (isCatering) placeCateringOrder()
        else placeMealOrder()
    }
    const getToken = async (token, verifiedBuyer) => {
        console.info('Token:', token)
        console.info('Verified Buyer:', verifiedBuyer)
        const body = {
            sourceId: token.token,
            locationId: process.env.SQUARE_LOCATION_ID,
            amountMoney: {
                amount: cartTotalPrice(),
                currency: 'USD'
            }
        }
        const res = await http._post(`${baseURL}payment`, {...body})
        if (res && res.status === 200 && res.data.statusCode === 200) {
            submitOrder()
        }
        console.log('resss', res)
    }

    return (
        <PaymentForm  applicationId={process.env.REACT_APP_SQUARE_APPLICATION_ID}
                      locationId={process.env.REACT_APP_SQUARE_LOCATION_ID}
                      cardTokenizeResponseReceived={getToken}>
            <UILoader blocking={loading}>
                <div className='row my-5 mx-auto'>
                    <div className='col-6'>
                        <CreditCard>
                            <span onClick={() => setLoading(!loading)}>
                                Pay ${cartTotalPrice()}
                            </span>
                        </CreditCard>
                    </div>
                </div>
            </UILoader>
        </PaymentForm>
    )
}

export default Payment
