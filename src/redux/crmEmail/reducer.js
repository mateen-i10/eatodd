import {createAction} from '@reduxjs/toolkit'
const initialState = {
    list: [],
    object: {},
    isLoading: false,
    isEdit: false
}

export const setCrmEmails = createAction("crmReducer/setCrmEmails")
export const setCrmEmail = createAction("crmReducer/setCrmEmail")
export const setLoading = createAction("crmReducer/setLoading")
export const editCrmEmail = createAction("crmReducer/editCrmEmail")

const crmReducer = (state = initialState, action) => {
    switch (action.type) {
        case setCrmEmails.type:
            return {
                ...state,
                list: action.payload,
                isLoading: false,
                isEdit: false
            }
        case setCrmEmail.type:
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
        case editCrmEmail.type:
            return {
                ...state,
                object: action.payload,
                isEdit: true
            }
        default:
            return state
    }
}

export default crmReducer