import React, {Component} from 'react'
import "./Hero.css"
import headervideo from '../../../../assets/videos/PolloAsado__omepageHero.mp4'


class Hero extends Component {
    render() {
        return (
            <div className="hero-container">
                <video   id="cmg-hero-video" autoPlay="autoplay" muted="muted"
                         loop="loop"
                         src={headervideo}
                         className="background-video" />
                <div className="banner">
                    <div className="banner-content">
                        <p className="banner-text">A fresh new flavor of chicken is hitting the grill, made with garlic, guajillo peppers, and fresh lime.</p>
                        <div className="btn btn-danger hero-button">ORDER NOW</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Hero

