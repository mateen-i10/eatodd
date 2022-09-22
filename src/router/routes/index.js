import {lazy} from 'react'

// ** Document title
const TemplateTitle = '%s - EatOMG'

// ** Default Route
const DefaultRoute = '/home'

// ** Merge Routes
const Routes = [
    {
        path: '/home',
        component: lazy(() => import('../../views/home/Home')),
        layout: 'BlankLayout'
    },
    {
        path: '/auth/verification',
        component: lazy(() => import('../../views/authentication/Verification')),
        layout: 'BlankLayout'
    },
    {
        path: '/auth/email-verification',
        component: lazy(() => import('../../views/authentication/EmailVerification')),
        layout: 'BlankLayout'
    },
    {
        path: '/auth/resetPassword',
        component: lazy(() => import('../../views/authentication/ResetPassword')),
        layout: 'BlankLayout'
    },
    {
        path: '/OmgPlate',
        component: lazy(() => import('../../views/home/options/OmgPlate')),
        layout: 'BlankLayout'
    },
    {
        path: '/menu',
        component: lazy(() => import('../../views/catering/Pages/Catering')),
        layout: 'BlankLayout'
    },
    {
        path: '/cateringMenuOrder',
        component: lazy(() => import('../../views/catering/Pages/COMenu')),
        layout: 'BlankLayout'
    },
    {
        path: '/ourvalues',
        component: lazy(() => import('../../views/OurValues/OurValues')),
        layout: 'BlankLayout'
    },
    {
        path: '/gmap',
        component: lazy(() => import('../../views/GoogleMap/index')),
        layout: 'BlankLayout'
    },
    {
        path: '/reward',
        component: lazy(() => import('../../views/reward/Reward')),
        layout: 'BlankLayout'
    },
    {
        path: '/nutrtion',
        component: lazy(() => import('../../views/nutrtion/Nutrtion')),
        layout: 'BlankLayout'
    },
    {
        path: '/wine/singlepage',
        component: lazy(() => import('../../views/wine/Pages/SinglePage')),
        layout: 'BlankLayout'
    },
    {
        path: '/wine/faq',
        component: lazy(() => import('../../views/wine/Pages/Faq')),
        layout: 'BlankLayout'
    },
    {
        path: '/wines',
        component: lazy(() => import('../../views/admin/wines/Wines')),
        layout: 'VerticalLayout'
    },
    {
        path: '/wine/about',
        component: lazy(() => import('../../views/wine/Pages/About')),
        layout: 'BlankLayout'
    },
    {
        path: '/wine/membership',
        component: lazy(() => import('../../views/wine/Pages/Membership')),
        layout: 'BlankLayout'
    },
    {
        path: '/NutrtionIngredients',
        component: lazy(() => import('../../views/nutrtion/components/NutrtionIngredients')),
        layout: 'BlankLayout'
    },
    {
        path: '/dashboard',
        component: lazy(() => import('../../views/admin/Dashboard')),
        layout: 'VerticalLayout',
        exact: true
    },
    {
        path: '/dashboard/orders',
        component: lazy(() => import('../../views/restaurants/pages/Orders')),
        layout: 'VerticalLayout',
        exact: true
    },
    {
        path: '/dashboard/menuitems',
        component: lazy(() => import('../../views/restaurants/pages/MenuItems')),
        layout: 'VerticalLayout',
        exact: true
    },
    {
        path: '/dashboard/category',
        component: lazy(() => import('../../views/restaurants/pages/Category')),
        layout: 'VerticalLayout',
        exact: true
    },
    {
        path: '/dashboard/modifier',
        component: lazy(() => import('../../views/restaurants/pages/Modifier')),
        layout: 'VerticalLayout',
        exact: true
    },
    {
        path: '/Dashboard/addon',
        component: lazy(() => import('../../views/restaurants/pages/Addon')),
        layout: 'VerticalLayout',
        exact: true
    },
    {
        path: '/dashboard/promotion',
        component: lazy(() => import('../../views/restaurants/pages/Promotion')),
        layout: 'VerticalLayout',
        exact: true
    },
    {
        path: '/dashboard/customer',
        component: lazy(() => import('../../views/restaurants/pages/Customer')),
        layout: 'VerticalLayout',
        exact: true
    },
    {
        path: '/dashboard/inventory/distributor',
        component: lazy(() => import('../../views/restaurants/pages/subPages/Distributor')),
        layout: 'VerticalLayout',
        exact: true
    },
    {
        path: '/dashboard/inventory/item',
        component: lazy(() => import('../../views/restaurants/pages/subPages/Item')),
        layout: 'VerticalLayout',
        exact: true
    },
    {
        path: '/dashboard/inventory/recipe',
        component: lazy(() => import('../../views/restaurants/pages/subPages/Recipe')),
        layout: 'VerticalLayout',
        exact: true
    },
    {
        path: '/dashboard/inventory/category',
        component: lazy(() => import('../../views/restaurants/pages/subPages/Category')),
        layout: 'VerticalLayout',
        exact: true
    },
    {
        path: '/OmgPlate',
        component: lazy(() => import('../../views/home/options/OmgPlate')),
        layout: 'BlankLayout'
    },
    {
        path: '/Users',
        component: lazy(() => import('../../views/admin/Users')),
        layout: 'VerticalLayout'
    },
    {
        path: '/AddUser',
        component: lazy(() => import('../../views/admin/AddUserForm')),
        layout: 'VerticalLayout'
    },
    {
        path: '/Restaurant',
        component: lazy(() => import('../../views/admin/Restaurant/Restaurant')),
        layout: 'VerticalLayout'
    },
    {
        path: '/Facebook',
        component: lazy(() => import('../../views/admin/FacebookAutoPost/FaceBookAuto')),
        layout: 'VerticalLayout'
    },
    {
        path: '/AddFacebookPost',
        component: lazy(() => import('../../views/admin/FacebookAutoPost/AddFacebookPostForm')),
        layout: 'VerticalLayout'
    },
    {
        path: '/Customers',
        component: lazy(() => import('../../views/admin/Customers/Customers')),
        layout: 'VerticalLayout'
    },
    {
        path: '/employees',
        component: lazy(() => import('../../views/admin/Employee/employee')),
        layout: 'VerticalLayout'
    },
    {
        path: '/employee/:id',
        component: lazy(() => import('../../views/admin/Employee/employeeDetail')),
        layout: 'VerticalLayout'
    },
    {
        path: '/ingredients',
        component: lazy(() => import('../../views/admin/Ingredients/Ingredients')),
        layout: 'VerticalLayout'
    },
    {
        path: '/ingredient/:id',
        component: lazy(() => import('../../views/admin/Ingredients/ingredientsDetail')),
        layout: 'VerticalLayout'
    },
    {
        path: '/section/:id',
        component: lazy(() => import('../../views/admin/section/sectionDetail')),
        layout: 'VerticalLayout'
    },
    {
        path: '/section',
        component: lazy(() => import('../../views/admin/section/section')),
        layout: 'VerticalLayout'
    },
    {
        path: '/sectionItem/:id',
        component: lazy(() => import('../../views/admin/sectionItem/sectionItemDetail')),
        layout: 'VerticalLayout'
    },
    {
        path: '/sectionItem',
        component: lazy(() => import('../../views/admin/sectionItem/sectionItem')),
        layout: 'VerticalLayout'
    },
    {
        path: '/cateringMenu/:id',
        component: lazy(() => import('../../views/admin/cateringMenu/cateringMenuDetail')),
        layout: 'VerticalLayout'
    },
    {
        path: '/cateringMenu',
        component: lazy(() => import('../../views/admin/cateringMenu/cateringMenu')),
        layout: 'VerticalLayout'
    },
    {
        path: '/cateringMenuItem/:id',
        component: lazy(() => import('../../views/admin/cateringMenuItem/cateringMenuItemDetail')),
        layout: 'VerticalLayout'
    },
    {
        path: '/cateringMenuItem',
        component: lazy(() => import('../../views/admin/cateringMenuItem/cateringMenuItem')),
        layout: 'VerticalLayout'
    },
    {
        path: '/Customer',
        component: lazy(() => import('../../views/customer/index')),
        layout: 'BlankLayout'
    },
    {
        path: '/CrmEmails',
        component: lazy(() => import('../../views/admin/CrmEmails/CrmEmail')),
        layout: 'VerticalLayout'
    },
    {
        path: '/CrmSms',
        component: lazy(() => import('../../views/admin/CrmSms/CrmSms')),
        layout: 'VerticalLayout'
    },
    {
        path: '/SechduledSms',
        component: lazy(() => import('../../views/admin/CrmSms/ScheduleSms')),
        layout: 'VerticalLayout'
    },
    {
        path: '/wine/homepage',
        component: lazy(() => import('../../views/wine/Pages/Homepage')),
        layout: 'BlankLayout'
    },
    {
        path: '/wineOrderMenu',
        component: lazy(() => import('../../views/wine/Pages/wineOrderMenu')),
        layout: 'BlankLayout'
    },
    {
        path: '/BussinessDetails',
        component: lazy(() => import('../../views/admin/BussinessDetails/BussinessDetails')),
        layout: 'VerticalLayout'
    },
    {
        path: '/BussinessForm',
        component: lazy(() => import('../../views/admin/BussinessDetails/BussinessDetailsForm')),
        layout: 'VerticalLayout'
    },
    {
        path: '/LoginHistory',
        component: lazy(() => import('../../views/admin/Loghistory/LoginHistory')),
        layout: 'VerticalLayout'
    },
    {
        path: '/members',
        component: lazy(() => import('../../views/admin/WineClubMembers/Members')),
        layout: 'VerticalLayout'
    },
    {
        path: '/membershipTypes',
        component: lazy(() => import('../../views/admin/WineClubMembershipTypes/MembershipTypes')),
        layout: 'VerticalLayout'
    },
    {
        path: '/promotions',
        component: lazy(() => import('../../views/admin/WineClubPromotions/Promotions')),
        layout: 'VerticalLayout'
    },
    {
        path: '/Addpromotions',
        component: lazy(() => import('../../views/admin/WineClubPromotions/AddPromotion')),
        layout: 'VerticalLayout'
    },
    {
        path: '/restaurantDetail/:id',
        component: lazy(() => import('../../views/admin/Restaurant/RestaurantDetail')),
        layout: 'VerticalLayout'
    },
    {
        path: '/addAddon',
        component: lazy(() => import('../../views/restaurants/pages/forms/AddonForm')),
        layout: 'VerticalLayout'
    },
    {
        path: '/addMembershipType',
        component: lazy(() => import('../../views/admin/WineClubMembershipTypes/AddMembershipTypeForm')),
        layout: 'VerticalLayout'
    },
    {
        path: '/addmenuitem',
        component: lazy(() => import('../../views/restaurants/pages/forms/AddMenuItem')),
        layout: 'VerticalLayout'
    },
    {
        path: '/addCategory',
        component: lazy(() => import('../../views/restaurants/pages/forms/AddCategory')),
        layout: 'VerticalLayout'
    },
    {
        path: '/subCategory',
        component: lazy(() => import('../../views/admin/subCategory/subcategory')),
        layout: 'VerticalLayout'
    },
    {
        path: '/addModifier',
        component: lazy(() => import('../../views/restaurants/pages/forms/AddModifier')),
        layout: 'VerticalLayout'
    },
    {
        path: '/addnorthPromotion',
        component: lazy(() => import('../../views/restaurants/pages/forms/AddPromotion')),
        layout: 'VerticalLayout'
    },
    {
        path: '/addInventoryItem',
        component: lazy(() => import('../../views/restaurants/pages/forms/AddInventoryItemForm')),
        layout: 'VerticalLayout'
    },
    {
        path: '/addDistributor',
        component: lazy(() => import('../../views/restaurants/pages/forms/AddDistributor')),
        layout: 'VerticalLayout'
    },
    {
        path: '/addCategorySubInventory',
        component: lazy(() => import('../../views/restaurants/pages/forms/AddCategorySubInvenotry')),
        layout: 'VerticalLayout'
    },
    {
        path: '/addRecipe',
        component: lazy(() => import('../../views/restaurants/pages/forms/AddRecipe')),
        layout: 'VerticalLayout'
    },
    {
        path: '/designer',
        component: lazy(() => import('../../views/admin/CrmEmails/Designer')),
        layout: 'VerticalLayout'
    },
    {
        path: '/login',
        component: lazy(() => import('../../views/authentication/Login')),
        layout: 'BlankLayout'
    },
    {
        path: '/signup',
        component: lazy(() => import('../../views/authentication/SignUp')),
        layout: 'BlankLayout'
    },
    {
        path: '/forgotPassword',
        component: lazy(() => import('../../views/authentication/ForgotPassword')),
        layout: 'BlankLayout'
    },
    {
        path: '/user',
        component: lazy(() => import('../../views/customer/index')),
        layout: 'BlankLayout'
    },
    {
        path: '/checkout',
        component: lazy(() => import('../../views/checkoutpage/CheckOut')),
        layout: 'BlankLayout'
    },
    {
        path: '/cuisine',
        component: lazy(() => import('../../views/admin/cuisine/Cuisine')),
        layout: 'VerticalLayout'
    },
    {
        path: '/products',
        component: lazy(() => import('../../views/admin/product/Product')),
        layout: 'VerticalLayout'
    },
    {
        path: '/productsDetail/:id',
        component: lazy(() => import('../../views/admin/product/componenets/ProductDetails')),
        layout: 'VerticalLayout'
    },
    {
        path: '/genralProducts',
        component: lazy(() => import('../../views/admin/genralproduct/GenralProduct')),
        layout: 'VerticalLayout'
    },
    {
        path: '/genralProductsDetail/:id',
        component: lazy(() => import('../../views/admin/genralproduct/components/GenralProductDetail')),
        layout: 'VerticalLayout'
    },
    {
        path: '/CategoryDetail/:id',
        component: lazy(() => import('../../views/restaurants/pages/CategoryDetail')),
        layout: 'VerticalLayout'
    },
    {
        path: '/WineDetail/:id',
        component: lazy(() => import('../../views/admin/wines/WineDetail')),
        layout: 'VerticalLayout'
    },
    {
        path: '/SubcategoryDetail/:id',
        component: lazy(() => import('../../views/admin/subCategory/SubCategoryDetail')),
        layout: 'VerticalLayout'
    }

]

export {DefaultRoute, TemplateTitle, Routes}
