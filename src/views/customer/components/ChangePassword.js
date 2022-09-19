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
})

const SecurityTab = () => {
    // ** Hooks
    const {
        control,
        trigger,
        handleSubmit,
        formState: {errors}
    } = useForm({defaultValues, resolver: yupResolver(SignupSchema)})

    const onSubmit = data => {
        trigger()
        // console.log(data)
        httpService._patch(`${baseURL}Auth/ChangePassword`, {
            oldPassword: data.currentPassword,
            newPassword: data.newPassword
        })
            .then(response => {
                console.log("response change password", response)
                // success case
                // if (response.status === 200 && response.data.statusCode === 200) {
                //     return response
                // } else {
                //     //general Error Action
                //     toast.error(response.data.message)
                //     return null
                // }
            })
        
    }

    return (
        <Fragment>
            <Card>
                <CardHeader>
                    <CardTitle tag='h4'>Change Password</CardTitle>
                </CardHeader>
                <CardBody>
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
