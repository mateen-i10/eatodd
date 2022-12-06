import {apiCall} from "../api/actions"

import {
    setLoading,
    setproducts,
    setproduct,
    editproduct,
    setDetailLoading,
    setRequestCompleted, setIsproductError, setIsproductSuccess, setIsEdit
} from "./reducer"
import httpService, {baseURL} from "../../utility/http"
import {toast} from "react-toastify"

const url = 'product'


// ** Get All products Data
export const loadproducts = (pageIndex = 1, pageSize =  12, searchQuery = null, refId = 0) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}&&refId=${refId}`,
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

export const updateImage = (data) => {
    console.log(data, "data from actions")

    return async () => {
         return httpService._put(`${baseURL}Media/UpdateProductImage`, data, {
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
