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

export const setProducts = createAction("ProductReducer/setProducts")
export const setProduct = createAction("ProductReducer/setProduct")
export const setLoading = createAction("ProductReducer/setLoading")
export const editProduct = createAction("ProductReducer/editProduct")
export const setIsProductEdit = createAction("ProductReducer/setIsProductEdit")
export const setProductRequestCompleted = createAction("ProductReducer/setRequestCompleted")
export const setIsProductError = createAction("ProductReducer/setIsError")
export const setIsProductSuccess = createAction("RestaurantReducer/setIsRestaurantSuccess")

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case setProducts.type:
            return {
                ...state,
                list: action.payload,
                miscData: action.payload.miscData,
                isLoading: false,
                isEdit: false
            }
        case setProduct.type:
            return {
                ...state,
                object: action.payload,
                isLoading: false
            }
        case setProductRequestCompleted.type:
            return {
                ...state,
                isRequestCompleted: action.payload
            }
        case setLoading.type:
            return {
                ...state,
                isLoading: action.payload
            }
        case editProduct.type:
            return {
                ...state,
                object: action.payload,
                isEdit: true
            }
        case setIsProductError.type:
            return {
                ...state,
                isError: action.payload
            }
        case setIsProductEdit.type:
            return {
                ...state,
                isEdit: action.payload
            }
        default:
            return state
    }
}

export default ProductReducer