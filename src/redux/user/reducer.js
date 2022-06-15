import {createAction} from '@reduxjs/toolkit'
const initialState = {
    list: [],
    object: {},
    isLoading: false,
    isEdit: false
}

export const setUsers = createAction("userReducer/setUsers")
export const setUser = createAction("userReducer/setUser")
export const setLoading = createAction("userReducer/setLoading")
export const editUser = createAction("userReducer/editUser")

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case setUsers.type:
            return {
                ...state,
                list: action.payload,
                isLoading: false,
                isEdit: false
            }
        case setUser.type:
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
        case editUser.type:
            return {
                ...state,
                object: action.payload,
                isEdit: true
            }
        default:
            return state
    }
}

export default userReducer