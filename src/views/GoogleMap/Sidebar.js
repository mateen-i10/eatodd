import React, {useState} from 'react'
import {Button, TabContent, TabPane} from "reactstrap"
import DeliveryTab from "./component/DeliveryTab"
import PickUpTab from "./component/PickUpTab"

const Sidebar = ({places, setPickDelivery, setUserLocation, onPlaceChanged, onLoad}) => {
    const [active, setActive] = useState('1')
    const [activeColor, setActiveColor] = useState("1")
    const showActiveColor = (selectedButton) => {
        setActiveColor(selectedButton)
    }
    const toggle = (tab, gMapSelect) => {
        setActive(tab)
        setPickDelivery(gMapSelect)
        setUserLocation(null)
    }
    return (
        <>
            <div
                className="d-flex flex-column flex-shrink-0 p-3 bg-light container-sm align-items-center"
                style={{
                    position: "relative",
                    maxWidth: "100%",
                    height: "100vh",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    zIndex: "100",
                    overflowY: "auto"
                }}
            >
                <div className="row align-items-center  justify-content-evenly text-center fs-5 " style={{
                    backgroundColor: "white",
                    height: "42px",
                    width: " 264px",
                    borderRadius: "100px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                }}>
                    <Button className="col-3 text-uppercase" name="1" color={activeColor === "1" ? "primary" : "flat"}
                            style={{
                                height: "42px",
                                width: " 132px",
                                borderRadius: "50px",
                                paddingTop: "12px",
                                marginLeft: "0px"
                            }}
                            active={active === '1'}
                            onClick={() => {
                                toggle('1', true)
                                showActiveColor("1")
                            }}>PickUp
                    </Button>
                    <Button className="col-3 text-uppercase " name="2" color={activeColor === "2" ? "primary" : "flat"}
                            style={{
                                height: "42px",
                                width: " 132px",
                                borderRadius: "50px",
                                paddingTop: "12px"
                            }} active={active === '2'}
                            onClick={() => {
                                toggle('2', false)
                                showActiveColor("2")
                            }}
                    >delivery
                    </Button>
                </div>
                <div className="row align-items-center  justify-content-evenly mt-2" style={{
                    minWidth: " 285px"
                }}>
                    <TabContent className='py-50' activeTab={active}>
                        <TabPane tabId='1'>
                            <div style={{borderRadius: "6px"}}>
                                <PickUpTab places={places}/>
                            </div>
                        </TabPane>
                        <TabPane tabId='2'>
                            <DeliveryTab setUserLocation={setUserLocation} onPlaceChanged={onPlaceChanged}
                                         onLoad={onLoad}/>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </>
    )
}

export default Sidebar
