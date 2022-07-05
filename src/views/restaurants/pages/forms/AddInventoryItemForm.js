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

const AddInventoryItems = (props) => {
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
                    <ModalHeader className='bg-transparent' toggle={() => props.setShow(!props.isShow)}></ModalHeader>
                <ModalBody className='mx-50 pb-5'>
                    <div className='text-center mb-2'>
                        <h1 className='mb-1'>Add a New Inventory</h1>
                    </div>
                    <Row tag='form' className='gy-1 pt-75' onSubmit={handleSubmit(onSubmit)}>
                        <Col md={6} xs={12}>
                            <Label className='form-label'>
                                Code
                            </Label>
                            <Controller
                                name='Code'
                                control={control}
                                render={({ field }) => (
                                    <Input {...field} id='code' placeholder='Code' value={props.data.code} />
                                )}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <Label className='form-label'>
                                Description
                            </Label>
                            <Controller
                                name='description'
                                control={control}
                                render={({ field }) => (
                                    <Input {...field} id='description' placeholder='description' value={props.data.description} />
                                )}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <Label className='form-label'>
                                Unit
                            </Label>
                            <Controller
                                name='Unit'
                                control={control}
                                render={({ field }) => (
                                    <Input {...field} id='unit' placeholder='Unit' value={props.data.unit} />
                                )}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <Label className='form-label'>
                                Price
                            </Label>
                            <Controller
                                name='Price'
                                control={control}
                                render={({ field }) => (
                                    <Input {...field} id='Price' placeholder='Price' value={props.data.price}/>
                                )}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <Label className='form-label'>
                                Unit/Item
                            </Label>
                            <Controller
                                name='unit/item'
                                control={control}
                                render={({ field }) => (
                                    <Input {...field} id='unit/item' placeholder='unit/item' value={props.data.unit_item} />
                                )}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <Label className='form-label'>
                                Quantity/Item
                            </Label>
                            <Controller
                                name='quantity/item'
                                control={control}
                                render={({ field }) => (
                                    <Input {...field} id='quantity/item' placeholder='quantity/item' value={props.data.qty_item} />
                                )}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <Label className='form-label'>
                                Stock
                            </Label>
                            <Controller
                                name='Stock'
                                control={control}
                                render={({ field }) => (
                                    <Input {...field} id='stock' placeholder='stock' value={props.data.stock} />
                                )}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <Label className='form-label'>
                                Stock threshold
                            </Label>
                            <Controller
                                name='Stock threshold'
                                control={control}
                                render={({ field }) => (
                                    <Input {...field} id='Stock threshold' placeholder='Stock threshold' />
                                )}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <Label className='form-label'>
                                Distributer
                            </Label>
                            <Controller
                                name='distributer'
                                control={control}
                                render={({ field }) => (
                                    <Input {...field} id='Distributer' placeholder='Distributer' value={props.data.distributor} />
                                )}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <Label className='form-label'>
                                Category
                            </Label>
                            <Controller
                                name='Category'
                                control={control}
                                render={({ field }) => (
                                    <Input {...field} id='Category' placeholder='Category' />
                                )}
                            />
                        </Col>
                        <Col xs={12} className='text-center mt-2 pt-50'>
                            <Link to="/dashboard/inventory/item">
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

export default AddInventoryItems
