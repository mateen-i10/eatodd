import {createAction} from '@reduxjs/toolkit'

const initialState = {
    list: [],
    object: {},
    addressObject: {},
    miscData: {},
    isRequestCompleted: false,
    isLoading: false,
    isDetailLoading: false,
    isEdit: false,
    isError: false,
    isSuccess: false,
    isGroupOrderExist: false
}

export const setCustomers = createAction("customerReducer/setCustomers")
export const setCustomerAddress = createAction("customerReducer/setCustomerAddress")
export const setCustomer = createAction("customerReducer/setCustomer")
export const setLoading = createAction("customerReducer/setLoading")
export const editCustomer = createAction("customerReducer/editCustomer")
export const editCustomerAddress = createAction("customerReducer/editCustomerAddress")
export const setDetailLoading = createAction("customerReducer/setDetailLoading")
export const setIsEdit = createAction("customerReducer/setIsEdit")
export const setIsCustomerError = createAction("customerReducer/setIsCustomerError")
export const setIsCustomerSuccess = createAction("customerReducer/setIsCustomerSuccess")
export const setRequestCompleted = createAction("customerReducer/setRequestCompleted")
export const setGroupOrderExist = createAction("customerReducer/setGroupOrderExist")

const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case setCustomers.type:
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
        case setCustomer.type:
            return {
                ...state,
                object: action.payload.data,
                isEdit: false,
                isLoading: false,
                isDetailLoading: false
            }
        case setCustomerAddress.type:
            return {
                ...state,
                addressObject: action.payload.data,
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
        case editCustomer.type:
            return {
                ...state,
                object: action.payload.data,
                isEdit: true
            }
        case editCustomerAddress.type:
            return {
                ...state,
                addressObject: action.payload.data,
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
                isEdit: action.payload.data
            }
        case setIsCustomerError.type:
            return {
                ...state,
                isError: action.payload
            }
        case setIsCustomerSuccess.type:
            return {
                ...state,
                isSuccess: action.payload
            }
        case setGroupOrderExist.type:
            return {
                ...state,
                isGroupOrderExist: action.payload
            }
        default:
            return state
    }
}

export default customerReducer
