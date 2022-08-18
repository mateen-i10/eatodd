// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import {
    Card,
    Row,
    Col,
    Modal,
    Input,
    Label,
    Button,
    CardBody,
    CardText,
    CardTitle,
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
    { value: 'flatdiscpunt', label: 'Flat Discpunt' },
    { value: 'percentdiscpunt', label: 'Percent Discpunt' }
]

const BranchOptions = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' }
]

const defaultValues = {
    firstName: 'Bob',
    lastName: 'Barton',
    username: 'bob.dev'
}

const AddPromotion = (props) => {
    // ** Hooks
    const {
        control,
        setError,
        handleSubmit,
        formState: { }
    } = useForm({ defaultValues })

    const onSubmit = data => {
        if (Object.values(data).every(field => field.length > 0)) {
            return null
        } else {
            for (const key in data) {
                if (data[key].length === 0) {
                    setError(key, {
                        type: 'manual'
                    })
                }
            }
        }
    }

    return (
        <Fragment>
            <Modal isOpen={props.isShow} className='modal-dialog-centered modal-lg'>
                    <ModalHeader className='bg-transparent' toggle={() => props.setShow(!props.Show)}></ModalHeader>
                <ModalBody className='mx-50 pb-5'>
                    <div className='text-center mb-2'>
                        <h1 className='mb-1'>Add a New Promotion</h1>
                    </div>
                    <Row tag='form' className='gy-1 pt-75' onSubmit={handleSubmit(onSubmit)}>
                        <Col md={6} xs={12}>
                            <Label className='form-label'>
                                Name
                            </Label>
                            <Controller
                                name='Name'
                                control={control}
                                render={({ field }) => (
                                    <Input {...field} id='name' placeholder='jane' value={props.data.full_name} />
                                )}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <Label className='form-label'>
                                Code
                            </Label>
                            <Controller
                                name='price'
                                control={control}
                                render={({ field }) => (
                                    <Input {...field} id='code' placeholder='Code' value={props.data.code}/>
                                )}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <Label className='form-label' for='status'>
                                Type
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
                            <Label className='form-label'>
                                Amount
                            </Label>
                            <Controller
                                name='Amount'
                                control={control}
                                render={({ field }) => (
                                    <Input {...field} id='Amount' placeholder='Amount' value={props.data.amount} />
                                )}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <Label className='form-label' for='active'>
                                Active
                            </Label>
                            <Select
                                id='active'
                                isClearable={false}
                                className='react-select'
                                classNamePrefix='select'
                                options={BranchOptions}
                                theme={selectThemeColors}
                                defaultValue={BranchOptions[0]}
                            />
                        </Col>
                        <Col xs={12} className='text-center mt-2 pt-50'>
                                <Button type='submit' className='me-1' color='primary'>
                                    Submit
                                </Button>
                                <Button type='reset' color='secondary' outline onClick={() => props.setShow(props.isShow)}>
                                    Discard
                                </Button>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </Fragment>
    )
}

export default AddPromotion
