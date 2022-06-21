import {createAction} from '@reduxjs/toolkit'
// ** Table Data & Columns
import {getAddonData} from '../../tempData/fakeData'

const addonData = getAddonData()
const initialState = {
    list: [],
    object: {},
    isLoading: false,
    isEdit: false
}

export const setAddons = createAction("addon/setAddons")
export const setAddon = createAction("addon/setAddon")
export const setLoading = createAction("addon/setLoading")
export const editAddon = createAction("addon/editAddon")

const addonReducer = (state = initialState, action) => {
    switch (action.type) {
        case setAddons.type:
            return {
                ...state,
                list: action.payload,
                isLoading: false,
                isEdit: false
            }
        case setAddon.type:
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
        case editAddon.type:
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
export const loadAddon = () => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(setAddons([...addonData]))
    }
}
export const getAddon = (id, isEdit) => {
    return async dispatch => {
        dispatch(setLoading(true))
        const found = addonData.find(d => d.id === id)
        if (isEdit) dispatch(editAddon({...found}))
        else {
            dispatch(setAddon({...found}))
        }
    }
}
export const deleteAddon = (id) => {
    return async dispatch => {
        console.log('deleted', id, dispatch)
    }
}

export default addonReducer