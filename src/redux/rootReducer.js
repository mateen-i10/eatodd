// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './authentication'
import dataTables from '../views/restaurants/components/table/store'

const rootReducer = {
    auth,
    navbar,
    layout,
    dataTables
}

export default rootReducer
