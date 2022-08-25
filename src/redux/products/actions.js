import {setLoading, setProducts, setProduct, editProduct} from "./reducer"
// ** Table Data & Columns
import { data } from '../../tempData/data'

// ** Get Product Data
export const loadProducts = () => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(setProducts([...data]))
    }
}
export const getProduct = (id, isEdit) => {
    return async dispatch => {
        dispatch(setLoading(true))
        const found = data.find(d => d.id === id)
        if (isEdit) dispatch(editProduct({...found}))
        else {
            dispatch(setProduct({...found}))
        }
    }
}
export const deleteProduct = (id) => {
    return async dispatch => {
        console.log('deleted', id, dispatch)
    }
}

export const addProduct = (newProduct) => {
    console.log("add Product", newProduct)
}

export const updateProduct = (newProduct) => {
    console.log("update Product", newProduct)
}
