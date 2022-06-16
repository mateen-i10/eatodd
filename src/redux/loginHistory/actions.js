import {setLoading, setLoginHistory} from "./reducer"
// ** Table Data & Columns
import { data } from '../../tempData/data'

// ** Get LoginHistory Data
export const loadLoginHistory = () => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(setLoginHistory([...data]))
    }
}