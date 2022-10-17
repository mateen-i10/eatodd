import React, {useEffect, useState} from "react"
import {
    addItemToCart, clearCart,
    getCartData,
    isObjEmpty
} from "../../utility/Utils"
import ItemsInCart from "../../shared/header/components/ItemsInCart/ItemsInCart"
import useAPI from "../../utility/customHooks/useAPI"
import GroupOrderCreated from "./groupOrderCreated"
import {getUserData, isCustomer, isUserLoggedIn} from "../../auth/utils"

const GroupOrderSideCart = () => {
    const [cartItems, setCartItems] = useState(null)
    const url = isUserLoggedIn() && isCustomer() ? `/groupOrder/getActive/${getUserData().customerId}` : ''
    const [isLoading, response] = useAPI(url, 'get', {}, {}, true)

    const handleRemove = (index) => {
        console.log('delete called', index)
        const meal = getCartData() && getCartData().meals ? getCartData().meals[index] : null
        console.log('meal', meal)
    }

    useEffect(() => {
        console.log('group order list', response)
        clearCart()
        if (response && response.data) {
            const {data} = response
            data.meals.map(m => {
                let totalPrice = 0
                const finalItems = m.mealProducts ? m.mealProducts.map(item => {
                    const price = item.option.price
                    totalPrice =  totalPrice + (price * item.quantity)
                    return {...item.product, selectedQuantity: item.quantity, calculatedPrice: price * item.quantity, price}
                }) : []

                const meal = {
                    mealId: m.id,
                    mealName: m.name,
                    totalPrice,
                    categoryName: m.category?.name,
                    categoryId: m.categoryId,
                    selectedProducts : [...finalItems]
                }
                addItemToCart(meal)
            })

        }
        setCartItems({...getCartData()})
    }, [isLoading, response])
    return (
        <div className='col-md-12 '>
            <GroupOrderCreated groupCode={''}/>
            {cartItems && cartItems.meals && cartItems.meals.map((meal, index) => {
                return !isObjEmpty(meal) ? <div key={`ItemsInCart-${index}`}>
                    <ItemsInCart foodItems={meal}
                                 index={index}
                                 mainSectionName={meal.mealName}
                                 menuName={meal.categoryName}
                                 removeMeal={handleRemove}/>
                    <hr/>
                </div> : null
            })}

        </div>
    )
}

export default GroupOrderSideCart