import React from 'react'
import "../../../home/components/Hero/Hero.css"
import "./Carousel.css"
//import headerVideo from '../../../../../src/assets/videos/winclub.mp4'
import wineSlider from '../../../../assets/images/winepic1.png'
import {Link} from "react-router-dom"


const VideoHero = () => {
        return (
            <div className="hero-container">
                {/*<video autoPlay="autoplay" muted="muted"
                       loop="loop"
                       src={headerVideo}
                       className="background-video" />*/}
                <img src={wineSlider} width='100%'/>
                <div className="banner">
                    <div className="banner-content">
                        {/*<p className="banner-text2">Enjoy your favorite bottles of wine at VENDOR PRICES!</p>
                        <p className="text-center" style={{fontWeight:'bold'}}>Membership is only $9.99 per month!</p>*/}
                        <Link to="/wine/membership">
                            <div className="btn btn-danger" style={{marginTop: 100, marginRight: 185}}>JOIN NOW</div>
                        </Link>
                    </div>
                </div>
            </div>
        )
}


export default VideoHero