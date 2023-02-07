import {apiCall} from "../api/actions"
import {
    editGeneralRecommendation, setDetailLoading, setGeneralRecommendation,
    setGeneralRecommendations, setIsEdit,
    setIsGeneralRecommendationError,
    setIsGeneralRecommendationSuccess, setLoading,
    setRequestCompleted
} from "./reducer"
const url = 'GeneralRecommendation'

export const loadGeneralRecommendations = (pageIndex = 1, pageSize =  12, searchQuery = null) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}`,
            data: {},
            method: 'get',
            onSuccess: setGeneralRecommendations.type
        }))
    }
}

export const loadGeneralRecommendationsAgainstProduct = (ids  = "") => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}/GetGeneralRecommendation?ids=${ids}`,
            data: {},
            method: 'get',
            onSuccess: setGeneralRecommendations.type
        }))
    }
}

export const getGeneralRecommendation = (id, isEdit = false) => {
    console.log("dataGet", isEdit)
    return async dispatch => {
        if (isEdit) {
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: editGeneralRecommendation.type
            }))
        } else {
            dispatch(setDetailLoading(true))
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: setGeneralRecommendation.type
            }))
        }
    }
}

export const deleteGeneralRecommendation = (id) => {
    return async dispatch => {
        dispatch(apiCall({
            url: `${url}/${id}`,
            data: {},
            method: 'delete',
            isSuccessToast: true,
            successMessage: 'General Recommendation Deleted Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsGeneralRecommendationError.type,
            isSuccess: setIsGeneralRecommendationSuccess.type
        }))
    }
}

export const addGeneralRecommendationProduct = (data) => {
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'post',
            isSuccessToast: true,
            successMessage: 'General Recommendation Added Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsGeneralRecommendationError.type,
            isSuccess: setIsGeneralRecommendationSuccess.type
        }))
    }
}

export const updateGeneralRecommendationProduct = (data) => {
    console.log('dataEmp', data)
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'put',
            isSuccessToast: true,
            successMessage: 'General Recommendation Updated Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsGeneralRecommendationError.type,
            isSuccess: setIsGeneralRecommendationSuccess.type
        }))
        dispatch(setIsEdit(false))
    }
}