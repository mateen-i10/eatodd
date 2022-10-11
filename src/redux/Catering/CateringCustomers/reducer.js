import {createAction} from '@reduxjs/toolkit'

const initialState = {
    list: [],
    miscData: {},
    isRequestCompleted: false,
    isLoading: false,
    isEdit: false,
    isError: false,
    isSuccess: false
}

export const setCateringCustomers = createAction("cateringReducer/setCateringCustomers")
export const setLoading = createAction("cateringReducer/setLoading")
export const setIsCateringCustomerError = createAction("cateringReducer/setIsCateringCustomerError")
export const setIsCateringCustomerSuccess = createAction("cateringReducer/setIsCateringCustomerSuccess")
export const setRequestCompleted = createAction("cateringReducer/setRequestCompleted")

const cateringReducer = (state = initialState, action) => {
    switch (action.type) {
        case setCateringCustomers.type:
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
        case setLoading.type:
            return {
                ...state,
                isLoading: action.payload
            }
        case setRequestCompleted.type:
            return {
                ...state,
                isRequestCompleted: action.payload
            }
        case setIsCateringCustomerError.type:
            return {
                ...state,
                isError: action.payload
            }
        case setIsCateringCustomerSuccess.type:
            return {
                ...state,
                isSuccess: action.payload
            }
        default:
            return state
    }
}

export default cateringReducer