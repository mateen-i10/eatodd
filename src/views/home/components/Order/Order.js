import React, {useEffect, useRef, useState} from 'react'
import "./Order.css"
import foodicon from "../../../../assets/images/icons/food.png"
import qualityicon from "../../../../assets/images/icons/quality.png"
import deliveryicon from "../../../../assets/images/icons/delivery.png"
import icon from "../../../../assets/images/my-images/OMG_icon.png"
import {useSelector} from "react-redux"
import httpService, {baseURL} from "../../../../utility/http"
import {toast} from "react-toastify"
import {Link, useHistory} from "react-router-dom"
import ComponentSpinner from "../../../../@core/components/spinner/Loading-spinner"
import ProductImage from "../product/ProductImage"
import {isUserLoggedIn} from "../../../../auth/utils"

const Order = () => {
    //get redux state
    const {userLocation} = useSelector(state => state)
    const {scrollSlice} = useSelector(state => state)
    const [mainCategory, setMainCategory] = useState([])
    const history = useHistory()
    const orderRef = useRef(null)


    useEffect(() => {
        httpService._get(`${baseURL}Category?pageIndex=1&&pageSize=12`)
            .then(response => {
                console.log(response)
                // success case
                if (response.status === 200 && response.data.statusCode === 200) {
                    const data = response.data.data
                    // console.log("data", data)
                    const final = data.map(item => ({
                        attachment: item.attachment,
                        id: item.id,
                        name: item.name,
                        description: item.description
                    }))
                    setMainCategory(final)
                } else {
                    //general Error Action
                    toast.error(response.data.message)
                    return null
                }
            })
            .catch(error => {
                toast.error(error.message)
            })

    }, [])


    const scrollToOrder = scrollSlice[0]?.action.payload.toLowerCase() || ""
    // console.log("*****************", scrollToOrder)
    if (scrollToOrder === 'order') {
        useEffect(() => {
            orderRef.current?.scrollIntoView({behavior: 'smooth'})
        }, [])
    }


    // console.log("mein category", mainCategory)
    return (
        <div className="order-main">
            <div className="container-fluid unlock-section">
                <div className="container-sm">
                    <div className="row align-items-center justify-content-center pt-1 pb-1">
                        <div className="col-md-8" style={{display: 'flex', paddingTop: '3px'}}>
                            <img className="unlock-img d-lg-inline-flex d-none me-2" src={icon}
                                 alt="JOIN THE OMG WINE CLUB. UNLOCK"/>
                            <div className="loyalty-text">JOIN THE OMG WINE CLUB. UNLOCK VENDOR PRICING.</div>
                        </div>
                        {isUserLoggedIn() ? null : <div className="col-md-4 col-12" style={{paddingTop: '3px'}}>
                            <div className="content d-inline-flex mb-1 text-center">
                                <div className="create-an-account">
                                    <Link to='/signup'>
                                        <div>Create an Account</div>
                                    </Link>
                                </div>
                                <div className="fw-bolder text-black m-1 text-uppercase ">OR</div>
                                <Link to='/login'>
                                    <div className="fw-bolder text-primary text-uppercase fs-4 ">Sign In</div>
                                </Link>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
            <div className="menu-list container-sm pb-5 pt-5  mx-auto" id="orderSection" ref={orderRef}>
                <div className="row ms-0 me-1 ">
                    {
                        mainCategory.length ? mainCategory.map(item => {
                            // eslint-disable-next-line multiline-ternary
                            return item.name.toString().toLowerCase() !== "wine" ?
                                <div className="col-md-3  col-12 top-level-menu" key={item.id}>
                                    <div className="menu-item-1" onClick={() => {
                                        history.push(userLocation.length ? "/OmgPlate" : "/gmap", {categoryId: item.id})
                                    }}>
                                        <div className="thumbnail ">
                                            <ProductImage attachment={item.attachment}
                                                          styles={{width: "200px", height: "180px", margin: "auto"}}/>
                                        </div>
                                        <div className="text2">
                                            <div className="display-name">{item.name}</div>
                                            <div className="order-cta">Order
                                                <div className="arrow-right"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div> : ""
                        }) : <ComponentSpinner/>
                        // <div className="fs-1 fw-bolder text-center mt-5"> No item found in Database</div>
                    }
                    {mainCategory.length ? <div
                        className=" top-wine-menu col-md-3 col-12 d-flex flex-column align-items-center justify-content-center zindex-2 cursor-pointer ">
                        <div className="wine-item "
                             onClick={() => {
                                 history.push("/wine/homepage")
                             }}
                        >
                            <div className="wine-thumbnail align-items-center justify-content-center">
                                <img
                                    src={require("../../../../assets/images/wineClub/Ferrari Carrano.png").default}
                                    alt="wine"
                                    width={150}
                                    height={180}
                                />
                            </div>
                            <div className="text-center">
                                <div className="wine-name fs-3 fw-bolder text-primary">Wine</div>
                                <div className="wine-order fs-4 text-black fw-bolder">Order
                                    <div className="arrow-right" style={{height: 20, width: 20}}></div>
                                </div>
                            </div>
                        </div>
                    </div> : ""}
                </div>
            </div>
            <div className="promo-banner container-fluid  ">
                <div className="row align-items-center justify-content-center">
                    <div className="promo col-11 col-md-5 container-fluid">
                        <div className="row">
                            <div className="text-container col-md-6 col-6">
                                <h1 className="banner-title  mt-1">CATER YOUR NEXT PARTY</h1>
                                <div className="banner-subtitle">
                                    <p>OMG offers catering for groups from 6 to 600! Easy to order and customizable so
                                        your
                                        guests can enjoy taste and flavor that happens to be healthy!.</p>
                                </div>
                                <div className="slot-wrapper btn btn-primary mb-2">ORDER CATERING</div>
                            </div>
                            <img
                                src="https://www.chipotle.com/content/dam/chipotle/global-site-design/en/catering1/cinco-de-mayo/CMG_SpringCatering_Cinco_ST_Desktop.png"
                                className="img-container col-md-6 col-6"/>
                        </div>
                    </div>
                    <div className="promo col-11 col-md-5 container-fluid ">
                        <div className="row ">
                            <div className="text-container col-md-6 col-6">
                                <h1 className="banner-title mt-1">SAVE $10 OFF YOUR NEXT OMG ORDER!</h1>
                                <div className="banner-subtitle">
                                    <p>Join the OMG Wine Club, and save $10 off your next OMG food order! Wine Club
                                        benefits
                                        include vendor pricing on all offered wines!</p>
                                </div>
                                <div className="slot-wrapper btn btn-primary mb-2">ORDER CATERING
                                </div>
                            </div>
                            <video autoPlay="autoplay" muted="muted" loop="loop"
                                   src="https://www.chipotle.com/content/dam/chipotle/global-site-design/en/misc--pages/healthcareheroes/HealthcareHeroes_TOUT_540x586.mp4"
                                   className="img-container col-md-6 col-6"></video>
                        </div>
                    </div>
                </div>
            </div>
            <div className="featured-container-full">
                <div className="featured-container container ">
                    <div className=" row">
                        <div
                            className="header col-12 d-flex flex-column align-items-center justify-content-center mt-4">
                            <h2 className="card-title">1-Tap Orders</h2>
                            <div className="sub-header-text">Sometimes it's hard to choose. We made it
                                easy with these favorites.
                            </div>
                        </div>
                        <div className="universal-pce">
                            <div className="container-sm">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="meal-card">
                                            <img
                                                src="https://jthemes.net/themes/html/testo/files/images/offer-5.jpg"
                                                alt="Meal Image"
                                                className="meal-img"/>
                                            <div className="meal-info">
                                                <div className="meal-name">Meal Name 1</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="meal-card">
                                            <img
                                                src="https://jthemes.net/themes/html/testo/files/images/offer-11.jpg"
                                                alt="Meal Image"
                                                className="meal-img"/>
                                            <div className="meal-info">
                                                <div className="meal-name">Meal Name 2</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="meal-card col-md-4">
                                            <img
                                                src="https://jthemes.net/themes/html/testo/files/images/offer-7.jpg"
                                                alt="Meal Image"
                                                className="meal-img "/>
                                            <div className="meal-info">
                                                <div className="meal-name">Meal Name 3</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="large-order-promo container-sm h-100">
                <div className="row w-100 justify-content-center align-items-center">
                    <div className="pleaser-title col-12 text-center mt-3">CROWD PLEASERS</div>
                    <div className=" container-fluid ms-2">
                        <div className="row justify-content-center align-items-center mt-2 mb-3">
                            <div className="col-xxl-4 col-md-4 col-9 ">
                                <div className="card ">
                                    <img className='img-fluid'
                                         src={require("../../../../assets/images/images/home-crowd-pleaser1.jpg").default}
                                         alt='Crowd Pleaser'/>
                                    <div style={{
                                        position: 'absolute',
                                        marginTop: "20%",
                                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                        width: "100%"
                                    }}>
                                        <div className="text-center text-white fw-bolder" style={{fontSize: "1.7rem"}}
                                        >CATERING
                                        </div>
                                    </div>
                                    <div className="card-body" style={{
                                        maxHeight: 170,
                                        minHeight: 170,
                                        textOverflow: 'ellipsis',
                                        overflow: "hidden"
                                    }}>
                                        <div className="">
                                            <ul className=""
                                            >
                                                <li>From 6 to 600 people</li>
                                                <li>Starting at $15.00 / person</li>
                                                <li>Build Your Own</li>
                                                <li>Boxed Lunches</li>
                                                <li>A La Carte</li>
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
                            <div className="col-xxl-4 col-md-4 col-9 ">
                                <div className="card ">
                                    <img className='img-fluid'
                                         src={require("../../../../assets/images/images/home-crowd-pleaser1.jpg").default}
                                         alt='Crowd Pleaser'/>
                                    <div style={{
                                        position: 'absolute',
                                        marginTop: "20%",
                                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                        width: "100%"
                                    }}>
                                        <div className="text-center text-white fw-bolder" style={{fontSize: "1.7rem"}}
                                        >GROUP ORDER
                                        </div>
                                    </div>
                                    <div className="card-body" style={{
                                        maxHeight: 170,
                                        minHeight: 170,
                                        textOverflow: 'ellipsis',
                                        overflow: "hidden"
                                    }}>
                                        <div className="">
                                            <ul className="">
                                                <li>Invite up to 20 people</li>
                                                <li>Normal menu pricing</li>
                                                <li>Full menu</li>
                                                <li>Personalized meals</li>
                                                <li>Organizer pays</li>
                                                <li><b>Order and eat today</b></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="text-center text-uppercase">
                                            <div className="btn btn-primary mb-2 fw-bolder " onClick={() => {
                                                history.push("/order/group/create")
                                            }}>Start Order
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-md-4 col-9 ">
                                <div className="card ">
                                    <img className='img-fluid'
                                         src={require("../../../../assets/images/images/home-crowd-pleaser1.jpg").default}
                                         alt='Crowd Pleaser'/>
                                    <div style={{
                                        position: 'absolute',
                                        marginTop: "20%",
                                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                        width: "100%"
                                    }}>
                                        <div className="text-center text-white fw-bolder "
                                             style={{
                                                 fontSize: "1.5rem",
                                                 minHeight: "35px",
                                                 maxHeight: "68px",
                                                 overflow: "hidden"
                                                 // lineHeight: "20px"
                                             }}
                                        >OMG CHARCUTERIE BOARDS
                                        </div>
                                    </div>
                                    <div className="card-body" style={{
                                        maxHeight: 170,
                                        minHeight: 170,
                                        textOverflow: 'ellipsis',
                                        overflow: "hidden"
                                    }}>
                                        <div className="">
                                            <ul className=" ">
                                                <li>*Serves 10 people</li>
                                                <li>Cheese and Charcuterie Platter - $100</li>
                                                <li>Fruit Platter - $90</li>
                                                <li>Crudites Platter - $90</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="text-center text-uppercase">
                                            <div className="btn btn-primary mb-2 fw-bolder ">Start Order
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*about section*/}
            <section id="about-7" className="about-section division">
                <div className="container-sm">
                    <div className="abox-4-wrapper ico-80">
                        <div className="row">
                            <div className="col-md-4 col-lg-4">
                                <div className=" text-center  coffee-color">
                                    <div className="abox-4-ico">
                                        <img className="img-center" src={foodicon}/>
                                    </div>
                                    <h5 className="h5-lg text-uppercase">Original Recipes</h5>
                                    <p>Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus
                                        feugiat dolor impedit
                                        felis magna dolor vitae
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <div className=" text-center  coffee-color">
                                    <div className="abox-4-ico">
                                        <img className="img-center" src={qualityicon}/>
                                    </div>
                                    <h5 className="h5-lg text-uppercase">Qualty Foods</h5>
                                    <p>Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus
                                        feugiat dolor impedit
                                        felis magna dolor vitae
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <div className="text-center coffee-color">
                                    <div className="abox-4-ico">
                                        <img className="img-center" src={deliveryicon}/>
                                    </div>
                                    <h5 className="h5-lg text-uppercase">Fastest Delivery</h5>
                                    <p>Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus
                                        feugiat dolor impedit
                                        felis magna dolor vitae
                                    </p>
                                </div>
                            </div>
                            {/* eslint-disable-next-line no-tabs */}
                        </div>
                    </div>
                    {/* eslint-disable-next-line no-tabs */}
                </div>
            </section>
            {/*about section end*/}
        </div>
    )
}
export default Order
