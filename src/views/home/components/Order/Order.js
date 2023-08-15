import React, { useEffect, useRef, useState} from 'react'
import "./Order.css"
// import foodicon from "../../../../assets/images/icons/food.png"
// import qualityicon from "../../../../assets/images/icons/quality.png"
// import deliveryicon from "../../../../assets/images/icons/delivery.png"
import gallery_1 from "../../../../assets/images/gallery_1.png"
import gallery_4 from "../../../../assets/images/gallery_4.png"
import icon from "../../../../assets/images/my-images/OMG_icon.png"
import {useSelector} from "react-redux"
import httpService, {baseURL} from "../../../../utility/http"
import {toast} from "react-toastify"
import {Link, useHistory} from "react-router-dom"
import ComponentSpinner from "../../../../@core/components/spinner/Loading-spinner"
import ProductImage from "../product/ProductImage"
import {isUserLoggedIn} from "../../../../auth/utils"
import {Card, CardBody, Modal, ModalBody, ModalHeader, Row} from "reactstrap"
import Rating from "react-rating"
import {Star} from "react-feather"
import {Swiper, SwiperSlide} from "swiper/react/swiper-react.js"
import SwiperCore, {
    Autoplay,
    Navigation,
    Pagination
} from 'swiper'

import '@styles/react/libs/swiper/swiper.scss'

SwiperCore.use([Navigation, Pagination, Autoplay])

