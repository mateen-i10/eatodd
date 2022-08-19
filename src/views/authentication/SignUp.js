import '@styles/react/pages/page-authentication.scss'
import { useSkin } from '@hooks/useSkin'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Mail, GitHub } from 'react-feather'
import InputPasswordToggle from '@components/input-password-toggle'
import { Row, Col, CardTitle, CardText, Form, Label, Input, Button } from 'reactstrap'
import icon from '../../assets/images/logo/OMG_logo.png'

const SignUp = () => {
    const { skin } = useSkin()

    const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
        source = require(`@src/assets/images/pages/${illustration}`).default

    return (
        <div className='auth-wrapper auth-cover'>
            <Row className='auth-inner m-0'>
                <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
                    <img src={icon} style={{ width: '100px'}}/>
                    {/*<h2 className='brand-text text-primary ms-1'>EATOMG</h2>*/}
                </Link>
                <Col className='d-none d-lg-flex align-items-center p-5' lg='6' sm='12'>
                    <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
                        <img className='img-fluid' src={source} alt='Login Cover' />
                    </div>
                </Col>
                <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='6' sm='12'>
                    <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
                        <CardTitle tag='h2' className='fw-bold mb-1'>
                            Welcome to EATOMG! 👋
                        </CardTitle>
                        <CardText className='mb-2'>Please sign-up to your account and start the adventure</CardText>
                        <Form className='auth-login-form mt-2' onSubmit={e => e.preventDefault()}>
                            <Row>
                                <Col md='6' sm='6'>
                                    <div className='mb-1'>
                                        <Label className='form-label' for='firstName'>
                                            First Name
                                        </Label>
                                        <Input type='text' id='firstName' placeholder='john' autoFocus />
                                    </div>
                                </Col>
                                <Col md='6' sm='6'>
                                    <div className='mb-1'>
                                        <Label className='form-label' for='lastName'>
                                            Last Name
                                        </Label>
                                        <Input type='text' id='lastName' placeholder='Wick' autoFocus />
                                    </div>
                                </Col>
                            </Row>
                            <div className='mb-1'>
                                <Label className='form-label' for='userName'>
                                    User Name
                                </Label>
                                <Input type='text' id='userName' placeholder='john Wick' autoFocus />
                            </div>
                            <div className='mb-1'>
                                <Label className='form-label' for='login-email'>
                                    Email
                                </Label>
                                <Input type='email' id='login-email' placeholder='john@example.com' autoFocus />
                            </div>
                            <Row>
                                <Col md='6' sm='6'>
                                    <div className='mb-1'>
                                        <div className='d-flex justify-content-between'>
                                            <Label className='form-label' for='login-password'>
                                                Password
                                            </Label>
                                        </div>
                                        <InputPasswordToggle className='input-group-merge' id='login-password' />
                                    </div>
                                </Col>
                                <Col md='6' sm='6'>
                                    <div className='mb-1'>
                                        <div className='d-flex justify-content-between'>
                                            <Label className='form-label' for='forgot-password'>
                                                Confirm Password
                                            </Label>
                                        </div>
                                        <InputPasswordToggle className='input-group-merge' id='forgot-password' />
                                    </div>
                                </Col>
                            </Row>
                            <div className='form-check mb-1'>
                                <Input type='checkbox' id='remember-me' />
                                <Label className='form-check-label' for='remember-me'>
                                    I agree to privacy policy & terms
                                </Label>
                            </div>
                            <Button color='primary' tag={Link} block to='/dashboard'>
                                Sign up
                            </Button>
                        </Form>
                        <p className='text-center mt-2'>
                            <span className='me-25'>Already have an account? </span>
                            <Link to='/login'>
                                <span>Sign in</span>
                            </Link>
                        </p>
                        <div className='divider my-2'>
                            <div className='divider-text'>or</div>
                        </div>
                        <div className='auth-footer-btn d-flex justify-content-center'>
                            <Button color='facebook'>
                                <Facebook size={14} />
                            </Button>
                            <Button color='twitter'>
                                <Twitter size={14} />
                            </Button>
                            <Button color='google'>
                                <Mail size={14} />
                            </Button>
                            <Button className='me-0' color='github'>
                                <GitHub size={14} />
                            </Button>
                        </div>
                    </Col>
                </Col>
            </Row>
        </div>
    )
}

export default SignUp