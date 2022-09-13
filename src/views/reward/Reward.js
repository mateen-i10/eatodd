import React from 'react'
import Header from "../../shared/header/Header"
import Footer from "../../shared/footer/Footer"
import './Reward.css'
// import img from '../../assets/images/my-images/new.gif'

const Reward = () => {
    return (
        <div>
            <Header/>
            <div className="container-sm">
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <p className="text-primary fs-2 fw-bolder">EAT REWARDS</p>
                        <h1 className="text-black text-uppercase" style={{fontSize: '55px'}}>
                            our members is like our family
                        </h1>
                        <div className="fs-4 mb-1">
                            <p>Earn points just for ordering your faves and cash them out for a variety of rewards in
                                the
                                Rewards Exchange.
                                Check out your Extras for ways to unlock extra points and collect exclusive badges.
                                Not a member yet?
                                Join now to start earning.</p>
                            <a className="text-decoration-underline " href="#">Program Term</a>
                        </div>
                        <button type="button" className="btn fs-4 "
                                style={{backgroundColor: '#57ab00', color: 'white', width: '150px'}}>Join Now
                        </button>
                    </div>
                    <div className="col-md-6">
                        <img style={{width: '500px'}} className="new mt-5"
                             src={require("../../assets/images/images/cat-1.png").default}/>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5 mb-5"
                 style={{paddingTop: '20px', paddingBottom: '20px', backgroundColor: "#efffd5"}}>
                <div className="row align-items-center justify-content-center g-2">
                    <h1 className="text-center text-primary fw-bolder mb-3 mt-3"> HOW IT WORKS</h1>
                    <div className="col-md-3 col-12 text-center mb-2 ">
                        <img className="mx-auto mb-3" style={{height: 100, width: 100}}
                             src={require("../../assets/images/rewards/earn-point.png").default}/>
                        <p className=" fs-4"> 10 points for every $1 spent in the restaurant, in the app, or
                            online.</p>
                    </div>
                    <div className="col-md-3 col-12 text-center mb-2">
                        <img className="mx-auto mb-3" style={{height: 100, width: 100}}
                             src={require("../../assets/images/rewards/birthday-cake.png").default}/>
                        <p className=" fs-4"> Let’s just say we won’t forget you on your birthday.</p>
                    </div>
                    <div className="col-md-3 col-12 text-center mb-2">
                        <img className="mx-auto mb-3" style={{
                            height: 100,
                            width: 100,
                            color: "green"
                        }} src={require("../../assets/images/rewards/free-food.png").default}/>
                        <p className=" fs-4">Free Chips & Guac after your first purchase as a
                            member.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Reward

