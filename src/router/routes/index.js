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
    path: '/menu',
    component: lazy(() => import('../../views/menu/Menu')),
    layout: 'BlankLayout'
  },
  {
    path: '/EventDetails',
    component: lazy(() => import('../../views/menu/components/EventDetails')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }
