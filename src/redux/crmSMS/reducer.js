import {createAction} from '@reduxjs/toolkit'
const initialState = {
    list: [],
    object: {},
    isLoading: false,
    isEdit: false
}

export const setCrmSmss = createAction("crmSMS/setCrmSmss")
export const setCrmSms = createAction("crmSMS/setCrmSms")
export const setLoading = createAction("crmSMS/setLoading")
export const editCrmSms = createAction("crmSMS/editCrmSms")

const crmSMS = (state = initialState, action) => {
    switch (action.type) {
        case setCrmSmss.type:
            return {
                ...state,
                list: action.payload,
                isLoading: false,
                isEdit: false
            }
        case setCrmSms.type:
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
        case editCrmSms.type:
            return {
                ...state,
                object: action.payload,
                isEdit: true
            }
        default:
            return state
    }
}

export default crmSMS