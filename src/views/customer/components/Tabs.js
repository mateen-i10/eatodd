// ** Reactstrap Imports
// import {Nav, NavItem, NavLink} from 'reactstrap'
import {Button} from 'reactstrap'
// import React from "react"
// ** Icons Imports
// import {Bell, Bookmark, Link, Lock, User} from 'react-feather'

const Tabs = ({toggleTab}) => {
    return (
        <div className='demo-inline-spacing '>
            <Button.Ripple color='flat-secondary' className="fs-4 fw-bolder " onClick={() => toggleTab('1')}>Edit
                Profile</Button.Ripple>
            <Button.Ripple color='flat-secondary' className="fs-4 fw-bolder" onClick={() => toggleTab('2')}>Change
                Password</Button.Ripple>
            <Button.Ripple color='flat-secondary' className="fs-4 fw-bolder" onClick={() => toggleTab('3')}>Billing and
                Plans</Button.Ripple>
            <Button.Ripple color='flat-secondary' className="fs-4 fw-bolder" onClick={() => toggleTab('4')}>My
                Order</Button.Ripple>
            <Button.Ripple color='flat-secondary' className="fs-4 fw-bolder" onClick={() => toggleTab('5')}>Shipping
                Detail</Button.Ripple>
            {/*<Button.Ripple color='flat-secondary'>Info</Button.Ripple>*/}
            {/*<Button.Ripple color='flat-secondary'>Dark</Button.Ripple>*/}
        </div>

        // <Nav pills className='mb-2'>
        //     <NavItem>
        //         <NavLink active={activeTab === '1'} onClick={() => toggleTab('1')}>
        //             <User size={18} className='me-50'/>
        //             <span className='fw-bold'>Account</span>
        //         </NavLink>
        //     </NavItem>
        //     <NavItem>
        //         <NavLink active={activeTab === '2'} onClick={() => toggleTab('2')}>
        //             <Lock size={18} className='me-50'/>
        //             <span className='fw-bold'>Security</span>
        //         </NavLink>
        //     </NavItem>
        //     <NavItem>
        //         <NavLink active={activeTab === '3'} onClick={() => toggleTab('3')}>
        //             <Bookmark size={18} className='me-50'/>
        //             <span className='fw-bold'>Billing & Plans</span>
        //         </NavLink>
        //     </NavItem>
        //     <NavItem>
        //         <NavLink active={activeTab === '4'} onClick={() => toggleTab('4')}>
        //             <Bell size={18} className='me-50'/>
        //             <span className='fw-bold'>Notifications</span>
        //         </NavLink>
        //     </NavItem>
        //     <NavItem>
        //         <NavLink active={activeTab === '5'} onClick={() => toggleTab('5')}>
        //             <Link size={18} className='me-50'/>
        //             <span className='fw-bold'>Connections</span>
        //         </NavLink>
        //     </NavItem>
        // </Nav>
    )
}

export default Tabs
