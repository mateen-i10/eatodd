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

export const setIngredients = createAction("ingredientReducer/setIngredients")
export const setIngredient = createAction("ingredientReducer/setIngredient")
export const setLoading = createAction("ingredientReducer/setLoading")
export const editIngredient = createAction("ingredientReducer/editIngredient")
export const setDetailLoading = createAction("ingredientReducer/setDetailLoading")
export const setIsEdit = createAction("ingredientReducer/setIsEdit")
export const setIsIngredientError = createAction("ingredientReducer/setIsIngredientError")
export const setIsIngredientSuccess = createAction("ingredientReducer/setIsIngredientSuccess")
export const setRequestCompleted = createAction("ingredientReducer/setRequestCompleted")

const ingredientReducer = (state = initialState, action) => {
    switch (action.type) {
        case setIngredients.type:
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
        case setIngredient.type:
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
        case editIngredient.type:
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
        case setIsIngredientError.type:
            return {
                ...state,
                isError: action.payload
            }
        case setIsIngredientSuccess.type:
            return {
                ...state,
                isSuccess: action.payload
            }
        default:
            return state
    }
}

export default ingredientReducer
