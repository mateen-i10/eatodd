import React, {useEffect, useState} from 'react'
import {
    Button,
    CardFooter, CardText, Col,
    Input,
    Modal,
    ModalBody,
    ModalFooter,
    Offcanvas,
    OffcanvasBody,
    OffcanvasHeader
} from 'reactstrap'
import {UserPlus, Star} from "react-feather"
import './side-cart.css'
import LoginModal from "./loginModal/LoginModal"
import ItemsInCart from "./ItemsInCart/ItemsInCart"
import {
    cartTotalPrice,
    getCartData, isGroupOrder, isJoinedByLink,
    isObjEmpty,
    removeCateringItemFromCart,
    removeItemFromCart
} from "../../../utility/Utils"
import CartItem from "./CartItem"
import {Link, useHistory} from "react-router-dom"
import {getUserData, isCustomer, isUserLoggedIn} from "../../../auth/utils"
import {useSelector} from "react-redux"
import GroupOrderSideCart from "../../../views/GroupOrder/groupOrderSideCart"

import img1 from '../../../assets/images/images/cat-1.png'
import img2 from '../../../assets/images/images/cat-2.png'
import img3 from '../../../assets/images/images/cat-3.png'
import img4 from '../../../assets/images/images/cat-4.png'
import img5 from '../../../assets/images/images/catring-wine.png'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import '@styles/react/libs/swiper/swiper.scss'
import '@styles/base/pages/app-ecommerce-details.scss'
import SwiperCore, { Navigation } from 'swiper'

