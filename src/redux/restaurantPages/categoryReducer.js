import {createAction} from '@reduxjs/toolkit'
import {getCategoryData} from "../../tempData/fakeData"
// ** Table Data & Columns

const categoryData = getCategoryData()
const initialState = {
    list: [],
    object: {},
    isLoading: false,
    isEdit: false
}

export const setCategorys = createAction("category/setCategorys")
export const setCategory = createAction("category/setCategory")
export const setLoading = createAction("category/setLoading")
export const editCategory = createAction("category/editAddon")

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case setCategorys.type:
            return {
                ...state,
                list: action.payload,
                isLoading: false,
                isEdit: false
            }
        case setCategory.type:
            return {
                ...state,
                object: action.payload,
                isLoading: false
            }
        case setLoading.type:
            return {
                ...state,
                isLoading: action.payload
            }
        case editCategory.type:
            return {
                ...state,
                object: action.payload,
                isEdit: true
            }
        default:
            return state
    }
}

// ** Get Addon Data
export const loadCategory = () => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(setCategorys([...categoryData]))
    }
}
export const getCategory = (id, isEdit) => {
    return async dispatch => {
        dispatch(setLoading(true))
        const found = categoryData.find(d => d.id === id)
        if (isEdit) dispatch(editCategory({...found}))
        else {
            dispatch(setCategory({...found}))
        }
    }
}
export const deleteCategory = (id) => {
    return async dispatch => {
        console.log('deleted', id, dispatch)
    }
}

export default categoryReducer