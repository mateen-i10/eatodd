import {apiCall} from "../api/actions"

import {
    setLoading,
    setSubCategorys,
    setSubCategory,
    editSubCategory,
    setDetailLoading,
    setRequestCompleted, setIsSubCategoryError, setIsSubCategorySuccess, setIsEdit
} from "./reducer"
import httpService, {baseURL} from "../../utility/http"
import {toast} from "react-toastify"

const url = 'SubCategory'


// ** Get All SubCategorys Data
export const loadSubCategorys = (pageIndex = 1, pageSize =  12, searchQuery = null) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}`,
            data: {},
            method: 'get',
            onSuccess: setSubCategorys.type
        }))
    }
}

export const getSubCategory = (id, isEdit = false) => {
    console.log("dataGet", isEdit)
    return async dispatch => {
        if (isEdit) {
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: editSubCategory.type
            }))
        } else {
            dispatch(setDetailLoading(true))
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: setSubCategory.type
            }))
        }
    }
}
export const deleteSubCategory = (id) => {
    return async dispatch => {
        dispatch(apiCall({
            url: `${url}/${id}`,
            data: {},
            method: 'delete',
            isSuccessToast: true,
            successMessage: 'SubCategory Deleted Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsSubCategoryError.type,
            isSuccess: setIsSubCategorySuccess.type
        }))
    }
}
export const addSubCategory = (data) => {
    console.log('resData', data)

    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'post',
            isSuccessToast: true,
            successMessage: 'SubCategory Added Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsSubCategoryError.type,
            isSuccess: setIsSubCategorySuccess.type,
            isFormData: true
        }))
    }
}
export const updateSubCategory = (data) => {
    console.log('updated data', data)
    delete data.attachmentId
    delete data.modifiedById
    delete data.modifiedDate
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'put',
            isSuccessToast: true,
            successMessage: 'SubCategory Updated Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsSubCategoryError.type,
            isSuccess: setIsSubCategorySuccess.type,
            isFormData: true
        }))
        dispatch(setIsEdit(false))
    }
}

export const updateImage = (data) => {
    console.log(data, "data from actions")

    return async () => {
        return httpService._put(`${baseURL}media/updateMedia`, data, {
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