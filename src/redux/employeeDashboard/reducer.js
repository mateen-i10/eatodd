import {createAction} from '@reduxjs/toolkit'

const initialState = {
    object: {},
    isLoading: false,
    isDetailLoading: false
}

export const setEmployeesDashboard = createAction("employeeDashboardReducer/setEmployeeDashboard")
export const setLoading = createAction("employeeDashboardReducer/setLoading")
export const setDetailLoading = createAction("employeeDashboardReducer/setDetailLoading")

const employeeDashboardReducer = (state = initialState, action) => {
    console.log('state', state)
    switch (action.type) {
        case setEmployeesDashboard.type:
            return {
                ...state,
                object: action.payload.data,
                isLoading: false,
                isDetailLoading: false
            }
        case setLoading.type:
            return {
                ...state,
                isLoading: action.payload
            }
        case setDetailLoading.type:
            return {
                ...state,
                isDetailLoading: action.payload
            }
        default:
            return state
    }
}

export default employeeDashboardReducer
