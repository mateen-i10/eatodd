import React from 'react'
import "../../../home/components/Hero/Hero.css"
import "./Carousel.css"
import wineSlider from '../../../../assets/images/wineClub/YouPlanTheParty-1770x950-1.png'
import wine2 from '../../../../assets/images/wineClub/head2.png'
import wine3 from '../../../../assets/images/wineClubStylingImages/luxurayWine.jpg'
import {Link} from "react-router-dom"

const VideoHero = () => {
        return (
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={wineSlider} className="d-block w-100" alt="..." />
                        <div className="banner">
                            <div className="banner-content">
                                <Link to="/wine/membership">
                                    <div className="btn btn-danger btn-lg" style={{marginTop: 100, width: '200px'}}>JOIN NOW</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={wine2} className="d-block w-100" alt="..." height={600}/>
                        <div className="banner">
                            <div className="banner-content">
                                <Link to="/wine/membership">
                                    <div className="btn btn-danger btn-lg" style={{marginTop: 100, width: '200px'}}>JOIN NOW</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={wine3} className="d-block w-100" alt="..." height={600}/>
                        <div className="banner">
                            <div className="banner-content">
                                <Link to="/wine/membership">
                                    <div className="btn btn-danger btn-lg" style={{marginTop: 100, width: '200px'}}>JOIN NOW</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default VideoHero