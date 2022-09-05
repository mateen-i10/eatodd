import {createSlice} from "@reduxjs/toolkit"


const slice = createSlice({
    name: "restaurantLocation",
    initialState: [],
    reducers: {
        locationAdded: (restLocation, action) => {
            if (restLocation.length < 1) {
                restLocation.push({
                    action
                })
            }
        }
    }
})

export const {locationAdded} = slice.actions
export default slice.reducer