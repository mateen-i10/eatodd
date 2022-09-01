import React, {useState} from 'react'
import Counter from "./Counter"

const SideOrder = (props) => {

    const {foodImage, ingredient, price, title, onSideSelect, element} = props
    const [selected, setSelected] = useState(false)

    return (
        <>
            {selected === true &&
                <div className="ms-md-1 ms-lg-2 ms-xl-2 ms-1 m-0 mt-2" style={{
                    position: 'absolute',
                    backgroundColor: 'transparent',
                    zIndex: 3
                }}><Counter/>
                </div>}

            <div className="card add overflow-hidden mb-lg-2 mb-1 cursor-pointer " onClick={() => {
                setSelected(!selected)
                onSideSelect(element)

            }}
                 style={!selected ? {maxHeight: 130, marginBottom: 7} : {
                     maxHeight: 130,
                     marginBottom: 7,
                     borderWidth: 1,
                     borderColor: 'black'
                 }}>
                <div className="row g-0 "
                >
                    <div className="col-lg-3 col-3">
                        <div>
                            <img src={foodImage} className="img-fluid rounded-start" alt="..."
                                 style={{
                                     width: "100%",
                                     height: 137,
                                     objectFit: "contain",
                                     userSelect: "none"
                                 }}/>
                        </div>
                    </div>
                    <div className="col-lg-9 col-9">
                        <div className="card-body d-flex">
                            <div className='flex-fill'>
                                <h5 className="card-title text-uppercase mt-0 mb-0 text-primary fw-bolder user-select-none ">{title}</h5>
                                <p className="mb-0" style={{textOverflow: "ellipsis"}}>{ingredient}</p>
                            </div>
                            <div>
                                <h5 className="ms-3 mt-1 fw-bolder text-dark">${price}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SideOrder