import {apiCall} from "../api/actions"

import {
    setLoading,
    setwines,
    setwine,
    editwine,
    setDetailLoading,
    setRequestCompleted, setIswineError, setIswineSuccess, setIsEdit
} from "./reducer"

const url = 'product'


// ** Get All wines Data
export const loadWines = (pageIndex = 1, pageSize =  12, searchQuery = null) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}`,
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
    console.log('resData', data)
    delete data.attachmentId
    delete data.restaurantId
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
    delete data.attachmentId
    delete data.createdById
    delete data.generalProductId
    delete data.modifiedById
    delete data.modifiedDate
    delete data.restaurantId
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
