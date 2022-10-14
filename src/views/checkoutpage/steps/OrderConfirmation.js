import React from 'react'
import Footer from "../../../shared/footer/Footer"
import Header from "../../../shared/header/Header"
import {useLocation} from "react-router-dom"

const OrderConfirmation = () => {
    const {state} = useLocation()
    console.log('state', state)
    return (
        <>
            <Header/>
            <div className="container-sm">

                <div className="row mt-2">
                    <p className="col-11 mt-1 text-center text-uppercase fw-bolder fs-5">Thank you for your order.</p>
                    <div className="col-11 mt-1 text-center  fs-5">Your order <b> #2232123 </b> has been placed.
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-11 mt-1 text-center text-uppercase fw-bolder fs-5"> Order Summery</div>
                    <div className="col-11 mt-1 text-center text-uppercase fw-bolder fs-5">11-10-2022</div>
                </div>
            </div>
            <div className="container-sm">
                <div className="row">
                    <div className="col-7 mx-auto">
                        <hr className="col-10 "/>

                        <div className="row mt-1">
                            <div className="col-6  text-uppercase fw-bolder fs-5">Your Buritto</div>
                            <div className="col-4 text-end">$14</div>
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

                        <div className="row mt-1">
                            <div className="col-6">Order No.</div>
                            <div className="col-4 text-end">12345</div>
                        </div>

                        <div className="row mt-1">
                            <div className="col-6">Quantity</div>
                            <div className="col-4 text-end">1</div>
                        </div>
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
