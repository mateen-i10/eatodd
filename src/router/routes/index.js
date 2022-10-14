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
        layout: 'BlankLayout',
        meta: {
            publicRoute: true
        }
    },
    {
        path: '/group-order-menu',
        component: lazy(() => import('../../views/home/components/groupOrderMenu')),
        layout: 'BlankLayout',
        meta: {
            publicRoute: true
        }
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
        layout: 'BlankLayout',
        meta: {
            publicRoute: true
        }
    },
    {
        path: '/catering',
        component: lazy(() => import('../../views/catering/Pages/Catering')),
        layout: 'BlankLayout'
    },
    {
        path: '/cateringMenuOrder/:id',
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
        layout: 'VerticalLayout',
        meta: {
            publicRoute: true
        }
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
        exact: true,
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/dashboard/orders',
        component: lazy(() => import('../../views/restaurants/pages/Orders')),
        layout: 'VerticalLayout',
        exact: true,
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/dashboard/product',
        component: lazy(() => import('../../views/restaurants/pages/product')),
        layout: 'VerticalLayout',
        exact: true,
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/dashboard/category',
        component: lazy(() => import('../../views/admin/Category/Category')),
        layout: 'VerticalLayout',
        exact: true,
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/dashboard/customer',
        component: lazy(() => import('../../views/restaurants/pages/Customer')),
        layout: 'VerticalLayout',
        exact: true,
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/dashboard/inventory/distributor',
        component: lazy(() => import('../../views/restaurants/pages/subPages/Distributor')),
        layout: 'VerticalLayout',
        exact: true,
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/dashboard/inventory/item',
        component: lazy(() => import('../../views/restaurants/pages/subPages/Item')),
        layout: 'VerticalLayout',
        exact: true,
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/dashboard/inventory/recipe',
        component: lazy(() => import('../../views/restaurants/pages/subPages/Recipe')),
        layout: 'VerticalLayout',
        exact: true,
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/dashboard/inventory/category',
        component: lazy(() => import('../../views/restaurants/pages/subPages/Category')),
        layout: 'VerticalLayout',
        exact: true,
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/OmgPlate',
        component: lazy(() => import('../../views/home/options/OmgPlate')),
        layout: 'BlankLayout'
    },
    {
        path: '/order/group/create',
        component: lazy(() => import('../../views/GroupOrder/CreateGroupOrder')),
        layout: 'BlankLayout'
    },
    {
        path: '/order/group/joinGroupOrder',
        component: lazy(() => import('../../views/GroupOrder/JoinGroupOrder')),
        layout: 'BlankLayout'
    },
    {
        path: '/Restaurant',
        component: lazy(() => import('../../views/admin/Restaurant/Restaurant')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/restaurantDetail/:id',
        component: lazy(() => import('../../views/admin/Restaurant/RestaurantDetail')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/Facebook',
        component: lazy(() => import('../../views/admin/FacebookAutoPost/FaceBookAuto')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/AddFacebookPost',
        component: lazy(() => import('../../views/admin/FacebookAutoPost/AddFacebookPostForm')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/Customers',
        component: lazy(() => import('../../views/admin/Customers/Customers')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/employees',
        component: lazy(() => import('../../views/admin/Employee/employee')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/employee/:id',
        component: lazy(() => import('../../views/admin/Employee/employeeDetail')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/ingredients',
        component: lazy(() => import('../../views/admin/Ingredients/Ingredients')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/ingredient/:id',
        component: lazy(() => import('../../views/admin/Ingredients/ingredientsDetail')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/section/:id',
        component: lazy(() => import('../../views/admin/section/sectionDetail')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/section',
        component: lazy(() => import('../../views/admin/section/section')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/sectionItem/:id',
        component: lazy(() => import('../../views/admin/sectionItem/sectionItemDetail')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/sectionItem',
        component: lazy(() => import('../../views/admin/sectionItem/sectionItem')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/cateringMenu/:id',
        component: lazy(() => import('../../views/admin/Catering/cateringMenu/cateringMenuDetail')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/cateringMenu',
        component: lazy(() => import('../../views/admin/Catering/cateringMenu/cateringMenu')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/cateringMenuItem/:id',
        component: lazy(() => import('../../views/admin/Catering/cateringMenuItem/cateringMenuItemDetail')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/cateringMenuItem',
        component: lazy(() => import('../../views/admin/Catering/cateringMenuItem/cateringMenuItem')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/cateringCustomers',
        component: lazy(() => import('../../views/admin/Catering/CateringCutomers/CateringCustomers')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    /*{
        path: '/Customer',
        component: lazy(() => import('../../views/customer/index')),
        layout: 'BlankLayout',
        meta: {
            authRoute: true,
            customerOnly: true
        }
    },*/
    {
        path: '/CrmEmails',
        component: lazy(() => import('../../views/admin/CrmEmails/CrmEmail')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/CrmSms',
        component: lazy(() => import('../../views/admin/CrmSms/CrmSms')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/SechduledSms',
        component: lazy(() => import('../../views/admin/CrmSms/ScheduleSms')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/wine/homepage',
        component: lazy(() => import('../../views/wine/Pages/Homepage')),
        layout: 'BlankLayout'
    },
    {
        path: '/catering/wines',
        component: lazy(() => import('../../views/wine/Pages/wineOrderMenu')),
        layout: 'BlankLayout'
    },
    {
        path: '/BussinessDetails',
        component: lazy(() => import('../../views/admin/BussinessDetails/BussinessDetails')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/BussinessForm',
        component: lazy(() => import('../../views/admin/BussinessDetails/BussinessDetailsForm')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/LoginHistory',
        component: lazy(() => import('../../views/admin/Loghistory/LoginHistory')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/members',
        component: lazy(() => import('../../views/admin/WineClubMembers/Members')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/membershipTypes',
        component: lazy(() => import('../../views/admin/WineClubMembershipTypes/MembershipTypes')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/membershipType/:id',
        component: lazy(() => import('../../views/admin/WineClubMembershipTypes/MembershipTypeDetail')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/subCategory',
        component: lazy(() => import('../../views/admin/subCategory/subcategory')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    /*{
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
    },*/
    {
        path: '/designer',
        component: lazy(() => import('../../views/admin/CrmEmails/Designer')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
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
        layout: 'BlankLayout',
        meta: {
            authRoute: true,
            customerOnly: true
        }
    },
    {
        path: '/checkout',
        component: lazy(() => import('../../views/checkoutpage/CheckOut')),
        layout: 'BlankLayout'
    },
    {
        path: '/confirmOrder',
        component: lazy(() => import('../../views/checkoutpage/steps/OrderConfirmation')),
        layout: 'BlankLayout'
    },
    {
        path: '/cuisine',
        component: lazy(() => import('../../views/admin/cuisine/Cuisine')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/products',
        component: lazy(() => import('../../views/admin/product/Product')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/productsDetail/:id',
        component: lazy(() => import('../../views/admin/product/componenets/ProductDetails')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/generalProducts',
        component: lazy(() => import('../../views/admin/genralproduct/GenralProduct')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/generalProductsDetail/:id',
        component: lazy(() => import('../../views/admin/genralproduct/components/GenralProductDetail')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/CategoryDetail/:id',
        component: lazy(() => import('../../views/admin/Category/CategoryDetail')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/WineDetail/:id',
        component: lazy(() => import('../../views/admin/wines/WineDetail')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/SubcategoryDetail/:id',
        component: lazy(() => import('../../views/admin/subCategory/SubCategoryDetail')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/MealDetail/:id',
        component: lazy(() => import('../../views/customer/components/MealDetail')),
        layout: 'BlankLayout',
        meta: {
            authRoute: true,
            customerOnly: true
        }
    },
    {
        path: '/customerDetails/:id',
        component: lazy(() => import('../../views/admin/Customers/CustomerDetail')),
        layout: 'VerticalLayout',
        meta: {
            authRoute: true,
            adminOnly: true
        }
    },
    {
        path: '/winePayment',
        component: lazy(() => import('../../views/wine/Pages/winePayment')),
        layout: 'BlankLayout',
        meta: {
            authRoute: true,
            customerOnly: true
        }
    },
    {
        path: '/employeeDashboard',
        component: lazy(() => import('../../views/admin/employeDashboard/EmployeDashboard')),
        layout: 'VerticalLayout'
    }
]

export {DefaultRoute, TemplateTitle, Routes}
