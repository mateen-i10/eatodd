import React from 'react'
import {MdArrowBackIos} from "react-icons/all"

const NormLightExSide = (props) => {
    const {
        setCustomize,
        setSideQty,
        setExtraQty,
        setLightQty,
        element,
        onItemSelect,
        selectedItem,
        setNormalQty
    } = props
    return (
        <>
            <div className=" col-3 bg-primary text-center text-white cursor-pointer "
                 style={{height: 99}} onClick={() => {
                setCustomize(false)
                setNormalQty(true)
                setExtraQty(false)
                setCustomize(false)
                setSideQty(false)
                setLightQty(false)
                if (selectedItem.length === 0) {
                    onItemSelect(element)
                }
            }}>
                <div style={{marginTop: 52, fontSize: 18, fontWeight: 700}}
                >Normal
                </div>
            </div>
            <div className=" col-3 text-center text-dark hoveredItem cursor-pointer" style={{height: 99}}
                 onClick={() => {
                     setExtraQty(true)
                     setCustomize(false)
                     setSideQty(false)
                     setLightQty(false)
                     setNormalQty(false)
                     if (selectedItem.length === 0) {
                         onItemSelect(element)
                     }
                 }}>
                <div style={{marginTop: 52, fontSize: 18, fontWeight: 700}}
                >Extra
                </div>
            </div>
            <div className=" col-2 text-center text-dark hoveredItem cursor-pointer" style={{height: 99}}
                 onClick={() => {
                     setLightQty(true)
                     setExtraQty(false)
                     setCustomize(false)
                     setSideQty(false)
                     setNormalQty(false)
                     if (selectedItem.length === 0) {
                         onItemSelect(element)
                     }
                 }}>
                <div style={{marginTop: 52, fontSize: 18, fontWeight: 700}}
                >Light
                </div>
            </div>
            <div className=" col-2 text-center text-dark hoveredItem cursor-pointer" style={{height: 99}}
                 onClick={() => {
                     setLightQty(false)
                     setExtraQty(false)
                     setCustomize(false)
                     setSideQty(true)
                     setNormalQty(false)
                     if (selectedItem.length === 0) {
                         onItemSelect(element)
                     }
                 }}>
                <div style={{marginTop: 52, fontSize: 18, fontWeight: 700}}
                >Side
                </div>
            </div>
            <div className="col-2 text-center hoveredItem cursor-pointer" style={{height: 99}}
                 onClick={() => setCustomize(false)}>
                <div className=" text-primary"
                     style={{marginTop: 52, fontSize: 30, fontWeight: 700}}
                ><MdArrowBackIos/>
                </div>
            </div>
        </>
    )
}

export default NormLightExSide
