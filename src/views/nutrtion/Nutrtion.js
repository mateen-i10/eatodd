import React from 'react'
import './stylesheet/Nutrition.css'
import Link from "react-router-dom/es/Link"
import NutTable from "./NutTable"
import Header from "../../shared/header/Header"
import Footer from "../../shared/footer/Footer"
// ** Third Party Components
import Chart from 'react-apexcharts'
const Nutrition = () => {

    const FoodItems = [
        {
            id: 1,
            title: 'Burrito'
        },
        {
            id: 2,
            title: 'Burrito Bowl'
        },
        {
            id: 3,
            title: 'Lifestyle Bowl'
        },
        {
            id: 4,
            title: 'Questilla'
        },
        {
            id: 5,
            title: 'Salad'
        },
        {
            id: 6,
            title: 'Tacos'
        },
        {
            id: 7,
            title: 'Side & Drinks'
        },
        {
            id: 8,
            title: 'Kids Meal'
        }
    ]
    const data = {
        chart: {
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: { show: false },
        comparedResult: [2, -3, 8],
        labels: ['Fat', 'Protien', 'Carb'],
        stroke: { width: 0 },
        colors: ['#81be41', '#63852e', '#a1ba78'],
        grid: {
            padding: {
                right: -20,
                bottom: -8,
                left: -20
            }
        },
        plotOptions: {
            pie: {
                startAngle: -10,
                donut: {
                    labels: {
                        show: true,
                        name: {
                            offsetY: 15
                        },
                        value: {
                            offsetY: -15,
                            formatter(val) {
                                return `${parseInt(val)} %`
                            }
                        },
                        total: {
                            show: true,
                            offsetY: 15,
                            label: 'Fat',
                            formatter() {
                                return '52%'
                            }
                        }
                    }
                }
            }
        },
        responsive: [
            {
                breakpoint: 1325,
                options: {
                    chart: {
                        height: 100
                    }
                }
            },
            {
                breakpoint: 1200,
                options: {
                    chart: {
                        height: 120
                    }
                }
            },
            {
                breakpoint: 1065,
                options: {
                    chart: {
                        height: 100
                    }
                }
            },
            {
                breakpoint: 992,
                options: {
                    chart: {
                        height: 120
                    }
                }
            }
        ]
    }
    return (
        <div>
            <Header/>
            <div style={{backgroundColor: '#e3e3e3'}}>
                <div className="container-sm row">
                    <div className="col" style={{marginLeft: 180, marginTop: 60, marginBottom: 50}}>
                        <h5 style={{
                            color: '#2a2a2a',
                            fontSize: '1.3em',
                            textTransform: 'uppercase',
                            fontWeight: 'bolder',
                            letterSpacing: 4
                        }}>Calculate</h5>
                        <h1 style={{
                            color: '#262626',
                            fontSize: '4em',
                            textTransform: 'uppercase',
                            fontWeight: 'bolder',
                            letterSpacing: 1
                        }}>Nutrtion</h1>
                        <p style={{color: '#6b6b6b', fontWeight: 450}}>Build your calorie, carb and nutrition
                            information based on your selected meal below using the nutrition calculator.</p>
                        <a style={{color: '#57ab00', textDecoration: 'underline', fontWeight: 'bolder'}} href="#">Allergen
                            Statement</a>
                    </div>
                    <div className="col" style={{paddingTop: 100, paddingLeft: 70}}>
                        <div>
                            <h1 style={{fontSize: '3em', fontWeight: 'bolder', color: '#81be41'}}>00cal</h1>
                            <div style={{display: 'flex'}}>
                                <div>
                                    <h3 style={{fontSize: '2em', fontWeight: 'bolder', color: '#63852e'}}>0g</h3>
                                    <h5>Fat</h5>
                                </div>
                                <div style={{marginLeft: 40, marginRight: 40}}>
                                    <h3 style={{fontSize: '2em', fontWeight: 'bolder', color: '#63852e'}}>0g</h3>
                                    <h5>Protien</h5>
                                </div>
                                <div>
                                    <h3 style={{fontSize: '2em', fontWeight: 'bolder', color: '#63852e'}}>0g</h3>
                                    <h5>Carbs</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col" style={{paddingLeft: 70, paddingTop: 50}}>
                        <Chart options={data} series={[53, 16, 31]} type='donut' height={200} />
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row pb-5 pt-5'>
                    <h3 style={{
                        fontWeight: 'bolder',
                        color: '#57ab00',
                        marginBottom: 40,
                        paddingLeft:100,
                        textTransform: 'uppercase'
                    }}>Select Your Meal</h3>
                    {FoodItems.map((e) => (
                        <div>
                            <a href="#"><h3 className='food-items' key={e.title}>{e.title}</h3></a>
                        </div>
                    ))}
                </div>
            </div>
            <NutTable/>
            <div className='container-fluid bgimg'
                 style={{textAlign: 'center', paddingTop: '100px', paddingBottom: '100px'}}>
                <div className='row'>
                    <h1 style={{fontSize: 140, fontWeight: 'bolder', color: '#57ab00'}}>53</h1>
                    <h4 style={{
                        fontSize: 50,
                        textTransform: 'uppercase',
                        fontWeight: 'bolder',
                        color: '#57ab00'
                    }}>Ingrediants</h4>
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