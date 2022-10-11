import {apiCall} from "../../api/actions"
import {
    setLoading,
    setCateringCustomers
} from "./reducer"

const url = 'CateringOrder'

// ** Get Customers Data
export const loadCateringCustomerss = (pageIndex = 1, pageSize =  12, searchQuery = null) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}/GetCateringCustomers?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}`,
            data: {},
            method: 'get',
            onSuccess: setCateringCustomers.type
        }))
    }
}
