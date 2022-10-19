// ** Router Import
import Router from './router/Router'
import {useEffect} from "react"
import {clearGroupOrder} from "./utility/Utils"
import {getUserData, isCustomer, isUserLoggedIn} from "./auth/utils"
import {groupOrderCustomerId} from "./utility/constants"

const App = () => {
    useEffect(() => {
        if (!isUserLoggedIn() || (isUserLoggedIn() && isCustomer() && getUserData().customerId !== localStorage.getItem(groupOrderCustomerId))) {
            clearGroupOrder()
        }
    }, [])

    return <Router />
}

export default App
