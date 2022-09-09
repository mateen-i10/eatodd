import {apiCall} from "../api/actions"
import {
    editIngredient,
    setDetailLoading,
    setIngredient,
    setIngredients, setIsEdit, setIsIngredientError, setIsIngredientSuccess,
    setLoading,
    setRequestCompleted
} from "./reducer"
const url = 'ingredient'

export const loadIngredients = (pageIndex = 1, pageSize =  12, searchQuery = null) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}`,
            data: {},
            method: 'get',
            onSuccess: setIngredients.type
        }))
    }
}

export const getIngredient = (id, isEdit = false) => {
    console.log("dataGet", isEdit)
    return async dispatch => {
        if (isEdit) {
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: editIngredient.type
            }))
        } else {
            dispatch(setDetailLoading(true))
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: setIngredient.type
            }))
        }
    }
}

export const deleteIngredient = (id) => {
    return async dispatch => {
        dispatch(apiCall({
            url: `${url}/${id}`,
            data: {},
            method: 'delete',
            isSuccessToast: true,
            successMessage: 'Ingredient Deleted Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsIngredientError.type,
            isSuccess: setIsIngredientSuccess.type
        }))
    }
}

export const addIngredient = (data) => {
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'post',
            isSuccessToast: true,
            successMessage: 'Ingredient Added Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsIngredientError.type,
            isSuccess: setIsIngredientSuccess.type
        }))
    }
}

export const updateIngredient = (data) => {
    console.log('dataEmp', data)
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'put',
            isSuccessToast: true,
            successMessage: 'Employee Updated Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsIngredientError.type,
            isSuccess: setIsIngredientSuccess.type
        }))
        dispatch(setIsEdit(false))
    }
}
