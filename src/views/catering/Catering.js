import Header from "../../shared/header/Header"
import Footer from "../../shared/footer/Footer"
import './components/stylesheet/Menu.css'
import React, {useState} from "react"
import {categories} from "../../tempData/cateringDb"
import DetailsMenuPage from "./components/DetailsMenuPage"

const Catering = () => {
    const [selectedCategory, setSelectedCategory] = useState(1)
    const [elHovered, setElHovered] = useState({})

    const xl = "6"
    const md = "6"
    const toggleList = item => {
        if (selectedCategory !== item.id) {
            setSelectedCategory(item.id)
        }
    }
    return (
        <div>
            <Header/>
            <div className="fs-1 fw-bolder text-primary mb-3 mt-5 text-center">Build for your love one's</div>
            <div className='bg-white'>
                <div className="container-sm mb-3">
                    <div className="row mt-3  justify-content-center">
                        <div className="col-md-4 col-sm-12 mt-4 mb-3 ">
                            <div className="text-center fs-2 fw-bolder text-primary">Menu</div>
                            <hr/>
                            <div style={{
                                borderRight: "6px solid rgb(129 190 65)"
                            }}>
                                {categories.map((item, i) => (
                                    <div key={i}
                                         className={`fs-3 fw-bolder  ms-2 cursor-pointer mb-1  ${elHovered[i] ? "text-primary" : ""}  `}
                                         style={{lineHeight: "35px"}}
                                         onMouseOver={() => (setElHovered({...elHovered, [i]: true}))}
                                         onMouseLeave={() => (setElHovered({...elHovered, [i]: false}))}
                                         onClick={() => {
                                             toggleList(item)
                                         }}
                                    >
                                        <div className="text-start">{item.title}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-7 col-10 ">
                            <DetailsMenuPage selectedCategory={selectedCategory}
                                             xl={xl}
                                             md={md}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Catering