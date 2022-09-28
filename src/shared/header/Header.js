import React, {useEffect, useState} from 'react'
import "./Header.css"
import logo from "../../assets/images/my-images/OMG_logo.png"
import usericon from "../../assets/images/my-images/user-outline.svg"
import {Link} from "react-router-dom"
import SideCart from "./components/SideCart"
import {ShoppingCart} from "react-feather"
import UserDropdown from "../../@core/layouts/components/navbar/UserDropdown"
import {useSelector} from "react-redux"
import {Button} from "reactstrap"


export default function Header() {
    const [width, setWidth] = useState(window.innerWidth)
    const [isOpen, setIsOpen] = useState(false)
    const [openDrawer, SetOpenDrawer] = useState(false)
    const [isUserLoggedIn, setUserLoggedIn] = useState(false)

    const {userLocation} = useSelector(state => state)
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
    //** ComponentDidMount
    useEffect(() => {
        if (isUserLoggedIn !== null) {
            setUserLoggedIn(true)
        }
    }, [isUserLoggedIn])
    useEffect(() => {
        document.body.classList.toggle('nav-open', isOpen)
    }, [isOpen])

    if (width > breakpoint) {
        return (
            <div className="sticky-top">
                <header className="header1">
                    <div className="head-sec-1">
                        <img className="logo" src={logo}/>
                        {isUserLoggedIn ? null : <div className="headlogin">
                            <img className="usericon" src={usericon}/>
                            <Link className="signtext" to="/login"><b>Sign In</b></Link>
                        </div>}
                    </div>
                    <div className="head-sec-2">
                        <Link to="/"><h2>HOME</h2></Link>
                        <Link to="/"><h2>ORDER</h2></Link>
                        <Link to="/catering"><h2>CATERING</h2></Link>
                        <Link to="/wine/homepage"><h2>WINE CLUB</h2></Link>
                        <Link to="/reward"><h2>REWARDS</h2></Link>
                        <Link to="/nutrtion"><h2>NUTRITION</h2></Link>
                        {isUserLoggedIn ? <Link to="/user"><h2>ACCOUNT</h2></Link> : null}
                    </div>
                    {isUserLoggedIn ? <ul className="user-login list-unstyled">
                        <UserDropdown/>
                    </ul> : null}
                    <div className="head-3 align-items-center cursor-pointer">
                        <div className=" delivery-addr-bar">
                            <div className="img-separator">
                                <span><img src={require("../../assets/images/logo/logo.png").default}
                                           style={{height: 25, width: 33, marginLeft: -8, marginTop: 6}}/> </span>
                            </div>
                            <div className="delivery-text">
                                <div className="deliver-to-1">Deliver to
                                </div>
                                {userLocation.length ? <div
                                    className="address-1 fw-bolder"
                                    style={{fontSize: "0.9rem"}}>{userLocation[0].action.payload.formatted_address ? userLocation[0].action.payload.formatted_address : userLocation[0].action.payload.name}</div> : ""}
                            </div>
                        </div>
                        <ShoppingCart onClick={() => {
                            SetOpenDrawer(true)
                        }}/>
                        {openDrawer && (<div>
                                <SideCart openDrawer={SetOpenDrawer} isOpenDrawer={openDrawer}/>
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
                <div className="logo-toggle mt-1" style={{height: 1}}>
                    <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="toggle navigation">
                        <span className="hamburger"></span>
                    </button>
                </div>
                <div className="eatOMG">
                    <i className="ri-checkbox-blank-circle-fill"></i>
                    <span className="seprator"></span>
                    <p>Find a EatOMG</p>
                </div>
                <div className="mt-1 me-1"><ShoppingCart onClick={() => {
                    SetOpenDrawer(true)
                }}/></div>
                <nav className="nav sticky-top">
                    <div className="nav-sec-1 ">
                        <div className="text-center">
                            <Link to="/"><h2>HOME</h2></Link>
                            <Link to="/"><h2>ORDER</h2></Link>
                            <Link to="/catering"><h2>CATERING</h2></Link>
                            <Link to="/wine/homepage"><h2>WINE CLUB</h2></Link>
                            <Link to="/reward"><h2>REWARDS</h2></Link>
                            <Link to="/nutrtion"><h2>NUTRITION</h2></Link>
                            {isUserLoggedIn ? <Link to="/user"><h2>ACCOUNT</h2></Link> : null}
                        </div>
                    </div>
                    {isUserLoggedIn ? <div className="">
                        <ul className=" mx-auto mt-2 h-25 user-login list-unstyled">
                            <UserDropdown/>
                        </ul>
                    </div> : <div className="nav-sec-2 text-uppercase">
                        {/*<div className="challanges">*/}
                        {/*    <h2><span>EARN POINTS,</span> <span>COMPLETE CHALLENGES,</span>*/}
                        {/*        <span>AND REDEEM REWARDS</span></h2>*/}
                        {/*</div>*/}
                        <Button className="w-75 bg-secondary fs-3 text-uppercase">
                            <Link to="/signup" style={{color: "white"}}>Create an Account</Link>
                        </Button>
                        <div className=" fs-4 mt-2 mb-2 fw-bold">
                            <p>Already a member</p>
                            <Button
                                className="w-100 bg-secondary text-center fs-3 text-uppercase"><Link to="/login"
                                                                                                     style={{color: "white"}}>Sign
                                In</Link></Button>
                        </div>
                        <div className="state">
                            <div className="rounded-circle"
                                 style={{height: 25, width: 25, paddingTop: 2, marginTop: 2}}>US
                            </div>
                            <p>United States</p>
                        </div>
                    </div>}
                    <div className="w-100">
                        <div className="mx-auto d-flex m-nav w-50 align-items-center ">
                            <div className="m-delivery-addr-bar">
                                <div className="">
                                <span><img src={require("../../assets/images/logo/logo.png").default}
                                           style={{height: 25, width: 32, marginLeft: -7, marginTop: 7}}/> </span>
                                </div>
                                <div className="m-delivery-text">
                                    <div className="m-deliver-to-1">Deliver to
                                    </div>
                                    {userLocation.length ? <div
                                        className="address-1 fw-bolder"
                                        style={{fontSize: "0.9rem"}}>{userLocation[0].action.payload.formatted_address ? userLocation[0].action.payload.formatted_address : userLocation[0].action.payload.name}</div> : ""}
                                </div>
                            </div>
                            <div className="cursor-pointer">
                                <ShoppingCart onClick={() => {
                                    SetOpenDrawer(true)
                                }}/>
                            </div>
                            {openDrawer && (<div>
                                    <SideCart openDrawer={SetOpenDrawer} isOpenDrawer={openDrawer}/>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
