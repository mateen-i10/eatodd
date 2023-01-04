import React from 'react'
import './HeroSection.css'
import {Link} from "react-router-dom"
const HeroSection = () => {
    return (
        <div id="faqs-page" className="page-hero-section division">
            <div className="container-fluid">
                <div className="row d-flex flex-wrap">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="hero-txt text-center white-color">
                            <div id="breadcrumb">
                                <div className="row d-flex flex-wrap">
                                    <div className="col">
                                        <div className="breadcrumb-nav">
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb d-flex flex-wrap">
                                                    <li className="breadcrumb-item d-flex"><Link to='/home'>Home</Link>
                                                    </li>
                                                    <li className="breadcrumb-item active d-flex"
                                                        aria-current="page">Wine
                                                    </li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h2 className="h2-xl">Wine</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}
export default HeroSection
