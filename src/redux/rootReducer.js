// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './authentication'
import dataTables from '../views/restaurants/components/table/store'
import member from "./member/reducer"
import user from "./user/reducer"
import restaurant from "./restaurant/reducer"
import facebookPost from './facebookPosts/reducer'
import crmSms from './crmSMS/reducer'

const rootReducer = {
    auth,
    navbar,
    layout,
    dataTables,
    member,
    user,
    restaurant,
    facebookPost,
    crmSms
}

export default rootReducer
