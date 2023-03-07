import React from 'react'
import './HeroSection.css'
import {Link} from "react-router-dom"
import {Col, Row} from "reactstrap"
const HeroSection = () => {
    return (
        <section>
            <div className='container' style={{paddingLeft: '0px', paddingRight: '0px'}}>
                <div id="faqs-page" className="page-hero-section division text-center white-color">
                    <Row style={{marginTop: '125px'}}>
                        <Col lg={12}>
                            <div>
                                <Link className='btn-lg btn-primary' to='/wine/membership'>JOIN NOW</Link>
                            </div>
                        </Col>
                    </Row>
                    {/*<div className="container-fluid">
                        <div className="row d-flex flex-wrap">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="hero-txt text-center white-color">
                                    <div id="breadcrumb">
                                        <div className="row d-flex flex-wrap">
                                            <div className="col">
                                                <div className="breadcrumb-nav">
                                                    <nav aria-label="breadcrumb">
                                                        <ol className="breadcrumb d-flex flex-wrap">
                                                            <li className="breadcrumb-item d-flex"><Link to='/home'>Home</Link>
                                                            </li>
                                                            <li className="breadcrumb-item active d-flex"
                                                                aria-current="page">Wine
                                                            </li>
                                                        </ol>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Link className='btn-lg btn-primary' to='/wine/membership'>Join Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>*/}
                </div>
            </div>
        </section>

        )
}
export default HeroSection
