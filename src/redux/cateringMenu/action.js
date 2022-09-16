import {apiCall} from "../api/actions"
import {
    editCateringMenu,
    setCateringMenu,
    setCateringMenus,
    setDetailLoading, setIsCateringMenuError, setIsCateringMenuSuccess, setIsEdit,
    setLoading,
    setRequestCompleted
} from "./reducer"
const url = 'cateringMenu'

export const loadCateringMenus = (pageIndex = 1, pageSize =  12, searchQuery = null) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}`,
            data: {},
            method: 'get',
            onSuccess: setCateringMenus.type
        }))
    }
}

export const getCateringMenu = (id, isEdit = false) => {
    return async dispatch => {
        if (isEdit) {
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: editCateringMenu.type
            }))
        } else {
            dispatch(setDetailLoading(true))
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: setCateringMenu.type
            }))
        }
    }
}

export const deleteCateringMenu = (id) => {
    return async dispatch => {
        dispatch(apiCall({
            url: `${url}/${id}`,
            data: {},
            method: 'delete',
            isSuccessToast: true,
            successMessage: 'Catering Menu Deleted Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsCateringMenuError.type,
            isSuccess: setIsCateringMenuSuccess.type
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
            successMessage: 'Catering Menu Added Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsCateringMenuError.type,
            isSuccess: setIsCateringMenuSuccess.type
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
            successMessage: 'Catering Menu Updated Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsCateringMenuError.type,
            isSuccess: setIsCateringMenuSuccess.type
        }))
        dispatch(setIsEdit(false))
    }
}
