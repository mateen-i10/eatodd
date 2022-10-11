import React from 'react'
import Footer from "../../../shared/footer/Footer"
import Header from "../../../shared/header/Header"

const OrderConfirmation = () => {
    return (
        <>
            <Header/>
            <div className="container-sm">
                {/*<div className="row align-items-center justify-content-center">*/}
                {/*    <div className="col-12 mt-1 mx-auto text-center"><img*/}
                {/*        src={require('../../../assets/images/logo/OMG_logo.png').default}*/}
                {/*        height={50}/></div>*/}
                {/*</div>*/}
                {/*<hr/>*/}
                <div className="row">
                    <div className="col-12 mt-2 text-center text-uppercase fw-bolder fs-3">Order confirmation</div>
                    <p className="col-12 mt-1 text-center text-uppercase fw-bolder fs-5">Thank you for your order</p>
                    <p className="col-7 mt-1 text-center mx-auto fs-5">We have receive your order. We will
                        contact
                        you as
                        your order shipped. You can find your order
                        information below</p>
                </div>
                <div className="row">
                    <div className="col-12 mt-1 text-center text-uppercase fw-bolder fs-5"> Order Summery</div>
                    <div className="col-12 mt-1 text-center text-uppercase fw-bolder fs-5">11-10-2022</div>
                </div>
            </div>
            <div className="container-sm">
                <div className="row">
                    <div className="col-5"><img
                        src={require('../../../assets/images/ORDER/OMG Plate (3) (2).png').default} height={"100%"}
                        width={"100%"}/></div>
                    <div className="col-7">
                        <hr/>
                        <div className="col-12">
                            <div className="row mt-1">
                                <div className="col-6  text-uppercase fw-bolder fs-5">Your Buritto</div>
                                <div className="col-4 text-end">$14</div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row mt-1">
                                <div className="col-6 ">vegies, Beans, Rice</div>
                                <div className="col-4 text-end">$16</div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row mt-1">
                                <div className="col-6">Souce</div>
                                <div className="col-4 text-end">$3</div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row mt-1">
                                <div className="col-6">Side</div>
                                <div className="col-4 text-end">$6</div>
                            </div>
                        </div>
                        <hr/>
                        <div className="col-12">
                            <div className="row mt-1">
                                <div className="col-6">Order No.</div>
                                <div className="col-4 text-end">12345</div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row mt-1">
                                <div className="col-6">Quantity</div>
                                <div className="col-4 text-end">1</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container-sm">
                <div className="row">
                    <div className="col-12 text-center text-uppercase fw-bolder fs-5">Order Total</div>
                    <hr className='col-8 mt-1 mx-auto'/>
                    <div className="col-8 mx-auto">
                        <div className="row mt-1">
                            <div className="col-9">SubTotal</div>
                            <div className="col-3 text-end">$36</div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-9">Discount</div>
                            <div className="col-3 text-end">-$6</div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-9">Shipping Charges</div>
                            <div className="col-3 text-end">$2</div>
                        </div>
                    </div>

                    <hr className='col-8 mt-1 mx-auto'/>
                    <div className="col-8 mx-auto">
                        <div className="row  fs-4 text-uppercase fw-bolder">
                            <div className="col-8">Total Price</div>
                            <div className="col-4 text-end">$36</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-sm">
                <div className="row text-center">
                    <div className="col-12 fs-4 mx-auto fw-bolder  mt-1 ">Shipping and Billing Address
                    </div>
                </div>
                <div className="row text-center mt-1 ">
                    <div className="col-4 mx-auto">
                        <div className="fs-4 fw-bolder mt-1 ">Billing Address</div>
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
            <div className="container-sm mt-2 mb-2 ">
                <div className="row align-items-center justify-content-center ">
                    <div className="col-6 mx-auto text-center">
                        <div className="btn btn-primary text-uppercase" onClick={() => {
                            history.push('/home')
                        }}>keep Exploring
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default OrderConfirmation
