import {createAction} from '@reduxjs/toolkit'
const initialState = {
    list: [],
    object: {},
    isLoading: false,
    isEdit: false
}

export const setFPs = createAction("facebookReducer/setFPs")
export const setFP = createAction("facebookReducer/setFP")
export const setLoading = createAction("facebookReducer/setLoading")
export const editFP = createAction("facebookReducer/editFP")

const facebookReducer = (state = initialState, action) => {
    switch (action.type) {
        case setFPs.type:
            return {
                ...state,
                list: action.payload,
                isLoading: false,
                isEdit: false
            }
        case setFP.type:
            return {
                ...state,
                object: action.payload,
                isLoading: false
            }
        case setLoading.type:
            return {
                ...state,
                isLoading: action.payload
            }
        case editFP.type:
            return {
                ...state,
                object: action.payload,
                isEdit: true
            }
        default:
            return state
    }
}

export default facebookReducer