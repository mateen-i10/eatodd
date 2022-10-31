import React, {useEffect, useState} from 'react'
import {Table} from "reactstrap"
import Chart from "react-apexcharts"

const NutritionHeader = ({cartItems, customerMealName, nutritionCal, mealCategoryName}) => {
    // console.log("llllllll", customerMealName)
    const [isVisible, setIsVisible] = useState(false)
    const [chartData, setChartData] = useState([])
    const [totalCalories, setTotalCalories] = useState(0)
    const [width, setWidth] = useState(window.innerWidth)
    const chartCustomData = [0.01, 1, 0.018]

    const listenToScroll = () => {
        const heightToShowFrom = 308
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop
        if (winScroll > heightToShowFrom) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll)
        const handleResizeWindow = () => setWidth(window.innerWidth)
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener("resize", handleResizeWindow)

        return () => {
            window.removeEventListener("scroll", listenToScroll)
            // unsubscribe "onComponentDestroy"
            window.removeEventListener("resize", handleResizeWindow)
        }
    }, [])
    // console.log("nutritionCal------", nutritionCal)

    useEffect(() => {
        let headTotalFAt = 0
        let headTotalCarbs = 0
        let headTotalProtein = 0
        let headTotalCalories = 0
        if (nutritionCal.length) {
            for (const i of nutritionCal) {
                headTotalFAt += i.fat
                headTotalCarbs += i.carb
                headTotalProtein += i.protein
                headTotalCalories += i.calories
            }
        }
        if (headTotalFAt > 0 || headTotalProtein > 0 || headTotalCarbs > 0 || headTotalCalories > 0) {
            setChartData([headTotalFAt, headTotalProtein, headTotalCarbs])
            setTotalCalories(headTotalCalories)
        }

    }, [nutritionCal])

    const data = {
        chart: {
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {show: false},
        comparedResult: [2, -3, 8],
        labels: ['Fat', 'Protien', 'Carb'],
        stroke: {width: 0},
        colors: ['#9c1f16', '#57ab00', '#c98200'],
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
                                return `${parseInt(val)}`
                            }
                        }
                        // total: {
                        //     show: true,
                        //     offsetY: 15,
                        //     label: 'Calories',
                        //     formatter() {
                        //         return 0
                        //
                        //     }
                        // }
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
                        height: 120
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
            {cartItems?.meals && cartItems?.meals.length > 0 ? <div
                className={`container-fluid position-fixed ${isVisible && width > 1100 ? "d-block" : "d-none"}  zindex-3`}
                style={{backgroundColor: "#ededed", marginTop: 0}}>
                <div className="row align-content-center justify-content-center"
                     style={{height: 120}}>
                    <div className="col-10 text-center">
                        <Table hover responsive borderless style={{height: 134}}>
                            <thead>
                            <tr className="text-center">
                                <td className="text-black text-uppercase"
                                    style={{fontSize: "1.9rem", fontWeight: 700, width: 320, paddingBottom: 30}}>
                                    {`Your ${customerMealName.length ? customerMealName : "meal"}`}
                                </td>
                                <td className="text-primary "
                                    style={{
                                        paddingBottom: 30,
                                        width: 230
                                    }}>
                                    <div
                                        style={{
                                            fontSize: "1.7rem",
                                            fontWeight: 600,
                                            color: '#262626'
                                        }}>{totalCalories}</div>
                                    <span style={{color: '#262626'}}>Cal</span>
                                </td>
                                <td className="" style={{
                                    paddingBottom: 30,
                                    width: 220
                                }}>
                                    <div style={{
                                        fontSize: "1.7rem",
                                        fontWeight: 600,
                                        color: "#9c1f16"
                                    }}>{chartData.length > 0 ? chartData[0] : 0}</div>
                                    <div style={{color: "#9c1f16"}}>Fat</div>
                                </td>
                                <td className="text-primary" style={{
                                    paddingBottom: 30,
                                    width: 250
                                }}>
                                    <div style={{
                                        fontSize: "1.7rem",
                                        fontWeight: 600
                                    }}>{chartData.length > 0 ? chartData[1] : 0}</div>
                                    <div>Protein</div>
                                </td>
                                <td className="" style={{
                                    paddingBottom: 30,
                                    color: "#c98200",
                                    width: 160
                                }}>
                                    <div style={{
                                        fontSize: "1.7rem",
                                        fontWeight: 600
                                    }}>{chartData.length > 0 ? chartData[2] : 0}</div>
                                    <div>Carbs</div>
                                </td>
                            </tr>
                            </thead>
                        </Table>
                    </div>
                </div>
            </div> : null}
            <div style={{backgroundColor: '#e3e3e3'}}>
                <div className="container-sm">
                    <div className="row">
                        {mealCategoryName.length > 0 ? <div className="col-lg-4 col-12  text-center"
                                                            style={{marginTop: 60, marginBottom: 10}}>

                            <h1 style={{
                                color: '#262626',
                                fontSize: '4em',
                                textTransform: 'uppercase',
                                fontWeight: 'bolder',
                                letterSpacing: 1
                            }}>{mealCategoryName}</h1>
                            <p style={{color: '#6b6b6b', fontWeight: 450}}>Your choice of freshly grilled meat or
                                sofritas wrapped in a warm flour tortilla with rice, beans, or fajita veggies, and
                                topped with guac, salsa, queso blanco, sour cream or cheese.</p>
                            <a style={{color: '#57ab00', textDecoration: 'underline', fontWeight: 'bolder'}} href="#">Allergen
                                Statement</a>
                        </div> : <div className="col-lg-4 col-12  text-center"
                                      style={{marginTop: 60, marginBottom: 10}}>
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
                            <p style={{color: '#6b6b6b', fontWeight: 450}}>See your meal calorie, carb and nutrition
                                information based on your selected meal below using the nutrition calculator.</p>
                            <a style={{color: '#57ab00', textDecoration: 'underline', fontWeight: 'bolder'}} href="#">Allergen
                                Statement</a>
                        </div>}
                        <div className="col-lg-4 col-6 mb-3 " style={{paddingTop: 70}}>
                            <div className="text-center">
                                <h1 className=""
                                    style={{
                                        fontSize: '2.7em',
                                        fontWeight: 'bolder',
                                        color: '#262626'
                                    }}>{totalCalories} Cal</h1>
                                <div className="text-center justify-content-center row">
                                    <div className="text-center  col-3">
                                        <h3 style={{
                                            fontSize: '1.9em',
                                            fontWeight: 'bolder',
                                            color: '#9c1f16'
                                        }}>{chartData.length > 0 ? chartData[0] : 0}</h3>
                                        <h5 style={{color: '#9c1f16'}}>Fat</h5>
                                        {/*setChartData([totalFAt, totalProtein, totalCarbs])*/}
                                    </div>
                                    <div className="text-center  col-4" style={{}}>
                                        <h3 style={{
                                            fontSize: '1.9em',
                                            fontWeight: 'bolder',
                                            color: '#57ab00'
                                        }}>{chartData.length > 0 ? chartData[1] : 0}</h3>
                                        <h5 style={{color: '#57ab00'}}>Protien</h5>
                                    </div>
                                    <div className="text-center col-3">
                                        <h3 style={{
                                            fontSize: '1.9em',
                                            fontWeight: 'bolder',
                                            color: '#c98200'
                                        }}>{chartData.length > 0 ? chartData[2] : 0}</h3>
                                        <h5 style={{color: '#c98200'}}>Carbs</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-4 col-6 mb-3" style={{paddingTop: 50}}>
                            <Chart options={data} series={chartData.length > 0 ? chartData : chartCustomData}
                                   type='donut'
                                   height={250}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NutritionHeader
