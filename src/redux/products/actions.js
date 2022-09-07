import {apiCall} from "../api/actions"

import {
    setLoading,
    setproducts,
    setproduct,
    editproduct,
    setDetailLoading,
    setRequestCompleted, setIsproductError, setIsproductSuccess, setIsEdit
} from "./reducer"

const url = 'product'


// ** Get All products Data
export const loadproducts = (pageIndex = 1, pageSize =  12, searchQuery = null) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}`,
            data: {},
            method: 'get',
            onSuccess: setproducts.type
        }))
    }
}

export const getproduct = (id, isEdit = false) => {
    console.log("dataGet", isEdit)
    return async dispatch => {
        if (isEdit) {
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: editproduct.type
            }))
        } else {
            dispatch(setDetailLoading(true))
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: setproduct.type
            }))
        }
    }
}
export const deleteproduct = (id) => {
    return async dispatch => {
        dispatch(apiCall({
            url: `${url}/${id}`,
            data: {},
            method: 'delete',
            isSuccessToast: true,
            successMessage: 'product Deleted Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsproductError.type,
            isSuccess: setIsproductSuccess.type
        }))
    }
}
export const addproduct = (data) => {
    console.log('resData', data)
    delete data.restaurant
    delete data.subcategory
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'post',
            isSuccessToast: true,
            successMessage: 'product Added Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsproductError.type,
            isSuccess: setIsproductSuccess.type,
            isFormData: true
        }))
    }
}
export const updateproduct = (data) => {
    console.log('updated data', data)
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'put',
            isSuccessToast: true,
            successMessage: 'product Updated Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsproductError.type,
            isSuccess: setIsproductSuccess.type,
            isFormData: true
        }))
        dispatch(setIsEdit(false))
    }
}
