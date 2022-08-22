// ** React Imports
import {Fragment, useEffect, useState} from 'react'

// ** Reactstrap Imports
import {
    Row,
    Col,
    Modal,
    Input,
    Label,
    Button,
    ModalBody,
    ModalHeader,
    FormFeedback, Form
} from 'reactstrap'

// ** Third Party Components
import { useForm, Controller } from 'react-hook-form'
// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
// import Link from "react-router-dom/es/Link"
import { Check } from 'react-feather'
/*import { toast } from 'react-toastify'*/
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import Avatar from "../../../@core/components/avatar"
import {selectThemeColors} from "../../../utility/Utils"
import Select from "react-select"
import Flatpickr from 'react-flatpickr'
import {useDispatch, useSelector} from "react-redux"
import {setIsRestaurantError} from "../../../redux/restaurant/reducer"
import UILoader from "../../../@core/components/ui-loader"
import useModalError from "../../../utility/customHooks/useModalError"
import {updateRestaurant, addRestaurant} from "../../../redux/restaurant/actions"

const availableForDelivery = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
]

const vineClub = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
]

const catering = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
]

const AddRestaurant = (props) => {
    // redux state
    const formInitialState = useSelector(state => state.restaurant.object)
    const isEdit = useSelector(state => state.restaurant.isEdit)
    const isError = useSelector(state => state.restaurant.isError)

    //local state
    const [isModalLoading,  setModalLoading] = useState(false)

    const weekData = [
        {
            day: 'Monday'
        },
        {
            day: 'Tuesday'
        },
        {
            day: 'Wednessday'
        },
        {
            day: 'Thursday'
        },
        {
            day: 'Friday'
        },
        {
            day: 'Saturday'
        },
        {
            day: 'Sunday'
        }
    ]

    const restaurantSchema = yup.object().shape({
        name: yup.string().min(3).required()
    })

    // ** Hooks
    const dispatch = useDispatch()
    const {
        reset,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({mode: 'onChange', resolver: yupResolver(restaurantSchema) })

    useModalError(isError, setModalLoading, setIsRestaurantError)
    useEffect(() => {
        if (isEdit) {
            reset({
                ...formInitialState
            })
        } else {
            reset({
                name: ''
            })
        }

    }, [isEdit])

    const onSubmit = data => {
        console.log('data', data)
        props.isEdit ? dispatch(updateRestaurant(data)) : dispatch(addRestaurant(data))
       /* if (Object.values(data).every(field => field.length > 0)) {
            toast.success(
                <Fragment>
                    <div className='toastify-header'>
                        <div className='title-wrapper'>
                            <Avatar size='sm' color='success' icon={<Check size={12} />} />
                            <h6 className='toast-title'>Form Submitted Successfully!</h6>
                        </div>
                    </div>
                </Fragment>,
                { icon: false, hideProgressBar: true }
            )
        }*/
    }

    return (
        <Fragment>
            <Modal isOpen={props.isShow} className='modal-dialog-centered modal-lg'>
                <UILoader blocking={isModalLoading}>
                    <ModalBody className='mx-50 pb-5'>
                    <div className='text-center mb-2'>
                        <h1 className='mb-1'>{props.title}</h1>
                    </div>
                    <Form onSubmit={ handleSubmit(onSubmit)}>
                        <Row tag='form' className='gy-1 pt-75'>
                            <Col md={6} xs={12}>
                                <div className='mb-1'>
                                    <Label className='form-label' for='name'>
                                        Name
                                    </Label>
                                    <Controller
                                        id='name'
                                        name='name'
                                        defaultValue=''
                                        control={control}
                                        render={({ field }) => <Input {...field} placeholder='Enter Name' invalid={errors.name && true} />}
                                    />
                                    {errors.name && <FormFeedback>{errors.name.message}</FormFeedback>}
                                </div>
                            </Col>
                            <Col md={6} xs={12}>
                                <div className='mb-1'>
                                    <Label className='form-label' for='description'>
                                        Description
                                    </Label>
                                    <Controller
                                        id='description'
                                        name='description'
                                        defaultValue=''
                                        control={control}
                                        render={({ field }) => <Input {...field} placeholder='Enter Description' invalid={errors.description && true} />}
                                    />
                                    {errors.description && <FormFeedback>{errors.description.message}</FormFeedback>}
                                </div>
                            </Col>
                            <Col md={6} xs={12}>
                                <div className='mb-1'>
                                    <Label className='form-label' for='address'>
                                        Address
                                    </Label>
                                    <Controller
                                        id='address'
                                        name='address'
                                        defaultValue=''
                                        control={control}
                                        render={({ field }) => <Input {...field} placeholder='Enter Address' invalid={errors.address && true} />}
                                    />
                                    {errors.address && <FormFeedback>{errors.address.message}</FormFeedback>}
                                </div>
                            </Col>
                            <Col md={6} xs={12}>
                                <div className='mb-1'>
                                    <Label className='form-label' for='phoneNo'>
                                        Phone Number
                                    </Label>
                                    <Controller
                                        id='phoneNo'
                                        name='phoneNo'
                                        defaultValue=''
                                        control={control}
                                        render={({ field }) => <Input {...field} placeholder='Enter Contact No' invalid={errors.phoneNo && true} />}
                                    />
                                    {errors.phoneNo && <FormFeedback>{errors.phoneNo.message}</FormFeedback>}
                                </div>
                            </Col>
                            <Col md={6} xs={12}>
                                <div className='mb-1'>
                                    <Label className='form-label' for='latitude'>
                                        Latitude
                                    </Label>
                                    <Controller
                                        id='latitude'
                                        name='latitude'
                                        defaultValue=''
                                        control={control}
                                        render={({ field }) => <Input {...field} placeholder='Enter latitude' invalid={errors.latitude && true} />}
                                    />
                                    {errors.latitude && <FormFeedback>{errors.latitude.message}</FormFeedback>}
                                </div>
                            </Col>
                            <Col md={6} xs={12}>
                                <div className='mb-1'>
                                    <Label className='form-label' for='longitude'>
                                        Longitude
                                    </Label>
                                    <Controller
                                        id='longitude'
                                        name='longitude'
                                        defaultValue=''
                                        control={control}
                                        render={({ field }) => <Input {...field} placeholder='Enter Longitude' invalid={errors.longitude && true} />}
                                    />
                                    {errors.longitude && <FormFeedback>{errors.longitude.message}</FormFeedback>}
                                </div>
                            </Col>
                            <Col md={6} xs={12}>
                                <div className='mb-1'>
                                    <Label className='form-label' for='IsAvailableForDelivery'>
                                        Available For Delivery
                                    </Label>
                                    <Controller
                                        id='IsAvailableForDelivery'
                                        name='IsAvailableForDelivery'
                                        defaultValue=''
                                        control={control}
                                        render={({ field }) => <Select
                                            theme={selectThemeColors}
                                            className='react-select'
                                            classNamePrefix='select'
                                            options={availableForDelivery}
                                            isClearable={false}
                                            {...field}
                                        />
                                    }
                                    />
                                    {errors.phoneNo && <FormFeedback>{errors.phoneNo.message}</FormFeedback>}
                                </div>
                            </Col>
                            <Col md={6} xs={12}>
                                <div className='mb-1'>
                                    <Label className='form-label' for='IsVineClub'>
                                        Vine Club Included
                                    </Label>
                                    <Controller
                                        id='IsVineClub'
                                        name='IsVineClub'
                                        defaultValue=''
                                        control={control}
                                        render={({ field }) => <Select
                                            theme={selectThemeColors}
                                            className='react-select'
                                            classNamePrefix='select'
                                            options={vineClub}
                                            isClearable={false}
                                            {...field}
                                        />
                                        }
                                    />
                                    {errors.phoneNo && <FormFeedback>{errors.phoneNo.message}</FormFeedback>}
                                </div>
                            </Col>
                            <Col md={6} xs={12}>
                                <div className='mb-1'>
                                    <Label className='form-label' for='IsCatering'>
                                        Catering Included
                                    </Label>
                                    <Controller
                                        id='IsCatering'
                                        name='IsCatering'
                                        defaultValue=''
                                        control={control}
                                        render={({ field }) => <Select
                                            theme={selectThemeColors}
                                            className='react-select'
                                            classNamePrefix='select'
                                            options={catering}
                                            isClearable={false}
                                            {...field}
                                        />
                                        }
                                    />
                                    {errors.phoneNo && <FormFeedback>{errors.phoneNo.message}</FormFeedback>}
                                </div>
                            </Col>

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
                                        <td>
                                            <div className='mb-1'>
                                                <Controller
                                                    id='startTime'
                                                    name='startTime'
                                                    defaultValue=''
                                                    control={control}
                                                    render={({ field }) => <Flatpickr
                                                        {...field}
                                                        className='form-control'
                                                        id='startTime'
                                                        options={{
                                                            enableTime: true,
                                                            noCalendar: true,
                                                            dateFormat: 'H:i',
                                                            time_24hr: true
                                                        }}
                                                    />}
                                                />
                                                {errors.startTime && <FormFeedback>{errors.startTime.message}</FormFeedback>}
                                            </div>
                                        </td>
                                        <td>
                                            <div className='mb-1'>
                                                <Controller
                                                    id='endTime'
                                                    name='endTime'
                                                    defaultValue=''
                                                    control={control}
                                                    render={({ field }) => <Flatpickr
                                                        {...field}
                                                        className='form-control'
                                                        id='endTime'
                                                        options={{
                                                            enableTime: true,
                                                            noCalendar: true,
                                                            dateFormat: 'H:i:s',
                                                            time_24hr: true
                                                        }}
                                                    />}
                                                />
                                                {errors.endTime && <FormFeedback>{errors.endTime.message}</FormFeedback>}
                                            </div>
                                        </td>
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
                                <Button type='reset' color='secondary' onClick={() => props.setShow(!props.isShow)}>
                                    Discard
                                </Button>
                            </Col>
                        </Row>
                        <Input type='submit' className='me-1 btn btn-success'/>
                    </Form>
                </ModalBody>
                </UILoader>
            </Modal>
        </Fragment>
    )
}

export default AddRestaurant
