import {apiCall} from "../api/actions"

import {
    setIsTemplateError,
    setIsTemplateSuccess,
    setRequestCompleted,
    setLoading,
    setTemplates, setTemplate, setDetailLoading, setIsEdit
} from "./reducer"

const url = 'Template'

export const loadTemplates = (pageIndex = 1, pageSize =  12, searchQuery = null) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}`,
            data: {},
            method: 'get',
            onSuccess: setTemplates.type
        }))
    }
}

export const getTemplate = (id) => {
    return async dispatch => {
            dispatch(setDetailLoading(true))
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: setTemplate.type
            }))
    }
}

export const addTemplate = (data) => {
    console.log('resData', data)
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'post',
            isSuccessToast: true,
            successMessage: 'Template Added Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsTemplateError.type,
            isSuccess: setIsTemplateSuccess.type
        }))
    }
}

export const deleteTemplate = (id) => {
    return async dispatch => {
        dispatch(apiCall({
            url: `${url}/${id}`,
            data: {},
            method: 'delete',
            isSuccessToast: true,
            successMessage: 'Template Deleted Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsTemplateError.type,
            isSuccess: setIsTemplateSuccess.type
        }))
    }
}

export const updateTemplate = (data) => {
    console.log('updated data', data)
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'put',
            isSuccessToast: true,
            successMessage: 'Template Updated Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsTemplateError.type,
            isSuccess: setIsTemplateSuccess.type
        }))
        dispatch(setIsEdit(false))
    }
}