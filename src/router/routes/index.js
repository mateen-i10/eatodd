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
    component:lazy(() => import('../../views/gallery/Gallery')),
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
  },
  {
      path: '/reward',
      component: lazy(() => import('../../views/Reward/Reward')),
      layout: 'BlankLayout'
    }
]

export { DefaultRoute, TemplateTitle, Routes }
