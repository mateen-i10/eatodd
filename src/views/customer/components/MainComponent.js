// import React, {Fragment} from 'react'
// import UserDashboard from "./UserDashboard"
// import MyOrder from "./MyOrders"
// import ProfileDetails from "./ProfileDetails"
// import ShippingDetails from "./ShippingDetails"
// import BillingPlans from "./BillingPlans"
// import ChangePassword from "./ChangePassword"
// import Logout from "./Logout"
//
// const MainComponent = ({selectedOption}) => {
//     // console.log(selectedOption.category)
//     const showItems = () => {
//         if (selectedOption.category === "dashboard") {
//             return <Fragment>
//                 <UserDashboard/>
//             </Fragment>
//         }
//         if (selectedOption.category === "my_order") {
//             return <Fragment>
//                 <MyOrder/>
//             </Fragment>
//         }
//
//         if (selectedOption.category === "edit_profile") {
//             return <Fragment>
//                 <ProfileDetails/>
//             </Fragment>
//         }
//         if (selectedOption.category === "shipping_details") {
//             return <Fragment>
//                 <ShippingDetails/>
//             </Fragment>
//         }
//         if (selectedOption.category === "billing_detail") {
//             return <Fragment>
//                 <BillingPlans/>
//             </Fragment>
//         }
//         if (selectedOption.category === "change_password") {
//             return <Fragment>
//                 <ChangePassword/>
//             </Fragment>
//         }
//         if (selectedOption.category === "logout") {
//             return <Fragment>
//                 <Logout/>
//             </Fragment>
//         }
//     }
//
//     return (
//         <div> {showItems()}</div>
//     )
//
// }
//
// export default MainComponent
//
