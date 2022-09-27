import {createAction} from '@reduxjs/toolkit'
// ** Table Data & Columns
import {data} from '../../../tempData/data'

export const setCrmSmss = createAction("crmSMS/setCrmSmss")
export const setCrmSms = createAction("crmSMS/setCrmSms")
export const setLoading = createAction("crmSMS/setLoading")
export const editCrmSms = createAction("crmSMS/editCrmSms")

// ** Get CrmSmss Data
export const loadCrmSms = () => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(setCrmSmss([...data]))
    }
}
export const getCrmSms = (id, isEdit) => {
    return async dispatch => {
        dispatch(setLoading(true))
        const found = data.find(d => d.id === id)
        if (isEdit) dispatch(editCrmSms({...found}))
        else {
            dispatch(setCrmSms({...found}))
        }
    }
}
export const deleteCrmSms = (id) => {
    return async dispatch => {
        console.log('deleted', id, dispatch)
    }
}

const initialState = {
    list: [],
    object: {},
    isLoading: false,
    isEdit: false
}

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