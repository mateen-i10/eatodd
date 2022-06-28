import {createAction} from '@reduxjs/toolkit'
// ** Table Data & Columns
import {getInvDistributorData} from '../../../tempData/fakeData'

const invDistributorData = getInvDistributorData()
const initialState = {
    list: [],
    object: {},
    isLoading: false,
    isEdit: false
}

export const setInvDistributors = createAction("invDistributor/setInvDistributors")
export const setInvDistributor = createAction("invDistributor/setInvDistributor")
export const setLoading = createAction("invDistributor/setLoading")
export const editInvDistributor = createAction("invDistributor/editInvDistributor")

const invDistributorReducer = (state = initialState, action) => {
    switch (action.type) {
        case setInvDistributors.type:
            return {
                ...state,
                list: action.payload,
                isLoading: false,
                isEdit: false
            }
        case setInvDistributor.type:
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
        case editInvDistributor.type:
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
export const loadInvDistributor = () => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(setInvDistributors([...invDistributorData]))
    }
}
export const getInvDistributor = (id, isEdit) => {
    return async dispatch => {
        dispatch(setLoading(true))
        const found = invDistributorData.find(d => d.id === id)
        if (isEdit) dispatch(editInvDistributor({...found}))
        else {
            dispatch(setInvDistributor({...found}))
        }
    }
}
export const deleteInvDistributor = (id) => {
    return async dispatch => {
        console.log('deleted', id, dispatch)
    }
}

export default invDistributorReducer
