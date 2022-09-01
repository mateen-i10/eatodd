import {createAction} from '@reduxjs/toolkit'
const initialState = {
    list: [],
    object: {},
    miscData: {},
    isRequestCompleted: false,
    isLoading: false,
    isDetailLoading: false,
    isEdit: false,
    isError: false,
    isSuccess: false
}

export const setCuisines = createAction("CuisineReducer/setCuisines")
export const setCuisine = createAction("CuisineReducer/setCuisine")
export const setLoading = createAction("CuisineReducer/setLoading")
export const editCuisine = createAction("CuisineReducer/editCuisine")
export const setDetailLoading = createAction("CuisineReducer/setDetailLoading")
export const setIsEdit = createAction("CuisineReducer/setIsEdit")
export const setIsCuisineError = createAction("CuisineReducer/setIsCuisineError")
export const setIsCuisineSuccess = createAction("CuisineReducer/setIsCuisineSuccess")
export const setRequestCompleted = createAction("CuisineReducer/setRequestCompleted")

const CuisineReducer = (state = initialState, action) => {
    switch (action.type) {
        case setCuisines.type:
            return {
                ...state,
                list: action.payload.data,
                miscData: action.payload.miscData,
                isLoading: false,
                isDetailLoading: false,
                isEdit: false,
                isError: false,
                isSuccess: false
            }
        case setCuisine.type:
            return {
                ...state,
                object: action.payload.data,
                isEdit: false,
                isLoading: false,
                isDetailLoading: false
            }
        case setLoading.type:
            return {
                ...state,
                isLoading: action.payload
            }
        case setDetailLoading.type:
            return {
                ...state,
                isDetailLoading: action.payload
            }
        case editCuisine.type:
            return {
                ...state,
                object: action.payload.data,
                isEdit: true
            }
        case setRequestCompleted.type:
            return {
                ...state,
                isRequestCompleted: action.payload
            }
        case setIsEdit.type:
            return {
                ...state,
                isEdit: action.payload
            }
        case setIsCuisineError.type:
            return {
                ...state,
                isError: action.payload
            }
        case setIsCuisineSuccess.type:
            return {
                ...state,
                isSuccess: action.payload
            }
        default:
            return state
    }
}

export default CuisineReducer
