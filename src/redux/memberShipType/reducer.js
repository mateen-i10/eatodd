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

export const setMemberShipTypes = createAction("memberShipTypeReducer/setMemberShipTypes")
export const setMemberShipType = createAction("memberShipTypeReducer/setMemberShipType")
export const setLoading = createAction("memberShipTypeReducer/setLoading")
export const setDetailLoading = createAction("memberShipTypeReducer/setDetailLoading")
export const setIsEdit = createAction("memberShipTypeReducer/setIsEdit")
export const setIsMemberShipTypeError = createAction("memberShipTypeReducer/setIsMemberShipTypeError")
export const setIsMemberShipTypeSuccess = createAction("memberShipTypeReducer/setIsMemberShipTypeSuccess")
export const editMemberShipType = createAction("memberShipTypeReducer/editMemberShipType")
export const setRequestCompleted = createAction("memberShipTypeReducer/setRequestCompleted")


const memberShipTypeReducer = (state = initialState, action) => {
    switch (action.type) {
        case setMemberShipTypes.type:
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
        case setMemberShipType.type:
            const data = action.payload.data
            return {
                ...state,
                object: {...data},
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
        case editMemberShipType.type:
            //const data = action.payload.data
            return {
                ...state,
                object: action.payload.data,
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
        case setIsMemberShipTypeError.type:
            return {
                ...state,
                isError: action.payload
            }
        case setIsMemberShipTypeSuccess.type:
            return {
                ...state,
                isSuccess: action.payload
            }
        default:
            return state
    }
}

export default memberShipTypeReducer
