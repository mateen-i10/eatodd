import React, {Fragment, useEffect, useState} from 'react'
import {Card, CardHeader, CardTitle, Col, Row} from 'reactstrap'
import StatsCard from "../../../ui-elements/Cards/StatsCard"
// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'
import {getOrderData} from "../fakeData"
import PaginatedDataTable from "../components/table/tables/PaginatedDataTable"
import PageItemsInput from "../components/table/tables/PageItemsInput"
import SearchBox from "../components/table/tables/SearchBox"
import {orderColumns} from "../components/table/tableColumns"


const Orders = () => {
    const [itemsPerPage, setItemsPerPage] = useState(7)
    const [searchValue, setSearchValue] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const orderData = getOrderData()
    const [getPageData, setPageData] = useState(orderData)

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
            updatedData = orderData.filter(item => {
                const startsWith =
                    item.full_name.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.post.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.email.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.city.toLowerCase().startsWith(value.toLowerCase())

                const includes =
                    item.full_name.toLowerCase().includes(value.toLowerCase()) ||
                    item.post.toLowerCase().includes(value.toLowerCase()) ||
                    item.email.toLowerCase().includes(value.toLowerCase()) ||
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
        setPageData(searchValue.length > 0 ? filteredData : orderData)
        setPageCount(searchValue.length > 0 ? Math.ceil(filteredData.length / itemsPerPage) : Math.ceil(getPageData.length / itemsPerPage))
    }, [itemsPerPage, searchValue])


    return (
        <Fragment>
            <Col xs='12'>
                <StatsCard cols={{xl: '2', sm: '6'}}/>
            </Col>
            <Card>
                <CardHeader className="border-bottom">
                    <CardTitle tag="h4">ORDER DATA</CardTitle>
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
                    columns={orderColumns}
                    currentPage={currentPage}
                    pageCount={pageCount}/>
            </Card>
        </Fragment>
    )
}

export default Orders
