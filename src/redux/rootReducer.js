// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './auth/authentication'

import member from "./member/reducer"
import memberShip from "./memberShipType/reducer"
import restaurant from "./restaurant/reducer"
import employee from "./employee/reducer"
import employeeDashboard from "./employeeDashboard/reducer"
import empOrder from "./employeeDashboard/employeeOrders/reducer"
import facebookPost from './facebookPosts/reducer'
import crmSms from './crmSMS/reducer'
import customer from "./customer/reducer"
import crmReducer from "./crmEmail/reducer"
import invItemReducer from "./restaurantPages/Inventory/itemReducer"
import invDistributorReducer from "./restaurantPages/Inventory/distributerReducer"
import invRecipeReducer from "./restaurantPages/Inventory/recipeReducer"
import invCategoryReducer from "./restaurantPages/Inventory/InvCategoryReducer"
import testReducer from "./test/reducer"
import cuisine from "./cuisine/reducer"
import cartItems from "./cartItems/cartItemsReducer"
import scrollSlice from "./scroll/scrollSlice"
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
import cateringMenu from "./Catering/cateringMenu/reducer"
import cateringMenuItem from "./Catering/cateringMenuItem/reducer"
import subscriptionReducer from "./subscription/reducer"
import customerCatering from "./Catering/CateringCustomers/reducer"
import AdminDashReducer from "./adminDashboard/reducer"
import contact from "./contact/reducer"
import campaign from "./campaign/reducer"
import template from "./template/reducer"
import review from "./review/reducer"
import generalRecommendation from "./generalRecommendation/reducer"
import reward from "./Reward/reducer"

const rootReducer = {
    auth,
    navbar,
    layout,
    member,
    memberShip,
    restaurant,
    employee,
    employeeDashboard,
    empOrder,
    facebookPost,
    crmSms,
    customer,
    crmReducer,
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
    subscriptionReducer,
    scrollSlice,
    customerCatering,
    AdminDashReducer,
    contact,
    campaign,
    template,
    review,
    generalRecommendation,
    reward
}

export default rootReducer
