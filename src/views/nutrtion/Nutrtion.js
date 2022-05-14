import React from 'react'
import './stylesheet/Nutrition.css'
import Link from "react-router-dom/es/Link"

const Nutrition = () => {

    const FoodItems = [
        {
            title: 'Burrito'
        },
        {
            title: 'Burrito Bowl'
        },
        {
            title: 'Lifestyle Bowl'
        },
        {
            title: 'Questilla'
        },
        {
            title: 'Salad'
        },
        {
            title: 'Tacos'
        },
        {
            title: 'Side & Drinks'
        },
        {
            title: 'Kids Meal'
        }
    ]

    return (
        <div>
            <div style={{backgroundColor:'#e3e3e3'}}>
                <div className="container row">
                    <div className="col" style={{marginLeft:180, marginTop:60, marginBottom:50}}>
                        <h5 style={{color:'#756456', fontSize:'1.3em', textTransform:'uppercase', fontWeight:'bolder', letterSpacing:4}}>calculate</h5>
                        <h1 style={{color:'#451400', fontSize:'4em', textTransform:'uppercase', fontWeight:'bolder', letterSpacing:1}}>Nutrtion</h1>
                        <p style={{color: '#451400', fontWeight:450}}>Build your calorie, carb and nutrition information based on your selected meal below using the nutrition calculator.</p>
                        <a style={{color: '#451400', textDecoration: 'underline', fontWeight:'bolder'}} href="#">Allergen Statement</a>
                    </div>
                    <div className="col" style={{paddingTop:100, paddingLeft:70}}>
                        <div>
                            <h1 style={{fontSize: '3em', fontWeight:'bolder', color:'#451400'}}>00cal</h1>
                            <div style={{display:'flex'}}>
                                <div>
                                    <h3 style={{fontSize:'2em', fontWeight:'bolder', color:'#451400'}}>0g</h3>
                                    <h6>Fat</h6>
                                </div>
                                <div style={{marginLeft: 40, marginRight: 40}}>
                                    <h3 style={{fontSize:'2em', fontWeight:'bolder', color:'#451400'}}>0g</h3>
                                    <h6>Protien</h6>
                                </div>
                                <div>
                                    <h3 style={{fontSize:'2em', fontWeight:'bolder', color:'#451400'}}>0g</h3>
                                    <h6>Carbs</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col rounded-circle' style={{backgroundColor: 'white', maxWidth: 150, height: 150, marginLeft:300, marginTop: -150}}>
                        </div>
                        <div className='col rounded-circle' style={{backgroundColor: '#e3e3e3', maxWidth: 100, height: 100, marginLeft:325, marginTop: -125}} />
                    </div>
                </div>
            </div>

            <div>
                <h4 style={{fontWeight:'bolder', color:'#451400', marginTop:80, marginLeft:200, marginBottom: 50, textTransform:'uppercase'}}>Select Your Meal</h4>

                {FoodItems.map((e) => (
                    <div>
                        <h3 className='food-items'>{e.title}</h3>
                    </div>
                ))}
            </div>

            <hr style={{marginTop:80, marginBottom:30}} />

            <div className='container' style={{textAlign:'center'}}>
                <h1 style={{fontSize:140, fontWeight:'bolder', marginTop:150, color: '#451400'}}>53</h1>
                <h4 style={{fontSize:50, textTransform:'uppercase', fontWeight:'bolder', color: '#451400'}}>ingrediants</h4>
                <p style={{fontWeight:'bolder', marginBottom:30, color: '#451400'}}>Thats all we need</p>
                <Link to = '/NutrtionIngredients'>
                <button style={{backgroundColor:'transparent', borderWidth:0.1, border: 'solid', borderColor:'#a76721', paddingLeft: 30, paddingRight: 30, textTransform:'uppercase', marginBottom:50, color:'#a76721', fontWeight: 'bolder'}}>View all</button>
                </Link>
            </div>
        </div>
    )
}

export default Nutrition