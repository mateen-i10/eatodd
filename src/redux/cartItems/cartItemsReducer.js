import {createSlice} from "@reduxjs/toolkit"
import {cartTotalItems} from "../../utility/Utils"

const slice = createSlice({
    name: "cartItems",
    initialState: {
        meals:[],
        wines: [],
        total: cartTotalItems(),
        shippingAddress: null,
        billingAddress: null
    },
    reducers: {
        addMeal: (cart, action) => {
            cart.meals.push({
                action
            })
        },
        totalCartItems: (cart, action) => {
            cart.total = action.payload

        },
        addShippingAddress: (cart, action) => {
            cart.shippingAddress = action
        },
        addBillingAddress: (cart, action) => {
            cart.billingAddress = action
        }
    }
})

export const {addMeal, addShippingAddress, addBillingAddress, totalCartItems} = slice.actions
export default slice.reducer
