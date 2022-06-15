// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './authentication'
import dataTables from '../views/restaurants/components/table/store'
import member from "./member/reducer"

const rootReducer = {
    auth,
    navbar,
    layout,
    dataTables,
    member

}

export default rootReducer
