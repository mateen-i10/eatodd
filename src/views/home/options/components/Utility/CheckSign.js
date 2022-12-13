import React from 'react'
import { Check } from "react-feather"

const checkStyle = {
    position: 'initial',
    height: 60,
    width: 60,
    backgroundColor: 'rgba(129, 190, 65, .9)'
}

const CheckSign = ({styles}) => {
    return (
        <div className='rounded-circle border-white text-white' style={checkStyle}>
            <div style={{...styles}}>
                <Check size={35} />
            </div>
        </div>
    )
}

export default CheckSign
