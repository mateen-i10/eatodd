import {createAction} from '@reduxjs/toolkit'

const initialState = {
    list: [],
    object: {},
    miscData: {},
    isRequestCompleted: false,
    isLoading: false,
    isEdit: false,
    isError: false,
    isSuccess: false
}
export const setGenralProducts = createAction("GenralProductReducer/setGenralProducts")
export const setGenralProduct = createAction("GenralProductReducer/setGenralProduct")
export const setLoading = createAction("GenralProductReducer/setLoading")
export const setDetailLoading = createAction("GenralProductReducer/setDetailLoading")
export const editGenralProduct = createAction("GenralProductReducer/editGenralProduct")
export const setIsGenralProductEdit = createAction("GenralProductReducer/setIsGenralProductEdit")
export const setGenralProductRequestCompleted = createAction("GenralProductReducer/setRequestCompleted")
export const setIsGenralProductError = createAction("GenralProductReducer/setIsError")
export const setIsGenralProductSuccess = createAction("RestaurantReducer/setIsRestaurantSuccess")

const GenralProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case setGenralProducts.type:
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
        case setGenralProduct.type:
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
        case editGenralProduct.type:
            const data = action.payload.data
            data.options = data.options.filter(c => c.name !== "Numeric" && c.name !== "Normal")
            data.optionsString = JSON.stringify(data.options)
            delete data.attachmentId

            const fla = data.flavour
            const arr = fla.split(",")
            console.log('fla', fla)
            console.log('arr', arr)

            return {
                ...state,
                object: {...data,
                    generalProductIngredients: data.generalProductIngredients.map(i => {
                        return {label: i.ingredient.name, value: i.ingredientId}
                    }),
                    flavour: arr.map(f => { return {label: f, value: f} }),
                    category: {label: data.category.name, value: data.category.id},
                    optionType: {label: data.optionType === 1 ? "Default" : 'Numeric', value: data.optionType}
                },
                isEdit: true
            }
        case setGenralProductRequestCompleted.type:
            return {
                ...state,
                isRequestCompleted: action.payload
            }
        case setIsGenralProductEdit.type:
            return {
                ...state,
                isEdit: action.payload.data
            }
        case setIsGenralProductError.type:
            return {
                ...state,
                isError: action.payload
            }
        case setIsGenralProductSuccess.type:
            return {
                ...state,
                isSuccess: action.payload
            }
        default:
            return state
    }
}

export default GenralProductReducer
