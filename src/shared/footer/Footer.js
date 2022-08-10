import React from "react"
import './Footer.css'
import logo from "../../assets/images/my-images/OMG_logo.png"

export default function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3">
                            <div className="footer-info mb-40">
                                <div className="footer-logo"><img src={logo} alt="footer-logo"/></div>
                                <p>An orci nullam tempor a sapien eget gravida and integer donec ipsum porta justo
                                    integer</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <div className="footer-contacts mb-40">
                                <h5 className="h5-sm">Order Now</h5>
                                <p>8721 M Central Avenue,</p>
                                <p>Los Angeles, CA 90036</p>
                                <p className="foo-email txt-500 mt-15"><a
                                    href="mailto:yourdomain@mail.com">hello@yourdomain.com</a></p>
                                <p><span className="yellow-color"><a href="tel:123456789">789-654-3210</a></span></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <div className="footer-info mb-30">
                                <h5 className="h5-sm">Working Hours</h5>
                                <p>Quaerat neque purus ipsum at neque dolor primis tempus</p>
                                <p className="mt-15">Mon-Fri: <span>9:00AM - 10:00PM</span></p>
                                <p>Saturday: <span>10:00AM - 8:30PM</span></p>
                                <p>Sunday: <span>12:00PM - 5:00PM</span></p>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4 col-xl-3">
                            <div className="footer-img mb-40">
                                <h5 className="h5-sm">Instagram Feed</h5>
                                <ul className="text-center clearfix">
                                    <li><a href="#" target="_blank">
                                        <img className="insta-img"
                                             src="https://jthemes.net/themes/html/testo/files/images/instagram/img-01.jpg"
                                             alt="insta-img"/></a>
                                    </li>
                                    <li><a href="#" target="_blank">
                                        <img className="insta-img"
                                             src="https://jthemes.net/themes/html/testo/files/images/instagram/img-02.jpg"
                                             alt="insta-img"/></a></li>
                                    <li><a href="#" target="_blank">
                                        <img className="insta-img" src="https://jthemes.net/themes/html/testo/files/images/instagram/img-03.jpg"
                                             alt="insta-img"/></a></li>
                                    <li><a href="#" target="_blank">
                                        <img className="insta-img" src="https://jthemes.net/themes/html/testo/files/images/instagram/img-04.jpg"
                                             alt="insta-img"/></a>
                                    </li>
                                    <li><a href="#" target="_blank">
                                        <img className="insta-img"
                                             src="https://jthemes.net/themes/html/testo/files/images/instagram/img-05.jpg"
                                             alt="insta-img"/></a>
                                    </li>
                                    <li><a href="#" target="_blank">
                                        <img className="insta-img"
                                             src="https://jthemes.net/themes/html/testo/files/images/instagram/img-06.jpg" alt="insta-img"/></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-footer">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-5 col-lg-6">
                                <div className="footer-copyright">
                                    <p>© 2022 EATOMG. All Rights Reserved</p>
                                </div>
                            </div>
                            <div className="col-md-7 col-lg-6 align-content-end">
                                <ul className="bottom-footer-list clearfix">
                                    <li>
                                        <p className="first-list-link">
                                            <a href="#">
                                                <i className="fab fa-facebook-f"></i> Facebook</a>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <a href="#"><i className="fab fa-twitter"></i> Twitter</a>
                                        </p>
                                    </li>
                                    <li>
                                        <p><a href="#"><i className="fab fa-youtube"></i> YouTube</a>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="last-li"><a href="#">
                                            <i className="fab fa-yelp"></i> Yelp</a>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}