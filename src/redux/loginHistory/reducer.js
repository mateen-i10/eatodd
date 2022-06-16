import {createAction} from '@reduxjs/toolkit'
const initialState = {
    list: [],
    object: {},
    isLoading: false,
    isEdit: false
}

export const setLoginHistorys = createAction("loginReducer/setLoginHistorys")
export const setLoginHistory = createAction("loginReducer/setLoginHistory")
export const setLoading = createAction("loginReducer/setLoading")
export const editLoginHistory = createAction("loginReducer/editLoginHistory")

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case setLoginHistorys.type:
            return {
                ...state,
                list: action.payload,
                isLoading: false,
                isEdit: false
            }
        case setLoginHistory.type:
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
        case editLoginHistory.type:
            return {
                ...state,
                object: action.payload,
                isEdit: true
            }
        default:
            return state
    }
}

export default loginReducer