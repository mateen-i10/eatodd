import { useSkin } from '@hooks/useSkin'
import { Link } from 'react-router-dom'
import { Row, Col, CardTitle, CardText, Form, Label, Input, Button } from 'reactstrap'
import '@styles/react/pages/page-authentication.scss'
import {useDispatch, useSelector} from "react-redux"
import {useEffect, useState} from "react"
import {setRequestCompleted} from "../../redux/auth/authentication"
import {forgetPassword} from "../../redux/auth/actions"
import UILoader from "../../@core/components/ui-loader"

const ForgotPassword = () => {
    // redux state
    const isRequestCompleted = useSelector(state => state.auth.isRequestCompleted)
    //local state
    const { skin } = useSkin()
    const  dispatch  = useDispatch()
    const [email, setEmail] = useState('')
    const [isBlock, setBlock] = useState(false)
    useEffect(() => {
        if (isRequestCompleted) {
            setBlock(false)
            dispatch(setRequestCompleted(false))
        }

    }, [isRequestCompleted])

    const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
        source = require(`@src/assets/images/pages/${illustration}`).default
    const onSubmit = (e) => {
        e.preventDefault()
        setBlock(true)
        dispatch(forgetPassword(email))
    }
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
                                <CardTitle tag='h2' className='mb-1'>
                                    Forgot Password? 🔒
                                </CardTitle>
                                <CardText className='mb-2'>Enter your email and we'll send you instructions to reset your password</CardText>
                                <Form className='auth-login-form mt-2' onSubmit={e => onSubmit(e)}>
                                    <div className='mb-1'>
                                        <Label className='form-label' for='login-email'>
                                            Email
                                        </Label>
                                        <Input type='email' value={email} id='login-email' placeholder='john@example.com' name='login-email' autoFocus onChange={e => setEmail(e.target.value)} />
                                    </div>
                                    <Button color='primary' type='submit' block>
                                        Send Email
                                    </Button>
                                </Form>
                                <p className='text-center mt-2'>
                                    <span className='me-25'>Go to sign in page </span>
                                    <Link to='/login'>
                                        <span>Sign in</span>
                                    </Link>
                                </p>
                            </Col>
                        </Col>
                    </Row>
            </div>
        </UILoader>
    )
}

export default ForgotPassword
