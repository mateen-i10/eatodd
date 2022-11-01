import React, {useEffect} from 'react'
import {FaCheck} from "react-icons/all"

const CartMeals = ({item, setSelectedItem, nutritionData, i, selectedItem}) => {

    useEffect(() => {
        nutritionData(0)
    }, [])
    return (
        <div
            className={`card position-relative ${selectedItem === i ? "border-primary" : "border-secondary"} py-2`}
            onClick={() => {
                setSelectedItem(i)
                nutritionData(i)

            }}>
            {selectedItem === i ? <div className='' style={{position: "absolute", top: 6, right: 50}}>
                <div
                    className='rounded-circle border-white text-white '
                    style={{
                        position: "absolute",
                        height: 40,
                        width: 40,
                        backgroundColor: 'rgba(129, 190, 65, .9)'
                    }}>
                    <div style={{marginLeft: 7, marginTop: 4}}>
                        <FaCheck size={25}/>
                    </div>
                </div>
            </div> : <div className='' style={{position: "absolute", top: 6, right: 50}}>
                <div
                    className='rounded-circle border-white text-white'
                    style={{
                        position: "absolute",
                        height: 40,
                        width: 40,
                        backgroundColor: 'lightgray'
                    }}>
                    <div style={{marginLeft: 7, marginTop: 4}}>
                        <FaCheck size={25}/>
                    </div>
                </div>
            </div>}
            <div className='text-capitalize ms-1' style={{}}>
                <span className='text-uppercase text-primary fs-2'>{item.mealName}</span></div>
            <div className='text-capitalize fs-4 ms-1'>
                <span className='text-uppercase '>{item.categoryName}</span></div>

            {/*<div className='text-uppercase fs-5 ms-1 mb-1'>*/}
            {/*    <span>Price</span> : <span> $ </span><span>{item.totalPrice}</span>*/}
            {/*</div>*/}
        </div>
    )
}

export default CartMeals
