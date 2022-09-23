import {createSlice} from "@reduxjs/toolkit"

const slice = createSlice({
    name: "cartItems",
    initialState: {
        meals:[],
        wines: [],
        shippingAddress: null,
        billingAddress: null
    },
    reducers: {
        addMeal: (cart, action) => {
            cart.meals.push({
                action
            })
        },
        addShippingAddress: (cart, action) => {
            cart.shippingAddress = action
        },
        addBillingAddress: (cart, action) => {
            cart.billingAddress = action
        }
    }
})

export const {addMeal, addShippingAddress, addBillingAddress} = slice.actions
export default slice.reducer
