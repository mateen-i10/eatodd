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

export const setwines = createAction("wineReducer/setwines")
export const setwine = createAction("wineReducer/setwine")
export const setLoading = createAction("wineReducer/setLoading")
export const editwine = createAction("wineReducer/editwine")
export const setDetailLoading = createAction("wineReducer/setDetailLoading")
export const setIsEdit = createAction("wineReducer/setIsEdit")
export const setIswineError = createAction("wineReducer/setIswineError")
export const setIswineSuccess = createAction("wineReducer/setIswineSuccess")
export const setRequestCompleted = createAction("wineReducer/setRequestCompleted")

const wineReducer = (state = initialState, action) => {
    switch (action.type) {
        case setwines.type:
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
        case setwine.type:
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
        case editwine.type:
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
        case setIswineError.type:
            return {
                ...state,
                isError: action.payload
            }
        case setIswineSuccess.type:
            return {
                ...state,
                isSuccess: action.payload
            }
        default:
            return state
    }
}

export default wineReducer