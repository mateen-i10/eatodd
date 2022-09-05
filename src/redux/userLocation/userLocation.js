import {createSlice} from "@reduxjs/toolkit"


const slice = createSlice({
    name: "userLocationSlice",
    initialState: [],
    reducers: {
        userLocationAdded: (userLocation, action) => {
            if (userLocation.length < 1) {
                userLocation.push({
                    action
                })
            }
        }
    }
})

export const {userLocationAdded} = slice.actions
export default slice.reducer