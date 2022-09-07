import {createAction} from '@reduxjs/toolkit'

const initialState = {
    list: [],
    object: {},
    miscData: {},
    isRequestCompleted: false,
    isLoading: false,
    isDetailLoading: false,
    isEdit: false,
    isError: false,
    isSuccess: false
}

export const setEmployees = createAction("employeeReducer/setEmployees")
export const setEmployee = createAction("employeeReducer/setEmployee")
export const setLoading = createAction("employeeReducer/setLoading")
export const editEmployee = createAction("employeeReducer/editEmployee")
export const setDetailLoading = createAction("employeeReducer/setDetailLoading")
export const setIsEdit = createAction("employeeReducer/setIsEdit")
export const setIsEmployeeError = createAction("employeeReducer/setIsEmployeeError")
export const setIsEmployeeSuccess = createAction("employeeReducer/setIsEmployeeSuccess")
export const setRequestCompleted = createAction("employeeReducer/setRequestCompleted")

const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case setEmployees.type:
            return {
                ...state,
                list: action.payload.data,
                miscData: action.payload.miscData,
                isLoading: false,
                isDetailLoading: false,
                isEdit: false,
                isError: false,
                isSuccess: false
            }
        case setEmployee.type:
            return {
                ...state,
                object: action.payload.data,
                isEdit: false,
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
        case editEmployee.type:
            const id = action.payload.data.id
            console.log('action', action.payload.data)
            return {
                ...state,
                object: {...action.payload.data,
                    ...action.payload.data.applicationUser,
                    applicationUserId : action.payload.data.applicationUser.id,
                    id,
                    permission: action.payload.data.applicationUser.permission.split(',').map(p => {
                        return { label: p, value: p}
                    }),
                    restaurants: action.payload.data.restaurants?.map(i => {
                            return {label: i.restaurant.name, value: i.restaurant.id}
                        }
                    )
                },
                isEdit: true
            }
        case setRequestCompleted.type:
            return {
                ...state,
                isRequestCompleted: action.payload
            }
        case setIsEdit.type:
            return {
                ...state,
                isEdit: action.payload
            }
        case setIsEmployeeError.type:
            return {
                ...state,
                isError: action.payload
            }
        case setIsEmployeeSuccess.type:
            return {
                ...state,
                isSuccess: action.payload
            }
        default:
            return state
    }
}

export default employeeReducer
