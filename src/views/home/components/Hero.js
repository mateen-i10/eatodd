import React, {Component} from 'react'
import "./Hero.css"


class Hero extends Component {
    render() {
        return (

            <div className="hero-container">
                <video   id="cmg-hero-video" autoPlay="autoplay" muted="muted"
                         loop="loop"
                         src="https://www.chipotle.com/content/dam/chipotle/global-site-design/en/menu-items/pollo-asado/CHP_PolloAsado__omepageHero-DESKTOP.mp4"
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

