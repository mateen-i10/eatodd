import React, {useEffect, useState} from 'react'
import {MoreVertical} from "react-feather"
import '../style/StyleSheet.css'
import {MdArrowBackIos} from "react-icons/all"
import OneX from "./Utility/OneX"
import Half from "./Utility/Half"
import TwoX from "./Utility/TwoX"
import CheckSign from "./Utility/CheckSign"

const ProteinVege = (props) => {
    const {
        itemId,
        title,
        element,
        price,
        foodImage,
        ingredient,
        selectedProVeg,
        doubled,
        setDoubled,
        onItemClick
    } = props

    const [value, setValue] = useState(false)
    const [customize, setCustomize] = useState(false)
    const [isProVegLength2, setIsProVegLength2] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsProVegLength2(false)
        }, 2000)
    }, [isProVegLength2])

    // console.log("proVeg length is 2", isProVegLength2)
    // console.log("selected item", selectedProVeg.length)
    return (
        <>
            <div className="card  add mb-lg-2 mb-1 overflow-hidden "
                 style={!value ? {marginBottom: 25, maxHeight: 140} : {
                     marginBottom: 25,
                     maxHeight: 140,
                     borderWidth: 1,
                     borderColor: "black"
                 }}>
                <div className={isProVegLength2 ? "showFilling" : "hideFilling"} style={{
                    position: "absolute",
                    top: 30,
                    zIndex: 1,
                    backgroundColor: 'rgba(129, 190, 65, 1)',
                    color: 'white',
                    maxWidth: '50%',
                    marginLeft: '30%',
                    height: "35px",
                    width: '300px',
                    textAlign: "center",
                    padding: '3px',
                    fontSize: '1.4rem',
                    fontWeight: 500,
                    borderRadius: "3px"
                }}>You can select only 2 fillings
                </div>
                {/* eslint-disable-next-line multiline-ternary */}
                {customize ?
                    <div
                        className={customize ? "row showCard justify-content-center align-items-center " : "hiddenCard"}>
                        <div className=" col-5 bg-primary text-center text-white cursor-pointer "
                             style={{height: 130}} onClick={() => {
                            setDoubled(false)
                            setCustomize(false)
                        }}>
                            <div style={{marginTop: 42, fontSize: 26, fontWeight: 700}}
                            >Normal
                            </div>
                        </div>
                        <div className=" col-5 text-center text-dark doubleQty cursor-pointer" style={{height: 130}}
                             onClick={() => {
                                 setDoubled(true)
                                 setCustomize(false)

                             }}>
                            <div style={{marginTop: 42, fontSize: 26, fontWeight: 700}}
                            >Double
                            </div>
                        </div>
                        <div className="col-2 text-center border-dark cursor-pointer" style={{height: 130}}
                             onClick={() => setCustomize(!customize)}>
                            <div className=" text-primary"
                                 style={{marginTop: 42, fontSize: 30, fontWeight: 700}}
                            ><MdArrowBackIos/>
                            </div>
                        </div>
                    </div> : <div className="row g-0">
                        <div className="col-md-10 col-10 " onClick={() => {
                            onItemClick(element)
                            setValue(!value)
                            if (selectedProVeg.length === 2) {
                                setIsProVegLength2(true)
                                setValue(false)
                            }
                        }}>
                            <div className="row g-0">
                                <div className="col-lg-4  col-md-4 col-5">
                                    {selectedProVeg.map(item => {
                                        if (selectedProVeg.length === 1 && doubled === false) {
                                            return (item.id === itemId ? <CheckSign key={item.id}/> : "")
                                        } else if (selectedProVeg.length === 1 && doubled === true) {
                                            return (item.id === itemId ? <TwoX key={item.id}/> : "")
                                        }
                                        if (selectedProVeg.length === 2 && doubled === false) {
                                            return (item.id === itemId ? <Half key={item.id}/> : "")
                                        } else if (selectedProVeg.length === 2 && doubled === true) {

                                            return (item.id === itemId ? <OneX key={item.id}/> : "")
                                        }

                                    })}

                                    <img src={foodImage} className="img-fluid rounded-start" alt="..."
                                         style={!value ? {
                                             width: "100%",
                                             height: 180,
                                             objectFit: "cover",
                                             marginLeft: -8,
                                             marginTop: -19

                                         } : {
                                             width: "100%",
                                             height: 180,
                                             backgroundColor: 'transparent',
                                             objectFit: "cover",
                                             overflow: "hidden",
                                             marginLeft: -8,
                                             marginTop: -19
                                         }}/>
                                </div>
                                <div className="col-lg-8 col-md-8 col-7">
                                    <div className="card-body ">
                                        <div className=''>
                                            <div
                                                className="card-title text-start text-uppercase mt-0 mb-0 text-primary fw-bolder"
                                                style={{fontSize: '1.2rem'}}>{title}</div>
                                            <p className="mb-0 text-dark  ">{ingredient}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-2 mt-2 text-end">
                            <div className=" moreAddon cursor-pointer me-2 " id={itemId}
                                 onClick={() => {
                                     setCustomize(!customize)
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

export default ProteinVege