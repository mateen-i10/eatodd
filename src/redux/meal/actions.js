import {apiCall} from "../api/actions"
import {setIsEdit, setDetailLoading, setMeal} from "../meal/reducer"

const url = 'meal'

export const getMeal = (id, isEdit = false) => {
    console.log("dataGet", isEdit)
    return async dispatch => {
        if (isEdit) {
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: setIsEdit.type
            }))
        } else {
            dispatch(setDetailLoading(true))
            dispatch(apiCall({
                url: `${url}/${id}`,
                data: {},
                method: 'get',
                onSuccess: setMeal.type
            }))
        }
    }
}