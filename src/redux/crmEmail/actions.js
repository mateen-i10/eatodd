import {setLoading, setCrmEmails, editCrmEmail} from "./reducer"
// ** Table Data & Columns
import { data } from '../../tempData/data'

// ** Get CrmEmails Data
export const loadCrmEmails = () => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(setCrmEmails([...data]))
    }
}

export const getCrmEmails = (id, isEdit) => {
    return async dispatch => {
        dispatch(setLoading(true))
        const found = data.find(d => d.id === id)
        if (isEdit) dispatch(editCrmEmail({...found}))
        else {
            dispatch(setCrmEmails({...found}))
        }
    }
}