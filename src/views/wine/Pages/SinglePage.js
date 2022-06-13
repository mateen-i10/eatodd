import React from 'react'
import './SinglePage.css'
import Headerwine from "../../../shared/wine-header/Header-wine"
import Footer from "../../../shared/footer/Footer"

const SinglePage = () => {
    return (
        <div>
            <Headerwine />
            <div className="single-page">
                <section id="product-1" className="pt-100 single-product division">
                    <div className="container-sm">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="product-preview">
                                    <div className="tabs-content">

                                        <div id="tab-1-img" className="tab-content text-center displayed">
                                            <img className="img-fluid" src={require("../../../assets/images/pages/wine/singlepage/joseph-costa-nsplash 530.jpg").default} alt="menu-image"/>
                                        </div>

                                        <div id="tab-2-img" className="tab-content text-center">
                                            <img className="img-fluid" src="images/menu/burger-04.png" alt="menu-image"/>
                                        </div>

                                        <div id="tab-3-img" className="tab-content text-center">
                                            <img className="img-fluid" src="images/menu/burger-07.png" alt="menu-image"/>
                                        </div>
                                    </div>
                                    <div className="tabs-nav">
                                        <div className="row">
                                            <div className="col-lg-12 text-center">
                                                <ul className="tabs-2 clearfix">

                                                    <li className="tab-link displayed" data-tab="tab-1-img">
                                                        <img src={require("../../../assets/images/pages/wine/singlepage/joseph-costa-nsplash-63.jpg").default} alt="menu-image"/>
                                                    </li>

                                                    <li className="tab-link" data-tab="tab-2-img">
                                                        <img src={require("../../../assets/images/pages/wine/singlepage/j-mckinney-unsplash-55.jpg").default} alt="menu-image"/>
                                                    </li>

                                                    <li className="tab-link" data-tab="tab-3-img">
                                                        <img src={require("../../../assets/images/pages/wine/singlepage/brett-jordan-unsplash-58.jpg").default} alt="menu-image"/>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="product-description">

                                    <div className="project-title">

                                        <h2 className="h2-lg">Smokey House</h2>

                                        <div className="stars-rating">
                                            <span>4.38</span>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                            <span>(3 Customer Reviews)</span>
                                        </div>

                                        <div className="project-price">
                                            <h4 className="h4-xl yellow-color"><span
                                                className="old-price">$9.95</span> $8.60</h4>
                                        </div>

                                    </div>
                                    <div className="product-txt">

                                        <p className="p-md grey-color">Integer congue magna at pretium purus pretium ligula
                                            rutrum risus ultrice luctus
                                            ligula congue a vitae auctor sapien gravida enim ipsum congue morbi pretium
                                        </p>

                                        <div className="product-info">
                                            <p>Portion Size: <span>390g</span></p>
                                            <p>Calories: <span>680Kj</span></p>
                                            <p>Allergies: <span>Lactose, Gluten, Mustard</span></p>
                                            <p>Tags: <span>Burgers, Fast Food, Testo</span></p>
                                        </div>

                                        <input className="qty" type="number" min="1" max="20" value="1"></input>

                                        <div className="add-to-cart-btn bg-green ico-20 text-center">
                                            <a href="cart.html"><span className="fas fa-shopping-cart"></span> Add to
                                                Cart</a>
                                        </div>

                                        <ul className="txt-list">
                                            <li className="list-item"><p className="p-sm">We accept credit cards or cash
                                                to a courier</p></li>
                                            <li className="list-item"><p className="p-sm">Shipping cost is $2 (Free from
                                                $35)</p></li>
                                            <li className="list-item"><p className="p-sm">Order before noon for same day
                                                dispatch</p></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                </section>
                <section id="product-1-data" className="wide-80 single-product-data division">
                    <div className="container-sm">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="">
                                    <div className="tabs-nav">
                                        <div className="row">
                                            <div className="col-lg-12 text-center">
                                                <ul className="tabs-1 clearfix">
                                                    <li className="tab-link current" data-tab="tab-1">
                                                        <h5 className="h5-sm">Description</h5>
                                                    </li>
                                                    <li className="tab-link" data-tab="tab-2">
                                                        <h5 className="h5-sm">Reviews (3)</h5>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tabs-content">
                                        <div id="tab-1" className="tab-content current">
                                            <p>Donec sodales, nibh vel tristique aliquet, nisi libero suscipit diam, sed
                                                tempus ante nulla ut purus.
                                                Donec dolor magna aliquet suscipit in magna dignissim, porttitor hendrerit.
                                                Nunc gravida ultrices a felis eget faucibus. Praesent lorem purus, quis
                                                mollis nisi laoreet vitae consequat tortor
                                            </p>
                                            <ul className="txt-list">

                                                <li className="list-item">
                                                    <p><span className="txt-500">Quaerat sodales sapien undo euismod purus blandit velna</span> vitae
                                                        auctor
                                                        a congue magna tempor sapien eget gravida laoreet turpis urna augue,
                                                        viverra a augue eget, dictum tempor diam pulvinar consectetur purus
                                                        efficitur ipsum primis in cubilia laoreet augue donec
                                                    </p>
                                                </li>

                                                <li className="list-item">
                                                    <p><span
                                                        className="txt-500">Nemo ipsam egestas volute turpis dolores</span> ut
                                                        aliquam quaerat sodales
                                                        sapien congue augue egestas volutpat egestas magna suscipit egestas
                                                        magna ipsum vitae purus
                                                        efficitur ipsum primis in cubilia undo pretium a purus pretium
                                                        ligula
                                                    </p>
                                                </li>

                                            </ul>
                                            <p>Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo.
                                                Velna vitae auctor congue magna
                                                nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis
                                                sapien sem congue tempor gravida donec enim ipsum porta justo integer odio
                                                velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus
                                                donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et
                                                magnis sapien
                                            </p>

                                        </div>
                                        <div id="tab-2" className="tab-content">

                                            <div className="review-2 b-bottom">
                                                <div className="review-2-avatar">
                                                    <img src="images/review-author-1.jpg" alt="testimonial-avatar"/>
                                                </div>
                                                <div className="review-2-txt">

                                                    <div className="stars-rating stars-lg">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star-half-alt"></i>
                                                    </div>
                                                    <div className="review-info clearfix">
                                                        <h5 className="h5-xs">Sean McMarthy</h5>
                                                        <span className="grey-color">December 4, 2020</span>
                                                    </div>
                                                    <p>Etiam sapien sem at sagittis congue an augue massa varius egestas a
                                                        suscipit magna tempus
                                                        an aliquet porta vitae auctor aliqum mullam blandit tempor sapien
                                                        gravida congue eros magna
                                                        nihil impedit tempor. Semper lacus cursus porta lectus enim ipsum
                                                    </p>

                                                </div>

                                            </div>
                                            <div className="review-2 b-bottom">
                                                <div className="review-2-avatar">
                                                    <img src="images/review-author-4.jpg" alt="testimonial-avatar"/>
                                                </div>
                                                <div className="review-2-txt">
                                                    <div className="stars-rating stars-lg">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star-half-alt"></i>
                                                    </div>
                                                    <div className="review-info clearfix">
                                                        <h5 className="h5-xs">Leslie Serpas</h5>
                                                        <span className="grey-color">November 28, 2020</span>
                                                    </div>
                                                    <p>Etiam sapien sem at sagittis congue an augue massa varius egestas a
                                                        suscipit magna tempus
                                                        aliquet porta vitae auctor aliqum mullam blandit tempor sapien
                                                        gravida congue eros magna
                                                        nihil impedit tempor lacus
                                                    </p>

                                                </div>

                                            </div>
                                            <div className="review-2">
                                                <div className="review-2-avatar">
                                                    <img src="images/review-author-3.jpg" alt="testimonial-avatar"/>
                                                </div>

                                                <div className="review-2-txt">
                                                    <div className="stars-rating stars-lg">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star-half-alt"></i>
                                                    </div>
                                                    <div className="review-info clearfix">
                                                        <h5 className="h5-xs">Robert Peterson</h5>
                                                        <span className="grey-color">November 11, 2020</span>
                                                    </div>
                                                    <p>Etiam sapien sem at sagittis congue an augue massa varius egestas a
                                                        suscipit magna tempus
                                                        an aliquet porta vitae auctor aliqum mullam blandit tempor sapien
                                                        gravida congue eros magna
                                                        nihil impedit tempor. Semper lacus cursus porta lectus enim ipsum
                                                        feugiat primis in ultrice
                                                        ligula tempus undo auctor ipsum and mauris lectus enim ipsum
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>

    )
}
export default SinglePage