import React, {useEffect, useState} from 'react'
import "./Order.css"
import foodicon from "../../../../assets/images/icons/food.png"
import qualityicon from "../../../../assets/images/icons/quality.png"
import deliveryicon from "../../../../assets/images/icons/delivery.png"
import icon from "../../../../assets/images/my-images/OMG_icon.png"
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
import httpService, {baseURL} from "../../../../utility/http"
import {toast} from "react-toastify"
import {isObjEmpty} from "../../../../utility/Utils"
import ComponentSpinner from "../../../../@core/components/spinner/Loading-spinner"

// const mainMenu = [
//     {
//         id: 1,
//         title: "omg Plate",
//         image: require("../../../../assets/images/ORDER/omg-p1.png").default,
//         description: "Your choice of perfectly seasoned protein, served with salad, a grain, and your favorite sauce. Portioned and balanced according the Mediterranean Diet!"
//     },
//     {
//         id: 2,
//         title: "sandwich",
//         image: require("../../../../assets/images/ORDER/sabdwich.png").default,
//         description: "Your choice of proteins, paired perfectly with Mediterranean flavors, served as a pita sandwich or a lavash wrap. Portioned and balanced according the Mediterranean Diet!  "
//     },
//     {
//         id: 3,
//         title: "featured plate",
//         image: require("../../../../assets/images/ORDER/omg-p1.png").default,
//         description: "Your choice of proteins, paired perfectly with Mediterranean flavors, served on a plate. Portioned and balanced according the Mediterranean Diet!  "
//     },
//     {
//         id: 4,
//         title: "salad",
//         image: require("../../../../assets/images/ORDER/salad.png").default,
//         description: "Your choice of perfectly seasoned protein, served with salad, a grain, and your favorite sauce. Portioned and balanced according the Mediterranean Diet!      "
//     },
//     {
//         id: 5,
//         title: "soup",
//         image: require("../../../../assets/images/ORDER/soup.png").default,
//         description: "Warm up without regret! All OMG Soups are portioned and balanced according the Mediterranean Diet!  "
//     },
//     {
//         id: 6,
//         title: "drinks",
//         image: require("../../../../assets/images/ORDER/cola.png").default,
//         description: "Have drink"
//     },
//     {
//         id: 7,
//         title: "wine",
//         image: require('../../../../assets/images/ORDER/VCine.png').default,
//         description: "JOIN THE OMG WINE CLUB AND ENJOY PRICES "
//     }
// ]

