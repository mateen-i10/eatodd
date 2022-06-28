import {createAction} from '@reduxjs/toolkit'
// ** Table Data & Columns
import {getInvRecipeData} from '../../../tempData/fakeData'

const invRecipeData = getInvRecipeData()
const initialState = {
    list: [],
    object: {},
    isLoading: false,
    isEdit: false
}

export const setInvRecipes = createAction("invRecipe/setInvRecipes")
export const setInvRecipe = createAction("invRecipe/setInvRecipe")
export const setLoading = createAction("invRecipe/setLoading")
export const editInvRecipe = createAction("invRecipe/editInvRecipe")

const invRecipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case setInvRecipes.type:
            return {
                ...state,
                list: action.payload,
                isLoading: false,
                isEdit: false
            }
        case setInvRecipe.type:
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
        case editInvRecipe.type:
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
export const loadInvRecipe = () => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(setInvRecipes([...invRecipeData]))
    }
}
export const getInvRecipe = (id, isEdit) => {
    return async dispatch => {
        dispatch(setLoading(true))
        const found = invRecipeData.find(d => d.id === id)
        if (isEdit) dispatch(editInvRecipe({...found}))
        else {
            dispatch(setInvRecipe({...found}))
        }
    }
}
export const deleteInvRecipe = (id) => {
    return async dispatch => {
        console.log('deleted', id, dispatch)
    }
}

export default invRecipeReducer