import {apiCall} from "../api/actions"

import {
    setLoading,
    setRestaurants,
    setRestaurant,
    editRestaurant,
    setDetailLoading,
    setRequestCompleted,
    setIsRestaurantError,
    setIsRestaurantSuccess,
    setIsEdit,
    setOrdersByRestaurant,
    setProductsByRestaurant
} from "./reducer"
const url = 'restaurant'


// ** Get All Restaurants Data
export const loadRestaurants = (pageIndex = 1, pageSize =  12, searchQuery = null) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}`,
            data: {},
            method: 'get',
            onSuccess: setRestaurants.type
        }))
    }
}
export const getRestaurant = (id, isEdit = false) => {
    console.log("dataGet", isEdit)
    return async dispatch => {
        if (isEdit) {
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: editRestaurant.type
            }))
        } else {
            dispatch(setDetailLoading(true))
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: setRestaurant.type
            }))
        }
    }
}
export const deleteRestaurant = (id) => {
    return async dispatch => {
        dispatch(apiCall({
            url: `${url}/${id}`,
            data: {},
            method: 'delete',
            isSuccessToast: true,
            successMessage: 'Restaurant Deleted Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsRestaurantError.type,
            isSuccess: setIsRestaurantSuccess.type
        }))
    }
}
export const addRestaurant = (data) => {
    console.log('resData', data)
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'post',
            isSuccessToast: true,
            successMessage: 'Restaurant Added Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsRestaurantError.type,
            isSuccess: setIsRestaurantSuccess.type
        }))
    }
}
export const updateRestaurant = (data) => {
    console.log('datares', data)
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'put',
            isSuccessToast: true,
            successMessage: 'Restaurant Updated Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsRestaurantError.type,
            isSuccess: setIsRestaurantSuccess.type
        }))
        dispatch(setIsEdit(false))
    }
}

// ** Get All Orders by Restaurants Data
export const loadOrdersByRestaurant = (pageIndex = 1, pageSize =  12, searchQuery = null, RefId = 0) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}/OrderByRestaurant?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}&&RefId=${RefId}`,
            data: {},
            method: 'get',
            onSuccess: setOrdersByRestaurant.type
        }))
    }
}

// ** Get All Products by Restaurants Data
export const loadProductsByRestaurant = (pageIndex = 1, pageSize =  12, searchQuery = null, RefId = 0) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}/ProductByRestaurant?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}&&RefId=${RefId}`,
            data: {},
            method: 'get',
            onSuccess: setProductsByRestaurant.type
        }))
    }
}

// ** Get All Customers by Restaurants Data
export const loadCustomersByRestaurant = (pageIndex = 1, pageSize =  12, searchQuery = null, RefId = 0) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}/CustomerByRestaurant?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}&&RefId=${RefId}`,
            data: {},
            method: 'get',
            onSuccess: setProductsByRestaurant.type
        }))
    }
}
