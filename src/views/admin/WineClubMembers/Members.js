// ** React Imports
import React, {Fragment, useEffect, useState} from 'react'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import {ChevronDown, FileText} from 'react-feather'
import {
    Card,
    CardHeader,
    CardTitle,
    Input,
    Row,
    Col
} from 'reactstrap'

import {useDispatch, useSelector} from "react-redux"
import UILoader from "../../../@core/components/ui-loader"
import '@styles/react/libs/flatpickr/flatpickr.scss'
import {loadMembers} from "../../../redux/member/actions"
// import {getUserData} from "../../../auth/utils"
// my changes

const Members = () => {

    const memberList = useSelector(state => state.member.list)
    const miscData = useSelector(state => state.member.miscData)
    // const isLoading = useSelector(state => state.customer.isLoading)
    const dispatch = useDispatch()

    // ** refs
    const [currentPage, setCurrentPage] = useState(miscData && miscData.pageIndex ? miscData.pageIndex : 1)
    const [pageSize] = useState(10)
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        dispatch(loadMembers(currentPage, pageSize, searchValue))
    }, [])

    const handleFilter = e => {
        console.log('e.keyCode', e.keyCode)
        const value = e.target.value
        if (e.keyCode === 13) {
            dispatch(loadMembers(currentPage, pageSize, value))
        }
        setSearchValue(value)
    }

    // ** Function to handle Pagination
    const handlePagination = page => {
        dispatch(loadMembers(page.selected + 1, pageSize, searchValue))
        setCurrentPage(page.selected + 1)
    }

    // const detailOptClick = (id, e) => {
    //     e.preventDefault()
    //     props.history.push(`/customerDetails/${id}`)
    // }

    const columns = [
        {
            name: 'Name',
            selector: (row) => row.applicationUser.userName,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Email',
            selector: (row) => row.applicationUser.email,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Actions',
            allowOverflow: true,
            cell: row => {
                return (
                    <div className='d-flex'>
                        <span className='cursor-pointer mx-1' onClick={() => console.log(row.id)}><FileText size={15} /></span>
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
        if (memberList.length > 0) {
            return memberList
        }  else {
            return memberList.slice(0, pageSize)
        }
    }

    return (
        <Fragment>
            <UILoader>
                <Card>
                    <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
                        <div>
                            <CardTitle tag='h4'>Members</CardTitle>
                            <h6>Friday June 10, 2022, 08:10 AM</h6>
                        </div>
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
                        sortIcon={<ChevronDown size={10} />}
                        paginationComponent={CustomPagination}
                        data={dataToRender()}
                    />
                </Card>
            </UILoader>
        </Fragment>
    )
}

export default Members
