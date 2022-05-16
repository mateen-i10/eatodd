import React from 'react'
import Header from "../../shared/header/Header"
import Footer from "../../shared/footer/Footer"
import './Reward.css'
import icon from "../../assets/images/my-images/OMG_icon.png"
// import bgimg from '../../assets/images/my-images/burst.svg'
import img from '../../assets/images/my-images/new.gif'
// import bowl from '../../assets/images/my-images/icon_bowl.gif'
// import bdy from '../../assets/images/my-images/bday.gif'
// import chp from '../../assets/images/my-images/chip.png'
// import mx from '../../assets/images/my-images/x2.gif'
// import iphn from '../../assets/images/my-images/phn.png'
// import mal from '../../assets/images/my-images/mail.png'
// import str from '../../assets/images/my-images/store.png'
// import ply from '../../assets/images/my-images/play.png'

const Reward = () => {
    return (<div>
        <Header/>
        <div className="container-flex" style={{backgroundColor: '#dddddd'}}>
            <div className="container">
                <div className="row" style={{height: '70px'}}>
                    <div className="col-md-6 col-content">
                        <div style={{paddingRight: '5px', display: 'flex', alignItems: 'center'}}>
                            <img className="unlock-img-2" src={icon}
                                 alt="Join Chipotle Rewards. Unlock free Chipotle."/>
                            <h3>EATOMG REWARDS</h3>
                        </div>
                        <h5>The fastest way to free gifts.</h5>
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-6" style={{paddingTop:'100px'}}>
                    <div className="leftside">
                        <div className="hero---small-headline">
                            <p><b>EATOMG REWARDS</b></p>
                        </div>
                        <h1 className="hero__headline-static">
                            <p className="mb-2">THE FASTEST</p>
                            <p className="mb-2">WAY TO GET FREE</p>
                            <p>FOOD</p>
                        </h1>
                        <div className="hero__headline-dynamic">
                            <div className="each-dynamic-children animationOn">
                            </div>
                        </div>
                        <h1 className="hero__headline-static">
                        </h1>
                        <p>Earn points just for ordering your faves and cash them out for a variety of
                            rewards in the Rewards Exchange. Check out your Extras for ways to unlock
                            extra points and collect exclusive badges. Not a member yet? Join now to start
                            earning.</p>
                        <div className="ctaButton">
                            <a href="/order/create-account" className="link-block w-inline-block" target="_PARENT">
                                JOIN NOW
                            </a>
                        </div>
                        <div className="rewardsBannerLegalCopy">
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img style={{ width: '500px'}} src={img}/>
                </div>
            </div>
        </div>
        <Footer/>
    </div>)
}
export default Reward

