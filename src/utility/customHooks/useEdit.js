import {useEffect} from "react"
import {useDispatch} from "react-redux"

const useEdit = (isEdit, setModalLoading, setFormState, formInitialState, setEdit, editAction, setObjectAction, data) => {
    const dispatch = useDispatch()
    useEffect(() => {
        setModalLoading(false)
        if (isEdit) {
            setFormState({...formInitialState})
            setEdit(true)
            dispatch(editAction(false))
        } else {
            dispatch(setObjectAction({ data: { ...data }}))
        }
    }, [isEdit])
}

export default useEdit
