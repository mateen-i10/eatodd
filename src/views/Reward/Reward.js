import React, {Component} from 'react'
import Header from "../../shared/header/Header"
import Footer from "../../shared/footer/Footer"
import './Reward.css'
import bgimg from '../../assets/images/my-images/burst.svg'
import img from '../../assets/images/my-images/new.gif'
import bowl from '../../assets/images/my-images/icon_bowl.gif'
import bdy from '../../assets/images/my-images/bday.gif'
import chp from '../../assets/images/my-images/chip.png'
import mx from '../../assets/images/my-images/x2.gif'
import iphn from '../../assets/images/my-images/phn.png'
import mal from '../../assets/images/my-images/mail.png'
import str from '../../assets/images/my-images/store.png'
import ply from '../../assets/images/my-images/play.png'

const Reward = () => {
        return (
            <div>
                <Header/>
                    <div className="container">
                        <div className="row-text">
                           <p className="test">CHIPOTLE REWARDS</p>
                           <h1 className="Headline">

                                            <p>THE FASTEST</p>
                                            <p>WAY TO FREE</p>
                                            <p>CHIPOTLE</p>

                           </h1>

                            <div className="para">
                              <p>Earn points just for ordering your faves and cash them out for a variety of rewards in the Rewards Exchange.
                              Check out your Extras for ways to unlock extra points and collect exclusive badges.
                              Not a member yet?
                              Join now to start earning.</p>
                              <p><a>Program Term</a></p>
                           </div>
                            <button className="btn">JoinNow</button>

                          </div>
                           <div className="row">
                                       <div className="img">
                                        <img class="burst" src={bgimg}/>
                                       </div>
                                       <div className="img-2">
                                        <img class="new" src={img}/>
                                       </div>

                           </div>

                    </div>

                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <h1 className="test2"> HOW IT WORKS</h1>
                        </div>
                      </div>
                      </div>
                      <div className="container">
                         <div className="row">
                                                 <div className="col-md-4">
                                                  <img class="icon_bowl" src={bowl}/>
                                                  <p className="p1"> 10 points for every $1 spent in the restaurant, in the app, or online.</p>
                                                 </div>
                                                  <div className="col-md-4">
                                                     <img class="chip" src={chp}/>
                                                     <p className="p1"> Let’s just say we won’t forget you on your birthday.</p>
                                                  </div>
                                                 <div className="col-md-4">
                                                   <img class="bday" src={bdy}/>
                                                   <p className="p1">Free Chips & Guac after your first purchase as a member.</p>
                                                 </div>
                                                 </div>
                      </div>

                       <div className="container">
                           <div className="row">
                              <div className="col-md-4">
                              <img class="x2" src={mx}/>
                                <p className="p1">Earn extra points and collect achievement badges.</p>
                              </div>
                              <div className="col-md-4">
                              <img class="phn" src={iphn}/>
                                  <p className="p1">Early access to new menu items and merch.</p>
                              </div>
                              <div className="col-md-4">
                              <img class="mail" src={mal}/>
                                  <p className="p1">Members get insider info first.</p>
                              </div>
                           </div>
                       </div>
                       <div className="container">
                           <div className="row gx-10">
                              <div className="col-md-4">
                                   <p className="txt">ONE APP, ALL THE WAYS TO EARN FREE CHIPOTLE</p>
                              </div>
                              <div className="col-md-4">
                                <img class="store" src={str}/>
                               </div>
                               <div className="col-md-4">
                                       <img class="play" src={ply}/>
                               </div>
                           </div>
                       </div>

                <Footer/>
            </div>
        )
}
export default Reward

