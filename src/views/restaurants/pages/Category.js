import React, {Fragment, useEffect, useState} from 'react'
import {getCategoryData} from "../../../tempData/fakeData"
import {
    Button,
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
import Swal from "sweetalert2"
import {deleteCategory, getCategory, loadCategory} from "../../../redux/restaurantPages/categoryReducer"
import AddCategory from "./forms/AddCategory"

const Category = (props) => {
    const [itemsPerPage, setItemsPerPage] = useState(7)
    const [searchValue, setSearchValue] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const categoryData = getCategoryData()
    const [getPageData, setPageData] = useState(categoryData)

    //here we go again

    // const customerList = useSelector(state => state.crmSms.list)
    const isEdit = useSelector(state => state.categoryReducer.isEdit)
    const dispatch = useDispatch()

    // ** refs
    const [isModal, setModal] = useState(false)
    const [editData, setEditData] = useState(0)

    useEffect(() => {
        dispatch(loadCategory())
    }, [isEdit])


    // ** Function to handle filter
    const toggle = () => {
        setModal(!isModal)
    }
    const addClick = (e) => {
        e.preventDefault()
        toggle()
    }
    const editClick = (data) => {
        toggle()
        dispatch(getCategory(data.id, true))
        setEditData(data)
        console.log('id of the user', data.id, data.full_name)
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
                dispatch(deleteCategory(id))
            }
        })
    }
    const detailOptClick = (id, e) => {
        e.preventDefault()
        console.log('call', props)
        props.history.push(`/Dashboard/category/${id}`)
    }
    // const handleSubmit = (event) => {
    //     // console.log("formState on submit", formState)
    //     event.preventDefault()
    //     const isError = formModalRef.current.validate(formState)
    //     if (isError) return
    //
    //     // call api
    //     setModalLoading(true)
    //     console.log("form submitted")
    // }

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
            updatedData = categoryData.filter(item => {
                const startsWith =
                    item.name.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.priority.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.pairing.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.action.toLowerCase().startsWith(value.toLowerCase())

                const includes =
                    item.name.toLowerCase().includes(value.toLowerCase()) ||
                    item.priority.toLowerCase().includes(value.toLowerCase()) ||
                    item.pairing.toLowerCase().includes(value.toLowerCase()) ||
                    item.action.toLowerCase().includes(value.toLowerCase())
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
        setPageData(searchValue.length > 0 ? filteredData : categoryData)
        setPageCount(searchValue.length > 0 ? Math.ceil(filteredData.length / itemsPerPage) : Math.ceil(getPageData.length / itemsPerPage))
    }, [itemsPerPage, searchValue])


    // ** Table for  category page
    const categoryColumns = [
        {
            sortable: true,
            name: 'Priority',
            minWidth: '225px',
            selector: row => row.priority
        },
        {
            sortable: true,
            name: 'Name',
            minWidth: '250px',
            selector: row => row.name
        },
        {
            sortable: true,
            name: 'Pairing',
            minWidth: '250px',
            selector: row => row.pairing
        },
        {
            sortable: true,
            name: 'Action',
            minWidth: '150px',
            selector: row => row.action,
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
                            editClick(row)
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
                    <CardTitle tag="h4">Category</CardTitle>
                        <Button.Ripple color='primary' onClick={(e) => addClick(e)}>Add a new Category</Button.Ripple>
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
                    columns={categoryColumns}
                    currentPage={currentPage}
                    pageCount={pageCount}/>
            </Card>
            <AddCategory isShow={isModal} setShow={toggle} data={editData} />
        </Fragment>
    )
}

export default Category
