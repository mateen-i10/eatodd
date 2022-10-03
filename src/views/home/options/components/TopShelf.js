import React from 'react'
import ProductImage from "../../components/product/ProductImage"

const TopShelf = ({attachment, name, description}) => {
    return (
        <>
            <div className="container-sm mb-0">
                <div className="row mt-3 h-25">
                    <div className="col-md-5 col-12 m-0">
                        <ProductImage
                            attachment={attachment}
                            styles={{width: "85%", height: "77%", borderRadius: 20}}/>
                    </div>
                    <div className="col-md-6 col-12 mt-1">
                        <div className="text-primary fw-bolder "
                             style={{
                                 fontSize: "3.2rem",
                                 textTransform: 'uppercase'
                             }}>{name}</div>
                        <p style={{fontSize: "1.3rem ", lineHeight: 1.4, color: "black"}}>{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopShelf
