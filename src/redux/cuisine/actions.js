import {apiCall} from "../api/actions"

import {
    setLoading,
    setCuisines,
    setCuisine,
    editCuisine,
    setDetailLoading,
    setRequestCompleted, setIsCuisineError, setIsCuisineSuccess, setIsEdit
} from "./reducer"

const url = 'cuisine'


// ** Get All Cuisines Data
export const loadCuisines = (pageIndex = 1, pageSize =  12, searchQuery = null) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}`,
            data: {},
            method: 'get',
            onSuccess: setCuisines.type
        }))
    }
}

export const getCuisine = (id, isEdit = false) => {
    console.log("dataGet", isEdit)
    return async dispatch => {
        if (isEdit) {
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: editCuisine.type
            }))
        } else {
            dispatch(setDetailLoading(true))
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: setCuisine.type
            }))
        }
    }
}
export const deleteCuisine = (id) => {
    return async dispatch => {
        dispatch(apiCall({
            url: `${url}/${id}`,
            data: {},
            method: 'delete',
            isSuccessToast: true,
            successMessage: 'Cuisine Deleted Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsCuisineError.type,
            isSuccess: setIsCuisineSuccess.type
        }))
    }
}
export const addCuisine = (data) => {
    console.log('resData', data)
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'post',
            isSuccessToast: true,
            successMessage: 'Cuisine Added Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsCuisineError.type,
            isSuccess: setIsCuisineSuccess.type
        }))
    }
}
export const updateCuisine = (data) => {
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'put',
            isSuccessToast: true,
            successMessage: 'Cuisine Updated Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsCuisineError.type,
            isSuccess: setIsCuisineSuccess.type
        }))
        dispatch(setIsEdit(false))
    }
}
