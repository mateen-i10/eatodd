import {createAction} from '@reduxjs/toolkit'

const initialState = {
    list: [],
    object: {},
    miscData: {},
    isRequestCompleted: false,
    isLoading: false,
    isDetailLoading: false,
    isError: false,
    isSuccess: false
}

export const setContacts = createAction("contactReducer/setContacts")
export const setContact = createAction("contactReducer/setContact")
export const setLoading = createAction("contactReducer/setLoading")
export const setDetailLoading = createAction("contactReducer/setDetailLoading")
export const setIsEdit = createAction("contactReducer/setIsEdit")
export const setIsContactError = createAction("contactReducer/setIsContactError")
export const setIsContactSuccess = createAction("contactReducer/setIsContactSuccess")
export const setRequestCompleted = createAction("contactReducer/setRequestCompleted")

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case setContacts.type:
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
        case setContact.type:
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
        case setIsContactError.type:
            return {
                ...state,
                isError: action.payload
            }
        case setIsContactSuccess.type:
            return {
                ...state,
                isSuccess: action.payload
            }
        default:
            return state
    }
}

export default contactReducer
