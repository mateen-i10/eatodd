import {setLoading, setUsers, setUser, editUser} from "./reducer"
// ** Table Data & Columns
import { data } from '../../tempData/data'

// ** Get Users Data
export const loadUsers = () => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(setUsers([...data]))
    }
}
export const getUser = (id, isEdit) => {
    return async dispatch => {
        dispatch(setLoading(true))
        const found = data.find(d => d.id === id)
        if (isEdit) dispatch(editUser({...found}))
        else {
            dispatch(setUser({...found}))
        }
    }
}
export const deleteUser = (id) => {
    return async dispatch => {
        console.log('deleted', id, dispatch)
    }
}
