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

export const setGeneralRecommendations = createAction("generalRecommendationReducer/setGeneralRecommendations")
export const setGeneralRecommendation = createAction("generalRecommendationReducer/setGeneralRecommendation")
export const setLoading = createAction("generalRecommendationReducer/setLoading")
export const editGeneralRecommendation = createAction("generalRecommendationReducer/editGeneralRecommendation")
export const setDetailLoading = createAction("generalRecommendationReducer/setDetailLoading")
export const setIsEdit = createAction("generalRecommendationReducer/setIsEdit")
export const setIsGeneralRecommendationError = createAction("generalRecommendationReducer/setIsGeneralRecommendationError")
export const setIsGeneralRecommendationSuccess = createAction("generalRecommendationReducer/setIsGeneralRecommendationSuccess")
export const setRequestCompleted = createAction("generalRecommendationReducer/setRequestCompleted")

const generalRecommendationReducer = (state = initialState, action) => {
    switch (action.type) {
        case setGeneralRecommendations.type:
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
        case setGeneralRecommendation.type:
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
        case editGeneralRecommendation.type:
            //const {data} = action.payload
            return {
                ...state,
                //object: {...data, unit: {value: data.unit, label: data.unit}},
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
                isEdit: action.payload.data
            }
        case setIsGeneralRecommendationError.type:
            return {
                ...state,
                isError: action.payload
            }
        case setIsGeneralRecommendationSuccess.type:
            return {
                ...state,
                isSuccess: action.payload
            }
        default:
            return state
    }
}

export default generalRecommendationReducer
