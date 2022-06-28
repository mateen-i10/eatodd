import React, {Fragment, useEffect, useState} from 'react'
import {getCustomerData} from "../../../tempData/fakeData"
import {Card, CardHeader, CardTitle, Col, Row} from "reactstrap"
import PageItemsInput from "../components/tables/PageItemsInput"
import SearchBox from "../components/tables/SearchBox"
import PaginatedDataTable from "../components/tables/PaginatedDataTable"

const Customer = () => {
    const [itemsPerPage, setItemsPerPage] = useState(7)
    const [searchValue, setSearchValue] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const customerData = getCustomerData()
    const [getPageData, setPageData] = useState(customerData)

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
            updatedData = customerData.filter(item => {
                const startsWith =
                    item.name.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.email.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.address.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.city.toLowerCase().startsWith(value.toLowerCase())

                const includes =
                    item.name.toLowerCase().includes(value.toLowerCase()) ||
                    item.email.toLowerCase().includes(value.toLowerCase()) ||
                    item.address.toLowerCase().includes(value.toLowerCase()) ||
                    item.city.toLowerCase().includes(value.toLowerCase())
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
        setPageData(searchValue.length > 0 ? filteredData : customerData)
        setPageCount(searchValue.length > 0 ? Math.ceil(filteredData.length / itemsPerPage) : Math.ceil(getPageData.length / itemsPerPage))
    }, [itemsPerPage, searchValue])

    // ** Table for customer page
    const customerColumns = [
        {
            sortable: true,
            name: 'Name',
            minWidth: '225px',
            selector: row => row.name
        },
        {
            sortable: true,
            name: 'Email',
            minWidth: '250px',
            selector: row => row.email
        },
        {
            sortable: true,
            name: 'Phone',
            minWidth: '250px',
            selector: row => row.phone
        },
        {
            sortable: true,
            name: 'Has Register',
            minWidth: '150px',
            selector: row => row.has_register
        },
        {
            sortable: true,
            name: 'DOB',
            minWidth: '150px',
            selector: row => row.dob
        },
        {
            sortable: true,
            name: 'Address',
            minWidth: '150px',
            selector: row => row.address
        },
        {
            sortable: true,
            name: 'City',
            minWidth: '150px',
            selector: row => row.city
        },
        {
            sortable: true,
            name: 'State',
            minWidth: '150px',
            selector: row => row.state
        }
    ]
    return (
        <Fragment>
            <Card>
                <CardHeader className="border-bottom">
                    <CardTitle tag="h4">Customers</CardTitle>
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
                    columns={customerColumns}
                    currentPage={currentPage}
                    pageCount={pageCount}/>
            </Card>
        </Fragment>
    )
}

export default Customer
