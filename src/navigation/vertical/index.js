import {
    Award,
    Coffee,
    Copy,
    Facebook,
    Grid,
    Home,
    Mail,
    MessageSquare,
    Package,
    PenTool,
    Send,
    User,
    UserCheck,
    Users
} from 'react-feather'

export default [
    {
        id: 'Dashboard',
        title: 'Dashboard',
        icon: <Home size={20}/>,
        navLink: '/dashboard'
    },
    {
        id: 'Employees',
        title: 'Employees',
        icon: <Users size={20}/>,
        navLink: '/employees'
    },
    {
        id: 'Restaurants',
        title: 'Restaurants',
        icon: <Coffee size={20}/>,
        navLink: '/Restaurant'
    },
    {
        id: 'Cuisine',
        title: 'Cuisine',
        icon: <PenTool size={20}/>,
        navLink: '/cuisine'
    },
    {
        id: 'category',
        title: 'Category',
        icon: <Grid size={12}/>,
        navLink: '/dashboard/category'
    },
    {
        id: 'subCategory',
        title: 'SubCategory',
        icon: <Copy size={12}/>,
        navLink: '/subCategory'
    },
    {
        id: 'ingredients',
        title: 'Ingredients',
        icon: <Copy size={12}/>,
        navLink: '/ingredients'
    },
    {
        id: 'General Product',
        title: 'General Product',
        icon: <Package size={20}/>,
        navLink: '/generalProducts'
    },
    {
        id: 'Product',
        title: 'Product',
        icon: <Package size={20}/>,
        navLink: '/products'
    },
    {
        id: 'FaceBookAutoPost',
        title: 'FaceBook Auto Post',
        icon: <Facebook size={20}/>,
        navLink: '/Facebook'
    },
    {
        id: 'Customers',
        title: 'Customers',
        icon: <User size={20}/>,
        navLink: '/Customers'
    },
    {
        id: 'CRMemails',
        title: 'CRM (Emails)',
        icon: <Mail size={20}/>,
        navLink: '/CrmEmails',
        children: [
            {
                id: 'designer',
                title: 'Designer',
                icon: <PenTool size={20}/>,
                navLink: '/designer'
            }
        ]
    },
    {
        id: 'CRMsms',
        title: 'CRM (SMS)',
        icon: <MessageSquare size={20}/>,
        navLink: '/CrmSms'
    },
    {
        id: 'Section',
        title: 'Modifier/Addon',
        icon: <Package size={20}/>,
        navLink: '/section'
    },

    {
        id: 'Wineclub',
        title: 'Wineclub',
        children: [
            {
                id: 'wines',
                title: 'Wines',
                icon: <Award size={20}/>,
                navLink: '/wines'
            },
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
    },
    {
        id: 'Catering',
        title: 'Catering',
        // icon: <Package size={20}/>,
        children: [
            {
                id: 'CateringMenu',
                title: 'Catering Menu',
                icon: <Package size={20}/>,
                navLink: '/cateringMenu'
            },
            {
                id: 'CateringMenuItem',
                title: 'Catering Menu Items',
                icon: <Package size={20}/>,
                navLink: '/cateringMenuItem'
            },
            {
                id: 'Customers',
                title: 'Customers',
                icon: <User size={20}/>,
                navLink: '/cateringCustomers'
            }
        ]
    }
]
export const branchManagerMenu = [
    {
        id: 'Dashboard',
        title: 'Dashboard',
        icon: <Home size={20}/>,
        navLink: '/employeeDashboard'
    },
    {
        header: 'Restaurants'
    }
    
]
