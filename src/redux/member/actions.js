import {setLoading, setCustomers, setCustomer, editCustomer} from "./reducer"
// ** Table Data & Columns
import { data } from '../../tempData/data'

// ** Get Customers Data
export const loadCustomers = () => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(setCustomers([...data]))
    }
}
export const getCustomer = (id, isEdit) => {
    return async dispatch => {
        dispatch(setLoading(true))
        const found = data.find(d => d.id === id)
        if (isEdit) dispatch(editCustomer({...found}))
        else {
            dispatch(setCustomer({...found}))
        }
    }
}
export const deleteCustomer = (id) => {
    return async dispatch => {
        console.log('deleted', id, dispatch)
    }
}
