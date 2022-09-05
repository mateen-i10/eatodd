import {createSlice} from "@reduxjs/toolkit"


const slice = createSlice({
    name: "cartItems",
    initialState: [],
    reducers: {
        itemAdded: (cartItem, action) => {
            cartItem.push({
                action
            })
        },
        itemSelected: (cartItem, action) => {
            cartItem.push({
                mainItem: action
            })
        }
    }
})

export const {itemAdded, itemSelected} = slice.actions
export default slice.reducer