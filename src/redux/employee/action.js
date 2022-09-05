import {apiCall} from "../api/actions"
import {
    editEmployee,
    setDetailLoading,
    setEmployee,
    setEmployees, setIsEdit,
    setIsEmployeeError, setIsEmployeeSuccess,
    setLoading,
    setRequestCompleted
} from "./reducer"

const url = 'employee'

export const loadEmployees = (pageIndex = 1, pageSize =  12, searchQuery = null) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}`,
            data: {},
            method: 'get',
            onSuccess: setEmployees.type
        }))
    }
}

export const getEmployee = (id, isEdit = false) => {
    console.log("dataGet", isEdit)
    return async dispatch => {
        if (isEdit) {
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: editEmployee.type
            }))
        } else {
            dispatch(setDetailLoading(true))
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: setEmployee.type
            }))
        }
    }
}

export const deleteEmployee = (id) => {
    return async dispatch => {
        dispatch(apiCall({
            url: `${url}/${id}`,
            data: {},
            method: 'delete',
            isSuccessToast: true,
            successMessage: 'Employee Deleted Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsEmployeeError.type,
            isSuccess: setIsEmployeeSuccess.type
        }))
    }
}

export const addEmployee = (data) => {
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'post',
            isSuccessToast: true,
            successMessage: 'Employee Added Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsEmployeeError.type,
            isSuccess: setIsEmployeeSuccess.type
        }))
    }
}

export const updateEmployee = (data) => {
    console.log('dataEmp', data)
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'put',
            isSuccessToast: true,
            successMessage: 'Employee Updated Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsEmployeeError.type,
            isSuccess: setIsEmployeeSuccess.type
        }))
        dispatch(setIsEdit(false))
    }
}

