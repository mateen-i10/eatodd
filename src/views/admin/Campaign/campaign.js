// ** React Imports
import React, {Fragment, useEffect, useState} from 'react'
import UILoader from "../../../@core/components/ui-loader"
import {useDispatch, useSelector} from "react-redux"
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
import {addCampaign, deleteCampaign, loadCampaigns} from "../../../redux/campaign/action"
import ReactPaginate from 'react-paginate'
import AsyncSelect from "react-select/async"
import { useForm } from 'react-hook-form'
//import {joiResolver} from "@hookform/resolvers/joi"
import Joi from "joi-browser"
import Datetime from "react-datetime"
import Select from "react-select"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const defaultValues = {
    name: '',
    type: 0,
    template: 0,
    scheduleDate: '',
    scheduleDay: 0,
    repeat: 0
}

const Campaign = () => {

    const campaignList = useSelector(state => state.campaign.list)
    const miscData = useSelector(state => state.campaign.miscData)
    const formInitialState = useSelector(state => state.campaign.object)
    //const isRequestCompleted = useSelector(state => state.campaign.isRequestCompleted)
    const isEdit = useSelector(state => state.campaign.isEdit)
    const isLoading = useSelector(state => state.campaign.isLoading)

    const [currentPage, setCurrentPage] = useState(miscData && miscData.pageIndex ? miscData.pageIndex : 1)
    const [pageSize] = useState(10)
    const [searchValue, setSearchValue] = useState('')
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

    useEffect(() => {
        if (formInitialState && formInitialState.schedules) {
            setSchedule([...formInitialState.schedules])
        }
    }, [isEdit])

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

    const campaignSchema = yup.object().shape({
        //name: yup.string().required().label('Name')
        //type: yup.number().required().label('Type')
        //MoveDate: yup.date().required("Move Date is required!")
    })

    const {
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues,
        resolver: yupResolver(campaignSchema)
    })

    const deleteClick = (id, e) => {
        e.preventDefault()
        // show sweet alert here
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#7367f0',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteCampaign(id))
            }
        })
    }

    const detailOptClick = (id, e) => {
        e.preventDefault()
        props.history.push(`/campaign/${id}`)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('event', e)
        dispatch(addCampaign())
    }

    const handleFilter = e => {
        console.log('e.keyCode', e.keyCode)
        const value = e.target.value
        if (e.keyCode === 13) {
            dispatch(loadCampaigns(currentPage, pageSize, value))
        }
        setSearchValue(value)
    }

    // ** Function to handle Pagination
    const handlePagination = page => {
        dispatch(loadCampaigns(page.selected + 1, pageSize, searchValue))
        setCurrentPage(page.selected + 1)
    }

    const columns = [
        {
            name: 'Name',
            selector: (row) => row.name,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Type',
            selector: (row) => row.type,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Actions',
            allowOverflow: true,
            cell: row => {
                return (
                    <div className='d-flex'>
                        <UncontrolledDropdown>
                            <DropdownToggle className='pe-1 cursor-pointer' tag='span'>
                                <MoreVertical size={15} />
                            </DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem tag='a' href='/' className='w-100' onClick={e => detailOptClick(row.id, e)}>
                                    <FileText size={15} />
                                    <span className='align-middle ms-50'>Details</span>
                                </DropdownItem>
                                <DropdownItem tag='a' href='/' className='w-100' onClick={e => deleteClick(row.id, e)}>
                                    <Trash size={15} />
                                    <span className='align-middle ms-50'>Delete</span>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <span className='cursor-pointer' /*onClick={() => { editClick(row.id) }}*/><Edit size={15} /></span>
                    </div>
                )
            }
        }
    ]

    // ** Custom Pagination
    const CustomPagination = () => {
        const count = miscData?.totalPages ?? 0

        return <ReactPaginate
            previousLabel={''}
            nextLabel={''}
            breakLabel='...'
            pageCount={count || 1}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            activeClassName='active'
            forcePage={currentPage !== 0 ? currentPage - 1 : 0}
            onPageChange={page => handlePagination(page)}
            pageClassName={'page-item'}
            nextLinkClassName={'page-link'}
            nextClassName={'page-item next'}
            previousClassName={'page-item prev'}
            previousLinkClassName={'page-link'}
            pageLinkClassName={'page-link'}
            breakClassName='page-item'
            breakLinkClassName='page-link'
            containerClassName={
                'pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1'
            }
        />
    }

    const dataToRender = () => {
        if (campaignList.length > 0) {
            return campaignList
        }  else {
            return campaignList.slice(0, pageSize)
        }
    }

    return (
        <>
            <Fragment>
                <UILoader blocking={isLoading}>
                    <Card>
                        <CardHeader className='row border-bottom'>
                            <CardTitle tag='h4' className='col-4'>Campaigns</CardTitle>
                            <div className='col-8 mt-md-0 mt-1'>
                                <div className='row'>
                                    <div className='col-8 ps-5'>
                                        <Input
                                            className='search-field'
                                            type='text'
                                            bsSize='sm'
                                            id='search-input'
                                            value={searchValue}
                                            onKeyUp={handleFilter}
                                            onChange={handleFilter}
                                            placeholder= 'Search by name'
                                        />
                                    </div>
                                    <div className='col-4'>
                                        <Button className='float-end' color='primary' onClick={() => setFormModal(!formModal)}>
                                            <Plus size={15} />
                                            <span className='align-middle ms-50'>Add Campaign</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CardHeader>
                        <DataTable
                            noHeader
                            pagination
                            paginationServer
                            className='react-dataTable'
                            columns={columns}
                            sortIcon={<ChevronDown size={10} />}
                            paginationComponent={CustomPagination}
                            data={dataToRender()}
                        />
                    </Card>
                </UILoader>
            </Fragment>


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
