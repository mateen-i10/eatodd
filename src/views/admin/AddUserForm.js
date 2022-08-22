// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import {
    Row,
    Col,
    Modal,
    Input,
    Label,
    Button,
    ModalBody,
    ModalHeader,
    FormFeedback
} from 'reactstrap'

// ** Third Party Components
import Select from 'react-select'
import { User, Check, X } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import Link from "react-router-dom/es/Link"

const roleOptions = [
    { value: 'employee', label: 'Employee' },
    { value: 'branch manager', label: 'Branch Manager' }
]

const BranchOptions = [
    { value: 'forklift', label: 'Forklift' },
    { value: 'amedicano', label: 'Amedicano' },
    { value: 'north eve', label: 'North Eve' },
    { value: 'vab buren', label: 'Vab Buren' },
    { value: 'catering', label: 'Catering' },
    { value: 'french market', label: 'French Market' }
]

const defaultValues = {
    firstName: 'Bob',
    lastName: 'Barton',
    username: 'bob.dev'
}

const AddUserExample = (props) => {
    // ** Hooks
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({ defaultValues })

    const onSubmit = data => {
        console.log('data', data)
        // if (Object.values(data).every(field => field.length > 0)) {
        //     return null
        // } else {
        //     for (const key in data) {
        //         if (data[key].length === 0) {
        //             setError(key, {
        //                 type: 'manual'
        //             })
        //         }
        //     }
        // }
    }

    return (
        <Fragment>

            <Modal isOpen={props.isShow} className='modal-dialog-centered modal-lg'>
                <ModalHeader className='bg-transparent' toggle={() => props.setShow(!props.isShow)}></ModalHeader>
                <ModalBody className='mx-50 pb-5'>
                    <div className='text-center mb-2'>
                        <h1 className='mb-1'>Add a New User</h1>
                    </div>
                    <Row tag='form' className='gy-1 pt-75' onSubmit={handleSubmit(onSubmit)}>
                        <Col md={6} xs={12}>
                            <Label className='form-label' for='lastName'>
                                Name
                            </Label>
                            <Controller
                                name='Name'
                                control={control}
                                render={({ field }) => (
                                    <Input {...field} id='name' type='text' value={props.data.full_name} placeholder='jane' />
                                )}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <Label className='form-label'>
                                Email
                            </Label>
                            <Controller
                                name='lastName'
                                control={control}
                                render={({ field }) => (
                                    <Input {...field} value={props.data.email} id='lastName' placeholder='Doe' />
                                )}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <Label className='form-label'>
                                Role:
                            </Label>
                            <Select
                                id='status'
                                isClearable={false}
                                className='react-select'
                                classNamePrefix='select'
                                options={roleOptions}
                                theme={selectThemeColors}
                                defaultValue={roleOptions[0]}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <Label className='form-label' for='Branch'>
                                Branch
                            </Label>
                            <Select
                                id='Branch'
                                isClearable={false}
                                className='react-select'
                                classNamePrefix='select'
                                options={BranchOptions}
                                theme={selectThemeColors}
                                defaultValue={BranchOptions[0]}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <Label className='form-label'>
                                Password
                            </Label>
                            <Controller
                                control={control}
                                name='password'
                                render={({ field }) => {
                                    return (
                                        <Input
                                            {...field}
                                            id='password'
                                            placeholder='password'
                                            type='password'
                                            value={field.value}
                                            invalid={errors.firstName && true}
                                        />
                                    )
                                }}
                            />
                            {errors.firstName && <FormFeedback>Please enter a valid First Name</FormFeedback>}
                        </Col>
                        <Col xs={12} className='text-center mt-2 pt-50'>
                            <Button type='submit' className='me-1' color='primary' onClick={() => props.setShow(!props.isShow)}>
                                Submit
                            </Button>
                            <Button type='submit' color='secondary' onClick={() => props.setShow(!props.isShow)}>
                                Discard
                            </Button>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </Fragment>
    )
}

export default AddUserExample