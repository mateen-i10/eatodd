import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import {addContact} from "../../../redux/contact/action"
import {Button, Col, Row} from "reactstrap"
import {useForm} from 'react-hook-form'
import Datetime from "react-datetime"
import moment from "moment"

const CateringSubForm = () => {
    const dispatch = useDispatch()

    const [isSubmited, setIsSubmitted] = useState(false)

    const p = document.getElementById("noOfAttendees")

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

    const [participantsError, setParticipantsError] = useState(false)
    const [participentErrMsg, setParticipentErrMsg] = useState("")
    const [dateErrMsg, setdateErrMsg] = useState("")
    const [dateVal, setDateVal] = useState(false)

    const disablePastDt = current => {
        return current.isAfter(sevenDays)
    }

    const onSubmit = (data) => {
        // console.log("data----", data)
        if (p?.value < 25) {
            setParticipantsError(true)
            setParticipentErrMsg("Participants must be greater then 25")
            return
        } else if (p?.value > 300) {
            setParticipantsError(true)
            setParticipentErrMsg("Participants must be less than 300")
        } else if (p?.value > 25) {
            setParticipantsError(false)
        }

        if (eventDate === "" || eventDate === undefined || eventDate === null) {
            console.log("eventdate is empty")
            setDateVal(true)
            return
        }

        if (Object.values(data).every(field => field.length > 0)) {
            const abc = new moment(eventDate).format()// format date to avoid server time zone
            const yearCheck = moment(abc).format("YYYY")
            let today = moment(new Date()).format("YYYY")
            today = Number(today) + 2
            console.log(today, "year today")
            console.log(yearCheck, "year check")

            if (yearCheck > today) {
                setdateErrMsg("Max Catering time is 2 years.")
               return console.log("year check enabled")
            }
            const finalData = {...data, eventDate: abc}
            dispatch(addContact(finalData))
            setIsSubmitted(true)
            reset()
            setTimeout(() => {
                setIsSubmitted(false)
            }, [3000])
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
            {/*<h1 style={{marginTop: '50px'}}>OMG GRAZING TABLE</h1>
            <h5>CATERING PACKAGE SERVES 25+ PEOPLE</h5>*/}
            <p className='mt-5' style={{color: 'rgb(234, 84, 85)'}}>*Requires 1 week notice for all orders.</p>
            <p>Our OMG Grazing Events are reserved for people that care about impressing their guests. With each event,
                we strive to create the perfect melody of hearty menu items surrounded by the highest quality Cured Meats,
                a blend of Cheeses, Crudités, Sweet & Savory snacks, a variety of Mediterranean Dips along with seasonal Accoutrements.
                We also offer a Variety of Single Serve Desserts such as: Baklava, Strawberry Shortcake, Panna Cotta, Cupcakes, Tiramisu,
                Chocolate Chip Cookies, Salt & Pepper Cookies, and Cardamom Cookies. Finally, with OMG Wine Pairings
                completing the party set up, all you have left to do is pick out the perfect outfit!  </p>
            <p style={{color: 'rgb(234, 84, 85)'}}>*All items are seasonal and based on weekly availability.</p>
            <p style={{marginTop: '-10px', color: 'rgb(234, 84, 85)'}}>*OMG Offers Complete Event Catering, Wine Selection and Event Design.</p>

            <div>
                <form className='mt-2 ' onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col sm='6' className='mb-1'>
                            <label className='form-label' htmlFor='name'>
                                Name :
                            </label>
                            <input id='name' className='form-control' placeholder='John' {...register('name', {required: true})} />
                            {errors && errors.name?.type === "required" && <p className='text-danger'>Name is Required</p>}
                        </Col>
                        <Col sm='6' className='mb-1'>
                            <label className='form-label' htmlFor='email'>
                                E-mail :
                            </label>
                            <input id='email' className='form-control' type='email' placeholder='Email' {...register("email", {required: true})} />
                            {errors && errors.email?.type === "required" && <p className='text-danger'>Email is required</p>}
                        </Col>
                        <Col sm='6' className='mb-1'>
                            <label className='form-label' htmlFor='contactNo'>
                                Contact No. :
                            </label>
                            <input id='contactNo' className='form-control' type='number' placeholder='1 234 567 8900' {...register("contactNo", {required: true})} />
                            {errors && errors.contactNo?.type === "required" && <p className='text-danger'>Please enter a valid Contact No</p>}
                        </Col>
                        <Col sm='6' className='mb-1'>
                            <label className='form-label' htmlFor='noOfAttendees'>
                                No. of Attendees :
                            </label>
                            <input id='noOfAttendees' className='form-control' type='number' placeholder='25' {...register("noOfAttendees", { required: true })} />
                            {errors && errors.noOfAttendees?.type === "required" && <p className='text-danger'>Please enter a valid Number</p>}
                            {participantsError && <p className='text-danger'>{participentErrMsg}</p>}
                        </Col>
                        <Col sm='6' className='mb-1'>
                            <label className='form-label' htmlFor='eventDate'>
                                Event Date :
                            </label>
                            <Datetime
                                id='eventDate'
                                type='date'
                                // locale="en-gb"
                                // timeFormat={false}
                                isValidDate={disablePastDt}
                                inputProps="11-12-2022"
                                value={eventDate}
                                closeOnSelect={true}
                                onChange={(e) => setEventDate(e.toDate())} />
                                {dateErrMsg && <p className='text-danger'>{dateErrMsg}</p>}
                                {eventDate === null ? <p className='text-danger'>Date is required</p> : ""}
                                {dateVal && <p className='text-danger'>Date is required</p>}
                        </Col>
                        <Col className='mt-2 ' sm='12'>
                            <Button type='submit' className='me-1 mb-2' color='primary'>
                                Submit
                            </Button>
                            {isSubmited === true ? <div style={{marginTop: '15px', color: 'red'}}>
                                <span>Your response has been submitted, we will Contact you soon.</span>
                            </div> : []}
                        </Col>
                    </Row>
                </form>
            </div>
        </>
    )
}

export default CateringSubForm