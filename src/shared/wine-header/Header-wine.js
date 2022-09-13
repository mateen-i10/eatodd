import React, {useEffect, useState} from 'react'
import "../header/Header.css"
import {Button} from 'reactstrap'
import logo from "../../assets/images/my-images/omgwineclub-logo-2.png"
import usericon from "../../assets/images/my-images/user-outline.svg"
import {Link} from "react-router-dom"
import {isUserLoggedIn} from "../../auth/utils"
import UserDropdown from "../../@core/layouts/components/navbar/UserDropdown"

const HeaderWine = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const [isOpen, setIsOpen] = useState(false)
    const [isuserlogedin, setuserloginedin] = useState(false)

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
        if (isUserLoggedIn() !== null) {
            setuserloginedin(true)
        }
    }, [isuserlogedin])
    useEffect(() => {
        document.body.classList.toggle('nav-open', isOpen)
    }, [isOpen])

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

    console.log(isuserlogedin)
    if (width > breakpoint) {
        return (
            <div className="sticky-top">
                <header className="w-header1">
                    <div className="head-sec-1">
                        <img className="logo" src={logo}/>
                        <div className="headlogin">
                            <img className="usericon" src={usericon}/>
                            <Link className="signtext" to="/login"><b>Sign In</b></Link>
                        </div>
                    </div>
                    <div className="head-sec-2">
                        <Link to="/wine/homepage"><h2>Home</h2></Link>
                        <Link to="/wine/membership"><h2>Membership</h2></Link>
                        <Link to="/wine/faq"><h2>F.A.Q's</h2></Link>
                    </div>
                    <div className="head-sec-wine">
                        <Link to="/home">
                            <Button.Ripple color='primary'>EATOMG</Button.Ripple>
                        </Link>

                    </div>
                </header>
            </div>
        )
    }

    return (
        <div>
            <header className="header2" style={{backgroundColor: "white"}}>
                <div className="logo-toggle">
                    <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="toggle navigation">
                        <span className="hamburger"></span>
                    </button>

                    <div style={{display: width > 540 ? "block" : "none"}}>
                        <img className="logo" src={logo}/>
                    </div>
                </div>

                <div className="eatOMG mx-auto">
                    <i className="ri-checkbox-blank-circle-fill"></i>
                    <span className="seprator"></span>
                    <p>Find a EatOMG</p>
                </div>


                <nav className="nav ">
                    <div className="nav-sec-1 text-center">
                        <Link to="/wine/homepage"><h2>Home</h2></Link>
                        <Link to="/wine/membership"><h2>Membership</h2></Link>
                        <Link to="/wine/faq"><h2>F.A.Q's</h2></Link>
                    </div>
                    <div className=" text-center">
                        <Link to="/home">
                            <Button.Ripple color='primary' style={{width: "80%", marginTop: 30}}>EATOMG</Button.Ripple>
                        </Link>

                    </div>
                    {isuserlogedin ? <div className="text-center  mx-auto"
                                          style={{marginTop: 30, display: width < 1200 ? "block" : "flex"}}>
                        <UserDropdown/>
                    </div> : <div className="nav-sec-2">
                        <div className="challanges">
                            <h2><span>EARN POINTS,</span> <span>COMPLETE CHALLENGES,</span>
                                <span>AND REDEEM REWARDS</span></h2>
                        </div>
                        <button className="create-account-btn">Create an Account</button>
                        <div className="sign-in">
                            <p className="d-block">Already a member</p>
                            <a href="/">Sign In</a>
                        </div>
                        <div className="state">
                            <div className="rounded-circle" style={{width: 30, height: 30, paddingTop: 5}}>US</div>
                            <p>United States</p>
                        </div>
                    </div>}
                </nav>
            </header>
        </div>
    )
}
export default HeaderWine
