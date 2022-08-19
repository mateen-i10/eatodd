import React from 'react'
import {Badge, Button, Card, CardBody, CardText, Col, Row} from "reactstrap"
import one from "../../images/6.jpg"
import {Link} from "react-router-dom"
import {Check, X} from "react-feather"
import classnames from "classnames"

const Items = (props) => {
    const {foodItems, handleAdd} = props

    const mealName = foodItems.action.payload.mealName
    const mainItems = [...foodItems.action.payload.selectedProVeg, ...foodItems.action.payload.selectedRice, ...foodItems.action.payload.selectedTopping, ...foodItems.action.payload.selectedBeans]
    const additionalItems = [...foodItems.action.payload.selectedSide, ...foodItems.action.payload.selectedDrinks]

    let mainItemsPrice
    if (foodItems.action.payload.selectedProVeg.length === 2) {
        mainItemsPrice = foodItems.action.payload.selectedProVeg[0].price > foodItems.action.payload.selectedProVeg[1].price ? foodItems.action.payload.selectedProVeg[0].price : foodItems.action.payload.selectedProVeg[1].price
    } else {
        mainItemsPrice = foodItems.action.payload.selectedProVeg[0].price
    }
    // console.log(mainItemsPrice)


    let totalAddiItemsPrice = 0
    for (let i = 0; i <= additionalItems.length - 1; i++) {
        // console.log(additionalItems[i].price)
        totalAddiItemsPrice = totalAddiItemsPrice + additionalItems[i].price
    }
    // console.log(totalAddiItemsPrice)

    const totalPrice = Number((mainItemsPrice + totalAddiItemsPrice).toFixed(2))

    return (
        <section>
            <div className='container-sm' style={{maxHeight: 'auto'}}>
                <Card className='ecommerce-card'>
                    <CardBody style={{border: 'solid 1px #a1f542', borderRadius: '5px'}}>
                        <Row>
                            <Col xl={3}>
                                <div>
                                    <img className="img-fluid mx-3 rounded-circle" src={one}
                                         alt={one} style={{width: 100, marginTop: 10}}/>
                                </div>
                            </Col>
                            <Col xl={5}>
                                <div style={{paddingTop: "20px"}}>
                                    <div className='item-name mb-1'>
                                        <h2 className='mb-0'
                                            style={{paddingBottom: "20px"}}>
                                            <Link to="/">{mealName}</Link>
                                        </h2>
                                        <div className="row">
                                            <div className="col-8 fs-4">
                                                {mainItems.map((item, id) => (
                                                    <span className="text-capitalize  fs-4 "
                                                          key={id}>{item.title}, </span>
                                                ))}
                                            </div>
                                            <div className="col-4 fs-4">$ {mainItemsPrice}</div>
                                            <hr/>
                                        </div>
                                        {
                                            additionalItems.map((item, id) => (

                                                <div key={id} className="row">
                                                    <div className="col-8 fs-4">{item.title}</div>
                                                    <div className="col-4 fs-4">$ {item.price}</div>
                                                    <hr/>
                                                </div>

                                            ))
                                        }
                                        {/*<span className='card-text'>*/}
                                        {/*    {e.selectedItems}*/}
                                        {/*    <a className='ms-25' href='/'*/}
                                        {/*       onClick={e => e.preventDefault()}>*/}
                                        {/*                            {e.price} </a>*/}
                                        {/*</span>*/}
                                    </div>
                                </div>
                            </Col>
                            <Col xl={4} style={{padding: 10}}>
                                <div className='item-options text-center'>
                                    <div className='item-wrapper'>
                                        <div className='item-cost'>
                                            <h4 className='item-price'>${totalPrice}</h4>
                                            <CardText className='shipping'>
                                                <Badge color='light-success' pill>
                                                    Free Delivery
                                                </Badge>
                                            </CardText>
                                        </div>
                                    </div>
                                    <Button className='btn-cart mt-1' color='primary'
                                            onClick={() => handleAdd(mealName)}
                                    >
                                        <Check
                                            size={14}
                                            className={classnames('me-25', {
                                                'fill-current': ""
                                            })}
                                        />
                                        <span className='text-truncate'>Confirm</span>
                                    </Button>
                                    <Button className='mt-1 remove-wishlist' color='light'
                                        // onClick={() => console.log(e)}
                                    >
                                        <X size={14} className='me-25'/>
                                        <span>Remove</span>
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        </section>
    )
}

export default Items
