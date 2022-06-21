import {createAction} from '@reduxjs/toolkit'
// ** Table Data & Columns
import {getPromotionData} from '../../tempData/fakeData'

const promotionData = getPromotionData()
const initialState = {
    list: [],
    object: {},
    isLoading: false,
    isEdit: false
}

export const setPromotions = createAction("promotion/setPromotions")
export const setPromotion = createAction("promotion/setPromotion")
export const setLoading = createAction("promotion/setLoading")
export const editPromotion = createAction("promotion/editPromotion")

const promotionReducer = (state = initialState, action) => {
    switch (action.type) {
        case setPromotions.type:
            return {
                ...state,
                list: action.payload,
                isLoading: false,
                isEdit: false
            }
        case setPromotion.type:
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
        case editPromotion.type:
            return {
                ...state,
                object: action.payload,
                isEdit: true
            }
        default:
            return state
    }
}

// ** Get Addon Data
export const loadPromotion = () => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(setPromotions([...promotionData]))
    }
}
export const getPromotion = (id, isEdit) => {
    return async dispatch => {
        dispatch(setLoading(true))
        const found = promotionData.find(d => d.id === id)
        if (isEdit) dispatch(editPromotion({...found}))
        else {
            dispatch(setPromotion({...found}))
        }
    }
}
export const deletePromotion = (id) => {
    return async dispatch => {
        console.log('deleted', id, dispatch)
    }
}

export default promotionReducer