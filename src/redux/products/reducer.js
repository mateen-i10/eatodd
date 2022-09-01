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

export const setproducts = createAction("productReducer/setproducts")
export const setproduct = createAction("productReducer/setproduct")
export const setLoading = createAction("productReducer/setLoading")
export const editproduct = createAction("productReducer/editproduct")
export const setDetailLoading = createAction("productReducer/setDetailLoading")
export const setIsEdit = createAction("productReducer/setIsEdit")
export const setIsproductError = createAction("productReducer/setIsproductError")
export const setIsproductSuccess = createAction("productReducer/setIsproductSuccess")
export const setRequestCompleted = createAction("productReducer/setRequestCompleted")

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case setproducts.type:
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
        case setproduct.type:
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
        case editproduct.type:
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
        case setIsproductError.type:
            return {
                ...state,
                isError: action.payload
            }
        case setIsproductSuccess.type:
            return {
                ...state,
                isSuccess: action.payload
            }
        default:
            return state
    }
}

export default productReducer
