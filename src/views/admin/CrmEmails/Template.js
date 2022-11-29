// ** React Imports
import React, {Fragment, useEffect, useState} from 'react'

// ** Form Modal Component for Add and Update

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import {ChevronDown, FileText, Trash} from 'react-feather'
import {
    Card,
    CardHeader,
    CardTitle,
    Button,
    Input,
    Row,
    Col
} from 'reactstrap'
import {useDispatch, useSelector} from "react-redux"
import Swal from "sweetalert2"
import moment from 'moment'
import {deleteTemplate, loadTemplates} from "../../../redux/template/action"

import CrmForm from "./components/CrmForm"
import UILoader from "../../../@core/components/ui-loader"

const Template = (props) => {
    const customerList = useSelector(state => state.template.list)
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.template.isLoading)
    const isSuccess = useSelector(state => state.template.isSuccess)

    // ** local States
    const [currentPage, setCurrentPage] = useState(0)
    const [searchValue, setSearchValue] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [isModal, setModal] = useState(false)
    // const [editData, setEditData] = useState(0)
    // ** schema for validations

    useEffect(() => {
        dispatch(loadTemplates(1, 12, null))
    }, [isSuccess])

    // ** Function to handle filter
    const toggle = () => {
        setModal(!isModal)
    }
    const addClick = (e) => {
        e.preventDefault()
        toggle()
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
                dispatch(deleteTemplate(id))
            }
        })
    }
    const detailOptClick = (id, e) => {
        e.preventDefault()
        console.log('call', props)
        props.history.push(`/designer/${id}`)
    }
    //some issues here...
    const handleFilter = e => {
        const value = e.target.value
        setSearchValue(value)
        setFilteredData(value)
    }

    // ** Function to handle Pagination
    const handlePagination = page => {
        setCurrentPage(page.selected)
    }

    const columns = [
        {
            name: 'Image',
            selector: (row) => row.images,
            sortable: true,
            minWidth: '150px'
        },
        {
            name: 'Name',
            selector: (row) => row.name,
            sortable: true,
            minWidth: '150px'
        },
        {
            name: 'Subject',
            selector: (row) => row.subject,
            sortable: true,
            minWidth: '150px'
        },
        {
            name: 'Body',
            selector: (row) => row.body,
            sortable: true,
            minWidth: '150px'
        },
        {
            name: 'Actions',
            allowOverflow: true,
            cell: row => {
                return (
                    <div className='d-flex'>
                        <span className='align-middle ms-50 cursor-pointer' onClick={e => detailOptClick(row.id, e)}><FileText size={15} /></span>
                        <span className='align-middle ms-50 cursor-pointer' onClick={e => deleteClick(row.id, e)}><Trash size={15} /></span>
                    </div>
                )
            }
        }
    ]

    // ** Custom Pagination
    const CustomPagination = () => (
        <ReactPaginate
            previousLabel=''
            nextLabel=''
            forcePage={currentPage}
            onPageChange={page => handlePagination(page)}
            pageCount={searchValue.length ? filteredData.length / 7 : customerList.length / 7 || 1}
            breakLabel='...'
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            activeClassName='active'
            pageClassName='page-item'
            breakClassName='page-item'
            breakLinkClassName='page-link'
            nextLinkClassName='page-link'
            nextClassName='page-item next'
            previousClassName='page-item prev'
            previousLinkClassName='page-link'
            pageLinkClassName='page-link'
            containerClassName='pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1'
        />
    )

    const dataToRender = () => {
        if (customerList.length > 0) {
            return customerList
        }  else {
            return customerList.slice(0, 12)
        }
    }

    return (
        <Fragment>
            <UILoader blocking={isLoading}>
            <Card>
                <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
                    <div>
                        <CardTitle tag='h4'>Template</CardTitle>
                        <h6>{moment().format("LLLL")}</h6>
                    </div>
                    <Button.Ripple color='primary' onClick={(e) => addClick(e)}>Add a new Template</Button.Ripple>
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
                    columns={columns}
                    paginationPerPage={7}
                    className='react-dataTable'
                    sortIcon={<ChevronDown size={10} />}
                    paginationDefaultPage={currentPage + 1}
                    paginationComponent={CustomPagination}
                    data={dataToRender()}
                />
            </Card>

            <CrmForm
                isModal = {isModal}
                setModal = {setModal}
            />
            </UILoader>
        </Fragment>
    )
}

export default Template