import {setLoading, setRestaurants, setRestaurant, editRestaurant} from "./reducer"
// ** Table Data & Columns
import { data } from '../../tempData/data'

// ** Get Restaurants Data
export const loadRestaurants = () => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(setRestaurants([...data]))
    }
}
export const getRestaurant = (id, isEdit) => {
    return async dispatch => {
        dispatch(setLoading(true))
        const found = data.find(d => d.id === id)
        if (isEdit) dispatch(editRestaurant({...found}))
        else {
            dispatch(setRestaurant({...found}))
        }
    }
}
export const deleteRestaurant = (id) => {
    return async dispatch => {
        console.log('deleted', id, dispatch)
    }
}
