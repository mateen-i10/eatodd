import React, {useEffect, useState} from "react"
import {
    addItemToCart, clearCart,
    getCartData, isJoinedByLink,
    isObjEmpty
} from "../../utility/Utils"
import ItemsInCart from "../../shared/header/components/ItemsInCart/ItemsInCart"
import useAPI from "../../utility/customHooks/useAPI"
import GroupOrderCreated from "./groupOrderCreated"
import {getUserData, isCustomer, isUserLoggedIn} from "../../auth/utils"
import {groupOrderCustomerId} from "../../utility/constants"
import http, {baseURL} from "../../utility/http"
import {toast} from "react-toastify"

const GroupOrderSideCart = () => {
    const [cartItems, setCartItems] = useState(null)
    const customerId = isUserLoggedIn() && isCustomer() ? getUserData().customerId : localStorage.getItem(groupOrderCustomerId) ? localStorage.getItem(groupOrderCustomerId) : 0
    const [url, setUrl] =  useState(`/groupOrder/getActive/${customerId}`)
    const [isLoading, response] = useAPI(url, 'get', {}, {}, true)

    const handleRemove = (index) => {
        const meal = getCartData() && getCartData().meals ? getCartData().meals[index] : null
        http._delete(`${baseURL}groupOrder/removeMeal/${meal.mealId}`).then(res => {
            if (res.status === 200 && res.data && res.data.statusCode === 200) {
                toast.success(`${meal.mealName} removed from cart`)
                setUrl(`/groupOrder/getActive/${customerId}`)
            } else {
                toast.error(res.data.message)
            }
        }).catch(error => {
            toast.error(error.message)
        })
    }

    useEffect(() => {
        console.log('group order', response?.data)
        clearCart()
        if (response && response.data) {
            setUrl('')
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
                addItemToCart(meal, false)
            })
        }
        setCartItems({...getCartData()})
        const interval = setInterval(() => {
            setUrl(`/groupOrder/getActive/${customerId}`)
        }, 2000)

        return () => {
            clearInterval(interval)
        }
    }, [isLoading, response])
    return (
        <div className='col-md-12 '>
            {!isJoinedByLink() && <GroupOrderCreated groupCode={response?.data?.groupCode}/>}
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