import { Mail, Home, UserPlus } from 'react-feather'

export default [
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
