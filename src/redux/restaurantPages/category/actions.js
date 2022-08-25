import {apiCall} from "../../api/actions"

import {
    setLoading,
    setCategorys,
    setCategory,
    editCategory,
    setDetailLoading,
    setRequestCompleted, setIsCategoryError, setIsCategorySuccess, setIsEdit
} from "./reducer"

const url = 'Category'


// ** Get All Categorys Data
export const loadCategorys = (pageIndex = 1, pageSize =  12, searchQuery = null) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}`,
            data: {},
            method: 'get',
            onSuccess: setCategorys.type
        }))
    }
}

export const getCategory = (id, isEdit = false) => {
    console.log("dataGet", isEdit)
    return async dispatch => {
        if (isEdit) {
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: editCategory.type
            }))
        } else {
            dispatch(setDetailLoading(true))
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: setCategory.type
            }))
        }
    }
}
export const deleteCategory = (id) => {
    return async dispatch => {
        dispatch(apiCall({
            url: `${url}/${id}`,
            data: {},
            method: 'delete',
            isSuccessToast: true,
            successMessage: 'Category Deleted Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsCategoryError.type,
            isSuccess: setIsCategorySuccess.type
        }))
    }
}
export const addCategory = (data) => {
    console.log('resData', data)
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'post',
            isSuccessToast: true,
            successMessage: 'Category Added Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsCategoryError.type,
            isSuccess: setIsCategorySuccess.type,
            isFormData: true
        }))
    }
}
export const updateCategory = (data) => {
    console.log('updated data', data)
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'put',
            isSuccessToast: true,
            successMessage: 'Category Updated Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsCategoryError.type,
            isSuccess: setIsCategorySuccess.type
        }))
        dispatch(setIsEdit(false))
    }
}
