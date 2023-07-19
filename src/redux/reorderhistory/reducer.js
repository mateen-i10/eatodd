import {createAction} from '@reduxjs/toolkit'
const initialState = {
    list: [],
    mealList: [],
    activeOrdersList: [],
    object: {},
    isLoading: false,
    isEdit: false,
    isRequestCompleted: false,
    isError: false,
    isSuccess: false
}

export const setReorderHistorys = createAction("reorderHistory/setReorderHistorys")
export const getMeal = createAction("reorderHistory/getMeal")
export const getActiveOrdersList = createAction("reorderHistory/getActiveOrdersList")
export const setReorderHistory = createAction("reorderHistory/setReorderHistory")
export const setLoading = createAction("reorderHistory/setLoading")
export const editReorderHistory = createAction("reorderHistory/editReorderHistory")
export const setIsCancelOrderError = createAction("reorderHistory/setIsCancelOrderError")
export const setIsCancelOrderSuccess = createAction("reorderHistory/setIsCancelOrderSuccess")
export const setRequestCompleted = createAction("reorderHistory/setRequestCompleted")

const reorderHistory = (state = initialState, action) => {
    switch (action.type) {
        case setReorderHistorys.type:

            return {
                ...state,
                list: action.payload.data,
                miscData: action.payload.miscData,
                isLoading: false,
                isError: false,
                isSuccess: false
            }
        case getMeal.type:
            return {
                ...state,
                mealList: action.payload.data,
                miscData: action.payload.miscData,
                isLoading: false,
                isError: false,
                isSuccess: false
            }
        case getActiveOrdersList.type:
            /*const updatedRecords = state.activeOrdersList.filter(
                (record) => record.id === action.payload.data
            )*/
            return {
                ...state,
                activeOrdersList: action.payload.data,
                miscData: action.payload.miscData,
                isLoading: false,
                isError: false,
                isSuccess: false
            }
        case setReorderHistory.type:
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
        case editReorderHistory.type:
            return {
                ...state,
                object: action.payload,
                isEdit: true
            }
        case setRequestCompleted.type:
            return {
                ...state,
                isRequestCompleted: action.payload
            }
        case setIsCancelOrderError.type:
            return {
                ...state,
                isError: action.payload
            }
        case setIsCancelOrderSuccess.type:
            return {
                ...state,
                isSuccess: action.payload
            }
        default:
            return state
    }
}

export default reorderHistory