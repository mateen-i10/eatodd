import httpService, {baseURL} from "../../utility/http"
import {toast} from "react-toastify"
import {apiCall} from "./actions"
// import {isUserLoggedIn} from "../../auth/utils"
// import {unAuthorize} from "../auth/actions"
// import {useNavigate} from "react-router"

const apiMiddleware = ({dispatch}) => (next) => (action) => {
    if (action.type !== apiCall.type) return next(action)
    const { url, onSuccess, onError, method, data : semiFinal, isSuccessToast, requestCompleted, successMessage, isSuccess, isFormData} = action.payload

    // const navigate = useNavigate()

    let data = null
    // to pass form-data
    if (isFormData) {
        const entries = Object.entries(semiFinal)
        data = new FormData()
        for (const [key, value] of entries) {
            data.append(key, value)
        }
    } else {
        data = semiFinal
    }
    console.log('api mid', url, onSuccess, onError, method, data)
    httpService._request({ baseURL, url, method, data })
        .then(response => {
            console.log('response', response)
            // action called on every response if provided
            if (requestCompleted) dispatch({type: requestCompleted, payload: true})
            // success case
            if (response.status === 200 && response.data.statusCode === 200) {
                // If it is provided then toast message on success is shown
                if (isSuccessToast) {
                    successMessage ? toast.success(successMessage) : toast.success(response.data.message)
                }
                // specific success action
                if (onSuccess) {
                    dispatch({type: onSuccess, payload: response.data})
                }
                // specific success case to check true or false
                if (isSuccess) {
                    dispatch({type: isSuccess, payload: true})
                }
            // } else if (response.data.statusCode === 401) {
            //     dispatch(unAuthorize())
            } else {
                //general Error Action
                toast.error(response.data.message)
                if (onError) dispatch({type: onError, payload: true})
            }
        }).catch(error => {
        // action called on every response if provided
        console.log('err here', error)

        // if (isUserLoggedIn) {
        //     dispatch(unAuthorize())
        // }

        if (requestCompleted) dispatch({type: requestCompleted, payload: true})
        if (onError) dispatch({type: onError, payload: true})
        toast.error(error.message)
    })
}

export default apiMiddleware
