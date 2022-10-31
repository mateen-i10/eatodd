import React, {useEffect} from 'react'
import CheckSign from "../../home/options/components/Utility/CheckSign"

const CartMeals = ({item, setSelectedItem, nutritionData, i, selectedItem}) => {

    useEffect(() => {
        nutritionData(0)
    }, [])
    return (
        <div className="card position-relative" onClick={() => {
            setSelectedItem(i)
            nutritionData(i)

        }}>
            {selectedItem === i &&
                <div className='position-absolute  ms-1 mt-1'><CheckSign styles={{marginLeft: 10}}/></div>}
            <div className='text-capitalize fs-5 mt-1 fs-2 ms-1'>
                <span className='text-uppercase '>{item.categoryName}</span></div>
            <div className='text-capitalize fs-4 ms-1 mb-1' style={{marginTop: 2}}>
                <span>Your  Meal</span> : <span className='text-uppercase text-primary'>{item.mealName}</span></div>

            {/*<div className='text-uppercase fs-5 mt-1 mb-1'>*/}
            {/*    <span>Price</span> : <span>{item.totalPrice}</span>*/}
            {/*</div>*/}
        </div>
    )
}

export default CartMeals
