import {createAction} from '@reduxjs/toolkit'

const initialState = {
    list: [],
    object: {},
    miscData: {},
    isRequestCompleted: false,
    isLoading: false,
    isEdit: false,
    isError: false,
    isSuccess: false
}

export const setGenralProducts = createAction("GenralProductReducer/setGenralProducts")
export const setGenralProduct = createAction("GenralProductReducer/setGenralProduct")
export const setLoading = createAction("GenralProductReducer/setLoading")
export const editGenralProduct = createAction("GenralProductReducer/editGenralProduct")
export const setIsGenralProductEdit = createAction("GenralProductReducer/setIsGenralProductEdit")
export const setGenralProductRequestCompleted = createAction("GenralProductReducer/setRequestCompleted")
export const setIsGenralProductError = createAction("GenralProductReducer/setIsError")
export const setIsGenralProductSuccess = createAction("RestaurantReducer/setIsRestaurantSuccess")

const GenralProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case setGenralProducts.type:
            return {
                ...state,
                list: action.payload,
                miscData: action.payload.miscData,
                isLoading: false,
                isEdit: false
            }
        case setGenralProduct.type:
            return {
                ...state,
                object: action.payload,
                isLoading: false
            }
        case setGenralProductRequestCompleted.type:
            return {
                ...state,
                isRequestCompleted: action.payload
            }
        case setLoading.type:
            return {
                ...state,
                isLoading: action.payload
            }
        case editGenralProduct.type:
            return {
                ...state,
                object: action.payload,
                isEdit: true
            }
        case setIsGenralProductError.type:
            return {
                ...state,
                isError: action.payload
            }
        case setIsGenralProductEdit.type:
            return {
                ...state,
                isEdit: action.payload
            }
        default:
            return state
    }
}

export default GenralProductReducer