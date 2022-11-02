import {createAction} from '@reduxjs/toolkit'

const initialState = {
    list: [],
    object:{},
    isLoading: false
}

export const setAdminDash = createAction("AdminDashReducer/setAdminDash")
export const setLoading = createAction("AdminDashReducer/setLoading")
export const setAdmin = createAction("AdminDashReducer/setAdmin")

const AdminDashReducer = (state = initialState, action) => {
    switch (action.type) {
        case setAdminDash.type:
            return {
                ...state,
                list: action.payload.data,
                isLoading: false
            }
        case setAdmin.type:
            return {
                ...state,
                object: action.payload.data,
                isLoading: false
            }
        case setLoading.type:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}

export default AdminDashReducer
