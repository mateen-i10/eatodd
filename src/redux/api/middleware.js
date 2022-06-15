import httpService, {baseURL} from "../../utility/http"
import {toast} from "react-toastify"
import {apiCall} from "./actions"
/*import {AuthenticationService} from "../../jwt/_services"
import { push } from 'react-router-redux'*/

const apiMiddleware = ({dispatch}) => (next) => (action) => {
    console.log('api middleware')
    if (action.type !== apiCall.type) return next(action)

    const { url, onSuccess, onError, method, data } = action.payload
    console.log('api mid', url, onSuccess, onError, method, data)
    httpService._request({ baseURL, url, method, data })
        .then(response => {
            // success case
            if (response.status === 200 && response.data.statusCode === 200) {
                console.log('success response', response)
                console.log('on Success', onSuccess)
            } else {
                //general Error Action
                console.log('error', response)
                toast.error(response)
                if (onError) dispatch({type: onError, payload: true})
            }
        }).catch(error => {
        toast.error(error.message)
    })

}

export default apiMiddleware