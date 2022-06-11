import { lazy } from 'react'

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
    path: '/about',
    component:lazy(() => import('../../views/about/About')),
    layout: 'BlankLayout'
  },
  {
    path: '/build',
    component:lazy(() => import('../../views/build/Build')),
    layout: 'BlankLayout'
  },
  {
    path: '/ourvalues',
    component:lazy(() => import('../../views/OurValues/OurValues')),
    layout: 'BlankLayout'
  },
  {
    path: '/gallery',
    component:lazy(() => import('../../views/gallery/Gallery'))
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
    path: '/WineClub',
    component: lazy(() => import('../../views/wineShop/WineShop')),
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
  }

]

export { DefaultRoute, TemplateTitle, Routes }
