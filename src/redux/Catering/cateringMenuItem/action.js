import {apiCall} from "../../api/actions"
import {
    editCateringMenuItem,
    setCateringMenuItem,
    setCateringMenuItems,
    setDetailLoading,
    setIsCateringMenuItemError,
    setIsCateringMenuItemSuccess,
    setIsEdit,
    setLoading,
    setRequestCompleted
} from "./reducer"
import httpService, {baseURL} from "../../../utility/http"
import {toast} from "react-toastify"


const url = 'cateringMenuItem'
// const imgUpdateURL = 'Media/UpdateCateringMenuItemProduct'

export const loadCateringMenuItems = (pageIndex = 1, pageSize = 12, searchQuery = null) => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(apiCall({
            url: `${url}?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}`,
            data: {},
            method: 'get',
            onSuccess: setCateringMenuItems.type
        }))
    }
}

export const getCateringMenuItem = (id, isEdit = false) => {
    return async dispatch => {
        if (isEdit) {
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: editCateringMenuItem.type
            }))
        } else {
            dispatch(setDetailLoading(true))
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: setCateringMenuItem.type
            }))
        }
    }
}

export const deleteCateringMenuItem = (id) => {
    return async dispatch => {
        dispatch(apiCall({
            url: `${url}/${id}`,
            data: {},
            method: 'delete',
            isSuccessToast: true,
            successMessage: 'Catering Menu Item Deleted Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsCateringMenuItemError.type,
            isSuccess: setIsCateringMenuItemSuccess.type
        }))
    }
}

export const addCateringMenu = (data) => {
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'post',
            isSuccessToast: true,
            successMessage: 'Catering Menu Item Added Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsCateringMenuItemError.type,
            isSuccess: setIsCateringMenuItemSuccess.type,
            isFormData: true
        }))
    }
}

export const updateCateringMenu = (data) => {
    // console.log('dataEmp', data)
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'put',
            isSuccessToast: true,
            successMessage: 'Catering Menu Item Updated Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsCateringMenuItemError.type,
            isSuccess: setIsCateringMenuItemSuccess.type,
            isFormData: true
        }))
        dispatch(setIsEdit(false))
    }
}
export const updateImage = (data) => {
    // console.log(data, "data from actions")
    return async () => {
        return httpService._put(`${baseURL}Media/UpdateCateringMenuItemProduct`, data, {
            headers: {encType: "multipart/form-data"}
        }).then(response => {
            // success case
            if (response.status === 200 && response.data.statusCode === 200) {
                toast.success('Image Updated Successfully')
            } else {
                //general Error Action
                toast.error(response.data.message)
            }
        }).catch(error => {
            toast.error(error.message)
        })
    }

}
