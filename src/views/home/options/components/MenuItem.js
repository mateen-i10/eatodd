import React, {useState} from 'react'
import {MoreVertical} from "react-feather"
import '../style/StyleSheet.css'
import {FaCheck} from "react-icons/all"

const MenuItem = (props) => {

    const [value, setValue] = useState(0)
    // const [condition, setCond] = useState(false)
    // const handleClick = (element) => {
    //     console.log(element)
    //
    // }

    return (
        <>
            <div className="card  add  overflow-hidden" onClick={() => {
                if (value === 1) {
                    setValue(0)
                } else {
                    setValue(1)
                }
            }} style={value !== 1 ? {marginBottom: 2, maxHeight: 130} : {
                marginBottom: 2,
                maxHeight: 130,
                borderWidth: 1,
                borderColor: '#81be41'
            }}>
                <div className="row g-0 ">
                    <div className="col-lg-4 col-3">
                        {props.currentTitle.title === props.title &&
                            <FaCheck size={60} color='#81be41' className='rounded-circle ms-md-5 m-0' style={{
                                position: 'absolute',
                                // marginLeft: 3,
                                top: 30,
                                backgroundColor: 'transparent'
                            }}/>}
                        <div className="">
                            <img src={props.foodImage} className="img-fluid rounded-start" alt="..."
                                 style={value !== 1 ? {
                                     width: "100%",
                                     height: 129,
                                     objectFit: "cover"

                                 } : {
                                     width: "100%",
                                     height: 129,
                                     backgroundColor: '#81be41',
                                     objectFit: "cover",
                                     overflow: "hidden"
                                 }}/>
                        </div>
                    </div>
                    <div className="col-lg-8 col-9">
                        <div className="card-body d-flex">
                            <div className='flex-fill'>
                                <div className="card-title text-uppercase mt-0 mb-0 text-primary fw-bolder"
                                     style={{fontSize: '1.1rem'}}>{props.title}</div>
                                <p className="mb-0 text-dark  ">{props.ingredient}</p>

                            </div>
                            <div onClick={() => console.log('it works')}>
                                <a className="ms-5" href="#"><MoreVertical/></a>
                                <h4 className="ms-2 mt-4 fw-bolder text-primary">${props.price}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="card border-secondary text-center justify-content-center" style={{width: '18rem'}} onClick={handleClick(props.currentTitle.title)} >*/}
            {/*    {props.currentTitle.title === props.title && <CheckCircle size={80} color='white' className='rounded-circle' style={{position:'absolute', marginLeft:80, top:80, backgroundColor:'black'}}/>}*/}
            {/*    <div>*/}
            {/*        <img src={props.foodImage} className="card-img-top img-thumbnail" alt="..." style={{width:250}} />*/}
            {/*    </div>*/}
            {/*        <div className="card-body">*/}
            {/*            <h4>{props.title}</h4>*/}
            {/*            <h5>${props.price}</h5>*/}
            {/*            <a href="#"><MoreHorizontal /></a>*/}
            {/*        </div>*/}
            {/*</div>*/}
        </>
    )
}

export default MenuItem