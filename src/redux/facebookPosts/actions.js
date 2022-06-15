import {setLoading, setFPs, setFP, editFP} from "./reducer"
// ** Table Data & Columns
import { data } from '../../tempData/data'

// ** Get FPs Data
export const loadFPs = () => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(setFPs([...data]))
    }
}
export const getFP = (id, isEdit) => {
    return async dispatch => {
        dispatch(setLoading(true))
        const found = data.find(d => d.id === id)
        if (isEdit) dispatch(editFP({...found}))
        else {
            dispatch(setFP({...found}))
        }
    }
}
export const deleteFP = (id) => {
    return async dispatch => {
        console.log('deleted', id, dispatch)
    }
}
