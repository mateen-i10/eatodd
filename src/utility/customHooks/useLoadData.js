import {useEffect} from "react"
import {useDispatch} from "react-redux"

const useLoadData = (isSuccess, loadAction, isModal, toggle, currentPage, pageSize, searchValue) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadAction(currentPage, pageSize, searchValue))
        if (isModal) {
            toggle()
        }
    }, [isSuccess])
}

export default useLoadData
