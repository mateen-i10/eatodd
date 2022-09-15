import React, {useState} from 'react'
import CheckSign from "../../home/options/components/Utility/CheckSign"


const CatMenuItems = ({product}) => {
    const [value, setValue] = useState(false)
    return (
        <div className="card mb-lg-2 mb-1 overflow-hidden  " onClick={() => {
            setValue(!value)
        }}
             style={!value ? {
                 marginBottom: 25,
                 maxHeight: 140,
                 minHeight: 140,
                 borderWidth: 1
             } : {
                 marginBottom: 25,
                 maxHeight: 140,
                 minHeight: 140,
                 borderWidth: 1,
                 borderColor: "black"
             }}>
            <div className="row g-0">
                <div className=" col-9 ">
                    <div className="row g-0">
                        <div className=" col-4">
                            {value === true &&
                                <div className="  " style={{
                                    position: 'absolute',
                                    backgroundColor: 'transparent',
                                    zIndex: 3
                                }}><CheckSign/>
                                </div>}
                            <img src={product.image} className="img-fluid rounded-start" alt="..."
                                 style={{
                                     width: "100%",
                                     height: 140,
                                     backgroundColor: 'transparent',
                                     objectFit: "fill",
                                     overflow: "hidden"
                                 }}/>
                        </div>
                        <div className="col-8 ">
                            <div className="card-body " style={{
                                marginTop: -4
                            }}>
                                <div
                                    className="card-title mb-0 text-start text-uppercase  text-primary fw-bolder"
                                    style={{fontSize: '1.2rem'}}>{product.name}
                                </div>
                                <p className="text-dark">{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" col-3 mt-2 text-end">
                    <h5 className=" fw-bolder text-dark me-2 " style={{marginTop: 25}}>${product.price}</h5>
                </div>
            </div>
        </div>
    )
}

export default CatMenuItems
