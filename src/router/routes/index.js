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
        path: '/login',
        component: lazy(() => import('../../views/Login')),
        layout: 'BlankLayout'
    },
    {
        path: '/OmgPlate',
        component: lazy(() => import('../../views/home/options/OmgPlate')),
        layout: 'BlankLayout'
    },
    {
        path: '/OmgSandwhich',
        component: lazy(() => import('../../views/home/options/OmgSandwhich')),
        layout: 'BlankLayout'
    },
    {
        path: '/OmgSalad',
        component: lazy(() => import('../../views/home/options/OmgSalads')),
        layout: 'BlankLayout'
    },
    {
        path: '/OmgFeaturedPlates',
        component: lazy(() => import('../../views/home/options/OmgFeaturedPlates')),
        layout: 'BlankLayout'
    },
    {
        path: '/OmgTacos',
        component: lazy(() => import('../../views/home/options/OmgTacos')),
        layout: 'BlankLayout'
    },
    {
        path: '/menu',
        component: lazy(() => import('../../views/menu/Menu')),
        layout: 'BlankLayout'
    },
    {
        path: '/build',
        component: lazy(() => import('../../views/build/Build')),
        layout: 'BlankLayout'
    },
    {
        path: '/ourvalues',
        component: lazy(() => import('../../views/OurValues/OurValues')),
        layout: 'BlankLayout'
    },
    {
        path: '/gallery',
        component: lazy(() => import('../../views/gallery/Gallery'))
    },
    {
        path: '/EventDetails',
        component: lazy(() => import('../../views/menu/components/EventDetails')),
        layout: 'BlankLayout'
    },
    {
        path: '/LoginPage',
        component: lazy(() => import('../../views/Login')),
        layout: 'BlankLayout'
    },
    {
        path: '/reward',
        component: lazy(() => import('../../views/Reward/Reward')),
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
        path: '/wine/shop',
        component: lazy(() => import('../../views/wine/Pages/Shop')),
        layout: 'BlankLayout'
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
        path: '/home',
        component: lazy(() => import('../../views/home/Home')),
        layout: 'BlankLayout'
    },
    {
        path: '/OmgPlate',
        component: lazy(() => import('../../views/home/options/OmgPlate')),
        layout: 'BlankLayout'
    },
    {
        path: '/OmgSandwhich',
        component: lazy(() => import('../../views/home/options/OmgSandwhich')),
        layout: 'BlankLayout'
    },
    {
        path: '/OmgSalad',
        component: lazy(() => import('../../views/home/options/OmgSalads')),
        layout: 'BlankLayout'
    },
    {
        path: '/OmgFeaturedPlates',
        component: lazy(() => import('../../views/home/options/OmgFeaturedPlates')),
        layout: 'BlankLayout'
    },
    {
        path: '/OmgTacos',
        component: lazy(() => import('../../views/home/options/OmgTacos')),
        layout: 'BlankLayout'
    },
    {
        path: '/menu',
        component: lazy(() => import('../../views/menu/Menu')),
        layout: 'BlankLayout'
    },
    {
        path: '/build',
        component: lazy(() => import('../../views/build/Build')),
        layout: 'BlankLayout'
    },
    {
        path: '/ourvalues',
        component: lazy(() => import('../../views/OurValues/OurValues')),
        layout: 'BlankLayout'
    },
    {
        path: '/gallery',
        component: lazy(() => import('../../views/gallery/Gallery'))
    },
    {
        path: '/EventDetails',
        component: lazy(() => import('../../views/menu/components/EventDetails')),
        layout: 'BlankLayout'
    },
    {
        path: '/LoginPage',
        component: lazy(() => import('../../views/Login')),
        layout: 'BlankLayout'
    },
    {
        path: '/reward',
        component: lazy(() => import('../../views/Reward/Reward')),
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
        path: '/wine/shop',
        component: lazy(() => import('../../views/wine/Pages/Shop')),
        layout: 'BlankLayout'
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
        path: '/Dashboard',
        component: lazy(() => import('../../views/admin/Dashboard')),
        layout: 'VerticalLayout'
    },
    {
        path: '/Users',
        component: lazy(() => import('../../views/Pages/Users')),
        layout: 'VerticalLayout'
    },
    {
        path: '/AddUser',
        component: lazy(() => import('../../views/Pages/AddUserForm')),
        layout: 'VerticalLayout'
    },
    {
        path: '/Restaurant',
        component: lazy(() => import('../../views/Pages/restaurant/Restaurant')),
        layout: 'VerticalLayout'
    },
    {
        path: '/Facebook',
        component: lazy(() => import('../../views/Pages/facebookAutoPost/FaceBookAuto')),
        layout: 'VerticalLayout'
    },
    {
        path: '/AddFacebookPost',
        component: lazy(() => import('../../views/Pages/facebookAutoPost/AddFacebookPostForm')),
        layout: 'VerticalLayout'
    },
    {
        path: '/Customers',
        component: lazy(() => import('../../views/Pages/customers/Customers')),
        layout: 'VerticalLayout'
    },
    {
        path: '/CrmEmails',
        component: lazy(() => import('../../views/Pages/crmEmails/CrmEmail')),
        layout: 'VerticalLayout'
    },
    {
        path: '/CrmSms',
        component: lazy(() => import('../../views/Pages/crmSms/CrmSms')),
        layout: 'VerticalLayout'
    },
    {
        path: '/SechduledSms',
        component: lazy(() => import('../../views/Pages/crmSms/ScheduleSms')),
        layout: 'VerticalLayout'
    },
    {
        path: '/wine/homepage',
        component: lazy(() => import('../../views/wine/Pages/Homepage')),
        layout: 'BlankLayout'
    },
    {
        path: '/BussinessDetails',
        component: lazy(() => import('../../views/Pages/bussinessDetails/BussinessDetails')),
        layout: 'VerticalLayout'
    },
    {
        path: '/BussinessForm',
        component: lazy(() => import('../../views/Pages/bussinessDetails/BussinessDetailsForm')),
        layout: 'VerticalLayout'
    },
    {
        path: '/LoginHistory',
        component: lazy(() => import('../../views/Pages/loghistory/LoginHistory')),
        layout: 'VerticalLayout'
    },
    {
        path: '/members',
        component: lazy(() => import('../../views/Pages/WineClubMembers/Members')),
        layout: 'VerticalLayout'
    }

]

export {DefaultRoute, TemplateTitle, Routes}
