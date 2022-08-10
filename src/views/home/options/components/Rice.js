import React, {useState} from 'react'
import {MoreVertical} from "react-feather"
import CheckSign from "./Utility/CheckSign"
import Half from "./Utility/Half"
import "../style/StyleSheet.css"
import NormLightExSide from "./NormLightExSide"
import {ExtraQty, LightQty, SideQty} from "./Utility/LighExSid"

const Rice = (props) => {
    const [customizeRice, setCustomizeRice] = useState(false)
    const [selected, setSelected] = useState(false)
    const [normalQty, setNormalQty] = useState(false)
    const [lightQty, setLightQty] = useState(false)
    const [extraQty, setExtraQty] = useState(false)
    const [sideQty, setSideQty] = useState(false)

    const {
        element,
        title,
        ingredient,
        foodImage,
        onRiceSelected,
        selectedRice,
        itemId
    } = props

    return (<>
            <div className="card add overflow-hidden mb-lg-2 mb-1"
                 style={!selected ? {marginBottom: 25, maxHeight: 140} : {
                     marginBottom: 25,
                     maxHeight: 140,
                     borderWidth: 1,
                     borderColor: "black"
                 }}>
                {customizeRice ? <div
                    className={customizeRice ? "row showCard justify-content-center align-items-center " : "hiddenCard"}>
                    <NormLightExSide
                        cutomize={customizeRice}
                        setCustomize={setCustomizeRice}
                        setLightQty={setLightQty}
                        setExtraQty={setExtraQty}
                        setSideQty={setSideQty}
                        setNormalQty={setNormalQty}
                        element={element}
                        selectedItem={selectedRice}
                        onItemSelect={onRiceSelected}
                    />
                </div> : <div className="row g-0">
                    <div className="col-md-10 col-10 "
                         onClick={() => {
                             setSelected(!selected)
                             onRiceSelected(element)
                             //     onItemClick(element)
                             //     setValue(!value)
                             //     if (selectedProVeg.length === 2) {
                             //         setIsProVegLength2(true)
                             //         setValue(false)
                             //     }
                         }}
                    >
                        <div className="row g-0">
                            <div className="col-lg-4  col-md-4 col-5">
                                {selectedRice.map(item => {
                                    // eslint-disable-next-line multiline-ternary
                                    if (selectedRice.length === 1 && normalQty === true) {
                                        // eslint-disable-next-line multiline-ternary
                                        return (item.id === itemId ?
                                            <CheckSign key={item.id}/> : "")
                                    } else if (selectedRice.length === 1 && extraQty === true) {
                                        // eslint-disable-next-line multiline-ternary
                                        return (item.id === itemId ?
                                            <ExtraQty key={item.id}/> : "")
                                    } else if (selectedRice.length === 1 && lightQty === true) {
                                        // eslint-disable-next-line multiline-ternary
                                        return (item.id === itemId ?
                                            <LightQty key={item.id}/> : "")
                                    } else if (selectedRice.length === 1 && sideQty === true) {
                                        // eslint-disable-next-line multiline-ternary
                                        return (item.id === itemId ?
                                            <SideQty key={item.id}/> : "")
                                    } else if (selectedRice.length === 1) {
                                        // eslint-disable-next-line multiline-ternary
                                        return (item.id === itemId ?
                                            <CheckSign key={item.id}/> : "")
                                    }
                                    if (selectedRice.length === 2) {

                                        // eslint-disable-next-line multiline-ternary
                                        return (item.id === itemId ?
                                            <Half key={item.id}/> : "")
                                    }
                                })}

                                <img src={foodImage} className="img-fluid rounded-start" alt="..."
                                     style={!selected ? {
                                         width: "100%",
                                         height: 200,
                                         objectFit: "cover",
                                         marginLeft: -7,
                                         marginTop: -29

                                     } : {
                                         width: "100%",
                                         height: 200,
                                         backgroundColor: 'transparent',
                                         objectFit: "cover",
                                         overflow: "hidden",
                                         marginLeft: -7,
                                         marginTop: -29
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
                        <div className=" moreAddon cursor-pointer me-2 "
                             onClick={() => {
                                 setCustomizeRice(!customizeRice)
                             }}
                        >
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

                    </div>
                </div>}
            </div>
        </>
    )
}

export default Rice
