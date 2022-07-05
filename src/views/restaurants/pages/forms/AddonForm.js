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
import AddingFeilds from "./AddingFeilds"

// ** Third Party Components
import Select from 'react-select'
import { User, Check, X } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'

// ** Utils

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import Link from "react-router-dom/es/Link"

const defaultValues = {
    firstName: 'Bob',
    lastName: 'Barton',
    username: 'bob.dev'
}

const Addaddon = (props) => {
    // ** States

    // ** Hooks
    const {
        control
    } = useForm({ defaultValues })

    // const onSubmit = data => {
    //     if (Object.values(data).every(field => field.length > 0)) {
    //         return null
    //     } else {
    //         for (const key in data) {
    //             if (data[key].length === 0) {
    //                 setError(key, {
    //                     type: 'manual'
    //                 })
    //             }
    //         }
    //     }
    // }

    return (
        <Fragment>
            <Modal isOpen={props.isShow} className='modal-dialog-centered modal-lg'>
                <Link to="/Dashboard/addon">
                    <ModalHeader className='bg-transparent' toggle={() => props.setShow(!props.isShow)}></ModalHeader>
                </Link>
                <ModalBody className='mx-50 pb-5'>
                    <div className='text-center mb-2'>
                        <h1 className='mb-1'>Add a New Add on</h1>
                    </div>
                    <Row tag='form' className='gy-1 pt-75' >
                        <Col md={6} xs={12}>
                            <Label className='form-label' for='name'>
                                Name
                            </Label>
                            <Controller
                                name='Name'
                                control={control}
                                render={({ field }) => (
                                    <Input {...field} id='name' value={props.data.name} placeholder='addon-plate' />
                                )}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <Label className='form-label' for='instructions'>
                                Instructions
                            </Label>
                            <Controller
                                name='instructions'
                                control={control}
                                render={({ field }) => (
                                    <Input {...field} id='instructions' value={props.data.instruction} placeholder='Please Select an Addon' />
                                )}
                            />
                        </Col>

                        <AddingFeilds />

                        <Col xs={12} className='text-center mt-2 pt-50'>
                                <Button type='submit' className='me-1' color='primary'>
                                    Create Add on
                                </Button>
                                <Button type='reset' color='secondary' outline onClick={() => props.setShow(!props.isShow)}>
                                    Discard
                                </Button>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </Fragment>
    )
}

export default Addaddon
