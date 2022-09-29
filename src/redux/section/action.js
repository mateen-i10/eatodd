import {apiCall} from "../api/actions"
import {
    editSection,
    setDetailLoading, setIsEdit,
    setIsSectionError, setIsSectionSuccess,
    setLoading,
    setRequestCompleted,
    setSection,
    setSections
} from "./reducer"
const url = 'section'

export const loadSections = (pageIndex = 1, pageSize =  12, searchQuery = null) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}`,
            data: {},
            method: 'get',
            onSuccess: setSections.type
        }))
    }
}

export const getSection = (id, isEdit = false) => {
    return async dispatch => {
        if (isEdit) {
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: editSection.type
            }))
        } else {
            dispatch(setDetailLoading(true))
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: setSection.type
            }))
        }
    }
}

export const deleteSection = (id) => {
    return async dispatch => {
        dispatch(apiCall({
            url: `${url}/${id}`,
            data: {},
            method: 'delete',
            isSuccessToast: true,
            successMessage: 'Deleted Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsSectionError.type,
            isSuccess: setIsSectionSuccess.type
        }))
    }
}

export const addSection = (data) => {
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'post',
            isSuccessToast: true,
            successMessage: 'Added Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsSectionError.type,
            isSuccess: setIsSectionSuccess.type
        }))
    }
}

export const updateSection = (data) => {
    console.log('dataEmp', data)
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'put',
            isSuccessToast: true,
            successMessage: 'Updated Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsSectionError.type,
            isSuccess: setIsSectionSuccess.type
        }))
        dispatch(setIsEdit(false))
    }
}
