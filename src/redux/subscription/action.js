import httpService, {baseURL} from "../../utility/http"
import {toast} from "react-toastify"
import {
    setRequestCompleted,
    setSubscription
} from "./reducer"

const url = 'winePackage'

export const addSubscription = (ids) => {
    const packageId = ids.packageId
    const customerId = ids.customerId
    return dispatch => {
        dispatch(setSubscription({packageId, customerId}))
    }
}

export const addWinePayment = (data, history) => {
    return (dispatch) => {
        httpService._put(`${baseURL}${url}/AssignToCustomer`, data)
            .then(res => {
                if (res.status === 200 && res.data.statusCode === 200) {
                    toast.success("Subscription added successfully")
                    const user = JSON.parse(localStorage.getItem('userData'))
                    localStorage.setItem('userData', JSON.stringify({...user, packageId: data.packageId, customerId: data.customerId}))
                    history.push('/user')
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

