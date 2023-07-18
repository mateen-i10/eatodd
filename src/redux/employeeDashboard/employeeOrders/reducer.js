import {createAction} from '@reduxjs/toolkit'

const initialState = {
    list: [],
    statusObject: {},
    object: {},
    miscData: {},
    isLoading: false,
    isDetailLoading: false,
    isRequestCompleted: false
}

export const setEmployeeOrders = createAction("employeeOrderReducer/setEmployeeOrders")
export const setEmployeeOrdersStats = createAction("employeeOrderReducer/setEmployeeOrdersStats")
export const setLoading = createAction("employeeOrderReducer/setLoading")
export const setDetailLoading = createAction("employeeOrderReducer/setDetailLoading")
export const setOrdersStatus = createAction("employeeOrderReducer/setOrdersStatus")
export const setRequestCompleted = createAction("employeeOrderReducer/setRequestCompleted")

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
        case setOrdersStatus.type:
            return {
                ...state,
                statusObject: action.payload.data,
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
        case setRequestCompleted.type:
            return {
                ...state,
                isRequestCompleted: action.payload
            }
        default:
            return state
    }
}

export default employeeOrderReducer
