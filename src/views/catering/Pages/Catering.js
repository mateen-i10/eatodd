import Header from "../../../shared/header/Header"
import Footer from "../../../shared/footer/Footer"
import '../components/stylesheet/Menu.css'
import React, {useEffect, useLayoutEffect, useState} from "react"
import CateringDetailMenu from "../components/CateringDetailMenu"
import useAPI from "../../../utility/customHooks/useAPI"
import ComponentSpinner from "../../../@core/components/spinner/Loading-spinner"
import WineOrderMenu from "../../wine/Pages/wineOrderMenu"
import CateringSubForm from "../components/CateringSubForm"
import luxurayWine from "../../../assets/images/wineClubStylingImages/wine.jpg"
import {Col, Row} from "reactstrap"

const Catering = () => {
    //const [elHovered, setElHovered] = useState({})
    const [cateringMenu, setCateringMenu] = useState([])
    const [selectedMenuId, setSelectedMenuId] = useState()
    const [isWineSelected, setWineSelected] = useState(false)
    const [isLoading, response] = useAPI('CateringMenu?TotalPages=1&PageIndex=1&PageSize=10', 'get', {}, {}, true)

    const [formComponent, setFormComponent] = useState(false)
    const [wineShow, setWineShow] = useState(false)


    useEffect(() => {
        if (response !== null && response.statusCode === 200) {
            const data = response.data
            // console.log("data", data)
            const final = data.map(item => ({
                id: item.id,
                name: item.name,
                description: item.description,
                priority: item.priority,
                isLoading
            }))
            final.push({
                id: 0,
                name: 'Wines',
                description: 'Select wines',
                priority: final.length,
                isWine: true,
                isLoading
            })
            final.push({
                id: '1',
                name: 'Event Catering',
                description: 'Fill in Form'
            })
            setCateringMenu(final)
        }


    }, [response])


    useLayoutEffect(() => {
        setSelectedMenuId(cateringMenu.length !== null && 1)
        setWineSelected(false)
    }, [cateringMenu])

    // console.log(cateringMenu)

    /*const xl = "6"
    const md = "6"*/

 /*   const toggleList = item => {
        // console.log("Item", item)
        if (selectedMenuId !== item.id) {
            setSelectedMenuId(item.id)
        }
        if (item.isWine) setWineSelected(true)
    }*/

    console.log("selectedMenuId", selectedMenuId)

    return (
        <>
            <Header/>

            <div style={{backgroundImage: `url(${luxurayWine})`, backgroundSize: '1200px'}}>
                <section>
                    <div className="continer-sm" style={{backgroundColor: 'rgba(0, 13, 26, .5)'}}>
                        <h5 style={{color:'white', textAlign: 'center', paddingTop: '50px', fontSize: '2.8em', textTransform: 'uppercase'}}>OMG Catering</h5>
                        <h4 style={{color:'white', textAlign: 'center', fontSize: '2.2em', paddingTop:'30px', paddingBottom: '30px', textTransform: 'uppercase'}}>A Warm, Charming Atmosphere</h4>
                        <p style={{color:'white', textAlign: 'center', fontSize: '1.5em', paddingBottom:'70px', marginTop: '-30px'}}>Allow us to make your next special event extra special. We cater for all sized<br />functions, ideal for your larger functions or an intimate gathering, our team can<br />curate a menu to suit your taste.</p>
                    </div>
                </section>
            </div>

            <section>
                <div className="fs-1 fw-bolder text-primary text-center" style={{paddingTop:"50px", paddingBottom:"20px"}}>OMG CATERING PACKAGES
                </div>
            <p style={{textAlign: 'center', fontSize: '1.5em', paddingBottom:'70px'}}>Treat your group to Taste & Flavor that happens to be Healthy!<br />*24 hour advance notice requested</p>
                {cateringMenu.length ? <div className="container-sm mb-3">
                    <div className="row mt-3">
                        {/*<div className="col-md-3 col-9 mx-auto mb-3" style={{marginLeft: '-50px'}}>
                        <div className="text-center fs-2 fw-bolder text-primary">Menu</div>
                        <hr/>
                        <div
                            style={{
                                borderRight: "6px solid rgb(129 190 65)"
                            }}
                        >
                            {cateringMenu.map((item, i) => (
                                <div key={i}
                                     className={`fs-3 fw-bolder ms-2 cursor-pointer mb-1  ${elHovered[i] ? "text-primary" : ""}  `}
                                     style={{lineHeight: "35px"}}
                                     onMouseOver={() => (setElHovered({...elHovered, [i]: true}))}
                                     onMouseLeave={() => (setElHovered({...elHovered, [i]: false}))}
                                     onLoad={() => setSelectedMenuId(item.id)}
                                     onClick={() => {
                                         toggleList(item)
                                     }}
                                >
                                    <div
                                        className={`text-start text-uppercase ${selectedMenuId === item.id ? "text-primary" : ""}`}
                                        style={{fontSize: 15}}>{item.name.toLowerCase() === 'home' ? null : item.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>*/}
                        <div className="col-md-12">
                            {selectedMenuId === 0 && isWineSelected ? <WineOrderMenu/> : <CateringDetailMenu
                                /*xl={xl}
                                md={md}*/
                                id={selectedMenuId}
                            />}

                        </div>
                    </div>
                    <Row style={{textAlign: "center"}}>
                        <Col md={12}>
                            <div className="fs-1 fw-bolder text-primary text-center" style={{paddingTop:"50px", paddingBottom:"20px"}}>OMG GRAZING TABLE
                            </div>
                            <p style={{textAlign: 'center', fontSize: '1.5em', paddingBottom:'70px'}}>CATERING PACKAGE SERVES 25+ PEOPLE</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}></Col>
                        <Col lg={4} style={{textAlign: "center"}}>
                            <button className='btn btn-primary mt-2 mb-2' onClick={() => setFormComponent(!formComponent)}>Show More</button>
                        </Col>
                        <Col lg={4}></Col>
                    </Row>
                    {formComponent ? <>
                    <Row>
                        <Col lg={2}></Col>
                        <Col lg={8}>
                            <CateringSubForm/>
                        </Col>
                        <Col lg={2}></Col>
                    </Row>
                    </> : ''}

                    {/*{selectedMenuId === '1' ? <CateringSubForm/> : []}*/}
                </div> : <div className="m-5"><ComponentSpinner/></div>}
            </section>

            <section className="container" style={{backgroundColor: '#f5f8fb'}}>
                <Row>
                    <Col lg={7} style={{paddingBottom:'50px'}}>
                        <div className='ps-5 mt-5'>
                            <p className="text-primary fs-2 fw-bolder">
                                OMG Catering
                            </p>
                            <h1 className="text-black text-uppercase fw-bolder mb-2" style={{fontSize: '40px', lineHeight: 1.1}}>
                                ADD WINE TO YOUR <br/>OMG CATERING ORDER
                            </h1>
                            <div className="fs-4 mb-2">
                                <p>
                                    OMG will streamline your event planning by taking care of your food + WINE. We offer the
                                    ability to Mix and Match your wine selection to make sure no guest leaves thirsty.
                                </p>
                                <div className="mb-2" style={{fontSize: "15px"}}>
                                    *All wine will be sold at wholesale prices
                                    <br/>
                                    *$120 service fee added to all event orders that include wine
                                    <br/>
                                    *please provide 48-hour notice so we can make sure we have your selected wines in stock
                                </div>
                            </div>
                            <button type="button" className="btn fs-4 mt-3 mb-2" onClick={() => setWineShow(!wineShow)}
                                    style={{backgroundColor: '#57ab00', color: 'white'}}>Add Wine to Catering
                            </button>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div style={{textAlign: 'center'}}>
                            <img className="mt-5"
                                 src={require("../../../assets/images/wineClub/Beaulieu Vineyard.png").default}
                                 height={400} alt="wine" style={{display: "initial"}}
                            />
                        </div>
                    </Col>
                </Row>

                {wineShow ? <>
                    <Row>
                        <Col lg={12}>
                            <WineOrderMenu/>
                        </Col>
                    </Row>
                </> : ''}

            </section>

            <Footer/>
        </>
    )
}

export default Catering
