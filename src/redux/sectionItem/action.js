import {apiCall} from "../api/actions"
import {
    editSectionItem,
    setDetailLoading, setIsEdit, setIsSectionItemError, setIsSectionItemSuccess,
    setLoading,
    setRequestCompleted,
    setSectionItem,
    setSectionItems
} from "./reducer"
const url = 'sectionItem'

export const loadSectionItems = (pageIndex = 1, pageSize =  12, searchQuery = null) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}`,
            data: {},
            method: 'get',
            onSuccess: setSectionItems.type
        }))
    }
}

export const getSectionItem = (id, isEdit = false) => {
    return async dispatch => {
        if (isEdit) {
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: editSectionItem.type
            }))
        } else {
            dispatch(setDetailLoading(true))
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: setSectionItem.type
            }))
        }
    }
}

export const deleteSectionItem = (id) => {
    return async dispatch => {
        dispatch(apiCall({
            url: `${url}/${id}`,
            data: {},
            method: 'delete',
            isSuccessToast: true,
            successMessage: 'Section Deleted Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsSectionItemError.type,
            isSuccess: setIsSectionItemSuccess.type
        }))
    }
}

export const addSectionItem = (data) => {
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'post',
            isSuccessToast: true,
            successMessage: 'Ingredient Added Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsSectionItemError.type,
            isSuccess: setIsSectionItemSuccess.type
        }))
    }
}

export const updateSectionItem = (data) => {
    console.log('dataEmp', data)
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'put',
            isSuccessToast: true,
            successMessage: 'Employee Updated Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsSectionItemError.type,
            isSuccess: setIsSectionItemSuccess.type
        }))
        dispatch(setIsEdit(false))
    }
}
