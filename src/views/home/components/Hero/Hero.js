import React, {Component} from 'react'
import "./Hero.css"
import headervideo from '../../../../assets/videos/eatomg.mp4'
import {Link} from "react-router-dom"

class Hero extends Component {
    render() {
        return (
            <div className="hero-container">
                <video autoPlay="autoplay" muted="muted"
                         loop="loop"
                         src={headervideo}
                         className="background-video" />
                <div className="banner">
                    <div className="banner-content">
                        <p className="banner-text">Enjoy your favorite bottles of wine at Vendor Prices!</p>
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

