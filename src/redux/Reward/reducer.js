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

export const setRewards = createAction("rewardReducer/setRewards")
export const setReward = createAction("rewardReducer/setReward")
export const setLoading = createAction("rewardReducer/setLoading")
export const editReward = createAction("rewardReducer/editReward")
export const setDetailLoading = createAction("rewardReducer/setDetailLoading")
export const setIsEdit = createAction("rewardReducer/setIsEdit")
export const setIsRewardError = createAction("rewardReducer/setIsRewardError")
export const setIsRewardSuccess = createAction("rewardReducer/setIsRewardSuccess")
export const setRequestCompleted = createAction("rewardReducer/setRequestCompleted")

const rewardReducer = (state = initialState, action) => {
    switch (action.type) {
        case setRewards.type:
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
        case setReward.type:
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
        case editReward.type:
            const data = action.payload.data
            console.log('editData', data)
            return {
                ...state,
                object: {...data},
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
                isEdit: action.payload.data
            }
        case setIsRewardError.type:
            return {
                ...state,
                isError: action.payload
            }
        case setIsRewardSuccess.type:
            return {
                ...state,
                isSuccess: action.payload
            }
        default:
            return state
    }
}

export default rewardReducer
