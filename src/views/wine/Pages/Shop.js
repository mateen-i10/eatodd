import React from 'react'
import './Faq.css'
import Header from "../../../shared/header/Header"
import Footer from "../../../shared/footer/Footer"
import HeroSection from "../components/HeroSection"
import "./Shop.css"

const Shop = () => {
    return (
        <div className="shop-page">
            <Header />
            <HeroSection />
            <section id="menu-8" className="wide-70 menu-section division">
                <div className="container-sm">
                    <div id="tabs-nav">
                        <div className="row d-flex flex-wrap">
                            <div className="col-lg-12 text-center">
                                <ul className="tabs-1 ico-55 red-tabs clearfix">

                                    <li className="tab-link current" data-tab="tab-1">
                                        <span className="fas fa-wine-bottle"></span>
                                        <h5 className="h5-sm">Wine Collection</h5>
                                    </li>

                                    <li className="tab-link" data-tab="tab-2">
                                        <span className="fas fa-wine-glass-alt"></span>
                                        <h5 className="h5-sm">Wine</h5>
                                    </li>

                                    <li className="tab-link" data-tab="tab-3">
                                        <span className="fas fa-wine-glass-alt"></span>
                                        <h5 className="h5-sm">Premium</h5>
                                    </li>

                                    <li className="tab-link" data-tab="tab-4">
                                        <span className="fas fa-wine-glass"></span>
                                        <h5 className="h5-sm">Party Collection</h5>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="tabs-content">
                        {/*// <!-- TAB-1 CONTENT -->*/}
                        <div id="tab-1" className="tab-content current">
                            <div className="row d-flex flex-wrap">

                                {/*// <!-- MENU ITEM #1 -->*/}
                                <div className="col-sm-6 col-lg-3">
                                    <div className="menu-7-item">

                                        <div className="menu-7-img rel">

                                            <img className="img-fluid" src={require("../../../assets/images/pages/wine/shop/j-mckinney-unsplash-184.jpg").default} alt="menu-image"/>

                                                {/*// <!-- Price -->*/}
                                                <div className="menu-7-price bg-coffee">
                                                    <h5 className="h5-xs yellow-color">$8.95</h5>
                                                </div>

                                                {/*// <!-- Rating -->*/}
                                                <div className="item-rating">
                                                    <div className="stars-rating stars-lg">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star-half-alt"></i>
                                                    </div>
                                                </div>

                                                {/*// <!-- Like Icon -->*/}
                                                <div className="like-ico ico-20">
                                                    <a href="#"><span className="far fas-heart"></span></a>
                                                </div>

                                        </div>

                                        <div className="menu-7-txt rel">

                                            <h5 className="h5-sm">Crispy Chicken</h5>

                                            <p className="grey-color">Fried chicken breast, chilli sauce, tomatoes,
                                                pickles, coleslaw</p>

                                            <a href="product-single.html"
                                               className="btn btn-sm btn-tra-grey yellow-hover">
                                                <span className="fas fa-shopping-cart"></span> Add to Cart
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/*// <!-- MENU ITEM #2 -->*/}
                                <div className="col-sm-6 col-lg-3">
                                    <div className="menu-7-item">

                                       {/*Image*/}
                                        <div className="menu-7-img rel">

                                            <img className="img-fluid" src={require("../../../assets/images/pages/wine/shop/joseph-costa-nsplash-184.jpg").default} alt="menu-image"/>

                                                <div className="menu-7-price bg-coffee">
                                                    <h5 className="h5-xs yellow-color">$9.99</h5>
                                                </div>

                                                <div className="item-rating">
                                                    <div className="stars-rating stars-lg">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                    </div>
                                                </div>

                                                <div className="like-ico ico-20">
                                                    <a href="#"><span className="flaticon-heart"></span></a>
                                                </div>

                                        </div>

                                        <div className="menu-7-txt rel">

                                            <h5 className="h5-sm">Ultimate Bacon</h5>

                                            <p className="grey-color">House beef patty, cheddar cheese, bacon, onion,
                                                mustard</p>

                                            <a href="product-single.html"
                                               className="btn btn-sm btn-tra-grey yellow-hover">
                                                <span className="fas fa-shopping-cart"></span> Add to Cart
                                            </a>

                                        </div>

                                    </div>
                                </div>

                                {/*// <!-- MENU ITEM #3 -->*/}
                                <div className="col-sm-6 col-lg-3">
                                    <div className="menu-7-item">

                                        <div className="menu-7-img rel">

                                            <img className="img-fluid" src={require("../../../assets/images/pages/wine/shop/nati-melnychuk-unsplash-185.jpg").default} alt="menu-image"/>

                                                <div className="menu-7-price bg-coffee">
                                                    <h5 className="h5-xs yellow-color">$7.99</h5>
                                                </div>

                                                <div className="item-rating">
                                                    <div className="stars-rating stars-lg">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                    </div>
                                                </div>

                                                <div className="like-ico ico-20">
                                                    <a href="#"><span className="flaticon-heart"></span></a>
                                                </div>

                                        </div>

                                        <div className="menu-7-txt rel">

                                            <h5 className="h5-sm">Smokey House</h5>

                                            <p className="grey-color">Beef patty, cheddar cheese, onion, lettuce,
                                                tomatoes, pickles</p>
                                            <a href="product-single.html"
                                               className="btn btn-sm btn-tra-grey yellow-hover">
                                                <span className="fas fa-shopping-cart"></span> Add to Cart
                                            </a>

                                        </div>

                                    </div>
                                </div>


                                {/*// <!-- MENU ITEM #4 -->*/}
                                <div className="col-sm-6 col-lg-3">
                                    <div className="menu-7-item">

                                        <div className="menu-7-img rel">

                                            <img className="img-fluid" src={require("../../../assets/images/pages/wine/shop/joseph-costa-nsplash-184.jpg").default} alt="menu-image"/>

                                                <div className="menu-7-price bg-coffee">
                                                    <h5 className="h5-xs yellow-color">$8.30</h5>
                                                </div>

                                                <div className="item-rating">
                                                    <div className="stars-rating stars-lg">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star-half-alt"></i>
                                                    </div>
                                                </div>

                                                <div className="like-ico ico-20">
                                                    <a href="#"><span className="flaticon-heart"></span></a>
                                                </div>

                                        </div>

                                        <div className="menu-7-txt rel">

                                            <h5 className="h5-sm">Turkey Burger</h5>

                                            <p className="grey-color">Turkey, cheddar cheese, onion, lettuce, tomatoes,
                                                pickles</p>

                                            <a href="product-single.html"
                                               className="btn btn-sm btn-tra-grey yellow-hover">
                                                <span className="fas fa-shopping-cart"></span> Add to Cart
                                            </a>

                                        </div>

                                    </div>
                                </div>


                                {/*// <!-- MENU ITEM #5 -->*/}
                                <div className="col-sm-6 col-lg-3">
                                    <div className="menu-7-item">

                                        <div className="menu-7-img rel">
                                            <img className="img-fluid" src={require("../../../assets/images/pages/wine/shop/j-mckinney-unsplash-184.jpg").default} alt="menu-image"/>
                                                <div className="menu-7-price bg-coffee">
                                                    <h5 className="h5-xs yellow-color">$9.15</h5>
                                                </div>
                                                <div className="item-rating">
                                                    <div className="stars-rating stars-lg">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star-half-alt"></i>
                                                    </div>
                                                </div>
                                                <div className="like-ico ico-20">
                                                    <a href="#"><span className="flaticon-heart"></span></a>
                                                </div>

                                        </div>

                                        <div className="menu-7-txt rel">

                                            <h5 className="h5-sm">Black Sheep</h5>

                                            <p className="grey-color">American cheese, tomato relish, avocado, lettuce,
                                                red onion</p>

                                            <a href="product-single.html"
                                               className="btn btn-sm btn-tra-grey yellow-hover">
                                                <span className="fas fa-shopping-cart"></span> Add to Cart
                                            </a>

                                        </div>

                                    </div>
                                </div>


                                {/*// <!-- MENU ITEM #6 -->*/}
                                <div className="col-sm-6 col-lg-3">
                                    <div className="menu-7-item">

                                        <div className="menu-7-img rel">

                                            <img className="img-fluid" src={require("../../../assets/images/pages/wine/shop/nati-melnychuk-unsplash-185.jpg").default} alt="menu-image"/>

                                                <div className="menu-7-price bg-coffee">
                                                    <h5 className="h5-xs yellow-color">$8.35</h5>
                                                </div>
                                                <div className="item-rating">
                                                    <div className="stars-rating stars-lg">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                </div>

                                                <div className="like-ico ico-20">
                                                    <a href="#"><span className="flaticon-heart"></span></a>
                                                </div>

                                        </div>

                                        <div className="menu-7-txt rel">

                                            <h5 className="h5-sm">Double Burger</h5>

                                            <p className="grey-color">2 beef patties, cheddar cheese, mustard, pickles,
                                                tomatoes</p>

                                            <a href="product-single.html"
                                               className="btn btn-sm btn-tra-grey yellow-hover">
                                                <span className="fas fa-shopping-cart"></span> Add to Cart
                                            </a>

                                        </div>

                                    </div>
                                </div>

                                {/*// <!-- MENU ITEM #7 -->*/}
                                <div className="col-sm-6 col-lg-3">
                                    <div className="menu-7-item">

                                        <div className="menu-7-img rel">

                                            <img className="img-fluid" src={require("../../../assets/images/pages/wine/shop/j-mckinney-unsplash-184.jpg").default} alt="menu-image"/>

                                                <div className="menu-7-price bg-coffee">
                                                    <h5 className="h5-xs yellow-color">$6.89</h5>
                                                </div>

                                                <div className="item-rating">
                                                    <div className="stars-rating stars-lg">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star-half-alt"></i>
                                                    </div>
                                                </div>

                                                <div className="like-ico ico-20">
                                                    <a href="#"><span className="flaticon-heart"></span></a>
                                                </div>

                                        </div>

                                        <div className="menu-7-txt rel">

                                            <h5 className="h5-sm">Classic Burger</h5>

                                            <p className="grey-color">Beef, cheddar cheese, ketchup, mustard, pickles,
                                                onion</p>

                                            <a href="product-single.html"
                                               className="btn btn-sm btn-tra-grey yellow-hover">
                                                <span className="fas fa-shopping-cart"></span> Add to Cart
                                            </a>

                                        </div>

                                    </div>
                                </div>
                                {/*// <!-- END MENU ITEM #7 -->*/}


                                {/*// <!-- MENU ITEM #8 -->*/}
                                <div className="col-sm-6 col-lg-3">
                                    <div className="menu-7-item">

                                        <div className="menu-7-img rel">

                                            <img className="img-fluid" src={require("../../../assets/images/pages/wine/shop/nati-melnychuk-unsplash-185.jpg").default} alt="menu-image"/>

                                                <div className="menu-7-price bg-coffee">
                                                    <h5 className="h5-xs yellow-color">$7.79</h5>
                                                </div>

                                                <div className="item-rating">
                                                    <div className="stars-rating stars-lg">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                    </div>
                                                </div>

                                                <div className="like-ico ico-20">
                                                    <a href="#"><span className="flaticon-heart"></span></a>
                                                </div>

                                        </div>

                                        <div className="menu-7-txt rel">

                                            <h5 className="h5-sm">Vegan Burger</h5>

                                            <p className="grey-color">Mushroom patty, vegan cheese, lettuce, tomatoes,
                                                avocado</p>

                                            <a href="product-single.html"
                                               className="btn btn-sm btn-tra-grey yellow-hover">
                                                <span className="fas fa-shopping-cart"></span> Add to Cart
                                            </a>

                                        </div>

                                    </div>
                                </div>


                            </div>
                            {/*// <!-- End row -->*/}
                        </div>
                        {/*// <!-- END TAB-1 CONTENT -->*/}

                    </div>


                </div>
            </section>

            <Footer />
        </div>
    )
}
export  default Shop