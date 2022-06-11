import {Box, Clipboard, DollarSign, Grid, Home, List, Mail, Menu, PlusSquare, UserPlus} from 'react-feather'

export default [
    {
        id: 'Dashboard',
        title: 'Dashboard',
        icon: <Home size={20}/>,
        navLink: '/dashboard'
    },
    {
        id: 'Products',
        title: 'Products',
        icon: <Mail size={20}/>,
        navLink: '/dashboard/home'
    },
    {
        id: 'northave',
        title: 'North Ave',
        // badge: 'light-warning',
        // badgeText: '2',
        children: [
            {
                id: 'orders',
                title: 'Orders',
                icon: <Clipboard size={20}/>,
                navLink: '/dashboard/orders'
            },
            {
                id: 'menuitems',
                title: 'Menu Items',
                icon: <Menu size={12}/>,
                navLink: '/dashboard/menuitems'
            },
            {
                id: 'category',
                title: 'Category',
                icon: <Grid size={12}/>,
                navLink: '/dashboard/category'
            },
            {
                id: 'modifier',
                title: 'Modifier',
                icon: <List size={12}/>,
                navLink: '/dashboard/modifier'
            },
            {
                id: 'addon',
                title: 'Addon',
                icon: <PlusSquare size={12}/>,
                navLink: '/dashboard/addon'
            },
            {
                id: 'promotion',
                title: 'Promotion',
                icon: <DollarSign size={12}/>,
                navLink: '/dashboard/promotion'
            },
            {
                id: 'customer',
                title: 'Customer',
                icon: <UserPlus size={12}/>,
                navLink: '/dashboard/customer'
            },
            {
                id: 'inventory',
                title: 'Inventory',
                icon: <Box size={12}/>,
                navLink: '/dashboard/inventory'
            }
        ]
    },

  {
    id: 'Administrator',
    title: 'Administrator',
    children: [
      {
        id: 'Dashboard',
        title: 'Dashboard',
        icon: <Home size={20} />,
        navLink: '/dashboard'
      },
      {
        id: 'Users',
        title: 'Users',
        icon: <UserPlus size={20} />,
        navLink: '/Users'
      },
      {
        id: 'Restaurants',
        title: 'Restaurants',
        icon: <UserPlus size={20} />,
        navLink: '/Restaurant'
      },
      {
        id: 'FaceBookAutoPost',
        title: 'FaceBook Auto Post',
        icon: <UserPlus size={20} />,
        navLink: '/Facebook'
      },
      {
        id: 'Customers',
        title: 'Customers',
        icon: <UserPlus size={20} />,
        navLink: '/Customers'
      },
      {
        id: 'CRMemails',
        title: 'CRM (Emails)',
        icon: <UserPlus size={20} />,
        navLink: '/CrmEmails'
      },
      {
        id: 'CRMsms',
        title: 'CRM (SMS)',
        icon: <UserPlus size={20} />,
        navLink: '/CrmSms'
      },
      {
        id: 'Bussiness Details',
        title: 'Bussiness Details',
        icon: <UserPlus size={20} />,
        navLink: ''
      },
      {
        id: 'Login History',
        title: 'Login History',
        icon: <UserPlus size={20} />,
        navLink: ''
      }
    ]
  },
  {
    id: 'Products',
    title: 'Products',
    icon: <Mail size={20} />,
    navLink: '/home'
  }
]
