// ** Core Layout Import
// !Do not remove the Layout import
import Layout from '@layouts/VerticalLayout'

// ** Catering Items Array
import navigation, {branchManagerMenu} from '@src/navigation/vertical'
import {isAdmin, isBranchManager} from "../auth/utils"
import useAPI from "../utility/customHooks/useAPI"
import {useEffect, useState} from "react"
import {Award, Mail, Send, UserCheck} from "react-feather"

const VerticalLayout = props => {
    const [menuData, setMenuData] = useState([...branchManagerMenu])

    // ** For ServerSide navigation
    const [isLoading, response] = useAPI(isBranchManager() ? 'EmployeeDashboard/GetRestaurantList?PageIndex=1&PageSize=12' : '', 'get')

    useEffect(() => {
        if (response && !isLoading && response.statusCode === 200) {
            const final = response.data.map((item) => {
                return {
                    key: `${item.id}`,
                    id: `${item.name.trim()}`,
                    title: `${item.name}`,
                    children: [
                        {
                            id: 'Details',
                            title: 'Details',
                            icon: <Award size={20}/>
                            // navLink: '/Details'
                        },
                        {
                            id: 'Orders',
                            title: 'Orders',
                            icon: <UserCheck size={20}/>,
                            navLink: `/employeeDashboard/orders/${item.id}`
                        },
                        {
                            id: 'Products',
                            title: 'Products',
                            icon: <UserCheck size={20}/>,
                            navLink: `/employeeDashboard/product/${item.id}`
                        },
                        {
                            id: 'Customers',
                            title: 'Customers',
                            icon: <Mail size={20}/>,
                            navLink: `/employeeDashboard/customer/${item.id}`
                        },
                        {
                            id: 'Inventory',
                            title: 'Inventory',
                            icon: <Send size={20}/>,
                            navLink: `/employeeDashboard/inventory/${item.id}`
                        }
                    ]
                }
            })
            setMenuData([...branchManagerMenu, ...final])
        }

    }, [response])
    return (
        <Layout menuData={isAdmin() ? navigation : isBranchManager() ? menuData : []} {...props}>
            {props.children}
        </Layout>
    )
}

export default VerticalLayout
