import {setLoading, setGenralProducts, setGenralProduct, editGenralProduct} from "./reducer"
// ** Table Data & Columns
import { data } from '../../tempData/data'

// ** Get GenralProduct Data
export const loadGenralProducts = () => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(setGenralProducts([...data]))
    }
}
export const getGenralProduct = (id, isEdit) => {
    return async dispatch => {
        dispatch(setLoading(true))
        const found = data.find(d => d.id === id)
        if (isEdit) dispatch(editGenralProduct({...found}))
        else {
            dispatch(setGenralProduct({...found}))
        }
    }
}
export const deleteGenralProduct = (id) => {
    return async dispatch => {
        console.log('deleted', id, dispatch)
    }
}

export const addGenralProduct = (newGenralProduct) => {
    console.log("add GenralProduct", newGenralProduct)
}

export const updateGenralProduct = (newGenralProduct) => {
    console.log("update GenralProduct", newGenralProduct)
}
