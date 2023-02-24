import React, {useEffect, useRef, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {
    Button,
    Card,
    CardHeader,
    CardTitle,
    Col,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Input,
    Row,
    UncontrolledDropdown
} from "reactstrap"
import {ChevronDown, Delete, Edit, FileText, MoreVertical, Plus, Trash} from "react-feather"
import {Fragment} from "@fullcalendar/core"
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import FormModal from "../../../components/FormModal"
import {FieldTypes} from "../../../utility/enums/FieldType"
import Joi from "joi-browser"
import useLoadData from "../../../utility/customHooks/useLoadData"
import useEdit from "../../../utility/customHooks/useEdit"
import Swal from "sweetalert2"
import useModalError from "../../../utility/customHooks/useModalError"
import UILoader from "../../../@core/components/ui-loader"
import {
    addMemberShipType,
    deleteMemberShipType,
    getMemberShipType,
    loadMemberShipTypes,
    updateMemberShipType
} from "../../../redux/memberShipType/action"
import {setIsEdit, setIsMemberShipTypeError, setMemberShipType} from "../../../redux/memberShipType/reducer"

const MembershipTypes = (props) => {
    const memberShipTypeList = useSelector(state => state.memberShip.list)
    const miscData = useSelector(state => state.memberShip.miscData)
    const formInitialState = useSelector(state => state.memberShip.object)
    const isEdit = useSelector(state => state.memberShip.isEdit)
    const isLoading = useSelector(state => state.memberShip.isLoading)
    const isError = useSelector(state => state.memberShip.isError)
    const isSuccess = useSelector(state => state.memberShip.isSuccess)
    const dispatch = useDispatch()

    // ** refs
    const formModalRef = useRef(null)
    const [currentPage, setCurrentPage] = useState(miscData && miscData.pageIndex ? miscData.pageIndex : 1)
    const [pageSize] = useState(10)
    const [searchValue, setSearchValue] = useState('')

    const packageItemObject = {name: '', description: ''}
    const [packagesItem, setPackagesItem] = useState([packageItemObject])

    useEffect(() => {
        if (formInitialState && formInitialState.packageItems) {
            setPackagesItem([...formInitialState.packageItems])
        }
    }, [isEdit])
    const removePackagesItem = (index) => {
        const newArray = [...packagesItem]
        newArray.splice(index, 1)
        setPackagesItem(newArray)
    }
    const addPackagesItem = () => {
        const newArray = [...packagesItem, packageItemObject]
        setPackagesItem(newArray)
    }
    const onValueChange = (index, name, event) => {
        console.log('index, name, event', index, name, event)
        const newArray = packagesItem.map((packages, i) => {
            if (i === index) {
                packages[name] = event.target.value
            }
            return packages
        })
        console.log('newArray', newArray)
        setPackagesItem(newArray)
    }

    const child = () => {
        return <div className='ms-1'>
            <h5>Package Items Information</h5>
            {packagesItem.map((i, index) => {
                return <div key={`optionsKey=${index}`} className='row mt-1'>
                    <div className='col-5'>
                        <Input
                            placeholder='Enter Name'
                            type='text'
                            value={i.name}
                            onChange={(e) => onValueChange(index, 'name', e)}
                        />
                    </div>
                    <div className='col-5'>
                        <Input
                            placeholder='Enter Description'
                            type='text'
                            value={i.description}
                            onChange={(e) => onValueChange(index, 'description', e)}
                        />
                    </div>
                    {packagesItem.length > 1 && <div className='col-1'>
                        <Button.Ripple className='btn-icon' color='danger' onClick={() => removePackagesItem(index)}>
                            <Delete size={12}/>
                        </Button.Ripple>
                    </div>
                    }
                    <hr className='mt-1'/>
                </div>

            })}
            <div className='col-2'>
                <Button.Ripple className='btn-icon mt-1 ms-1' color='primary' onClick={addPackagesItem}>
                    <Plus size={12}/>
                </Button.Ripple>
            </div>
        </div>
    }

    const billTypes = [
        {label: 'Monthly', value: 2},
        {label: 'Yearly', value: 3}
    ]

    const [modalTitle, setModalTitle] = useState('Add MemberShip Type')
    const [edit, setEdit] = useState(false)
    const [formState, setFormState] = useState({})
    const [isModal, setModal] = useState(false)
    const [isModalLoading, setModalLoading] = useState(false)
    const [formData] = useState([
        {
            type: FieldTypes.Text,
            label: 'Name',
            placeholder: 'Enter Name',
            name: 'name',
            isRequired: true,
            fieldGroupClasses: 'col-6'
        },
        {
            type: FieldTypes.Number,
            label: 'Amount',
            placeholder: 'Enter Amount',
            name: 'amount',
            isRequired: true,
            fieldGroupClasses: 'col-6'
        },
        {
            type: FieldTypes.Select,
            label: 'Bill Type',
            placeholder: 'Select Bill Type',
            name: 'billType',
            isRequired: true,
            fieldGroupClasses: 'col-6',
            options: billTypes,
            isAsyncSelect: false,
            isMulti: false
        },
        {
            type: FieldTypes.SwitchButton,
            label: 'Show Contact Us Form',
            name: 'showContactUsForm',
            isRequired: false,
            fieldGroupClasses: 'col-6 mt-2'
        },
        {
            type: FieldTypes.TextArea,
            label: 'Description',
            placeholder: 'Enter Description',
            name: 'description',
            fieldGroupClasses: 'col-12'
        }
    ])

    const schema = Joi.object({
        name: Joi.string().required().label("Name"),
        amount: Joi.number().required().label("Amount"),
        billType: Joi.number().required().label("Bill Type")
    })

    const toggle = () => {
        if (isModal) setEdit(false)
        setModal(!isModal)
        setFormState({...formInitialState})
        setPackagesItem([packageItemObject])
        if (isModalLoading) setModalLoading(false)
    }
    // custom hooks
    useLoadData(isSuccess, loadMemberShipTypes, isModal, toggle, currentPage, pageSize, searchValue)
    useEdit(isEdit, setModalLoading, setFormState, formInitialState, setEdit, setIsEdit, setMemberShipType, {
        name: '',
        amount: '',
        billType: '',
        showContactUsForm: false,
        description: ''
    })
    useModalError(isError, setModalLoading, setIsMemberShipTypeError)

    const addClick = () => {
        setModalTitle('Add MemberShip Type')
        toggle()
    }

    const editClick = (id) => {
        toggle()
        dispatch(getMemberShipType(id, true))
        setModalTitle('Edit MemberShip Type')
        setModalLoading(true)
    }

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
                dispatch(deleteMemberShipType(id))
            }
        })
    }

    const detailOptClick = (id, e) => {
        e.preventDefault()
        props.history.push(`/membershipType/${id}`)
    }
    const handleSubmit = (event) => {
        console.log("formState on submit", formState)
        event.preventDefault()
        const finalData = {...formState, packageItems: packagesItem}
        const isError = formModalRef.current.validate(formState)
        if (isError) return

        // call api
        setModalLoading(true)
        edit ? dispatch(updateMemberShipType(finalData)) : dispatch(addMemberShipType(finalData))
    }

    const handleFilter = e => {
        console.log('e.keyCode', e.keyCode)
        const value = e.target.value
        if (e.keyCode === 13) {
            dispatch(loadMemberShipTypes(currentPage, pageSize, value))
        }
        setSearchValue(value)
    }

    // ** Function to handle Pagination
    const handlePagination = page => {
        dispatch(loadMemberShipTypes(page.selected + 1, pageSize, searchValue))
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
            name: 'Amount',
            selector: (row) => row.amount,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'show ContactUs Form',
            selector: (row) => {
                return row.showContactUsForm ? "True" : "False"
            },
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
                                <MoreVertical size={15}/>
                            </DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem tag='a' href='/' className='w-100'
                                              onClick={e => detailOptClick(row.id, e)}>
                                    <FileText size={15}/>
                                    <span className='align-middle ms-50'>Details</span>
                                </DropdownItem>
                                <DropdownItem tag='a' href='/' className='w-100' onClick={e => deleteClick(row.id, e)}>
                                    <Trash size={15}/>
                                    <span className='align-middle ms-50'>Delete</span>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <span className='cursor-pointer' onClick={() => {
                            editClick(row.id)
                        }}><Edit size={15}/></span>
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
        if (memberShipTypeList.length > 0) {
            return memberShipTypeList
        } else {
            return memberShipTypeList.slice(0, pageSize)
        }
    }

    return (
        <Fragment>
            <UILoader blocking={isLoading}>
                <Card>
                    <CardHeader
                        className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
                        <CardTitle tag='h4'>Membership Types</CardTitle>
                        <Button.Ripple color='primary' onClick={(e) => addClick(e)}>Add a new Membership
                            Type</Button.Ripple>
                    </CardHeader>
                    <Row className='justify-content-end mx-0'>
                        <Col className='d-flex align-items-center justify-content-end mt-1' md='12' sm='12'>
                            <Input
                                className='dataTable-filter mb-50'
                                placeholder="Search"
                                type='text'
                                bsSize='sm'
                                id='search-input'
                                value={searchValue}
                                onKeyUp={handleFilter}
                                onChange={handleFilter}
                            />
                        </Col>
                    </Row>
                    <DataTable
                        noHeader
                        pagination
                        paginationServer
                        className='react-dataTable'
                        columns={columns}
                        sortIcon={<ChevronDown size={10}/>}
                        paginationComponent={CustomPagination}
                        data={dataToRender()}
                    />
                </Card>
            </UILoader>
            <FormModal ref={formModalRef}
                       formState={formState}
                       formData={formData}
                       setFormState={setFormState}
                       schema={schema}
                       isModal={isModal}
                       toggleModal={toggle}
                       modalTitle={modalTitle}
                       primaryBtnLabel='Save'
                       secondaryBtnLabel='Cancel'
                       isLoading={isModalLoading}
                       handleSubmit={handleSubmit}
                       children={child()}
            />
        </Fragment>
    )
}

export default MembershipTypes
