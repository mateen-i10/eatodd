// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import {
    Row,
    Col,
    Card,
    Form,
    Alert,
    Button,
    CardBody,
    CardTitle,
    CardHeader,
    FormFeedback
} from 'reactstrap'

// ** Custom Components
import InputPasswordToggle from '@components/input-password-toggle'

// ** Third Party Components
import * as yup from 'yup'
import 'cleave.js/dist/addons/cleave-phone.us'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

const SignupSchema = yup.object().shape({
    password: yup.string().min(8).required(),
    confirmPassword: yup
        .string()
        .min(8)
        .oneOf([yup.ref('password'), null], 'Passwords must match')
})

const defaultValues = {
    password: '',
    confirmPassword: ''
}

const SecurityTab = () => {
    // ** Hooks
    const {
        control,
        trigger,
        handleSubmit,
        formState: { errors }
    } = useForm({ defaultValues, resolver: yupResolver(SignupSchema) })

    const onSubmit = data => {
        trigger()
        console.log(data)
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
                            <Col className='mb-2' md={6}>
                                <Controller
                                    id='password'
                                    name='password'
                                    control={control}
                                    render={({ field }) => (
                                        <InputPasswordToggle
                                            label='New Password'
                                            htmlFor='password'
                                            className='input-group-merge'
                                            invalid={errors.password && true}
                                            {...field}
                                        />
                                    )}
                                />
                                {errors.password && <FormFeedback className='d-block'>{errors.password.message}</FormFeedback>}
                            </Col>
                            <Col className='mb-2' md={6}>
                                <Controller
                                    control={control}
                                    id='confirmPassword'
                                    name='confirmPassword'
                                    render={({ field }) => (
                                        <InputPasswordToggle
                                            label='Confirm New Password'
                                            htmlFor='confirmPassword'
                                            className='input-group-merge'
                                            invalid={errors.confirmPassword && true}
                                            {...field}
                                        />
                                    )}
                                />
                                {errors.confirmPassword && (
                                    <FormFeedback className='d-block'>{errors.confirmPassword.message}</FormFeedback>
                                )}
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
