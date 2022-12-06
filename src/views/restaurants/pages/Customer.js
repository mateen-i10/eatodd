// ** React Imports
import React, {Fragment, useEffect, useState} from 'react'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import {
    ArrowLeftCircle,
    Book,
    BookOpen,
    ChevronDown,
    Codesandbox,
    DollarSign,
    Edit,
    FileText,
    MoreVertical,
    Trash,
    UserPlus
} from 'react-feather'
import {
    Card,
    CardHeader,
    CardTitle,
    Button,
    Input,
    Row,
    Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap'
import {useDispatch, useSelector} from "react-redux"
import UILoader from "../../../@core/components/ui-loader"
import '@styles/react/libs/flatpickr/flatpickr.scss'
import {useHistory, useParams} from "react-router-dom"
import {loadCustomersByRestaurant} from "../../../redux/restaurant/actions"


const Customers = () => {
    const customersByRestaurantList = useSelector(state => state.restaurant.customerList)
    const miscData = useSelector(state => state.restaurant.miscData)
    const dispatch = useDispatch()

    // ** refs
    const [currentPage, setCurrentPage] = useState(miscData && miscData.pageIndex ? miscData.pageIndex : 1)
    const [pageSize] = useState(10)
    const [searchValue, setSearchValue] = useState('')

    //for restaurant id
    //const {state} = useLocation()
    const { id } = useParams()
    console.log('stateId', id)

    const history = useHistory()

    useEffect(() => {
        dispatch(loadCustomersByRestaurant(currentPage, pageSize, searchValue, id))
    }, [id])

    const handleFilter = e => {
        console.log('e.keyCode', e.keyCode)
        const value = e.target.value
        if (e.keyCode === 13) {
            dispatch(loadCustomersByRestaurant(currentPage + 1, pageSize, value, id))
        }
        setSearchValue(value)
    }

    // ** Function to handle Pagination
    const handlePagination = page => {
        dispatch(loadCustomersByRestaurant(page.selected + 1, pageSize, searchValue, id))
        setCurrentPage(page.selected + 1)
    }

    const goPackagesPage = () => {
        history.push('/restaurant')
    }

    const columns = [
        {
            name: 'Name',
            selector: (row) => `${row.applicationUser?.firstName} ${row.applicationUser?.lastName}`,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Email',
            selector: (row) => row.applicationUser?.email,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'User Name',
            selector: (row) => row.applicationUser?.userName,
            sortable: true,
            minWidth: '50px'
        }
        /*{
            name: 'Actions',
            allowOverflow: true,
            cell: row => {
                return (
                    <div className='d-flex'>
                        <span className='cursor-pointer mx-1' onClick={e => detailOptClick(row.id, e)}><FileText size={15} /></span>
                    </div>
                )
            }
        }*/
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
        if (customersByRestaurantList.length > 0) {
            return customersByRestaurantList
        }  else {
            return customersByRestaurantList.slice(0, pageSize)
        }
    }

    return (
        <Fragment>
            <UILoader>
                <Card>
                    <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
                        <div>
                            <CardTitle tag='h4'>
                                <span onClick={goPackagesPage} className='cursor-pointer me-1'>
                                    <ArrowLeftCircle size={30} style={{color: "#81be41"}}/>
                                </span>
                                Customers by Restaurant
                            </CardTitle>
                            {/*<h6>Friday June 10, 2022, 08:10 AM</h6>*/}
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

export default Customers
