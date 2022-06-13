import {
    Archive,
    Box,
    Clipboard, Clock,
    Coffee,
    DollarSign, Facebook,
    Grid,
    Home,
    List,
    Mail,
    Menu, MessageSquare,
    PlusSquare, User,
    UserPlus,
    Users
} from 'react-feather'

export default [
    {
        id: 'Dashboard',
        title: 'Dashboard',
        icon: <Home size={20} />,
        navLink: '/dashboard'
    },
    {
        id: 'Users',
        title: 'Users',
        icon: <Users size={20} />,
        navLink: '/Users'
    },
    {
        id: 'Restaurants',
        title: 'Restaurants',
        icon: <Coffee size={20} />,
        navLink: '/Restaurant'
    },
    {
        id: 'FaceBookAutoPost',
        title: 'FaceBook Auto Post',
        icon: <Facebook size={20} />,
        navLink: '/Facebook'
    },
    {
        id: 'Customers',
        title: 'Customers',
        icon: <User size={20} />,
        navLink: '/Customers'
    },
    {
        id: 'CRMemails',
        title: 'CRM (Emails)',
        icon: <Mail size={20} />,
        navLink: '/CrmEmails'
    },
    {
        id: 'CRMsms',
        title: 'CRM (SMS)',
        icon: <MessageSquare size={20} />,
        navLink: '/CrmSms'
    },
    {
        id: 'Bussiness Details',
        title: 'Bussiness Details',
        icon: <Archive size={20} />,
        navLink: '/CrmSms'
    },
    {
        id: 'Login History',
        title: 'Login History',
        icon: <Clock size={20} />,
        navLink: '/CrmSms'
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
