import {
    setLoading,
    setTemplates
} from "./reducer"

import { data } from '../../tempData/data'

// ** Get All Templates Data
export const loadTemplates = () => {
    return async dispatch => {
        dispatch(setLoading(true))
        dispatch(setTemplates([...data]))
    }
}
