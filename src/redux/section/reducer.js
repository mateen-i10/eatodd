import {createAction} from '@reduxjs/toolkit'

const initialState = {
    list: [],
    object: {},
    miscData: {},
    isRequestCompleted: false,
    isLoading: false,
    isDetailLoading: false,
    isEdit: false,
    isError: false,
    isSuccess: false
}

export const setSections = createAction("sectionReducer/setSections")
export const setSection = createAction("sectionReducer/setSection")
export const setLoading = createAction("sectionReducer/setLoading")
export const editSection = createAction("sectionReducer/editSection")
export const setDetailLoading = createAction("sectionReducer/setDetailLoading")
export const setIsEdit = createAction("sectionReducer/setIsEdit")
export const setIsSectionError = createAction("sectionReducer/setIsSectionError")
export const setIsSectionSuccess = createAction("sectionReducer/setIsSectionSuccess")
export const setRequestCompleted = createAction("sectionReducer/setRequestCompleted")

const sectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case setSections.type:
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
        case setSection.type:
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
        case editSection.type:
            return {
                ...state,
                object: action.payload.data,
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
        case setIsSectionError.type:
            return {
                ...state,
                isError: action.payload
            }
        case setIsSectionSuccess.type:
            return {
                ...state,
                isSuccess: action.payload
            }
        default:
            return state
    }
}

export default sectionReducer
