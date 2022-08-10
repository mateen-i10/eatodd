import React, {useState} from 'react'
import NormLightExSide from "./NormLightExSide"
import CheckSign from "./Utility/CheckSign"
import {ExtraQty, LightQty, SideQty} from "./Utility/LighExSid"
import Half from "./Utility/Half"
import {MoreVertical} from "react-feather"
import "../style/StyleSheet.css"

const Beans = (props) => {
    const [customizeBeans, setCustomizeBeans] = useState(false)
    const [selected, setSelected] = useState(false)
    const [beansNormalQty, setBeansNormalQty] = useState(false)
    const [beansLightQty, setBeansLightQty] = useState(false)
    const [beansExtraQty, setBeansExtraQty] = useState(false)
    const [beansSideQty, setBeansSideQty] = useState(false)

    const {element, foodImage, ingredient, itemId, onBeanSelected, selectedBeans, title} = props

    return (<>
            <div className="card add overflow-hidden mb-lg-2 mb-1"
                 style={!selected ? {marginBottom: 25, maxHeight: 140} : {
                     marginBottom: 25,
                     maxHeight: 140,
                     borderWidth: 1,
                     borderColor: "black"
                 }}>
                {customizeBeans ? <div
                    className={customizeBeans ? "row showCard justify-content-center align-items-center " : "hiddenCard"}>
                    <NormLightExSide
                        cutomize={customizeBeans}
                        setCustomize={setCustomizeBeans}
                        setLightQty={setBeansLightQty}
                        setExtraQty={setBeansExtraQty}
                        setSideQty={setBeansSideQty}
                        setNormalQty={setBeansNormalQty}
                        element={element}
                        selectedItem={selectedBeans}
                        onItemSelect={onBeanSelected}
                    />
                </div> : <div className="row g-0">
                    <div className="col-md-10 col-10 "
                         onClick={() => {
                             setSelected(!selected)
                             onBeanSelected(element)
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
                                {selectedBeans.map(item => {
                                    // eslint-disable-next-line multiline-ternary
                                    if (selectedBeans.length === 1 && beansNormalQty === true) {
                                        // eslint-disable-next-line multiline-ternary
                                        return (item.id === itemId ?
                                            <CheckSign key={item.id}/> : "")
                                    } else if (selectedBeans.length === 1 && beansExtraQty === true) {
                                        // eslint-disable-next-line multiline-ternary
                                        return (item.id === itemId ?
                                            <ExtraQty key={item.id}/> : "")
                                    } else if (selectedBeans.length === 1 && beansLightQty === true) {
                                        // eslint-disable-next-line multiline-ternary
                                        return (item.id === itemId ?
                                            <LightQty key={item.id}/> : "")
                                    } else if (selectedBeans.length === 1 && beansSideQty === true) {
                                        // eslint-disable-next-line multiline-ternary
                                        return (item.id === itemId ?
                                            <SideQty key={item.id}/> : "")
                                    } else if (selectedBeans.length === 1) {
                                        // eslint-disable-next-line multiline-ternary
                                        return (item.id === itemId ?
                                            <CheckSign key={item.id}/> : "")
                                    }
                                    if (selectedBeans.length === 2) {

                                        // eslint-disable-next-line multiline-ternary
                                        return (item.id === itemId ?
                                            <Half key={item.id}/> : "")
                                    }
                                })}

                                <img src={foodImage} className="img-fluid rounded-start" alt="..."
                                     style={!selected ? {
                                         width: "100%",
                                         height: 150,
                                         objectFit: "cover",
                                         marginLeft: -10,
                                         marginTop: -11

                                     } : {
                                         width: "100%",
                                         height: 150,
                                         backgroundColor: 'transparent',
                                         objectFit: "cover",
                                         overflow: "hidden",
                                         marginLeft: -10,
                                         marginTop: -11
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
                                 setCustomizeBeans(!customizeBeans)
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

export default Beans
