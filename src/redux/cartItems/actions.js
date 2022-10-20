import {cartTotalItems} from "../../utility/Utils"
import {totalCartItems} from "./cartItemsReducer"

export const calculateTotalItems = (val = null) => {
    return dispatch => {
        const total = val ? val : cartTotalItems()
        dispatch(totalCartItems(total))
    }
}