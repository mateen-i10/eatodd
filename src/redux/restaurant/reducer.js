import {createAction} from '@reduxjs/toolkit'
const initialState = {
    list: [],
    object: {},
    isLoading: false,
    isEdit: false
}

export const setRestaurants = createAction("RestaurantReducer/setRestaurants")
export const setRestaurant = createAction("RestaurantReducer/setRestaurant")
export const setLoading = createAction("RestaurantReducer/setLoading")
export const editRestaurant = createAction("RestaurantReducer/editRestaurant")

const RestaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case setRestaurants.type:
            return {
                ...state,
                list: action.payload,
                isLoading: false,
                isEdit: false
            }
        case setRestaurant.type:
            return {
                ...state,
                object: action.payload,
                isLoading: false
            }
        case setLoading.type:
            return {
                ...state,
                isLoading: action.payload
            }
        case editRestaurant.type:
            return {
                ...state,
                object: action.payload,
                isEdit: true
            }
        default:
            return state
    }
}

export default RestaurantReducer