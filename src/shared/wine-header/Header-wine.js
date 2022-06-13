import React, {useState, useEffect} from 'react'
import "../header/Header.css"
import { Button } from 'reactstrap'
import logo from "../../assets/images/my-images/omgwineclub-logo-2.png"
import usericon from "../../assets/images/my-images/user-outline.svg"
import { Link } from "react-router-dom"
import FoodCart from "../header/components/FoodCart"
import {ShoppingBag} from "react-feather"

const Headerwine = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const [isOpen, setIsOpen] = useState(false)
    const [openDrawer, SetOpenDrawer] = useState(false)

    const breakpoint = 1200
    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth)
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener("resize", handleResizeWindow)
        return () => {
            // unsubscribe "onComponentDestroy"
            window.removeEventListener("resize", handleResizeWindow)
        }
    }, [])

    useEffect(() => {
        document.body.classList.toggle('nav-open', isOpen)
    }, [isOpen])

    if (width > breakpoint) {
        return (
            <div>
                <header className="header1">
                    <div className="head-sec-1">
                        <img className="logo" src={logo} />
                        <div className="headlogin">
                            <img className="usericon" src={usericon}/>
                            <Link className="signtext" to="/login"><b>Sign In</b></Link>
                        </div>

                    </div>
                    <div className="head-sec-2">
                        <Link to="/"><h2>Home</h2></Link>
                        <Link to="/wine/about"><h2>About</h2></Link>
                        <Link to="/wine/membership"><h2>Membership</h2></Link>
                        <Link to="/wine/shop"><h2>Shop</h2></Link>
                        <Link to="/wine/faq"><h2>F.A.Q's</h2></Link>
                    </div>
                    <div className="head-sec-3">
                        <Link to="/home">
                            <Button.Ripple color='primary'>EATOMG</Button.Ripple>
                        </Link>

                        <ShoppingBag onClick={() => {
                            SetOpenDrawer(true)
                        }} />

                        {openDrawer && (<div>
                                <FoodCart openDrawer={SetOpenDrawer} isOpenDrawer={openDrawer} />
                            </div>
                        )}

                        {/*<i className="ri-shopping-bag-line cart" onClick={() => (*/}
                        {/*    <div>*/}
                        {/*        <FoodCart setCanvasPlacement='start' setCanvasOpen={true} />*/}
                        {/*    </div>*/}
                        {/*)}></i>*/}
                    </div>
                </header>
            </div>
        )
    }

    return (
        <div>
            <header className="header2">
                <div className="logo-toggle">
                    <button  className="nav-toggle" onClick={ () => setIsOpen(!isOpen)} aria-label="toggle navigation">
                        <span className="hamburger"></span>
                    </button>

                    <div style={{display: width > 540 ? "block" : "none"}}>
                        <img className="logo" src={logo} />
                    </div>
                </div>

                <div className="eatOMG">
                    <i className="ri-checkbox-blank-circle-fill"></i>
                    <span className="seprator"></span>
                    <p>Find a EatOMG</p>
                </div>

                <i className="ri-shopping-bag-line cart"></i>

                <nav className="nav">
                    <div className="nav-sec-1">
                        <Link to="/wine/homepage"><h2>Home</h2></Link>
                        <Link to="/wine/about"><h2>About</h2></Link>
                        <Link to="/wine/membership"><h2>Membership</h2></Link>
                        <Link to="/wine/shop"><h2>Shop</h2></Link>
                        <Link to="/wine/faq"><h2>F.A.Q's</h2></Link>
                    </div>
                    <div className="nav-sec-2">
                        <div className="challanges">
                            <h2> <span>EARN POINTS,</span> <span>COMPLETE CHALLENGES,</span> <span>AND REDEEM REWARDS</span> </h2>
                        </div>
                        <button className="create-account-btn">Create an Account</button>
                        <div className="sign-in">
                            <p>Already a member</p>
                            <a href="/">Sign In</a>
                        </div>
                        <div className="state">
                            <div className="rounded-circle w-25">US</div>
                            <p>United States</p>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default Headerwine