import React from 'react'
import './Faq.css'
import Headerwine from "../../../shared/wine-header/Header-wine"
import NewsLetter from "../components/NewsLetter"
import Footer from "../../../shared/footer/Footer"

const Faq = () => {
    return (
        <div>
            <Headerwine/>
            <div className="faq-page">
                <div id="faqs-page" className="page-hero-section division">
                    <div className="container-fluid">
                        <div className="row d-flex flex-wrap">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="hero-txt text-center white-color">
                                    <div id="breadcrumb">
                                        <div className="row d-flex flex-wrap">
                                            <div className="col">
                                                <div className="breadcrumb-nav">
                                                    <nav aria-label="breadcrumb">
                                                        <ol className="breadcrumb d-flex flex-wrap">
                                                            <li className="breadcrumb-item d-flex"><a href="demo-1.html">Home</a>
                                                            </li>
                                                            <li className="breadcrumb-item active d-flex"
                                                                aria-current="page">F.A.Q.s
                                                            </li>
                                                        </ol>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className="h2-xl">F.A.Q.s</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section id="faqs-1" className="wide-100 faqs-section division">
                    <div className="container-fluid">
                        <div className="faqs-1-questions">
                            <div className="row d-flex flex-wrap align-items-center justify-content-center">
                                <div className="col-lg-5">
                                    <div className="questions-wrapper">
                                        <div className="question">
                                            <h5 className="h5-xs">What payment methods do you accept?</h5>
                                            <p className="grey-color">Etiam amet mauris suscipit in odio. Integer congue
                                                undo metus. Vitae arcu mollis
                                                blandit ultrice ligula egestas a magna suscipit lectus magna suscipit luctus
                                                blandit molestie purus
                                            </p>

                                        </div>
                                        <div className="question">
                                            <h5 className="h5-xs">Is my payment information secure?</h5>
                                            <p className="grey-color">Aliqum mullam blandit and tempor sapien donec ipsum
                                                gravida porta. Velna vitae
                                                auctor congue quaerat and sodales sapien
                                            </p>

                                        </div>
                                        <div className="question">
                                            <h5 className="h5-xs">Is there a discount code?</h5>
                                            <p className="grey-color">Praesent semper lacus sed cursus porta, feugiat primis
                                                luctus in ligula eros ac
                                                ligula massa and faucibus orci a luctus aliquet and molestie purus venenatis
                                                aliquam eget lacinia
                                            </p>

                                        </div>
                                        <div className="question">
                                            <h5 className="h5-xs">What if I have lost my gift certificate?</h5>
                                            <p className="grey-color">Praesent semper lacus sed cursus porta, feugiat primis
                                                luctus in ligula eros ac
                                                ligula massa and faucibus orci a luctus aliquet and molestie purus venenatis
                                                aliquam eget lacinia
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="questions-wrapper pc-30">
                                        <div className="question">
                                            <h5 className="h5-xs">How can I change something in my order?</h5>
                                            <p className="grey-color">Aliqum mullam blandit and tempor sapien donec ipsum at
                                                gravida porta. Velna vitae
                                                auctor congue tristique
                                            </p>

                                        </div>
                                        <div className="question">
                                            <h5 className="h5-xs">How much is shipping?</h5>
                                            <p className="grey-color">Praesent semper lacus sed cursus porta, feugiat primis
                                                luctus in ligula eros ac
                                                ligula massa and faucibus orci a luctus aliquet and molestie purus venenatis
                                                aliquam eget lacinia
                                            </p>
                                        </div>
                                        <div className="question">
                                            <h5 className="h5-xs">How long will my order take to be delivered?</h5>
                                            <p className="grey-color">Praesent semper lacus sed cursus porta, feugiat primis
                                                luctus in ligula ligula
                                                massa in faucibus orci a luctus ultrices ipsum primis in faucibus odio
                                                feugiat primis luctus in ligula eros
                                                ligula
                                            </p>
                                        </div>
                                        <div className="question">
                                            <h5 className="h5-xs">How do I track my order?</h5>
                                            <p className="grey-color">Praesent semper lacus sed cursus porta, feugiat primis
                                                luctus in ligula eros ac
                                                ligula massa and faucibus orci a luctus aliquet and molestie purus venenatis
                                                aliquam eget lacinia
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex flex-wrap">
                            <div className="col-md-12">
                                <div className="more-questions-btn text-center">
                                    <a href="contacts.html" className="btn btn-md btn-green tra-red-hover">Still Have A
                                        Question?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <NewsLetter />
            <Footer />
        </div>

    )
}


export default Faq