import {createAction} from '@reduxjs/toolkit'

const initialState = {
    list: [],
    miscData: {},
    isRequestCompleted: false,
    isLoading: false,
    isError: false,
    isSuccess: false
}

export const setMembers = createAction("memberReducer/setMembers")
export const setLoading = createAction("memberReducer/setLoading")
export const setIsMemberError = createAction("memberReducer/setIsMemberError")
export const setIsMemberSuccess = createAction("memberReducer/setIsMemberSuccess")
export const setRequestCompleted = createAction("memberReducer/setRequestCompleted")

const memberReducer = (state = initialState, action) => {
    switch (action.type) {
        case setMembers.type:
            return {
                ...state,
                list: action.payload.data,
                miscData: action.payload.miscData,
                isLoading: false,
                isDetailLoading: false,
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
        case setIsMemberError.type:
            return {
                ...state,
                isError: action.payload
            }
        case setIsMemberSuccess.type:
            return {
                ...state,
                isSuccess: action.payload
            }
        default:
            return state
    }
}

export default memberReducer
