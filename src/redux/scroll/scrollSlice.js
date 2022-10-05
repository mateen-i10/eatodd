import {createSlice} from "@reduxjs/toolkit"

const slice = createSlice({
    name: "scroll",
    initialState: [],
    reducers: {
        scrollToOrderAdded: (scrollToOrder, action) => {
            if (action.payload === 'order') {
                scrollToOrder.push({
                    action
                })
            } else {
                scrollToOrder.pop()
            }
        }
    }
})

export const {scrollToOrderAdded} = slice.actions
export default slice.reducer
