import {apiCall} from "../../api/actions"

import {
    editCategory,
    setCategory,
    setCategorys,
    setDetailLoading,
    setIsCategoryError,
    setIsCategorySuccess,
    setIsEdit,
    setLoading,
    setRequestCompleted
} from "./reducer"
import httpService, {baseURL} from "../../../utility/http"
import {toast} from "react-toastify"

const url = 'Category'


// ** Get All Categorys Data
export const loadCategorys = (pageIndex = 1, pageSize = 12, searchQuery = null) => {
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
    delete data.cateringId
    delete data.modifiedById
    delete data.modifiedDate
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'put',
            isSuccessToast: true,
            successMessage: 'Category Updated Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsCategoryError.type,
            isSuccess: setIsCategorySuccess.type,
            isFormData: true
        }))
        dispatch(setIsEdit(false))
    }
}

export const updateImage = (data) => {
    console.log(data, "data from actions")

    return async () => {
        return httpService._put(`${baseURL}Media/UpdateCategoryImage`, data, {
            headers: {encType:"multipart/form-data"}
        }).then(response => {
            // success case
            if (response.status === 200 && response.data.statusCode === 200) {
                toast.success('Image Updated Successfully')
            } else {
                //general Error Action
                toast.error(response.data.message)
            }
        }).catch(error => {
            toast.error(error.message)
        })
    }
}