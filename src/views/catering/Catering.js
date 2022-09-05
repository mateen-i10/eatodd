import Header from "../../shared/header/Header"
import Footer from "../../shared/footer/Footer"
import './components/stylesheet/Menu.css'
import React, {useState} from "react"
import {categories} from "../../tempData/cateringDb"
import DetailsMenuPage from "./components/DetailsMenuPage"
import bckimg1 from '../../assets/images/my-images/imgcatering.jpg'

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
{/*////*/}
            <div className='bg-dark'>
                <div className="container-fluid" style={{
                    backgroundImage: `url(${bckimg1})`,
                    backgroundWidth: '150px',
                    backgroundSize: 'cover'
                }}>
                    <div className="row" style={{textAlign: 'center', paddingTop: 120}}>
                        <div className="col-sm">
                            <h1 style={{
                                color: 'white',
                                fontSize: 40,
                                lineHeight: .92,
                                fontFamily: 'TradeGothicLTCom,TradeGothic,sans-serif',
                                display: 'block',
                                letterSpacing: 5,
                                fontWeight: 700,
                                width: '100%'
                            }}>NEED TO FEED</h1>
                            <h6 style={{
                                color: 'white',
                                fontSize: 40,
                                lineHeight: .92,
                                fontFamily: 'TradeGothicLTCom,TradeGothic,sans-serif',
                                display: 'block',
                                letterSpacing: 3,
                                fontWeight: 700,
                                width: '100%'
                            }}>A TEAM TODAY?</h6>
                            <h6 style={{
                                color: 'white',
                                fontSize: 18,
                                marginTop: 35,
                                marginBottom: 50,
                                fontFamily: 'Helvetica,Arial,sans-serif'
                            }}>Invite colleagues and clients to build<br/> a group order. <br /> Minimum 2 people.</h6>
                            <div style={{marginTop: 60}}></div>
                        </div>
                    </div>
                </div>
            </div>
            {/*///*/}

            <div className="fs-1 fw-bolder text-primary mb-5 mt-5 text-center">Build for your loved one's</div>
            <div className='bg-white'>
                <div className="container-sm mb-3">
                    <div className="row mt-3 justify-content-center">
                        <div className="col-md-3 col-sm-12 mb-3" style={{marginLeft: '-50px'}}>
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
                        <div className="col-md-8 col-10 ">
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