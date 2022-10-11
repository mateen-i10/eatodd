import {apiCall} from "../api/actions"
import {
    setLoading,
    setMembers
} from "./reducer"

const url = 'WinePackage'

// ** Get Customers Data
export const loadMembers = (pageIndex = 1, pageSize =  12, searchQuery = null) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}/GetPackageMembers?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}`,
            data: {},
            method: 'get',
            onSuccess: setMembers.type
        }))
    }
}
