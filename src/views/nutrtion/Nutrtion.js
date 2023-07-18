import React, {Fragment, useState} from 'react'
import './stylesheet/Nutrition.css'
import {Link, useHistory} from "react-router-dom"
import NutTable from "./NutTable"
import Header from "../../shared/header/Header"
import Footer from "../../shared/footer/Footer"
// ** Third Party Components
import {getCartData} from "../../utility/Utils"
import "./../home/components/Order/Order.css"
import NutritionHeader from "./components/NutritionHeader"
import CartMeals from "./components/CartMeals"
import {useDispatch} from "react-redux"
import {scrollToOrderAdded} from "../../redux/scroll/scrollSlice"

const Nutrition = () => {
    const [selectedItem, setSelectedItem] = useState(0)
    const [mealNutrition, setMealNutrition] = useState({mealNut: {name: "", fat: 0, carb: 0, protein: 0}})
    const [nutritionCal, setNutritionCal] = useState([])
    const [customerMealName, setCustomerMealName] = useState("")
    const [mealCategoryName, setMealCategoryName] = useState("")
    // const [cartItems, setCartItems] = useState([])
    const history = useHistory()
    const dispatch = useDispatch()
    // console.log(selectedItem)
    const cartItems = getCartData()
    console.log("cartItems data *******", cartItems)

    const nutritionData = (index) => {
        console.log("selected item -----", cartItems.meals[index])
        let nutritionTableData = []
        if (cartItems?.meals?.length > 0) {
            const mealItems = cartItems?.meals[index]
            if (mealItems.selectedProducts !== null && mealItems.selectedProducts.length > 0) {
                nutritionTableData = mealItems.selectedProducts.map((item) => {
                    let totalFAt = 0
                    let totalCarbs = 0
                    let totalProtein = 0
                    let totalCalories = 0
                    if (item.productIngredients !== null && item.productIngredients.length > 0) {
                        for (const i of item.productIngredients) {
                            totalFAt += i?.ingredient?.fat
                            totalCarbs += i?.ingredient?.carb
                            totalProtein += i?.ingredient?.protein
                            totalCalories += i?.ingredient?.calories
                        }
                    }
                    setMealNutrition({
                        ...mealNutrition,
                        mealNut: {
                            name: item.name,
                            fat: totalFAt,
                            carb: totalCarbs,
                            protein: totalProtein,
                            calories: totalCalories
                        }
                    })
                    return {
                        name: item.name,
                        fat: totalFAt,
                        carb: totalCarbs,
                        protein: totalProtein,
                        calories: totalCalories
                    }
                })
            } else {
                return mealNutrition
            }
            setNutritionCal(nutritionTableData)
            setCustomerMealName(cartItems?.meals[index].mealName)
            setMealCategoryName(cartItems?.meals[index].categoryName)
        }
    }

    const handleClick = () => {
        dispatch(scrollToOrderAdded("order"))
        history.push(`/`)
    }

    return (
        <Fragment>
        <div>
            <Header/>

            <div className="sticky-top headerScroll">
                <div className="" style={{marginBottom: 0}}>
                    <div className='btn btn-primary btn-lg text-uppercase me-1 returnBtn'
                         onClick={handleClick}>Return to Menu
                    </div>
                </div>
            </div>

            <NutritionHeader cartItems={cartItems} customerMealName={customerMealName}
                             nutritionCal={nutritionCal} mealCategoryName={mealCategoryName}/>
            {/* eslint-disable-next-line multiline-ternary */}
            {!cartItems?.meals?.length > 0 ?
                <div className="menu-list container-fluid pt-5 mb-3 text-center">
                    <h3 style={{
                        fontWeight: 'bolder',
                        color: '#57ab00',
                        textTransform: 'uppercase'
                    }}>You did not have select any meal. Please Select Your Meal First.</h3>
                    <div className="row ms-0 me-1 mt-1">
                        <div className="col-4 mx-auto">
                            <div className='btn btn-primary text-uppercase fs-5'
                                 onClick={() => (history.push('/'))}>Select your Meal
                            </div>
                        </div>
                    </div>
                </div> : <div className="menu-list container-fluid pt-4 text-center">
                    <h3 style={{
                        fontWeight: 'bolder',
                        color: '#57ab00',
                        textTransform: 'uppercase'
                    }}>Select Your Meal for Nutrition Calculation</h3>
                    <div className="row ms-0 me-1 align-items-center ">
                        <div className="col-9 mx-auto">
                            <div className="container-fluid">
                                <div className="row mt-3">
                                    {cartItems?.meals.map((item, i) => (
                                        <div key={i}
                                             className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-12 cursor-pointer text-start fw-bolder fs-4  "
                                        >
                                            <CartMeals i={i} item={item} setSelectedItem={setSelectedItem}
                                                       nutritionData={nutritionData} selectedItem={selectedItem}/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            {cartItems?.meals?.length > 0 ? <div className="mt-1">
                <NutTable nutritionCal={nutritionCal}/>
            </div> : null}
            <Footer/>
        </div>
        </Fragment>
    )
}
export default Nutrition