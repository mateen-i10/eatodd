import React, {useEffect, useState} from 'react'
import './stylesheet/Nutrition.css'
import {Link} from "react-router-dom"
import NutTable from "./NutTable"
import Header from "../../shared/header/Header"
import Footer from "../../shared/footer/Footer"
// ** Third Party Components
import Chart from 'react-apexcharts'
import httpService, {baseURL} from "../../utility/http"
import {toast} from "react-toastify"
import {isObjEmpty} from "../../utility/Utils"
import {useSelector} from "react-redux"
import "./../home/components/Order/Order.css"
import {Table} from "reactstrap"
import ComponentSpinner from "../../@core/components/spinner/Loading-spinner"
import ProductImage from "../home/components/product/ProductImage"

const Nutrition = () => {

    const [mainCategory, setMainCategory] = useState([])
    const {userLocation} = useSelector(state => state)
    const [isVisible, setIsVisible] = useState(false)
    // const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(window.innerWidth)

    const listenToScroll = () => {
        const heightToShowFrom = 308
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop
        // setHeight(winScroll)

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


    useEffect(() => {
        httpService._get(`${baseURL}Category?pageIndex=1&&pageSize=12`)
            .then(response => {
                console.log("response ***", response)
                // success case
                if (response.status === 200 && response.data.statusCode === 200) {
                    return response
                } else {
                    //general Error Action
                    toast.error(response.data.message)
                    return null
                }
            })
            .then(async res => {
                if (res && !isObjEmpty(res)) {
                    const arr = [...res.data.data]
                    try {
                        const final = []
                        for (const item of arr) {
                            if (arr.length !== 0) {
                                final.push({
                                    id: item.id,
                                    attachment: item.attachment,
                                    name: item.name,
                                    description: item.description,
                                    status: res.status
                                })
                            }
                        }
                        setMainCategory(final)

                    } catch (e) {
                        toast.error(e.message)
                    }
                }
            })
            .catch(error => {
                toast.error(error.message)
            })

    }, [])

    // console.log("main Category---", mainCategory)


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
            <Header/>
            <div
                className={`container-fluid position-fixed ${isVisible && width > 1100 ? "d-block" : "d-none"}  zindex-3`}
                style={{backgroundColor: "#ededed", marginTop: 0}}>
                <div className="row align-content-center justify-content-center"
                     style={{height: 120}}>
                    <div className="col-10 text-center">
                        <Table hover responsive borderless style={{height: 134}}>
                            <thead>
                            <tr className="text-center">
                                <td className="text-black"
                                    style={{fontSize: "1.9rem", fontWeight: 700, width: 320, paddingBottom: 30}}>Your
                                    Burrito
                                </td>
                                <td className="text-primary"
                                    style={{fontSize: "1rem", fontWeight: 300, paddingBottom: 40}}><span
                                    style={{fontSize: "1.7rem", fontWeight: 600}}>210</span>Cal
                                </td>
                                <td className="" style={{paddingBottom: 30}}>
                                    <div style={{fontSize: "1.7rem", fontWeight: 600, color: "#9c1f16"}}>9g</div>
                                    <div style={{color: "#9c1f16"}}>Fat</div>
                                </td>
                                <td className="text-primary" style={{paddingBottom: 30}}>
                                    <div style={{fontSize: "1.7rem", fontWeight: 600}}>9g</div>
                                    <div>Protein</div>
                                </td>
                                <td className="" style={{paddingBottom: 30, color: "#c98200"}}>
                                    <div style={{fontSize: "1.7rem", fontWeight: 600}}>9g</div>
                                    <div>Carbs</div>
                                </td>
                            </tr>
                            </thead>
                        </Table>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor: '#e3e3e3'}}>
                <div className="container-sm">
                    <div className="row">
                        <div className="col-lg-4 col-12  text-center"
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
                            <p style={{color: '#6b6b6b', fontWeight: 450}}>Build your calorie, carb and nutrition
                                information based on your selected meal below using the nutrition calculator.</p>
                            <a style={{color: '#57ab00', textDecoration: 'underline', fontWeight: 'bolder'}} href="#">Allergen
                                Statement</a>
                        </div>
                        <div className="col-lg-4 col-6 mb-3 " style={{paddingTop: 70}}>
                            <div className="text-center">
                                <h1 className=""
                                    style={{fontSize: '2.7em', fontWeight: 'bolder', color: '#81be41'}}>00cal</h1>
                                <div className="text-center justify-content-center row">
                                    <div className="text-center  col-3">
                                        <h3 style={{fontSize: '1.8em', fontWeight: 'bolder', color: '#63852e'}}>0g</h3>
                                        <h5>Fat</h5>
                                    </div>
                                    <div className="text-center  col-4" style={{}}>
                                        <h3 style={{fontSize: '1.8em', fontWeight: 'bolder', color: '#63852e'}}>0g</h3>
                                        <h5>Protien</h5>
                                    </div>
                                    <div className="text-center col-3">
                                        <h3 style={{fontSize: '1.8em', fontWeight: 'bolder', color: '#63852e'}}>0g</h3>
                                        <h5>Carbs</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-4 col-6 mb-3" style={{paddingTop: 50}}>
                            <Chart options={data} series={[53, 16, 31]} type='donut' height={250}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu-list container-fluid pb-5 pt-5 ">
                <h3 style={{
                    fontWeight: 'bolder',
                    color: '#57ab00',
                    marginBottom: 40,
                    paddingLeft: 100,
                    textTransform: 'uppercase'
                }}>Select Your Meal First</h3>
                <div className="row ms-0 me-1">
                    {
                        mainCategory.length ? mainCategory.map(item => (
                            <div className="col-md-4 col-sm-5  col-6 top-level-menu" key={item.id}>
                                <Link to={userLocation.length ? "/OmgPlate" : "/gmap"}>
                                    <div className="menu-item"
                                        //      onClick={() => (
                                        //     dispatch(itemSelected({name: item.title, description: item.description}))
                                        // )}
                                    >
                                        <div className="thumbnail">
                                            <ProductImage attachment={item.attachment} styles={{width: 180}}/>
                                            {/*<img*/}
                                            {/*    src={item.image}*/}
                                            {/*    alt="Burrito"*/}
                                            {/*    width={200}/>*/}
                                        </div>
                                        <div className="text2">
                                            <div className="display-name">{item.name}</div>
                                            <div className="order-cta">Order
                                                <div className="arrow-right"></div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )) : <ComponentSpinner/>
                    }
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