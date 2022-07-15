import React from 'react'
import {CgClose, RiDirectionFill} from "react-icons/all"
import {Badge} from "reactstrap"

const DetailSidebar = ({places, markerClicked, setSelectedSidebar}) => {
    return (
        <>
            {places.map((place, i) => (
                markerClicked === place.id ? <div key={i} className="container-md mt-3 ms-2 " style={{
                    position: "relative",
                    maxWidth: "100%",
                    height: "90vh",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    zIndex: "100",
                    overflowY: "auto"
                }}>
                    <div className="row justify-content-start ">
                        <div className="col-10">
                            <div className="row">
                                <div className="col-10">
                                    <div className="fs-4 fw-bolder"
                                         style={{color: "rgb(129 190 65)"}}>{place.name}</div>
                                </div>
                                <div className="col-2">
                                    <CgClose
                                        onClick={() => setSelectedSidebar(false)}
                                        style={{
                                            color: "rgb(129 190 65)",
                                            cursor: "pointer",
                                            fontSize: "30px"
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center">
                        <div className=" col-12 p-1 text-uppercase"><Badge color="primary">
                            Pickup</Badge></div>
                        <div className="col-12 mt-1 p-1 fw-bold">{place.address}</div>
                        <a href={`https://maps.google.com?q=${place.position.lat},${place.position.lng}`}
                           target="_blank"
                           className="col-12 m-1 fs-5 text-uppercase text-primary fw-bolder text-decoration-underline">
                            <RiDirectionFill
                                size={24}
                                color="rgb(129 190 65)"/><span className="ms-1">Directions</span>
                        </a>
                        <div className="col-12 p-1 text-uppercase"><Badge color="danger">currently close</Badge></div>
                        <div className="col-12 fs-5 m-1">{place.opens}</div>
                    </div>
                    <div className="row">
                        <div className="col-10 btn btn-primary text-uppercase  ">pick from this restaurant</div>
                    </div>
                </div> : null
            ))}
        </>
    )
}

export default DetailSidebar
