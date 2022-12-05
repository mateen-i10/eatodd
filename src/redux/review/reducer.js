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

export const setReviews = createAction("reviewReducer/setReviews")
export const setReview = createAction("reviewReducer/setReview")
export const setLoading = createAction("reviewReducer/setLoading")
export const editReview = createAction("reviewReducer/editReview")
export const setDetailLoading = createAction("reviewReducer/setDetailLoading")
export const setIsEdit = createAction("reviewReducer/setIsEdit")
export const setIsReviewError = createAction("reviewReducer/setIsReviewError")
export const setIsReviewSuccess = createAction("reviewReducer/setIsReviewSuccess")
export const setRequestCompleted = createAction("reviewReducer/setRequestCompleted")

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case setReviews.type:
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
        case setReview.type:
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
        case editReview.type:
            const {data} = action.payload
            return {
                ...state,
                object: {...data, rating: {value: data.rating, label: data.rating}},
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
        case setIsReviewError.type:
            return {
                ...state,
                isError: action.payload
            }
        case setIsReviewSuccess.type:
            return {
                ...state,
                isSuccess: action.payload
            }
        default:
            return state
    }
}

export default reviewReducer
