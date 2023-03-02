import '@styles/react/pages/page-authentication.scss'
import { useSkin } from '@hooks/useSkin'
import {Link, useHistory} from 'react-router-dom'
import { Facebook, Twitter, Mail, GitHub } from 'react-feather'
import { Row, Col, CardTitle, CardText, Button } from 'reactstrap'
import icon from '../../assets/images/logo/OMG_logo.png'
import {useEffect, useRef, useState} from "react"
import {FieldTypes} from "../../utility/enums/FieldType"
import {useDispatch, useSelector} from "react-redux"
import {setRequestCompleted} from "../../redux/auth/authentication"
import {register} from "../../redux/auth/actions"
import UILoader from "../../@core/components/ui-loader"
import Joi from "joi-browser"
import MyForm from "../../components/MyForm"

const SignUp = () => {
    const { skin } = useSkin()
    // redux state
    const isRequestCompleted = useSelector(state => state.auth.isRequestCompleted)

    const formModalRef = useRef(null)

    // ** local States
    const [formState, setFormState] = useState({
        firstName: '', lastName: '', userName: '', email: '', password: '', confirmPassword:'', acceptTerms: false
    })
    const [formData] = useState([
        {type:FieldTypes.Text, label: 'First Name', placeholder: 'Enter First Name', name:'firstName', isRequired:true, fieldGroupClasses: 'col-12 mb-1', isFormGroup: false},
        {type:FieldTypes.Text, label: 'Last Name', placeholder: 'Enter Last Name', name:'lastName', isRequired:true, fieldGroupClasses: 'col-12 mb-1', isFormGroup: false},
        {type:FieldTypes.Text, label: 'User Name', placeholder: 'Enter User Name', name:'userName', isRequired:true, fieldGroupClasses: 'col-12 mb-1', isFormGroup: false},
        {type:FieldTypes.Email, label: 'Email', placeholder: 'Enter Email', name:'email', isRequired:true, fieldGroupClasses: 'col-12 mb-1', isFormGroup: false},
        {type:FieldTypes.Password, label: 'Password', placeholder: 'Enter Password', name:'password', isRequired:true, fieldGroupClasses: 'col-12 mb-1', isFormGroup: false},
        {type:FieldTypes.Password, label: 'Confirm Password', placeholder: 'Enter Confirm Password', name:'confirmPassword', isRequired:true, fieldGroupClasses: 'col-12 mb-1', isFormGroup: false}
        // {type:FieldTypes.CheckBox, label: 'I agree to privacy policy & terms', placeholder: '', name:'acceptTerms', isRequired:true, fieldGroupClasses: 'col-12 mb-1', isFormGroup: false}
    ])
    const [isBlock, setBlock] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()

    // ** schema for validations
    const schema = Joi.object({
        firstName: Joi.string().regex(/^[a-z A-Z]+$/).required().error(() => {
            return {
                message: 'First Name is required, Only Alphabets Required.'
            }
        }),
        lastName: Joi.string().regex(/^[a-z A-Z]+$/).required().error(() => {
            return {
                message: 'Last Name is required, Only Alphabets Required.'
            }
        }),
        userName: Joi.string().required().label("User Name"),
        email: Joi.string().required().label("Email"),
        password: Joi.string().required().label("Password"),
        confirmPassword: Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match Password' } } }).label("Confirm Password")
        //acceptTerms: Joi.boolean().required()
    })

    const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
        source = require(`@src/assets/images/pages/${illustration}`).default

    useEffect(() => {
        if (isRequestCompleted) {
            setBlock(false)
            dispatch(setRequestCompleted(false))
        }

    }, [isRequestCompleted])

    const handleSubmit = (event) => {
        event.preventDefault()
        const isError = formModalRef.current.validate(formState)
        if (isError) return

        // call api
        setBlock(true)
        dispatch(register(formState, history))
    }

    return (
        <div className='auth-wrapper auth-cover'>
            <UILoader blocking={isBlock}>
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
                        <MyForm ref={formModalRef}
                                formState={formState}
                                formData={formData}
                                setFormState={setFormState}
                                schema={schema}
                                handleSubmit={handleSubmit}
                                buttonHtml={
                                    <Button color='primary col-12 mt-1'>
                                        Sign up
                                    </Button>
                                }
                        />
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
            </UILoader>
        </div>
    )
}

export default SignUp
