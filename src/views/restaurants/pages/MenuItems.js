import React, {Fragment, useEffect, useRef, useState} from 'react'
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
import PageItemsInput from "../components/table/tables/PageItemsInput"
import SearchBox from "../components/table/tables/SearchBox"
import PaginatedDataTable from "../components/table/tables/PaginatedDataTable"
import {getMenuItem} from "../../../tempData/fakeData"
import {Edit, FileText, MoreVertical, Trash} from "react-feather"
import {useDispatch, useSelector} from "react-redux"
import {FieldTypes} from "../../../utility/enums/FieldType"
import Joi from "joi-browser"
import Swal from "sweetalert2"
import FormModal from "../../../components/FormModal"
import {deleteMenuItem, getMenuItemSt, loadMenuItem, setMenuItem} from "../../../redux/restaurantPages/menuItemReducer"


const MenuItems = (props) => {

    const [itemsPerPage, setItemsPerPage] = useState(7)
    const [searchValue, setSearchValue] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const menuData = getMenuItem()
    const [getPageData, setPageData] = useState(menuData)

    // const customerList = useSelector(state => state.crmSms.list)
    const formInitialState = useSelector(state => state.menuItemReducer.object)
    const isEdit = useSelector(state => state.menuItemReducer.isEdit)
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
            label: 'Category',
            placeholder: 'Enter category',
            name: 'category',
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
        dispatch(loadMenuItem())
        // in case of edit get item from backend
        if (isEdit) setFormState({...formInitialState})
        else {
            dispatch(setMenuItem({
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
        dispatch(getMenuItemSt(id, true))
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
                dispatch(deleteMenuItem(id))
            }
        })
    }
    const detailOptClick = (id, e) => {
        e.preventDefault()
        console.log('call', props)
        props.history.push(`/Dashboard/menu/${id}`)
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
            updatedData = menuData.filter(item => {
                const startsWith =
                    item.name.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.category.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.modifier.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.prices.toLowerCase().startsWith(value.toLowerCase())

                const includes =
                    item.name.toLowerCase().includes(value.toLowerCase()) ||
                    item.category.toLowerCase().includes(value.toLowerCase()) ||
                    item.modifier.toLowerCase().includes(value.toLowerCase()) ||
                    item.prices.toLowerCase().includes(value.toLowerCase())
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
        setPageData(searchValue.length > 0 ? filteredData : menuData)
        setPageCount(searchValue.length > 0 ? Math.ceil(filteredData.length / itemsPerPage) : Math.ceil(getPageData.length / itemsPerPage))
    }, [itemsPerPage, searchValue])


// ** Table for Menu item page
    const menuItemColumns = [
        {
            sortable: true,
            name: 'Images',
            minWidth: '200px',
            selector: row => row.images,
            cell: row => <img height="50px" width="56px" alt={row.name}
                              src={require("../../../assets/images/pages/wine/wine-gift.jpg").default}/>
        },
        {
            sortable: true,
            name: 'Name',
            minWidth: '350px',
            selector: row => row.name
        },
        {
            sortable: true,
            name: 'Category',
            minWidth: '250px',
            selector: row => row.category
        },
        {
            sortable: true,
            name: 'Modifier',
            minWidth: '150px',
            selector: row => row.modifier,
            cell: row => {
                return (
                    <Badge pill>
                        {row.modifier}
                    </Badge>
                )
            }
        },
        {
            sortable: true,
            name: 'Addon',
            minWidth: '150px',
            selector: row => row.addon,
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
            name: 'Price',
            minWidth: '150px',
            selector: row => row.prices
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
                    <CardTitle tag="h4">Menu Items</CardTitle>
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
                    columns={menuItemColumns}
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

export default MenuItems
