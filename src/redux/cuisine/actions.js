import {setLoading, setCuisines, setCuisine, editCuisine} from "./reducer"
// ** Table Data & Columns
import { data } from '../../tempData/data'

// ** Get Cuisine Data
export const loadCuisines = () => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(setCuisines([...data]))
    }
}
export const getCuisine = (id, isEdit) => {
    return async dispatch => {
        dispatch(setLoading(true))
        const found = data.find(d => d.id === id)
        if (isEdit) dispatch(editCuisine({...found}))
        else {
            dispatch(setCuisine({...found}))
        }
    }
}
export const deleteCuisine = (id) => {
    return async dispatch => {
        console.log('deleted', id, dispatch)
    }
}
