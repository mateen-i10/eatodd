import React from 'react'
import './About.css'
import Headerwine from "../../../shared/wine-header/Header-wine"
import Footer from "../../../shared/footer/Footer"
import NewsLetter from "../components/NewsLetter"

const About = () => {
    return (
        <div>
            <Headerwine/>
            <div className="about-page">
                <div id="about-page" className="about-page-hero-section division">
                    <div className="container-fluid">
                        <div className="row d-flex flex-wrap ">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="text-center">
                                    <div id="breadcrumb">
                                        <div className="row d-flex flex-wrap">
                                            <div className="col">
                                                <div className="breadcrumb-nav d-inline-block">
                                                    <nav aria-label="breadcrumb">
                                                        <ol className="breadcrumb d-flex flex-wrap">
                                                            <li className="breadcrumb-item d-flex"><a
                                                                href="#">wine</a></li>
                                                            <li className="breadcrumb-item active"
                                                                aria-current="page">About Us
                                                            </li>
                                                        </ol>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className="about-h2-xl">About omg wine club</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section id="about-3" className="about-wide-60 about-section division">
                    <div className="container-fluid">
                        <div className="row d-flex align-items-center justify-content-center ">
                            <div className="col-md-5 col-lg-5">
                                <div className="about-3-img text-center about-mb-40">
                                    <img className="img-fluid" style={{width: "100%", height: "100%"}}
                                         src={require('../../../assets/images/pages/wine/about/brett-jordan-unsplash.jpg').default}
                                         alt="about-image"/>
                                </div>
                            </div>
                            <div className="col-md-7 col-lg-5">
                                <div className="about-3-txt about-mb-40">

                                    <h2 className="about-h2-sm mt-1">Nothing brings people together like a good
                                        Wine</h2>
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

                <section id="about-1" className="bg-fixed about-wide-100 about-section division">
                    <div className="container-fluid">
                        <div className="row d-flex flex-wrap align-items-center justify-content-center">
                            <div className="col-lg-8 ">
                                <div className="about-1-txt text-center">
                                    <h2 className="about-h2-omg"><span className="green-color">omg…</span> what else?
                                    </h2>
                                    <p className="about-p-xl grey-color p-md ">Porta semper lacus cursus, feugiat primis
                                        ultrice a
                                        ligula risus auctor an
                                        tempus feugiat dolor lacinia cubilia curae integer orci congue and metus
                                        mollislorem primis in integer
                                        metus curae integer orci congue integer and primis in integer metus mollis
                                        faucibus
                                    </p>
                                    <div className="abox-1-wrapper ico-75">
                                        <div className="row d-flex flex-wrap">
                                            <div className="col-6 col-sm-4 col-md-2">
                                                <div className="abox-1 about-mb-40">

                                                    <div className="abox-1-ico grey-color"><span
                                                        className="fas fa-wine-bottle"></span></div>
                                                    <h6 className="about-h6-xl">Wine</h6>

                                                </div>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-2">
                                                <div className="abox-1 about-mb-40">
                                                    <div className="abox-1-ico grey-color"><span
                                                        className="fas fa-wine-glass"></span></div>
                                                    <h6 className="about-h6-xl">Premium</h6>
                                                </div>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-2">
                                                <div className="abox-1 about-mb-40">
                                                    <div className="abox-1-ico grey-color"><span
                                                        className="fas fa-wine-glass-alt"></span></div>
                                                    <h6 className="about-h6-xl">Party Pack</h6>
                                                </div>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-2">
                                                <div className="abox-1 about-mb-40">
                                                    <div className="abox-1-ico grey-color"><span
                                                        className="fas fa-wine-glass-alt"></span></div>
                                                    <h6 className="about-h6-xl">Candle Light</h6>
                                                </div>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-2">
                                                <div className="abox-1 about-mb-40">
                                                    <div className="abox-1-ico grey-color"><span
                                                        className="fas fa-wine-glass-alt"></span></div>
                                                    <h6 className="about-h6-xl">Desserts</h6>
                                                </div>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-2">
                                                <div className="abox-1 about-mb-40">
                                                    <div className="abox-1-ico grey-color"><span
                                                        className="fas fa-wine-bottle"></span></div>
                                                    <h6 className="about-h6-xl">Drinks</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" className="btn about-btn-md btn-green tra-red-hover">Explore Full
                                        Menu</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about-4" className="about-wide-60 division">
                    <div className="container-fluid">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-7 col-lg-5 col-12">
                                <div className="about-4-txt about-mb-40">
                                    <h2 className="about-h2-sm">Discover the new taste of the Wine</h2>
                                    <p className="p-md grey-color">Porta semper lacus cursus, feugiat primis ultrice and
                                        ligula risus auctor an
                                        tempus feugiat dolor lacinia cubilia a curae integer orci congue and metus
                                        mollislorem primis
                                    </p>
                                    <img className="img-fluid"
                                         src={require("../../../assets/images/pages/wine/about/marc-antoine-unsplash-430.jpg").default}
                                         alt="about-image"/>
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-5 col-11">
                                <div className="about-4-img about-mb-40">
                                    <img className="img-fluid"
                                         src={require("../../../assets/images/pages/wine/about/aesop-wines-unsplash-450.jpg").default}
                                         alt="about-image"/>
                                    <p className="p-md grey-color">Porta semper lacus cursus, feugiat primis ultrice
                                        and ligula risus auctor orci
                                        tempus feugiat dolor lacinia cubilia integer
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="promo-1" className="promo-section division about-mb-60">
                    <div className="container-fluid">
                        <div className="row d-flex flex-wrap align-items-center">
                            <div className="col-md-4 col-lg-3">
                                <div id="pb-1-1" className="pbox-1 bg-fixed">
                                    <div className="pbox-1-txt white-color">
                                        <h3 className="about-h3-sm">Careers</h3>
                                        <p className="about-p-lg">Want to join our team?</p>
                                        <a href="#" className="btn btn-green ">Learn More</a>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-6">
                                <div id="pb-1-2" className="pbox-1 bg-fixed">
                                    <div className="pbox-1-txt white-color">

                                        <h3 className="about-h3-sm">Order Now</h3>
                                        <p className="about-p-lg">Enjoy Wine at home</p>
                                        <a href="#" className="btn btn-green ">Learn More</a>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-3">
                                <div id="pb-1-3" className="pbox-1 bg-fixed">
                                    <div className="pbox-1-txt white-color">

                                        <h3 className="about-h3-sm">Gift Cards</h3>
                                        <p className="about-p-lg">Give the gift of Yummy!</p>
                                        <a href="#" className="btn btn-green ">Learn More</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="blog-1" className="about-wide-60 blog-section division">
                    <div className="container-fluid">
                        <div className="row d-flex flex-wrap">
                            <div className=" col-12 ">
                                <div className="section-title about-mb-60 text-center">
                                    <h2 className="about-h2-xl">Events &amp; Catering</h2>
                                    <p className="about-p-xl p-md">Aliquam a augue suscipit, luctus neque purus ipsum
                                        neque
                                        undo
                                        dolor
                                        primis libero tempus, blandit a cursus varius magna
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="row d-flex flex-wrap align-items-center justify-content-center ">
                            <div className="col-md-6 col-lg-3 col-8">
                                <div className="about-blog-post">
                                    <div className="blog-post-img">
                                        <div className="about-hover-overlay">
                                            <img className="img-fluid ms-1"
                                                 src={require("../../../assets/images/pages/wine/about/daniel-vogel-unsplash-304.jpg").default}
                                                 alt="blog-post-image"/>
                                        </div>
                                    </div>
                                    <div className="blog-post-txt">
                                        <h5 className="about-h5-lg"><a href="#">Quaerat neque purus ipsum neque
                                            dolor</a></h5>
                                        <p className="grey-color p-md">Quaerat neque purus ipsum neque dolor primis
                                            tempus
                                            impedit</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 col-8">
                                <div className="about-blog-post">
                                    <div className="blog-post-img">
                                        <div className="about-hover-overlay">
                                            <img className="img-fluid ms-1"
                                                 src={require("../../../assets/images/pages/wine/about/marc-antoine-unsplash-304.jpg").default}
                                                 alt="blog-post-image"/>
                                        </div>
                                    </div>
                                    <div className="blog-post-txt">
                                        <h5 className="about-h5-lg"><a href="#">Tempor blandit sapien at
                                            gravida donec ipsum</a></h5>
                                        <p className="grey-color p-md">Neque dolor primis libero tempus impedit tempor
                                            sapien
                                            gravida</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 col-8">
                                <div className="about-blog-post">
                                    <div className="blog-post-img">
                                        <div className="about-hover-overlay">
                                            <img className="img-fluid ms-1"
                                                 src={require("../../../assets/images/pages/wine/about/winery-Lineup-304.jpg").default}
                                                 alt="blog-post-image"/>
                                        </div>
                                    </div>
                                    <div className="blog-post-txt">
                                        <h5 className="about-h5-lg"><a href="#">Neque dolor primis a libero
                                            tempus a tempor</a></h5>
                                        <p className="grey-color p-md">Impedit tempor at donec sapien ipsum a neque
                                            dolor
                                            primis libero</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <NewsLetter/>
            <Footer/>
        </div>

    )
}

export default About