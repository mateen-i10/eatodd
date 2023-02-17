// ** React Imports
import {Fragment} from 'react'

// ** Reactstrap Imports
import {Button, Card, CardBody, CardHeader, CardTitle, Col, Form, FormFeedback, Row} from 'reactstrap'

// ** Custom Components
import InputPasswordToggle from '@components/input-password-toggle'

// ** Third Party Components
import * as yup from 'yup'
import 'cleave.js/dist/addons/cleave-phone.us'
import {yupResolver} from '@hookform/resolvers/yup'
import {Controller, useForm} from 'react-hook-form'
import httpService, {baseURL} from "../../../utility/http"
import {toast} from "react-toastify"

const showErrors = (field, valueLen, min) => {
    if (valueLen === 0) {
        return `${field} field is required`
    } else if (valueLen > 0 && valueLen < min) {
        return `${field} must be at least ${min} characters`
    } else {
        return ''
    }
}

const defaultValues = {
    newPassword: '',
    currentPassword: ''
}

const SignupSchema = yup.object().shape({
    currentPassword: yup
        .string()
        .min(8, obj => showErrors('Current Password', obj.value.length, obj.min))
        .required(),
    newPassword: yup
        .string()
        .min(8, obj => showErrors('New Password', obj.value.length, obj.min))
        .required()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        )
})

const SecurityTab = () => {
    // ** Hooks
    const {
        control,
        trigger,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({defaultValues, resolver: yupResolver(SignupSchema)})

    console.log(localStorage.getItem("password"), "current user password")
    const onSubmit = (data) => {

        if (data.currentPassword === data.newPassword) {
            toast.error("New Password cant be same as old password")
            return
        }

        if (data.currentPassword !== localStorage.getItem("password")) {
            toast.error("Current Password is Incorrect")
            return
        }

        trigger()
        console.log(data, "msg-----")
        // console.log(data)
        httpService._patch(`${baseURL}Auth/ChangePassword`, {
            oldPassword: data.currentPassword,
            newPassword: data.newPassword
        })
            .then(response => {

                // console.log("response change password", response)
                // success case
                if (response.status === 200 && response.data.statusCode === 200) {
                    toast.success("Password Changed Successfully")
                    localStorage.setItem("password", data.newPassword)
                    return response
                } else {
                    //general Error Action
                    console.log(response, "msg-----")
                    toast.error(response.data.message)
                    return null
                }
            })
        reset()

    }

    return (
        <Fragment>
            <Card>
                <CardHeader className='border-bottom'>
                    <CardTitle tag='h4'>Change Password</CardTitle>
                </CardHeader>
                <CardBody className='pt-2'>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col sm='6' className='mb-1'>
                                <Controller
                                    control={control}
                                    id='currentPassword'
                                    name='currentPassword'
                                    render={({field}) => (
                                        <InputPasswordToggle
                                            label='Current Password'
                                            htmlFor='currentPassword'
                                            className='input-group-merge'
                                            invalid={errors.currentPassword && true}
                                            {...field}
                                        />
                                    )}
                                />
                                {errors.currentPassword && (
                                    <FormFeedback className='d-block'>{errors.currentPassword.message}</FormFeedback>
                                )}
                            </Col>
                            <Col sm='6' className='mb-1'>
                                <Controller
                                    control={control}
                                    id='newPassword'
                                    name='newPassword'
                                    render={({field}) => (
                                        <InputPasswordToggle
                                            label='New Password'
                                            htmlFor='newPassword'
                                            className='input-group-merge'
                                            invalid={errors.newPassword && true}
                                            {...field}
                                        />
                                    )}
                                />
                                {errors.newPassword &&
                                    <FormFeedback className='d-block'>{errors.newPassword.message}</FormFeedback>}
                            </Col>
                            <Col xs={12}>
                                <Button type='submit' color='primary'>
                                    Change Password
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </Fragment>
    )
}

export default SecurityTab
