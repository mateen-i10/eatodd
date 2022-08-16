// ** React Imports
import {Fragment, useRef, useState} from 'react'

// ** Custom Components
import Wizard from '@components/wizard'
import BreadCrumbs from '@components/breadcrumbs'

// ** Steps
import Cart from './steps/Cart'
import Address from './steps/Address'
import Payment from './steps/Payment'
import '@styles/base/pages/app-ecommerce.scss'
// ** Third Party Components
import { ShoppingCart, Home, CreditCard } from 'react-feather'
import Header from "../../shared/header/Header"
import Footer from "../../shared/footer/Footer"

const Checkout = () => {
    // ** Ref & State
    const ref = useRef(null)
    const [stepper, setStepper] = useState(null)

    const newarr = [
        {
            name: "Chicken",
            price: "$30"
        },
        {
            name: "Flafel",
            price: "$50"
        }
    ]

    const steps = [
        {
            id: 'cart',
            title: 'Cart',
            subtitle: 'Your Cart Items',
            icon: <ShoppingCart size={18} />,
            content: (
                <Cart stepper={stepper} data={newarr} />
            )
        },
        {
            id: 'Address',
            title: 'Address',
            subtitle: 'Enter Your Address',
            icon: <Home size={18} />,
            content: <Address stepper={stepper} />
        },
        {
            id: 'payment',
            title: 'Payment',
            subtitle: 'Select Payment Method',
            icon: <CreditCard size={18} />,
            content: <Payment stepper={stepper} />
        }
    ]

    return (
        <Fragment>
            <Header />
            <div>
                <Wizard
                    style={{paddingLeft: 30}}
                    ref={ref}
                    steps={steps}
                    className='checkout-tab-steps'
                    instance={el => setStepper(el)}
                    options={{
                        linear: true
                    }}
                />
            </div>
            <Footer />
        </Fragment>
    )
}

export default Checkout
