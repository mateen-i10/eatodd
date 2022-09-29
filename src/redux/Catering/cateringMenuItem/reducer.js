import {createAction} from '@reduxjs/toolkit'
import {SectionType} from "../../../utility/enums/Types"

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

export const setCateringMenuItems = createAction("cateringMenuItemReducer/setCateringMenuItems")
export const setCateringMenuItem = createAction("cateringMenuItemReducer/setCateringMenuItem")
export const setLoading = createAction("cateringMenuItemReducer/setLoading")
export const editCateringMenuItem = createAction("cateringMenuItemReducer/editCateringMenuItem")
export const setDetailLoading = createAction("cateringMenuItemReducer/setDetailLoading")
export const setIsEdit = createAction("cateringMenuItemReducer/setIsEdit")
export const setIsCateringMenuItemError = createAction("cateringMenuItemReducer/setIsCateringMenuItemError")
export const setIsCateringMenuItemSuccess = createAction("cateringMenuItemReducer/setIsCateringMenuItemSuccess")
export const setRequestCompleted = createAction("cateringMenuItemReducer/setRequestCompleted")

const cateringMenuItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case setCateringMenuItems.type:
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
        case setCateringMenuItem.type:
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
        case editCateringMenuItem.type:
            const data = action.payload.data
            return {
                ...state,
                object: {...data,
                    cateringMenuId: data.cateringMenu ? {label: data?.cateringMenu?.name, value: data?.cateringMenu?.id} : null,
                    modifiers : data.cateringMenuItemSections ? data.cateringMenuItemSections.map(c => {
                        return c.section && c.section.sectionType && c.section.sectionType === SectionType.Modifiers  && {label: c.section.name, value: c.section.id }
                    }) : [],
                    addons : data.cateringMenuItemSections ? data.cateringMenuItemSections.map(c => {
                        return c.section && c.section.sectionType && c.section.sectionType === SectionType.Addons && {label: c.section.name, value: c.section.id }
                    }) : []
                },
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
        case setIsCateringMenuItemError.type:
            return {
                ...state,
                isError: action.payload
            }
        case setIsCateringMenuItemSuccess.type:
            return {
                ...state,
                isSuccess: action.payload
            }
        default:
            return state
    }
}

export default cateringMenuItemReducer
