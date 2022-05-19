import React from 'react'
import Header from "../../shared/header/Header"
import Footer from "../../shared/footer/Footer"
import './Reward.css'
import icon from "../../assets/images/my-images/OMG_icon.png"
// import bgimg from '../../assets/images/my-images/burst.svg'
import img from '../../assets/images/my-images/new.gif'
import bowl from '../../assets/images/my-images/icon_bowl.gif'
import bdy from '../../assets/images/my-images/bday.gif'
import chp from '../../assets/images/my-images/chip.png'
import mx from '../../assets/images/my-images/x2.gif'
import iphn from '../../assets/images/my-images/phn.png'
import mal from '../../assets/images/my-images/mail.png'
import str from '../../assets/images/my-images/store.png'
import ply from '../../assets/images/my-images/play.png'
import plte from '../../assets/images/my-images/plate.png'
import spt from '../../assets/images/my-images/Spots.png'
import chrt from '../../assets/images/my-images/charity.png'
import n1 from '../../assets/images/my-images/num1.svg'
import n2 from '../../assets/images/my-images/num2.svg'
import n3 from '../../assets/images/my-images/num3.svg'

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

            <div  className="hero--small">
              <p> HOW IT WORKS</p>
            </div>

        <div className="container">
             <div className="row">
                  <div className="col-md-4">
                       <img className="icon_bowl" style={{ width: '280px'}} src={bowl}/>
                           <p className="p1"> 10 points for every $1 spent in the restaurant, in the app, or online.</p>
                  </div>
                       <div className="col-md-4">
                            <img className="chip" style={{ width: '280px'}} src={chp}/>
                              <p className="p1"> Let’s just say we won’t forget you on your birthday.</p>
                       </div>
                          <div className="col-md-4">
                            <img className="bday" style={{ width: '280px'}} src={bdy}/>
                              <p className="p1">Free Chips & Guac after your first purchase as a member.</p>
                          </div>
                       </div>
        </div>
        <div className="container">
             <div className="row">
                <div className="col-md-4">
                  <img className="x2" style={{ width: '280px'}} src={mx}/>
                     <p className="p1">Earn extra points and collect achievement badges.</p>
                </div>
                <div className="col-md-4">
                 <img className="phn" style={{ width: '280px'}} src={iphn}/>
                  <p className="p1">Early access to new menu items and merch.</p>
                </div>
                 <div className="col-md-4">
                   <img className="mail" style={{ width: '280px'}} src={mal}/>
                    <p className="p1">Members get insider info first.</p>
                </div>
             </div>
        </div>
        <div className="container">
             <div className="row">
                 <div className="col-md-6" >
                    <p className="b4">ONE APP,ALL THE WAYS TO EARN FREE CHIPOTLE</p>
                 </div>
                 <div className="col-md-6">
                  <div className="img-str">
                   <img className="store" style={{ width: '150px'}} src={str}/>
                   <img className="play" style={{ width: '150px'}} src={ply}/>
                   </div>
                 </div>
             </div>
        </div>
             <hr className="bb1"/>
             <div className="bld">
                 <p className="b1"> CASH IN YOUR POINTS IN THE </p>
                  <p className="b2"> ALL NEW </p>
                   <p className="b3"> REWARDS EXCHANGE </p>
             </div>

           <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img className="plate" style={{ width: '280px'}} src={plte}/>
                           <h2 className="rd">FREE CHIPOTLE (OBVS)</h2>
                           <p className="p1">10 points for every $1 spent in the restaurant, in the app, or online.</p>
                    </div>
                    <div className="col-md-4">
                        <img className="Spots" style={{ width: '280px'}} src={spt}/>
                        <h2 className="rd">CHIPOTLE GOODS</h2>
                        <p className="p1">You’ll have our line of sustainably-made apparel at your fingertips.</p>
                    </div>
                    <div className="col-md-4">
                        <img className="charity" style={{ width: '280px'}} src={chrt}/>
                        <h2 className="rd">CHARITABLE GIVING</h2>
                        <p className="p1">Put your points towards causes you care about to drive real change.</p>
                    </div>
                </div>
           </div>
           <hr className="bb1"/>
           <div className="bold">
             <p>GETTING REWARDED</p>
             <p>IS EASY</p>
           </div>
             <div className="container">
                 <div className="row">
                   <div className="col-md-4">
                      <img className="num1" style={{ width: '280px'}} src={n1}/>
                         <h2 className="rd">JOIN CHIPOTLE REWARDS</h2>
                         <p className="p1">Join here or download the app to create an account. Pro tip: our app is the best way to experience Chipotle Rewards.</p>
                   </div>
                   <div className="col-md-4">
                       <img className="num2" style={{ width: '280px'}} src={n2}/>
                          <h2 className="rd">ORDER IN THE RESTAURANT OR GO DIGITAL</h2>
                          <p className="p1">Earn rewards your way by coming into our restaurants or by ordering online for pickup, delivery, or Chipotlane.</p>
                   </div>
                   <div className="col-md-4">
                       <img className="num3" style={{ width: '280px'}} src={n3}/>
                          <h2 className="rd">GET REWARDED, FOR REAL</h2>
                          <p className="p1">Redeem your points in the Rewards Exchange to unlock rewards – from burritos and guac to donations and apparel.</p>
                   </div>
                 </div>
             </div>
             <div className="container">
                            <div className="row">
                              <div className="col-md-6">
                              <h3><p className="p2">FORGET TO SCAN?</p></h3>
                            </div>
                                  <div className="col-md-6">
                                    <h3><p className="p2">MORE QUESTIONS?</p></h3>
                                  </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                               <p className="txt">We got your back.</p>
                              </div>
                              <div className="col-md-6">
                                <p className="txt">We have answers.</p>
                              </div>
                            </div>
                             <div className="row">
                                <div className="col-md-6">
                                  <a  className="aa-click" href="/order/retro-credit" target="_self">Points Request</a>
                                </div>
                                <div className="col-md-6">
                                  <a className="aa-click" href="/contact-us" target="_self">Rewards FAQ</a>
                                </div>
                             </div>
                          </div>
             <hr className="bb1"/>
             <div className="container">
                <div className="row">
                   <div className="last-di">
                     <p><a href="/about-us/rewards-terms" target="_blank">Full Chipotle Program terms</a></p>
                   </div>
               </div>
             </div>
        <Footer/>
    </div>
    )
}
export default Reward