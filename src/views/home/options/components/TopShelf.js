import React from 'react'

const TopShelf = (props) => {
    return (
        <>
            <div className="container-sm">
                <div className="row my-5">
                    <div className="col-md-5 col-12">
                        <img src={props.image} alt="..." style={{width: "87%", borderRadius: 20}}/>
                    </div>
                    <div className="col-md-6 col-12  mt-1">
                        <div className="text-primary fw-bolder "
                             style={{fontSize: "1.8rem", textTransform: 'uppercase'}}>build your
                        </div>
                        <div className="text-primary fw-bolder "
                             style={{
                                 fontSize: "3.6rem",
                                 textTransform: 'uppercase'
                             }}>{props.fooditem}</div>
                        <p style={{fontSize: "1.3rem ", lineHeight: 1.4, color: "black"}}>Your choice of freshly grilled
                            meat
                            or sofritas served
                            in a delicious bowl with rice, beans, or fajita veggies, and topped with guac, salsa, queso
                            blanco, sour cream or cheese.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopShelf