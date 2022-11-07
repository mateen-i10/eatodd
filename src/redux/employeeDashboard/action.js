import {apiCall} from "../api/actions"
import {setDetailLoading, setEmployeesDashboard} from "./reducer"

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

