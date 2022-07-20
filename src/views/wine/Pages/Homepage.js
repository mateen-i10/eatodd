import React, {Fragment, useState} from 'react'

import {Button, Card, CardBody, CardImg, CardTitle, Col, Row} from 'reactstrap'
import VideoHero from '../../wine/components/Carousel/Carousel'
import Headerwine from "../../../shared/wine-header/Header-wine"

import Footer from "../../../shared/footer/Footer"
import {wineHomePgData} from "../../../tempData/wineClubData"

// import classnames from "classnames"

const Homepage = () => {

    const [selectedCategory, setSelectedCategory] = useState("Sparkling")
    const [elHovered, setElHovered] = useState({})

    const wineClubData = wineHomePgData
    const categories = [...new Set(wineClubData.map(o => o.category))]
    const sparkling = wineClubData.filter(item => item.category === "Sparkling")
    const white = wineClubData.filter(item => item.category === "White")
    const rose = wineClubData.filter(item => item.category === "Rose")
    const red = wineClubData.filter(item => item.category === "Red")
    const toggleList = item => {
        if (selectedCategory !== item) {
            setSelectedCategory(item)
        }
    }
    const showItems = () => {
        if (selectedCategory === "Sparkling") {
            return <Fragment>
                <Row className="align-items-center  ">
                    {sparkling.map(item => (
                        <Col xl='6' md='6' key={item.id}>
                            <Card className='mb-3  justify-content-center bg-transparent'>
                                <CardImg top
                                         src={item.image}
                                         alt='card-top'
                                         style={{marginLeft: "23%", marginTop: "15px", height: "100%", width: "55%"}}
                                />
                                <CardBody>
                                    <CardTitle tag='h4' className="text-start ">{item.title}</CardTitle>
                                    <div className="fw-bolder fs-4 text-primary text-end mb-1">{item.price}</div>
                                    <Col className='d-grid' sm='12'>
                                        <Button color='primary'
                                                className="text-uppercase fw-bolder">{item.addToCart}</Button>
                                    </Col>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Fragment>
        }
        if (selectedCategory === "White") {
            return <Fragment>
                <Row className="align-items-center justify-content-center ">
                    {white.map(item => (
                        <Col xl='6' md='6' key={item.id}>
                            <Card className='mb-3  justify-content-center bg-transparent'>
                                <CardImg top
                                         src={item.image}
                                         alt='card-top'
                                         style={{marginLeft: "23%", marginTop: "15px", height: "100%", width: "55%"}}
                                />
                                <CardBody>
                                    <CardTitle tag='h4' className="text-start ">{item.title}</CardTitle>
                                    <div className="fw-bolder fs-4 text-primary text-end mb-1">{item.price}</div>
                                    <Col className='d-grid' sm='12'>
                                        <Button color='primary'
                                                className="text-uppercase fw-bolder">{item.addToCart}</Button>
                                    </Col>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Fragment>
        }
        if (selectedCategory === "Rose") {
            return <Fragment>
                <Row className="align-items-center justify-content-center ">
                    {rose.map(item => (
                        <Col xl='6' md='6' key={item.id}>
                            <Card className='mb-3  justify-content-center bg-transparent'>
                                <CardImg top
                                         src={item.image}
                                         alt='card-top'
                                         style={{marginLeft: "23%", marginTop: "15px", height: "100%", width: "55%"}}
                                />
                                <CardBody>
                                    <CardTitle tag='h4' className="text-start ">{item.title}</CardTitle>
                                    <div className="fw-bolder fs-4 text-primary text-end mb-1">{item.price}</div>
                                    <Col className='d-grid' sm='12'>
                                        <Button color='primary'
                                                className="text-uppercase fw-bolder">{item.addToCart}</Button>
                                    </Col>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Fragment>
        }
        if (selectedCategory === "Red") {
            return <Fragment>
                <Row className="align-items-center justify-content-center ">
                    {red.map(item => (
                        <Col xl='6' md='6' key={item.id}>
                            <Card className='mb-3  justify-content-center bg-transparent'>
                                <CardImg top
                                         src={item.image}
                                         alt='card-top'
                                         style={{marginLeft: "23%", marginTop: "15px", height: "100%", width: "55%"}}
                                />
                                <CardBody>
                                    <CardTitle tag='h4' className="text-start ">{item.title}</CardTitle>
                                    <div className="fw-bolder fs-4 text-primary text-end mb-1">{item.price}</div>
                                    <Col className='d-grid' sm='12'>
                                        <Button color='primary'
                                                className="text-uppercase fw-bolder">{item.addToCart}</Button>
                                    </Col>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Fragment>
        }
    }

    return (
        <>
            <Headerwine/>
            <VideoHero/>
            <div className="about-page">
                <section id="about-3" className="wide-60 about-section division mt-5">
                    <div className="container-sm ">
                        <div className="row d-flex align-items-center justify-content-center ">
                            <div className="col-md-5 col-lg-5 ">
                                <div className="about-3-img text-center mb-40 ">
                                    <img className="img-fluid" style={{width: "100%", height: "100%"}}
                                         src={require('../../../assets/images/my-images/wine1.jpg').default}
                                         alt="about-image"/>
                                </div>
                            </div>
                            <div className="col-md-7 col-lg-6  text-center">
                                <div className="about-3-txt mb-40">
                                    <p className="p-md fs-5 fw-bold " style={{color: "grey", lineHeight: "25px"}}>The
                                        OMG Wine Club was created to make you say OMG at your savings! We are the 1st
                                        wine club that was created to SAVE YOU MONEY! We appreciate you and your loyalty
                                        to OMG.As our way to say THANK YOU, we are extending you the
                                        opportunity to purchase your favorite wines AT COST!Since wine pairs PERFECTLY
                                        with our food, we figured
                                        why not let YOU PAY WHAT WE PAY?! We are not complicated; we just want you to
                                        EAT. LIVE. LOVE – now with
                                        your favorite glass of wine. Cheers Friends!
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about-1" className="bg-fixed wide-100 about-section division mt-4">
                    <div className="container-fluid">
                        <div className="row d-flex flex-wrap align-items-center justify-content-center">
                            <div className="col-lg-8 ">
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
                                    {/*<div className="abox-1-wrapper ico-75">*/}
                                    {/*    <div className="row d-flex flex-wrap">*/}
                                    {/*        <div className="col-6 col-sm-4 col-md-2">*/}
                                    {/*            <div className="abox-1 mb-40">*/}
                                    {/*                <div className="abox-1-ico grey-color"><span*/}
                                    {/*                    className="fas fa-wine-bottle"></span></div>*/}
                                    {/*                <h6 className="h6-xl">Wine</h6>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="col-6 col-sm-4 col-md-2">*/}
                                    {/*            <div className="abox-1 mb-40">*/}
                                    {/*                <div className="abox-1-ico grey-color"><span*/}
                                    {/*                    className="fas fa-wine-glass"></span></div>*/}
                                    {/*                <h6 className="h6-xl">Premium</h6>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="col-6 col-sm-4 col-md-2">*/}
                                    {/*            <div className="abox-1 mb-40">*/}
                                    {/*                <div className="abox-1-ico grey-color"><span*/}
                                    {/*                    className="fas fa-wine-glass-alt"></span></div>*/}
                                    {/*                <h6 className="h6-xl">Party Pack</h6>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="col-6 col-sm-4 col-md-2">*/}
                                    {/*            <div className="abox-1 mb-40">*/}
                                    {/*                <div className="abox-1-ico grey-color"><span*/}
                                    {/*                    className="fas fa-wine-glass-alt"></span></div>*/}
                                    {/*                <h6 className="h6-xl">Candle Light</h6>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="col-6 col-sm-4 col-md-2">*/}
                                    {/*            <div className="abox-1 mb-40">*/}
                                    {/*                <div className="abox-1-ico grey-color"><span*/}
                                    {/*                    className="fas fa-wine-glass-alt"></span></div>*/}
                                    {/*                <h6 className="h6-xl">Desserts</h6>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="col-6 col-sm-4 col-md-2">*/}
                                    {/*            <div className="abox-1 mb-40">*/}
                                    {/*                <div className="abox-1-ico grey-color"><span*/}
                                    {/*                    className="fas fa-wine-bottle"></span></div>*/}
                                    {/*                <h6 className="h6-xl">Drinks</h6>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-sm">
                    <div className="row mt-3 justify-content-center">
                        <div className="col-md-4 col-sm-12 mt-4 mb-3 ">
                            <div style={{
                                fontSize: "1.5rem",
                                fontWeight: "700",
                                borderRight: "6px solid rgb(129 190 65)"

                            }}>
                                {categories.map((item, i) => (
                                    <div key={i}
                                         className={`fs-3 fw-bolder  ms-2 cursor-pointer  ${elHovered[i] ? "text-primary" : ""}  `}
                                         style={{lineHeight: "40px"}}
                                         onMouseOver={() => (setElHovered({...elHovered, [i]: true}))}
                                         onMouseLeave={() => (setElHovered({...elHovered, [i]: false}))}
                                         onClick={() => {
                                             toggleList(item)

                                         }}
                                    >
                                        <div className="text-center">{item}</div>
                                    </div>
                                ))}

                            </div>

                        </div>

                        <div className="col-md-7 col-sm-10">{showItems()}</div>
                    </div>
                </div>
                <section id="blog-1" className="wide-60 blog-section division mt-4 mb-4">
                    <div className="container-sm">
                        <div className="row d-flex flex-wrap align-items-center justify-content-center">
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
                        <div className="row d-flex flex-wrap align-items-center justify-content-center mt-4">
                            <div className="col-md-6 col-lg-3">
                                <div className="">
                                    <div className="">
                                        <div className="">
                                            <img className="img-fluid"
                                                 src={require("../../../assets/images/pages/wine/about/daniel-vogel-unsplash-304.jpg").default}
                                                 alt="blog-post-image"/>
                                        </div>
                                    </div>
                                    <div className=" mt-1">
                                        <h5 className="text-center"><a href="#">Quaerat neque purus ipsum neque
                                            dolor</a></h5>
                                        <p className="text-center mt-1">Quaerat neque purus ipsum neque dolor primis
                                            tempus impedit</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="">
                                    <div className="">
                                        <div className="">
                                            <img className="img-fluid"
                                                 src={require("../../../assets/images/pages/wine/about/marc-antoine-unsplash-304.jpg").default}
                                                 alt="blog-post-image"/>
                                        </div>
                                    </div>
                                    <div className="">
                                        <h5 className="text-center mt-1"><a href="#">Tempor blandit sapien at
                                            gravida donec ipsum</a></h5>
                                        <p className="text-center mt-1">Neque dolor primis libero tempus impedit tempor
                                            sapien
                                            gravida</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="">
                                    <div className="">
                                        <div className="">
                                            <img className="img-fluid"
                                                 src={require("../../../assets/images/pages/wine/about/winery-Lineup-304.jpg").default}
                                                 alt="blog-post-image"/>
                                        </div>
                                    </div>
                                    <div className="">
                                        <h5 className="text-center mt-1"><a href="#">Neque dolor primis a libero
                                            tempus a tempor</a></h5>
                                        <p className="text-center mt-1">Impedit tempor at donec sapien ipsum a neque
                                            dolor
                                            primis libero</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    )
}
export default Homepage
