import {apiCall} from "../../api/actions"
import {setEmployeeOrders, setEmployeeOrdersStats, setLoading, setOrdersStatus} from "./reducer"

const url = 'employeeDashboard'

export const getEmployeesOrders = (pageIndex = 1, pageSize =  12, searchQuery = null, RefId = 0, status) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}/GetOrderStatistic?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}&&RefId=${RefId}&&Status=${status}`,
            data: {},
            method: 'get',
            onSuccess: setEmployeeOrders.type
        }))
    }
}

export const getEmployeeOrdersStats = (RefId = 0) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}/GetDashboardStatistics/${RefId}`,
            data: {},
            method: 'get',
            onSuccess: setEmployeeOrdersStats.type
        }))
    }
}

export const onChangeOrderStatus = (Id = 0, status) => {
    console.log('status', Id, status)
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `Order/StatusUpdate`,
            data: {Id, status},
            method: 'put',
            isSuccessToast: true,
            successMessage: 'Status Changed Successfully',
            onSuccess: setOrdersStatus.type
        }))
    }
}