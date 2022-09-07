import {setLoading, setReorderHistorys, setReorderHistory, editReorderHistory} from "./reducer"
// ** Table Data & Columns
import { data } from '../../tempData/data'

// ** Get ReorderHistorys Data
export const loadReorderHistory = () => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(setReorderHistorys([...data]))
    }
}
export const getReorderHistory = (id, isEdit) => {
    return async dispatch => {
        dispatch(setLoading(true))
        const found = data.find(d => d.id === id)
        if (isEdit) dispatch(editReorderHistory({...found}))
        else {
            dispatch(setReorderHistory({...found}))
        }
    }
}
export const deleteReorderHistory = (id) => {
    return async dispatch => {
        console.log('deleted', id, dispatch)
    }
}
