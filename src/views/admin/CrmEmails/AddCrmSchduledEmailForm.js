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

import {Controller, useForm} from 'react-hook-form'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'


const defaultValues = {
    firstName: 'Bob',
    lastName: 'Barton',
    username: 'bob.dev'
}

const AddCrmScheduleForm = (props) => {
    // ** Hooks
    const {
        setError,
        handleSubmit
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
                <ModalHeader className='bg-transparent' toggle={() => props.setShow(!props.isShow)}></ModalHeader>
                <ModalBody className='mx-50 pb-5'>
                    <div className='text-center mb-2'>
                        <h1 className='mb-1'>Add a New Post</h1>
                    </div>
                    <Row tag='form' className='gy-1 pt-75' onSubmit={handleSubmit(onSubmit)}>
                        <Col md={6} xs={12}>
                            <Label className='form-label' for='lastName'>
                                Schedule (Date and Time)
                            </Label>
                            <Input id='schedule' value={props.data.schedule} placeholder='Schedule (date and time)' />
                        </Col>
                        <Col md={12} xs={12}>
                            <Label className='form-label' for='lastName'>
                                Subject
                            </Label>
                            <Input id='schedule' value={props.data.subject} placeholder='Enter subject' />
                        </Col>
                        <hr/>
                        <h2>Filters</h2>
                        <hr/>
                        <h5>Restaurant</h5>

                        <div className="container">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value=""
                                       id="northEve" />
                                <label className="form-check-label" htmlFor="northEve">
                                    North Ave
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value=""
                                       id="vanBuran" />
                                <label className="form-check-label" htmlFor="vanBuran">
                                    Van Buren
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value=""
                                       id="Catering" />
                                <label className="form-check-label" htmlFor="Catering">
                                    Catering
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value=""
                                       id="frenchMarket" />
                                <label className="form-check-label" htmlFor="frenchMarket">
                                    Frecnh Market
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value=""
                                       id="wineClub" />
                                <label className="form-check-label" htmlFor="wineClub">
                                    OMG Wine Club Members
                                </label>
                            </div>
                        </div>

                        <Col xs={12} className='text-center mt-2 pt-50'>
                            <Button type='reset' color='secondary'>
                                Update Email
                            </Button>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </Fragment>
    )
}

export default AddCrmScheduleForm
