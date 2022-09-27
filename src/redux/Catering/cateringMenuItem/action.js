import {apiCall} from "../../api/actions"
import {
    editCateringMenuItem,
    setCateringMenuItem,
    setCateringMenuItems,
    setDetailLoading,
    setIsCateringMenuItemError,
    setIsCateringMenuItemSuccess,
    setIsEdit,
    setLoading,
    setRequestCompleted
} from "./reducer"

const url = 'cateringMenuItem'

export const loadCateringMenuItems = (pageIndex = 1, pageSize = 12, searchQuery = null) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}`,
            data: {},
            method: 'get',
            onSuccess: setCateringMenuItems.type
        }))
    }
}

export const getCateringMenuItem = (id, isEdit = false) => {
    return async dispatch => {
        if (isEdit) {
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: editCateringMenuItem.type
            }))
        } else {
            dispatch(setDetailLoading(true))
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: setCateringMenuItem.type
            }))
        }
    }
}

export const deleteCateringMenuItem = (id) => {
    return async dispatch => {
        dispatch(apiCall({
            url: `${url}/${id}`,
            data: {},
            method: 'delete',
            isSuccessToast: true,
            successMessage: 'Catering Menu Item Deleted Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsCateringMenuItemError.type,
            isSuccess: setIsCateringMenuItemSuccess.type
        }))
    }
}

export const addCateringMenu = (data) => {
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'post',
            isSuccessToast: true,
            successMessage: 'Catering Menu Item Added Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsCateringMenuItemError.type,
            isSuccess: setIsCateringMenuItemSuccess.type,
            isFormData: true
        }))
    }
}

export const updateCateringMenu = (data) => {
    console.log('dataEmp', data)
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'put',
            isSuccessToast: true,
            successMessage: 'Catering Menu Item Updated Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsCateringMenuItemError.type,
            isSuccess: setIsCateringMenuItemSuccess.type,
            isFormData: true
        }))
        dispatch(setIsEdit(false))
    }
}
