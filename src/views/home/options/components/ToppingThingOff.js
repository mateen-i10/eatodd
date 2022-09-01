import React, {useState} from 'react'
import {MdArrowBackIos} from "react-icons/all"
import {MoreVertical} from "react-feather"
import CheckSign from "./Utility/CheckSign"
import {ExtraQty} from "./Utility/LighExSid"

const ToppingThingOff = (props) => {
    const [selectedTopping, setSelectedTopping] = useState(false)
    const [customizeTopping, setCustomizeTopping] = useState(false)
    const [normalTopping, setNormalTopping] = useState(false)
    const [extraTopping, setExtraTopping] = useState(false)


    const {element, foodImage, ingredient, title, onItemSelect, toppingItems, itemId} = props


    return (
        <>

            <div className="card add overflow-hidden mb-lg-2 mb-1 cursor-pointer "
                 style={!selectedTopping ? {maxHeight: 120, marginBottom: 7} : {
                     maxHeight: 120,
                     marginBottom: 7,
                     borderWidth: 1,
                     borderColor: 'black'
                 }}>
                {customizeTopping ? <div
                    className={customizeTopping ? "row showCard justify-content-center align-items-center " : "hiddenCard"}>
                    <div className=" col-5 bg-primary text-center text-white cursor-pointer  "
                         style={{height: 130}} onClick={() => {
                        setNormalTopping(true)
                        setExtraTopping(false)
                        setCustomizeTopping(false)
                    }}>
                        <div style={{marginTop: 46, fontSize: 19, fontWeight: 700}}
                        >Normal
                        </div>
                    </div>
                    <div className=" col-5 text-center text-dark doubleQty cursor-pointer hoveredItem"
                         style={{height: 130}}
                         onClick={() => {
                             setNormalTopping(false)
                             setExtraTopping(true)
                             setCustomizeTopping(false)
                         }}>
                        <div style={{marginTop: 46, fontSize: 19, fontWeight: 700}}
                        >Extra
                        </div>
                    </div>
                    <div className="col-2 text-center  cursor-pointer hoveredItem" style={{height: 130}}
                         onClick={() => setCustomizeTopping(!customizeTopping)}>
                        <div className=" text-primary"
                             style={{marginTop: 34, fontSize: 30, fontWeight: 700}}
                        ><MdArrowBackIos/>
                        </div>
                    </div>
                </div> : <div className="row g-0">
                    <div className="col-10" onClick={() => {
                        setSelectedTopping(!selectedTopping)

                    }}>
                        <div className="row g-0 " onClick={() => {
                            onItemSelect(element)
                        }
                        }>
                            {toppingItems.map((item, index) => {
                                // eslint-disable-next-line multiline-ternary
                                if (toppingItems.length >= 1 && normalTopping === true) {
                                    // eslint-disable-next-line multiline-ternary
                                    return (item.id === itemId ?
                                        <CheckSign key={index}/> : "")
                                } else if (toppingItems.length >= 1 && extraTopping === true) {
                                    // eslint-disable-next-line multiline-ternary
                                    return (item.id === itemId ?
                                        <ExtraQty key={index}/> : "")
                                } else if (selectedTopping === true) {
                                    // eslint-disable-next-line multiline-ternary
                                    return (item.id === itemId ?
                                        <CheckSign key={index}/> : "")
                                }
                            })}
                            <div className="col-lg-3 col-3">
                                <div>
                                    <img src={foodImage} className="img-fluid rounded-start" alt="..."
                                         style={{
                                             width: "100%",
                                             height: 120,
                                             objectFit: "fill",
                                             userSelect: "none",
                                             // objectPosition: "100% 100%"
                                             marginTop: 0
                                         }}/>
                                </div>
                            </div>
                            <div className="col-lg-9 col-9">
                                <div className="card-body d-flex">
                                    <div className='flex-fill'>
                                        <h5 className="card-title text-uppercase mt-0 mb-0 text-primary fw-bolder user-select-none ">{title}</h5>
                                        <p className="mb-0" style={{textOverflow: "ellipsis"}}>{ingredient}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-2 mt-2 text-end">
                        <div className=" moreAddon cursor-pointer me-2 "
                             onClick={() => {
                                 setCustomizeTopping(!customizeTopping)
                             }}>
                            <MoreVertical size={34}/></div>
                        {/*<UncontrolledTooltip placement='left' target={itemId}*/}
                        {/*                     style={{fontSize: 16}}>*/}
                        {/*    Click to Customize*/}
                        {/*    <MdNavigateNext size={28} color="rgba(225, 225, 225, .3)"*/}
                        {/*                    style={{marginLeft: 0}}/>*/}
                        {/*    <MdNavigateNext size={28} color="rgba(225, 225, 225, .7)"*/}
                        {/*                    style={{marginLeft: -17}}/>*/}
                        {/*    <MdNavigateNext size={28} color="white" style={{marginLeft: -17}}/>*/}

                        {/*</UncontrolledTooltip>*/}
                        {/*<h5 className=" fw-bolder text-dark me-2 " style={{marginTop: 25}}>${price}</h5>*/}
                    </div>

                </div>
                }
            </div>

        </>
    )
}

export default ToppingThingOff
