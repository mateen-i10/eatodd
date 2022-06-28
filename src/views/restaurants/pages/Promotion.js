import React, {Fragment, useEffect, useRef, useState} from 'react'
import {getPromotionData} from "../../../tempData/fakeData"
import {
    Badge,
    Card,
    CardHeader,
    CardTitle,
    Col,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Row,
    UncontrolledDropdown
} from "reactstrap"
import PageItemsInput from "../components/tables/PageItemsInput"
import SearchBox from "../components/tables/SearchBox"
import PaginatedDataTable from "../components/tables/PaginatedDataTable"
import {Edit, FileText, MoreVertical, Trash} from "react-feather"
import {useDispatch, useSelector} from "react-redux"
import {FieldTypes} from "../../../utility/enums/FieldType"
import Joi from "joi-browser"
import Swal from "sweetalert2"
import FormModal from "../../../components/FormModal"
import {
    deletePromotion,
    getPromotion,
    loadPromotion,
    setPromotion
} from "../../../redux/restaurantPages/promotionsReducer"


const Promotion = (props) => {
    const [itemsPerPage, setItemsPerPage] = useState(7)
    const [searchValue, setSearchValue] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const promotionData = getPromotionData()
    const [getPageData, setPageData] = useState(promotionData)

    // const customerList = useSelector(state => state.crmSms.list)
    const formInitialState = useSelector(state => state.promotionReducer.object)
    const isEdit = useSelector(state => state.promotionReducer.isEdit)
    const dispatch = useDispatch()

    console.log('formInitialState', formInitialState)
    // ** refs
    const formModalRef = useRef(null)
    const [modalTitle, setModalTitle] = useState()
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
            type: FieldTypes.Text,
            label: 'Code',
            placeholder: 'Enter code',
            name: 'code',
            isRequired: false,
            fieldGroupClasses: 'col-6'
        }
    ])

    // ** schema for validations
    const schema = Joi.object({
        name: Joi.string().required().label("Name"),
        instruction: Joi.string().required().label("Email")
    })
    useEffect(() => {
        dispatch(loadPromotion())
        // in case of edit get item from backend
        if (isEdit) setFormState({...formInitialState})
        else {
            dispatch(setPromotion({
                name: '', instruction: ''
            }))
        }
    }, [isEdit])


    console.log(formState)
    console.log(modalTitle)

    // ** Function to handle filter
    const toggle = () => {
        setModal(!isModal)
        setFormState({...formInitialState})
    }
    const editClick = (id) => {
        toggle()
        dispatch(getPromotion(id, true))
        setModalTitle('Edited Menu Items Data')
    }
    const deleteClick = (id, e) => {
        e.preventDefault()
        // show sweet alert here
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deletePromotion(id))
            }
        })
    }
    const detailOptClick = (id, e) => {
        e.preventDefault()
        console.log('call', props)
        props.history.push(`/Dashboard/promotion/${id}`)
    }
    const handleSubmit = (event) => {
        // console.log("formState on submit", formState)
        event.preventDefault()
        const isError = formModalRef.current.validate(formState)
        if (isError) return

        // call api
        setModalLoading(true)
        console.log("form submitted")
    }


    const handlePerPage = e => {
        return (setItemsPerPage(parseInt(e.target.value)))
    }
    const handlePagination = e => {
        return (setCurrentPage(e.selected))
    }
    // ** Function to handle filter
    const handleFilter = e => {
        const value = e.target.value
        let updatedData = []
        setSearchValue(value)
        if (value.length) {
            updatedData = promotionData.filter(item => {
                const startsWith =
                    item.name.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.code.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.type.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.actions.toLowerCase().startsWith(value.toLowerCase())

                const includes =
                    item.name.toLowerCase().includes(value.toLowerCase()) ||
                    item.code.toLowerCase().includes(value.toLowerCase()) ||
                    item.type.toLowerCase().includes(value.toLowerCase()) ||
                    item.actions.toLowerCase().includes(value.toLowerCase())
                if (startsWith) {
                    return startsWith
                } else if (!startsWith && includes) {
                    return includes
                } else return null
            })
            setFilteredData(updatedData)
            setSearchValue(value)
        }
    }
    useEffect(() => {
        setPageData(searchValue.length > 0 ? filteredData : promotionData)
        setPageCount(searchValue.length > 0 ? Math.ceil(filteredData.length / itemsPerPage) : Math.ceil(getPageData.length / itemsPerPage))
    }, [itemsPerPage, searchValue])

    const promotionColumns = [
        {
            sortable: true,
            name: 'Status',
            minWidth: '225px',
            selector: row => row.status,
            cell: (row) => {
                return (
                    <div>
                        <Badge>{row.name}
                        </Badge>
                    </div>
                )
            }
        },
        {
            sortable: true,
            name: 'Name',
            minWidth: '250px',
            selector: row => row.name
        },
        {
            sortable: true,
            name: 'Code',
            minWidth: '250px',
            selector: row => row.code
        },
        {
            sortable: true,
            name: 'Type',
            minWidth: '150px',
            selector: row => row.type
        },
        {
            sortable: true,
            name: 'Amount',
            minWidth: '150px',
            selector: row => row.amount
        },
        {
            sortable: true,
            name: 'Actions',
            minWidth: '150px',
            selector: row => row.actions,
            cell: (row) => {
                return (
                    <div className='d-flex'>
                        <UncontrolledDropdown>
                            <DropdownToggle className='pe-1' tag='span'>
                                <MoreVertical size={15}/>
                            </DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem tag='a' href='/' className='w-100'
                                              onClick={e => detailOptClick(row.id, e)}>
                                    <FileText size={15}/>
                                    <span className='align-middle ms-50'>Details</span>
                                </DropdownItem>
                                <DropdownItem tag='a' href='/' className='w-100'
                                              onClick={e => deleteClick(row.id, e)}>
                                    <Trash size={15}/>
                                    <span className='align-middle ms-50'>Delete</span>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <span onClick={() => {
                            editClick(row.id)
                        }}><Edit size={15}/></span>
                    </div>
                )
            }
        }
    ]

    return (
        <Fragment>
            <Card>
                <CardHeader className="border-bottom">
                    <CardTitle tag="h4">Promotions</CardTitle>
                </CardHeader>
                <Row className="mx-0 mt-1 mb-50">
                    <Col sm="6">
                        <PageItemsInput itemsPerPage={itemsPerPage} onPageChange={handlePerPage}/>
                    </Col>
                    <Col
                        className="d-flex align-items-center justify-content-sm-end mt-sm-0 "
                        sm="6">
                        <SearchBox searchValue={searchValue} handleFilter={handleFilter}/>
                    </Col>
                </Row>
                <PaginatedDataTable
                    data={getPageData}
                    itemsPerPage={itemsPerPage}
                    handlePageClick={handlePagination}
                    columns={promotionColumns}
                    currentPage={currentPage}
                    pageCount={pageCount}/>
            </Card>
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
            />
        </Fragment>
    )
}

export default Promotion
