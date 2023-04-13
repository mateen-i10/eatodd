import { useSkin } from '@hooks/useSkin'
import {Link, useHistory, useLocation} from 'react-router-dom'
// import { Facebook, Twitter, Mail, GitHub } from 'react-feather'
import InputPasswordToggle from '@components/input-password-toggle'
import {Row, Col, CardTitle, CardText, Form, Label, Input, Button, FormFeedback} from 'reactstrap'
import '@styles/react/pages/page-authentication.scss'
import icon from '../../assets/images/logo/OMG_logo.png'
import {useDispatch, useSelector} from "react-redux"
import {useEffect, useState} from "react"
import * as yup from "yup"
import {Controller, useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import UILoader from "../../@core/components/ui-loader"
import {setRequestCompleted} from "../../redux/auth/authentication"
import {login} from "../../redux/auth/actions"

const LoginCover = () => {
    const isRequestCompleted = useSelector(state => state.auth.isRequestCompleted)

    const { skin } = useSkin()
    const dispatch = useDispatch()
    const history = useHistory()
    const {state} = useLocation()
    const  [rememberMe, setRememberMe] = useState(false)
    const [isBlock, setBlock] = useState(false)

    const LoginSchema = yup.object().shape({
        email: yup.string().required(),
        password: yup.string().required()
    })

    // ** Hooks
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({ mode: 'onChange', resolver: yupResolver(LoginSchema) })

    const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
        source = require(`@src/assets/images/pages/${illustration}`).default
    useEffect(() => {
        if (isRequestCompleted) {
            setBlock(false)
            dispatch(setRequestCompleted(false))
        }

    }, [isRequestCompleted])
    const onSubmit = () => {
        if (errors && Object.keys(errors).length !== 1) {
            const {email, password} = control._fields
            localStorage.setItem("password", password._f.value)
            setBlock(true)
            dispatch(login(email._f.value, password._f.value, rememberMe, history, state && state.returnURL ? state.returnURL : null))
        }
    }

    return (
        <UILoader blocking={isBlock}>
        <div className='auth-wrapper auth-cover'>
                <Row className='auth-inner m-0'>
                <Link className='brand-logo' to='/home'>
                    <img src={icon} style={{ width: '100px'}} alt='EATOMG'/>
                    {/*<h2 className='brand-text text-primary ms-1' style={{ paddingTop:'10px'}}>EATOMG</h2>*/}
                </Link>
                <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
                    <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
                        <img className='img-fluid' src={source} alt='Login Cover' />
                    </div>
                </Col>
                <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
                    <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
                        <CardTitle tag='h2' className='fw-bold mb-1'>
                            <img src={icon} style={{ width: '100px'}} alt='EATOMG'/>
                        </CardTitle>
                        <CardText className='mb-2'>Please Sign-In to your Account and start the adventure</CardText>
                        <Form className='auth-login-form mt-2' onSubmit={handleSubmit(onSubmit)}>
                            <div className='mb-1'>
                                <Label className='form-label' for='login-email'>
                                    Email
                                </Label>
                                <Controller
                                    id='login-email'
                                    name='email'
                                    defaultValue=''
                                    control={control}
                                    render={({ field }) => <Input type='email' {...field} placeholder='john@example.com' invalid={errors.email && true} />}
                                />
                                {errors.email && <FormFeedback>{errors.email.message}</FormFeedback>}
                                {/* <Input type='email' value={email} onChange={e => setEmail(e.target.value)} id='login-email' placeholder='john@example.com' autoFocus />*/}
                            </div>
                            <div className='mb-1'>
                                <div className='d-flex justify-content-between'>
                                    <Label className='form-label' for='login-password'>
                                        Password
                                    </Label>
                                    <Link to='/forgotPassword'>
                                        <small>Forgot Password?</small>
                                    </Link>
                                </div>
                                <Controller
                                    id='login-password'
                                    name='password'
                                    defaultValue=''
                                    control={control}
                                    render={({ field }) => <InputPasswordToggle className='input-group-merge' autoFocus {...field} invalid={errors.password && true} />}
                                />
                                {errors.password && <FormFeedback>{errors.password.message}</FormFeedback>}
                                {/*<InputPasswordToggle value={password} onChange={e => setPassword(e.target.value)} className='input-group-merge' id='login-password' />*/}
                            </div>
                            <div className='form-check mb-1'>
                                <Input type='checkbox' id='remember-me' value={rememberMe} onChange={e => setRememberMe(e.target.checked)} />
                                <Label className='form-check-label' for='remember-me'>
                                    Remember Me
                                </Label>
                            </div>
                            <Button color='primary' block type= 'submit'>
                                Sign in
                            </Button>
                        </Form>
                        <p className='text-center mt-2'>
                            <span className='me-25'>New on our platform?</span>
                            <Link to='/signup'>
                                <span>Create an account</span>
                            </Link>
                        </p>
                        {/*<div className='divider my-2'>*/}
                        {/*    <div className='divider-text'>or</div>*/}
                        {/*</div>*/}
                        {/*<div className='auth-footer-btn d-flex justify-content-center'>*/}
                        {/*    <Button color='facebook'>*/}
                        {/*        <Facebook size={14} />*/}
                        {/*    </Button>*/}
                        {/*    <Button color='twitter'>*/}
                        {/*        <Twitter size={14} />*/}
                        {/*    </Button>*/}
                        {/*    <Button color='google'>*/}
                        {/*        <Mail size={14} />*/}
                        {/*    </Button>*/}
                        {/*    <Button className='me-0' color='github'>*/}
                        {/*        <GitHub size={14} />*/}
                        {/*    </Button>*/}
                        {/*</div>*/}
                    </Col>
                </Col>
            </Row>
        </div>
        </UILoader>
    )
}

export default LoginCover
