import React from 'react'

const TopShelf = (props) => {
    return (
        <>
            <div className="container">
                <div className="row my-5">
                    <div className="col">
                        <img src={props.image} alt="..." style={{width:400, borderRadius:'2rem', marginLeft:80}} />
                    </div>
                    <div className="col my-4" style={{textTransform:'uppercase'}}>
                        <h4>build your</h4>
                        <h1>{props.fooditem}</h1>
                        <p style={{textTransform:'lowercase'}}>Your choice of freshly grilled meat or sofritas served in a delicious bowl with rice, beans, or fajita veggies, and topped with guac, salsa, queso blanco, sour cream or cheese.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopShelf