import React from "react"
import facebook from "../../assets/images/icons/social/facebook.svg"
import twitter from "../../assets/images/icons/social/twitter.svg"
import instagram from "../../assets/images/icons/social/instagram.svg"
import './Footer.css'

export default function Footer() {
    return (
        <div>
            <div className="container-fluid footer-1">
                <div className="container-fluid">
                    <div className="row footer-top-row">
                        <div className="col-md-3">
                            <div className="text-white top-row-text">Contact Support</div>
                        </div>
                        <div className="col-md-3">
                            <div className="text-white top-row-text">Careers</div>
                        </div>
                        <div className="col-md-3">
                            <div className="text-white top-row-text">Goods & Gift Cards</div>
                        </div>
                        <div className="col-md-3">
                            <div className="text-white top-row-text">Fundraising</div>
                        </div>
                    </div>
                    <div className="row footer-sec-row">
                        <div className="col-md-6">
                            <div className="sec-row-heading text-white">ABOUT</div>
                            <div className="noo-links">
                                <div className="footer-link-container link text">
                                    <a href="#" className="link text-white">Our Values</a>
                                </div>
                                <div className="footer-link-container link text">
                                    <a href="#" className="link text-white">News and Events</a>
                                </div>
                                <div className="footer-link-container link text">
                                    <a href="#" className="link text-white">Investors</a>
                                </div>
                                <div className="footer-link-container link text">
                                    <a href="#" className="link text-white">Health and Safety</a>
                                </div>
                                <div className="footer-link-container link text">
                                    <a href="#" className="link text-white">Cultivate Foundation</a>
                                </div>
                                <div className="footer-link-container link text">
                                    <a href="#" className="link text-white">Pizzeria Locale</a>
                                </div>
                                <div className="footer-link-container link text">
                                    <a href="#" className="link text-white">All Locations</a>
                                </div>
                                <div className="footer-link-container link text">
                                    <a href="#" className="link text-white">Sustainability</a>
                                </div>
                                <div className="footer-link-container link text">
                                    <a href="#" className="link text-white">Do Not Sell My Information</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h5 className="sec-row-heading text-white mt-1">CONNECT WITH US</h5>
                            <div className="noo-links social-icon-container">
                                <div className="footer-link-container link image">
                                    <a href="#" className="link-container">
                                        <img
                                            src={facebook}
                                            alt="" role="img" className="link image-social"/></a>
                                </div>
                                <div className="footer-link-container link image ">
                                    <a href="https://www.instagram.com/chipotle/" target="_self"
                                       role="link" tabIndex="0" className="link-container">
                                        <img
                                            src={instagram}
                                            alt="" role="img"
                                            className="link image-social "/></a>
                                </div>
                                <div className="footer-link-container link image">
                                    <a href="https://twitter.com/chipotletweets" className="link-container">
                                        <img
                                            src={twitter}
                                            alt="" role="img"
                                            className="link image-social "/></a>
                                </div>
                            </div>
                        </div>
                        {/*<div className="col-md-3">*/}
                        {/*    <h5 className="sec-row-heading text-white">DOWNLOAD OUR APP</h5>*/}
                        {/*    <div className="noo-links d-inline-flex">*/}
                        {/*        <div className="footer-link-container link icon">*/}
                        {/*            <a href="https://itunes.apple.com/us/app/chipotle/id327228455?mt=8"*/}
                        {/*               className="link-container">*/}
                        {/*                <img src="https://www.chipotle.com/content/dam/chipotle/global-site-design/en/brand/icons/app/apple-store.png"*/}
                        {/*                    alt="Apple App Store"*/}
                        {/*                    role="img"*/}
                        {/*                    className="link"/>*/}
                        {/*            </a>*/}
                        {/*        </div>*/}
                        {/*        <div className="footer-link-container link icon mt-1">*/}
                        {/*            <a href="#" className="link-container">*/}
                        {/*                <img src="https://www.chipotle.com/content/dam/chipotle/global-site-design/en/brand/icons/app/google-play.png"*/}
                        {/*                    alt="Google Play" role="img" className="link"/>*/}
                        {/*            </a>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                    <div className="row footer-third-row">
                        <div className="country-area pointer">
                            <img src="https://www.chipotle.com/content/dam/poc/order/images/icons/united-states-flag.png"
                                                                                      alt="United States"
                                                                                      aria-hidden="true" role="img"
                                                                                      className="flag"/>
                            <div className="country homepage text-white mt-0">United States</div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row footer-four-row align-items-center justify-content-center ">
                            <div className="col-12">
                                <p className="text-white">© 2022 EATOMG</p>
                            </div>
                            <div className="col-12 ">
                                <div className="noo-links">
                                    <div className="footer-link-container link text text-start">
                                        <a href="#" className="link-item text-white">Our Values</a>
                                    </div>
                                    <div className="footer-link-container link text text-start">
                                        <a href="#" className="link-item text-white">News and Events</a>
                                    </div>
                                    <div className="footer-link-container link text text-start">
                                        <a href="#" className="link-item text-white">Investors</a>
                                    </div>
                                    <div className="footer-link-container link text text-start">
                                        <a href="#" className="link-item text-white">Privacy Policy</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}