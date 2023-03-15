import React from 'react'
import './Faq.css'
import Headerwine from "../../../shared/wine-header/Header-wine"
import WineFooter from "../../../shared/wine-footer/Wine-footer"
import {Col, Row} from "reactstrap"
import {Link} from "react-router-dom"

const Faq = () => {
    return (
        <div>
            <Headerwine/>
            <section>
                <div className='container-sm' style={{paddingLeft: '0px', paddingRight: '0px'}}>
                    <div id="faqs-page1" className="a division text-center white-color">
                        <Row style={{marginTop: '125px'}}>
                            <Col lg={11}>
                                <div>
                                    <Link className='btn-lg btn-primary' to='/wine/membership' style={{marginRight: '30px'}}>JOIN NOW</Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div className="container-sm" style={{backgroundColor: "#f4f6f9"}}>

                    <div className="row" style={{paddingTop: '120px'}}>
                        <div className="col-lg-6">
                            <div className="">
                                <div className="question">
                                    <h3 className="text-primary textHead">Why would I join the OMG Wine Club?</h3>
                                    <p className="grey-color textP">To be guaranteed wholesale pricing on our select bottles of wine.</p>
                                </div>
                                <div className="question">
                                    <h3 className="text-primary textHead">Is there a penalty if I want to cancel my membership?</h3>
                                    <p className="grey-color textP">You can cancel your membership anytime with NO PENALTY.</p>
                                </div>
                                <div className="question">
                                    <h3 className="text-primary textHead">Are there any benefits to referring friends?</h3>
                                    <p className="grey-color textP">Every time you refer a friend that becomes an OMG Wine Club Member, you will have a month of your membership fee waived.</p>
                                </div>
                                <div className="question">
                                    <h3 className="text-primary textHead">What if I want to order a bottle of wine with my food, but I do not want to become an OMG Wine Club Member?</h3>
                                    <p className="grey-color textP">You can absolutely order a bottle of wine without becoming a member, but you will be charged full retail price for each bottle you purchase. (full retail price will be double the wine club price)
                                    </p>
                                </div>
                                <div className="question">
                                    <h3 className="text-primary textHead">Does OMG Provide Wine for Events at Wine Club Pricing?</h3>
                                    <p className="grey-color textP">OMG Event Clients will be grandfathered into annual memberships, and will be able to take advantage of wholesale pricing for 12 months after the event when they order off the OMG Food Menu
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12" style={{textAlign: '-webkit-center'}}>
                            <img className='faqImg' src='http://eatomg.com/wineclub/wp-content/uploads/2022/01/02-1.jpeg' style={{height: '80%'}}/>
                        </div>


                    </div>

                    {/*<div className="row d-flex flex-wrap">
                        <div className="col-md-12">
                            <div className="more-questions-btn text-center mb-3">
                                <a href="#" className="btn btn-md btn-green tra-red-hover">Still Have A
                                    Question?</a>
                            </div>
                        </div>
                    </div>*/}
                </div>

            </section>
            <WineFooter/>
        </div>

    )
}


export default Faq