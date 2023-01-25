import React, {useState} from 'react'
import chilli from "../../../../assets/images/ORDER/chilli.png"
import {Plus} from "react-feather"

const SampleCard = () => {
    const [noneSelected, setNoneSelected] = useState(false)
    return (
        <>
            <div className="col-12 card mx-auto justify-content-center align-items-start" onClick={() => setNoneSelected(!noneSelected)} style={!noneSelected ? {
                marginBottom: 25,
                maxHeight: 98,
                minHeight: 98,
                borderWidth: 2,
                borderColor: "rgba(235,235,235, 0.9)"
            } : {
                marginBottom: 25,
                maxHeight: 98,
                minHeight: 98,
                borderWidth: 2,
                borderColor: "black"
            }}>
                <div className="row">
                    <div className="col-md-10 col-10 ">
                        <div className="row g-0">
                            <div className="col-lg-4 col-md-4 col-5">
                                <img className="mx-2 mt-2" src={chilli} alt="image" height="60%" width="70%"/>
                                {/*<ProductImage*/}
                                {/*    attachment={attachment}*/}
                                {/*    classes={"img-fluid rounded-start"}*/}
                                {/*    styles={!value ? imgStyles : {*/}
                                {/*        ...imgStyles,*/}
                                {/*        backgroundColor: 'transparent',*/}
                                {/*        overflow: "hidden",*/}
                                {/*        objectFit: "cover"*/}
                                {/*    }}/>*/}
                            </div>
                            <div className="col-lg-8 col-md-8 col-7 mt-2">
                                <div className="card-body ">
                                    <div className=''>
                                        <div
                                            className="card-title text-start text-uppercase mb-0 text-primary fw-bolder "
                                            style={{
                                                fontSize: '1.1em',
                                                lineHeight: "18px",
                                                marginTop: "-6px"
                                            }}></div>
                                        <p className="mb-0 text-dark text-uppercase fs-5 fw-bolder text-primary ">Chicken Kabob</p>

                                    </div>
                                </div>
                                {/*{item && item.options && item.options.length > 1 && <div className='bg-primary tooltipAdd d-none fs-5 text-white' style={{*/}
                                {/*    position: 'absolute',*/}
                                {/*    zIndex: 2,*/}
                                {/*    top: 15,*/}
                                {/*    right: 50,*/}
                                {/*    paddingLeft: 8,*/}
                                {/*    paddingRight: 2*/}
                                {/*}}>Add Quantity<ArrowRight style={{marginTop: 2}} size={18}/></div> }*/}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-2 pt-1 text-end mt-2">
                        {/*{item && item.options && item.options.length > 1 &&*/}
                            <div className=" moreAddon cursor-pointer me-2"
                                 // id={item?.id}
                                 // onMouseOver={() => setCustomize(!customize)}
                            >
                                <Plus size={20}
                                />
                            </div>
                        {/*}*/}
                        <h5 className=" fw-bolder text-dark me-2 "
                            style={{marginTop: 25}}>$ 5
                            {/*{item && item.price ? `$${item.price}` : ''}*/}
                        </h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SampleCard
