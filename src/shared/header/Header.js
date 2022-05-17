import React, {useState, useEffect} from 'react'
import "./Header.css"
import logo from "../../assets/images/my-images/OMG_logo.png"
import usericon from "../../assets/images/my-images/user-outline.svg"
import { NavLink, Link } from "react-router-dom"

export default function Header () {
    const [width, setWidth] = useState(window.innerWidth)
    const [isOpen, setIsOpen] = useState(false)

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
                            <b className="signtext">Sign In</b>
                        </div>
                    </div>
                    <div className="head-sec-2">
                        <NavLink to="/"><h2 className="menuitem">ORDER</h2></NavLink>
                        <NavLink to="/menu"><h2 className="menuitem">CATERING</h2></NavLink>
                        <NavLink to="/"><h2 className="menuitem">OMG WINE</h2></NavLink>
                        <NavLink to="/reward"><h2 className="menuitem">REWARDS</h2></NavLink>
                        <NavLink to="/ourvalues"><h2 className="menuitem">OUR VALUES</h2></NavLink>
                        <NavLink to="/nutrtion"><h2 className="menuitem">NUTRITION</h2></NavLink>
                    </div>
                    <div className="head-sec-3">
                        <div className="eatOMG">
                            <i style={{paddingRight:'10px'}} className="ri-checkbox-blank-circle-fill"></i>
                            <span className="seprator"></span>
                            <div style={{height:'65px'}}>
                                <p>PICKUP FROM Address..</p>
                            </div>
                        </div>
                        <i className="ri-shopping-bag-line cart"></i>
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
                        <NavLink to="/home"><h2 className="menuitem">ORDER</h2></NavLink>
                        <NavLink to="/menu"><h2 className="menuitem">CATERING</h2></NavLink>
                        <NavLink to="/menu"><h2 className="menuitem">OMG WINE</h2></NavLink>
                        <NavLink to="/reward"><h2 className="menuitem">REWARDS</h2></NavLink>
                        <NavLink to="/ourvalues"><h2 className="menuitem">OUR VALUES</h2></NavLink>
                        <NavLink to="/nutrtion"><h2 className="menuitem">NUTRITION</h2></NavLink>
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


// <div>
//     <header>
//         <div className="head-sec-1">
//             <img className="logo" src={logo} />
//             <div className="sign-in">
//                 <i className="ri-user-line"></i>
//                 <p>Sign In</p>
//             </div>
//
//         </div>
//         <div className="head-sec-2">
//             <h2>Order</h2>
//             <h2>Catering</h2>
//             <h2>Rewards</h2>
//             <h2>Our Values</h2>
//             <h2>Nutrition</h2>
//         </div>
//         <div className="head-sec-3">
//             <div className="eatOMG">
//                 <i className="ri-checkbox-blank-circle-fill"></i>
//                 <span className="seprator"></span>
//                 <p>Find a EatOMG</p>
//             </div>
//             <i className="ri-shopping-bag-line cart"></i>
//         </div>
//     </header>
// </div>