// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './auth/authentication'
import user from './user/reducer'
import member from "./member/reducer"
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
import testReducer from "./test/reducer"
import CuisineReducer from "./cuisine/reducer"
import cartItems from "./cartItems/cartItemsReducer"

const rootReducer = {
    auth,
    navbar,
    layout,
    member,
    restaurant,
    facebookPost,
    crmSms,
    user,
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
    invCategoryReducer,
    testReducer,
    CuisineReducer,
    cartItems
}

export default rootReducer
