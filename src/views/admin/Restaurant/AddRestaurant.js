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

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import Link from "react-router-dom/es/Link"

const defaultValues = {
    firstName: 'Bob',
    lastName: 'Barton',
    username: 'bob.dev'
}

const AddRestaurant = (props) => {
    // ** States
    // const [show, setShow] = useState(true)

    const weekData = [
        {
            day: 'Monday',
            starttime: 'some start time',
            endtime: 'some end time'
        },
        {
            day: 'Tuesday',
            starttime: 'some start time',
            endtime: 'some end time'
        },
        {
            day: 'Wednessday',
            starttime: 'some start time',
            endtime: 'some end time'
        },
        {
            day: 'Thursday',
            starttime: 'some start time',
            endtime: 'some end time'
        },
        {
            day: 'Friday',
            starttime: 'some start time',
            endtime: 'some end time'
        },
        {
            day: 'Saturday',
            starttime: 'some start time',
            endtime: 'some end time'
        },
        {
            day: 'Sunday',
            starttime: 'some start time',
            endtime: 'some end time'
        }
    ]

    // ** Hooks
    const {
        control,
        setError,
        handleSubmit,
        formState: { errors }
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
                <Link to="/Restaurant">
                    <ModalHeader className='bg-transparent' toggle={() => props.setShow(!props.isShow)}></ModalHeader>
                </Link>
                <ModalBody className='mx-50 pb-5'>
                    <div className='text-center mb-2'>
                        <h1 className='mb-1'>Add a New Restaurant</h1>
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
                                    <Input {...field} id='restname' value={props.data.restaurant} placeholder='Restaurant Name' />
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
                        <Col md={6} xs={12}>
                            <Label className='form-label' for='lastName'>
                                Address
                            </Label>
                            <Controller
                                name='address'
                                control={control}
                                render={({ field }) => (
                                    <Input {...field} id='address' value={props.data.address} placeholder='Address' />
                                )}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <Label className='form-label' for='lastName'>
                                Phone
                            </Label>
                            <Controller
                                name='phone'
                                control={control}
                                render={({ field }) => (
                                    <Input {...field} id='phone' value={props.data.phone} placeholder='phone' />
                                )}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <Label className='form-label' for='lastName'>
                                Store Url
                            </Label>
                            <Controller
                                name='storeUrl'
                                control={control}
                                render={({ field }) => (
                                    <Input {...field} id='storeUrl' placeholder='Store Url' />
                                )}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <Label className='form-label' for='lastName'>
                                Priority
                            </Label>
                            <Controller
                                name='priority'
                                control={control}
                                render={({ field }) => (
                                    <Input {...field} id='priority' placeholder='priority' />
                                )}
                            />
                            {errors.lastName && <FormFeedback>Please enter a valid priority</FormFeedback>}
                        </Col>

                        {/*<hr style={{color:'black'}} />*/}
                        <div className="text-center">
                            <h4>Hours Of Operation</h4>
                        </div>
                        <hr style={{color:'black'}} className='my-1' />
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Day</th>
                                <th scope="col">Start Time</th>
                                <th scope="col">End Time</th>
                                <th scope="col">Closed</th>
                                <th scope="col">24 hour open</th>
                            </tr>
                            </thead>
                            <tbody>
                            {weekData.map(element => {
                                return <tr key = {element}>
                                    <th scope="row">{element.day}</th>
                                    <td>{element.starttime}</td>
                                    <td>{element.endtime}</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Closed
                                                </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="flexCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Open 24hours
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                            })}
                            </tbody>
                        </table>

                        <Col xs={12} className='text-center mt-2 pt-50'>
                                <Button type='submit' className='me-1' color='primary' onClick={() => props.setShow(!props.isShow)}>
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

export default AddRestaurant
