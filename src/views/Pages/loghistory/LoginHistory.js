// ** React Imports
import {Fragment, useEffect, useState} from 'react'

// ** Form Modal Component for Add and Update
import FormModal from '../../../components/FormModal'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import {ChevronDown} from 'react-feather'
import {
    Card,
    CardHeader,
    CardTitle,
    Input,
    Row,
    Col, Badge
} from 'reactstrap'
import {loadCustomers} from "../../../redux/customer/actions"
import {useDispatch, useSelector} from "react-redux"
import {setCustomer} from "../../../redux/customer/reducer"

const LoginHistory = () => {
    const customerList = useSelector(state => state.customer.list)
    const formInitialState = useSelector(state => state.customer.object)
    const isEdit = useSelector(state => state.customer.isEdit)
    const dispatch = useDispatch()

    // ** local States
    const [currentPage, setCurrentPage] = useState(0)
    const [searchValue, setSearchValue] = useState('')
    const [filteredData, setFilteredData] = useState([])


    useEffect(() => {
        dispatch(loadCustomers())
        // in case of edit get item from backend
        if (isEdit) setFormState({...formInitialState})
        else {
            dispatch(setCustomer({
                full_name: '', email: ''
            }))
        }
    }, [isEdit])

    const handleFilter = e => {
        const value = e.target.value
        let updatedData = []
        setSearchValue(value)

        const status = {
            1: { title: 'Current', color: 'light-primary' },
            2: { title: 'Professional', color: 'light-success' },
            3: { title: 'Rejected', color: 'light-danger' },
            4: { title: 'Resigned', color: 'light-warning' },
            5: { title: 'Applied', color: 'light-info' }
        }

        if (value.length) {
            updatedData = data.filter(item => {
                const startsWith =
                    item.full_name.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.post.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.email.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.age.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.salary.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.start_date.toLowerCase().startsWith(value.toLowerCase()) ||
                    status[item.status].title.toLowerCase().startsWith(value.toLowerCase())

                const includes =
                    item.full_name.toLowerCase().includes(value.toLowerCase()) ||
                    item.post.toLowerCase().includes(value.toLowerCase()) ||
                    item.email.toLowerCase().includes(value.toLowerCase()) ||
                    item.age.toLowerCase().includes(value.toLowerCase()) ||
                    item.salary.toLowerCase().includes(value.toLowerCase()) ||
                    item.start_date.toLowerCase().includes(value.toLowerCase()) ||
                    status[item.status].title.toLowerCase().includes(value.toLowerCase())

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

    // ** Function to handle Pagination
    const handlePagination = page => {
        setCurrentPage(page.selected)
    }

    // ** Table Common Column
    const columns = [
        {
            name: 'Id',
            selector: (row) => row.id,
            sortable: true,
            minWidth: '100px'
        },
        {
            name: 'UserName',
            sortable: true,
            minWidth: '150px',
            selector: row => row.username
        },
        {
            name: 'DateTime',
            sortable: true,
            minWidth: '150px',
            selector: row => row.datetime
        },
        {
            name: 'Device',
            sortable: true,
            minWidth: '200px',
            selector: row => row.device
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

    return (
        <Fragment>

            <Card>
                <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
                    <div>
                        <CardTitle tag='h4'>Login History</CardTitle>
                        {/*<h6>Friday June 10, 2022, 08:10 AM</h6>*/}
                    </div>
                </CardHeader>
                <Row className='justify-content-end mx-0'>
                    <Col className='mt-1' md='12' sm='12'>
                        <Input
                            className='dataTable-filter mb-50'
                            type='text'
                            bsSize='sm'
                            PlaceHolder='Search'
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
                    data={searchValue.length ? filteredData : customerList}
                />
            </Card>
        </Fragment>
    )
}

export default LoginHistory