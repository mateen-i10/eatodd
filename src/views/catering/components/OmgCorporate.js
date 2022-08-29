import React from 'react'
import {BiCart} from "react-icons/all"

const OmgCorporate = (props) => {
    const {item} = props
    return (
        <>
            <div className="card overflow-hidden" style={{height: 140}}>
                <div className="row g-0">
                    <div className="col-md-10 col-10 ">
                        <div className="row g-0">
                            <div className="col-lg-4  col-md-4 col-5">
                                <img src={item.image} className="img-fluid rounded-start" alt="..."
                                     style={{
                                         width: "100%",
                                         height: 170,
                                         objectFit: "cover",
                                         marginLeft: -16,
                                         marginTop: -14,
                                         overflow: "hidden"
                                     }}/>
                            </div>
                            <div className="col-lg-8 col-md-8 col-7">
                                <div className="card-body ">
                                    <div className=''>
                                        <div
                                            className="card-title text-start text-uppercase mt-0 mb-0 text-primary fw-bolder"
                                            style={{fontSize: '1.2rem'}}>{item.title}</div>
                                        <p className="mb-0 text-dark  ">{item.detail}</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-2 mt-2 text-end">
                        <div className=" cursor-pointer me-2 ">
                            <BiCart size={34}/></div>
                        <h5 className=" fw-bolder text-dark me-2 " style={{marginTop: 25}}>${item.price}</h5>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OmgCorporate
