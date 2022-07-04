import React, {useState} from 'react'
import {CheckCircle, MoreHorizontal} from "react-feather"
import '../style/StyleSheet.css'

const MenuItem = (props) => {

    const [value, setValue] = useState(0)
    // const [condition, setCond] = useState(false)
    // const handleClick = (element) => {
    //     console.log(element)
    //
    // }

    return (
        <>
            <div className="card my-1 add" onClick={() => {
                if (value === 1) {
                    setValue(0)
                } else {
                    setValue(1)
                }
            }} style={value !== 1 ? {maxWidth: '540px', marginBottom:0} : {maxWidth: '540px', marginBottom:0, borderWidth:1, borderColor: '#81be41'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        {props.currentTitle.title === props.title && <CheckCircle size={80} color='white' className='rounded-circle' style={{position:'absolute', marginLeft:50, top:30, backgroundColor:'black'}}/>}
                        <div>
                            <img src={props.foodImage} className="card-img-top img-thumbnail" alt="..." style={value !== 1 ? {width:250} : {width:250, backgroundColor:'#81be41'}} />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body d-flex">
                            <div className='flex-fill'>
                                <h4 className=''>{props.title}</h4>
                                <h5>${props.price}</h5>
                            </div>
                            <div onClick={() => console.log('it works')}>
                                <a href="#"><MoreHorizontal /></a>
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