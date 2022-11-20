import {createAction} from '@reduxjs/toolkit'
const initialState = {
    list: [],
    isLoading: false,
    isRequestCompleted: false,
    isError: false,
    isSuccess: false
}

export const setTemplates = createAction("TemplateReducer/setTemplates")
export const setLoading = createAction("TemplateReducer/setLoading")
export const setIsTemplateSuccess = createAction("TemplateReducer/setIsTemplateSuccess")
export const setRequestCompleted = createAction("TemplateReducer/setRequestCompleted")
export const setIsTemplateError = createAction("TemplateReducer/setIsTemplateError")

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
