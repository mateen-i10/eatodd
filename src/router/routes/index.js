import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - EatOMG'

// ** Default Route
const DefaultRoute = '/menu'

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
    path: '/EventDetails',
    component: lazy(() => import('../../views/menu/components/EventDetails')),
    layout: 'BlankLayout'
  },
  {
    path: '/LoginPage',
    component: lazy(() => import('../../views/Login')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }
