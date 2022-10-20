// ** Router Import
import Router from './router/Router'
import {useEffect} from "react"
import {useDispatch} from "react-redux"
import {calculateTotalItems} from "./redux/cartItems/actions"

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(calculateTotalItems())
    }, [])

    return <Router />
}

export default App
