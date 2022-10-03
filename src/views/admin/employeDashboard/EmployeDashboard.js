import {
    Row,
    Col,
    Table,
    Label,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    Input,
    Badge,
    Card, CardBody, CardTitle, CardText
} from 'reactstrap'
import {Briefcase, DollarSign, Users, MoreVertical, Edit, Trash, ChevronDown} from "react-feather"
// ** React Imports
import React, {useContext, useState} from 'react'
// ** Context
import { ThemeColors } from '../../../utility/context/ThemeColors'
// ** Demo Components
// import CompanyTable from './CompanyTable'
import Earnings from '../../../ui-elements/Cards/analytics/Earnings'
import CardMedal from '../../../ui-elements/Cards/advance/CardMedal'
import CardMeetup from '../../../ui-elements/Cards/advance/CardMeetup'
import StatsCard from '../../../ui-elements/Cards/statistics/StatsCard'
import CardTransactions from '../../../ui-elements/Cards/advance/CardTransactions'
import CardBrowserStates from '../../../ui-elements/Cards/advance/CardBrowserState'
import DataTable from "react-data-table-component"
import ReactPaginate from "react-paginate"
import {loadCuisines} from "../../../redux/cuisine/actions"

const EmployeDashboard = () => {
    // ** Context
    const { colors } = useContext(ThemeColors)

    //data table

    const miscData = {
        pageIndex: 1,
        pageSize: 10,
        refId: 1,
        searchQuery: null,
        total: 4,
        totalPages: 1
    }

    const [currentPage, setCurrentPage] = useState(miscData && miscData.pageIndex ? miscData.pageIndex : 1)
    // const [pageSize] = useState(10)
    const [searchValue, setSearchValue] = useState('')

    const handleFilter = e => {
        console.log('e.keyCode', e.keyCode)
        const value = e.target.value
        if (e.keyCode === 13) {
            dispatch(loadCuisines(currentPage + 1, pageSize, value))
        }
        setSearchValue(value)
    }

    const data = [
        {
            ordername: 'Chicken meal',
            restaurantName: 'Subway',
            orderDate: '10-oct-2022',
            status: 'true'
        }
    ]

    const columns = [
        {
            name: 'Order Name',
            selector: (row) => row.ordername,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Restaurant Name',
            selector: (row) => row.restaurantName,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Order Date',
            selector: (row) => row.orderDate,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Status',
            selector: (row) => row.status,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Actions',
            allowOverflow: true,
            cell: () => {
                return (
                    <div className='d-flex'>
                        <span className='cursor-pointer mx-1' onClick={() => console.log('Delete Item')}><Trash size={15} /></span>
                        <span className='cursor-pointer' onClick={() => console.log('Edit Click') }><Edit size={15} /></span>
                    </div>
                )
            }
        }
    ]

    const handlePagination = page => {
        setCurrentPage(page.selected + 1)
    }

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

    // const dataToRender = () => {
    //     if (cuisineList.length > 0) {
    //         return cuisineList
    //     }  else {
    //         return cuisineList.slice(0, pageSize)
    //     }
    // }

    return (
        <div id='dashboard-ecommerce'>
            <Row className='match-height'>
                <Col xl='4' md='6' xs='12'>
                    <Earnings success={colors.success.main} />
                </Col>
                <Col xl='8' md='6' xs='12'>
                    <StatsCard cols={{ xl: '3', sm: '6' }} />
                </Col>
            </Row>
            <Row className='match-height'>
                <Col lg='12' xs='12'>
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
                        data={data}
                    />
                    {/*<div className='card'>*/}
                    {/*    <div className="card-body">*/}
                    {/*        <Table responsive>*/}
                    {/*            <thead>*/}
                    {/*            <tr>*/}
                    {/*                <th>Order Name</th>*/}
                    {/*                <th>Restaurant Name</th>*/}
                    {/*                <th>Order Date</th>*/}
                    {/*                <th>Status</th>*/}
                    {/*                <th>Actions</th>*/}
                    {/*            </tr>*/}
                    {/*            </thead>*/}
                    {/*            <tbody>*/}
                    {/*            <tr>*/}
                    {/*                <td>Job 1</td>*/}
                    {/*                <td>Project Test</td>*/}
                    {/*                <td>March 30, 2022</td>*/}
                    {/*                <td>*/}
                    {/*                    <Badge pill color='light-primary' className='me-1'>*/}
                    {/*                        Active*/}
                    {/*                    </Badge>*/}
                    {/*                </td>*/}
                    {/*                <td>*/}
                    {/*                    <UncontrolledDropdown>*/}
                    {/*                        <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>*/}
                    {/*                            <MoreVertical size={15} />*/}
                    {/*                        </DropdownToggle>*/}
                    {/*                        <DropdownMenu>*/}
                    {/*                            <DropdownItem href='/' onClick={e => e.preventDefault()}>*/}
                    {/*                                <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>*/}
                    {/*                            </DropdownItem>*/}
                    {/*                            <DropdownItem href='/' onClick={e => e.preventDefault()}>*/}
                    {/*                                <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>*/}
                    {/*                            </DropdownItem>*/}
                    {/*                        </DropdownMenu>*/}
                    {/*                    </UncontrolledDropdown>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            <tr>*/}
                    {/*                <td>Job 1</td>*/}
                    {/*                <td>Project Test</td>*/}
                    {/*                <td>March 30, 2022</td>*/}
                    {/*                <td>*/}
                    {/*                    <Badge pill color='light-primary' className='me-1'>*/}
                    {/*                        Active*/}
                    {/*                    </Badge>*/}
                    {/*                </td>*/}
                    {/*                <td>*/}
                    {/*                    <UncontrolledDropdown>*/}
                    {/*                        <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>*/}
                    {/*                            <MoreVertical size={15} />*/}
                    {/*                        </DropdownToggle>*/}
                    {/*                        <DropdownMenu>*/}
                    {/*                            <DropdownItem href='/' onClick={e => e.preventDefault()}>*/}
                    {/*                                <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>*/}
                    {/*                            </DropdownItem>*/}
                    {/*                            <DropdownItem href='/' onClick={e => e.preventDefault()}>*/}
                    {/*                                <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>*/}
                    {/*                            </DropdownItem>*/}
                    {/*                        </DropdownMenu>*/}
                    {/*                    </UncontrolledDropdown>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            <tr>*/}
                    {/*                <td>Job 1</td>*/}
                    {/*                <td>Project Test</td>*/}
                    {/*                <td>March 30, 2022</td>*/}
                    {/*                <td>*/}
                    {/*                    <Badge pill color='light-primary' className='me-1'>*/}
                    {/*                        Active*/}
                    {/*                    </Badge>*/}
                    {/*                </td>*/}
                    {/*                <td>*/}
                    {/*                    <UncontrolledDropdown>*/}
                    {/*                        <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>*/}
                    {/*                            <MoreVertical size={15} />*/}
                    {/*                        </DropdownToggle>*/}
                    {/*                        <DropdownMenu>*/}
                    {/*                            <DropdownItem href='/' onClick={e => e.preventDefault()}>*/}
                    {/*                                <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>*/}
                    {/*                            </DropdownItem>*/}
                    {/*                            <DropdownItem href='/' onClick={e => e.preventDefault()}>*/}
                    {/*                                <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>*/}
                    {/*                            </DropdownItem>*/}
                    {/*                        </DropdownMenu>*/}
                    {/*                    </UncontrolledDropdown>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            <tr>*/}
                    {/*                <td>Job 1</td>*/}
                    {/*                <td>Project Test</td>*/}
                    {/*                <td>March 30, 2022</td>*/}
                    {/*                <td>*/}
                    {/*                    <Badge pill color='light-primary' className='me-1'>*/}
                    {/*                        Active*/}
                    {/*                    </Badge>*/}
                    {/*                </td>*/}
                    {/*                <td>*/}
                    {/*                    <UncontrolledDropdown>*/}
                    {/*                        <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>*/}
                    {/*                            <MoreVertical size={15} />*/}
                    {/*                        </DropdownToggle>*/}
                    {/*                        <DropdownMenu>*/}
                    {/*                            <DropdownItem href='/' onClick={e => e.preventDefault()}>*/}
                    {/*                                <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>*/}
                    {/*                            </DropdownItem>*/}
                    {/*                            <DropdownItem href='/' onClick={e => e.preventDefault()}>*/}
                    {/*                                <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>*/}
                    {/*                            </DropdownItem>*/}
                    {/*                        </DropdownMenu>*/}
                    {/*                    </UncontrolledDropdown>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            </tbody>*/}
                    {/*        </Table>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </Col>
            </Row>
            {/*<Row className='match-height'>*/}
            {/*    /!*<Col lg='6' md='6' xs='12'>*!/*/}
            {/*    /!*    <CardBrowserStates colors={colors}  />*!/*/}
            {/*    /!*</Col>*!/*/}
            {/*    <Col lg='12' md='12' xs='12'>*/}
            {/*        <CardTransactions />*/}
            {/*    </Col>*/}
            {/*</Row>*/}
        </div>
    )
}

export default EmployeDashboard