import React, {useState} from 'react'
import './stylesheet/Nutrition.css'
import {Link, useHistory} from "react-router-dom"
import NutTable from "./NutTable"
import Header from "../../shared/header/Header"
import Footer from "../../shared/footer/Footer"
// ** Third Party Components
import {getCartData} from "../../utility/Utils"
import "./../home/components/Order/Order.css"
import NutritionHeader from "./components/NutritionHeader"

const Nutrition = () => {
    const [selectedItem, setSelectedItem] = useState(0)
    const [mealNutrition, setMealNutrition] = useState({mealNut: {name: "", fat: 0, carb: 0, protein: 0}})
    const [nutritionCal, setNutritionCal] = useState([])
    // const [chartData, setChartData] = useState([])
    // const [fatValue, setFatValue] = useState(0)
    const [customerMealName, setCustomerMealName] = useState("")
    const history = useHistory()
    console.log(selectedItem)
    // console.log("chart data", chartData, fatValue, customerMealName)


    const cartItems = getCartData()

    console.log("cartItems data *******", cartItems)
    const nutritionData = (index) => {
        console.log("selected item", cartItems.meals[index])
        let nutritionTableData = []
        if (cartItems.meals.length > 0) {
            const mealItems = cartItems.meals[index]
            if (mealItems.selectedProducts !== null && mealItems.selectedProducts.length > 0) {
                nutritionTableData = mealItems.selectedProducts.map((item) => {
                    let totalFAt = 0
                    let totalCarbs = 0
                    let totalProtein = 0
                    if (item.productIngredients !== null && item.productIngredients.length > 0) {
                        for (const i of item.productIngredients) {
                            totalFAt += i?.ingredient?.fat
                            totalCarbs += i?.ingredient?.carb
                            totalProtein += i?.ingredient?.protein
                        }
                    } else {
                        return []
                    }
                    setMealNutrition({
                        ...mealNutrition,
                        mealNut: {name: item.name, fat: totalFAt, carb: totalCarbs, protein: totalProtein}
                    })
                    // setChartData([totalFAt, totalProtein, totalCarbs])
                    // setFatValue(totalFAt)
                    return {name: item.name, fat: totalFAt, carb: totalCarbs, protein: totalProtein}
                })

            } else {
                return []
            }
            setNutritionCal(nutritionTableData)
            setCustomerMealName(cartItems.meals[index].mealName)
        }
    }
    return (
        <div>
            <Header/>
            <NutritionHeader cartItems={cartItems} customerMealName={customerMealName}
                             nutritionCal={nutritionCal}/>
            {/* eslint-disable-next-line multiline-ternary */}
            {!cartItems?.meals.length > 0 ?
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
                    }}>Please Select Your Meal for Nutrition Calculation</h3>
                    <div className="row ms-0 me-1 align-items-center justify-content-center">
                        {cartItems.meals.map((item, i) => (
                            <div key={i}
                                 className="col-md-3 col-sm-5 col-6 cursor-pointer text-center fw-bolder fs-4   "
                                 onClick={() => {
                                     setSelectedItem(i)
                                     nutritionData(i)
                                 }}>
                                <div className='text-uppercase fs-5 mt-1'>
                                    <span>Meal Name</span> : <span>{item.mealName}</span></div>
                                <div className='text-uppercase fs-5 mt-1'>
                                    <span>Category</span> : <span>{item.categoryName}</span></div>
                                <div className='text-uppercase fs-5 mt-1'>
                                    <span>Price</span> : <span>{item.totalPrice}</span>
                                </div>
                            </div>))}
                    </div>
                </div>}
            {cartItems.meals.length > 0 ? <div className="mt-4">
                <NutTable nutritionCal={nutritionCal}/>
            </div> : null}
            <div className='container-fluid bgimg'
                 style={{textAlign: 'center', paddingTop: '100px', paddingBottom: '100px'}}>
                <div className='row'>
                    <h1 style={{fontSize: 140, fontWeight: 'bolder', color: '#57ab00'}}>53</h1>
                    <h4 style={{
                        fontSize: 50,
                        textTransform: 'uppercase',
                        fontWeight: 'bolder',
                        color: '#57ab00'
                    }}>Ingredients</h4>
                    <p style={{fontWeight: 'bolder', color: '#57ab00'}}>Thats all we need</p>
                    <Link to='/NutrtionIngredients'>
                        <button style={{
                            backgroundColor: 'transparent',
                            borderWidth: 0.1,
                            border: 'solid',
                            borderColor: 'black',
                            paddingLeft: 30,
                            paddingRight: 30,
                            textTransform: 'uppercase',
                            marginBottom: 50,
                            color: 'black',
                            fontWeight: 'bolder'
                        }}>View all
                        </button>
                    </Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Nutrition