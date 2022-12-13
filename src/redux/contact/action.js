import {apiCall} from "../api/actions"
import {
    setContact,
    setContacts,
    setDetailLoading,
    setIsContactError,
    setIsContactSuccess,
    setLoading,
    setRequestCompleted
} from "./reducer"

const url = 'Contact'

export const loadContacts = (pageIndex = 1, pageSize = 12, searchQuery = null) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}/GetAll?PageIndex=${pageIndex}&&PageSize=${pageSize}&&searchQuery=${searchQuery}`,
            data: {},
            method: 'get',
            onSuccess: setContacts.type
        }))
    }
}

export const getContact = (id) => {
    return async dispatch => {
        dispatch(setDetailLoading(true))
        dispatch(apiCall({
            url: `${url}/GetContactById/${id}`,
            data: {},
            method: 'get',
            onSuccess: setContact.type
        }))
    }
}

export const deleteContact = (id) => {
    return async dispatch => {
        dispatch(apiCall({
            url: `${url}/delete/${id}`,
            data: {},
            method: 'delete',
            isSuccessToast: true,
            successMessage: 'Deleted Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsContactError.type,
            isSuccess: setIsContactSuccess.type
        }))
    }
}
export const addContact = (data) => {
    return async dispatch => {
        dispatch(apiCall({
            url: `${url}/AddContact`,
            data,
            method: 'post',
            isSuccessToast: true,
            successMessage: 'Send Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsContactError.type,
            isSuccess: setIsContactSuccess.type
        }))
    }
}

