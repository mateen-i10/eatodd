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
import {ChevronDown, Delete, Edit, FileText, Minus, MoreVertical, Plus, Trash} from "react-feather"
import DataTable from 'react-data-table-component'
import Swal from "sweetalert2"
import {addCampaign, deleteCampaign, getCampaign, loadCampaigns, updateCampaign} from "../../../redux/campaign/action"
import ReactPaginate from 'react-paginate'
import AsyncSelect from "react-select/async"
import Select from "react-select"
import {toast} from "react-toastify"
import {setDetailLoading} from "../../../redux/campaign/reducer"
import moment from "moment"
import Joi from "joi-browser"
import Datetime from "react-datetime"
import {loadOptions} from "../../../utility/Utils"
import '../style.css'
import DateTimePicker from "react-datetime-picker"
import 'react-datetime-picker/dist/DateTimePicker.css'
import 'react-calendar/dist/Calendar.css'
import 'react-clock/dist/Clock.css'

const Campaign = (props) => {

    const campaignList = useSelector(state => state.campaign.list)
    const miscData = useSelector(state => state.campaign.miscData)
    const formInitialState = useSelector(state => state.campaign.object)
    //const isRequestCompleted = useSelector(state => state.campaign.isRequestCompleted)
    const isSuccess = useSelector(state => state.campaign.isSuccess)
    const isEdit = useSelector(state => state.campaign.isEdit)
    const isLoading = useSelector(state => state.campaign.isLoading)

    const [currentPage, setCurrentPage] = useState(miscData && miscData.pageIndex ? miscData.pageIndex : 1)
    const [pageSize] = useState(10)
    const [searchValue, setSearchValue] = useState('')
    const dispatch = useDispatch()
    const [formModal, setFormModal] = useState(false)

    const [edit, setEdit] = useState(false)

    const scheduleObject = {scheduleDate:'', scheduleDay:0, repeat:0, isDate: false}
    const [schedule, setSchedule] = useState([scheduleObject])

    const [name, setName] = useState('')
    const [type, setType] = useState(null)
    const [templateId, setTemplateId] = useState(0)
    const [restaurantIds, setRestaurantIds] = useState([])

    const [htmlSelected, setHtmlSelected] = useState(false)
    console.log('html', htmlSelected)
    console.log('restaurantIds', restaurantIds)
    console.log('formInitialState', formInitialState)

    const [isSchedulesSend, setIsSchedulesSend] = useState(false)

    const [checkState, setCheckState] = React.useState(false)

    const [isHTML, setIsHTML] = useState(false)

    //setting errors
    const [errors, setErrors] = useState({})

    const [excelFile, setExcelFile] = useState(null)
    const [typeError, setTypeError] = useState(null)

    console.log('excelFile', excelFile)

    const handleFile = (e) => {
        const  fileTypes = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv']

        const selectedFile = e.target.files[0]

        if (selectedFile) {
            console.log(selectedFile.type)
            if (selectedFile && fileTypes.includes(selectedFile.type)) {
                setTypeError(null)

                const reader = new FileReader()
                reader.readAsArrayBuffer(selectedFile)
                reader.onload = (e) => {
                    setExcelFile(e.target.result)
                }
            } else {
                setTypeError("Please select only excel file!")
                setExcelFile(null)
            }
        } else {
            console.log("Please Select Your File")
        }
    }

    const announceType = [
        {label: 'SMS', value: 1},
        {label: 'Email', value: 2}
    ]

    const templates = async (search) => {
        return loadOptions('template/getByIsHTML', search, 1, 10, isHTML)

    }

     const restaurants = async (search) => {
         return loadOptions('restaurant', search, 1, 10, isHTML)

     }

   /* const templates = async (pageIndex = 1, pageSize =  10, searchQuery = undefined, isHTML = false) => {
          return await httpService._get(`${baseURL}template/getByIsHTML?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${searchQuery}&&isHTML=${isHTML}`)
                .then(response => {

                    // success case
                    if (response.status === 200 && response.data.statusCode === 200) {
                        console.log('success', response)
                        const fnal = response.data.data.map(d =>  {
                            return {label: `${d.name}`, value: d.id}
                        })
                        console.log('ffffff', fnal)
                        return fnal

                        //setisHTML(final)
                    } else {
                        //general Error Action
                        toast.error(response.data.message)
                    }
                }).catch(error => {
                toast.error(error.message)
            })
    }
*/
    useEffect(() => {
        console.log('cccccc')
        if (type !== null) {
            if (type.value === 1) {
                setIsHTML(false)
            } else {
                setIsHTML(true)
            }
            //setTemplateId(0)
        }

    }, [type])

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

    /*const category = [
        {label: 'All', value: 1},
        {label: 'Meal', value: 2},
        {label: 'Catering', value: 3},
        {label: 'Wine Club', value: 4}
    ]*/

    const handleType = (e) => {
        console.log('clickType', e)
        setType(e)
        setHtmlSelected(true)
    }

    const handleCheck = () => {
        setCheckState(!checkState)
        if (checkState === true) {
            setRestaurantIds([])
        }
    }

    const handleSchedules = (e) => {
        console.log('eee', e)
        setIsSchedulesSend(!isSchedulesSend)
        if (isSchedulesSend === false) {
            setSchedule([])
        }
    }

    /*const onSelectCategory = (e) => {
        console.log('clickCategory', e)
        setCategoryId(e)
    }*/

    useEffect(() => {
        dispatch(loadCampaigns())
    }, [isSuccess])

    const removeSchedule = (index) => {
        const newArray = [...schedule]
        newArray.splice(index, 1)
        setSchedule(newArray)
    }

    const addSchedule = () => {
        const newArray = [...schedule, scheduleObject]
        setSchedule(newArray)
    }

    const onValueScheduleDay = (index, e) => {
        console.log('eee', e)
        const newArray = schedule.map((s, i) => {
            if (i === index) {
                const currentDate = new Date()
                const date = e.value === 1 ? moment(currentDate.getDate()).format() : e.value === 2  ? moment(currentDate.setDate(currentDate.getDate() + 1)).format() : e.value === 3  ? moment(currentDate.setDate(currentDate.getDate() + 7)).format() : ''
                console.log('dddd', date)
                s =  {...s, scheduleDay: e.value, isDate: e.value === 4, scheduleDate: date}
            }
            return s
        })
        console.log('newArrayDay', newArray)
        setSchedule(newArray)
    }

    const onDateChange = (index, event) => {
        console.log('date', event)
        const newArray = schedule.map((s, i) => {
            if (i === index) {
                s = {...s, scheduleDate: moment(event).format() }
            }
            return s
            console.log('s', s)
        })
        console.log('newArray', newArray)
        setSchedule(newArray)
    }

    const onValueRepeat = (index, e) => {
        const newArray = schedule.map((s, i) => {
            if (i === index) {
                s = {...s, repeat : e.value}
            }
            return s
        })
        console.log('newArrayRe', newArray)
        setSchedule(newArray)
    }

    const campaignSchema = Joi.object({
        name: Joi.string().required().label('Name'),
        type: Joi.object({label: Joi.string().required(), value: Joi.number().required()}).error(() => {
            return {
                message: '"Type" is required'
            }
        }),
        templateId: Joi.object({label: Joi.string().required(), value: Joi.number().required()}).error(() => {
            return {
                message: '"Template" is required'
            }
        })
        //MoveDate: yup.date().required("Move Date is required!")
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

    const handleClose = () => {
        setName('')
        setType(null)
        setTemplateId(0)
        setRestaurantIds([])
        //setCategoryId(0)
        setSchedule([])
        //setIsExcel(false)
    }

    const setData = () => {
        try {
            //setId(formInitialState.id)
            setName(formInitialState.name)
            setType(formInitialState.type === 1 ? {label: 'SMS', value: 1} : {label: 'Email', value: 2})
            //setCategoryId(formInitialState.category === 1 ? {label: 'All', value: 1} : formInitialState.category === 2 ? {label: 'Meal', value: 2} : formInitialState.category === 3 ? {label: 'Catering', value: 3} : {label: 'Wine Club', value: 4})
            setTemplateId({label: formInitialState.template.name, value: formInitialState.template.id})
            //setRestaurantIds({label: formInitialState.restaurants.name, value: formInitialState.restaurants.id})
            setRestaurantIds(formInitialState.restaurants.map(r => { return {label: r.name, value: r.id} }))
            setSchedule(formInitialState.schedules.map(s => {
                return {scheduleDate: moment(new Date(s.scheduleDate)).format(), scheduleDay: s.scheduleDay, repeat: s.repeat}
            }))
            //setEdit(true)
        } catch (e) {
            toast.error(e.message)
        }

    }
    useEffect(() => {
        if (isEdit) setData()
    }, [formInitialState, isEdit])

    const addClickBtn = () => {
        setName('')
        setType(null)
        setTemplateId(0)
        setRestaurantIds([])
        //setCategoryId(0)
        //setIsExcel(false)
        setSchedule([{scheduleDate:'', scheduleDay:0, repeat:0, isDate: false}])
    }

    const editClick = (id) => {
        console.log('idEdit', id)
        dispatch(getCampaign(id, true))
        setFormModal(!formModal)
        setEdit(true)
        //setIsExcel(false)
    }

    const handleSubmit = () => {
        try {
            const data = {
                name,
                type,
                templateId
                //restaurantIds
                //category,
                //emailList,
                //schedules
            }

            const finalData = {
                name,
                type: type.value,
                templateId: templateId.value,
                restaurantIds: restaurantIds.map(p => p.value).toString(),
                category: 1,
                emailList: excelFile,
                schedules: isSchedulesSend === true ? schedule : [],
                scheduleString: isSchedulesSend === true ? JSON.stringify(schedule) : null
            }

            const isError = Joi.validate(data, campaignSchema, {abortEarly: false})
            console.log(isError, "errors")
            const {error} = isError
            if (!error) {
                console.log('submit data', finalData)
                dispatch(setDetailLoading(true))
                edit ? dispatch(updateCampaign({id: formInitialState.id,
                    ...finalData,
                    schedules: finalData.schedules.map(d => {
                           return  {...d, scheduleDate: moment(new Date(d.scheduleDate)).format()}
                    })})) : dispatch(addCampaign(finalData))
                handleClose()
                setEdit(false)
                setFormModal(!formModal)
            } else {
                const errorData = {}
                for (const item of error?.details) {
                    console.log("ITEM MSG", item)
                    const name = item.path[0]
                    const message = item.message
                    errorData[name] = message
                }
                setErrors(errorData)
            }

        } catch (e) {
            toast.error(e.message)
        }

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
            selector: (row) => `${row.type === 1 ? "SMS" : "Email"}`,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Template',
            selector: (row) => `${row.template?.name}`,
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
                        <span className='cursor-pointer' onClick={() => { editClick(row.id) }}><Edit size={15} /></span>
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
                                        <Button className='float-end' color='primary' onClick={() => {
                                            setFormModal(true)
                                            addClickBtn()
                                        }}>
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
                            className='react-dataTable my-dataTable'
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
                    <Modal isOpen={formModal} toggle={() => {
                        setFormModal(!formModal)
                        setEdit(false)
                    }} fade={true} backdrop="static" className='modal-lg'>
                        <ModalHeader toggle={() => {
                            setFormModal(!formModal)
                            setEdit(false)
                            handleClose()
                        }}>Campaign Form</ModalHeader>

                        <ModalBody>
                                <Row>
                                    <Col md={6}>
                                        <div className='mb-2'>
                                            <Label className='form-label' for='name'>Name:</Label>
                                            <Input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} id='name' placeholder='Enter Name' />
                                            {!name ? errors.name && (
                                                <div className="text-danger">
                                                    {errors.name}
                                                </div>
                                            ) : null}
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className='mb-2'>
                                            <label>Type <span className='text-danger'>*</span></label>
                                            <Select
                                                options={announceType}
                                                value={type}
                                                onChange={handleType}
                                            />
                                            {!type ? errors.type && (
                                                <div className="text-danger">
                                                    {errors.type}
                                                </div>
                                            ) : null}
                                        </div>
                                    </Col>

                                    {type && type.value === 1 && <Col md={6}>
                                        <div className='mb-2'>
                                            <label>Template <span className='text-danger'>*</span></label>
                                            <AsyncSelect
                                                defaultOptions
                                                value={templateId}
                                                onChange={e => setTemplateId(e)}
                                                loadOptions={templates}
                                                closeMenuOnSelect={true}
                                                isMulti = {false}
                                            />
                                        </div>
                                    </Col>}
                                    {type && type.value === 2 && <Col md={6}>
                                        <div className='mb-2'>
                                            <label>Template <span className='text-danger'>*</span></label>
                                            <AsyncSelect
                                                defaultOptions
                                                value={templateId}
                                                onChange={e => setTemplateId(e)}
                                                loadOptions={templates}
                                                closeMenuOnSelect={true}
                                                isMulti = {false}
                                            />
                                        </div>
                                    </Col>}

                                    <Col md={6}>
                                        <div className="form-check mt-2">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                //value={isExcel}
                                                //checked={isExcel}
                                                onChange={handleCheck}
                                            />
                                            <label className="form-check-label">
                                                Is Excel Sheet
                                            </label>
                                        </div>
                                    </Col>

                                    {checkState === true && <div className='mt-3'>
                                        <Col md={12}>
                                            <div className='mb-2'>
                                                <label>Select Excel File</label>
                                                <input className='mt-1 form-control' type='file' onChange={handleFile} />
                                                {typeError && <>
                                                    <div className='alert alert-danger mt-1 p-1' role="alert">{typeError}</div>
                                                </>}
                                            </div>
                                        </Col>

                                    </div>}

                                    {checkState === false && <>
                                        <Col md={6}>
                                            <div className='mb-2'>
                                                <label>Select Restaurant</label>
                                                <AsyncSelect
                                                    defaultOptions
                                                    value={restaurantIds}
                                                    onChange={e => setRestaurantIds(e)}
                                                    loadOptions={restaurants}
                                                    closeMenuOnSelect={true}
                                                    isMulti = {true}
                                                />
                                            </div>
                                        </Col>

                                        {/*<Col md={6}>
                                            <div className='mb-2'>
                                                <label>Select Category</label>
                                                <Select
                                                    options={category}
                                                    //value={categoryId}
                                                    defaultValue={{label: "All", value: 1}}
                                                    onChange={onSelectCategory}
                                                />
                                            </div>
                                        </Col>*/}
                                    </>}

                                </Row>
                            <hr />

                                <Row>
                                    <div className='ms-1'>
                                        <h4 style={{color: "red", marginTop: '25px'}}>Important Note</h4>
                                        <p>If you don't want to select Schedules, email will send to selected customers immediately.</p>

                                        {isSchedulesSend === false && <div className="form-check mt-2">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                //value={isExcel}
                                                checked={isSchedulesSend}
                                                onChange={handleSchedules}
                                            />
                                            <label className="form-check-label">
                                                Is Add Schedule
                                            </label>
                                        </div>}

                                        {isSchedulesSend === true && <div className="form-check mt-2">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                //value={isExcel}
                                                checked={isSchedulesSend}
                                                onChange={handleSchedules}
                                            />
                                            <label className="form-check-label">
                                                Is Remove Schedule
                                            </label>
                                        </div>}

                                        {isSchedulesSend === true && <>
                                            <h3>Schedule List</h3>
                                            {schedule.map((i, index) => {
                                                return <div key={i.scheduleDay}>
                                                    <div className='row mt-1'>
                                                        <div className='col-3'>
                                                            <Select
                                                                onChange={(e) => {
                                                                    onValueScheduleDay(index, e)
                                                                }}
                                                                value={{label: i.scheduleDay === 1 ? 'Today' : i.scheduleDay === 2 ? 'Tomorrow' : i.scheduleDay === 3 ? 'Next Week' : i.scheduleDay === 4 ? 'Pick A Date' : '', value: i.scheduleDay}}
                                                                options={scheduleDays}
                                                                closeMenuOnSelect={true}
                                                                isMulti = {false}
                                                            />
                                                        </div>
                                                        {(i.isDate || i.scheduleDay === 4) && <div className='col-4'>
                                                            <DateTimePicker
                                                                className='dateStyles'
                                                                placeholder='Schedule Date'
                                                                value={i.scheduleDate}
                                                                closeOnSelect={true}
                                                                clearIcon={null}
                                                                onChange={(e) => {
                                                                    onDateChange(index, e)
                                                                }}
                                                            />
                                                        </div>}
                                                        <div className='col-3'>
                                                            <Select
                                                                onChange={(e) => onValueRepeat(index, e)}
                                                                options={repeat}
                                                                value={{label: i.repeat === 1 ? 'Daily' : i.repeat === 2 ? 'Week Days' : i.repeat === 3 ? 'Weekly' : i.repeat === 4 ? 'Monthly' : ''}}
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
                                        </>}
                                    </div>
                                </Row>

                        </ModalBody>
                        <ModalFooter>
                                <Button color='danger' onClick={() => {
                                    setFormModal(!formModal)
                                    setEdit(false)
                                    handleClose()
                                }}>
                                    Close
                                </Button>
                                <Button color='primary' onClick={handleSubmit}>
                                    Submit
                                </Button>
                            </ModalFooter>

                    </Modal>
                </div>
            </div>

        </>
    )
}

export default Campaign
