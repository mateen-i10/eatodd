// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import {
    Row,
    Col,
    Modal,
    Button,
    ModalBody,
    ModalHeader
} from 'reactstrap'

// ** Third Party Components
import { useForm } from 'react-hook-form'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import Link from "react-router-dom/es/Link"


const defaultValues = {
    firstName: 'Bob',
    lastName: 'Barton',
    username: 'bob.dev'
}

const ScheduleSms = (props) => {

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
                <Link to="/CrmSms">
                    <ModalHeader className='bg-transparent' toggle={() => props.setShow(!props.isShow)}></ModalHeader>
                </Link>
                <ModalBody className='mx-50 pb-5'>
                    <div className='text-center mb-2'>
                        <h1 className='mb-1'>Add a New Scheduled SMS</h1>
                    </div>
                    <Row tag='form' className='gy-1 pt-75' onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <hr/>
                        <h3>Filters</h3>
                        <hr/>

                        <h5>Restaurant</h5>

                        <div className="form-check mx-1">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    North Ave
                                </label>
                        </div>
                        <div className="form-check mx-1">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Van Buren
                            </label>
                        </div>
                        <div className="form-check mx-1">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Catering
                            </label>
                        </div>
                        <div className="form-check mx-1">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                French Market
                            </label>
                        </div>

                        <Col xs={12} className='text-center mt-2 pt-50'>
                                <Button type='reset' color='secondary' onClick={() => props.setShow(!props.isShow)}>
                                    Schedule SMS
                                </Button>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </Fragment>
    )
}

export default ScheduleSms
