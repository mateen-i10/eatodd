import React from 'react'
import Footer from "../../../shared/footer/Footer"
import Header from "../../../shared/header/Header"
import {useLocation} from "react-router-dom"

const OrderConfirmation = () => {
    const {state} = useLocation()
    console.log('state', state)

    const date = new Date(state.data.response.createdDate)
    const date_str = [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('-')
    const time_str = [date.getHours(), date.getMinutes()].join(':')

    // const mealName = state.data?.response?.orderDetail[0].meal.name
    // const totalPrice = state.data?.response?.totalPrice
    // const mealProducts =
    // console.log(mealName) // output: 2021/10/26
    return (
        <>
            <Header/>
            <div className="container-sm">

                <div className="row mt-2">
                    <p className="col-11 mt-1 text-center text-uppercase fw-bolder fs-5">Thank you for your order.</p>
                    <div className="col-11 mt-1 text-center  fs-5">Your
                        order <b> #{state.data?.response?.orderNo} </b> has been placed.
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-11 mt-1 text-center text-uppercase fw-bolder fs-5"> Order Summery</div>
                    <div
                        className="col-11 mt-1 text-center text-uppercase fw-bolder fs-5">{date_str}, {time_str}</div>
                </div>
            </div>
            <div className="container-sm">
                <div className="row">
                    <div className="col-7 mx-auto">
                        <hr className="col-10 "/>

                        <div className="row mt-1">
                            <div className="col-6  text-uppercase fw-bolder fs-4 text-primary">Your Burrito</div>
                            <div className="col-4 text-end fw-bolder fs-4 text-primary">$ 61</div>
                        </div>

                        <div className="row mt-1">
                            <div className="col-6 ">vegies, Beans, Rice</div>
                            <div className="col-4 text-end">$16</div>
                        </div>

                        <div className="row mt-1">
                            <div className="col-6">Souce</div>
                            <div className="col-4 text-end">$3</div>
                        </div>

                        <div className="row mt-1">
                            <div className="col-6">Side</div>
                            <div className="col-4 text-end">$6</div>
                        </div>
                        <hr className="col-10 "/>

                    </div>
                </div>
            </div>
            <div className="container-sm">
                <div className="row">
                    <div className="col-11 text-center text-uppercase fw-bolder fs-5">Order Total</div>

                    <div className="col-7 mx-auto">
                        <hr className='col-10 mt-1'/>
                        <div className="row mt-1">
                            <div className="col-6">SubTotal</div>
                            <div className="col-4 text-end">$36</div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-6">Discount</div>
                            <div className="col-4 text-end">-$6</div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-6">Shipping Charges</div>
                            <div className="col-4 text-end">$2</div>
                        </div>
                    </div>

                    <div className="col-7 mx-auto">
                        <hr className='col-10 mt-1 '/>
                        <div className="row  fs-4 text-uppercase fw-bolder">
                            <div className="col-6">Total Price</div>
                            <div className="col-4 text-end">$36</div>
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
                        <div>Lisa Smith</div>
                        <div>main St</div>
                        <div>Miami Floreda</div>
                        <div>33130</div>
                        <div>USA</div>
                        <div>Payment Method</div>
                        <div>Visa ******</div>
                    </div>
                    <div className="col-4 mx-auto">
                        <div className="fs-4 fw-bolder mt-1 ">Billing Address</div>
                        <div>Lisa Smith</div>
                        <div>main St</div>
                        <div>Miami Florida</div>
                        <div>33130</div>
                        <div>USA</div>
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
