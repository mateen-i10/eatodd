import React from 'react'
import { Check } from "react-feather"

const CheckSign = ({styles}) => {
    return (
        <div className='rounded-circle border-white text-white checkStyle'>
            <div>
                <Check style={{...styles}} size={35}/>
            </div>
        </div>
    )
}

export default CheckSign
