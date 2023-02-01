import React from "react"
import {Check} from "react-feather"


// export const LightQty = () => {
//     return (
//         <div
//             className='rounded-circle border-white ms-md-3 ms-xl-2 ms-lg-1 ms-sm-2 ms-1  m-0 text-white'
//             style={{
//                 position: 'absolute',
//                 height: 64,
//                 width: 64,
//                 fontSize: 18,
//                 fontWeight: 700,
//                 top: 30,
//                 backgroundColor: 'rgba(129, 190, 65, .9)'
//
//             }}>
//             <div style={{marginLeft: 8, marginTop: 17}}>Light</div>
//         </div>
//     )
// }
export const ExtraQty = ({selectedItems, selectedItem}) => {
    const valueArr = selectedItems.filter(item => item.subCategory?.id === selectedItem.subCategory?.id)
    // console.log("selected item-----", selectedItem)
    return (valueArr.length === 1 ? (<div className='rounded-circle border-white text-white checkStyle'>
            <div>
                <Check style={{marginLeft: 10}} size={35}/>
            </div>
        </div>) : (<div
            className='rounded-circle border-white text-white'
            style={{
                position: 'absolute',
                height: 60,
                width: 60,
                fontSize: 18,
                fontWeight: 700,
                backgroundColor: 'rgba(129, 190, 65, .9)'

            }}>
            <div style={{marginLeft: 17, marginTop: 16}}>{`1/${valueArr.length}`}</div>
        </div>)
    )
}
// export const SideQty = () => {
//     return (
//         <div
//             className='rounded-circle border-white ms-md-3 ms-xl-2 ms-lg-1 ms-sm-2 ms-1  m-0 text-white'
//             style={{
//                 position: 'absolute',
//                 height: 64,
//                 width: 64,
//                 fontSize: 18,
//                 fontWeight: 700,
//                 top: 30,
//                 backgroundColor: 'rgba(129, 190, 65, .9)'
//
//             }}>
//             <div style={{marginLeft: 10, marginTop: 17}}>Side</div>
//         </div>
//     )
// }
