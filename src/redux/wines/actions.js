import {apiCall} from "../api/actions"

import {
    setLoading,
    setwines,
    setwine,
    editwine,
    setDetailLoading,
    setRequestCompleted, setIswineError, setIswineSuccess, setIsEdit
} from "./reducer"
import httpService, {baseURL} from "../../utility/http"
import {toast} from "react-toastify"

const url = 'product'


// ** Get All wines Data
export const loadWines = (pageIndex = 1, pageSize =  12, searchQuery = null) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}/GetWineProducts?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}`,
            data: {},
            method: 'get',
            onSuccess: setwines.type,
            iswine: true
        }))
    }
}

export const getWine = (id, isEdit = false) => {
    console.log("dataGet", isEdit)
    return async dispatch => {
        if (isEdit) {
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: editwine.type,
                iswine: true
            }))
        } else {
            dispatch(setDetailLoading(true))
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: setwine.type,
                iswine: true
            }))
        }
    }
}
export const deleteWine = (id) => {
    console.log('the id to be deleted', id)
    return async dispatch => {
        dispatch(apiCall({
            url: `${url}/${id}`,
            data: {},
            method: 'delete',
            isSuccessToast: true,
            successMessage: 'wine Deleted Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIswineError.type,
            isSuccess: setIswineSuccess.type
        }))
    }
}
export const addWine = (data) => {
    console.log('i come from add wine', data)
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'post',
            isSuccessToast: true,
            successMessage: 'wine Added Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIswineError.type,
            isSuccess: setIswineSuccess.type,
            isFormData: true
        }))
    }
}
export const updateWine = (data) => {
    console.log('updated data', data)
    console.log('i am called')
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'put',
            isSuccessToast: true,
            successMessage: 'wine Updated Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIswineError.type,
            isSuccess: setIswineSuccess.type,
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