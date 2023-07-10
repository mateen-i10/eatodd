import Header from "../../../shared/header/Header"
import Footer from "../../../shared/footer/Footer"
import '../components/stylesheet/Menu.css'
import React, {useEffect, useLayoutEffect, useState} from "react"
import CateringDetailMenu from "../components/CateringDetailMenu"
import useAPI from "../../../utility/customHooks/useAPI"
import ComponentSpinner from "../../../@core/components/spinner/Loading-spinner"
import WineOrderMenu from "../../wine/Pages/wineOrderMenu"
import CateringSubForm from "../components/CateringSubForm"
import luxurayWine from "../../../assets/images/images/DSC1371.jpg"
import {Col, Row} from "reactstrap"

const Catering = () => {
    //const [elHovered, setElHovered] = useState({})
    const [cateringMenu, setCateringMenu] = useState([])
    const [selectedMenuId, setSelectedMenuId] = useState()
    const [isWineSelected, setWineSelected] = useState(false)
    const [isLoading, response] = useAPI('CateringMenu?TotalPages=1&PageIndex=1&PageSize=10', 'get', {}, {}, true)
    //const [formComponent, setFormComponent] = useState(false)
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

    console.log("selectedMenuId", selectedMenuId)

    return (
        <>
            <Header/>

            {/*<section style={{paddingTop:'200px', paddingBottom: '200px'}}>
                <div className="container-sm">
                    <h5 className='text-primary' style={{textAlign: 'center', paddingTop: '50px', fontSize: '4.8em', textTransform: 'uppercase', fontFamily: 'Gotham Bold', color: 'black'}}>
                        OMG Catering
                    </h5>
                    <p style={{textAlign: 'center', fontSize: '1.5em', paddingBottom: '50px'}}>
                        Allow us to make your next special event extra special. We cater for all sized<br/>functions, ideal
                        for your larger functions or an intimate gathering, our team can<br/>curate a menu to suit your
                        taste.
                    </p>
                </div>
            </section>*/}

            <section style={{backgroundColor: 'rgb(245, 248, 251)'}}>
                <div className="fs-1 fw-bolder text-primary text-center"
                     style={{paddingTop: "50px", paddingBottom: "20px"}}>OMG CATERING
                </div>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8'>
                        <p style={{textAlign: 'center', fontSize: '1.5em', paddingBottom: '5px'}}>
                            Allow us to make your next special event extra special. We cater for any size event.
                            Treat your group to Taste & Flavor that happens to be Healthy!
                        </p>
                    </div>
                    <div className='col-md-2'></div>
                </div>
                <ul style={{textAlign: 'center', fontSize: '1.2em'}}>
                    <li>*24-hour advance notice requested</li>
                    <li>*Minimum order is for 10 people</li>
                </ul>
                {cateringMenu.length ? <div className="container-sm mb-3">
                    <div className="row mt-3" style={{marginBottom: '200px'}}>
                            {selectedMenuId === 0 && isWineSelected ? <WineOrderMenu/> : <CateringDetailMenu
                                /*xl={xl}
                                md={md}*/
                                id={selectedMenuId}
                            />}
                    </div>

                    <div style={{backgroundImage: `url(${luxurayWine})`, height: '500px', backgroundSize: '100%'}}>
                    </div>

                    <Row style={{textAlign: "center"}}>
                        <Col md={12}>
                            <div className="fs-1 fw-bolder text-primary text-center"
                                 style={{paddingTop: "50px", paddingBottom: "20px"}}>OMG GRAZING TABLE
                            </div>
                            <p style={{textAlign: 'center', fontSize: '1.5em'}}>CATERING PACKAGE
                                SERVES 25+ PEOPLE</p>
                        </Col>
                    </Row>
                    {/*<Row>
                        <Col lg={4}></Col>
                        <Col lg={4} style={{textAlign: "center"}}>
                            <button className='btn btn-primary mt-2 mb-2'
                                    onClick={() => setFormComponent(!formComponent)}>Show More
                            </button>
                        </Col>
                        <Col lg={4}></Col>
                    </Row>*/}

                        <Row>
                            <Col lg={2}></Col>
                            <Col lg={8}>
                                <CateringSubForm/>
                            </Col>
                            <Col lg={2}></Col>
                        </Row>

                    {/*{selectedMenuId === '1' ? <CateringSubForm/> : []}*/}
                </div> : <div className="m-5"><ComponentSpinner/></div>}
            </section>

            <section className="container-sm">
                <Row>
                    <Col lg={7} style={{paddingBottom: '50px'}}>
                        <div className='ps-5 mt-5'>
                            <p className="text-primary fs-2 fw-bolder">
                                OMG Catering
                            </p>
                            <h1 className="text-black text-uppercase fw-bolder mb-2"
                                style={{fontSize: '40px', lineHeight: 1.1}}>
                                ADD WINE TO YOUR <br/>OMG CATERING ORDER
                            </h1>
                            <div className="fs-4 mb-2">
                                <p>
                                    OMG will streamline your event planning by taking care of your food + WINE. We offer
                                    the
                                    ability to Mix and Match your wine selection to make sure no guest leaves thirsty.
                                </p>
                                <div className="mb-2" style={{fontSize: "15px"}}>
                                    *All wine will be sold at wholesale prices
                                    <br/>
                                    *Please provide 1 week advance notice so we can make sure we have your selected
                                    wines in stock
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
