import Header from "../../../shared/header/Header"
import Footer from "../../../shared/footer/Footer"
import '../components/stylesheet/Menu.css'
import React, {useEffect, useState} from "react"
import CateringDetailMenu from "../components/CateringDetailMenu"
import useAPI from "../../../utility/customHooks/useAPI"
import ComponentSpinner from "../../../@core/components/spinner/Loading-spinner"
import WineOrderMenu from "../../wine/Pages/wineOrderMenu"
import CateringSubForm from "../components/CateringSubForm"

const Catering = () => {
    const [elHovered, setElHovered] = useState({})
    const [cateringMenu, setCateringMenu] = useState([])
    const [selectedMenuId, setSelectedMenuId] = useState(0)
    const [isWineSelected, setWineSelected] = useState(false)
    const [isLoading, response] = useAPI('CateringMenu?TotalPages=1&PageIndex=1&PageSize=10', 'get', {}, {}, true)


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
    useEffect(() => {
        setSelectedMenuId(cateringMenu.length ? cateringMenu[0].id : 0)
        setWineSelected(false)
    }, [cateringMenu])

    // console.log(cateringMenu)
    const xl = "6"
    const md = "6"
    const toggleList = item => {
        // console.log("Item", item)
        if (selectedMenuId !== item.id) {
            setSelectedMenuId(item.id)
        }
        if (item.isWine) setWineSelected(true)
    }
    console.log("selectedMenuId", selectedMenuId)

    return (
        <div>
            <Header/>
            <div className="container-sm">
                <div className="row">
                    <div className="col-lg-4 col-md-5 col-sm-8 col-10 mx-auto">
                        <img style={{width: '100%'}} className="new mt-5"
                             src={require("../../../assets/images/images/catring-wine.png").default}
                             height={400} alt="wine"
                        />
                    </div>
                    <div className="col-lg-8 col-md-7  col-12 mx-auto mt-5">
                        <h1 className="text-black text-uppercase fw-bolder" style={{fontSize: '40px', lineHeight: 1.1}}>
                            ADD WINE TO YOUR <br/>OMG CATERING ORDER
                        </h1>
                        <div className="fs-4 mb-3 mt-2">
                            <p>OMG will streamline your event planning by taking care of your food + WINE. We offer the
                                ability to Mix and Match your wine selection to make sure no guest leaves thirsty. </p>
                            <div className="" style={{fontSize: "15px"}}>*all wine will be sold at wholesale
                                prices
                                <br/>*$120 service fee added to all event orders that include wine <br/>
                                *please provide 48-hour notice so we can make sure we have your selected wines in stock
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="fs-1 fw-bolder text-primary mb-5 mt-5 text-center">Build for your loved one's</div>

            {cateringMenu.length ? <div className="container-sm mb-3">
                <div className="row mt-3 justify-content-center">
                    <div className="col-md-3 col-9 mx-auto mb-3" style={{marginLeft: '-50px'}}>
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
                    </div>
                    <div className="col-md-9 col-12 ">
                        {selectedMenuId === 0 && isWineSelected ? <WineOrderMenu/> : <CateringDetailMenu
                            xl={xl}
                            md={md}
                            id={selectedMenuId}
                        />}
                        {selectedMenuId === '1' ? <CateringSubForm/> : []}
                    </div>
                </div>
            </div> : <div className="m-5"><ComponentSpinner/></div>}
            <Footer/>
        </div>
    )
}

export default Catering
