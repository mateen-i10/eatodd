import React from 'react'
import ProductImage from "../../components/product/ProductImage"
import {useHistory} from "react-router-dom"

const TopShelf = ({attachment, name, description, isWinePaired, restaurantId}) => {
    const history = useHistory()
    return (
        <>
            <div className="container-sm">
                <div className="row my-5">
                    <div className="col-md-5 col-12">
                        <ProductImage
                            attachment={attachment}
                            styles={{width: "85%", height: "75%", borderRadius: 20}}/>
                    </div>
                    <div className="col-md-6 col-12 mt-1">
                        <div className='row'>
                            <div className="col-sm-8 text-primary fw-bolder" style={{fontSize: "1.8rem", textTransform: 'uppercase'}}>
                                select your
                            </div>
                            {isWinePaired &&
                                <div className='col-sm-4 text-center cursor-pointer'><div className="delivery-addr-bar" onClick={() => {
                                    history.push("/wineOrderMenu", {restaurantId})
                                }}>
                                    <div className="delivery-text">
                                        <div className="deliver-to-1">Select Wine</div>
                                    </div>
                                </div>
                                </div>}
                        </div>

                        <div className="text-dark fw-bolder "
                             style={{
                                 fontSize: "3.6rem",
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
