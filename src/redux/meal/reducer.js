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

export const setMeal = createAction("MealReducer/setMeal")
export const setLoading = createAction("MealReducer/setLoading")
export const setDetailLoading = createAction("MealReducer/setDetailLoading")
export const setIsEdit = createAction("MealReducer/setIsEdit")
export const setIsMealError = createAction("MealReducer/setIsMealError")
export const setIsMealSuccess = createAction("MealReducer/setIsMealSuccess")
export const setRequestCompleted = createAction("MealReducer/setRequestCompleted")

const MealReducer = (state = initialState, action) => {
    switch (action.type) {
        case setMeal.type:
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
        case setIsEdit.type:
            return {
                ...state,
                isEdit: action.payload
            }
        case setIsMealError.type:
            return {
                ...state,
                isError: action.payload
            }
        case setIsMealSuccess.type:
            return {
                ...state,
                isSuccess: action.payload
            }
        default:
            return state
    }
}

export default MealReducer