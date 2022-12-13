import React from "react"
import './Footer.css'
import {Col, Row} from "reactstrap"
import logo from "../../assets/images/my-images/OMG_logo.png"

export default function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="container-sm">
                    <Row>
                        <Col md={3}>
                            <div className="footer-info mb-40">
                                <div className="footer-logo"><img src={logo} alt="footer-logo"/></div>
                                <p>Olive Mediterranean Grill- Serving up Chicago’s favorite Mediterranean tastes and flavors that happen to be healthy- since 2010!</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="footer-contacts mb-40">
                                <h5 className="h5-sm">FRENCH MARKET</h5>
                                <p>131 N. Clinton Ave,<br/>
                                    Chicago, IL 60661</p>
                                {/*<p className="foo-email txt-500 mt-15"><a*/}
                                {/*    href="mailto:yourdomain@mail.com">hello@yourdomain.com</a></p>*/}
                                <p><span className="yellow-color"><a href="tel:123456789">(312) 526-3105</a></span></p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="footer-contacts mb-40">
                                <h5 className="h5-sm">LINCOLN PARK</h5>
                                <p>1001 W. North Ave,<br/>
                                    Chicago, IL 60642</p>
                                {/*<p className="foo-email txt-500 mt-15"><a*/}
                                {/*    href="mailto:yourdomain@mail.com">hello@yourdomain.com</a></p>*/}
                                <p><span className="yellow-color"><a href="tel:123456789">(312) 274-5525</a></span></p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="footer-contacts mb-40">
                                <h5 className="h5-sm">VAN BUREN</h5>
                                <p>186 W. Van Buren,<br/>
                                    Chicago, IL 60605</p>
                                {/*<p className="foo-email txt-500 mt-15"><a*/}
                                {/*    href="mailto:yourdomain@mail.com">hello@yourdomain.com</a></p>*/}
                                <p><span className="yellow-color"><a href="tel:123456789">(312) 754-0483</a></span></p>
                            </div>
                        </Col>
                        <div className="bottom-footer">
                            <div className="row d-flex align-items-center">
                                <div className="col-md-5 col-lg-6">
                                    <div className="footer-copyright">
                                        <p>© 2022 EATOMG. Handcrafted with love by Olive Team</p>
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
                    </Row>
                </div>
            </footer>
        </div>
    )
}