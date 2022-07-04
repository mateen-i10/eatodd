import React from 'react'
import "./Shop.css"
import {Button} from 'reactstrap'
import VideoHero from '../../wine/components/Carousel/Carousel'
import Headerwine from "../../../shared/wine-header/Header-wine"
import './About.css'
import Footer from "../../../shared/footer/Footer"
import {Link} from "react-router-dom"

const Homepage = () => {
    return (
        <>
            <Headerwine/>
            <VideoHero/>
            <div className="about-page">
                <section id="about-3" className="wide-60 about-section division mt-5">
                    <div className="container-fluid ">
                        <div className="row d-flex align-items-center justify-content-center ">
                            <div className="col-md-5 col-lg-5 h-75">
                                <div className="about-3-img text-center mb-40 ">
                                    <img className="img-fluid" style={{width: "100%", height: "95%"}}
                                         src={require('../../../assets/images/my-images/wine1.jpg').default}
                                         alt="about-image"/>
                                </div>
                            </div>
                            <div className="col-md-7 col-lg-5 h-75">
                                <div className="about-3-txt mb-40">
                                    {/*<h2 className="h2-sm mb-lg-3 mt-1">Nothing brings people together like a good Wine</h2>*/}
                                    <p className="p-md">The OMG Wine Club was created to make you say OMG at your
                                        savings!
                                        We are the 1st wine club that was created to SAVE YOU MONEY! We appreciate you
                                        and your loyalty to OMG.
                                        As our way to say THANK YOU, we are extending you the opportunity to purchase
                                        your favorite wines AT COST!
                                        Since wine pairs PERFECTLY with our food, we figured why not let YOU PAY WHAT WE
                                        PAY?! We are not complicated;
                                        we just want you to EAT. LIVE. LOVE – now with your favorite glass of wine.
                                        Cheers Friends!
                                    </p>
                                    <ul className="txt-list">
                                        <li className="list-item">
                                            <p className="p-md">Fringilla risus, luctus mauris orci auctor purus euismod
                                                pretium
                                                purus pretium ligula rutrum tempor sapien
                                            </p>
                                        </li>
                                        <li className="list-item">
                                            <p className="p-md">Quaerat sodales sapien euismod purus blandit</p>
                                        </li>
                                        <li className="list-item">
                                            <p className="p-md">Nemo ipsam egestas volute turpis dolores ut aliquam
                                                quaerat sodales
                                                sapien undo pretium a purus mauris
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about-1" className="bg-fixed wide-100 about-section division mt-4">
                    <div className="container-fluid">
                        <div className="row d-flex flex-wrap align-items-center justify-content-center">
                            <div className="col-lg-8 ">
                                <div className="about-1-txt text-center">
                                    <h2><span className="green-color text-uppercase">Sommelier’s Selection</span></h2>
                                    <h3>WINE OF THE WEEK</h3>
                                    <p className="p-xl grey-color">Porta semper lacus cursus, feugiat primis ultrice a
                                        ligula risus auctor an
                                        tempus feugiat dolor lacinia cubilia curae integer orci congue and metus
                                        mollislorem primis in integer
                                        metus curae integer orci congue integer and primis in integer metus mollis
                                        faucibus
                                    </p>
                                    <div className="abox-1-wrapper ico-75">
                                        <div className="row d-flex flex-wrap">
                                            <div className="col-6 col-sm-4 col-md-2">
                                                <div className="abox-1 mb-40">
                                                    <div className="abox-1-ico grey-color"><span
                                                        className="fas fa-wine-bottle"></span></div>
                                                    <h6 className="h6-xl">Wine</h6>
                                                </div>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-2">
                                                <div className="abox-1 mb-40">
                                                    <div className="abox-1-ico grey-color"><span
                                                        className="fas fa-wine-glass"></span></div>
                                                    <h6 className="h6-xl">Premium</h6>
                                                </div>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-2">
                                                <div className="abox-1 mb-40">
                                                    <div className="abox-1-ico grey-color"><span
                                                        className="fas fa-wine-glass-alt"></span></div>
                                                    <h6 className="h6-xl">Party Pack</h6>
                                                </div>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-2">
                                                <div className="abox-1 mb-40">
                                                    <div className="abox-1-ico grey-color"><span
                                                        className="fas fa-wine-glass-alt"></span></div>
                                                    <h6 className="h6-xl">Candle Light</h6>
                                                </div>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-2">
                                                <div className="abox-1 mb-40">
                                                    <div className="abox-1-ico grey-color"><span
                                                        className="fas fa-wine-glass-alt"></span></div>
                                                    <h6 className="h6-xl">Desserts</h6>
                                                </div>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-2">
                                                <div className="abox-1 mb-40">
                                                    <div className="abox-1-ico grey-color"><span
                                                        className="fas fa-wine-bottle"></span></div>
                                                    <h6 className="h6-xl">Drinks</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container mt-4">
                    <div id="tabs-content">
                        {/*// <!-- TAB-1 CONTENT -->*/}
                        <div id="tab-1" className="tab-content current">
                            <div className="row d-flex flex-wrap">

                                {/*// <!-- MENU ITEM #1 -->*/}
                                <div className="col-sm-6 col-lg-3">
                                    <div className="menu-7-item">

                                        <div className="menu-7-img rel">

                                            <img className="img-fluid"
                                                 src={require("../../../assets/images/pages/wine/shop/j-mckinney-unsplash-184.jpg").default}
                                                 alt="menu-image"/>

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

                                            {/*<p className="grey-color">Fried chicken breast, chilli sauce, tomatoes,*/}
                                            {/*    pickles, coleslaw</p>*/}

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

                                            <img className="img-fluid"
                                                 src={require("../../../assets/images/pages/wine/shop/joseph-costa-nsplash-184.jpg").default}
                                                 alt="menu-image"/>

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

                                            {/*<p className="grey-color">House beef patty, cheddar cheese, bacon, onion,*/}
                                            {/*    mustard</p>*/}

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

                                            <img className="img-fluid"
                                                 src={require("../../../assets/images/pages/wine/shop/nati-melnychuk-unsplash-185.jpg").default}
                                                 alt="menu-image"/>

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

                                            {/*<p className="grey-color">Beef patty, cheddar cheese, onion, lettuce,*/}
                                            {/*    tomatoes, pickles</p>*/}
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
                                            <img className="img-fluid"
                                                 src={require("../../../assets/images/pages/wine/shop/joseph-costa-nsplash-184.jpg").default}
                                                 alt="menu-image"/>

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
                                            {/*<p className="grey-color">Turkey, cheddar cheese, onion, lettuce, tomatoes,*/}
                                            {/*    pickles</p>*/}
                                            <a href="product-single.html"
                                               className="btn btn-sm btn-tra-grey yellow-hover">
                                                <span className="fas fa-shopping-cart"></span> Add to Cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*// <!-- End row -->*/}
                            <div className="about-1-txt text-center">
                                <Link to="/wine/shop">
                                    <Button.Ripple color='primary' outline>
                                        Explore Full Menu
                                    </Button.Ripple>
                                </Link>
                            </div>
                        </div>
                        {/*// <!-- END TAB-1 CONTENT -->*/}
                    </div>
                </div>
                <section id="blog-1" className="wide-60 blog-section division mt-4">
                    <div className="container-fluid">
                        <div className="row d-flex flex-wrap align-items-center justify-content-center">
                            <div className="col-lg-8 ">
                                <div className="section-title mb-60 text-center">
                                    <h2 className="h2-xl text-uppercase">Events &amp; Catering</h2>
                                    <p className="p-xl fs-4">Aliquam a augue suscipit, luctus neque purus ipsum neque
                                        undo
                                        dolor
                                        primis libero tempus, blandit a cursus varius magna
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="row d-flex flex-wrap align-items-center justify-content-center mt-4">
                            <div className="col-md-6 col-lg-3">
                                <div className="blog-post">
                                    <div className="blog-post-img">
                                        <div className="hover-overlay">
                                            <img className="img-fluid"
                                                 src={require("../../../assets/images/pages/wine/about/daniel-vogel-unsplash-304.jpg").default}
                                                 alt="blog-post-image"/>
                                        </div>
                                    </div>
                                    <div className="blog-post-txt">
                                        <h5 className="h5-lg"><a href="#">Quaerat neque purus ipsum neque
                                            dolor</a></h5>
                                        <p className="grey-color">Quaerat neque purus ipsum neque dolor primis tempus
                                            impedit</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="blog-post">
                                    <div className="blog-post-img">
                                        <div className="hover-overlay">
                                            <img className="img-fluid"
                                                 src={require("../../../assets/images/pages/wine/about/marc-antoine-unsplash-304.jpg").default}
                                                 alt="blog-post-image"/>
                                        </div>
                                    </div>
                                    <div className="blog-post-txt">
                                        <h5 className="h5-lg"><a href="#">Tempor blandit sapien at
                                            gravida donec ipsum</a></h5>
                                        <p className="grey-color">Neque dolor primis libero tempus impedit tempor sapien
                                            gravida</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="blog-post">
                                    <div className="blog-post-img">
                                        <div className="hover-overlay">
                                            <img className="img-fluid"
                                                 src={require("../../../assets/images/pages/wine/about/winery-Lineup-304.jpg").default}
                                                 alt="blog-post-image"/>
                                        </div>
                                    </div>
                                    <div className="blog-post-txt">
                                        <h5 className="h5-lg "><a href="#">Neque dolor primis a libero
                                            tempus a tempor</a></h5>
                                        <p className="grey-color">Impedit tempor at donec sapien ipsum a neque dolor
                                            primis libero</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    )
}
export default Homepage