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
    ModalHeader
} from 'reactstrap'

// ** Third Party Components
import Select from 'react-select'
import { User, Check, X } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'

// ** Utils

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import Link from "react-router-dom/es/Link"

const defaultValues = {
}

const AddCuisine = (props) => {
    // ** States
    // const [show, setShow] = useState(true)
    // ** Hooks
    const {
        control,
        setError,
        handleSubmit
    } = useForm({ defaultValues })

    const onSubmit = data => {
        console.log("the data entered i am assuming it is?", data)
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
                <Link to="/Cuisine">
                    <ModalHeader className='bg-transparent' toggle={() => props.setShow(!props.isShow)}></ModalHeader>
                </Link>
                <ModalBody className='mx-50 pb-5'>
                    <div className='text-center mb-2'>
                        <h1 className='mb-1'>Add a New Cuisine</h1>
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
                                    <Input {...field} id='restname' value={props.data.full_name} placeholder='Cuisine Name' />
                                )}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <Label className='form-label' for='lastName'>
                                Description
                            </Label>
                            <Controller
                                name='description'
                                control={control}
                                render={({ field }) => (
                                    <Input {...field} id='description' value={props.data.description} placeholder='description' />
                                )}
                            />
                        </Col>

                        <Col xs={12} className='text-center mt-2 pt-50'>
                            <Button type='submit' className='me-1' color='primary' onClick={() => handleSubmit()}>
                                Submit
                            </Button>
                            <Button type='reset' color='secondary' onClick={() => props.setShow(!props.isShow)}>
                                Discard
                            </Button>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </Fragment>
    )
}

export default AddCuisine
