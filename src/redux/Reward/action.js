import {apiCall} from "../api/actions"
import {
    setIsEdit,
    setIsRewardError, setIsRewardSuccess,
    setLoading,
    setRequestCompleted,
    setRewards
} from "./reducer"
const url = 'RewardConfiguration'

export const loadRewards = (pageIndex = 1, pageSize =  10, searchQuery = null, refId = 0) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}&&refId=${refId}`,
            data: {},
            method: 'get',
            onSuccess: setRewards.type
        }))
    }
}

export const updateReward = (data) => {
    console.log('dataReward', data)
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'put',
            isSuccessToast: true,
            successMessage: 'Updated Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsRewardError.type,
            isSuccess: setIsRewardSuccess.type
        }))
        dispatch(setIsEdit(false))
    }
}