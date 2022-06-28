import {createAction} from '@reduxjs/toolkit'
// ** Table Data & Columns
import {getMenuItem} from '../../tempData/fakeData'

const menuItemData = getMenuItem()
const initialState = {
    list: [],
    object: {},
    isLoading: false,
    isEdit: false
}

export const setMenuItems = createAction("menuItem/setMenuItems")
export const setMenuItem = createAction("menuItem/setMenuItem")
export const setLoading = createAction("menuItem/setLoading")
export const editMenuItem = createAction("menuItem/editMenuItem")

const menuItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case setMenuItems.type:
            return {
                ...state,
                list: action.payload,
                isLoading: false,
                isEdit: false
            }
        case setMenuItem.type:
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
        case editMenuItem.type:
            return {
                ...state,
                object: action.payload,
                isEdit: true
            }
        default:
            return state
    }
}

// ** Get MenuItem Data
export const loadMenuItem = () => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(setMenuItems([...menuItemData]))
    }
}
export const getMenuItemSt = (id, isEdit) => {
    return async dispatch => {
        dispatch(setLoading(true))
        const found = menuItemData.find(d => d.id === id)
        if (isEdit) dispatch(editMenuItem({...found}))
        else {
            dispatch(setMenuItem({...found}))
        }
    }
}
export const deleteMenuItem = (id) => {
    return async dispatch => {
        console.log('deleted', id, dispatch)
    }
}

export default menuItemReducer