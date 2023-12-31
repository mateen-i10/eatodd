import React, {useEffect, useState} from 'react'
import "./Header.css"
import logo from "../../assets/images/logo/OMG_logo.png"
import usericon from "../../assets/images/my-images/user-outline.svg"
import {Link, useHistory} from "react-router-dom"
import SideCart from "./components/SideCart"
import {ShoppingCart} from "react-feather"
import UserDropdown from "../../@core/layouts/components/navbar/UserDropdown"
import {useDispatch, useSelector} from "react-redux"
import {Button} from "reactstrap"
import {getUserData, isCustomer, isUserLoggedIn} from "../../auth/utils"
import {scrollToOrderAdded} from "../../redux/scroll/scrollSlice"
import {cartTotalPrice, isJoinedByLink} from "../../utility/Utils"
import {toast} from "react-toastify"

export default function Header({isSimple, setKey}) {
    const totalItems = useSelector(state => state.cartItems.total)
    const history = useHistory()
    const [width, setWidth] = useState(window.innerWidth)
    const [isOpen, setIsOpen] = useState(false)
    const [openDrawer, SetOpenDrawer] = useState(false)
    const [count, setCount] = useState(1)
    const dispatch = useDispatch()

    // start hide checkout bar on scroll down and appear on scroll top
    const [isHidden, setIsHidden] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop
            setIsHidden(scrollTop > 0)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    // End hide checkout bar on scroll down and appear on scroll top

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
        document.body.classList.toggle('nav-open', isOpen)
    }, [isOpen])

    const checkOut = () => {
        /*toggleCanvasStart()*/
        const totalPrice = cartTotalPrice()
        if (!getUserData() || !isCustomer()) history.push('/login', {returnURL: '/checkout'})
        else if (!totalPrice || totalPrice <= 0) toast.info(" You have selected add-on items.")
        else if (totalPrice && totalPrice > 0) history.push('/checkout')
    }

    const onCateringClick = () => {
        history.push('/gmap', {returnURL: 'catering', isCatering: true})
    }
    if (width > breakpoint) {
        return (
            <div className="sticky-top">
                <header className="header1">
                    <div className="head-sec-1">
                        <Link to="/"><img className="logo" src={logo} alt="EatOMG"/></Link>
                        {/*here signin Link*/}
                    </div>
                    {!isSimple && <div className="head-sec-2">
                        <Link to="/"><h2 onClick={() => {
                            dispatch(scrollToOrderAdded("home"))
                        }}>HOME</h2></Link>
                        <Link to="/"><h2 onClick={() => {
                            dispatch(scrollToOrderAdded("order"))
                        }}>ORDER</h2></Link>
                        <h2 onClick={onCateringClick} className='cursor-pointer'>CATERING</h2>
                        <Link to="/wine/homepage"><h2 className="text-nowrap">WINE CLUB</h2></Link>
                        <Link to="/reward"><h2>REWARDS</h2></Link>
                        <Link to="/nutrtion"><h2>NUTRITION</h2></Link>
                        {isCustomer() && <Link to="/user"><h2>ACCOUNT</h2></Link>}
                    </div>}
                    {!isSimple && isUserLoggedIn() && <ul className="user-login list-unstyled ms-1 ">
                        <UserDropdown/>
                    </ul>}
                    <div className="head-3 align-items-center cursor-pointer">
                        {/*{!isSimple && <div className=" delivery-addr-bar">
                            <div className="img-separator">
                                <span><img src={require("../../assets/images/logo/logo.png").default}
                                           style={{height: 25, width: 35, marginLeft: -10, marginTop: 6}} alt="EatOMG"/> </span>
                            </div>
                            <div className="delivery-text">
                                <div className="deliver-to-1">Deliver to
                                </div>
                                {userLocation.length ? <div
                                    className="address-1 fw-bolder"
                                    style={{fontSize: "0.9rem"}}>{userLocation[0].action.payload.formatted_address ? userLocation[0].action.payload.formatted_address : userLocation[0].action.payload.name}</div> : ""}
                            </div>
                        </div>}*/}


                        {isUserLoggedIn() ? null : <div className="delivery-addr-bar" style={{width: '60%', border: 'none'}}>
                            <div className="headlogin">
                            <img className="usericon " src={usericon} alt="User"/>
                            <Link className="signtext" to="/login"><b>Sign In</b></Link>
                        </div>
                        </div>}

                        <div className='position-relative'>
                            <ShoppingCart onClick={() => {
                                SetOpenDrawer(true)
                            }}/>
                            <span
                                className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary'
                                style={{marginLeft: "6px"}}>
                                    {totalItems}
                                </span>
                        </div>

                        {openDrawer && (<div>
                                <SideCart openDrawer={SetOpenDrawer} isOpenDrawer={openDrawer}/>
                            </div>
                        )}
                    </div>
                </header>
                {!isHidden && <>
                    {count > 0 && !isJoinedByLink() && totalItems > 0 ? <div className="container-fluid mb-0 pb-0">
                        <div className="row alert alert-primary align-items-center" style={{
                            marginBottom: 0,
                            height: "45px"
                        }
                        }>
                            <div className="col-9 text-center text-black text-uppercase">Items in cart. Please complete your
                                order!
                            </div>
                            <div className="col-3 me-0 text-end" style={{}}>
                                <div className='btn btn-primary btn-sm text-uppercase me-1'
                                     onClick={() => {
                                         checkOut()
                                     }}>Checkout
                                </div>
                                <div className='btn btn-danger btn-sm text-uppercase'
                                     onClick={() => {
                                         setCount(0)
                                         // history.push('/checkout')
                                     }}>X
                                </div>
                            </div>
                        </div>
                    </div> : null }
                </>}

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
                            <Link to="/"><h2 onClick={() => dispatch(scrollToOrderAdded("home"))}>HOME</h2></Link>
                            <Link to="/"><h2 onClick={() => dispatch(scrollToOrderAdded("order"))}>ORDER</h2></Link>
                            <Link to="/catering"><h2>CATERING</h2></Link>
                            <Link to="/wine/homepage"><h2 className="text-nowrap">WINE CLUB</h2></Link>
                            <Link to="/reward"><h2>REWARDS</h2></Link>
                            <Link to="/nutrtion"><h2>NUTRITION</h2></Link>
                            {isUserLoggedIn() ? <Link to="/user"><h2>ACCOUNT</h2></Link> : null}
                        </div>
                    </div>
                    {isUserLoggedIn() ? <div className=" mt-3 mb-2" style={{marginLeft: "75%"}}>
                        <ul className="ms-2 user-login list-unstyled" >
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
                            <Button className="w-100 bg-secondary text-center fs-3 text-uppercase"><Link to="/login" style={{color: "white"}}>Sign In</Link></Button>
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
                                           style={{height: 25, width: 32, marginLeft: -7, marginTop: 7}} alt="EatOMG"/> </span>
                                </div>
                                <div className="m-delivery-text">
                                    <div className="m-deliver-to-1">Deliver to
                                    </div>
                                    {userLocation.length ? <div
                                        className="address-1 fw-bolder"
                                        style={{fontSize: "0.9rem"}}>{userLocation[0].action.payload.formatted_address ? userLocation[0].action.payload.formatted_address : userLocation[0].action.payload.name}</div> : ""}
                                </div>
                            </div>
                            <div className="cursor-pointer position-relative">
                                <ShoppingCart onClick={() => {
                                    SetOpenDrawer(true)
                                }}/>
                                <span
                                    className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary'
                                    style={{marginLeft: "6px"}}>
                                    {totalItems}
                                </span>
                            </div>
                            {openDrawer && (<div>
                                    <SideCart openDrawer={SetOpenDrawer} isOpenDrawer={openDrawer} setKey={setKey}/>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
