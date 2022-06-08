import React from 'react'
import Header from "../../shared/header/Header"
import Footer from "../../shared/footer/Footer"
import './Reward.css'
import img from '../../assets/images/my-images/new.gif'
import bowl from '../../assets/images/my-images/icon_bowl.gif'
import bdy from '../../assets/images/my-images/bday.gif'
import chp from '../../assets/images/my-images/chip.png'

const Reward = () => {
    return (
        <div>
            <Header/>
            <div className="container">
                    <div className="row">
                        <div className="col-md-6 mt-5">
                            <p className="test">EAT REWARDS</p>
                            <h1 className="Headline" style={{fontSize:'60px'}}>
                                THE FASTEST
                                WAY TO GET FREE
                                FOOD
                            </h1>
                            <div className="para">
                                <p>Earn points just for ordering your faves and cash them out for a variety of rewards in the
                                    Rewards Exchange.
                                    Check out your Extras for ways to unlock extra points and collect exclusive badges.
                                    Not a member yet?
                                    Join now to start earning.</p>
                                <p><a>Program Term</a></p>
                            </div>
                            <button type="button" className="btn" style={{backgroundColor:'#57ab00', color:'white', width:'150px' }}>Join Now</button>
                        </div>
                        <div className="col-md-6">
                            <img style={{width:'500px'}} className="new" src={img}/>
                        </div>
                    </div>
                </div>
            <div className="container" style={{paddingTop:'100px', paddingBottom:'100px'}}>
                <div className="row">
                    <h1 className="test2"> HOW IT WORKS</h1>
                    <div className="col-md-4">
                        <img className="icon_bowl" src={bowl}/>
                        <p className="p1"> 10 points for every $1 spent in the restaurant, in the app, or online.</p>
                    </div>
                    <div className="col-md-4">
                        <img className="chip" src={chp}/>
                        <p className="p1"> Let’s just say we won’t forget you on your birthday.</p>
                    </div>
                    <div className="col-md-4">
                        <img className="bday" src={bdy}/>
                        <p className="p1">Free Chips & Guac after your first purchase as a member.</p>
                    </div>
                </div>
            </div>
            {/*<div className="container">*/}
            {/*    <div className="row">*/}
            {/*        <div className="col-md-4">*/}
            {/*            <img className="x2" src={mx}/>*/}
            {/*            <p className="p1">Earn extra points and collect achievement badges.</p>*/}
            {/*        </div>*/}
            {/*        <div className="col-md-4">*/}
            {/*            <img className="phn" src={iphn}/>*/}
            {/*            <p className="p1">Early access to new menu items and merch.</p>*/}
            {/*        </div>*/}
            {/*        <div className="col-md-4">*/}
            {/*            <img className="mail" src={mal}/>*/}
            {/*            <p className="p1">Members get insider info first.</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="container">*/}
            {/*    <div className="row gx-10">*/}
            {/*        <div className="col-md-4">*/}
            {/*            <p className="txt">ONE APP, ALL THE WAYS TO EARN FREE CHIPOTLE</p>*/}
            {/*        </div>*/}
            {/*        <div className="col-md-4">*/}
            {/*            <img className="store" src={str}/>*/}
            {/*        </div>*/}
            {/*        <div className="col-md-4">*/}
            {/*            <img className="play" src={ply}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <Footer/>
        </div>
    )
}
export default Reward

