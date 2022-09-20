import React from 'react'
import {FaCheck} from "react-icons/all"

const CheckSign = () => {
    return (
        <div
            className='rounded-circle border-white text-white ms-xl-2 ms-lg-1 ms-md-3 ms-sm-2 ms-1 m-0'
            style={{
                position: 'absolute',
                top: 20,
                height: 60,
                width: 60,
                backgroundColor: 'rgba(129, 190, 65, .9)'
            }}>
            <div style={{marginLeft: 10, marginTop: 12}}>
                <FaCheck size={35}/>
            </div>
        </div>
    )
}

export default CheckSign
