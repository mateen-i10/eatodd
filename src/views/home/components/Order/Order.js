import React from 'react'
import "./Order.css"
import icon from "../../../../assets/images/my-images/OMG_icon.png"
import { Link } from "react-router-dom"

const Order = () => {
    return (
        <div className="order-main">
            <div className="unlock-section">
                <img  className="unlock-img" src={icon} alt="Join Chipotle Rewards. Unlock free Chipotle." />
                <h2  className="loyalty-text">Join EatOMG
                    Rewards. Unlock free<br/> EatOMG.</h2>
                <div className="account">
                    <div  className="create-an-account" >
                        <div className="content">
                            <div  aria-label="" >Create an Account</div>
                        </div>
                    </div></div>
                    <h2   className="unlock-or">OR</h2>
                    <div className="sign-in">Sign In</div>
            </div>
            <div itemID="order" className="container pb-5 pt-5">
                <div className="row">
                        <div  className="top-level-menu">
                            <Link to="/OmgPlate">
                               <div  className="menu-item">
                                <div className="thumbnail">
                                    <img src="https://www.chipotle.com/content/dam/chipotle/global/menu/meal-types/cmg-10001-burrito/web-desktop/order.png" alt="Burrito"/>
                                </div>
                                <div  className="text2">
                                    <div  className="display-name mealBurrito">OMG PLATE</div>
                                    <div  className="order-cta">Order
                                        <div  className="arrow-right" ></div>
                                    </div>
                                </div>

                            </div>
                            </Link>
                        </div>
                        <div  className="top-level-menu">
                            <Link to="/OmgTacos">
                                <div  className="menu-item">
                                    <div className="thumbnail">
                                        <img src="https://www.chipotle.com/content/dam/poc/order/images/entrees/bowl.jpg" alt="Burrito Bowl"/>

                                    </div>
                                    <div  className="text2">
                                        <div  className="display-name mealBurrito">SANDWICH</div>
                                        <div  className="order-cta">Order
                                            <div  className="arrow-right" ></div>
                                        </div>
                                    </div>

                                </div>
                            </Link>
                        </div>
                        <div  className="top-level-menu">
                            <Link to="/OmgTacos">
                                <div  className="menu-item">
                                    <div className="thumbnail">
                                        <img src="https://www.chipotle.com/content/dam/poc/order/images/entrees/lifestyle.png" alt="Burrito Bowl"/>
                                    </div>
                                    <div  className="text2">
                                        <div  className="display-name mealBurrito">FEATURED PLATES</div>
                                        <div  className="order-cta">Order
                                            <div  className="arrow-right" />
                                        </div>
                                    </div>

                                </div>
                            </Link>
                        </div>
                </div>
                <div className="row">
                        <div  className="top-level-menu">
                            <Link to="/OmgTacos">
                                <div  className="menu-item" >
                                    <div className="thumbnail">
                                        <img src="https://www.chipotle.com/content/dam/poc/order/images/entrees/lifestyle.png" alt="Burrito"/>
                                    </div>
                                    <div  className="text2">
                                        <div  className="display-name mealBurrito">SALADS</div>
                                        <div  className="order-cta">Order
                                            <div  className="arrow-right" ></div>
                                        </div>
                                    </div>

                                </div>
                            </Link>
                        </div>
                        <div  className="top-level-menu">
                            <Link to="/OmgTacos">
                                <div  className="menu-item">
                                    <div className="thumbnail">
                                        <img src="https://www.chipotle.com/content/dam/poc/order/images/entrees/lifestyle.png" alt="Burrito Bowl"/>

                                    </div>
                                    <div  className="text2">
                                        <div  className="display-name mealBurrito">SOUPS</div>
                                        <div  className="order-cta">Order
                                            <div  className="arrow-right" ></div>
                                        </div>
                                    </div>

                                </div>
                            </Link>
                        </div>
                        <div  className="top-level-menu">
                            <Link to="/OmgTacos">
                                <div  className="menu-item">
                                    <div className="thumbnail">
                                        <img src="https://www.chipotle.com/content/dam/poc/order/images/entrees/bowl.jpg" alt="Burrito Bowl"/>
                                    </div>
                                    <div  className="text2">
                                        <div  className="display-name mealBurrito">SIDES AND DRINKS</div>
                                        <div  className="order-cta">Order
                                            <div  className="arrow-right" />
                                        </div>
                                    </div>

                                </div>
                            </Link>
                        </div>
                </div>
            </div>
            <div  className="promo-banner" id="highlight">
                <div  className="promo">
                    <div  className="text-container">
                        <h1  className="banner-title" >CATER YOUR CINCO PARTY</h1>
                        <div className="banner-subtitle" >
                            <p>Build Your Own is the perfect party spread—easy to order
                            and customizable so guests can enjoy what they want. Includes all real, fresh ingredients in
                            tacos, bowls, and more.</p>
                        </div>
                        <div className="promo-banner-btns">
                            <div  className="button size-lg type-primary" >
                                <div className="content">
                                    <div aria-label=""className="slot-wrapper">ORDER CATERING
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    <img src="https://www.chipotle.com/content/dam/chipotle/global-site-design/en/catering1/cinco-de-mayo/CMG_SpringCatering_Cinco_ST_Desktop.png" className="img-container" />
                </div>
                <div  className="promo">
                    <div  className="text-container">
                        <h1  className="banner-title" >CATER YOUR CINCO PARTY</h1>
                        <div className="banner-subtitle" >
                            <p>Build Your Own is the perfect party spread—easy to order
                                and customizable so guests can enjoy what they want. Includes all real, fresh ingredients in
                                tacos, bowls, and more.</p>
                        </div>
                        <div className="promo-banner-btns">
                            <div  className="button size-lg type-primary" >
                                <div className="content">
                                    <div aria-label=""className="slot-wrapper">ORDER CATERING
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <video autoPlay="autoplay"
                           muted="muted"
                           loop="loop"
                           src="https://www.chipotle.com/content/dam/chipotle/global-site-design/en/misc--pages/healthcareheroes/HealthcareHeroes_TOUT_540x586.mp4"
                           className="img-container"></video>
                </div>
            </div>

            <div className="featured-container " id="cmg-featured">
                <div  className="background-image"/>
                <div className="header"><h2  aria-level="2" className="card-title">1-Tap Orders</h2>
                    <div  className="sub-header">
                        <div  className="sub-header-text">Sometimes it's hard to choose. We made it
                            easy with these favorites.
                        </div>
                    </div>
                    <div className="find-a-chipotle-container">
                        <div className="featured-fac">
                            <div  className="content-1tap">
                                <div className="slot-wrapper">FIND A CHIPOTLE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div  className="universal-pce">
                    <div  className="universal-cards">
                        <div className="meal-card">
                            <img src="https://chipotlestrgprdcentral.blob.core.windows.net/assets/menuinnovation/pcms/d11d3e83-c301-4512-bcb7-22fda59a01d7/934feeaf-3905-45ce-8860-af18d945c280.jpg"
                                 alt="Meal Image"
                                 className="meal-img"/>
                            <div  className="meal-info">
                                <div  className="meal-name">Karl Jacobs Burrito</div>
                                </div></div>
                        <div  className="meal-card">
                            <img src="https://chipotlestrgprdcentral.blob.core.windows.net/assets/menuinnovation/pcms/e5af0cbc-518a-484c-9759-1c90b29ec5c7/0b375e9b-3f33-4a97-a290-2c7e50186800.jpg"
                            alt="Meal Image"
                            className="meal-img"/>
                            <div  className="meal-info">
                                <div  className="meal-name">Aidan Hutchinson Bowl</div>
                                </div></div>
                        <div  className="meal-card">
                            <img src="https://chipotlestrgprdcentral.blob.core.windows.net/assets/menuinnovation/pcms/ea792bef-9e27-4737-8a5b-2d8e0881d538/bbe9246e-8852-41c0-8fac-82309527de43.jpg"
                                 alt="Meal Image"
                                 className="meal-img"/>
                            <div  className="meal-info">
                                <div className="meal-name">Kyle Hamilton Burrito</div>
                                </div></div>
                    </div>
                </div>
            </div>


            <div className="large-order-promo ">
                <h1 className="pre-title"></h1>
                <h1 className="title">CROWD PLEASERS</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
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
                                <div className="bold-copy"></div>
                                <div  className="type-ordering-primary"
                                      data-button="catering-order-cta">
                                    <div className="cat-content">
                                        <div  className="cta-wrapper">Explore Catering
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
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
                                <div className="bold-copy"></div>
                                <div  className="type-ordering-primary"
                                      data-button="catering-order-cta">
                                    <div className="cat-content">
                                        <div  className="cta-wrapper">Start Order
                                        </div>
                                    </div>
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
