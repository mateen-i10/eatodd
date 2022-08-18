import {useEffect} from "react"
import {useDispatch} from "react-redux"

const useModalError = (isError, setModalLoading, action) => {
    const dispatch = useDispatch()
    useEffect(() => {
        if (isError) {
            setModalLoading(false)
            dispatch(action(false))
        }
    }, [isError])
}

export default useModalError
