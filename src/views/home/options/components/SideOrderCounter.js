import React, {useState} from 'react'
import {MoreVertical} from "react-feather"
import Counter from "./Counter"

const SideOrderCounter = (props) => {

    const [value, setValue] = useState(0)

    return (
        <>
            <div className="card add overflow-hidden" onClick={() => setValue(1)}
                 style={value !== 1 ? {maxHeight: 130, marginBottom: 2} : {
                     maxHeight: 130,
                     marginBottom: 2,
                     borderWidth: 1,
                     borderColor: '#81be41'
                 }}>
                <div className="row g-0">
                    <div className="col-lg-4 col-3">
                        {props.currentTitle.title === props.title &&
                            <div className="ms-md-4 ms-lg-3 ms-xl-5 m-0 mt-2" style={{
                                position: 'absolute',
                                backgroundColor: 'transparent'
                            }}><Counter/>
                            </div>}
                        <div>
                            <img src={props.foodImage} className="img-fluid rounded-start" alt="..."
                                 style={{
                                     width: "100%",
                                     height: 129,
                                     objectFit: "cover"
                                 }}/>
                        </div>
                    </div>
                    <div className="col-lg-8 col-9">
                        <div className="card-body d-flex">
                            <div className='flex-fill'>
                                <h5 className="card-title text-uppercase mt-0 mb-0 text-primary fw-bolder">{props.title}</h5>
                                <p className="mb-0" style={{textOverflow: "ellipsis"}}>{props.ingredient}</p>
                            </div>
                            <div>
                                <a className="ms-5" href="#"><MoreVertical/></a>
                                <h5 className="ms-3 mt-4 fw-bolder text-primary">${props.price}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="card border-dark text-center justify-content-center" style={{width: '18rem'}} >*/}
            {/*    {props.currentTitle.title === props.title && <div style={{position:'absolute', marginTop:-120, marginLeft: 90}}><Counter /></div>}*/}
            {/*    <div>*/}
            {/*        <img src={props.foodImage} className="card-img-top img-thumbnail" alt="..." style={{width:250}} />*/}
            {/*    </div>*/}
            {/*    <div className="card-body">*/}
            {/*        <h4>{props.title}</h4>*/}
            {/*        <h5>${props.price}</h5>*/}
            {/*        <a href="#"><MoreHorizontal /></a>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}

export default SideOrderCounter