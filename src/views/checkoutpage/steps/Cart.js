import React, {useState} from "react"
import {Button, Card, CardBody, Col, Input, InputGroup, InputGroupText, Row, Table} from 'reactstrap'
import {cartTotalPrice, getCartData} from "../../../utility/Utils"

// ** Styles
import '@styles/react/libs/input-number/input-number.scss'
import Items from "./component/Items"
import WineItems from "./component/WineItems"


const Cart = props => {

    const {stepper} = props

    const cartItems = getCartData()
    const meals = cartItems?.meals
    const catOrder = cartItems?.catering
    const wines = cartItems?.wines

    console.log('meals, catorder or wines', meals, catOrder, wines)
    console.log(cartItems)
    const [item] = useState([])
    return (
        <>
            <div className='list-view product-checkout' style={{marginBottom: 60}}>

                <div className='container-sm'>
                    <Row>
                        {meals && meals?.length ? <Col xl={9}>
                            <Card className='ecommerce-card'>
                                <CardBody style={{border: 'solid 1px #a1f542', borderRadius: '5px'}}>
                                    {meals.map((item, index) => (
                                        <div key={index} className='checkout-items'>
                                            <Items item={item} isQuantity={false}/>
                                        </div>
                                    ))}
                                    <hr className="mt-2"/>
                                    <Row>
                                        <Col xl={12}>
                                            <Table responsive>
                                                <tbody>
                                                <tr className=' '>
                                                    <td className='text-start text-uppercase fw-bolder fs-3'>
                                                        Total Price
                                                    </td>
                                                    <td className='text-center  text-uppercase fw-bolder fs-3'>${cartTotalPrice()}
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </Table>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col> : catOrder && catOrder?.length > 0 && wines.length > 0 ? <Col xl={9}>
                            <Card className='ecommerce-card'>
                                <CardBody style={{border: 'solid 1px #a1f542', borderRadius: '5px'}}>
                                    {catOrder.map((item, index) => (
                                        <div key={index} className='checkout-items'>
                                            <Items item={item} isQuantity={false}/>
                                        </div>
                                    ))}
                                    {/*{wines.map((item, index) => (*/}
                                    <div className='checkout-items'>
                                        <WineItems item={wines}/>
                                    </div>
                                    {/*))}*/}
                                    <hr className="mt-2"/>
                                    <Row>
                                        <Col xl={12}>
                                            <Table responsive>
                                                <tbody>
                                                <tr className=' '>
                                                    <td className='text-start text-uppercase fw-bolder fs-3'>
                                                        Total Price
                                                    </td>
                                                    <td className='text-center  text-uppercase fw-bolder fs-3'>${cartTotalPrice()}
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </Table>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col> : catOrder && catOrder?.length ? <Col xl={9}>
                            <Card className='ecommerce-card'>
                                <CardBody style={{border: 'solid 1px #a1f542', borderRadius: '5px'}}>
                                    {catOrder.map((item, index) => (
                                        <div key={index} className='checkout-items'>
                                            <Items item={item} isQuantity={false}/>
                                        </div>
                                    ))}

                                    <hr className="mt-2"/>
                                    <Row>
                                        <Col xl={12}>
                                            <Table responsive>
                                                <tbody>
                                                <tr className=' '>
                                                    <td className='text-start text-uppercase fw-bolder fs-3'>
                                                        Total Price
                                                    </td>
                                                    <td className='text-center  text-uppercase fw-bolder fs-3'>${cartTotalPrice()}
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </Table>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col> : wines && wines?.length > 0 ? <Col xl={9}>
                            <Card className='ecommerce-card'>
                                <CardBody style={{border: 'solid 1px #a1f542', borderRadius: '5px'}}>
                                    <div className='checkout-items'>
                                        <WineItems item={wines}/>
                                    </div>
                                    <hr className="mt-2"/>
                                    <Row>
                                        <Col xl={12}>
                                            <Table responsive>
                                                <tbody>
                                                <tr className=' '>
                                                    <td className='text-start text-uppercase fw-bolder fs-3'>
                                                        Total Price
                                                    </td>
                                                    <td className='text-center  text-uppercase fw-bolder fs-3'>${cartTotalPrice()}
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </Table>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col> : <Col lg={9}/>}
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
                                                    <div className='detail-amt fw-bolder'>${cartTotalPrice()}</div>
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
