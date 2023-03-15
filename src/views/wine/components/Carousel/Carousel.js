import React, {useState} from 'react'
import "../../../home/components/Hero/Hero.css"
import "./Carousel.css"
import {Link} from "react-router-dom"
import {Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem} from "reactstrap"
import sliderImage1 from '../../../../assets/images/wineClub/YouPlanTheParty-1770x950-1.png'
import sliderImage2 from '../../../../assets/images/wineClub/DrinkTheBest_PayTheLeast-1770x950-1.png'
import sliderImage3 from '../../../../assets/images/wineClub/winepic.png'
import sliderImage4 from '../../../../assets/images/wineClub/MembersGetWholesalePricing-1770x950-1.png'

const VideoHero = () => {

    const [animating, setAnimating] = useState(0)
    const [activeIndex, setActiveIndex] = useState(0)
    console.log(setAnimating)

    const images = [
        {
            src: sliderImage2,
            id: 1,
            header: <span></span>
        },
        {
            src: sliderImage3,
            id: 2,
            header: <span></span>
        },
        {
            src: sliderImage1,
            id: 3,
            header: <span></span>
        },
        {
            src: sliderImage4,
            id: 4,
            header: <span></span>
        }
    ]

    const next = () => {
        if (animating) return
        const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1
        setActiveIndex(nextIndex)
    }

    const previous = () => {
        if (animating) return
        const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1
        setActiveIndex(nextIndex)
    }

    const onExiting = () => {
        setAnimating(true)
    }

    const onExited = () => {
        setAnimating(false)
    }

    const goToIndex = newIndex => {
        if (animating) return
        setActiveIndex(newIndex)
    }
    const slides = images.map(item => {
        return (
            <CarouselItem style={{display: 'block'}} className='text-center' onExiting={onExiting} onExited={onExited} key={item.id}>
                <img src={item.src} className='img-fluid' alt={item.id} />
                <CarouselCaption style={{display: 'block'}} captionHeader={<span className="text-center"><Link className='btn-lg btn-primary' to='/wine/membership'>JOIN NOW</Link></span>}/>
            </CarouselItem>
        )
    })

        return (
            <>
                <div className='container-sm' style={{paddingLeft: '0px', paddingRight: '0px'}}>
                    <Carousel activeIndex={activeIndex} next={next} previous={previous} keyboard={false}>
                        <CarouselIndicators items={images} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                        <CarouselControl direction='prev' directionText='Previous' onClickHandler={previous} />
                        <CarouselControl direction='next' directionText='Next' onClickHandler={next} />
                    </Carousel>
                </div>

                {/*<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
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
                </div>*/}
            </>
        )
}

export default VideoHero