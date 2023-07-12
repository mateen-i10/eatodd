import React from 'react'
import Footer from "../../../shared/footer/Footer"
import Header from "../../../shared/header/Header"
import {useLocation} from "react-router-dom"

const OrderConfirmation = () => {
    const {state} = useLocation()
    console.log('state', state)

    const date = new Date(state.data.createdDate)
    const date_str = [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('-')
    const time_str = [date.getHours(), date.getMinutes()].join(':')

    // let total = 0
    const cateringOrderSectionItems = state.data?.cateringOrderSectionItems
    // if (cateringOrderSectionItems && cateringOrderSectionItems?.length > 0) {
    //     for (const i in cateringOrderSectionItems) {
    //         total = total + (cateringOrderSectionItems[i]?.unitPrice * cateringOrderSectionItems[i]?.quantity)
    //     }
    // }
    // console.log(total)

    // const mealName = state.data?.response?.orderDetail[0].meal.name
    // const totalPrice = state.data?.response?.totalPrice
    // const mealProducts =
    // console.log(mealName)

    const billingAddress = state.data?.billingAddress
    const shippingAddress = state.data?.shippingAddress

    return (
        <>
            <Header/>
            <div className="container-sm">

                <div className="row mt-2">
                    <p className="col-11 mt-1 text-center text-uppercase fw-bolder fs-5">Thank you for your order.</p>
                    <div className="col-11 mt-1 text-center  fs-5">Your
                        order <b> #{state.data?.orderNo || state.data?.cateringOrderNo} </b> has
                        been
                        placed.
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-11 mt-1 text-center text-uppercase fw-bolder fs-5"> Order Summery</div>
                    <div
                        className="col-11 mt-1 text-center text-uppercase fw-bolder fs-5">{date_str}, {time_str}</div>
                </div>
                {/*<hr className="col-2 mx-auto"/>*/}
            </div>
            <div className="container-sm">
                <div className="row">
                    <div className="col-7 mx-auto">
                        <hr className="col-10"/>
                    </div>
                    {state.data?.orderDetail?.length && state.data?.orderDetail[0].meal ? state.data?.orderDetail.map((mealItem, i) => (
                        <div key={i} className="col-7 mx-auto">

                            <div className="row mt-1">
                                <div
                                    className="col-6  text-uppercase fw-bolder fs-4 text-primary">{mealItem.meal.name}</div>
                                {/*<div className="col-4 text-end fw-bolder fs-4 text-primary">$ 61</div>*/}
                            </div>

                            <div className="row mt-1">
                                {mealItem.meal.mealProducts.length > 0 ? mealItem.meal.mealProducts.map((item, i) => (
                                   <>
                                     <div key={i} className="col-6 ">
                                        <span>{item.product.name}</span>
                                    </div>
                                    <div className="col-4 text-end ">
                                        <span>$ {(item.unitPrice * item.quantity) / 100}</span>
                                    </div>
                                   </>))  : null}
                            </div>

                            {/*<div className="row mt-1">*/}
                            {/*    <div className="col-6">Souce</div>*/}
                            {/*    <div className="col-4 text-end">$3</div>*/}
                            {/*</div>*/}

                            {/*<div className="row mt-1">*/}
                            {/*    <div className="col-6">Side</div>*/}
                            {/*    <div className="col-4 text-end">$6</div>*/}
                            {/*</div>*/}
                            <hr className="col-10 "/>

                            {/* eslint-disable-next-line multiline-ternary */}
                        </div>)) : state.data?.cateringOrderMenuItems && state.data?.cateringOrderWines &&
                    // eslint-disable-next-line multiline-ternary
                    state.data?.cateringOrderMenuItems.length > 0 && state.data?.cateringOrderWines.length > 0 ?
                        // eslint-disable-next-line multiline-ternary
                        <div className="col-7 mx-auto">
                            {state.data?.cateringOrderMenuItems.map((catItem, i) => (
                                <div key={i} className="row mt-1">
                                    <div
                                        className="col-6  text-uppercase fw-bolder fs-4 text-primary">{catItem.cateringMenuItem.name}</div>
                                    <div
                                        className="col-4  text-end text-uppercase fw-bolder fs-4 text-primary">$ {catItem.unitPrice * catItem.quantity}</div>

                                    {cateringOrderSectionItems && cateringOrderSectionItems.length > 0 ? cateringOrderSectionItems.map((item, i) => {
                                        if (catItem.cateringMenuItemId === item.cateringMenuItemId) {
                                            return (<div key={i} className="row ">
                                                <div className="col-6 ">
                                                    <span>{item.sectionItem.product.name}</span>
                                                </div>
                                                <div className="col-4 text-end ">
                                                    <span>$ {item.unitPrice}</span>
                                                </div>
                                            </div>)
                                        }

                                        // eslint-disable-next-line multiline-ternary
                                    }) : null
                                    }

                                </div>
                            ))}
                            <hr className="col-10 "/>
                            <div
                                className="text-uppercase fw-bolder text-primary fs-4 mt-3">Wines
                            </div>
                            <hr className="col-10 "/>
                            {state.data?.cateringOrderWines.map((wineItem, i) => (
                                <div key={i} className="row mt-1">
                                    <div
                                        className="col-6  text-uppercase fw-bolder fs-5 ">{wineItem.wine.name}
                                    </div>
                                    <div
                                        className="col-4 text-end text-uppercase fw-bolder fs-5 ">$ {wineItem.unitPrice}
                                    </div>
                                </div>
                            ))}
                            <hr className="col-10 "/>
                        </div>

                        : state.data?.cateringOrderMenuItems &&
                        // eslint-disable-next-line multiline-ternary
                        state.data?.cateringOrderMenuItems.length > 0 ? <div className="col-7 mx-auto">{
                                state.data?.cateringOrderMenuItems.map((catItem, i) => (

                                    <div key={i} className="row mt-1">
                                        <div
                                            className="col-6  text-uppercase fw-bolder fs-4 text-primary">{catItem.cateringMenuItem.name}</div>
                                        <div
                                            className="col-4 text-end text-uppercase fw-bolder fs-4 text-primary">$ {catItem.unitPrice * catItem.quantity}</div>
                                        {cateringOrderSectionItems && cateringOrderSectionItems.length > 0 ? cateringOrderSectionItems.map((item, i) => {
                                            if (catItem.cateringMenuItemId === item.cateringMenuItemId) {
                                                return (<div key={i} className="row ">
                                                    <div className="col-6 ">
                                                        <span>{item.sectionItem.product.name}</span>
                                                    </div>
                                                    <div className="col-4 text-end ">
                                                        <span>$ {item.unitPrice}</span>
                                                    </div>
                                                </div>)
                                            }

                                            // eslint-disable-next-line multiline-ternary
                                        }) : null
                                        }
                                    </div>
                                ))}
                                <hr className="col-10 "/>
                            </div>
                            : state.data?.orderDetail && state.data?.orderDetail.length > 0 ? <div
                                className="col-7 mx-auto">
                                <div
                                    className="text-uppercase fw-bolder text-primary fs-4 mt-3">Wines
                                </div>
                                <hr className="col-10 "/>
                                {state.data?.orderDetail.map((wineItem, i) => (
                                    <div key={i}>

                                        {wineItem.product ? <div className="row mt-1">
                                            <div
                                                className="col-6  text-uppercase fw-bolder fs-5 ">{wineItem.product.name}
                                            </div>
                                            <div
                                                className="col-4 text-end text-uppercase fw-bolder fs-5 ">$ {wineItem.product.wholePrice || 0}
                                            </div>
                                        </div> : null}</div>
                                ))}
                            </div> : null
                    }
                </div>
            </div>
            <div className="container-sm">
                <div className="row">
                    <div className="col-11 text-center text-uppercase fw-bolder fs-5 mt-3">Order Total</div>

                    <div className="col-7 mx-auto">
                        <hr className='col-10 mt-1'/>
                        <div className="row mt-1">
                            <div className="col-6">SubTotal</div>
                            <div className="col-4 text-end">$ {state.data.totalPrice / 100}</div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-6">Discount</div>
                            <div className="col-4 text-end">$ {state.data?.discount || 0}</div>
                        </div>
                        {/*<div className="row mt-1">*/}
                        {/*    <div className="col-6">Shipping Charges</div>*/}
                        {/*    <div className="col-4 text-end">$2</div>*/}
                        {/*</div>*/}
                    </div>

                    <div className="col-7 mx-auto">
                        <hr className='col-10 mt-1 '/>
                        <div className="row  fs-4 text-uppercase fw-bolder">
                            <div className="col-6">Total Price</div>
                            <div
                                className="col-4 text-end">${(state.data.totalPrice / 100) - state.data.discount}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-sm">
                <div className="row text-center">
                    <div className="col-11 fs-4 mx-auto fw-bolder mt-1 ">Shipping and Billing Address
                    </div>
                </div>
                <div className="row text-center mt-1 ">
                    <div className="col-4 mx-auto">
                        <div className="fs-4 fw-bolder mt-1 ">Shipping Address</div>
                        <div className=" ">{shippingAddress.city}</div>
                        <div className=" ">{shippingAddress.country}</div>
                        <div className=" ">{shippingAddress.state}</div>
                        <div className=" ">{shippingAddress.zipCode}</div>
                        <div className=" ">{shippingAddress.phoneNumber}</div>
                        <div className=" ">{shippingAddress.address1}</div>
                        <div className=" ">Payment Method</div>
                        <div>Visa ******</div>
                    </div>
                    <div className="col-4 mx-auto">
                        <div className="fs-4 fw-bolder mt-1 ">Billing Address</div>
                        <div>{billingAddress.city}</div>
                        <div>{billingAddress.country}</div>
                        <div>{billingAddress.state}</div>
                        <div>{billingAddress.zipCode}</div>
                        <div>{billingAddress.phoneNumber}</div>
                        <div>{billingAddress.address1}</div>
                        <div>Shipping Method</div>
                        <div>Standard Shipping</div>
                    </div>

                </div>
            </div>
            <hr className="mt-5"/>
            <Footer/>
        </>
    )
}

export default OrderConfirmation
