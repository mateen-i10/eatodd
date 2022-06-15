import {setLoading, setCrmSmss, setCrmSms, editCrmSms} from "./reducer"
// ** Table Data & Columns
import { data } from '../../tempData/data'

// ** Get CrmSmss Data
export const loadCrmSms = () => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(setCrmSmss([...data]))
    }
}
export const getCrmSms = (id, isEdit) => {
    return async dispatch => {
        dispatch(setLoading(true))
        const found = data.find(d => d.id === id)
        if (isEdit) dispatch(editCrmSms({...found}))
        else {
            dispatch(setCrmSms({...found}))
        }
    }
}
export const deleteCrmSms = (id) => {
    return async dispatch => {
        console.log('deleted', id, dispatch)
    }
}
