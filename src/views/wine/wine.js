import React from 'react'
import Header from "../../shared/header/Header"
import Footer from "../../shared/footer/Footer"
import './wine.css'

const Wine = () => {
    return (
        <div>
            <Header/>
            <div>
                <div className="wine-page">
                    <section id="hero" className="bg-fixed hero-section-wine division">
                        <div className="container-sm">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-12 col-md-10">
                                    <div className="hero-txt-wine text-center">
                                        <h2>OMG WINE CLUB</h2>
                                        <p className="">The OMG Wine Club was created to make you say OMG at your savings!
                                            We are the 1st wine club that was created to SAVE YOU MONEY!
                                            We appreciate you and your loyalty to OMG. As our way to say THANK YOU,
                                            we are extending you the opportunity to purchase your favorite wines AT COST!
                                            Since wine pairs PERFECTLY with our food, we figured why not let YOU PAY WHAT WE PAY?!
                                            We are not complicated; we just want you to EAT. LIVE. LOVE – now with your favorite glass of wine.
                                            Cheers Friends!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="bg-fixed select-section">
                        <div className="container-fluid">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-6 col-lg-4 d-flex flex-column align-items-center justify-content-center select_link wow fadeInUp select_col "

                                >
                                    <div className="hover-overlay">
                                        <img className="img-fluid  rounded select-img" src={require('../../assets/images/pages/wine/wine-stock1.jpg').default}
                                             alt="layout-1-preview"/>
                                    </div>
                                    <h4>omg wine stock</h4>
                                    <p>( Demo #1 )</p>
                                </div>
                                <div className="col-md-6 col-lg-4 d-flex flex-column align-items-center justify-content-center select_link wow fadeInUp select_col "
                                >
                                    <div className="hover-overlay">
                                        <img className="img-fluid  rounded select-img" src={require('../../assets/images/pages/wine/wine-stock1.jpg').default}
                                             alt="layout-1-preview"/>
                                    </div>
                                    <h4>omg wine stock</h4>
                                    <p>( Demo #1 )</p>
                                </div>
                                <div className="col-md-6 col-lg-4 d-flex flex-column align-items-center justify-content-center select_link wow fadeInUp select_col"
                                >
                                    <div className="hover-overlay">
                                        <img className="img-fluid  rounded select-img" src={require('../../assets/images/pages/wine/wine-stock1.jpg').default}
                                             alt="layout-1-preview"/>
                                    </div>
                                    <h4>omg wine stock</h4>
                                    <p>( Demo #1 )</p>
                                </div>
                                <div className="col-md-6 col-lg-4 d-flex flex-column align-items-center justify-content-center select_link wow fadeInUp select_col"
                                >
                                    <div className="hover-overlay">
                                        <img className="img-fluid  rounded select-img" src={require('../../assets/images/pages/wine/wine-stock1.jpg').default}
                                             alt="layout-1-preview"/>
                                    </div>
                                    <h4>omg wine stock</h4>
                                    <p>( Demo #1 )</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="payless_drink_best">
                        <img src={require("../../assets/images/pages/wine/DrinkTheBest_PayTheLeast-1770x950-1.png").default}
                             style={{width:"100%", height:"100%"}}
                             alt="Pay Less Drink the Best"
                        />
                    </div>
                </div>
                <Footer/>
            </div>
        </div>


     )
     }
export default Wine