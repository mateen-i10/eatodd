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

export const setCateringMenus = createAction("cateringMenuReducer/setCateringMenus")
export const setCateringMenu = createAction("cateringMenuReducer/setCateringMenu")
export const setLoading = createAction("cateringMenuReducer/setLoading")
export const editCateringMenu = createAction("cateringMenuReducer/editCateringMenu")
export const setDetailLoading = createAction("cateringMenuReducer/setDetailLoading")
export const setIsEdit = createAction("cateringMenuReducer/setIsEdit")
export const setIsCateringMenuError = createAction("cateringMenuReducer/setIsCateringMenuError")
export const setIsCateringMenuSuccess = createAction("cateringMenuReducer/setIsCateringMenuSuccess")
export const setRequestCompleted = createAction("cateringMenuReducer/setRequestCompleted")

const cateringMenuReducer = (state = initialState, action) => {
    switch (action.type) {
        case setCateringMenus.type:
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
        case setCateringMenu.type:
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
        case editCateringMenu.type:
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
        case setIsCateringMenuError.type:
            return {
                ...state,
                isError: action.payload
            }
        case setIsCateringMenuSuccess.type:
            return {
                ...state,
                isSuccess: action.payload
            }
        default:
            return state
    }
}

export default cateringMenuReducer
