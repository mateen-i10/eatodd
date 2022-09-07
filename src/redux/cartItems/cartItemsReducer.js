import {createSlice} from "@reduxjs/toolkit"


const slice = createSlice({
    name: "cartItems",
    initialState: [],
    reducers: {
        addMeal: (cart, action) => {
            cart.push({
                action
            })
        }
    }
})

export const {addMeal} = slice.actions
export default slice.reducer
