import Header from "../../../shared/header/Header"
import Footer from "../../../shared/footer/Footer"
import '../components/stylesheet/Menu.css'
import React, {useEffect, useState} from "react"
import CateringDetailMenu from "../components/CateringDetailMenu"
import useAPI from "../../../utility/customHooks/useAPI"
import ComponentSpinner from "../../../@core/components/spinner/Loading-spinner"

const Catering = () => {
    const [elHovered, setElHovered] = useState({})
    const [cateringMenu, setCateringMenu] = useState([])
    const [activeItem, setActiveItem] = useState(0)
    const [selectedMenuId, setSelectedMenuId] = useState(0)
    const [isLoading, response] = useAPI('CateringMenu?TotalPages=1&PageIndex=1&PageSize=5', 'get', {}, {}, true)


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
            setCateringMenu(final)
        }


    }, [response])
    useEffect(() => {
        setActiveItem(cateringMenu.length ? cateringMenu[0].id : 0)
        setSelectedMenuId(cateringMenu.length ? cateringMenu[0].id : 0)
    }, [cateringMenu])

    // console.log(cateringMenu)
    const xl = "6"
    const md = "6"
    const toggleList = item => {
        // console.log("Item", item)
        if (selectedMenuId !== item.id) {
            setActiveItem(item.id)
            setSelectedMenuId(item.id)
        }
    }

    return (
        <div>
            <Header/>
            <div className="container-sm">
                <div className="row">
                    <div className="col-md-4">
                        <img style={{width: '350px'}} className="new mt-5"
                             src={require("../../../assets/images/images/catring-wine.png").default}
                             height={400}
                        />
                    </div>
                    <div className="col-md-8 mt-5">
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
                                     onClick={() => {
                                         toggleList(item)
                                     }}
                                >
                                    <div
                                        className={`text-start text-uppercase ${activeItem === item.id ? "text-primary" : ""}`}
                                        style={{fontSize: 15}}>{item.name.toLowerCase() === 'home' ? null : item.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-9 col-12 ">
                        <CateringDetailMenu
                            xl={xl}
                            md={md}
                            id={selectedMenuId}
                        />
                    </div>
                </div>
            </div> : <div className="m-5"><ComponentSpinner/></div>}
            <Footer/>
        </div>
    )
}

export default Catering
