import React from 'react'
import './Membership.css'
import HeroSection from "../components/HeroSection"
import NewsLetter from "../components/NewsLetter"
import Headerwine from "../../../shared/wine-header/Header-wine"
import Footer from "../../../shared/footer/Footer"
import {store} from "../../../redux/store"

const Membership = () => {
    console.log(store.getState())
    return (
        <div>
            <Headerwine />
            <HeroSection />
            <div className="container-sm membership-page">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-4">
                        <div className="member-card"
                             style={{width: "100%",
                                 height:"30rem",
                                 boxShadow:"0 6px 20px 0 rgb(34 41 47 / 10%)"}}>
                            <div className="card-body-sec d-flex flex-column align-items-center justify-content-center m-3">
                                <h2 className="mt-3 fw-bolder text-center">Standard Membership</h2>
                                < h4 className="fw-bolder text-center">You Get 2 Bottles of Wine</h4>
                                <p className="text-center" > At wholesale price, with every food order</p>

                                <h4 className="fw-bolder text-center">Unlimited Number Of Orders</h4>
                                <div className="mt-2 fw-bolder member-price"><span className="fs-5 doller-sign">$</span>9.99</div>
                                    <p>per month</p>
                                <div className="btn fw-bolder btn-green">Join Now</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="member-card"
                             style={{width: "100%",
                                 height:"30rem",
                                 boxShadow:"0 6px 20px 0 rgb(34 41 47 / 10%)"}}>
                            <div className="card-body-sec d-flex flex-column align-items-center justify-content-center m-3">
                                <h2 className="mt-3 fw-bolder text-center">Gift Membership</h2>
                                <p className="text-center"> An OMG Wine Club Membership makes a great gift for friends, family, loved ones, or a corporate partner.
                                    Gift Memberships are available in 3, 6, or 12 month periods.</p>
                                <div className="btn fw-bolder btn-green mt-4">Gift Membership</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="member-card"
                             style={{width: "100%",
                                 height:"30rem",
                                 boxShadow:"0 6px 20px 0 rgb(34 41 47 / 20%)"}}>
                            <div className="card-body-sec d-flex flex-column align-items-center justify-content-center m-3">
                                <h2 className="mt-3 fw-bolder">Refer a Friend</h2>
                                <p className="text-center"> Everytime you refer a friend, you get a month free</p>
                                <div className="btn fw-bolder btn-green mt-5">Invite Your Friend</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NewsLetter />
            <Footer />
        </div>
    )
}
export default Membership