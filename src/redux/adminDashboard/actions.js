import {apiCall} from "../api/actions"
import {
    setLoading,
    setAdminDash, setAdmin
} from "./reducer"

const url = 'AdminDashboard'

// ** Get Customers Data
export const loadAdminDashBoardOrderByStatData = (pageIndex = 1, pageSize =  12, searchQuery = null, RefId = 0) => {
    console.log("called")
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}/OrdersByStatus?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}&&RefId=${RefId}&&Status=${2}`,
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