import {createAction} from '@reduxjs/toolkit'
// ** Table Data & Columns
import {getInvItemData} from '../../../tempData/fakeData'

const invItemData = getInvItemData()
const initialState = {
    list: [],
    object: {},
    isLoading: false,
    isEdit: false
}

export const setInvItems = createAction("invItem/setInvItems")
export const setInvItem = createAction("invItem/setAddon")
export const setLoading = createAction("invItem/setLoading")
export const editInvItem = createAction("invItem/editInvItem")

const invItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case setInvItems.type:
            return {
                ...state,
                list: action.payload,
                isLoading: false,
                isEdit: false
            }
        case setInvItem.type:
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
        case editInvItem.type:
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
export const loadInvItem = () => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(setInvItems([...invItemData]))
    }
}
export const getInvItem = (id, isEdit) => {
    return async dispatch => {
        dispatch(setLoading(true))
        const found = invItemData.find(d => d.id === id)
        if (isEdit) dispatch(editInvItem({...found}))
        else {
            dispatch(setInvItem({...found}))
        }
    }
}
export const deleteInvItem = (id) => {
    return async dispatch => {
        console.log('deleted', id, dispatch)
    }
}

export default invItemReducer