import { useSkin } from '@hooks/useSkin'
import { Link } from 'react-router-dom'
import {Row, Col, CardTitle, CardText, Button} from 'reactstrap'
import '@styles/react/pages/page-authentication.scss'
import {Fragment, useEffect, useRef, useState} from "react"
import {FieldTypes} from "../../utility/enums/FieldType"
// ** Third Party Components
import Joi from "joi-browser"
import MyForm from "../../components/MyForm"
import queryString from "query-string"
import {useDispatch, useSelector} from "react-redux"
import {setPasswordReset, setRequestCompleted, setTokenVerified} from "../../redux/auth/authentication"
import {resetNewPassword, verifyToken} from "../../redux/auth/actions"
import UILoader from "../../@core/components/ui-loader"


const resetPassword = (props) => {
    // redux state
    const isTokenVerified = useSelector(state => state.auth.isTokenVerified)
    const isRequestCompleted = useSelector(state => state.auth.isRequestCompleted)
    const isPasswordReset = useSelector(state => state.auth.isPasswordReset)

    const { skin } = useSkin()
    const dispatch = useDispatch()
    // getting query string parameters
    const queryStringObj = queryString.parse(props.location.search)

    const formModalRef = useRef(null)

    // ** local States
    const [formState, setFormState] = useState({
        password: '', confirmPassword:''
    })
    const [formData] = useState([
        {type:FieldTypes.Password, label: 'New Password', placeholder: 'Enter Password', name:'password', isRequired:true, fieldGroupClasses: 'col-12 mb-1', isFormGroup: false},
        {type:FieldTypes.Password, label: 'Confirm Password', placeholder: 'Enter Confirm Password', name:'confirmPassword', isRequired:true, fieldGroupClasses: 'col-12 mb-1', isFormGroup: false}
    ])
    const [isBlock, setBlock] = useState(true)
    // ** schema for validations
    const schema = Joi.object({
        password: Joi.string().required().label("Password"),
        confirmPassword: Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match Password' } } }).label("Confirm Password")
    })

    useEffect(() => {
        if (queryStringObj && queryStringObj.email && queryStringObj.token) {
            dispatch(verifyToken(props.location.search))
        } else {
            props.history.replace('/')
        }

    }, [])
    useEffect(() => {
        if (isTokenVerified) {
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
        if (isPasswordReset) {
            dispatch(setPasswordReset(false))
            props.history.replace('/login')
        }

    }, [isTokenVerified, isRequestCompleted, isPasswordReset])
    const handleSubmit = (event) => {
        console.log("formState on submit", formState)
        event.preventDefault()
        const isError = formModalRef.current.validate(formState)
        if (isError) return

        // call api
        setBlock(true)
        dispatch(resetNewPassword(queryStringObj.token, queryStringObj.email, formState.password))
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
                            Welcome to EatOMG! 👋
                        </CardTitle>
                        <CardText className='mb-2'>Please enter new password to access your account </CardText>

                        <MyForm ref={formModalRef}
                                formState={formState}
                                formData={formData}
                                setFormState={setFormState}
                                schema={schema}
                                handleSubmit={handleSubmit}
                                buttonHtml={
                                    <Button.Ripple color='primary' type="submit">Reset Password</Button.Ripple>
                                }
                        />

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

export default resetPassword
