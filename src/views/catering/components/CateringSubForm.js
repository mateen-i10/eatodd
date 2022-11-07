import React, {useRef, useState} from 'react'
import {FieldTypes} from "../../../utility/enums/FieldType"
import MyForm from "../../../components/MyForm"

import Joi from "joi-browser"
import moment from 'moment'
import {useDispatch} from "react-redux"
import {addContact} from "../../../redux/contact/action"
// import {toast} from "react-toastify"

const CateringSubForm = () => {
    // ** React Imports
    const formModalRef = useRef(null)
    const dispatch = useDispatch()

    // const [dateError, setDateError] = useState(false)

    let today = moment(Date.now()).format('DD')
    today = Number(today) + 7
    let month = moment(Date.now()).format('MM')
    let year = moment(Date.now()).format('YYYY')

    function daysInMonth(month, year) {
        return new Date(year, month, 0).getDate()
    }

    console.log(daysInMonth(month, year), 'monthhs')
    const totalDays = daysInMonth(month, year)

    if (today >= totalDays) {
        today = today - totalDays
        month = Number(month) + 1
    }
    if (month > 12) {
        year = Number(year) + 1
    }

    const d = new Date(`${month} ${today} ${year} 11:13:00`)

    const validDate = moment(d).format('YYYY MM DD')


    const [formState, setFormState] = useState({})
    const [formData] = useState([
        {
            type: FieldTypes.Text,
            label: 'Name',
            placeholder: 'Enter your Name',
            name: 'name',
            isRequired: true,
            fieldGroupClasses: 'col-6'
        },
        {
            type: FieldTypes.Text,
            label: 'Email',
            placeholder: 'Enter your Email',
            name: 'email',
            isRequired: true,
            fieldGroupClasses: 'col-6'
        },

        {
            type: FieldTypes.Text,
            label: 'Contact No.',
            placeholder: 'Enter your Contact No.',
            name: 'contactNo',
            isRequired: true,
            fieldGroupClasses: 'col-6'
        },
        {
            type: FieldTypes.Number,
            label: 'Total Attendees',
            placeholder: 'Enter total number of guests',
            name: 'noOfAttendees',
            isRequired: true,
            fieldGroupClasses: 'col-6'
        },
        {
            type: FieldTypes.Date,
            label: 'Date of Event',
            id: 'eventDate',
            name: 'eventDate',
            isRequired: true,
            fieldGroupClasses: 'col-6'
        }
    ])

    const schema = Joi.object({
        email: Joi.string().required(),
        name: Joi.string().required(),
        noOfAttendees: Joi.number().required(),
        date: Joi.date().required().greater(validDate)
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        const finalData = {...formState}
        const isError = formModalRef.current.validate(formState)
        dispatch(addContact(finalData))
        console.log("isError", isError)
        if (isError) return
        console.log(finalData, 'final Data')

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