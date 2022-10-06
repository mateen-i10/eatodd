import {createAction} from '@reduxjs/toolkit'

const initialState = {
    list: [],
    object: {},
    miscData: {},
    isRequestCompleted: false,
    isLoading: false,
    isEdit: false,
    isError: false,
    isSuccess: false
}

export const setMembers = createAction("memberReducer/setMembers")
export const setMemberAddress = createAction("memberReducer/setMemberAddress")
export const setMember = createAction("memberReducer/setMember")
export const setLoading = createAction("memberReducer/setLoading")
export const editMember = createAction("memberReducer/editMember")
export const editMemberAddress = createAction("memberReducer/editMemberAddress")
export const setDetailLoading = createAction("memberReducer/setDetailLoading")
export const setIsEdit = createAction("memberReducer/setIsEdit")
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
                isEdit: false,
                isError: false,
                isSuccess: false
            }
        case setMember.type:
            return {
                ...state,
                object: action.payload.data,
                isEdit: false,
                isLoading: false,
                isDetailLoading: false
            }
        case setMemberAddress.type:
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
        case editMember.type:
            return {
                ...state,
                object: action.payload.data,
                isEdit: true
            }
        case editMemberAddress.type:
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
