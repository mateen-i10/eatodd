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

export const setCampaigns = createAction("campaignReducer/setCampaigns")
export const setCampaign = createAction("campaignReducer/setCampaign")
export const setLoading = createAction("campaignReducer/setLoading")
export const editCampaign = createAction("campaignReducer/editCampaign")
export const setDetailLoading = createAction("campaignReducer/setDetailLoading")
export const setIsEdit = createAction("campaignReducer/setIsEdit")
export const setIsCampaignError = createAction("campaignReducer/setIsCampaignError")
export const setIsCampaignSuccess = createAction("campaignReducer/setIsCampaignSuccess")
export const setRequestCompleted = createAction("campaignReducer/setRequestCompleted")

const campaignReducer = (state = initialState, action) => {
    switch (action.type) {
        case setCampaigns.type:
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
        case setCampaign.type:
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
        case editCampaign.type:
            const data = action.payload.data
            console.log('edit', data)
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
        case setIsCampaignError.type:
            return {
                ...state,
                isError: action.payload
            }
        case setIsCampaignSuccess.type:
            return {
                ...state,
                isSuccess: action.payload
            }
        default:
            return state
    }
}

export default campaignReducer
