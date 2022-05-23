import React from 'react'
import "./Order.css"
import icon from "../../../../assets/images/my-images/OMG_icon.png"
import {Link} from "react-router-dom"

const Order = () => {
    return (
        <div className="order-main">
            <div className="unlock-section container-fluid">
                <div className="unlock-section-1 row fs-4 justify-content-center align-items-center g-md-0">
                    <div className="unlock-img-section col-12 col-md-6 justify-content-md-end me-md-0 d-inline-flex mt-2 justify-content-center align-items-center mb-md-2" >
                        <img className="unlock-img d-md-inline-flex d-none" src={icon} alt="JOIN THE OMG WINE CLUB. UNLOCK"/>
                        <div className="loyalty-text ms-2">JOIN THE OMG WINE CLUB. UNLOCK VENDOR PRICING.</div>
                    </div>
                    <div className="account col-12 col-md-6 justify-content-md-start d-inline-flex justify-content-center align-items-center">
                        <div className="content d-inline-flex mb-1">
                            <div className="create-an-account">
                                <div>Create an Account</div>
                            </div>
                            <div className="unlock-or">OR</div>
                            <div className="sign-in fs-5">Sign In</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu-list container-fluid pb-5 pt-5 ">
                <div className="row ms-0 me-1 ">
                    <div className="col-md-4 col-sm-5  col-6 top-level-menu">
                        <Link to="/OmgPlate">
                            <div className="menu-item">
                                <div className="thumbnail">
                                    <img
                                        src="https://www.chipotle.com/content/dam/chipotle/global/menu/meal-types/cmg-10001-burrito/web-desktop/order.png"
                                        alt="Burrito"/>
                                </div>
                                <div className="text2">
                                    <div className="display-name">OMG PLATE</div>
                                    <div className="order-cta">Order
                                        <div className="arrow-right"></div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 col-sm-5 col-6 top-level-menu">
                        <Link to="/OmgPlate">
                            <div className="menu-item">
                                <div className="thumbnail">
                                    <img src="https://www.chipotle.com/content/dam/poc/order/images/entrees/bowl.jpg"
                                         alt="Burrito Bowl"/>
                                </div>
                                <div className="text2">
                                    <div className="display-name mealBurrito">SANDWICH</div>
                                    <div className="order-cta">Order
                                        <div className="arrow-right"></div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 col-sm-5 col-6 top-level-menu">
                        <Link to="/OmgPlate">
                            <div className="menu-item">
                                <div className="thumbnail">
                                    <img
                                        src="https://www.chipotle.com/content/dam/poc/order/images/entrees/lifestyle.png"
                                        alt="Burrito Bowl"/>
                                </div>
                                <div className="text2">
                                    <div className="display-name mealBurrito">FEATURED PLATES</div>
                                    <div className="order-cta">Order
                                        <div className="arrow-right"/>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 col-sm-5 col-6 top-level-menu">
                        <Link to="/OmgPlate">
                            <div className="menu-item">
                                <div className="thumbnail">
                                    <img
                                        src="https://www.chipotle.com/content/dam/poc/order/images/entrees/lifestyle.png"
                                        alt="Burrito Bowl"/>
                                </div>
                                <div className="text2">
                                    <div className="display-name mealBurrito">FEATURED PLATES</div>
                                    <div className="order-cta">Order
                                        <div className="arrow-right"/>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 col-sm-5 col-6 top-level-menu">
                        <Link to="/OmgPlate">
                            <div className="menu-item">
                                <div className="thumbnail">
                                    <img
                                        src="https://www.chipotle.com/content/dam/poc/order/images/entrees/lifestyle.png"
                                        alt="Burrito Bowl"/>
                                </div>
                                <div className="text2">
                                    <div className="display-name mealBurrito">FEATURED PLATES</div>
                                    <div className="order-cta">Order
                                        <div className="arrow-right"/>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 col-sm-5 col-6 top-level-menu">
                        <Link to="/OmgPlate">
                            <div className="menu-item">
                                <div className="thumbnail">
                                    <img
                                        src="https://www.chipotle.com/content/dam/poc/order/images/entrees/lifestyle.png"
                                        alt="Burrito Bowl"/>
                                </div>
                                <div className="text2">
                                    <div className="display-name mealBurrito">FEATURED PLATES</div>
                                    <div className="order-cta">Order
                                        <div className="arrow-right"/>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    </div>

                </div>
            </div>

            <div className="promo-banner container-fluid  " >
                <div className="row align-items-center justify-content-center">
                    <div className="promo col-12 col-md-5 container-fluid">
                            <div className="row">
                                <div className="text-container col-6">
                                    <h1 className="banner-title  mt-1">CATER YOUR NEXT PARTY</h1>
                                    <div className="banner-subtitle">
                                        <p>OMG offers catering for groups from 6 to 600! Easy to order and customizable so your
                                            guests can enjoy taste and flavor that happens to be healthy!.</p>
                                    </div>
                                    <div className="slot-wrapper btn btn-primary mb-2">ORDER CATERING</div>

                                </div>
                                <img src="https://www.chipotle.com/content/dam/chipotle/global-site-design/en/catering1/cinco-de-mayo/CMG_SpringCatering_Cinco_ST_Desktop.png"
                                     className="img-container col-6"/>
                            </div>
                    </div>
                    <div className="promo col-12 col-md-5 container-fluid ">
                            <div className="row ">
                                <div className="text-container col-6">
                                    <h1 className="banner-title mt-1">SAVE $10 OFF YOUR NEXT OMG ORDER!</h1>
                                    <div className="banner-subtitle">
                                        <p>Join the OMG Wine Club, and save $10 off your next OMG food order! Wine Club benefits
                                            include vendor pricing on all offered wines!</p>
                                    </div>
                                    <div className="slot-wrapper btn btn-primary mb-2">ORDER CATERING</div>
                                </div>
                                <video autoPlay="autoplay" muted="muted" loop="loop"
                                       src="https://www.chipotle.com/content/dam/chipotle/global-site-design/en/misc--pages/healthcareheroes/HealthcareHeroes_TOUT_540x586.mp4"
                                       className="img-container col-6"></video>
                            </div>
                    </div>

                </div>

            </div>


            <div className="featured-container-full">
                <div className="featured-container container ">
                    <div className=" row">
                        <div className="header col-12 d-flex flex-column align-items-center justify-content-center mt-4">
                            <h2 className="card-title ">1-Tap Orders</h2>
                            <div className="sub-header-text">Sometimes it's hard to choose. We made it
                                easy with these favorites.
                            </div>
                            <div className="find-slot-wrapper btn ">FIND A CHIPOTLE</div>
                        </div>
                        <div className="universal-pce col-12">
                            <div className="universal-cards  d-md-inline-flex flex-row">
                                <div className="meal-card">
                                    <img
                                        src="https://chipotlestrgprdcentral.blob.core.windows.net/assets/menuinnovation/pcms/d11d3e83-c301-4512-bcb7-22fda59a01d7/934feeaf-3905-45ce-8860-af18d945c280.jpg"
                                        alt="Meal Image"
                                        className="meal-img"/>
                                    <div className="meal-info">
                                        <div className="meal-name">Karl Jacobs Burrito</div>
                                    </div>
                                </div>
                                <div className="meal-card" >
                                    <img
                                        src="https://chipotlestrgprdcentral.blob.core.windows.net/assets/menuinnovation/pcms/e5af0cbc-518a-484c-9759-1c90b29ec5c7/0b375e9b-3f33-4a97-a290-2c7e50186800.jpg"
                                        alt="Meal Image"
                                        className="meal-img"/>
                                    <div className="meal-info">
                                        <div className="meal-name">Aidan Hutchinson Bowl</div>
                                    </div>
                                </div>
                                <div className="meal-card">
                                    <img
                                        src="https://chipotlestrgprdcentral.blob.core.windows.net/assets/menuinnovation/pcms/ea792bef-9e27-4737-8a5b-2d8e0881d538/bbe9246e-8852-41c0-8fac-82309527de43.jpg"
                                        alt="Meal Image"
                                        className="meal-img "/>
                                    <div className="meal-info">
                                        <div className="meal-name">Kyle Hamilton Burrito</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="large-order-promo ">
                <h1 className="title">CROWD PLEASERS</h1>
                <div className="lg-order-container container-fluid ms-md-3 ms-0">
                    <div className="row ms-lg-2 ms-1 me-lg-4 me-1 justify-content-center align-items-center align-self-center ">
                        <div className="col-md-6 ">
                            <div className="large-order-card">
                                <h1 className="cat-title">CATERING</h1>
                                <div className="details pt-2">
                                    <ul className="inline-list" tabIndex='-1'>
                                        <li>From 6 to 200 people</li>
                                        <li>Starting at $15.00 / person</li>
                                        <li>Build Your Own</li>
                                        <li>Boxed Lunches</li>
                                        <li>A La Carte</li>
                                        <li><b>Requires 24 hour notice</b></li>
                                    </ul>
                                </div>
                                <div className="type-ordering-primary">
                                    <div className="cat-content">
                                        <div className="cta-wrapper mb-1">Explore Catering
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="large-order-card">
                                <h1 className="cat-title">GROUP ORDER</h1>
                                <div className="details pt-2">
                                    <ul className="inline-list" tabIndex='-1'>
                                        <li>Invite up to 20 people</li>
                                        <li>Normal menu pricing</li>
                                        <li>Full menu</li>
                                        <li>Personalized meals</li>
                                        <li>Organizer pays</li>
                                        <li><b>Order and eat today</b></li>
                                    </ul>
                                </div>
                                <div className="type-ordering-primary">
                                    <div className="cta-wrapper mb-1">Start Order</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Order
