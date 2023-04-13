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
                    <div className="container-sm" style={{backgroundColor: 'rgb(244, 246, 249)'}}>
                        <div className='row'>
                            <div className='col-lg-6 col-sm-12' style={{textAlign: '-webkit-center'}}>
                                <div style={{marginTop: '75px'}}>
                                    <img className="img-fluid" src={require('../../../assets/images/my-images/wine1.jpg').default} alt="about-image"/>
                                </div>
                            </div>
                            <div className='col-lg-6 col-sm-12 text-center'>
                                <div style={{marginTop: '185px'}}>
                                    <div className='row'>
                                        <div lg={12} className='col-lg-6 col-sm-12 text-center imgBefore'>
                                            <img className='imgCenter imgStyle' width="140" src={cardImage} height="140" alt="standard-plan-img" style={{margin: 'auto'}}/>
                                        </div>
                                    </div>
                                    <p className="p-md fw-bold mt-1" style={{color: "grey", fontSize: '18px', lineHeight: "25px"}}>The
                                        The OMG Wine Club was created to make you say OMG at your savings! We are the 1st wine club that
                                        was created to SAVE YOU MONEY! We appreciate you and your loyalty to OMG. As our way to say THANK
                                        YOU, we are extending you the opportunity to purchase your favorite wines AT COST! Since wine pairs
                                        PERFECTLY with our food, we figured why not let YOU PAY WHAT WE PAY?! We are not complicated;
                                        we just want you to EAT. LIVE. LOVE – now with your favorite glass of wine. Cheers Friends!
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section>
                    <div className="container-sm" style={{backgroundColor: 'rgb(244, 246, 249)'}}>
                        <div className='row'>
                            <div className='col-lg-6 col-sm-12' style={{textAlign: '-webkit-center'}}>
                                <div style={{marginTop: '75px'}}>
                                    <h2 className='text-primary' style={{fontWeight: '600'}}>Sommelier’s Selection</h2>
                                    <h3 className='text-primary' style={{fontWeight: '800', fontSize: '23px'}}>WINE OF THE WEEK</h3>
                                    <img className="img-fluid border" src={require('../../../assets/images/wineClub/Veuve Clicquot.png').default} alt="about-image" style={{paddingTop: '25px', width: '30%'}}/>
                                    <h3 className='mt-1 text-primary'>Caymus</h3>
                                    <h4 className='text-primary mb-4'>$66.00</h4>
                                </div>
                            </div>
                            <div className='col-lg-6 col-sm-12' style={{textAlign: '-webkit-center'}}>
                                <div style={{marginTop: '75px'}}>
                                    <img className="img-fluid" src={require('../../../assets/images/wineClub/450x390-450x390.jpg').default} alt="about-image"/>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="blog-1" className="wide-60 blog-section division">
                    <div className="container-sm" style={{paddingLeft: '0px', paddingRight: '0px'}}>
                        <div>
                            <div className="row align-items-center justify-content-center" style={{
                                margin: '0px',
                                backgroundImage: `url(${bgimg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                paddingTop: '200px',
                                paddingBottom: '200px',
                                marginBottom: '100px'
                            }}>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <WineFooter/>
        </>
    )
}
export default Homepage
