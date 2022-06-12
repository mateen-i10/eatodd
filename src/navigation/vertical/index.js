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
                children: [
                    {
                        id: 'item',
                        title: 'Item',
                        icon: <Clipboard size={20}/>,
                        navLink: '/dashboard/inventory/item'
                    },
                    {
                        id: 'category',
                        title: 'Category',
                        icon: <Clipboard size={20}/>,
                        navLink: '/dashboard/inventory/category'
                    },
                    {
                        id: 'distributor',
                        title: 'Distributor',
                        icon: <Clipboard size={20}/>,
                        navLink: '/dashboard/inventory/distributor'
                    },
                    {
                        id: 'recipe',
                        title: 'Recipe',
                        icon: <Clipboard size={20}/>,
                        navLink: '/dashboard/inventory/recipe'
                    }
                ]
            }
        ]
    }

]
