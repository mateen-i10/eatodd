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
                <div id="faqs-page" className="faq-page-hero-section division">
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
                                                            <li className="breadcrumb-item d-flex"><a
                                                                href="/">Home</a>
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
                                    <h2 className="faq-h2-xl">F.A.Q.s</h2>
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
                                            <h3 className="faq-h5-xs">Why would I join the OMG Wine Club?</h3>
                                            <p className="grey-color">To be guaranteed wholesale pricing on our select bottles of wine.</p>
                                        </div>
                                        <div className="question">
                                            <h3 className="faq-h5-xs">Is there a penalty if I want to cancel my membership?</h3>
                                            <p className="grey-color">You can cancel your membership anytime with NO PENALTY.</p>
                                        </div>
                                        <div className="question">
                                            <h3 className="faq-h5-xs">Are there any benefits to referring friends?</h3>
                                            <p className="grey-color">Every time you refer a friend that becomes an OMG Wine Club Member, you will have a month of your membership fee waived.</p>
                                        </div>
                                        <div className="question">
                                            <h3 className="faq-h5-xs">What if I want to order a bottle of wine with my food, but I do not want to become an OMG Wine Club Member?</h3>
                                            <p className="grey-color">You can absolutely order a bottle of wine without becoming a member, but you will be charged full retail price for each bottle you purchase. (full retail price will be double the wine club price)
                                            </p>
                                        </div>
                                        <div className="question">
                                            <h3 className="faq-h5-xs">Does OMG Provide Wine for Events at Wine Club Pricing?</h3>
                                            <p className="grey-color">OMG Event Clients will be grandfathered into annual memberships, and will be able to take advantage of wholesale pricing for 12 months after the event when they order off the OMG Food Menu
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <img style={{width:'600', height: '900'}} src='http://eatomg.com/wineclub/wp-content/uploads/2022/01/02-1.jpeg'/>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex flex-wrap">
                            <div className="col-md-12">
                                <div className="more-questions-btn text-center">
                                    <a href="#" className="btn btn-md btn-green tra-red-hover">Still Have A
                                        Question?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <NewsLetter/>
            <Footer/>
        </div>

    )
}


export default Faq