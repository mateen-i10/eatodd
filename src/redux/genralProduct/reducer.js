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
export const setDetailLoading = createAction("GenralProductReducer/setDetailLoading")
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
                list: action.payload.data,
                miscData: action.payload.miscData,
                isLoading: false,
                isDetailLoading: false,
                isEdit: false,
                isError: false,
                isSuccess: false
            }
        case setGenralProduct.type:
            return {
                ...state,
                object: action.payload.data,
                isEdit: false,
                isLoading: false,
                isDetailLoading: false
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
                object: action.payload.data,
                isEdit: true,
                subCategoryId: 1
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
        case setIsGenralProductSuccess.type:
            return {
                ...state,
                isSuccess: action.payload
            }
        default:
            return state
    }
}

export default GenralProductReducer