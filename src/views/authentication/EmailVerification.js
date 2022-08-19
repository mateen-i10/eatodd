import { useSkin } from '@hooks/useSkin'
import { Link } from 'react-router-dom'
import { Row, Col, CardTitle} from 'reactstrap'
import '@styles/react/pages/page-authentication.scss'
import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import { setRequestCompleted, setTokenVerified} from "../../redux/auth/authentication"
import {verifyEmail} from "../../redux/auth/actions"
import queryString from "query-string"
import UILoader from "../../@core/components/ui-loader"

const EmailVerification = (props) => {
    // redux state
    const isRequestCompleted = useSelector(state => state.auth.isRequestCompleted)
    const isTokenVerified = useSelector(state => state.auth.isTokenVerified)

    //local state
    const { skin } = useSkin()
    const  dispatch  = useDispatch()
    const [isBlock, setBlock] = useState(false)
    // getting query string parameters
    const queryStringObj = queryString.parse(props.location.search)

    useEffect(() => {
        if (queryStringObj && queryStringObj.email && queryStringObj.token) {
            dispatch(verifyEmail(props.location.search))
        } else {
            props.history.replace('/')
        }

    }, [])
    useEffect(() => {
        if (isTokenVerified && isTokenVerified === true) {
            setBlock(false)
            dispatch(setTokenVerified(null))
        } else if (isTokenVerified === false) {
            dispatch(setTokenVerified(null))
            props.history.replace('/')
        }
        if (isRequestCompleted) {
            dispatch(setRequestCompleted(false))
            setBlock(false)
        }

    }, [isTokenVerified, isRequestCompleted])

    const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
        source = require(`@src/assets/images/pages/${illustration}`).default

    return (
        <UILoader blocking={isBlock}>
            <div className='auth-wrapper auth-cover'>
                <Row className='auth-inner m-0'>
                        <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
                            <img src={require('@src/assets/images/logo/logo.png').default} style={{height: "28px"}}/>
                            <h2 className='brand-text text-primary ms-1'>EatOMG</h2>
                        </Link>
                        <Col className='d-none d-lg-flex align-items-center p-5' lg='7' sm='12'>
                            <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
                                <img className='img-fluid' src={source} alt='Login Cover' />
                            </div>
                        </Col>
                        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='5' sm='12'>
                            <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
                                <CardTitle tag='h2' className='fw-bold mb-1'>
                                    Email Verification 📧
                                </CardTitle>
                                {!isBlock && <>
                                    <h3 className='mb-2'>
                                        Your email has been verified!
                                    </h3>
                                    <p>Now you can login to your account.</p>
                                    <p className=' mt-2'>
                                        <span className='me-25'>Go to login page </span>
                                        <Link to='/login'>
                                            <span>Login</span>
                                        </Link>
                                    </p>
                                </>}
                            </Col>
                        </Col>
                    </Row>
            </div>
        </UILoader>
    )
}

export default EmailVerification
