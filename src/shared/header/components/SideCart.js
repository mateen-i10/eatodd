import React, {useEffect, useState} from 'react'
import {
    Button,
    CardFooter,
    Input,
    Modal,
    ModalBody,
    ModalFooter,
    Offcanvas,
    OffcanvasBody,
    OffcanvasHeader
} from 'reactstrap'
import {UserPlus} from "react-feather"
import './side-cart.css'
import LoginModal from "./loginModal/LoginModal"
import ItemsInCart from "./ItemsInCart/ItemsInCart"
import {Link} from "react-router-dom"
import {getCartData, isObjEmpty, removeMealFromCart} from "../../../utility/Utils"

const Cart = (props) => {
    const [canvasPlacement, setCanvasPlacement] = useState('end')
    const [canvasOpen, setCanvasOpen] = useState(true)
    const [basicNameFoodModal, setBasicNameFoodModal] = useState(false)
    const [openModel, SetModelOpen] = useState(false)
    const [cartItems, setCartItems] = useState()
    const [isMealDeleted, setMealDeleted] = useState(false)
    const chips = require("../../../assets/images/Menu&Order/chips.png").default
    const drink1 = require("../../../assets/images/Menu&Order/drink1.png").default

    useEffect(() => {
        setCartItems({...getCartData()})
    }, [isMealDeleted])

// methods
    const handleRemoveMeal = (index) => {
        const result = removeMealFromCart(index)
        setMealDeleted(result)
    }
    const bagPrice = () => {
        let pricesArr = []
        if (cartItems && cartItems.meals.length > 0) {
            pricesArr = cartItems.meals.map(meal => {
                if (!isObjEmpty(meal)) {
                    return meal.selectedProducts ? meal.selectedProducts.map(p => {
                        const price = p.options.find(op => op.isSelected).price
                        return price * p.selectedQuantity
                }) : 0
                }

            })
        }
        let totalBagPrice = 0
        if (pricesArr.length > 0) {
            totalBagPrice = pricesArr.reduce((pre, next) => {
                return pre + next
            })
        }
        return Number(totalBagPrice)
    }

    const toggleCanvasStart = () => {
        setCanvasPlacement('start')
        setCanvasOpen(!canvasOpen)
        props.openDrawer(!props.isOpenDrawer)
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
    const taxAmount = Number((bagPrice() * (16 / 100)).toFixed(2))
    return (
        <>
            {!cartItems || (cartItems && cartItems.meals.length === 0) ? <div className='demo-inline-spacing'>
                    <Offcanvas style={{width: 500}} direction={canvasPlacement} isOpen={canvasOpen}
                               toggle={toggleCanvasStart}>
                        <OffcanvasHeader toggle={toggleCanvasStart}
                                         style={{marginTop: 10, justifyContent: 'center'}}>
                            <div className="cursor-pointer" onClick={() => SetModelOpen(true)}>
                                <UserPlus style={{marginRight: 10, color: 'rgb(129 190 65)', marginTop: 3}}/>
                                <span className="fs-3 me-3 text-secondary  mt-2"
                                > Register Your
                                self
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
                                    <div className="col-12 fs-1 fw-bolder text-uppercase text-primary text-center ">Your bag
                                        is empty
                                    </div>
                                    <div className="col-12 fs-3 fw-bold text-uppercase text-secondary text-center">Start an
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
                        <OffcanvasHeader toggle={toggleCanvasStart} style={{marginTop: 30, justifyContent: 'center'}}>
                            <div style={{display: 'flex'}}>
                                <UserPlus style={{marginRight: 10, color: 'rgb(129 190 65)', marginTop: 3}}/>
                                <h1 className='header-offCanvas fw-bolder mb-1'
                                    onClick={() => SetModelOpen(true)}>Make It a group
                                    Order.</h1>
                            </div>
                        </OffcanvasHeader>

                        {openModel === true && (
                            <div>
                                <LoginModal setModal={SetModelOpen} IsModelOpen={openModel}/>
                            </div>
                        )}

                        <hr/>
                        <OffcanvasBody style={{paddingBottom: 0}}>

                            <div>
                                <div>
                                    <div className='col-md-12 '>
                                        {cartItems && cartItems.meals.map((meal, index) => {
                                            return !isObjEmpty(meal) ? <div key={`ItemsInCart-${index}`}>
                                                <ItemsInCart foodItems={meal} index={index} removeMeal={handleRemoveMeal}/>
                                                <hr/>
                                            </div> : null
                                        })}
                                    </div>

                                </div>

                                <div style={{marginTop: 20}}>
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
                                </div>

                            </div>

                            <Link to="/home"><Button
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
                                Add Another menu item
                            </Button>
                            </Link>

                            <div style={{backgroundColor: '', marginLeft: -20, marginRight: -20, padding: 20}}>
                                <div className="row">
                                    <div className="col-9 text-uppercase"
                                         style={{fontWeight: 500, color: 'primary', fontSize: "1.4rem"}}>Bag Total
                                    </div>
                                    <div className="col-3"
                                         style={{fontWeight: 500, color: 'primary', fontSize: "1.4rem"}}>$ {bagPrice()}
                                    </div>
                                </div>

                                <Button
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
                                </Button>


                                <div className="row">
                                    <div className="col-9 text-uppercase"
                                         style={{fontWeight: 700, color: 'primary', fontSize: "1.2rem"}}>Subtotal
                                    </div>
                                    <div className="col-3"
                                         style={{fontWeight: 700, color: 'primary', fontSize: "1.4rem"}}>$ {bagPrice()}
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
                                         }}>$ {taxAmount}
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
                                         }}>$ {(bagPrice() + taxAmount).toFixed(2)}
                                    </div>
                                </div>

                                <p style={{color: 'primary', marginTop: 20, fontSize: "1.2rem"}}>Delivery includes
                                    higher
                                    menu
                                    prices and additional
                                    fees to help offset the costs of delivery.</p>

                            </div>

                        </OffcanvasBody>
                        <CardFooter style={{padding: 0}}>
                            <Link to='/checkout'>
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
                                    Checkout
                                </Button>
                            </Link>
                        </CardFooter>
                    </Offcanvas>
                    {RenderDuplicateModal()}
                </div>
            }
        </>
    )
}

export default Cart
