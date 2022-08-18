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

import { useForm} from 'react-hook-form'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'


const defaultValues = {
    firstName: 'Bob',
    lastName: 'Barton',
    username: 'bob.dev'
}

const AddFaceBookpost = (props) => {
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
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                            <textarea className="form-control" value={props.data.description} id="exampleFormControlTextarea1" rows="3" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">Default file input example</label>
                            <input className="form-control" type="file" id="formFile" />
                        </div>

                        <Col xs={12} className='text-center mt-2 pt-50'>
                                <Button type='reset' color='secondary' onClick={() => props.setShow(!props.isShow)}>
                                    Create Facebook Post
                                </Button>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </Fragment>
    )
}

export default AddFaceBookpost
