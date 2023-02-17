import React, {Component} from 'react'
import "./Hero.css"
import {Link} from "react-router-dom"

class Hero extends Component {
    render() {
        return (
            <div className="hero-container">
                <video autoPlay="autoplay" muted="muted"
                         loop="loop"
                         src={'https://remote.vu360solutions.org/static/eatomg.mp4'}
                         className="background-video" />
                <div className="banner">
                    <div className="banner-content">
                        <p className="banner-text">Enjoy your Favorite Bottles of Wine at Vendor Prices!</p>
                        <p className="text-center" style={{fontWeight:'bold'}}>Membership is only $9.99 per month!</p>
                        <Link to="/wine/membership">
                        <div className="btn btn-danger">JOIN NOW</div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}


export default Hero

