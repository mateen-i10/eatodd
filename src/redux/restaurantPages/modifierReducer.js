import {createAction} from '@reduxjs/toolkit'
// ** Table Data & Columns
import {getModifierData} from '../../tempData/fakeData'

const modifierData = getModifierData()
const initialState = {
    list: [],
    object: {},
    isLoading: false,
    isEdit: false
}

export const setModifiers = createAction("modifier/setModifiers")
export const setModifier = createAction("modifier/setModifier")
export const setLoading = createAction("modifier/setLoading")
export const editModifier = createAction("modifier/editAddon")

const modifierReducer = (state = initialState, action) => {
    switch (action.type) {
        case setModifiers.type:
            return {
                ...state,
                list: action.payload,
                isLoading: false,
                isEdit: false
            }
        case setModifier.type:
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
        case editModifier.type:
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
export const loadModifier = () => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(setModifiers([...modifierData]))
    }
}
export const getModifier = (id, isEdit) => {
    return async dispatch => {
        dispatch(setLoading(true))
        const found = modifierData.find(d => d.id === id)
        if (isEdit) dispatch(editModifier({...found}))
        else {
            dispatch(setModifier({...found}))
        }
    }
}
export const deleteModifier = (id) => {
    return async dispatch => {
        console.log('deleted', id, dispatch)
    }
}

export default modifierReducer