import React, { useRef, useState} from 'react'
import {FieldTypes} from "../../../utility/enums/FieldType"
import MyForm from "../../../components/MyForm"

import Joi from "joi-browser"
import moment from 'moment'
import {toast} from "react-toastify"
import {Fragment} from "@fullcalendar/core"
import {Info} from "react-feather"
import Avatar from "../../../@core/components/avatar"

const CateringSubForm = () => {
    // ** React Imports
    const formModalRef = useRef(null)

    const [dateError,  setDateError] = useState(false)

    const [formState, setFormState] = useState({})
    const [formData] = useState([
        {type:FieldTypes.Text, label: 'Email', placeholder: 'Enter your Email', name:'email', isRequired:true, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Text, label: 'Name', placeholder: 'Enter your Name', name:'name', isRequired:true, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Number, label: 'Total Attendies', placeholder: 'Enter total number of guests', name:'totalGuests', isRequired:false, fieldGroupClasses: 'col-6'},
        {type:FieldTypes.Date, label: 'Date of Event', name:'date', isRequired:true, fieldGroupClasses: 'col-6'}
    ])

    const schema = Joi.object({
        email: Joi.string().required(),
        name: Joi.string().required(),
        date: Joi.date().required()
    })

    // useEffect(() => {}, [dateError])
    const InfoToast = () => (
        <Fragment>
            <div className='toastify-header'>
                <div className='title-wrapper'>
                    <Avatar size='sm' color='danger' icon={<Info size={12} />} />
                    <h6 className=' ms-50 mb-0' style={{color:'#81be41'}}>Please Select a Date 7 days from today.</h6>
                </div>
            </div>
            <div className='toastify-body'>
                <span>Please Choose a Date that is 7 days from now</span>
            </div>
        </Fragment>
    )

    const handleSubmit = (event) => {
        event.preventDefault()

        const todayDate = moment(new Date()).format('DD MM YYYY')

        const todayDay = moment(new Date()).format('DD')
        let todayDayMonth = moment(new Date()).format('MM')

        let inWeek = Number(todayDay)

        const userSelectedDate = moment(formState.date).format('DD MM YYYY')
        const userSelectedDay = moment(formState.date).format('DD')

        console.log(inWeek)

        if (userSelectedDay <= inWeek) {
            setDateError(true)
            if (dateError === true) {
                return toast.info(<InfoToast />, {
                    icon: false,
                    hideProgressBar: true,
                    position: toast.POSITION.TOP_RIGHT
                })
            }
        } else if (userSelectedDay > (inWeek + 7)) {
            setDateError(false)
            console.log("all good")
        } else if (userSelectedDay <= (inWeek + 7)) {

            if (inWeek >= 30) {
                inWeek = inWeek - 30
                todayDayMonth = Number(todayDayMonth) + 1
            }

            if (userSelectedDate !== todayDate) {
                console.log(inWeek, todayDayMonth)
                setDateError(true)
                if (dateError === true) {
                    return toast.info(<InfoToast />, {
                        icon: false,
                        hideProgressBar: true,
                        position: toast.POSITION.TOP_RIGHT
                    })
                }
                console.log(dateError)
            }
        }

        const isError = formModalRef.current.validate(formState)
        console.log(isError, 'errors')

        if (isError) return

        const finalData = {...formState, date: userSelectedDate}
        console.log(finalData, 'final Data')

    }

    return (
        <>
            <h1 style={{marginTop: '50px'}}>OMG GRAZING TABLE</h1>
            <h5>CATERING PACKAGE SERVES 25+ PEOPLE</h5>
            <p>*Requires 1 week notice for all orders.</p>
            <p>Our OMG Grazing Tables are the perfect way to entertain and feed larger groups. They provide a beautiful statement piece at your gathering. Styled to perfection with high quality artisanal products. Components include a Variety of Premium Cheeses, Grilled & Cured Meats, Antipasto Items, Jams, Nuts, Dried Fruit, Mediterranean Dips, Meat Pies, Mediterranean Pizza’s, Crudités, Seasonal Fresh Fruit, Crackers, and Fresh Herbal Accents & a Variety of Single Serve Desserts such as: Baklava, Strawberry Shortcake, Panna Cotta, Cupcakes, Tiramisu, Chocolate Chip Cookies, Salt & Pepper Cookies, and Cardamom Cookies. </p>
            <p>*All items are seasonal and based on weekly availability.</p>
            <p style={{marginTop: '-10px'}}>*OMG Offers Complete Event Catering, Wine Selection and Event Design.</p>

            <MyForm
                ref={formModalRef}
                formState={formState}
                formData={formData}
                setFormState={setFormState}
                schema={schema}
                primaryBtnLabel='Save'
                handleSubmit={handleSubmit}
            />
        </>
    )
}

export default CateringSubForm