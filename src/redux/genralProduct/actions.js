import {
    editGenralProduct,
    setDetailLoading,
    setGenralProduct,
    setGenralProductRequestCompleted,
    setGenralProducts,
    setIsGenralProductEdit,
    setIsGenralProductError,
    setIsGenralProductSuccess,
    setLoading
} from "./reducer"
// ** Table Data & Columns
// import {data} from '../../tempData/data'
import {apiCall} from "../api/actions"
import httpService, {baseURL} from "../../utility/http"
import {toast} from "react-toastify"

const url = 'generalProduct'


// ** Get All general Product Data
export const loadGenralProducts = (pageIndex = 1, pageSize = 12, searchQuery = null) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}`,
            data: {},
            method: 'get',
            onSuccess: setGenralProducts.type
        }))
    }
}

export const getGenralProduct = (id, isEdit = false) => {
    console.log("dataGet", isEdit)
    return async dispatch => {
        if (isEdit) {
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: editGenralProduct.type
            }))
        } else {
            dispatch(setDetailLoading(true))
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: setGenralProduct.type
            }))
        }
    }
}
export const deleteGenralProduct = (id) => {
    return async dispatch => {
        dispatch(apiCall({
            url: `${url}/${id}`,
            data: {},
            method: 'delete',
            isSuccessToast: true,
            successMessage: 'General Product Deleted Successfully',
            requestCompleted: setGenralProductRequestCompleted.type,
            onError: setIsGenralProductError.type,
            isSuccess: setIsGenralProductSuccess.type
        }))
    }
}
export const addGenralProduct = (data) => {
    console.log('resData', data)
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'post',
            isSuccessToast: true,
            successMessage: 'General Product Added Successfully',
            requestCompleted: setGenralProductRequestCompleted.type,
            onError: setIsGenralProductError.type,
            isSuccess: setIsGenralProductSuccess.type,
            isFormData: true
        }))
    }
}
export const updateGenralProduct = (data) => {
    console.log('updated data', data)
    delete data.AttachmentId
    delete data.modifiedById
    delete data.modifiedDate
    delete data.category

    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'put',
            isSuccessToast: true,
            successMessage: 'General Product Updated Successfully',
            requestCompleted: setGenralProductRequestCompleted.type,
            onError: setIsGenralProductError.type,
            isSuccess: setIsGenralProductSuccess.type,
            isFormData: true
        }))
        dispatch(setIsGenralProductEdit(false))
    }
}

export const updateImage = (data) => {
    console.log(data, "data from actions")

    return async () => {
        return httpService._put(`${baseURL}Media/UpdateGeneralProductImage`, data, {
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