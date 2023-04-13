import {createAction} from '@reduxjs/toolkit'
const initialState = {
    list: [],
    orderList: [],
    productList: [],
    customerList: [],
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
export const setOrdersByRestaurant = createAction("RestaurantReducer/setOrdersByRestaurant")
export const setProductsByRestaurant = createAction("RestaurantReducer/setProductsByRestaurant")
export const setProductsByRestaurantSubcategory = createAction("RestaurantReducer/setProductsByRestaurantSubcategory")
export const setCustomersByRestaurant = createAction("RestaurantReducer/setCustomersByRestaurant")
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
            console.log('redData', data)
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
                object: {...action.payload.data,
                    address1: action.payload.data.address.address1,
                    latitude: action.payload.data.address.latitude,
                    longitude: action.payload.data.address.longitude,
                    city: action.payload.data.address.city,
                    state: action.payload.data.address.state,
                    country: action.payload.data.address.country,
                    zipCode: action.payload.data.address.zipCode,
                    cuisines: action.payload.data.cuisines?.map(i => {
                            return {label: i.cuisine?.name, value: i.cuisine.id}
                        }
                    )
                },
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
        case setOrdersByRestaurant.type:
            return {
                ...state,
                orderList: action.payload.data,
                miscData: action.payload.miscData,
                isLoading: false,
                isDetailLoading: false,
                isEdit: false,
                isError: false,
                isSuccess: false
            }
        case setProductsByRestaurant.type:
            return {
                ...state,
                productList: action.payload.data,
                miscData: action.payload.miscData,
                isLoading: false,
                isDetailLoading: false,
                isEdit: false,
                isError: false,
                isSuccess: false
            }
            case setProductsByRestaurantSubcategory.type:
            return {
                ...state,
                productList: action.payload.data.products,
                miscData: action.payload.miscData,
                isLoading: false,
                isDetailLoading: false,
                isEdit: false,
                isError: false,
                isSuccess: false
            }
        case setCustomersByRestaurant.type:
            return {
                ...state,
                customerList: action.payload.data,
                miscData: action.payload.miscData,
                isLoading: false,
                isDetailLoading: false,
                isEdit: false,
                isError: false,
                isSuccess: false
            }
        default:
            return state
    }
}

export default RestaurantReducer
