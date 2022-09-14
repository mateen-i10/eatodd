import React, {useState} from 'react'
import Counter from "./Counter"
import {MdArrowBackIos} from "react-icons/all"
import {MoreVertical} from "react-feather"

const Drinks = (props) => {
    const [selectedDrink, setSelectedDrink] = useState(false)
    const [customizeDrink, setCustomizeDrink] = useState(false)
    const {foodImage, ingredient, price, title, element, onDrinkSelect} = props


    return (
        <>
            {selectedDrink === true &&
                <div className="ms-md-1 ms-lg-2 ms-xl-2 ms-1 m-0 mt-2" style={{
                    position: 'absolute',
                    backgroundColor: 'transparent',
                    zIndex: 1
                }}>
                    <Counter/>
                </div>}

            <div className="card add overflow-hidden mb-lg-2 mb-1 cursor-pointer "
                 style={!selectedDrink ? {maxHeight: 130, marginBottom: 7} : {
                     maxHeight: 130,
                     marginBottom: 7,
                     borderWidth: 1,
                     borderColor: 'black'
                 }}>
                {customizeDrink ? <div
                    className={customizeDrink ? "row showCard justify-content-center align-items-center " : "hiddenCard"}>
                    <div className=" col-5 bg-primary text-center text-white cursor-pointer  "
                         style={{height: 130}} onClick={() => {

                        setCustomizeDrink(false)
                    }}>
                        <div style={{marginTop: 46, fontSize: 19, fontWeight: 700}}
                        >32L OZ - $3.05
                        </div>
                    </div>
                    <div className=" col-5 text-center text-dark doubleQty cursor-pointer hoveredItem"
                         style={{height: 130}}
                         onClick={() => {
                             setCustomizeDrink(false)

                         }}>
                        <div style={{marginTop: 46, fontSize: 19, fontWeight: 700}}
                        >22L OZ -$2.75
                        </div>
                    </div>
                    <div className="col-2 text-center  cursor-pointer hoveredItem" style={{height: 130}}
                         onClick={() => setCustomizeDrink(!customizeDrink)}>
                        <div className=" text-primary"
                             style={{marginTop: 42, fontSize: 30, fontWeight: 700}}
                        ><MdArrowBackIos/>
                        </div>
                    </div>
                </div> : <div className="row g-0">
                    <div className="col-10" onClick={() => {
                        setSelectedDrink(!selectedDrink)
                        onDrinkSelect(element)

                    }}>
                        <div className="row g-0 ">
                            <div className="col-lg-3 col-3">
                                <div>
                                    <img src={foodImage} className="img-fluid rounded-start" alt="..."
                                         style={{
                                             width: "100%",
                                             height: 180,
                                             objectFit: "cover",
                                             userSelect: "none",
                                             objectPosition: "70% 100%",
                                             marginTop: -30
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
                                 setCustomizeDrink(!customizeDrink)
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
                        <h5 className=" fw-bolder text-dark me-2 " style={{marginTop: 25}}>${price}</h5>
                    </div>

                </div>
                }
            </div>

        </>
    )
}

export default Drinks
