import React, {Fragment, useEffect, useState} from 'react'
import {getInvItemData} from "../../../../tempData/fakeData"
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
import PageItemsInput from "../../components/tables/PageItemsInput"
import SearchBox from "../../components/tables/SearchBox"
import PaginatedDataTable from "../../components/tables/PaginatedDataTable"
import {Edit, FileText, MoreVertical, Trash} from "react-feather"
import FormModal from "../../../../components/FormModal"
import {useDispatch, useSelector} from "react-redux"
import {FieldTypes} from "../../../../utility/enums/FieldType"
import Joi from "joi-browser"
import Swal from "sweetalert2"
import {
    deleteInvItem,
    getInvItem,
    loadInvItem
} from "../../../../redux/restaurantPages/Inventory/itemReducer"
import Link from "react-router-dom/es/Link"
import AddInventoryItemForm from "../forms/AddInventoryItemForm"

const Item = (props) => {
    const [itemsPerPage, setItemsPerPage] = useState(7)
    const [searchValue, setSearchValue] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const InvItemData = getInvItemData()
    const [getPageData, setPageData] = useState(InvItemData)

    const isEdit = useSelector(state => state.invItemReducer.isEdit)
    const dispatch = useDispatch()

    const [isModal, setModal] = useState(false)
    const [editData, setEditData] = useState(0)

    useEffect(() => {
        dispatch(loadInvItem())
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
        dispatch(getInvItem(data.id, true))
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
                dispatch(deleteInvItem(id))
            }
        })
    }
    const detailOptClick = (id, e) => {
        e.preventDefault()
        console.log('call', props)
        props.history.push(`/Dashboard/Inventory/item/${id}`)
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
            updatedData = InvItemData.filter(item => {
                const startsWith =
                    item.code.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.description.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.unit_item.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.distributor.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.actions.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.qty_item.toLowerCase().startsWith(value.toLowerCase())

                const includes =
                    item.code.toLowerCase().includes(value.toLowerCase()) ||
                    item.description.toLowerCase().includes(value.toLowerCase()) ||
                    item.unit_item.toLowerCase().includes(value.toLowerCase()) ||
                    item.distributor.toLowerCase().includes(value.toLowerCase()) ||
                    item.actions.toLowerCase().includes(value.toLowerCase()) ||
                    item.qty_item.toLowerCase().includes(value.toLowerCase())
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
        setPageData(searchValue.length > 0 ? filteredData : InvItemData)
        setPageCount(searchValue.length > 0 ? Math.ceil(filteredData.length / itemsPerPage) : Math.ceil(getPageData.length / itemsPerPage))
    }, [itemsPerPage, searchValue])


// ** Table for item page
    const itemColumns = [
        {
            sortable: true,
            name: 'ID',
            minWidth: '225px',
            selector: row => row.id
        },
        {
            sortable: true,
            name: 'Code',
            minWidth: '250px',
            selector: row => row.code
        },
        {
            sortable: true,
            name: 'Description',
            minWidth: '250px',
            selector: row => row.description
        },
        {
            sortable: true,
            name: 'Unit',
            minWidth: '150px',
            selector: row => row.unit
        },
        {
            sortable: true,
            name: 'Price',
            minWidth: '150px',
            selector: row => row.price
        },
        {
            sortable: true,
            name: 'Unit/item',
            minWidth: '150px',
            selector: row => row.unit_item
        },
        {
            sortable: true,
            name: 'Quantity/Item',
            minWidth: '150px',
            selector: row => row.qty_item
        },
        {
            sortable: true,
            name: 'Stock',
            minWidth: '150px',
            selector: row => row.stock
        },
        {
            sortable: true,
            name: 'Distributor',
            minWidth: '150px',
            selector: row => row.distributor
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
                    <CardTitle tag="h4">Items</CardTitle>
                        <Button.Ripple color='primary' onClick={(e) => addClick(e)}>Add a new inventory</Button.Ripple>
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
                    columns={itemColumns}
                    currentPage={currentPage}
                    pageCount={pageCount}/>
            </Card>

            <AddInventoryItemForm isShow={isModal} setShow={toggle} data={editData} />

        </Fragment>
    )
}

export default Item
