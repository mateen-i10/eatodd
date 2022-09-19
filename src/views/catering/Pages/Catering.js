import Header from "../../../shared/header/Header"
import Footer from "../../../shared/footer/Footer"
import '../components/stylesheet/Menu.css'
import React, {useState} from "react"
import {categories} from "../../../tempData/cateringDb"
import DetailsMenuPage from "../components/DetailsMenuPage"
import {ArrowRight} from "react-feather"
import {Button} from "reactstrap"

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
            <div className="container-sm">
                <div className="row">
                    <div className="col-md-4">
                        <img style={{width: '300px'}} className="new mt-5"
                             src={require("../../../assets/images/wineClub/Duckhorn Vinyards red.png").default}
                             height={380}
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
                        <Button color={"primary"} type="button" className="btn fs-4 d-inline-block "
                                style={{backgroundColor: '#57ab00', color: 'white', width: '380px'}}>Start your Catering
                            Order <ArrowRight/>
                        </Button>
                    </div>

                </div>
            </div>

            <div className="fs-1 fw-bolder text-primary mb-5 mt-5 text-center">Build for your loved one's</div>
            <div className='bg-white'>
                <div className="container-sm mb-3">
                    <div className="row mt-3 justify-content-center">
                        <div className="col-md-3 col-9 mx-auto mb-3" style={{marginLeft: '-50px'}}>
                            <div className="text-center fs-2 fw-bolder text-primary">Menu</div>
                            <hr/>
                            <div style={{
                                borderRight: "6px solid rgb(129 190 65)"
                            }}>
                                {categories.map((item, i) => (
                                    <div key={i}
                                         className={`fs-3 fw-bolder ms-2 cursor-pointer mb-1  ${elHovered[i] ? "text-primary" : ""}  `}
                                         style={{lineHeight: "35px"}}
                                         onMouseOver={() => (setElHovered({...elHovered, [i]: true}))}
                                         onMouseLeave={() => (setElHovered({...elHovered, [i]: false}))}
                                         onClick={() => {
                                             toggleList(item)
                                         }}
                                    >
                                        <div className="text-start" style={{fontSize: 15}}>{item.title}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-9 col-12 ">
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