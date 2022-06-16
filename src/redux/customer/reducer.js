import {createAction} from '@reduxjs/toolkit'
const initialState = {
    list: [],
    object: {},
    isLoading: false,
    isEdit: false
}

export const setCustomers = createAction("customerReducer/setCustomers")
export const setCustomer = createAction("customerReducer/setCustomer")
export const setLoading = createAction("customerReducer/setLoading")
export const editCustomer = createAction("customerReducer/editCustomer")

const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case setCustomers.type:
            return {
                ...state,
                list: action.payload,
                isLoading: false,
                isEdit: false
            }
        case setCustomer.type:
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
        case editCustomer.type:
            return {
                ...state,
                object: action.payload,
                isEdit: true
            }
        default:
            return state
    }
}

export default customerReducer