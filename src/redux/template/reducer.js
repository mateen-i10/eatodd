import {createAction} from '@reduxjs/toolkit'
const initialState = {
    list: [],
    isLoading: false
}

export const setTemplates = createAction("TemplateReducer/setTemplates")
export const setLoading = createAction("TemplateReducer/setLoading")

const TemplateReducer = (state = initialState, action) => {
    switch (action.type) {
        case setTemplates.type:
            return {
                ...state,
                list: action.payload,
                isLoading: false
            }
        case setLoading.type:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}

export default TemplateReducer
