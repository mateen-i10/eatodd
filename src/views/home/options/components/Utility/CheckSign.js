import React from 'react'
import {FaCheck} from "react-icons/all"

const CheckSign = ({styles}) => {
    return (
        <div
            className='rounded-circle border-white text-white '
            style={{
                position: "absolute",
                height: 60,
                width: 60,
                backgroundColor: 'rgba(129, 190, 65, .9)'
            }}>
            <div style={{...styles, marginTop: 12}}>
                <FaCheck size={35}/>
            </div>
        </div>
    )
}

export default CheckSign
