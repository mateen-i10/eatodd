import React, {useState} from "react"

import {
    Card,
    CardBody,
    CardText,
    Button,
    Badge,
    InputGroup,
    Input,
    InputGroupText,
    Row,
    Col
} from 'reactstrap'

import classnames from 'classnames'

// ** Styles
import '@styles/react/libs/input-number/input-number.scss'
import {Link} from "react-router-dom"
import {Minus, Plus, X, Check} from "react-feather"
import InputNumber from 'rc-input-number'

import one from '../images/6.jpg'

const Cart = props => {

    const {stepper, data} = props

    // const formatDate = (value, formatting = { month: 'short', day: 'numeric', year: 'numeric' }) => {
    //     if (!value) return value
    //     return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
    // }

    const [item, setItem] = useState([])

    const handleAdd = (e) => {
        console.log(e)
        setItem([...item, e])
    }

  return (
    <>
        <div className='list-view product-checkout' style={{marginBottom: 60}}>

            <div className='container-sm'>
                <Row>
                    <Col xl={9}>
                        {data.map(e => (
                            <div key={e.name} className='checkout-items'>
                                    <section>
                                        <div className='container-sm' style={{maxHeight:'auto'}}>
                                            <Card className='ecommerce-card'>
                                                <CardBody style={{border: 'solid 1px #a1f542', borderRadius: '5px'}}>
                                                    <Row>
                                                        <Col xl={3}>
                                                            <div>
                                                                <img className="img-fluid mx-3 rounded-circle" src={one} alt={one} style={{width: 100, marginTop: 10}} />
                                                            </div>
                                                        </Col>
                                                        <Col xl={5}>
                                                            <div style={{paddingTop: "20px"}}>
                                                                <div className='item-name mb-1'>
                                                                    <h2 className='mb-0' style={{paddingBottom: "20px"}}>
                                                                        <Link to="/">{e.mealTitle}</Link>
                                                                    </h2>
                                                                    <span className='card-text'>
                                                                    {e.selectedItems}
                                                                    <a className='ms-25' href='/' onClick={e => e.preventDefault()}>
                                                                    {e.price}
                                                                    </a>
                                                                </span>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xl={4} style={{padding:10}}>
                                                            <div className='item-options text-center'>
                                                                <div className='item-wrapper'>
                                                                    <div className='item-cost'>
                                                                        <h4 className='item-price'>{e.totalPrice}</h4>
                                                                        <CardText className='shipping'>
                                                                            <Badge color='light-success' pill>
                                                                                Free Delivery
                                                                            </Badge>
                                                                        </CardText>
                                                                    </div>
                                                                </div>
                                                                <Button className='btn-cart mt-1' color='primary' onClick={() => handleAdd(e)} >
                                                                    <Check
                                                                        size={14}
                                                                        className={classnames('me-25', {
                                                                            'fill-current': ""
                                                                        })}
                                                                    />
                                                                    <span className='text-truncate'>Confirm</span>
                                                                </Button>
                                                                <Button className='mt-1 remove-wishlist' color='light' onClick={() => console.log(e)} >
                                                                    <X size={14} className='me-25' />
                                                                    <span>Remove</span>
                                                                </Button>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                            </Card>
                                        </div>
                                    </section>
                            </div>
                        ))}
                    </Col>
                    <Col xl={3}>
                            <div className='checkout-options'>
                                <Card>
                                    <CardBody style={{border: 'solid 1px #a1f542', borderRadius: '5px'}}>
                                        <div className='price-details'>
                                            <h6 className='price-title'>All Price Details</h6>
                                                {item.map(e => (
                                                    <ul className='list-unstyled' key={e.mealTitle} >
                                                        <li className='price-detail d-flex'>
                                                        <div className='detail-title flex-fill'>{e.mealTitle}</div>
                                                        <div className='detail-amt discount-amt text-success'>{e.totalPrice}</div>
                                                        </li>
                                                    </ul>), [])}
                                            <hr />
                                            <label className='mb-1'>Enter Coupon Number</label>
                                            <InputGroup className='input-group-merge coupons'>
                                                <Input placeholder='Coupons' />
                                                <InputGroupText className='text-primary ms-0'>Apply</InputGroupText>
                                            </InputGroup>
                                            <hr />
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
