import Header from "../../shared/header/Header"
import Footer from "../../shared/footer/Footer"
import './components/stylesheet/Menu.css'
import React, {useState} from "react"
import {wineHomePgData} from "../../tempData/wineClubData"
import DetailsMenuPage from "./components/DetailsMenuPage"

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState("Sparkling")
    const [elHovered, setElHovered] = useState({})

    const wineClubData = wineHomePgData
    const categories = [...new Set(wineClubData.map(o => o.category))]
    const sparkling = wineClubData.filter(item => item.category === "Sparkling")
    const white = wineClubData.filter(item => item.category === "White")
    const rose = wineClubData.filter(item => item.category === "Rose")
    const red = wineClubData.filter(item => item.category === "Red")

    const xl = "6"
    const md = "6"
    const toggleList = item => {
        if (selectedCategory !== item) {
            setSelectedCategory(item)
        }
    }
    return (
        <div>
            <Header/>
            <div className='bg-white'>
                <div className="container-sm">
                    <div className="row mt-3 justify-content-center">
                        <div className="col-md-4 col-sm-12 mt-4 mb-3 ">
                            <div style={{

                                borderRight: "6px solid rgb(129 190 65)"

                            }}>
                                {categories.map((item, i) => (
                                    <div key={i}
                                         className={`fs-3 fw-bolder  ms-2 cursor-pointer  ${elHovered[i] ? "text-primary" : ""}  `}
                                         style={{lineHeight: "35px"}}
                                         onMouseOver={() => (setElHovered({...elHovered, [i]: true}))}
                                         onMouseLeave={() => (setElHovered({...elHovered, [i]: false}))}
                                         onClick={() => {
                                             toggleList(item)
                                         }}
                                    >
                                        <div className="text-center">{item}</div>
                                    </div>
                                ))}

                            </div>

                        </div>

                        <div className="col-md-7 col-10 ">
                            <DetailsMenuPage selectedCategory={selectedCategory}
                                             sparkling={sparkling}
                                             white={white}
                                             rose={rose}
                                             red={red}
                                             xl={xl}
                                             md={md}
                            />
                        </div>
                    </div>
                </div>
                {/*<div className="container-fluid">*/}
                {/*    <div className="row" style={{textAlign: 'center', paddingTop: 120}}>*/}
                {/*        <div className="col-sm">*/}
                {/*            <h1 style={{*/}
                {/*                color: '#57ab00',*/}
                {/*                fontSize: 40,*/}
                {/*                lineHeight: .92,*/}
                {/*                fontFamily: 'TradeGothicLTCom,TradeGothic,sans-serif',*/}
                {/*                display: 'block',*/}
                {/*                letterSpacing: -5,*/}
                {/*                fontWeight: 700,*/}
                {/*                width: '100%'*/}
                {/*            }}>NEED TO FEED</h1>*/}
                {/*            <h6 style={{*/}
                {/*                color: '#57ab00',*/}
                {/*                fontSize: 40,*/}
                {/*                lineHeight: .92,*/}
                {/*                fontFamily: 'TradeGothicLTCom,TradeGothic,sans-serif',*/}
                {/*                display: 'block',*/}
                {/*                letterSpacing: -5,*/}
                {/*                fontWeight: 700,*/}
                {/*                width: '100%'*/}
                {/*            }}>A TEAM TODAY?</h6>*/}
                {/*            <h6 style={{*/}
                {/*                color: '#736357',*/}
                {/*                fontSize: 18,*/}
                {/*                marginTop: 35,*/}
                {/*                marginBottom: 50,*/}
                {/*                fontFamily: 'Helvetica,Arial,sans-serif'*/}
                {/*            }}>Invite colleagues and clients to build<br/> a group order. Minimum 2 people.</h6>*/}
                {/*            <div style={{marginTop: 60}}></div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            <Footer/>
        </div>
    )
}

export default Menu