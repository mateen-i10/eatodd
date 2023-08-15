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
    const usernameArray = userData?.userName?.trim().split(/\s+/)
    //** Vars
    const userAvatar = (userData && userData.avatar) || defaultAvatar
    //** ComponentDidMount
    useEffect(() => {
        if (isUserLoggedIn() !== null) {
            setUserData(JSON.parse(localStorage.getItem('userData')))
        }
    }, [])

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
                {/*          }}>{userData?.name ? usernameArray[0] : (userData && userData['userName']) || ''}</span>*/}
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
                            <Col lg={7} style={{marginTop:12}}>
                                <span style={{fontSize: "1.2rem"}}>{userData?.name ? usernameArray[0] : (userData && userData['userName']) || ''}</span>
                            </Col>
                            <Col lg={3}>
                                <Avatar img={userAvatar} imgHeight='40' imgWidth='40' status='online'/>
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
                <DropdownItem tag={Link} to='/login' onClick={() => dispatch(unAuthorize())}>
                    <Power size={14} className='me-75'/>
                    <span className='align-middle'>Logout</span>
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    )
}

export default UserDropdown
