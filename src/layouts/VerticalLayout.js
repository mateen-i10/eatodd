// ** Core Layout Import
// !Do not remove the Layout import
import Layout from '@layouts/VerticalLayout'

// ** Catering Items Array
import navigation, {branchManagerMenu} from '@src/navigation/vertical'
import {isAdmin, isBranchManager} from "../auth/utils"

const VerticalLayout = props => {
    // const [menuData, setMenuData] = useState([])

    // ** For ServerSide navigation
    // useEffect(() => {
    //   axios.get(URL).then(response => setMenuData(response.data))
    // }, [])

    const finalNavigation = isAdmin() ? navigation : isBranchManager() ? branchManagerMenu : []
    return (
        <Layout menuData={finalNavigation} {...props}>
            {props.children}
        </Layout>
    )
}

export default VerticalLayout