const Order = () => {
    //get redux state
    const {userLocation} = useSelector(state => state)
    const [mainCategory, setMainCategory] = useState([])

    useEffect(() => {
        httpService._get(`${baseURL}Category?pageIndex=1&&pageSize=12&&searchQuery=null`)
            .then(response => {
                // success case
                if (response.status === 200 && response.data.statusCode === 200) {
                    return response
                } else {
                    //general Error Action
                    toast.error(response.data.message)
                    return null
                }
            })
            .then(async res => {
                if (res && !isObjEmpty(res)) {
                    const arr = [...res.data.data]
                    try {
                        const final = []
                        for (const item of arr) {
                            if (item.attachment !== null) {
                                const result = await httpService._get(`${baseURL}Media/GetMediaByPath?path=${item.attachment.path}&extension=${item.attachment.extension}`, {responseType: 'blob'})
                                const image = URL.createObjectURL(result.data)
                                final.push({
                                    id: item.id,
                                    name: item.name,
                                    description: item.description,
                                    image,
                                    status: res.status
                                })
                            }
                        }
                        setMainCategory(final)

                    } catch (e) {
                        toast.error(e.message)
                    }
                }
            })
            .catch(error => {
                toast.error(error.message)
            })

    }, [])

    // console.log("main Category ---", mainCategory)

    return (
        <div className="order-main">
            <div className="container-fluid unlock-section">
                <div className="container-sm">
                    <div className="row align-items-center justify-content-center pt-1 pb-1">
                        <div className="col-md-8" style={{display: 'flex', paddingTop: '3px'}}>
                            <img className="unlock-img d-md-inline-flex d-none me-2" src={icon}
                                 alt="JOIN THE OMG WINE CLUB. UNLOCK"/>
                            <div className="loyalty-text">JOIN THE OMG WINE CLUB. UNLOCK VENDOR PRICING.</div>
                        </div>
                        <div className="col-md-4 col-12" style={{paddingTop: '3px'}}>
                            <div className="content d-inline-flex mb-1 text-center">
                                <div className="create-an-account">
                                    <div>Create an Account</div>
                                </div>
                                <div className="unlock-or">OR</div>
                                <div className="sign-in fs-5">Sign In</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu-list container-fluid pb-5 pt-5 ">
                <div className="row ms-0 me-1">
                    {
                        mainCategory.length ? mainCategory.map(item => (
                            <div className="col-md-3 col-sm-5  col-6 top-level-menu" key={item.id}>
                                <Link to={userLocation.length ? "/OmgPlate" : "/gmap"}>
                                    <div className="menu-item"
                                        //      onClick={() => (
                                        //     dispatch(itemSelected({name: item.title, description: item.description}))
                                        // )}
                                    >
                                        <div className="thumbnail">
                                            <img
                                                src={item.image}
                                                alt="Burrito"
                                                width={200}
                                                height={180}
                                            />
                                        </div>
                                        <div className="text2">
                                            <div className="display-name">{item.name}</div>
                                            <div className="order-cta">Order
                                                <div className="arrow-right"></div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )) : <ComponentSpinner/>
                        // <div className="fs-1 fw-bolder text-center mt-5"> No item found in Database</div>
                    }
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
                                <div className="slot-wrapper btn btn-primary mb-2">ORDER CATERING</div>
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
                            <div className="col-xxl-4 col-md-4 col-4">
                                <div className="large-order-card">
                                    <h1 className="pleaser-card-title text-center">CATERING</h1>
                                    <div className="details">
                                        <ul className="pleaser-list">
                                            <li>From 6 to 600 people</li>
                                            <li>Starting at $15.00 / person</li>
                                            <li>Build Your Own</li>
                                            <li>Boxed Lunches</li>
                                            <li>A La Carte</li>
                                            <li><b>Requires 24 hour notice</b></li>
                                        </ul>
                                    </div>
                                    <div className="type-ordering-primary">
                                        <div className="text-center">
                                            <div className="cta-wrapper btn btn-primary mb-2 ">Explore Catering
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-md-4 col-4">
                                <div className="large-order-card">
                                    <h1 className="pleaser-card-title text-center">GROUP ORDER</h1>
                                    <div className="details ">
                                        <ul className="pleaser-list">
                                            <li>Invite up to 20 people</li>
                                            <li>Normal menu pricing</li>
                                            <li>Full menu</li>
                                            <li>Personalized meals</li>
                                            <li>Organizer pays</li>
                                            <li><b>Order and eat today</b></li>
                                        </ul>
                                    </div>
                                    <div className="type-ordering-primary">
                                        <div className="text-center">
                                            <div className="cta-wrapper btn btn-primary mb-2 ">Start Order</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-md-4 col-4">
                                <div className="large-order-card">
                                    <h1 className="pleaser-card-title text-center">OMG CHARCUTERIE BOARDS</h1>
                                    <div className="details ">
                                        <ul className="pleaser-list mb-1">
                                            <li>*Serves 10 people</li>
                                            <li>Cheese and Charcuterie Platter - $100</li>
                                            <li>Fruit Platter - $90</li>
                                            <li>Crudites Platter - $90</li>
                                            {/*<li>Organizer pays</li>*/}
                                            {/*<li><b>Order and eat today</b></li>*/}
                                        </ul>
                                    </div>
                                    <div className="type-ordering-primary">
                                        <div className="text-center">
                                            <div className="cta-wrapper btn btn-primary mb-2 ">Start Order</div>
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
