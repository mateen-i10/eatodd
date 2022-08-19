import { useSkin } from '@hooks/useSkin'
import { Link } from 'react-router-dom'
import { Row, Col, CardTitle, CardText } from 'reactstrap'
import '@styles/react/pages/page-authentication.scss'
import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {setRequestCompleted} from "../../redux/auth/authentication"
import {resendEmail} from "../../redux/auth/actions"
import UILoader from "../../@core/components/ui-loader"

const verification = () => {
    // redux state
    const isRequestCompleted = useSelector(state => state.auth.isRequestCompleted)
    //local state
    const { skin } = useSkin()
    const  dispatch  = useDispatch()
    const [isBlock, setBlock] = useState(false)
    const email = localStorage.getItem("customerEmail")
    useEffect(() => {
        if (isRequestCompleted) {
            setBlock(false)
            dispatch(setRequestCompleted(false))
        }

    }, [isRequestCompleted])
    const sendEmail = () => {
        setBlock(true)
        dispatch(resendEmail(email))
    }

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
                    <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
                        <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
                            <img className='img-fluid' src={source} alt='Login Cover' />
                        </div>
                    </Col>
                    <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
                        <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
                            <CardTitle tag='h2' className='fw-bold mb-1'>
                                Verify your Email! 📧
                            </CardTitle>
                            <CardText className='mb-2'>
                                You are almost there! We sent an email to {email}.
                            </CardText>
                            <p className="card-text mb-2">
                                Just click on the link in that email to complete your signup.
                            </p>
                            <p>
                                If you don't see it, you may need to <b>check your spam</b> folder.
                            </p>
                            <p>Still can't find the email?</p>
                            <button class="btn btn-primary btn-block" onClick={sendEmail}>
                                Resend Email
                            </button>

                            <p className='mt-2'>
                                <span className='me-25'>Go to login page </span>
                                <Link to='/login'>
                                    <span>Login</span>
                                </Link>
                            </p>
                        </Col>
                    </Col>
                </Row>
        </div>
</UILoader>
    )
}

export default verification
