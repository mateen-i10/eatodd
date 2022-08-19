import React, {useEffect, useState} from 'react'
import "./Header.css"
import logo from "../../assets/images/my-images/OMG_logo.png"
import usericon from "../../assets/images/my-images/user-outline.svg"
import {Link} from "react-router-dom"
import FoodCart from "./components/SideCart"
import {ShoppingBag} from "react-feather"
// import UserDropdown from "../../@core/layouts/components/navbar/UserDropdown"

export default function Header() {
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
            <div className="sticky-top">
                <header className="header1">
                    <div className="head-sec-1">
                        <img className="logo" src={logo}/>
                        <div className="headlogin">
                            <img className="usericon" src={usericon}/>
                            <Link className="signtext" to="/login"><b>Sign In</b></Link>
                        </div>
                    </div>
                    <div className="head-sec-2">
                        <Link to="/"><h2>HOME</h2></Link>
                        <Link to="/"><h2>ORDER</h2></Link>
                        <Link to="/menu"><h2>CATERING</h2></Link>
                        <Link to="/wine/homepage"><h2>WINE CLUB</h2></Link>
                        <Link to="/reward"><h2>REWARDS</h2></Link>
                        <Link to="/ourvalues"><h2>OUR VALUES</h2></Link>
                        <Link to="/nutrtion"><h2>NUTRITION</h2></Link>
                    </div>
                    <div className="head-sec-3">
                        {/*<UserDropdown/>*/}
                        <div className="eatOMG">
                            <i className="ri-checkbox-blank-circle-fill"></i>
                            <span className="seprator"></span>
                            <p>Delivery address</p>
                        </div>
                        <ShoppingBag onClick={() => {
                            SetOpenDrawer(true)
                        }}/>
                        {openDrawer && (<div>
                                <FoodCart openDrawer={SetOpenDrawer} isOpenDrawer={openDrawer}/>
                            </div>
                        )}
                    </div>
                </header>
            </div>
        )
    }
    return (
        <div className="sticky-top">
            <header className="header2">
                <div className="logo-toggle">
                    <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="toggle navigation">
                        <span className="hamburger"></span>
                    </button>
                    <div style={{display: width > 540 ? "block" : "none"}}>
                        <img className="logo" src={logo}/>
                    </div>
                </div>
                <div className="eatOMG">
                    <i className="ri-checkbox-blank-circle-fill"></i>
                    <span className="seprator"></span>
                    <p>Find a EatOMG</p>
                </div>
                <i className="ri-shopping-bag-line cart"></i>
                <nav className="nav sticky-top">
                    <div className="nav-sec-1">
                        <Link to="/"><h2>HOME</h2></Link>
                        <Link to="/"><h2>ORDER</h2></Link>
                        <Link to="/menu"><h2>CATERING</h2></Link>
                        <Link to="/wine/homepage"><h2>WINE CLUB</h2></Link>
                        <Link to="/reward"><h2>REWARDS</h2></Link>
                        <Link to="/ourvalues"><h2>OUR VALUES</h2></Link>
                        <Link to="/nutrtion"><h2>NUTRITION</h2></Link>
                    </div>
                    <div className="nav-sec-2">
                        <div className="challanges">
                            <h2><span>EARN POINTS,</span> <span>COMPLETE CHALLENGES,</span>
                                <span>AND REDEEM REWARDS</span></h2>
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