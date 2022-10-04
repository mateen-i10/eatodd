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

const Payment = (props) => {
    const {stepper} = props
    const restaurantId = localStorage.getItem('restaurantId')
    const cartData = getCartData()
    const isCatering = cartData && cartData.catering && cartData.catering.length > 0

    // states in redux store
    const shippingAddress = useSelector(s => s.cartItems.shippingAddress)
    const billingAddress = useSelector(s => s.cartItems.billingAddress)
    // local state
    const [placeOrder, setPlaceOrder] = useState({ url: '', order: {}})
    // hooks
    const history = useHistory()
    const [isLoading, response] = useAPI(placeOrder.url, 'post', {...placeOrder.order}, {}, true, false)

    useEffect(() => {
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

    return (
        <Form className='list-view product-checkout' onSubmit={e => e.preventDefault()}>
            <UILoader blocking={isLoading}>
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
                                                            <Button type='submit' color='primary' onClick = {submitOrder}>
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
            </UILoader>
        </Form>
    )
}

export default Payment
