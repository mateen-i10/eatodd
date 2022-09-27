import {createAction} from '@reduxjs/toolkit'
const initialState = {
    list: [],
    mealList: [],
    object: {},
    isLoading: false,
    isEdit: false
}

export const setReorderHistorys = createAction("reorderHistory/setReorderHistorys")
export const getMeal = createAction("reorderHistory/getMeal")
export const setReorderHistory = createAction("reorderHistory/setReorderHistory")
export const setLoading = createAction("reorderHistory/setLoading")
export const editReorderHistory = createAction("reorderHistory/editReorderHistory")

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
        default:
            return state
    }
}

export default reorderHistory