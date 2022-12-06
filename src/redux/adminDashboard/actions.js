import {apiCall} from "../api/actions"
import {
    setLoading,
    setAdminDash, setAdmin, restGetAll, setRest, setRestt
} from "./reducer"

const url = 'AdminDashboard'

// ** Get Customers Data
export const loadAdminDashBoardOrderByStatData = (pageIndex = 1, pageSize =  12, searchQuery = null, RefId = 0, Status) => {
    console.log("called")
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}/OrdersByStatus?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}&&RefId=${RefId}&&Status=${Status}`,
            data: {},
            method: 'get',
            onSuccess: setAdminDash.type
        }))
    }
}

export const adminDashboardRestData = (RestaurantId = 1) => {
    console.log("called")
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}/AdminDashboard/${RestaurantId}`,
            data: {},
            method: 'get',
            onSuccess: setAdmin.type
        }))
    }
}

export const adminDashboardGetAll = (RestaurantId) => {
    console.log("get all")
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}/GetTotal/${RestaurantId}`,
            data: {},
            method: 'get',
            onSuccess: restGetAll.type
        }))
    }
}

export const test = (restId) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}/GetTotal/${restId}`,
            data: {},
            method: 'get',
            onSuccess: setRest.type
        }))
    }
}

export const tesst = (restId) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}/AdminDashboard/${restId}`,
            data: {},
            method: 'get',
            onSuccess: setRestt.type
        }))
    }
}