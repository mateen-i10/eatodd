import {setLoading, setCrmEmails} from "./reducer"
// ** Table Data & Columns
import { data } from '../../tempData/data'

// ** Get CrmEmails Data
export const loadCrmEmails = () => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(setCrmEmails([...data]))
    }
}