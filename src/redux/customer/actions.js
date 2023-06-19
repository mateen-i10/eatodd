import {apiCall} from "../api/actions"
import {
    setLoading,
    setCustomers,
    editCustomer,
    setCustomer,
    setDetailLoading,
    setRequestCompleted,
    setIsCustomerError, setIsCustomerSuccess, setIsEdit, setCustomerAddress, editCustomerAddress, setCustomersReward
} from "./reducer"
import httpService, {baseURL} from "../../utility/http"
import {toast} from "react-toastify"

const url = 'customer'

// ** Get Customers Data
export const loadCustomers = (pageIndex = 1, pageSize =  12, searchQuery = null, RefId = 0) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}/getAllCustomer?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}&&RefId=${RefId}`,
            data: {},
            method: 'get',
            onSuccess: setCustomers.type
        }))
    }
}

export const getCustomer = (id, isEdit = false) => {
    console.log("dataGet", isEdit)
    return async dispatch => {
        if (isEdit) {
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: editCustomer.type
            }))
        } else {
            dispatch(setDetailLoading(true))
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: setCustomer.type
            }))
        }
    }
}

export const getCustomersFromSquare = () => {

    return async () => {
        return httpService._get(`${baseURL}Webhook`)
            .then(response => {
            // success case
            if (response.status === 200) {
                toast.success('Get Customers from Square Successfully')
                /*window.location.reload(true)*/
                setTimeout(() => {
                    window.location.reload(true)
                }, 5000)
            } else {
                //general Error Action
                toast.error(response.data.message)
            }
        }).catch(error => {
            toast.error(error.message)
        })
    }
}

export const deleteCustomer = (id) => {
    return async dispatch => {
        dispatch(apiCall({
            url: `${url}/${id}`,
            data: {},
            method: 'delete',
            isSuccessToast: true,
            successMessage: 'Customer Deleted Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsCustomerError.type,
            isSuccess: setIsCustomerSuccess.type
        }))
    }
}

export const addCustomer = (data) => {
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'post',
            isSuccessToast: true,
            successMessage: 'Customer Added Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsCustomerError.type,
            isSuccess: setIsCustomerSuccess.type
        }))
    }
}

export const updateCustomer = (data) => {
    console.log('dataEmp', data)
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'put',
            isSuccessToast: true,
            successMessage: 'Customer Updated Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsCustomerError.type,
            isSuccess: setIsCustomerSuccess.type
        }))
        dispatch(setIsEdit(false))
    }
}

export const getCustomerAddress = (id, isEdit = false) => {
    console.log("dataGet", isEdit)
    return async dispatch => {
        if (isEdit) {
            dispatch(apiCall({
                url: `${url}/GetAddressByCustomer/${id}`,
                data: {},
                method: 'get',
                onSuccess: editCustomerAddress.type
            }))
        } else {
            dispatch(setDetailLoading(true))
            dispatch(apiCall({
                url: `${url}/GetAddressByCustomer/${id}`,
                data: {},
                method: 'get',
                onSuccess: setCustomerAddress.type
            }))
        }
    }
}

export const updateCustomerAddress = (data) => {
    console.log('dataEmp', data)
    return async dispatch => {
        dispatch(apiCall({
            url: `${url}/updateAddress`,
            data,
            method: 'put',
            isSuccessToast: true,
            successMessage: 'Customer Address Updated Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsCustomerError.type,
            isSuccess: setIsCustomerSuccess.type
        }))
        dispatch(setIsEdit(false))
    }
}

export const getCustomersReward = (data) => {
    console.log('rewardActionData', data)
    return async dispatch => {
        //dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}/GetCustomerReward`,
            data,
            method: 'get',
            onSuccess: setCustomersReward.type
        }))
    }
}
