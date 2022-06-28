// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './authentication'
import member from "./member/reducer"
import user from "./user/reducer"
import restaurant from "./restaurant/reducer"
import facebookPost from './facebookPosts/reducer'
import crmSms from './crmSMS/reducer'
import customer from "./customer/reducer"
import crmReducer from "./crmEmail/reducer"
import addonReducer from "./restaurantPages/addonReducer"
import menuItemReducer from "./restaurantPages/menuItemReducer"
import promotionReducer from "./restaurantPages/promotionsReducer"
import categoryReducer from "./restaurantPages/categoryReducer"
import modifierReducer from "./restaurantPages/modifierReducer"
import invItemReducer from "./restaurantPages/Inventory/itemReducer"
import invDistributorReducer from "./restaurantPages/Inventory/distributerReducer"
import invRecipeReducer from "./restaurantPages/Inventory/recipeReducer"
import invCategoryReducer from "./restaurantPages/Inventory/InvCategoryReducer"

const rootReducer = {
    auth,
    navbar,
    layout,
    member,
    user,
    restaurant,
    facebookPost,
    crmSms,
    customer,
    crmReducer,
    addonReducer,
    menuItemReducer,
    promotionReducer,
    categoryReducer,
    modifierReducer,
    invItemReducer,
    invDistributorReducer,
    invRecipeReducer,
    invCategoryReducer

}

export default rootReducer
