import {createSlice} from "@reduxjs/toolkit"

const initialState = []
const slice = createSlice({
    name: "scroll",
    initialState,
    reducers: {
        scrollToOrderAdded: (scrollToOrder, action) => {
            if (scrollToOrder.length === 0 && action.payload === 'order') {
                scrollToOrder.push({
                    action
                })
            } else if (scrollToOrder.length === 1 && action.payload === 'order') {
                return scrollToOrder
            } else {
                return initialState
            }
        }
    }
})

export const {scrollToOrderAdded} = slice.actions
export default slice.reducer
