import httpService, { baseURL } from "../../utility/http"
import { toast } from "react-toastify"
import { apiCall } from "./actions"
import { unAuthorize } from "../auth/actions"

const activeRequests = {} // Object to store active API requests and their corresponding toast IDs

const apiMiddleware = ({ dispatch }) => (next) => (action) => {
    if (action.type !== apiCall.type) return next(action)

    const {
        url,
        onSuccess,
        onError,
        method,
        data: semiFinal,
        isSuccessToast,
        requestCompleted,
        successMessage,
        isSuccess,
        isFormData
    } = action.payload

    let data = null
    if (isFormData) {
        const entries = Object.entries(semiFinal)
        data = new FormData()
        for (const [key, value] of entries) {
            data.append(key, value)
        }
    } else {
        data = semiFinal
    }

    const toastId = activeRequests[url] // Get the toast ID for the current API request

    // If a toast is already active for the same API request, return immediately
    if (toastId) {
        return
    }

    httpService
        ._request({ baseURL, url, method, data })
        .then((response) => {
            if (requestCompleted) dispatch({ type: requestCompleted, payload: true })

            if (response.status === 200 && response.data.statusCode === 200) {
                if (isSuccessToast) {
                    successMessage ? (activeRequests[url] = toast.success(successMessage)) : (activeRequests[url] = toast.success(response.data.message))
                }
                if (onSuccess) {
                    dispatch({ type: onSuccess, payload: response.data })
                }
                if (isSuccess) {
                    dispatch({ type: isSuccess, payload: true })
                }
            } else if (response.status === 401) {
                dispatch(unAuthorize())
            } else {
                toast.error(response.data.message)
                if (onError) dispatch({ type: onError, payload: true })
            }
        })
        .catch((error) => {
            if (requestCompleted) dispatch({ type: requestCompleted, payload: true })

            if (error.response && error.response.status === 401) {
                dispatch(unAuthorize())
            } else {
                if (onError) dispatch({ type: onError, payload: true })
                toast.error(error.message)
            }
        })
        .finally(() => {
            delete activeRequests[url] // Remove the API request from active requests after completion
        })
}

export default apiMiddleware