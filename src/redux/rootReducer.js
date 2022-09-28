// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './auth/authentication'

import member from "./member/reducer"
import memberShip from "./memberShipType/reducer"
import restaurant from "./restaurant/reducer"
import employee from "./employee/reducer"
import facebookPost from './facebookPosts/reducer'
import crmSms from './crmSMS/reducer'
import customer from "./customer/reducer"
import crmReducer from "./crmEmail/reducer"
import menuItemReducer from "./restaurantPages/menuItemReducer"
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
import ingredient from "./ingredients/reducer"
import section from "./section/reducer"
import sectionItem from "./sectionItem/reducer"
import cateringMenu from "./cateringMenu/reducer"
import cateringMenuItem from "./cateringMenuItem/reducer"
import meals from "./meal/reducer"

const rootReducer = {
    auth,
    navbar,
    layout,
    member,
    memberShip,
    restaurant,
    employee,
    facebookPost,
    crmSms,
    customer,
    crmReducer,
    menuItemReducer,
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
    wines,
    ingredient,
    section,
    sectionItem,
    cateringMenu,
    cateringMenuItem,
    meals
}

export default rootReducer
