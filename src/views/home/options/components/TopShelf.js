import React from 'react'
import ProductImage from "../../components/product/ProductImage"

const TopShelf = ({attachment, name, description, price}) => {
    return (
        <>
            <div className="container-sm mb-0">
                <div className="row mt-2 mx-auto align-items-center">
                    <div className="col-md-5">
                        <ProductImage
                            attachment={attachment}
                            styles={{height: "270px", borderRadius: 20, float: "left"}}/>
                    </div>
                    <div className="col-md-7">
                        <div className="align-middle">
                        <div className="text-primary fw-bolder "
                             style={{
                                 fontSize: "3rem",
                                 textTransform: 'uppercase'
                             }}>
                            {name}
                        </div>
                        {price && <p className="text-primary fw-bolder text-start "
                           style={{fontSize: "1.8rem", textTransform: 'uppercase'}}>{`$${price}/person`}</p>}
                        <p className="text-start" style={{fontSize: "1.3rem ", lineHeight: 1.4, color: "black"}}>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopShelf
