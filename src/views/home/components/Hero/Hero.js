import React, {Component} from 'react'
import "./Hero.css"
// import {Link} from "react-router-dom"

class Hero extends Component {
    render() {
        return (
            <div className="hero-container">
                <div id="carouselExample" className="carousel slide banner">
                    <div>
                        <div className="carousel-item active">
                            <div style={{backgroundColor: "black", width: "100%", height: "100%", position: "absolute", margin: "auto", opacity: "30%"}}></div>
                            <div className='banner-content' style={{position: "absolute", zIndex: 1}}>
                                <h1 className='banner-text' style={{color:"#000000"}}>OMG Offers Bottles of Wine With Zero Mark Up</h1>
                                <h4 style={{color:"white"}}>Sign Up for the omg wine club and start saving on your favourite bottles TODAY</h4>
                                <div className="btn btn-danger" style={{zIndex: 1}}>JOIN OMG WINE CLUB</div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div style={{backgroundColor: "black", width: "100%", height: "100%", position: "absolute", margin: "auto", opacity: "30%"}}></div>
                                <div className='banner-content' style={{position: "absolute", zIndex: 1}}>
                                <h1 className='banner-text' style={{color:"#000000"}}>Treat your Co Workers, Family and Friends To Omg Catering!</h1>
                                <h4 style={{color:"white"}}>Serving groups of 4-400, every bite and sip will leave your guests saying OMG.</h4>
                                <div className="btn btn-danger" style={{zIndex: 1}} onClick={() => console.log("works")}>Order Catering Now</div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div style={{backgroundColor: "black", width: "100%", height: "100%", margin: "auto", opacity: "30%"}}></div>
                            <div className='banner-content'>
                               <h1 style={{color:"#000000", fontSize: 70}} className='banner-text'>OMG</h1>
                               <h2 style={{color:"white", fontSize: 70}}>Eat, Love, Live</h2>
                               <div className="btn btn-danger" style={{zIndex: 1}}>Order Now</div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" style={{fontSize: 50, height: '50px', width: '50px'}}></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" style={{height: '50px', width: '50px'}}></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <video autoPlay="autoplay" muted="muted"
                         loop="loop"
                         src={'https://remote.vu360solutions.org/static/eatomg.mp4'}
                         className="background-video" />
                {/*<div className="banner">*/}
                {/*    <div className="banner-content">*/}
                {/*        <p className="banner-text">Enjoy your Favorite Bottles of Wine at Vendor Prices!</p>*/}
                {/*        <p className="text-center" style={{fontWeight:'bold'}}>Membership is only $9.99 per month!</p>*/}
                {/*        <Link to="/wine/membership">*/}
                {/*        <div className="btn btn-danger">JOIN NOW</div>*/}
                {/*        </Link>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        )
    }
}


export default Hero

