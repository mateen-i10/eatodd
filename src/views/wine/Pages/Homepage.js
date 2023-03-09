import React from 'react'
import {Card, CardBody, CardText, Col, Row} from 'reactstrap'
import VideoHero from '../../wine/components/Carousel/Carousel'
import Headerwine from "../../../shared/wine-header/Header-wine"
import bgimg from "../../../assets/images/wineClub/JToday.png"
import WineFooter from "../../../shared/wine-footer/Wine-footer"
import cardImage from "../../../assets/images/pages/wine/about/Layer-456.png"
import './Homepage.css'

const Homepage = () => {

    return (
        <>
            <Headerwine/>
            <VideoHero/>
            <div className="about-page">

                <section>
                    <div className="container" style={{backgroundColor: 'rgb(244, 246, 249)'}}>
                        <Row>
                            <Col lg={6} sm={12}>
                                <div style={{marginTop: '75px'}}>
                                    <img className="img-fluid" style={{marginLeft: "60px"}} src={require('../../../assets/images/my-images/wine1.jpg').default} alt="about-image"/>
                                </div>
                            </Col>
                            <Col lg={6} sm={12}>
                                <div style={{marginTop: '185px'}}>
                                    <Row>
                                        <Col lg={12} className='text-center imgBefore'>
                                            <img className='imgCenter imgStyle' width="140" src={cardImage} height="140" alt="standard-plan-img"/>
                                        </Col>
                                    </Row>
                                    <p className="p-md fw-bold mt-1" style={{color: "grey", fontSize: '18px', lineHeight: "25px", fontFamily: 'Rubik'}}>The
                                        The OMG Wine Club was created to make you say OMG at your savings! We are the 1st wine club that
                                        was created to SAVE YOU MONEY! We appreciate you and your loyalty to OMG. As our way to say THANK
                                        YOU, we are extending you the opportunity to purchase your favorite wines AT COST! Since wine pairs
                                        PERFECTLY with our food, we figured why not let YOU PAY WHAT WE PAY?! We are not complicated;
                                        we just want you to EAT. LIVE. LOVE – now with your favorite glass of wine. Cheers Friends!
                                    </p>
                                </div>
                            </Col>
                        </Row>

                    </div>
                </section>

                <section>
                    <div className="container" style={{backgroundColor: 'rgb(244, 246, 249)'}}>
                        <Row>
                            <Col className='' lg={6} sm={12} style={{textAlign: '-webkit-center'}}>
                                <div style={{marginTop: '75px'}}>
                                    <h2 className='text-primary' style={{fontFamily: 'Lucida Handwriting', fontWeight: '600'}}>Sommelier’s Selection</h2>
                                    <h3 className='text-primary' style={{fontWeight: '800', fontSize: '23px'}}>WINE OF THE WEEK</h3>
                                    <img className="img-fluid border" src={require('../../../assets/images/wineClub/Veuve Clicquot.png').default} alt="about-image" style={{paddingTop: '25px', width: '30%'}}/>
                                    <h3 className='mt-1 text-primary' style={{fontFamily: 'Rubik'}}>Caymus</h3>
                                    <h4 className='text-primary mb-4' style={{fontFamily: 'Lucida Handwriting'}}>$66.00</h4>
                                </div>
                            </Col>
                            <Col lg={6} sm={12} style={{textAlign: '-webkit-center'}}>
                                <div style={{marginTop: '75px'}}>
                                    <img className="img-fluid" src={require('../../../assets/images/wineClub/450x390-450x390.jpg').default} alt="about-image"/>
                                </div>
                            </Col>
                        </Row>

                    </div>
                </section>

                {/*<div style={{backgroundImage: `url(${luxurayWine})`, backgroundSize: '1200px', marginTop: '50px'}}>*/}
                {/*    <section>*/}
                {/*        <div className="continer-sm" style={{backgroundColor: 'rgba(0, 13, 26, .5)'}}>*/}
                {/*            <h5 style={{color:'white', textAlign: 'center', paddingTop: '50px', fontSize: '2.8em', textTransform: 'uppercase'}}>Luxury Wine</h5>*/}
                {/*            <h4 style={{color:'white', textAlign: 'center', fontSize: '2.2em', paddingTop:'30px', paddingBottom: '30px', textTransform: 'uppercase'}}>Get An Extra 10% off your first order</h4>*/}
                {/*            <p style={{color:'white', textAlign: 'center', fontSize: '1em', paddingBottom:'70px', marginTop: '-30px'}}>With a large selection of popular spirits and hard to<br />find rare liquors, we are your one stop shop<br />for all your alcohol needs.</p>*/}
                {/*        </div>*/}
                {/*    </section>*/}
                {/*</div>*/}

                <section id="blog-1" className="wide-60 blog-section division">
                    <div className="container" style={{paddingLeft: '0px', paddingRight: '0px'}}>
                        {/*<div className="row d-flex flex-wrap align-items-center justify-content-center "*/}
                        {/*     style={{height: "30vh"}}>*/}
                        {/*    <div className="col-lg-12" style={{marginTop: '-40px', marginBottom: '40px'}}>*/}
                        {/*        <div className="text-center">*/}
                        {/*            <h2 className=" text-uppercase text-primary fw-bolder">Events &amp; Catering</h2>*/}
                        {/*            <p style={{fontSize: '1em'}}>Aliquam a augue suscipit, luctus neque purus ipsum neque*/}
                        {/*                undo dolor primis libero tempus, blandit a cursus varius magna*/}
                        {/*            </p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div>
                            <Row className="align-items-center justify-content-center" style={{
                                margin: '0px',
                                backgroundImage: `url(${bgimg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                paddingTop: '200px',
                                paddingBottom: '200px',
                                marginBottom: '100px'
                            }}>
                            </Row>
                        </div>
                    </div>
                </section>
            </div>
            <WineFooter/>
        </>
    )
}
export default Homepage
