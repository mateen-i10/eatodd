import {createAction} from '@reduxjs/toolkit'
const initialState = {
    testData : [],
    mealname: {},
    isLoading: false,
    isEdit: false
}

export const getTestData = createAction("testReducer/setCrmEmails")
export const setCrmEmail = createAction("testReducer/setCrmEmail")
export const setLoading = createAction("testReducer/setLoading")
export const editCrmEmail = createAction("testReducer/editCrmEmail")
export const setMealName = createAction('testReducer/setMealName')

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case getTestData.type:
            return {
                ...state,
                isLoading: false,
                isEdit: false
            }
        case setCrmEmail.type:
            return {
                ...state,
                testData: action.payload,
                isLoading: true,
                isEdit: false
            }
        case setMealName.type:
            return {
                ...state,
                mealname: action.payload,
                isLoading: false,
                isEdit: false
            }
        case setLoading.type:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}

export default testReducer