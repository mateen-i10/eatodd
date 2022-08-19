import {apiCall} from "../api/actions"
import {toast} from "react-toastify"
import httpService, {baseURL} from "../../utility/http"
import {push} from "react-router-redux"
import {Roles} from "../../utility/Roles"
import {getHomeRouteForLoggedInUser} from "../../utility/Utils"
import {
    handleLogin,
    handleLogout,
    setPasswordReset,
    setRequestCompleted,
    setTokenVerified,
    setTokenVerifiedFalse
} from "./authentication"

const url = 'auth/'
export const login = (username, password, isDeviceLoginEnabled, history) => {
    return (dispatch) => {
        httpService
            ._post(`${baseURL}${url}login`, { username, password, isDeviceLoginEnabled })
            .then(res => {
                dispatch(setRequestCompleted(true))
                if (res.status === 200 && res.data.statusCode === 200) {
                    const {data} = res.data
                    const finalData = { ...data.userData, accessToken: data.accessToken}
                    dispatch(handleLogin(finalData))
                    const {userData: user} = data
                        toast.success('Logged in Successfully')
                        const url = getHomeRouteForLoggedInUser(user.role)
                        history.replace(url)
                } else {
                    toast.error(res.data.message)
                }
            })
            .catch((err) => {
                dispatch(setRequestCompleted(true))
                toast.error(err.message)
            })
    }

}
export const register = (customer, history) => {
    return dispatch => {
        httpService
            ._post(`${baseURL}${url}register`, {...customer, passwordHash: customer.password, permission: ""})
            .then(res => {
                dispatch(setRequestCompleted(true))
                if (res.status === 200 && res.data.statusCode === 200) {
                    localStorage.setItem("customerEmail", customer.email)
                    history.replace('/auth/verification')
                } else {
                    toast.error(res.data.message)
                }
            })
            .catch(err => {
                dispatch(setRequestCompleted(true))
                console.log('error', err)
                toast.error(err.message)
            })
    }
}
export const forgetPassword = (email) => {
    return (dispatch) => {
        const payload = {
            data: null,
            method: "get",
            isSuccessToast: true,
            requestCompleted: setRequestCompleted.type,
            url: `${url}PasswordReset?email=${email}`
        }
        dispatch(apiCall(payload))
    }
}
export const verifyToken = (queryString) => {
    return (dispatch) => {
        const payload = {
            data: null,
            method: "get",
            onSuccess: setTokenVerified.type,
            onError: setTokenVerified.type,
            url: `${url}VerifyToken${queryString}`
        }
        dispatch(apiCall(payload))
    }
}
export const resetNewPassword = (token, email, password) => {
    return (dispatch) => {
        const payload = {
            data: {token, email, password},
            method: "patch",
            isSuccessToast: true,
            requestCompleted: setRequestCompleted.type,
            onSuccess: setPasswordReset.type,
            url: `${url}PasswordReset`
        }
        dispatch(apiCall(payload))
    }
}
export const verifyEmail = (queryString) => {
    return (dispatch) => {
        const payload = {
            data: null,
            method: "get",
            isSuccess: setTokenVerified.type,
            onError: setTokenVerifiedFalse.type,
            url: `${url}ConfirmEmail${queryString}`
        }
        dispatch(apiCall(payload))
    }
}
export const resendEmail = (email) => {
    return (dispatch) => {
        const payload = {
            data: null,
            method: "get",
            isSuccessToast: true,
            successMessage: 'Email sent successfully',
            requestCompleted: setRequestCompleted.type,
            url: `${url}ResendEmail?email=${email}`
        }
        dispatch(apiCall(payload))
    }
}
export const unAuthorize = () => {
    return dispatch => {
        dispatch(handleLogout())
        dispatch(push('/login'))
        location.reload()  // (temporary) until find a solution to update route using redux
        toast.error('Sign in to continue...')
    }

}