const Order = () => {
    //get redux state
    //const {userLocation} = useSelector(state => state)
    const {scrollSlice} = useSelector(state => state)
    const [mainCategory, setMainCategory] = useState([])
    const [omgPlate, setOmgPlate] = useState([])
    const [omgSandwich, setSandwich] = useState([])
    const [modalClicked, setModalClicked] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState(0)
    const [reviewList, setReviewList] = useState([])
    const history = useHistory()
    const orderRef = useRef(null)
    useEffect(() => {
        httpService._get(`${baseURL}Category?pageIndex=1&&pageSize=12`)
            .then(response => {
                // success case
                if (response.status === 200 && response.data.statusCode === 200) {
                    const data = response.data.data
                    const finalData = data.map(item => ({
                        attachment: item.attachment,
                        id: item.id,
                        name: item.name,
                        description: item.description,
                        priority: item.priority
                    }))
                    const finalCategory = finalData.filter((item) => item.name.toString().trim().toLowerCase() !== 'signature plates' && item.name.toString().trim().toLowerCase() !== 'signature sandwich')
                    const finalOmgPlate = finalData.filter((item) => item.name.toString().trim().toLowerCase() === 'signature plates' || item.name.toString().trim().toLowerCase() === 'omg plate')
                    const finalSandwich = finalData.filter((item) => item.name.toString().trim().toLowerCase() === 'signature sandwich' || item.name.toString().trim().toLowerCase() === 'omg sandwich')
                    setOmgPlate(finalOmgPlate)
                    setSandwich(finalSandwich)
                    setMainCategory(finalCategory)
                } else {
                    //general Error Action
                    toast.error(response.data.message)
                    return null
                }
            })
            .catch(error => {
                toast.error(error.message)
            })
        console.log('category', mainCategory)
        httpService._get(`${baseURL}Review?pageIndex=1&&pageSize=12`)
            .then(response => {

                if (response.status === 200 && response.data.statusCode === 200) {
                    const data = response.data.data
                    // console.log("Reviews ********", data)
                    const finalData = data.map(item => ({
                        address: item.address,
                        id: item.id,
                        name: item.personName,
                        review: item.description,
                        rating: item.rating
                    }))
                    setReviewList(finalData)
                }
            })
    }, [])
    const scrollToOrder = scrollSlice[0]?.action.payload.toLowerCase() || ""
    if (scrollToOrder === 'order') {
        useEffect(() => {
            orderRef.current?.scrollIntoView({behavior: 'smooth'})
        }, [])
    }

    //testing data for customer review
    const params = {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        loop: true,
        pagination: {
            clickable: true
        },
        navigation: true,
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    }
    return (
        <div className="order-main">
            {isUserLoggedIn() ? null : <div className="container-fluid unlock-section">
                <div className="container-sm">
                    <div className="row align-items-center justify-content-center pt-1 pb-1">
                        <div className="col-md-8" style={{display: 'flex', paddingTop: '3px'}}>
                            <img className="unlock-img d-lg-inline-flex d-none me-2" src={icon}
                                 alt="JOIN THE OMG WINE CLUB. UNLOCK"/>
                            <div className="loyalty-text">JOIN THE OMG WINE CLUB. UNLOCK VENDOR PRICING.</div>
                        </div>
                        <div className="col-md-4 col-12" style={{paddingTop: '3px'}}>
                            <div className="content d-inline-flex mb-1 text-center">
                                <div className="create-an-account">
                                    <Link to='/wine/membership'>
                                        <div>Go To Membership</div>
                                    </Link>
                                </div>
                                <div className="fw-bolder text-black m-1 text-uppercase ">OR</div>
                                <Link to='/login'>
                                    <div className="fw-bolder text-primary text-uppercase fs-4 ">Sign In</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            <section id="orderSection">
                <div className="menu-list container-sm pb-5 pt-5  mx-auto"  ref={orderRef}>
                    <div className="row ms-0 me-1 ">
                        {mainCategory.length ? mainCategory
                            .sort((b, a) => b.priority - a.priority) // Sort categories by priority
                            .map(item => {
                                return (
                                    <div className="col-md-3 col-12 top-level-menu" key={item.id}>
                                        <div
                                            className="menu-item-1"
                                            onClick={() => {
                                                const storedRestaurantId = localStorage.getItem('restaurantId')
                                                const redirectTo = storedRestaurantId ? "/OmgPlate" : "/gmap"

                                                if (item.name.toString().trim().toLowerCase() === "omg plate") {
                                                    setModalClicked(!modalClicked)
                                                    setSelectedCategory(1)
                                                } else if (item.name.toString().trim().toLowerCase() === "omg sandwich") {
                                                    setModalClicked(!modalClicked)
                                                    setSelectedCategory(2)
                                                } else {
                                                    history.push(redirectTo, { categoryId: item.id })
                                                }
                                            }}
                                        >
                                            <div className="thumbnail">
                                                <ProductImage
                                                    attachment={item.attachment}
                                                    styles={{ width: "180px", height: "180px", margin: "auto" }}
                                                    classes="categoryImage"
                                                />
                                            </div>
                                            <div className="text2">
                                                <div className="display-name">{item.name}</div>
                                                <div className="order-cta">
                                                    Order
                                                    <div className="arrow-right"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : <ComponentSpinner/>
                        }
                    </div>
                </div>
            </section>
            <div className="promo-banner container-fluid  ">
                <div className="row align-items-center justify-content-center">
                    <div className="promo col-11 col-md-5 container-fluid">
                        <div className="row">
                            <div className="text-container col-md-6 col-sm-12">
                                <h1 className="banner-title mt-4">CATER YOUR NEXT PARTY</h1>
                                <div className="banner-subtitle">
                                    <p>OMG offers catering for groups from 20-2000! Easy to order and customizable so your guests can enjoy taste & flavor that happens to be healthy. </p>
                                </div>
                                <Link to="/catering">
                                <div className="slot-wrapper btn btn-primary mb-2">ORDER CATERING</div>
                                </Link>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <img src={gallery_1} style={{height: '370px', width: '100%'}} className="img-container col-md-6 col-6" alt="catering order"/>
                            </div>
                        </div>
                    </div>
                    <div className="promo col-11 col-md-5 container-fluid ">
                        <div className="row">
                            <div className="text-container col-md-6 col-sm-12">
                                <h1 className="banner-title mt-4">SAVE $10 OFF YOUR NEXT OMG ORDER!</h1>
                                <div className="banner-subtitle">
                                    <p>Join the OMG Wine Club, and save $10 off your next OMG food order! Wine Club
                                        benefits include vendor pricing on all offered wines!</p>
                                </div>
                                <Link to="/wine/membership">
                                <div className="slot-wrapper btn btn-primary mb-2">JOIN NOW</div>
                                </Link>
                            </div>
                            <div className="col-md-6 col-6">
                                <img src={gallery_4} style={{height: '370px', width: '100%'}} className="img-container col-md-6 col-6" alt="catering order"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="container-sm">
                    <div className="row mb-2">
                        <div className="col-12 d-flex flex-column align-items-center justify-content-center mt-4">
                            <div className="text-uppercase text-primary fs-4 fw-bold">Testimonial </div>
                            <div className="text-uppercase text-black fs-1 fw-bolder">We Care About Our Customer Experience Too.
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2 ">
                        <div className="col-12 mt-1 mb-2">
                            <Swiper {...params}>
                                {reviewList.map((review) => (
                                    <SwiperSlide key={review.id}>
                                        <Card className='text-center mt-2' >
                                            <CardBody >
                                                {/*<div className='profile-image-wrapper'>*/}
                                                {/*    <div className='profile-image'>*/}
                                                {/*        <Avatar img={review.img} alt="avatar"/>*/}
                                                {/*    </div>*/}
                                                {/*</div>*/}
                                                <h3 className="mt-0 fw-bolder mb-1">{review.name}</h3>
                                                <h6 className='text-muted mb-1'>{review.address}</h6>
                                                <div className="mb-1">{review.review}
                                                </div>
                                                <div className="mb-1"><Rating
                                                    readonly
                                                    initialRating={review.rating}
                                                    emptySymbol={<Star size={24} fill='#babfc7' stroke='#babfc7' />}
                                                    fullSymbol={<Star size={24} fill='#ff9f43' stroke='#ff9f43' />}
                                                />
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <div className="large-order-promo container-sm h-100">
                <div className="row w-100 justify-content-center align-items-center">
                    <div className="pleaser-title col-12 text-center mt-3">CROWD PLEASERS</div>
                    <div className=" container-fluid ms-2">
                        <div className="row justify-content-center align-items-center mt-2 mb-3">
                            <div className="col-xxl-6 col-md-6 col-sm-12">
                                <div className="card ">
                                    <div style={{position: "relative"}}>
                                        <img className='img-fluid'
                                             src={require("../../../../assets/images/images/home-crowd-pleaser1.jpg").default}
                                             alt='Crowd Pleaser' width="100%"/>
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            height: "100%",
                                            width: "100%"
                                        }}>
                                        </div>
                                    </div>
                                    <div className="card-body" style={{
                                        maxHeight: 170,
                                        minHeight: 170,
                                        textOverflow: 'ellipsis',
                                        overflow: "hidden"
                                    }}>
                                        <div>
                                            <b><h2 style={{fontWeight:'600'}}>CATERING</h2></b>
                                            <ul>
                                                <li>From 20 to 2000 people</li>
                                                <li>Starting at $15 per person</li>
                                                <li>Build Your Own/Boxed Lunches/A La Carte</li>
                                                <li>Custom OMG Grazing Events</li>
                                                <li><b>Requires 24 hour notice</b></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="text-center text-uppercase">
                                            <div className="btn btn-primary mb-2 fw-bolder " onClick={() => {
                                                history.push("/catering")
                                            }}>Explore Catering
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-md-6 col-sm-12">
                                <div className="card ">
                                    <div style={{position: "relative"}}>
                                        <img className='img-fluid'
                                             src={require("../../../../assets/images/images/home-crowd-pleaser2.png").default}
                                             alt='Crowd Pleaser' width="100%"/>
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            height: "100%",
                                            width: "100%"
                                        }}>
                                        </div>
                                    </div>
                                    <div className="card-body" style={{
                                        maxHeight: 170,
                                        minHeight: 170,
                                        textOverflow: 'ellipsis',
                                        overflow: "hidden"
                                    }}>
                                        <div className="">
                                            <b><h2 style={{fontWeight:'600'}}>GROUP ORDER</h2></b>
                                            <ul className="">
                                                <li>Invite up to 20 people</li>
                                                <li>Normal menu pricing</li>
                                                <li>Full menu</li>
                                                <li>Personalized meals</li>
                                                <li>Organizer pays</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="text-center text-uppercase">
                                            <div className="btn btn-primary mb-2 fw-bolder " onClick={() => {
                                                history.push("/groupOrder")
                                            }}>Start Order
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={modalClicked} toggle={() => setModalClicked(!modalClicked)} className='modal-dialog-centered modal-lg'>
                <ModalHeader toggle={() => setModalClicked(!modalClicked)}>PLEASE SELECT</ModalHeader>
                <ModalBody>
                    <div className="container-sm">
                        <div className="row">
                    {selectedCategory === 1 && omgPlate.map((item) => (

                        <div key={item.id} className="col-6 text-center cursor-pointer" onClick={() => {
                            const categoryId = item.id
                            const storedRestaurantId = localStorage.getItem('restaurantId')
                            const destination = storedRestaurantId ? "/OmgPlate" : "/gmap"
                            history.push(destination, { categoryId })
                        }}>
                                <div className=" ">
                                    <ProductImage attachment={item.attachment}
                                                  styles={{width: "200px", height: "200px", margin: "auto"}}/>
                                </div>
                                <div className="">
                                    <div className="text-uppercase fs-3 fw-bolder">{item.name.toString().trim().toLowerCase() === "omg plate" ? "build your own plate" : item.name}</div>
                                </div>
                    </div>))}
                        </div>
                    </div>
                    <div className="container-sm">
                        <div className="row">
                            {selectedCategory === 2 && omgSandwich.map((item) => (
                                <div key={item.id} className="col-6 text-center cursor-pointer" onClick={() => {
                                    const categoryId = item.id
                                    const storedRestaurantId = localStorage.getItem('restaurantId')
                                    const destination = storedRestaurantId ? "/OmgPlate" : "/gmap"
                                    history.push(destination, { categoryId })
                                }}>
                                    <div className=" ">
                                        <ProductImage attachment={item.attachment}
                                                      styles={{width: "200px", height: "200px", margin: "auto"}}/>
                                    </div>
                                    <div className="">
                                        <div className="text-uppercase fs-3 fw-bolder">{item.name.toString().trim().toLowerCase() === "omg sandwich" ? "build your own sandwich" : item.name}</div>
                                    </div>
                                </div>))}
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}
export default Order
