import {apiCall} from "../api/actions"
import {setEmployeesDashboard, setLoading} from "./reducer"

const url = 'employeeDashboard/getPendingOrders'

/*export const getEmployeesDashboard = () => {
    return async dispatch => {
        dispatch(setDetailLoading(true))
        dispatch(apiCall({
            url,
            data: {},
            method: 'Get',
            onSuccess: setEmployeeDashboard.type
        }))
    }
}*/

export const getEmployeesDashboard = (pageIndex = 1, pageSize =  12, searchQuery = null) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}`,
            data: {},
            method: 'get',
            onSuccess: setEmployeesDashboard.type
        }))
    }
}

