// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './auth/authentication'
import user from './user/reducer'
import member from "./member/reducer"
import restaurant from "./restaurant/reducer"
import employee from "./employee/reducer"
import facebookPost from './facebookPosts/reducer'
import crmSms from './crmSMS/reducer'
import customer from "./customer/reducer"
import crmReducer from "./crmEmail/reducer"
import addonReducer from "./restaurantPages/addonReducer"
import menuItemReducer from "./restaurantPages/menuItemReducer"
import promotionReducer from "./restaurantPages/promotionsReducer"
import modifierReducer from "./restaurantPages/modifierReducer"
import invItemReducer from "./restaurantPages/Inventory/itemReducer"
import invDistributorReducer from "./restaurantPages/Inventory/distributerReducer"
import invRecipeReducer from "./restaurantPages/Inventory/recipeReducer"
import invCategoryReducer from "./restaurantPages/Inventory/InvCategoryReducer"
import testReducer from "./test/reducer"
import cuisine from "./cuisine/reducer"
import cartItems from "./cartItems/cartItemsReducer"
import restaurantLocation from "./restaurantLocation/restaurantLocation"
import userLocation from "./userLocation/userLocation"
import product from "./products/reducer"
import genralProduct from "./genralProduct/reducer"
import category from "./restaurantPages/category/reducer"
import subCategory from "./subcategory/reducer"
import reorderHistory from "./reorderhistory/reducer"
import wines from "./wines/reducer"

const rootReducer = {
    auth,
    navbar,
    layout,
    member,
    restaurant,
    employee,
    facebookPost,
    crmSms,
    user,
    customer,
    crmReducer,
    addonReducer,
    menuItemReducer,
    promotionReducer,
    modifierReducer,
    invItemReducer,
    invDistributorReducer,
    invRecipeReducer,
    invCategoryReducer,
    testReducer,
    cuisine,
    product,
    genralProduct,
    category,
    subCategory,
    reorderHistory,
    cartItems,
    restaurantLocation,
    userLocation,
    wines
}

export default rootReducer
