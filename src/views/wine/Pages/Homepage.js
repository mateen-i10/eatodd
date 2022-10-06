import React from 'react'
import {Card, CardBody, CardText, Col, Row} from 'reactstrap'
import VideoHero from '../../wine/components/Carousel/Carousel'
import Headerwine from "../../../shared/wine-header/Header-wine"

import Footer from "../../../shared/footer/Footer"

const Homepage = () => {

    return (
        <>
            <Headerwine/>
            <VideoHero/>
            <div className="about-page">
                <section id="about-3" className="wide-60 about-section division mt-5">
                    <div className="container-sm ">
                        <div className="row d-flex align-items-center justify-content-center h-75 ">
                            <div className=" col-lg-3 col-12">
                                <div className="about-3-img text-center mb-40 ">
                                    <img className="img-fluid" style={{width: "100%", height: "100%"}}
                                         src={require('../../../assets/images/my-images/wine1.jpg').default}
                                         alt="about-image"/>
                                </div>
                            </div>
                            <div className=" col-lg-9 col-12 text-start ">
                                <div className="about-3-txt mb-40">
                                    <p className="p-md fs-5 fw-bold mt-1"
                                       style={{color: "grey", lineHeight: "25px"}}>The
                                        OMG Wine Club was created to make you say OMG at your savings! We are the 1st
                                        wine club that was created to SAVE YOU MONEY! We appreciate you and your loyalty
                                        to OMG.As our way to say THANK YOU, we are extending you the
                                        opportunity to purchase your favorite wines AT COST!Since wine pairs PERFECTLY
                                        with our food, we figured
                                        why not let YOU PAY WHAT WE PAY?! We are not complicated; we just want you to
                                        EAT. LIVE. LOVE – now with
                                        your favorite glass of wine. Cheers Friends!
                                        The
                                        OMG Wine Club was created to make you say OMG at your savings! We are the 1st
                                        wine club that was created to SAVE YOU MONEY! We appreciate you and your loyalty
                                        to OMG.As our way to say THANK YOU, we are extending you the
                                        opportunity to purchase your favorite wines AT COST!Since wine pairs PERFECTLY
                                        with our food, we figured
                                        why not let YOU PAY WHAT WE PAY?! We are not complicated;
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about-1" className="bg-fixed wide-100 about-section division  "
                         style={{marginTop: "100px"}}>
                    <div className="container-fluid">
                        <div className="row d-flex flex-wrap align-items-center justify-content-center">
                            <div className="col-lg-8 " style={{height: "30vh"}}>
                                <div className="about-1-txt text-center">
                                    <h2><span
                                        className="text-uppercase text-primary fw-bolder ">Sommelier’s Selection</span>
                                    </h2>
                                    <h3 className="text-uppercase text-primary fw-bolder ">WINE OF THE WEEK</h3>
                                    <p className="p-xl grey-color fs-4">Porta semper lacus cursus, feugiat primis
                                        ultrice a
                                        ligula risus auctor an
                                        tempus feugiat dolor lacinia cubilia curae integer orci congue and metus
                                        mollislorem primis in integer
                                        metus curae integer orci congue integer and primis in integer metus mollis
                                        faucibus
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="blog-1" className="wide-60 blog-section division ">
                    <div className="container-sm ">
                        <div className="row d-flex flex-wrap align-items-center justify-content-center "
                             style={{height: "30vh"}}>
                            <div className="col-lg-8 ">
                                <div className="  text-center">
                                    <h2 className=" text-uppercase text-primary fw-bolder">Events &amp; Catering</h2>
                                    <p className="fs-4">Aliquam a augue suscipit, luctus neque purus ipsum neque
                                        undo
                                        dolor
                                        primis libero tempus, blandit a cursus varius magna
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="  mt-4 ">
                            <Row className="align-items-center justify-content-center">
                                <Col md='6' lg='3' className=" cursor-pointer ">
                                    <Card>
                                        <img className='img-fluid'
                                             src={require("../../../assets/images/pages/wine/about/daniel-vogel-unsplash-304.jpg").default}
                                             alt='Card cap'/>
                                        <CardBody>
                                            <CardText>
                                                Some quick example text to build on the card title and make up the
                                                bulk

                                            </CardText>
                                            <CardText>
                                                Cookie topping caramels jujubes gingerbread. Lollipop apple pie
                                                cupcake

                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md='6' lg='3' className=" cursor-pointer ">
                                    <Card>
                                        <img className='img-fluid'
                                             src={require("../../../assets/images/pages/wine/about/marc-antoine-unsplash-304.jpg").default}
                                             alt='Card cap'/>
                                        <CardBody>
                                            <CardText>
                                                Some quick example text to build on the card title and make up the
                                                bulk

                                            </CardText>
                                            <CardText>
                                                Cookie topping caramels jujubes gingerbread. Lollipop apple pie
                                                cupcake


                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md='6' lg='3' className=" cursor-pointer ">
                                    <Card>
                                        <img className='img-fluid'
                                             src={require("../../../assets/images/pages/wine/about/winery-Lineup-304.jpg").default}
                                             alt='Card cap'/>
                                        <CardBody>
                                            <CardText>
                                                Some quick example text to build on the card title and make up the
                                                bulk

                                            </CardText>
                                            <CardText>
                                                Cookie topping caramels jujubes gingerbread. Lollipop apple pie
                                                cupcake
                                                candy canes cookie ice cream.

                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    )
}
export default Homepage
