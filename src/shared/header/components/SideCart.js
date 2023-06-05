import React, {useEffect, useState} from 'react'
import {
    Button,
    CardFooter, CardText, Col, Form, FormFeedback, FormGroup,
    Input,
    Modal,
    ModalBody,
    ModalFooter,
    Offcanvas,
    OffcanvasBody,
    OffcanvasHeader, Row
} from 'reactstrap'
import {UserPlus} from "react-feather"
import './side-cart.css'
import ItemsInCart from "./ItemsInCart/ItemsInCart"
import {
    cartTotalPrice, editItemInCart,
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
import {Swiper, SwiperSlide} from 'swiper/react/swiper-react'
import '@styles/react/libs/swiper/swiper.scss'
import '@styles/base/pages/app-ecommerce-details.scss'
import SwiperCore, {Navigation} from 'swiper'
import httpService, {baseURL} from "../../../utility/http"
import ProductImage from "../../../views/home/components/product/ProductImage"
import Select from "react-select"
import {toast} from "react-toastify"

const Cart = (props) => {
    const [canvasPlacement, setCanvasPlacement] = useState('end')
    const [canvasOpen, setCanvasOpen] = useState(true)
    const [basicNameFoodModal, setBasicNameFoodModal] = useState(false)
    const [cartItems, setCartItems] = useState()
    const [isDeleted, setDeleted] = useState(false)

    const [recommendedList, setRecommendedList] = useState([])
    const [mealsOptions, setMealsOptions] = useState(null)
    const [getRecommendedProduct, setGetRecommendedProduct] = useState(null)
    const [selectMeal, setSelectMeal] = useState(null)
    const [restaurantId, setRestaurantId] = useState(null)
    const [selectedQuantity, setSelectedQuantity] = useState(0)
    const [restaurantDetails, setRestaurantDetails] = useState(null)
    console.log('selectedQ', selectedQuantity)

    console.log('getRecommendedProduct', getRecommendedProduct)

    const history = useHistory()

    const [recommendedProductModal, setRecommendedProductModal] = useState(false)

    //const dispatch = useDispatch()

    const {userLocation} = useSelector(state => state)
    const isCartEmpty = !cartItems || isObjEmpty(cartItems) || (cartItems &&
        (!cartItems.meals || (cartItems.meals && cartItems.meals.length === 0)) &&
        (!cartItems.wines || (cartItems.wines && cartItems.wines.length === 0)) &&
        (!cartItems.catering || (cartItems.catering && cartItems.catering.length === 0)))

    console.log('cartItems-----------------', getCartData())

    useEffect(() => {
        setCartItems({...getCartData()})
        if (isDeleted) setDeleted(false)
    }, [isDeleted])

    useEffect(() => {
        const ids = cartItems && cartItems.catering ? cartItems?.catering?.map(c => {
            const selected = c.selectedProducts?.map(s => {
                return s.productId
            })
            return selected
        }).toString() : cartItems && cartItems.meals ? cartItems?.meals?.map(c => {
            const selected = c.selectedProducts?.map(s => {
                return s.id
            })
            return selected
        }).toString() : ''
        if (ids) {
            httpService._get(`${baseURL}GeneralRecommendation/GetGeneralRecommendation?ids=${ids}`)
                .then(response => {
                    console.log('resGet', response)
                    if (response.status === 200 && response.data.statusCode === 200) {
                    }
                    const data = response.data?.data
                    if (data) {
                        const finalData = data.map(item => ({
                            img: item.attachment,
                            id: item.id,
                            name: item.name,
                            wholePrice: item.wholePrice
                            //quantity: item.quantity
                        }))
                        console.log('finalData', finalData)
                        setRecommendedList(finalData)
                    }
                })

            /*dispatch(loadGeneralRecommendationsAgainstProduct(ids))
            console.log('ids2', ids)*/
        }
    }, [cartItems])

    useEffect(() => {
        const id = localStorage.getItem("restaurantId")
        setRestaurantId(id)
        if (id) {
            httpService
                ._get(`${baseURL}Restaurant/${id}`)
                .then(response => {
                    console.log(restaurantId)
                    console.log('restGetbuid', response.data)
                    // Assuming the restaurant details are present in the response's "data" field
                    setRestaurantDetails(response.data)
                })
                .catch(error => {
                    // Handle error if API call fails
                    console.log(error)
                })
        }
    }, [])

    useEffect(() => {
        const mealsOptions1 = cartItems?.meals?.map((m, index) => {
            return {label: m.mealName, value: index}
        })
        setMealsOptions(mealsOptions1)
    }, [recommendedProductModal])

    const addRecommended = (slide, e) => {
        e.preventDefault()
        setRecommendedProductModal(!recommendedProductModal)
        setGetRecommendedProduct(slide)
    }

    const saveRecommendedMeals = () => {
        const meal = cartItems && cartItems?.meals ? cartItems.meals[selectMeal.value] : undefined
        console.log('mealOnSave1', meal)
        if (meal) {
            meal.selectedProducts.push({
                ...getRecommendedProduct,
                selectedQuantity: Number(selectedQuantity),
                price: getRecommendedProduct.wholePrice,
                calculatedPrice: getRecommendedProduct.wholePrice * Number(selectedQuantity)
            })
            meal.totalPrice = meal.totalPrice + (getRecommendedProduct.wholePrice * Number(selectedQuantity))
            editItemInCart(meal, selectMeal.value)
            console.log('mealOnSave', meal)
        }
    }

    const RenderRecommendedProductsModal = () => {
        return (
            <div className='basic-modal '>
                <Modal isOpen={recommendedProductModal}
                       toggle={() => setRecommendedProductModal(!recommendedProductModal)}>
                    <div className='name-meal-model text-center my-1'><h2>Select Meal to Assign Product</h2></div>
                    <Form>
                        <ModalBody>
                            <FormGroup>
                                <div className='col-8' style={{marginLeft: 80}}>
                                    <Select
                                        onChange={e => setSelectMeal(e)}
                                        options={mealsOptions}
                                        //closeMenuOnSelect={true}
                                        //isMulti = {false}
                                    />
                                </div>
                                <div className='col-8 mt-2' style={{marginLeft: 80}}>
                                    <Input type='number' onChange={e => setSelectedQuantity(e.target.value)}
                                           placeholder='Enter Quantity' style={{
                                        color: '#451400'
                                    }}/>
                                </div>
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter style={{justifyContent: 'center'}}>
                            <Button color='danger' onClick={() => {
                                setRecommendedProductModal(!recommendedProductModal)
                            }}>
                                Cancel
                            </Button>
                            <Button color='primary' /*disabled={mealName.length < 1}*/
                                    onClick={() => {
                                        saveRecommendedMeals()
                                        setRecommendedProductModal(!recommendedProductModal)
                                    }}
                            >
                                Save
                            </Button>
                        </ModalFooter>
                    </Form>
                </Modal>
            </div>
        )
    }

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
        const totalPrice = cartTotalPrice()
        if (!getUserData() || !isCustomer()) history.push('/login', {returnURL: '/checkout'})
        else if (!totalPrice || totalPrice <= 0) toast.info(" You have selected add-on items.")
        else if (totalPrice && totalPrice > 0) history.push('/checkout')
    }

    SwiperCore.use([Navigation])

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

    // console.log(cartItems, "lets see coming from cart")
    //
    // if (cartItems.meals) {
    //     toast.success("worked its the meals")
    // }

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
                        }}>Give this meal a name</p></div>
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
                <Offcanvas style={{width: 500}} direction={canvasPlacement} isOpen={canvasOpen}
                           toggle={toggleCanvasStart}>
                    <OffcanvasHeader toggle={toggleCanvasStart}
                                     style={{marginTop: 10, justifyContent: 'center'}}>
                        {!isUserLoggedIn() &&
                            <Link to='/login' className="cursor-pointer">
                                <UserPlus style={{marginRight: 10, color: 'rgb(129 190 65)', marginTop: 3}}/>
                                <span className="fs-3 me-3 text-black text-capitalize  mt-2"
                                > Sign In or Register Your Self
                            </span>
                            </Link>}
                    </OffcanvasHeader>

                    <hr/>
                    <OffcanvasBody style={{paddingBottom: 0}}>
                        <div className="container" style={{
                            marginTop: "25%"

                        }}>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-12 fs-1 fw-bolder text-uppercase text-primary text-center ">Your
                                    Bag is empty
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
                    <div className="container" style={{height: 35}}>
                        <div className='row'>
                            <div className="border border-1 border-primary round w-50 mx-auto d-flex mt-1 text-primary"
                                 style={{height: 35}}>
                                <div className="my-auto">
                                    <span><img alt="img" src={require("../../../assets/images/logo/logo.png").default}
                                               style={{height: 25, width: 35, marginLeft: -10}}/> </span>
                                </div>
                                <div className="my-auto text-uppercase">
                                    {!restaurantDetails ? (
                                        <div className="fs-6">Deliver to</div>
                                    ) : (
                                        <div className="fs-6">Pick from</div>
                                    )}
                                    {userLocation.length ? (
                                        <div className="fw-bolder" style={{ fontSize: "0.8rem" }}>
                                            {userLocation[0].action.payload.formatted_address ? userLocation[0].action.payload.formatted_address : userLocation[0].action.payload.name}
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </div>
                                {restaurantDetails && (
                                    <div className="d-flex align-items-center">
                                        <div className="my-auto fw-bolder" style={{ fontSize: "0.9rem", marginLeft: "5px" }}>
                                            {restaurantDetails.data.name}
                                        </div>
                                        <span
                                            className="ms-2 cursor-pointer"
                                            onClick={() => {
                                                localStorage.removeItem("restaurantId")
                                                setRestaurantDetails(null)
                                            }}>&#10005;</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <OffcanvasHeader toggle={toggleCanvasStart} style={{marginTop: 1, justifyContent: 'center'}}>
                        {!isGroupOrder() && !isJoinedByLink() && cartItems && cartItems.meals && cartItems.meals.length > 0 &&
                            <div className="d-flex ">
                                <UserPlus className='ms-1 me-1 mt-1 text-primary'/>
                                <Link className='me-1' to={isCustomer() ? "/groupOrder" : "/login"}>
                                    <h1 className={`fw-bolder mb-1 fs-3 text-uppercase mt-1 text-decoration-underline makeOrderLink`}
                                        onClick={() => toggleCanvasStart()}>
                                        Make It a group Order
                                    </h1>
                                </Link>
                            </div>}
                    </OffcanvasHeader>

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
                        </div>}

                        <div>
                            <div className='mt-4 mb-2 text-center'>
                                <h4>Related Products</h4>
                                <CardText>People also search for these items</CardText>
                            </div>
                            <Swiper {...params}>
                                {recommendedList.map((slide, index) => {
                                    return (
                                        <SwiperSlide key={`optionsKey-${index}`}>
                                            <Col lg={12}>
                                                <a href='/' onClick={e => {
                                                    addRecommended(slide, e)
                                                }}>
                                                    <div className='img-container w-1500 mx-auto py-75'>
                                                        <ProductImage attachment={slide.img} className='img-fluid'
                                                                      styles={{
                                                                          width: "85px",
                                                                          height: "85px",
                                                                          margin: "auto"
                                                                      }}/>
                                                    </div>
                                                    <div className='item-heading text-center'>
                                                        <h5 className=' mb-0'>{slide.name}</h5>
                                                    </div>
                                                    <div className='item-meta text-center'>
                                                        <CardText
                                                            className='text-primary mb-0'>${slide.wholePrice}</CardText>
                                                    </div>
                                                </a>
                                            </Col>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>

                        <div style={{backgroundColor: '', marginLeft: -20, marginRight: -20, padding: 20}}>

                            {!isUserLoggedIn() && !isJoinedByLink() && <Button
                                color='secondary'
                                outline
                                onClick={() => history.push('/login')}
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
                                sign in to use Rewards
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
                                     }}>$ {(parseFloat(cartTotalPrice()) + taxAmount) ?? 0}
                                </div>
                            </div>

                            <p style={{color: 'primary', marginTop: 20, fontSize: "1.2rem"}}>Delivery includes
                                Higher
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

            {RenderRecommendedProductsModal()}
        </>
    )
}

export default Cart
