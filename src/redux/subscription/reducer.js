import {createAction} from '@reduxjs/toolkit'
const initialState = {
    object: {},
    isRequestCompleted: false,
    isLoading: false,
    isError: false,
    isSuccess: false
}

export const setSubscription = createAction("subscriptionReducer/setItem")
export const setRequestCompleted = createAction("subscriptionReducer/setRequestCompleted")
export const setLoading = createAction("subscriptionReducer/setLoading")
export const setIsOptionError = createAction("subscriptionReducer/setIsOptionError")
export const setIsOptionSuccess = createAction("subscriptionReducer/setIsOptionSuccess")

export const editSubscriptionPackage = createAction("subscriptionReducer/editSubscriptionPackage")

const subscriptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case setSubscription.type:
            return {
                ...state,
                object: action.payload
            }
        case editSubscriptionPackage.type:
            const final = action.payload.data
            console.log("last ", final)
            return {
                ...state,
                object: {...final, ...final.customerId, ...final.packageId},
                //object: action.payload.data,
                isEdit: true
            }
        case setRequestCompleted.type:
            return {
                ...state,
                isRequestCompleted: action.payload
            }
        case setLoading.type:
            return {
                ...state,
                isLoading: action.payload
            }
        case setIsOptionError.type:
            return {
                ...state,
                isError: action.payload
            }
        case setIsOptionSuccess.type:
            return {
                ...state,
                isSuccess: action.payload
            }
        default:
            return state
    }
}

export default subscriptionReducer
