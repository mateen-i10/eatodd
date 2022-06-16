import {setLoading, setCustomers} from "./reducer"
// ** Table Data & Columns
import { data } from '../../tempData/data'

// ** Get Customers Data
export const loadCustomers = () => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(setCustomers([...data]))
    }
}