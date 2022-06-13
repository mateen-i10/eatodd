import React from 'react'
import "../../../home/components/Hero/Hero.css"
import headervideo from '../../../../../src/assets/videos/winclub.mp4'


const VideoHero = () => {
        return (
            <div className="hero-container">
                <video autoPlay="autoplay" muted="muted"
                       loop="loop"
                       src={headervideo}
                       className="background-video" />
                <div className="banner">
                    <div className="banner-content">
                        <p className="banner-text">Enjoy your favorite bottles of wine at VENDOR PRICES!</p>
                        <p className="text-center" style={{fontWeight:'bold'}}>Membership is only $9.99 per month!</p>
                        <div className="btn btn-danger hero-button">JOIN NOW</div>
                    </div>
                </div>
            </div>
        )
}


export default VideoHero