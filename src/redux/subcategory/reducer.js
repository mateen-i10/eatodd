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

export const setSubCategorys = createAction("SubCategoryReducer/setSubCategorys")
export const setSubCategory = createAction("SubCategoryReducer/setSubCategory")
export const setLoading = createAction("SubCategoryReducer/setLoading")
export const editSubCategory = createAction("SubCategoryReducer/editSubCategory")
export const setDetailLoading = createAction("SubCategoryReducer/setDetailLoading")
export const setIsEdit = createAction("SubCategoryReducer/setIsEdit")
export const setIsSubCategoryError = createAction("SubCategoryReducer/setIsSubCategoryError")
export const setIsSubCategorySuccess = createAction("SubCategoryReducer/setIsSubCategorySuccess")
export const setRequestCompleted = createAction("SubCategoryReducer/setRequestCompleted")

const SubCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case setSubCategorys.type:
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
        case setSubCategory.type:
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
        case editSubCategory.type:
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
                isEdit: action.payload
            }
        case setIsSubCategoryError.type:
            return {
                ...state,
                isError: action.payload
            }
        case setIsSubCategorySuccess.type:
            return {
                ...state,
                isSuccess: action.payload
            }
        default:
            return state
    }
}

export default SubCategoryReducer
