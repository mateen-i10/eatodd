// ** React Imports
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Utils
// import { isUserLoggedIn } from '@utils'
// ** Third Party Components
import {Power, User} from 'react-feather'

// ** Reactstrap Imports
import {Col, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown} from 'reactstrap'

// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg'
import {isCustomer, isUserLoggedIn} from "../../../../auth/utils"
import {unAuthorize} from "../../../../redux/auth/actions"
import {useDispatch} from "react-redux"

const UserDropdown = () => {
    // ** State
    const [userData, setUserData] = useState(null)
    const dispatch = useDispatch()

    //** ComponentDidMount
    useEffect(() => {
        if (isUserLoggedIn() !== null) {
            setUserData(JSON.parse(localStorage.getItem('userData')))
        }
    }, [])
    const usernameArray = userData?.userName.trim().split(/\s+/)

    //** Vars
    const userAvatar = (userData && userData.avatar) || defaultAvatar

    return (
        <UncontrolledDropdown tag='li' className='dropdown-user nav-item '>
            <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link ' onClick={e => e.preventDefault()}>
                {/*<div className='user-nav d-sm-flex d-none'>*/}
                {/*    <div className="d-inline-block">*/}
                {/*    <span className='user-name fw-bold text-uppercase'*/}
                {/*          style={{*/}
                {/*              marginRight: 15,*/}
                {/*              marginTop: 12,*/}
                {/*              fontSize: "1.2rem"*/}
                {/*          }}>{userData?.name.length > 12 ? usernameArray[0].toUpperCase() : (userData && userData['userName'].toUpperCase()) || ''}</span>*/}
                {/*        <span style={{*/}
                {/*            marginRight: 8,*/}
                {/*            fontSize: ".7rem"*/}
                {/*        }} className='user-status d-none'>{(userData && userData.role) || ''}</span>*/}
                {/*        <Avatar style={{*/}
                {/*            marginTop: 3*/}
                {/*        }} img={userAvatar} imgHeight='40' imgWidth='40' status='online'/></div>*/}
                {/*</div>*/}

                <div className='user-nav d-sm-flex d-none'>
                    <section>
                        <Row>
                            <Col lg={3} style={{padding:0}}>
                                <Avatar style={{marginTop:3}} img={userAvatar} imgHeight='40' imgWidth='40' status='online'/>
                            </Col>
                            <Col lg={7} style={{marginTop:15, marginRight:10, padding:0, marginLeft:-40}}>
                                <span style={{marginRight: 50, marginLeft: 50, fontSize: "1.2rem", fontWeight: 'bold'}}>{userData?.name.length > 12 ? usernameArray[0].toUpperCase() : (userData && userData['userName'].toUpperCase()) || ''}</span>
                            </Col>
                        </Row>
                    </section>
                </div>

            </DropdownToggle>
            <DropdownMenu end>
                <DropdownItem tag='a' href= {`${isCustomer() ? '/user' : '/dashboard' }`}>
                    <User size={14} className='me-75'/>
                    <span className='align-middle'>Profile</span>
                </DropdownItem>
                {/* <DropdownItem tag='a' href='/apps/email' onClick={e => e.preventDefault()}>
                    <Mail size={14} className='me-75'/>
                    <span className='align-middle'>Inbox</span>
                </DropdownItem>
                <DropdownItem tag='a' href='/apps/todo' onClick={e => e.preventDefault()}>
                    <CheckSquare size={14} className='me-75'/>
                    <span className='align-middle'>Tasks</span>
                </DropdownItem>
                <DropdownItem tag='a' href='/apps/chat' onClick={e => e.preventDefault()}>
                    <MessageSquare size={14} className='me-75'/>
                    <span className='align-middle'>Chats</span>
                </DropdownItem>
                <DropdownItem divider/>
                <DropdownItem tag='a' href='/pages/account-settings' onClick={e => e.preventDefault()}>
                    <Settings size={14} className='me-75'/>
                    <span className='align-middle'>Settings</span>
                </DropdownItem>
                <DropdownItem tag='a' href='/pages/pricing' onClick={e => e.preventDefault()}>
                    <CreditCard size={14} className='me-75'/>
                    <span className='align-middle'>Pricing</span>
                </DropdownItem>
                <DropdownItem tag='a' href='/pages/faq' onClick={e => e.preventDefault()}>
                    <HelpCircle size={14} className='me-75'/>
                    <span className='align-middle'>FAQ</span>
                </DropdownItem>*/}
                <DropdownItem tag={Link} to='/login' onClick={() => dispatch(unAuthorize())}>
                    <Power size={14} className='me-75'/>
                    <span className='align-middle'>Logout</span>
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    )
}

export default UserDropdown
