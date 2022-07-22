import React, {useState} from 'react'
import Headerwine from "../../../shared/wine-header/Header-wine"
import Footer from "../../../shared/footer/Footer"
import HeroSection from "../components/HeroSection"
import "./Shop.css"
import {wineHomePgData} from "../../../tempData/wineClubData"
import CategoryFilteredData from "../components/CategoryFilteredData"

const Shop = () => {
    const wineClubData = wineHomePgData
    const categories = [...new Set(wineClubData.map(o => o.category))]
    const [elHovered, setElHovered] = useState({})
    const [selectedCategory, setSelectedCategory] = useState("Sparkling")
    const sparkling = wineClubData.filter(item => item.category === "Sparkling")
    const white = wineClubData.filter(item => item.category === "White")
    const rose = wineClubData.filter(item => item.category === "Rose")
    const red = wineClubData.filter(item => item.category === "Red")

    const xl = "3"
    const md = "4"

    const toggleList = item => {
        if (selectedCategory !== item) {
            setSelectedCategory(item)
        }
    }

    console.log(categories)
    return (
        <div>
            <Headerwine/>
            <HeroSection/>
            <div className="container-sm mt-4">
                <div className="row justify-content-center align-items-center">
                    {categories.map((item, i) => (
                        <div key={i}
                             className={`fs-3 fw-bolder  cursor-pointer col-md-2 col-5 ${elHovered[i] ? "text-primary" : ""}  `}
                             style={{lineHeight: "35px"}}
                             onMouseOver={() => (setElHovered({...elHovered, [i]: true}))}
                             onMouseLeave={() => (setElHovered({...elHovered, [i]: false}))}
                             onClick={() => {
                                 toggleList(item)
                             }}>{item}
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-lg-11 col-md-12 col-9  mt-4 container-sm">
                <CategoryFilteredData selectedCategory={selectedCategory}
                                      sparkling={sparkling}
                                      white={white}
                                      rose={rose}
                                      red={red}
                                      xl={xl}
                                      md={md}
                />
                {/*{*/}
                {/*    <Fragment>*/}
                {/*        <Row className="align-items-center  ">*/}
                {/*            {wineClubData.map(item => (*/}
                {/*                <WineCards key={item.id} item={item} xl={xl} md={md}/>*/}
                {/*            ))}*/}
                {/*        </Row>*/}
                {/*    </Fragment>*/}
                {/*}*/}
            </div>
            <Footer/>
        </div>

    )
}
export default Shop