// ** React Imports
import React, {Fragment, useEffect, useState} from 'react'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import Avatar from '../../../@core/components/avatar'
import {ChevronDown, Edit, FileText, MoreVertical, Plus, Trash} from 'react-feather'
import {
    Card,
    CardHeader,
    CardTitle,
    Button,
    Input,
    Label,
    Row,
    Col, Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap'
import {deleteRestaurant, getRestaurant, loadRestaurants} from "../../../redux/restaurant/actions"
import {useDispatch, useSelector} from "react-redux"
import Swal from "sweetalert2"
import AddRestaurant from "./AddRestaurant"
import UILoader from "../../../@core/components/ui-loader"
import useLoadData from "../../../utility/customHooks/useLoadData"

const Restaurant = (props) => {
    const restaurantList = useSelector(state => state.restaurant.list)
    const miscData = useSelector(state => state.restaurant.miscData)
    const isLoading = useSelector(state => state.restaurant.isLoading)
    const isSuccess = useSelector(state => state.restaurant.isSuccess)
    const isEdit = useSelector(state => state.restaurant.isEdit)
    const dispatch = useDispatch()

    // ** local States
    const [currentPage, setCurrentPage] = useState(miscData && miscData.pageIndex ? miscData.pageIndex : 1)
    const [pageSize] = useState(10)
    const [searchValue, setSearchValue] = useState('')
    const [edit, setEdit] = useState(false)
    const [modalTitle, setModalTitle] = useState("Add Restaurant")
    const [isModal, setModal] = useState(false)

    useEffect(() => {
        dispatch(loadRestaurants())
    }, [isEdit])

    // ** Function to handle filter
    const toggle = () => {
        if (isModal) setEdit(false)
        setModal(!isModal)
    }

    // custom hooks
    useLoadData(isSuccess, loadRestaurants, isModal, toggle, currentPage, pageSize, searchValue)

    const addClick = () => {
        setModalTitle('Add Restaurant')
        toggle()
    }

    const editClick = (id) => {
        console.log("edit", id)
        toggle()
        dispatch(getRestaurant(id, true))
        setModalTitle('Edit Restaurant')
        setEdit(true)
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
                dispatch(deleteRestaurant(id))
            }
        })
    }

    const detailOptClick = (id, e) => {
        e.preventDefault()
        console.log('call', props)
        props.history.push(`/restaurant/detail/${id}`)
    }

    const handleFilter = e => {
        console.log('e.keyCode', e.keyCode)
        const value = e.target.value
        if (e.keyCode === 13) {
            dispatch(loadRestaurants(currentPage + 1, pageSize, value))
        }
        setSearchValue(value)
    }

    // ** Function to handle Pagination
    const handlePagination = page => {
        dispatch(loadRestaurants(page.selected + 1, pageSize, searchValue))
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
            name: 'Phone No',
            selector: (row) => row.phoneNo,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Address',
            selector: (row) => row.address,
            sortable: true,
            minWidth: '250px'
        },
        {
            name: 'Actions',
            allowOverflow: true,
            cell: row => {
                return (
                    <div className='d-flex'>
                        <UncontrolledDropdown>
                            <DropdownToggle className='pe-1' tag='span'>
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
                        <span onClick={() => { editClick(row) }}><Edit size={15} /></span>
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
        if (restaurantList.length > 0) {
            return restaurantList
        }  else {
            return restaurantList.slice(0, pageSize)
        }
    }

    return (
        <Fragment>
            <UILoader blocking={isLoading}>
                <Card>
                <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
                    <div>
                        <CardTitle tag='h4'>Restaurant</CardTitle>
                        <h6>Friday June 10, 2022, 08:10 AM</h6>
                    </div>
                        <Button.Ripple bssize='sm' color='primary' onClick={(e) => addClick(e)}>Add a new Resturant</Button.Ripple>
                </CardHeader>
                <Row className='justify-content-end mx-0'>
                    <Col className='mt-1' md='12' sm='12'>
                        <Input
                            className='dataTable-filter mb-50'
                            type='text'
                            placeholder='Search'
                            bsSize='sm'
                            id='search-input'
                            value={searchValue}
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
                    sortIcon={<ChevronDown size={10} />}
                    paginationComponent={CustomPagination}
                    data={dataToRender()}
                />
            </Card>
            </UILoader>

            <AddRestaurant
                isShow={isModal}
                setShow={toggle}
                isEdit={edit}
                setEdit={setEdit}
                title={modalTitle}

            />

        </Fragment>
    )
}

export default Restaurant
