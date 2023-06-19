import React from 'react'
import './Hero.css'
import {useHistory} from "react-router-dom"

const Hero = () => {
    const history = useHistory()
    const onCateringClick = () => {
        history.push('/gmap', {returnURL: 'catering', isCatering: true})
    }
    return (
        <div className="hero-container">
            <div id="carouselExample" className="carousel slide banner">
                <div>
                    <div className="carousel-item active">
                        <div
                            style={{
                                backgroundColor: 'black',
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                margin: 'auto',
                                opacity: '30%'
                            }}
                        ></div>
                        <div className="banner-content" style={{position: 'absolute', zIndex: 1}}>
                            <h1 className="banner-text" style={{color: 'white', fontWeight: '700'}}>
                                OMG OFFERS BOTTLES OF WINE WITH ZERO MARK UP
                            </h1>
                            <h3 style={{color: 'white'}}>
                                Sign Up for the omg wine club and start saving on your Favorite bottles Today
                            </h3>
                            <div
                                className="btn btn-danger"
                                style={{zIndex: 1}}
                                onClick={() => history.push('/wine/membership')}
                            >
                                JOIN OMG WINE CLUB
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div
                            style={{
                                backgroundColor: 'black',
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                margin: 'auto',
                                opacity: '30%'
                            }}
                        ></div>
                        <div className="banner-content" style={{position: 'absolute', zIndex: 1}}>
                            <h1 className="banner-text" style={{color: 'white', fontWeight: '700'}}>
                                TREAT YOUR CO WORKERS, FAMILY AND FRIENDS TO OMG CATERING!
                            </h1>
                            <h3 style={{color: 'white'}}>
                                Serving groups of 4-400, every bite and sip will leave your guests saying OMG.
                            </h3>
                            <div className="btn btn-danger" style={{zIndex: 1}} onClick={onCateringClick}>
                                Order Catering Now
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div
                            style={{
                                backgroundColor: 'black',
                                width: '100%',
                                height: '100%',
                                margin: 'auto',
                                opacity: '30%'
                            }}
                        ></div>
                        <div className="banner-content">
                            <h1 style={{color: 'white', fontSize: 70, fontWeight: '700'}} className="banner-text">
                                OMG
                            </h1>
                            <h2 style={{color: 'white', fontSize: 70}}>Eat, Love, Live</h2>
                            <div className="btn btn-danger" style={{zIndex: 1}} onClick={() => history.push('#orderSection')}>
                                Order Now
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                >
          <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
              style={{fontSize: 50, height: '50px', width: '50px'}}
          ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"
                          style={{height: '50px', width: '50px'}}></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <video
                autoPlay="autoplay"
                muted="muted"
                loop="loop"
                src={'https://remote.vu360solutions.org/static/eatomgs.mp4'}
                className="background-video"
            />
        </div>
    )
}

export default Hero

