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

const defaultValues = {
    firstName: 'Bob',
    lastName: 'Barton',
    username: 'bob.dev'
}

const AddRestaurant = () => {
    // ** States
    const [show, setShow] = useState(true)

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
            <Modal isOpen={show} className='modal-dialog-centered modal-lg'>
                <Link to="/Restaurant">
                    <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
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
                                    <Input {...field} id='restname' placeholder='Restaurant Name' />
                                )}
                            />
                            {errors.lastName && <FormFeedback>Please enter a valid Restaurant Name</FormFeedback>}
                        </Col>
                        <Col md={6} xs={12}>
                            <Label className='form-label' for='lastName'>
                                Description
                            </Label>
                            <Controller
                                name='description'
                                control={control}
                                render={({ field }) => (
                                    <Input {...field} id='description' placeholder='description' />
                                )}
                            />
                            {errors.lastName && <FormFeedback>Please enter a valid description</FormFeedback>}
                        </Col>
                        <Col md={6} xs={12}>
                            <Label className='form-label' for='lastName'>
                                Address
                            </Label>
                            <Controller
                                name='address'
                                control={control}
                                render={({ field }) => (
                                    <Input {...field} id='address' placeholder='Address' />
                                )}
                            />
                            {errors.lastName && <FormFeedback>Please enter a valid Address</FormFeedback>}
                        </Col>
                        <Col md={6} xs={12}>
                            <Label className='form-label' for='lastName'>
                                Phone
                            </Label>
                            <Controller
                                name='phone'
                                control={control}
                                render={({ field }) => (
                                    <Input {...field} id='phone' placeholder='phone' />
                                )}
                            />
                            {errors.lastName && <FormFeedback>Please enter a valid Phone</FormFeedback>}
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
                            {errors.lastName && <FormFeedback>Please enter a valid Store Url</FormFeedback>}
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
                            <Link to="/Restaurant">
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

export default AddRestaurant
