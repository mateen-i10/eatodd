import {createAction} from '@reduxjs/toolkit'
// ** Table Data & Columns
import {getInvCategory} from '../../../tempData/fakeData'

const invCategoryData = getInvCategory()
const initialState = {
    list: [],
    object: {},
    isLoading: false,
    isEdit: false
}

export const setInvCategorys = createAction("invCategory/setInvCategorys")
export const setInvCategory = createAction("invCategory/setInvCategory")
export const setLoading = createAction("invCategory/setLoading")
export const editInvCategory = createAction("invCategory/editInvCategory")

const invCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case setInvCategorys.type:
            return {
                ...state,
                list: action.payload,
                isLoading: false,
                isEdit: false
            }
        case setInvCategory.type:
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
        case editInvCategory.type:
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
export const loadInvCategory = () => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(setInvCategorys([...invCategoryData]))
    }
}
export const getInvCategorySt = (id, isEdit) => {
    return async dispatch => {
        dispatch(setLoading(true))
        const found = invCategoryData.find(d => d.id === id)
        if (isEdit) dispatch(editInvCategory({...found}))
        else {
            dispatch(setInvCategory({...found}))
        }
    }
}
export const deleteInvCategory = (id) => {
    return async dispatch => {
        console.log('deleted', id, dispatch)
    }
}

export default invCategoryReducer