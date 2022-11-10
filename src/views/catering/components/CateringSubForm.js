import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import {addContact} from "../../../redux/contact/action"
import {Button, Col, Row} from "reactstrap"
import {useForm} from 'react-hook-form'
import Datetime from "react-datetime"
import moment from "moment"

// import {toast} from "react-toastify"

const CateringSubForm = () => {
    const dispatch = useDispatch()

    //** useForm
    const defaultValues = {
        name: '',
        contactNo: '',
        email: '',
        noOfAttendees: ''
    }
    const {
        setError,
        reset,
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({defaultValues})

    const sevenDays = moment().add(7, 'days')
    const [eventDate, setEventDate] = useState()


    const disablePastDt = current => {
        return current.isAfter(sevenDays)
    }


    const onSubmit = (data) => {
        // console.log("data----", data)
        if (Object.values(data).every(field => field.length > 0)) {
            const abc = new moment(eventDate).format() // format date to avoid server time zone
            const finalData = {...data, eventDate: abc}
            // console.log('final Data', finalData)
            dispatch(addContact(finalData))
            reset()
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
        <>
            <h1 style={{marginTop: '50px'}}>OMG GRAZING TABLE</h1>
            <h5>CATERING PACKAGE SERVES 25+ PEOPLE</h5>
            <p style={{color: 'rgb(234, 84, 85)'}}>*Requires 1 week notice for all orders.</p>
            <p>Our OMG Grazing Tables are the perfect way to entertain and feed larger groups. They provide a beautiful
                statement piece at your gathering. Styled to perfection with high quality artisanal products. Components
                include a Variety of Premium Cheeses, Grilled & Cured Meats, Antipasto Items, Jams, Nuts, Dried Fruit,
                Mediterranean Dips, Meat Pies, Mediterranean Pizza’s, Crudités, Seasonal Fresh Fruit, Crackers, and
                Fresh Herbal Accents & a Variety of Single Serve Desserts such as: Baklava, Strawberry Shortcake, Panna
                Cotta, Cupcakes, Tiramisu, Chocolate Chip Cookies, Salt & Pepper Cookies, and Cardamom Cookies. </p>
            <p style={{color: 'rgb(234, 84, 85)'}}>*All items are seasonal and based on weekly availability.</p>
            <p style={{marginTop: '-10px', color: 'rgb(234, 84, 85)'}}>*OMG Offers Complete Event Catering, Wine
                Selection and Event Design.</p>


            <div>
                <form className='mt-2 ' onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col sm='6' className='mb-1'>
                            <label className='form-label' htmlFor='name'>
                                Name :
                            </label>
                            <input id='name' className='form-control' placeholder='John' {...register('name', {
                                required: true
                            })} />
                            {errors && errors.name?.type === "required" &&
                                <p className='text-danger'>Name is Required</p>}
                        </Col>
                        <Col sm='6' className='mb-1'>
                            <label className='form-label' htmlFor='email'>
                                E-mail :
                            </label>

                            <input id='email' className='form-control' type='email' placeholder='Email'
                                   {...register("email", {
                                       required: true
                                   })} />
                            {errors && errors.email?.type === "required" &&
                                <p className='text-danger'>Email is required</p>}
                        </Col>
                        <Col sm='6' className='mb-1'>
                            <label className='form-label' htmlFor='contactNo'>
                                Contact No. :
                            </label>

                            <input id='contactNo' className='form-control' type='number' placeholder='1 234 567 8900'
                                   {...register("contactNo", {
                                       required: true
                                   })} />
                            {errors && errors.contactNo?.type === "required" &&
                                <p className='text-danger'>Please enter a valid Contact No</p>}
                        </Col>
                        <Col sm='6' className='mb-1'>
                            <label className='form-label' htmlFor='noOfAttendees'>
                                No. of Attendees :
                            </label>
                            <input id='noOfAttendees' className='form-control' type='number' placeholder='12'
                                   {...register("noOfAttendees", {
                                       required: true
                                   })} />
                            {errors && errors.noOfAttendees?.type === "required" &&
                                <p className='text-danger'>Please enter a valid Number</p>}
                        </Col>
                        <Col sm='6' className='mb-1'>
                            <label className='form-label' htmlFor='eventDate'>
                                Event Date :
                            </label>
                            <Datetime
                                id='eventDate'
                                type='date'
                                // timeFormat={false}
                                // locale="en-gb"
                                isValidDate={disablePastDt}
                                inputProps="11-12-2022"
                                value={eventDate}
                                closeOnSelect={true}
                                onChange={(e) => setEventDate(e.toDate())}
                            />
                            {eventDate === null &&
                                <p className='text-danger'>Date is required</p>}
                        </Col>
                        <Col className='mt-2 text-end' sm='12'>
                            <Button type='submit' className='me-1' color='primary'>
                                Save
                            </Button>
                        </Col>
                    </Row>
                </form>
            </div>
        </>
    )
}

export default CateringSubForm