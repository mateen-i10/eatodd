import {cartTotalItems} from "../../utility/Utils"
import {totalCartItems} from "./cartItemsReducer"

export const calculateTotalItems = () => {
    return dispatch => {
        const total = cartTotalItems()
        dispatch(totalCartItems(total))
    }
}