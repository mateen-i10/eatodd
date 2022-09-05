// ** React Imports
import { Fragment } from 'react'

// ** Billing Components
import BillingPlan from "./BillingPlans"
import PaymentMethods from "./PaymentMethod"

const BillingTab = () => {
    return (
        <Fragment>
            <BillingPlan />
        </Fragment>
    )
}

export default BillingTab
