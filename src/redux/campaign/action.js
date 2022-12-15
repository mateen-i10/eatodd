import {apiCall} from "../api/actions"
import {
    editCampaign,
    setCampaign,
    setCampaigns,
    setDetailLoading,
    setIsCampaignError, setIsCampaignSuccess, setIsEdit,
    setLoading,
    setRequestCompleted
} from "./reducer"

const url = 'campaign'

export const loadCampaigns = (pageIndex = 1, pageSize =  10, searchQuery = null) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}`,
            data: {},
            method: 'get',
            onSuccess: setCampaigns.type
        }))
    }
}

export const getCampaign = (id, isEdit = false) => {
    return async dispatch => {
        if (isEdit) {
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: editCampaign.type
            }))
        } else {
            dispatch(setDetailLoading(true))
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: setCampaign.type
            }))
        }
    }
}

export const deleteCampaign = (id) => {
    return async dispatch => {
        dispatch(apiCall({
            url: `${url}/${id}`,
            data: {},
            method: 'delete',
            isSuccessToast: true,
            successMessage: 'Deleted Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsCampaignError.type,
            isSuccess: setIsCampaignSuccess.type
        }))
    }
}

export const addCampaign = (data) => {
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'post',
            isSuccessToast: true,
            successMessage: 'Added Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsCampaignError.type,
            isSuccess: setIsCampaignSuccess.type
        }))
    }
}

export const updateCampaign = (data) => {
    console.log('dataEmp', data)
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'put',
            isSuccessToast: true,
            successMessage: 'Updated Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsCampaignError.type,
            isSuccess: setIsCampaignSuccess.type
        }))
        dispatch(setIsEdit(false))
    }
}
