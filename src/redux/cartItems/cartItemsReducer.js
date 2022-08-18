import {createSlice} from "@reduxjs/toolkit"


const slice = createSlice({
    name: "cartItems",
    initialState: [],
    reducers: {
        itemAdded: (cartItem, action) => {
            cartItem.push({
                action
            })

        }
    }
})

export const {itemAdded} = slice.actions
export default slice.reducer