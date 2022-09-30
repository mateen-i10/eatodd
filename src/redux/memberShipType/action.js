import {apiCall} from "../api/actions"
import {
    editMemberShipType,
    setDetailLoading, setIsEdit, setIsMemberShipTypeError, setIsMemberShipTypeSuccess,
    setMemberShipType,
    setMemberShipTypes,
    setRequestCompleted
} from "./reducer"

const url = '/winePackage'

export const loadMemberShipTypes = (pageIndex = 1, pageSize =  12, searchQuery = null) => {
    return async dispatch => {
        dispatch(setDetailLoading(true))
        dispatch(apiCall({
            url: `${url}?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}`,
            data: {},
            method: 'get',
            onSuccess: setMemberShipTypes.type
        }))
    }
}

export const getMemberShipType = (id, isEdit = false) => {
    return async dispatch => {
        if (isEdit) {
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: editMemberShipType.type
            }))
        } else {
            dispatch(setDetailLoading(true))
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: setMemberShipType.type
            }))
        }
    }
}

export const deleteMemberShipType = (id) => {
    return async dispatch => {
        dispatch(apiCall({
            url: `${url}/${id}`,
            data: {},
            method: 'delete',
            isSuccessToast: true,
            successMessage: 'MemberShip Type Deleted Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsMemberShipTypeError.type,
            isSuccess: setIsMemberShipTypeSuccess.type
        }))
    }
}

export const addMemberShipType = (data) => {
    console.log('packagesAdd', data)
    return async dispatch => {
        dispatch(apiCall({
            url,
            data,
            method: 'post',
            isSuccessToast: true,
            successMessage: 'MemberShip Type Added Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsMemberShipTypeError.type,
            isSuccess: setIsMemberShipTypeSuccess.type
        }))
    }
}

export const updateMemberShipType = (data) => {
    return async dispatch => {
        dispatch(apiCall({
            url,
            data: {...data},
            method: 'put',
            isSuccessToast: true,
            successMessage: 'MemberShip Type Updated Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsMemberShipTypeError.type,
            isSuccess: setIsMemberShipTypeSuccess.type
        }))
        dispatch(setIsEdit(false))
    }
}

export const getWinePackageByCustomer = (id, isEdit = false) => {
    return async dispatch => {
        if (isEdit) {
            dispatch(apiCall({
                url: `${url}/winePackageByCustomer/${id}`,
                data: {},
                method: 'get',
                onSuccess: editMemberShipType.type
            }))
        } else {
            dispatch(setDetailLoading(true))
            dispatch(apiCall({
                url: `${url}/winePackageByCustomer/${id}`,
                data: {},
                method: 'get',
                onSuccess: setMemberShipType.type
            }))
        }
    }
}

export const deleteSubscription = (CustomerId) => {
    return async dispatch => {
        dispatch(apiCall({
            url: `${url}/CancelSubscription/${CustomerId}`,
            data: {},
            method: 'delete',
            isSuccessToast: true,
            successMessage: 'Subscription Deleted Successfully',
            requestCompleted: setRequestCompleted.type,
            onError: setIsMemberShipTypeError.type,
            isSuccess: setIsMemberShipTypeSuccess.type
        }))
    }
}
