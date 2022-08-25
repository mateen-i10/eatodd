import {
    editGenralProduct,
    setDetailLoading,
    setGenralProduct,
    setGenralProductRequestCompleted,
    setGenralProducts,
    setIsGenralProductEdit,
    setIsGenralProductError,
    setIsGenralProductSuccess,
    setLoading
} from "./reducer"
// ** Table Data & Columns
// import {data} from '../../tempData/data'
import {apiCall} from "../api/actions"

const url = 'generalProduct'

// ** Get GenralProduct Data
// export const loadGeneralProducts = () => {
//     return async dispatch => {
//         dispatch(setLoading(true))
//         dispatch(apiCall({
//             url: `${url}?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}`,
//             data: {},
//             method: 'get',
//             onSuccess: setCategorys.type
//         }))
//         dispatch(setGenralProducts([...data]))
//     }
// }
// export const getGeneralProduct = (id, isEdit) => {
//     return async dispatch => {
//         dispatch(setLoading(true))
//         const found = data.find(d => d.id === id)
//         if (isEdit) dispatch(editGenralProduct({...found}))
//         else {
//             dispatch(setGenralProduct({...found}))
//         }
//     }
// }
// export const deleteGenralProduct = (id) => {
//     return async dispatch => {
//         console.log('deleted', id, dispatch)
//     }
// }
//
// export const addGenralProduct = (newGenralProduct) => {
//     console.log("add GenralProduct", newGenralProduct)
// }
//
// export const updateGenralProduct = (newGenralProduct) => {
//     console.log("update GenralProduct", newGenralProduct)
// }

// ** Get All general Product Data
export const loadGenralProducts = (pageIndex = 1, pageSize = 12, searchQuery = null) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}`,
            data: {},
            method: 'get',
            onSuccess: setGenralProducts.type
        }))
    }
}

export const getGenralProduct = (id, isEdit = false) => {
    console.log("dataGet", isEdit)
    return async dispatch => {
        if (isEdit) {
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: editGenralProduct.type
            }))
        } else {
            dispatch(setDetailLoading(true))
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: setGenralProduct.type
            }))
        }
    }
}
export const deleteGenralProduct = (id) => {
    return async dispatch => {
        dispatch(apiCall({
            url: `${url}/${id}`,
            data: {},
            method: 'delete',
            isSuccessToast: true,
            successMessage: 'Category Deleted Successfully',
            requestCompleted: setGenralProductRequestCompleted.type,
            onError: setIsGenralProductError.type,
            isSuccess: setIsGenralProductSuccess.type
        }))
    }
}
export const addGenralProduct = (data) => {
    console.log('resData', data)
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'post',
            isSuccessToast: true,
            successMessage: 'Category Added Successfully',
            requestCompleted: setGenralProductRequestCompleted.type,
            onError: setIsGenralProductError.type,
            isSuccess: setIsGenralProductSuccess.type,
            isFormData: true
        }))
    }
}
export const updateGenralProduct = (data) => {
    console.log('updated data', data)
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'put',
            isSuccessToast: true,
            successMessage: 'Category Updated Successfully',
            requestCompleted: setGenralProductRequestCompleted.type,
            onError: setIsGenralProductError.type,
            isSuccess: setIsGenralProductSuccess.type
            // isFormData: true
        }))
        dispatch(setIsGenralProductEdit(false))
    }
}