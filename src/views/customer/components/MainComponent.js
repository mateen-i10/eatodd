import React, {Fragment} from 'react'
import UserDashboard from "./UserDashboard"
import MyOrder from "./MyOrders"
import EditProfile from "./EditProfile"
import ShippingDetails from "./ShippingDetails"
import BillingDetails from "./BillingDetails"
import ChangePassword from "./ChangePassword"
import Logout from "./Logout"

const MainComponent = ({selectedOption}) => {
    // console.log(selectedOption.category)
    const showItems = () => {
        if (selectedOption.category === "dashboard") {
            return <Fragment>
                <UserDashboard/>
            </Fragment>
        }
        if (selectedOption.category === "my_order") {
            return <Fragment>
                <MyOrder/>
            </Fragment>
        }

        if (selectedOption.category === "edit_profile") {
            return <Fragment>
                <EditProfile/>
            </Fragment>
        }
        if (selectedOption.category === "shipping_details") {
            return <Fragment>
                <ShippingDetails/>
            </Fragment>
        }
        if (selectedOption.category === "billing_detail") {
            return <Fragment>
                <BillingDetails/>
            </Fragment>
        }
        if (selectedOption.category === "change_password") {
            return <Fragment>
                <ChangePassword/>
            </Fragment>
        }
        if (selectedOption.category === "logout") {
            return <Fragment>
                <Logout/>
            </Fragment>
        }
    }

    return (
        <div> {showItems()}</div>
    )

}

export default MainComponent

