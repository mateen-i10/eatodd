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

export const setSectionItems = createAction("sectionItemReducer/setSectionItems")
export const setSectionItem = createAction("sectionItemReducer/setSectionItem")
export const setLoading = createAction("sectionItemReducer/setLoading")
export const editSectionItem = createAction("sectionItemReducer/editSectionItem")
export const setDetailLoading = createAction("sectionItemReducer/setDetailLoading")
export const setIsEdit = createAction("sectionItemReducer/setIsEdit")
export const setIsSectionItemError = createAction("sectionItemReducer/setIsSectionItemError")
export const setIsSectionItemSuccess = createAction("sectionItemReducer/setIsSectionItemSuccess")
export const setRequestCompleted = createAction("sectionItemReducer/setRequestCompleted")

const sectionItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case setSectionItems.type:
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
        case setSectionItem.type:
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
        case editSectionItem.type:
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
        case setIsSectionItemError.type:
            return {
                ...state,
                isError: action.payload
            }
        case setIsSectionItemSuccess.type:
            return {
                ...state,
                isSuccess: action.payload
            }
        default:
            return state
    }
}

export default sectionItemReducer
