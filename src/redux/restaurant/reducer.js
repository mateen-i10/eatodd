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

export const setRestaurants = createAction("RestaurantReducer/setRestaurants")
export const setRestaurant = createAction("RestaurantReducer/setRestaurant")
export const setLoading = createAction("RestaurantReducer/setLoading")
export const editRestaurant = createAction("RestaurantReducer/editRestaurant")
export const setDetailLoading = createAction("RestaurantReducer/setDetailLoading")
export const setIsEdit = createAction("RestaurantReducer/setIsEdit")
export const setIsRestaurantError = createAction("RestaurantReducer/setIsRestaurantError")
export const setIsRestaurantSuccess = createAction("RestaurantReducer/setIsRestaurantSuccess")
export const setRequestCompleted = createAction("RestaurantReducer/setRequestCompleted")

const RestaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case setRestaurants.type:
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
        case setRestaurant.type:
            const data = action.payload.data
            return {
                ...state,
                object: {...data},
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
        case editRestaurant.type:
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
        case setIsRestaurantError.type:
            return {
                ...state,
                isError: action.payload
            }
        case setIsRestaurantSuccess.type:
            return {
                ...state,
                isSuccess: action.payload
            }
        default:
            return state
    }
}

export default RestaurantReducer
