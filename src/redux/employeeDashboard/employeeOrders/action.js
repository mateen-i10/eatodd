import {apiCall} from "../../api/actions"
import {setEmployeeOrders, setLoading} from "./reducer"

const url = 'employeeDashboard/getPendingOrders'

export const getEmployeesOrders = (pageIndex = 1, pageSize =  12, searchQuery = null) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}`,
            data: {},
            method: 'get',
            onSuccess: setEmployeeOrders.type
        }))
    }
}

