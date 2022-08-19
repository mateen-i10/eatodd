import {createAction} from '@reduxjs/toolkit'
const initialState = {
    list: [],
    object: {},
    isLoading: false,
    isEdit: false
}

export const setCuisines = createAction("CuisineReducer/setCuisines")
export const setCuisine = createAction("CuisineReducer/setCuisine")
export const setLoading = createAction("CuisineReducer/setLoading")
export const editCuisine = createAction("CuisineReducer/editCuisine")

const CuisineReducer = (state = initialState, action) => {
    switch (action.type) {
        case setCuisines.type:
            return {
                ...state,
                list: action.payload,
                isLoading: false,
                isEdit: false
            }
        case setCuisine.type:
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
        case editCuisine.type:
            return {
                ...state,
                object: action.payload,
                isEdit: true
            }
        default:
            return state
    }
}

export default CuisineReducer