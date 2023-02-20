import {apiCall} from "../api/actions"
import {setDetailLoading, setEmployeesDashboard, setRestaurantStatus} from "./reducer"

const url = 'employeeDashboard/GetTotal'

export const getEmployeesDashboard = () => {
    return async dispatch => {
        dispatch(setDetailLoading(true))
        dispatch(apiCall({
            url,
            data: {},
            method: 'Get',
            onSuccess: setEmployeesDashboard.type
        }))
    }
}

export const getRestStatus = (id) => {
    return async dispatch => {
        dispatch(setDetailLoading(true))
        dispatch(apiCall({
            url: `EmployeeDashboard/GetDashboardStatistics/${id}`,
            data: {},
            method: 'Get',
            onSuccess: setRestaurantStatus.type
        }))
    }
}

/*export const getEmployeesDashboard = () => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}`,
            data: {},
            method: 'get',
            onSuccess: setEmployeesDashboard.type
        }))
    }
}*/

