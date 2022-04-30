import React from 'react'
import "./Order.css"

const Order = () => {
    return (
        <div className="order-main">
            <div className="unlock-section">
                <img  className="unlock-img" src="https://www.chipotle.com/content/dam/chipotle/global-site-design/en/rewards/icons/points%402x.png" alt="Join Chipotle Rewards. Unlock free Chipotle." />
                <h2  className="loyalty-text">Join EatOMG
                    Rewards. Unlock free EatOMG.</h2>
                <div className="account">
                    <div  className="button button block size-sm type-secondary create-an-account" >
                        <div className="content">
                            <div  aria-label="" className="slot-wrapper">Create an Account</div>
                        </div>
                    </div>
                    <h2   className="unlock-or">OR</h2>
                    <div className="unlock-sign-in">Sign In</div></div>
            </div>

        </div>
    )
}

export default Order
