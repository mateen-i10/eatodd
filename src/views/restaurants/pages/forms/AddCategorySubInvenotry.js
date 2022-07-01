// ** React Imports
import { Fragment, useState } from 'react'

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

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import Link from "react-router-dom/es/Link"

const BranchOptions = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' }
]

const defaultValues = {
    firstName: 'Bob',
    lastName: 'Barton',
    username: 'bob.dev'
}

const AddCategory = () => {
    // ** State
    const [show, setShow] = useState(true)

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
            <Modal isOpen={show} className='modal-dialog-centered modal-lg'>
                <Link to="/dashboard/inventory/category">
                    <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
                </Link>
                <ModalBody className='mx-50 pb-5'>
                    <div className='text-center mb-2'>
                        <h1 className='mb-1'>Add a New Category Item</h1>
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
                                    <Input {...field} id='name' placeholder='Bread' />
                                )}
                            />
                        </Col>
                        <Col xs={12} className='text-center mt-2 pt-50'>
                            <Link to="/dashboard/inventory/category">
                                <Button type='submit' className='me-1' color='primary'>
                                    Submit
                                </Button>
                                <Button type='reset' color='secondary' outline onClick={() => setShow(false)}>
                                    Discard
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </Fragment>
    )
}

export default AddCategory