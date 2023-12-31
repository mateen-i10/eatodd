import React from 'react'
import { Check } from "react-feather"

const CheckSign = ({styles, checkStyle1}) => {
    return (
        <div className={`rounded-circle border-white text-white ${checkStyle1 ? checkStyle1 : "checkStyle"}`}>
            <div>
                <Check style={{...styles}} size={35}/>
            </div>
        </div>
    )
}

export default CheckSign
