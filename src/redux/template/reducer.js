import {createAction} from '@reduxjs/toolkit'
const initialState = {
    list: [],
    object: {},
    isLoading: false,
    isDetailLoading: false,
    isRequestCompleted: false,
    isError: false,
    isSuccess: false,
    isEdit: false
}

export const setTemplates = createAction("TemplateReducer/setTemplates")
export const setTemplate = createAction("TemplateReducer/setTemplate")
export const setLoading = createAction("TemplateReducer/setLoading")
export const setDetailLoading = createAction("TemplateReducer/setDetailLoading")
export const setIsTemplateSuccess = createAction("TemplateReducer/setIsTemplateSuccess")
export const setRequestCompleted = createAction("TemplateReducer/setRequestCompleted")
export const setIsTemplateError = createAction("TemplateReducer/setIsTemplateError")
export const setIsEdit = createAction("TemplateReducer/setIsEdit")

const TemplateReducer = (state = initialState, action) => {
    switch (action.type) {
        case setTemplates.type:
            return {
                ...state,
                list: action.payload.data,
                isLoading: false,
                isError: false,
                isSuccess: false
            }
        case setTemplate.type:
            return {
                ...state,
                object: action.payload.data,
                isLoading: false,
                isDetailLoading: false
            }
        case setLoading.type:
            return {
                ...state,
                isLoading: action.payload
            }
        case setIsEdit.type:
            return {
                ...state,
                isEdit: action.payload
            }
        case setRequestCompleted.type:
            return {
                ...state,
                isRequestCompleted: action.payload
            }
        case setDetailLoading.type:
            return {
                ...state,
                isDetailLoading: action.payload
            }
        case setIsTemplateError.type:
            return {
                ...state,
                isError: action.payload
            }
        case setIsTemplateSuccess.type:
            return {
                ...state,
                isSuccess: action.payload
            }
        default:
            return state
    }
}

export default TemplateReducer
