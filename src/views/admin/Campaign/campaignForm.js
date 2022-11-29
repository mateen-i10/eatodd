// ** React Imports
import React, {Fragment, useState} from 'react'
import UILoader from "../../../@core/components/ui-loader"
import {useDispatch} from "react-redux"
import {
    Button,
    Card,
    CardHeader,
    CardTitle, Col, DropdownItem,
    DropdownMenu,
    DropdownToggle, Form,
    Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row,
    UncontrolledDropdown
} from "reactstrap"
import {ChevronDown, Delete, Edit, FileText, MoreVertical, Plus, Trash} from "react-feather"
import DataTable from 'react-data-table-component'
import Swal from "sweetalert2"
import {addCampaign} from "../../../redux/campaign/action"
/*import ReactPaginate from 'react-paginate'
import AsyncSelect from "react-select/async"
import { useForm } from 'react-hook-form'
//import {joiResolver} from "@hookform/resolvers/joi"
import Joi from "joi-browser"
import Datetime from "react-datetime"
import Select from "react-select"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'*/

/*const defaultValues = {
    name: '',
    type: 0,
    template: 0,
    scheduleDate: '',
    scheduleDay: 0,
    repeat: 0
}*/

const Campaign = () => {

    //const isEdit = useSelector(state => state.campaign.isEdit)
    const dispatch = useDispatch()
    const [formModal, setFormModal] = useState(false)

    const scheduleObject = {scheduleDate: '', scheduleDay: 0, repeat: 0}
    const [schedule, setSchedule] = useState([scheduleObject])

    const [date, setDate] = useState('')

    const [name, setName] = useState('')
    const [type, setType] = useState(0)
    const [template, setTemplate] = useState(0)

    const announceType = [
        {label: 'SMS', value: 1},
        {label: 'Email', value: 2}
    ]

    const templates = async () => [
        {label: 'Template 1', value: 1},
        {label: 'Template 2', value: 2},
        {label: 'Template 3', value: 3},
        {label: 'Template 4', value: 4}
    ]

    const scheduleDays = [
        {label: 'Today', value: 1},
        {label: 'Tomorrow', value: 2},
        {label: 'Next Week', value: 3},
        {label: 'Pick A Date', value: 4}
    ]

    const repeat = [
        {label: 'Daily', value: 1},
        {label: 'Week Days', value: 2},
        {label: 'Weekly', value: 3},
        {label: 'Monthly', value: 4}
    ]

    const handleType = (e) => {
        console.log('clickType', e)
        setType(e)
    }

  /*  useEffect(() => {
        if (formInitialState && formInitialState.schedules) {
            setSchedule([...formInitialState.schedules])
        }
    }, [isEdit])*/

    const removeSchedule = (index) => {
        const newArray = [...schedule]
        newArray.splice(index, 1)
        setSchedule(newArray)
    }

    const addSchedule = () => {
        const newArray = [...schedule, scheduleObject]
        setSchedule(newArray)
    }

    /* const onValueChange = (index, name, event) => {
         const newArray = schedule.map((s, i) => {
             if (i === index) {
                 s[name] = event.target.value
             }
             return s
         })

         setSchedule(newArray)
     }*/

    const onValueScheduleDay = (index, e) => {
        console.log('eee', e)
        const newArray = schedule.map((s, i) => {
            if (i === index) {
                s = e.value
            }
            return s
        })
        setSchedule(newArray)
    }

    const onDateChange = (index, event) => {
        const newArray = schedule.map((s, i) => {
            if (i === index) {
                s = event
            }
            return s
        })

        setSchedule(newArray)
    }

    const onValueRepeat = (index, e) => {
        const newArray = schedule.map((s, i) => {
            if (i === index) {
                s = e.value
            }
            return s
        })
        setSchedule(newArray)
    }

    /*const campaignSchema = Joi.object({
        name: Joi.string().required().label('Name'),
        type: Joi.number().required().label('Type')
        //MoveDate: yup.date().required("Move Date is required!")
    })*/

  /*  const campaignSchema = yup.object().shape({
        //name: yup.string().required().label('Name')
        //type: yup.number().required().label('Type')
        //MoveDate: yup.date().required("Move Date is required!")
    })*/

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('event', e)
        dispatch(addCampaign())
    }

    return (
        <>
            <div className='demo-inline-spacing'>
                <div>
                    <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} fade={true} backdrop="static" className='modal-lg'>
                        <ModalHeader toggle={() => setFormModal(!formModal)}>Login Form</ModalHeader>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <ModalBody>
                                <Row>
                                    <Col md={6}>
                                        <div className='mb-2'>
                                            <Label className='form-label' for='name'>Name:</Label>
                                            <Input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} id='name' placeholder='Enter Name' />
                                            {errors.name && <span className="ml-1" style = {{ width: '100%', fontSize: '0.857rem', color: '#ea5455'}}>{errors.name.message}</span>}
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className='mb-2'>
                                            <label>Type <span className='text-danger'>*</span></label>
                                            <Select
                                                options={announceType}
                                                //defaultOptions
                                                //isLoading={true}
                                                value={type}
                                                onChange={handleType}
                                            />
                                            {errors.type && <span className="ml-1" style = {{ width: '100%', fontSize: '0.857rem', color: '#ea5455'}}>{errors.type.message}</span>}
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className='mb-2'>
                                            <label>Template <span className='text-danger'>*</span></label>
                                            <AsyncSelect
                                                defaultOptions
                                                value={template}
                                                onChange={e => setTemplate(e)}
                                                loadOptions={templates}
                                                closeMenuOnSelect={true}
                                                isMulti = {false}
                                            />
                                        </div>
                                        {errors.template && <span className="ml-1" style = {{ width: '100%', fontSize: '0.857rem', color: '#ea5455'}}>{errors.template.message}</span>}
                                    </Col>
                                </Row>
                                <Row>
                                    <div className='ms-1'>
                                        <h5>Schedule List</h5>
                                        {schedule.map((i, index) => {
                                            return <div>
                                                <div className='row mt-1'>
                                                    <div className='col-3'>
                                                        <Select
                                                            //defaultOptions
                                                            value={i.scheduleDay}
                                                            onChange={(e) => {
                                                                onValueScheduleDay(index, e)
                                                                if (e.value === 4) {
                                                                    setDate('4')
                                                                } else {
                                                                    setDate('')
                                                                }
                                                            }}
                                                            options={scheduleDays}
                                                            closeMenuOnSelect={true}
                                                            isMulti = {false}
                                                        />
                                                    </div>
                                                    {date === '4' && <div className='col-4'>
                                                        <Datetime
                                                            placeholder='Schedule Date'
                                                            locale="en-gb"
                                                            //initialViewMode={'date'}
                                                            value={i.scheduleDate}
                                                            dateFormat={true}
                                                            closeOnSelect={true}
                                                            onChange={(e) => {
                                                                onDateChange(index, e)
                                                            }}
                                                        />
                                                    </div>}
                                                    <div className='col-3'>
                                                        <Select
                                                            //defaultOptions
                                                            value={i.repeat}
                                                            onChange={(e) => onValueRepeat(index, e)}
                                                            options={repeat}
                                                            closeMenuOnSelect={true}
                                                            isMulti = {false}
                                                        />
                                                    </div>
                                                    {schedule.length > 1 && <div className='col-1'>
                                                        <Button.Ripple className='btn-icon' color='danger' onClick={() => removeSchedule(index)}>
                                                            <Delete size={12}/>
                                                        </Button.Ripple>
                                                    </div>
                                                    }
                                                </div>
                                            </div>
                                        })}
                                        <div className='col-2'>
                                            <Button.Ripple className='btn-icon mt-1 ms-1' color='primary' onClick={addSchedule}>
                                                <Plus size={12} />
                                            </Button.Ripple>
                                        </div>
                                    </div>
                                </Row>
                            </ModalBody>
                            <ModalFooter>
                                <Button color='danger' onClick={() => setFormModal(!formModal)}>
                                    Close
                                </Button>
                                <Button color='primary'>
                                    Submit
                                </Button>
                            </ModalFooter>
                        </Form>
                    </Modal>
                </div>
            </div>

        </>
    )
}

export default Campaign