const Cart = (props) => {
    const [canvasPlacement, setCanvasPlacement] = useState('end')
    const [canvasOpen, setCanvasOpen] = useState(true)
    const [basicNameFoodModal, setBasicNameFoodModal] = useState(false)
    const [openModel, SetModelOpen] = useState(false)
    const [cartItems, setCartItems] = useState()
    const [isDeleted, setDeleted] = useState(false)
    const history = useHistory()

    const {userLocation} = useSelector(state => state)
    const isCartEmpty = !cartItems || isObjEmpty(cartItems) || (cartItems &&
        (!cartItems.meals || (cartItems.meals && cartItems.meals.length === 0)) &&
        (!cartItems.wines || (cartItems.wines && cartItems.wines.length === 0)) &&
        (!cartItems.catering || (cartItems.catering && cartItems.catering.length === 0)))

    useEffect(() => {
        setCartItems({...getCartData()})
        if (isDeleted) setDeleted(false)
    }, [isDeleted])

// methods
    const handleRemove = (index, isCatering) => {
        let result = false
        if (isCatering) {
            result = removeCateringItemFromCart(index)
        } else {
            result = removeItemFromCart(index)
        }
        setDeleted(result)
    }
    const handleRemoveWine = (index) => {
        const result = removeCateringItemFromCart(index, true)
        setDeleted(result)
    }

    const toggleCanvasStart = () => {
        setCanvasPlacement('start')
        setCanvasOpen(!canvasOpen)
        props.openDrawer(!props.isOpenDrawer)
    }

    const checkOut = () => {
        toggleCanvasStart()
        if (!getUserData() || !isCustomer()) history.push('/login', {returnURL: '/checkout'})
        else history.push('/checkout')
    }

    SwiperCore.use([Navigation])

    // ** Related products Slides
    const slides = [
        {
            name: 'Apple Watch Series 6',
            brand: 'Apple',
            ratings: 4,
            price: 399.98,
            img: img1
        },
        {
            name: 'Apple MacBook Pro - Silver',
            brand: 'Apple',
            ratings: 2,
            price: 2449.49,
            img: img2
        },
        {
            name: 'Apple HomePod (Space Grey)',
            brand: 'Apple',
            ratings: 3,
            price: 229.29,
            img: img3
        },
        {
            name: 'Magic Mouse 2 - Black',
            brand: 'Apple',
            ratings: 3,
            price: 90.98,
            img: img4
        },
        {
            name: 'iPhone 12 Pro',
            brand: 'Apple',
            ratings: 4,
            price: 1559.99,
            img: img5
        }
    ]

    // ** Slider params
    const params = {
        className: 'swiper-responsive-breakpoints swiper-container px-4 py-2',
        slidesPerView: 5,
        spaceBetween: 55,
        navigation: true,
        breakpoints: {
            1600: {
                slidesPerView: 4,
                spaceBetween: 55
            },
            1300: {
                slidesPerView: 3,
                spaceBetween: 55
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 55
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 55
            }
        }
    }

    const RenderDuplicateModal = () => {
        return (
            <div className='basic-modal'>
                <Modal isOpen={basicNameFoodModal} toggle={() => setBasicNameFoodModal(!basicNameFoodModal)}>
                    <div toggle={() => setBasicNameFoodModal(!basicNameFoodModal)} className='name-meal-model'><p
                        style={{
                            textAlign: 'center',
                            fontSize: '1.7em',
                            textTransform: 'uppercase',
                            fontWeight: 'bolder',
                            marginTop: 50,
                            color: '#451400'
                        }}>give this meal a name</p></div>
                    <ModalBody>
                        <div className='col-8' style={{marginLeft: 80}}>
                            <Input type='text' placeholder='Enter Meal Name' style={{
                                color: '#451400',
                                borderRadius: 0,
                                borderLeft: 0,
                                borderRight: 0,
                                borderTop: 0
                            }}/>
                        </div>
                    </ModalBody>
                    <ModalFooter style={{justifyContent: 'center', marginBottom: 20, marginTop: 30}}>
                        <Button color='primary' onClick={() => setBasicNameFoodModal(!basicNameFoodModal)}>
                            Cancel
                        </Button>
                        <Button color='primary' onClick={() => setBasicNameFoodModal(!basicNameFoodModal)}>
                            Save
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
    const taxAmount = Number((cartTotalPrice() * (0 / 100)).toFixed(2))
    return (
        <>
            {!isGroupOrder() && isCartEmpty ? <div className='demo-inline-spacing'>
                <Offcanvas style={{width: 500}} direction={canvasPlacement} isOpen={canvasOpen} toggle={toggleCanvasStart}>
                    <OffcanvasHeader toggle={toggleCanvasStart}
                                     style={{marginTop: 10, justifyContent: 'center'}}>
                        <div className="cursor-pointer" onClick={() => SetModelOpen(true)}>
                            <UserPlus style={{marginRight: 10, color: 'rgb(129 190 65)', marginTop: 3}}/>
                            <span className="fs-3 me-3 text-secondary  mt-2"
                            > Register Your Self
                            </span>
                        </div>
                    </OffcanvasHeader>

                    {openModel === true && (
                        <div>
                            <LoginModal setModal={SetModelOpen} IsModelOpen={openModel}/>
                        </div>
                    )}
                    <hr/>
                    <OffcanvasBody style={{paddingBottom: 0}}>
                        <div className="container" style={{
                            marginTop: "25%"

                        }}>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-12 fs-1 fw-bolder text-uppercase text-primary text-center ">Your
                                    bag
                                    is empty
                                </div>
                                <div className="col-12 fs-3 fw-bold text-uppercase text-secondary text-center">Start
                                    an
                                    order
                                    for yourself, or you and your friends.
                                </div>
                            </div>
                        </div>

                    </OffcanvasBody>
                    <CardFooter style={{padding: 0}}>
                        <Button
                            color='primary'
                            onClick={toggleCanvasStart}
                            style={{
                                marginBottom: 0,
                                height: 60,
                                borderRadius: 0,
                                fontSize: '2em',
                                textTransform: 'uppercase'
                            }}
                            {...(canvasPlacement === 'start' || canvasPlacement === 'end' ? {block: true} : {})}
                        >
                            Start my order
                        </Button>
                    </CardFooter>
                </Offcanvas>
            </div> : <div className='demo-inline-spacing'>
                <Offcanvas style={{width: 500}} direction={canvasPlacement} isOpen={canvasOpen}
                           toggle={toggleCanvasStart}>
                    <div className="mx-auto delivery-addr-bar mt-1 " style={{width: "50%", height: 54}}>
                        <div className="img-separator">
                                <span><img src={require("../../../assets/images/logo/logo.png").default}
                                           style={{height: 25, width: 33, marginLeft: -8, marginTop: 2}}/> </span>
                        </div>
                        <div className="delivery-text">
                            <div className="deliver-to-1">Deliver to
                            </div>
                            {userLocation.length ? <div
                                className="address-1 fw-bolder"
                                style={{fontSize: "0.9rem"}}>{userLocation[0].action.payload.formatted_address ? userLocation[0].action.payload.formatted_address : userLocation[0].action.payload.name}</div> : ""}
                        </div>
                    </div>
                    {isCustomer() && (
                        <OffcanvasHeader toggle={toggleCanvasStart} style={{marginTop: 1, justifyContent: 'center'}}>

                            {!isGroupOrder() && !isJoinedByLink() && cartItems && cartItems.meals && cartItems.meals.length > 0 && <div style={{display: 'flex'}}>
                                <UserPlus style={{marginRight: 10, color: 'rgb(129 190 65)', marginTop: 3}}/>
                                <Link to="/groupOrder">
                                    <h1 className='header-offCanvas fw-bolder mb-1' onClick={() => toggleCanvasStart()}>
                                        Make It a group Order.
                                    </h1>
                                </Link>
                            </div>}
                        </OffcanvasHeader>
                    )}
                    {openModel === true && (
                        <div>
                            <LoginModal setModal={SetModelOpen} IsModelOpen={openModel}/>
                        </div>
                    )}

                    <hr/>
                    <OffcanvasBody style={{paddingBottom: 0}}>
                        {isGroupOrder() ? <GroupOrderSideCart/> : <div>
                            <div>
                                <div className='col-md-12 '>
                                    {cartItems && cartItems.meals && cartItems.meals.map((meal, index) => {
                                        return !isObjEmpty(meal) ? <div key={`ItemsInCart-${index}`}>
                                            <ItemsInCart foodItems={meal}
                                                         index={index}
                                                         mainSectionName={meal.mealName}
                                                         menuName={meal.categoryName}
                                                         removeMeal={handleRemove}/>
                                            <hr/>
                                        </div> : null
                                    })}
                                    {cartItems && cartItems.catering && cartItems.catering.map((item, index) => {
                                        return !isObjEmpty(item) ? <div key={`ItemsInCart-${index}`}>
                                            <ItemsInCart foodItems={item}
                                                         index={index}
                                                         mainSectionName={item.name}
                                                         menuName={''}
                                                         removeMeal={handleRemove}
                                                         isCatering={true}
                                            />
                                            <hr/>
                                        </div> : null
                                    })}
                                    {cartItems && cartItems.wines && cartItems.wines.length > 0 && <div className="row">
                                        <div className='col-9 fs-3 fw-bolder text-uppercase'>wines</div>
                                        <div className='col-md-2' style={{marginLeft: -15}}>
                                            <h6 style={{
                                                fontSize: 20,
                                                marginLeft: -15,
                                                fontWeight: 'bolder'
                                            }}>${cartItems.wines.map(p => {
                                                return p.selectedQuantity * p.price
                                            }).reduce((final, val) => {
                                                return final + val
                                            })}
                                            </h6>
                                        </div>
                                    </div>}
                                    {cartItems && cartItems.wines && cartItems.wines.map((wine, index) => {
                                        return !isObjEmpty(wine) ? <div key={`ItemsInCart-${index}`}>
                                            <CartItem item={wine} index={index} removeItem={handleRemoveWine}/>
                                        </div> : null
                                    })}

                                </div>
                            </div>

                            {/*<div style={{marginTop: 20}}>
                                    <h5 style={{
                                        textAlign: 'center',
                                        fontSize: "1.3rem",
                                        fontWeight: 'bolder',
                                        marginBottom: 15,
                                        textTransform: "uppercase"
                                    }}>Complete your meal</h5>
                                    <div className="row" style={{justifyContent: 'center'}}>
                                        <div className="col-md-3" style={{padding: 0}}>
                                            <img src={chips} alt="chips"
                                                 style={{backgroundColor: 'transparent', width: 100, height: 100}}/>
                                            <h6 style={{
                                                textAlign: 'center',
                                                fontSize: "1.2rem",
                                                marginTop: 10
                                            }}>Chips</h6>
                                            <p style={{
                                                textAlign: 'center',
                                                marginTop: 22,
                                                fontSize: "1.1rem"
                                            }}>$1.95</p>
                                        </div>
                                        <div className="col-md-3" style={{padding: 0, marginLeft: 35, marginRight: 35}}>
                                            <img className="img-fluid" src={chips} alt="chips"
                                                 style={{backgroundColor: 'transparent', width: 100, height: 100}}/>
                                            <h6 style={{textAlign: 'center', fontSize: "1.2rem", marginTop: 10}}>Chips &
                                                Guac</h6>
                                            <p style={{
                                                textAlign: 'center',
                                                marginTop: 22,
                                                fontSize: "1.1rem"
                                            }}>$4.80</p>
                                        </div>
                                        <div className="col-md-3" style={{padding: 0}}>
                                            <img src={drink1} alt="coco-cola"
                                                 style={{backgroundColor: 'transparent', width: 100, height: 100}}/>
                                            <h6 style={{textAlign: 'center', fontSize: "1.2rem", marginTop: 10}}>Mexican
                                                Coco-Cola</h6>
                                            <p style={{textAlign: 'center', fontSize: "1.1rem"}}>$3.65</p>
                                        </div>
                                    </div>
                                </div>*/}

                        </div>}

                        <div>
                            <div className='mt-4 mb-2 text-center'>
                                <h4>Related Products</h4>
                                <CardText>People also search for this items</CardText>
                            </div>
                            <Swiper {...params}>
                                {slides.map(slide => {
                                    return (
                                        <SwiperSlide key={slide.name}>
                                            <Col lg={12}>
                                                <a href='/' onClick={e => e.preventDefault()}>
                                                    <div className='img-container w-1500 mx-auto py-75'>
                                                        <img src={slide.img} alt='swiper 1' className='img-fluid' />
                                                    </div>
                                                    <div className='item-heading'>
                                                        <h5 className=' mb-0'>{slide.name}</h5>
                                                    </div>
                                                    <div className='item-meta'>
                                                        <CardText className='text-primary mb-0'>${slide.price}</CardText>
                                                    </div>
                                                </a>
                                            </Col>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>

                        {/*<Link to="/home"><Button
                                outline
                                color='secondary'
                                onClick={toggleCanvasStart}
                                style={{
                                    marginBottom: 30,
                                    borderRadius: 0,
                                    height: 55,
                                    fontSize: "1.5rem",
                                    textTransform: 'uppercase'
                                }}
                                {...(canvasPlacement === 'start' || canvasPlacement === 'end' ? {block: true} : {})}
                            >
                                Add menu item
                            </Button>
                            </Link>*/}

                        <div style={{backgroundColor: '', marginLeft: -20, marginRight: -20, padding: 20}}>
                            {/*<div className="row">
                                    <div className="col-9 text-uppercase"
                                         style={{fontWeight: 500, color: 'primary', fontSize: "1.4rem"}}>Bag Total
                                    </div>
                                    <div className="col-3"
                                         style={{fontWeight: 500, color: 'primary', fontSize: "1.4rem"}}>$ {bagPrice() ?? 0}
                                    </div>
                                </div>*/}

                            {!isUserLoggedIn() && !isJoinedByLink() && <Button
                                color='secondary'
                                outline
                                onClick={() => SetModelOpen(true)}
                                style={{
                                    marginBottom: 20,
                                    marginTop: 30,
                                    borderRadius: 0,
                                    height: 55,
                                    fontSize: "1.5rem",
                                    textTransform: 'uppercase'
                                }}
                                {...(canvasPlacement === 'start' || canvasPlacement === 'end' ? {block: true} : {})}
                            >
                                sign in to use rewards
                            </Button>}


                            <div className="row">
                                <div className="col-9 text-uppercase"
                                     style={{fontWeight: 700, color: 'primary', fontSize: "1.2rem"}}>Subtotal
                                </div>
                                <div className="col-3"
                                     style={{
                                         fontWeight: 700,
                                         color: 'primary',
                                         fontSize: "1.4rem"
                                     }}>$ {cartTotalPrice() ?? 0}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-9 text-uppercase"
                                     style={{fontWeight: 500, color: 'primary', fontSize: "1.2rem"}}>Tax
                                </div>
                                <div className="col-3"
                                     style={{
                                         fontWeight: 500,
                                         color: 'primary',
                                         fontSize: "1.4rem"
                                     }}>$ {taxAmount ?? 0}
                                </div>
                            </div>

                            <hr style={{color: 'primary'}}/>

                            <div className="row">
                                <div className="col-9 text-uppercase"
                                     style={{fontWeight: 'bolder', color: 'primary', fontSize: "1.4rem"}}>Total
                                </div>
                                <div className="col-3"
                                     style={{
                                         fontWeight: 'bolder',
                                         color: 'primary',
                                         fontSize: "1.4rem"
                                     }}>$ {(cartTotalPrice() + taxAmount).toFixed(2) ?? 0}
                                </div>
                            </div>

                            <p style={{color: 'primary', marginTop: 20, fontSize: "1.2rem"}}>Delivery includes
                                higher
                                menu
                                prices and additional
                                fees to help offset the costs of delivery.</p>

                        </div>

                    </OffcanvasBody>
                    {!isJoinedByLink() && <CardFooter style={{padding: 0}}>
                        <Button
                            color='primary'
                            onClick={checkOut}
                            style={{
                                marginBottom: 0,
                                height: 60,
                                borderRadius: 0,
                                fontSize: '2em',
                                textTransform: 'uppercase'
                            }}
                            {...(canvasPlacement === 'start' || canvasPlacement === 'end' ? {block: true} : {})}
                        >
                            Checkout
                        </Button>
                    </CardFooter>}
                </Offcanvas>
                {RenderDuplicateModal()}
            </div>
            }
        </>
    )
}

export default Cart
