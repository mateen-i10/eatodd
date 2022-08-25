import {
    Archive,
    Box,
    Clipboard,
    Clock,
    Coffee,
    DollarSign,
    Facebook,
    Grid,
    Home,
    List,
    Mail,
    Menu,
    MessageSquare, PenTool,
    PlusSquare, Send,
    User, UserCheck,
    UserPlus,
    Users, Volume, Package
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
        id: 'Cuisine',
        title: 'Cuisine',
        icon: <PenTool size={20} />,
        navLink: '/cuisine'
    },
    {
        id: 'Product',
        title: 'Product',
        icon: <Package size={20} />,
        navLink: '/products'
    },
    {
        id: 'Genral Product',
        title: 'Genral Product',
        icon: <Package size={20} />,
        navLink: '/genralProducts'
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
        navLink: '/CrmEmails',
        children: [
            {
                id: 'designer',
                title: 'Designer',
                icon: <PenTool size={20} />,
                navLink: '/designer'
            }
        ]
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
        navLink: '/BussinessDetails'
    },
    {
        id: 'Login History',
        title: 'Login History',
        icon: <Clock size={20} />,
        navLink: '/LoginHistory'
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
                icon: <Clipboard size={20} />,
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
                        id: 'items',
                        title: 'Items',
                        icon: <Clipboard size={20}/>,
                        navLink: '/dashboard/inventory/item'
                    },
                    {
                        id: 'distributor',
                        title: 'Distributor',
                        icon: <Clipboard size={20}/>,
                        navLink: '/dashboard/inventory/distributor'
                    },
                    {
                        id: 'category',
                        title: 'Category',
                        icon: <Clipboard size={20}/>,
                        navLink: '/dashboard/inventory/category'
                    },
                    {
                        id: 'Recipe',
                        title: 'recipe',
                        icon: <Clipboard size={20}/>,
                        navLink: '/dashboard/inventory/recipe'
                    }
                ]
            }
        ]
    },
    {
        id: 'Wineclub',
        title: 'Wineclub',
        children: [
            {
                id: 'Members',
                title: 'Members',
                icon: <UserCheck size={20}/>,
                navLink: '/members'
            },
            {
                id: 'Membershiptype',
                title: 'Membership Types',
                icon: <UserCheck size={20}/>,
                navLink: '/membershipTypes'
            },
            {
                id: 'wine-Promotions',
                title: 'Promotions',
                icon: <Volume size={20}/>,
                navLink: '/promotions'
            },
            {
                id: 'crmEmail',
                title: 'CRM (Email)',
                icon: <Mail size={20}/>,
                navLink: '/CrmEmails'
            },
            {
                id: 'crmSms',
                title: 'CRM (Sms)',
                icon: <Send size={20}/>,
                navLink: '/CrmSms'
            }
        ]
    }
]