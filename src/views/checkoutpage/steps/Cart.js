import React, {useState} from "react"

import {Button, Card, CardBody, Col, Input, InputGroup, InputGroupText, Row} from 'reactstrap'

// ** Styles
import '@styles/react/libs/input-number/input-number.scss'
import Items from "./component/Items"
import {useSelector} from "react-redux"

const Cart = props => {

    const {stepper} = props

    const {cartItems} = useSelector(state => state)
    // console.log(cartItems)
    // const formatDate = (value, formatting = { month: 'short', day: 'numeric', year: 'numeric' }) => {
    //     if (!value) return value
    //     return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
    // }
    const [item, setItem] = useState([])

    // const mealName = ""
    // const mainItems = []
    // const additinalItems = []
    const handleAdd = (e) => {
        // console.log(e)
        setItem([...item, e])
    }

    return (
        <>
            <div className='list-view product-checkout' style={{marginBottom: 60}}>

                <div className='container-sm'>
                    <Row>
                        <Col xl={9}>
                            {cartItems.map((foodItems, index) => (
                                <div key={index} className='checkout-items'>
                                    <Items foodItems={foodItems} handleAdd={handleAdd}/>
                                </div>
                            ))}
                        </Col>
                        <Col xl={3}>
                            <div className='checkout-options'>
                                <Card>
                                    <CardBody style={{border: 'solid 1px #a1f542', borderRadius: '5px'}}>
                                        <div className='price-details'>
                                            <h6 className='price-title'>All Price Details</h6>
                                            {item.map((e, index) => (
                                                <ul key={index} className='list-unstyled' key={e.mealTitle}>
                                                    <li className='price-detail d-flex'>
                                                        <div className='detail-title flex-fill'>{e.mealTitle}</div>
                                                        <div
                                                            className='detail-amt discount-amt text-success'>{e.totalPrice}</div>
                                                    </li>
                                                </ul>), [])}
                                            <hr/>
                                            <label className='mb-1'>Enter Coupon Number</label>
                                            <InputGroup className='input-group-merge coupons'>
                                                <Input placeholder='Coupons'/>
                                                <InputGroupText className='text-primary ms-0'>Apply</InputGroupText>
                                            </InputGroup>
                                            <hr/>
                                            <ul className='list-unstyled my-2'>
                                                <li className='price-detail d-flex'>
                                                    <div className='detail-title detail-total flex-fill'>Total</div>
                                                    <div className='detail-amt fw-bolder'>$574</div>
                                                </li>
                                            </ul>
                                            <Button
                                                block
                                                color='primary'
                                                // disabled={!products.length}
                                                onClick={() => stepper.next()}
                                                classnames='btn-next place-order'
                                            >
                                                Place Order
                                            </Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Cart
