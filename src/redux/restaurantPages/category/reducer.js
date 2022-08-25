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

export const setCategorys = createAction("CategoryReducer/setCategorys")
export const setCategory = createAction("CategoryReducer/setCategory")
export const setLoading = createAction("CategoryReducer/setLoading")
export const editCategory = createAction("CategoryReducer/editCategory")
export const setDetailLoading = createAction("CategoryReducer/setDetailLoading")
export const setIsEdit = createAction("CategoryReducer/setIsEdit")
export const setIsCategoryError = createAction("CategoryReducer/setIsCategoryError")
export const setIsCategorySuccess = createAction("CategoryReducer/setIsCategorySuccess")
export const setRequestCompleted = createAction("CategoryReducer/setRequestCompleted")

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case setCategorys.type:
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
        case setCategory.type:
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
        case editCategory.type:
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
        case setIsCategoryError.type:
            return {
                ...state,
                isError: action.payload
            }
        case setIsCategorySuccess.type:
            return {
                ...state,
                isSuccess: action.payload
            }
        default:
            return state
    }
}

export default CategoryReducer