import React from "react"


export const LightQty = () => {
    return (
        <div
            className='rounded-circle border-white ms-md-3 ms-xl-2 ms-lg-1 ms-sm-2 ms-1  m-0 text-white'
            style={{
                position: 'absolute',
                height: 64,
                width: 64,
                fontSize: 18,
                fontWeight: 700,
                top: 30,
                backgroundColor: 'rgba(129, 190, 65, .9)'

            }}>
            <div style={{marginLeft: 8, marginTop: 17}}>Light</div>
        </div>
    )
}
export const ExtraQty = ({value}) => {
    return (
        <div
            className='rounded-circle border-white ms-md-3 ms-xl-2 ms-lg-1 ms-sm-2 ms-1  m-0 text-white'
            style={{
                position: 'absolute',
                height: 60,
                width: 60,
                fontSize: 18,
                fontWeight: 700,
                top: 20,
                backgroundColor: 'rgba(129, 190, 65, .9)'

            }}>
            <div style={{marginLeft: 14, marginTop: 16}}>{value}</div>
        </div>
    )
}
export const SideQty = () => {
    return (
        <div
            className='rounded-circle border-white ms-md-3 ms-xl-2 ms-lg-1 ms-sm-2 ms-1  m-0 text-white'
            style={{
                position: 'absolute',
                height: 64,
                width: 64,
                fontSize: 18,
                fontWeight: 700,
                top: 30,
                backgroundColor: 'rgba(129, 190, 65, .9)'

            }}>
            <div style={{marginLeft: 10, marginTop: 17}}>Side</div>
        </div>
    )
}
