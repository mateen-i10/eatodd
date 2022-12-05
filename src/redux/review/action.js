import {apiCall} from "../api/actions"
import {
    editReview,
    setDetailLoading, setIsEdit,
    setIsReviewError, setIsReviewSuccess,
    setLoading,
    setRequestCompleted,
    setReview,
    setReviews
} from "./reducer"
const url = 'review'

export const loadReviews = (pageIndex = 1, pageSize =  12, searchQuery = null) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}`,
            data: {},
            method: 'get',
            onSuccess: setReviews.type
        }))
    }
}

export const getReview = (id, isEdit = false) => {
    console.log("dataGet", isEdit)
    return async dispatch => {
        if (isEdit) {
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: editReview.type
            }))
        } else {
            dispatch(setDetailLoading(true))
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: setReview.type
            }))
        }
    }
}

export const deleteReview = (id) => {
    return async dispatch => {
        dispatch(apiCall({
            url: `${url}/${id}`,
            data: {},
            method: 'delete',
            isSuccessToast: true,
            successMessage: 'Review Deleted Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsReviewError.type,
            isSuccess: setIsReviewSuccess.type
        }))
    }
}

export const addReview = (data) => {
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'post',
            isSuccessToast: true,
            successMessage: 'Review Added Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsReviewError.type,
            isSuccess: setIsReviewSuccess.type
        }))
    }
}

export const updateReview = (data) => {
    console.log('dataEmp', data)
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'put',
            isSuccessToast: true,
            successMessage: 'Review Updated Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsReviewError.type,
            isSuccess: setIsReviewSuccess.type
        }))
        dispatch(setIsEdit(false))
    }
}
