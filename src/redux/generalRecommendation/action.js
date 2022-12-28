import {apiCall} from "../api/actions"
import {setIsGeneralRecommendationError, setIsGeneralRecommendationSuccess, setRequestCompleted} from "./reducer"
const url = 'GeneralRecommendation'
export const addGeneralRecommendationProduct = (data) => {
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'post',
            isSuccessToast: true,
            successMessage: 'General Recommendation Added Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsGeneralRecommendationError.type,
            isSuccess: setIsGeneralRecommendationSuccess.type
        }))
    }
}