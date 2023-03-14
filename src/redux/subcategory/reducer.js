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
            const data1 = action.payload.data
            console.log(data1, "some data")
            return {
                ...state,
                object:{...data1, category: {label: data1.category?.name, value: data1.categoryId}, isBlank: data1.isBlank, subCatId: data1.subCatId},
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
            const data = action.payload.data
            console.log(data, "some data 2")
            return {
                ...state,
                object: {...data, category: {label: data.category?.name, value: data.categoryId}, isBlank: data.isBlank, subCatId: {label: data.subCat?.name, value: data.subCat?.id}},
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
