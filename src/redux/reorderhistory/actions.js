import {getMeal, setLoading, setReorderHistorys} from "./reducer"
// ** Table Data & Columns
import {apiCall} from "../api/actions"

const url = 'Customer'

// ** Get ReorderHistorys Data
export const loadReorderHistory = (pageIndex = 1, pageSize = 12, searchQuery = null, refId = 0) => {
    return async dispatch => {
        if (refId && refId !== 0) {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}/GetOrderByCustomerId?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}&&refId=${refId}`,
            data: {},
            method: 'get',
            onSuccess: setReorderHistorys.type
        }))
    }
    }
}

export const loadMeals = (pageIndex = 1, pageSize = 12, searchQuery = null, refId = 0) => {
    return async dispatch => {
        if (refId && refId !== 0) {
            dispatch(setLoading(true))
            dispatch(apiCall({
                url: `${url}/GetMealById?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}&&refId=${refId}`,
                data: {},
                method: 'get',
                onSuccess: getMeal.type
            }))
        }
    }
}