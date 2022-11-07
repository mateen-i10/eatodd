import {createAction} from '@reduxjs/toolkit'

const initialState = {
    list: [],
    object: {},
    miscData: {},
    isLoading: false,
    isDetailLoading: false
}

export const setEmployeeOrders = createAction("employeeOrderReducer/setEmployeeOrders")
export const setEmployeeOrdersStats = createAction("employeeOrderReducer/setEmployeeOrdersStats")
export const setLoading = createAction("employeeOrderReducer/setLoading")
export const setDetailLoading = createAction("employeeOrderReducer/setDetailLoading")

const employeeOrderReducer = (state = initialState, action) => {
    console.log('state', state)
    switch (action.type) {
        case setEmployeeOrders.type:
            return {
                ...state,
                list: action.payload.data,
                miscData: action.payload.miscData,
                isLoading: false,
                isDetailLoading: false
            }
        case setEmployeeOrdersStats.type:
            return {
                ...state,
                object: action.payload.data,
                miscData: action.payload.miscData,
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

export default employeeOrderReducer
