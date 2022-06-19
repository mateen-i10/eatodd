import React, {Fragment, useEffect, useState} from 'react'
import {getCategory} from "../fakeData"
import {Card, CardHeader, CardTitle, Col, Row} from "reactstrap"
import PageItemsInput from "../components/table/tables/PageItemsInput"
import SearchBox from "../components/table/tables/SearchBox"
import PaginatedDataTable from "../components/table/tables/PaginatedDataTable"
import {categoryColumns} from "../components/table/tableColumns"

const Category = () => {
    const [itemsPerPage, setItemsPerPage] = useState(7)
    const [searchValue, setSearchValue] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const categoryData = getCategory()
    const [getPageData, setPageData] = useState(categoryData)

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
    return (
        <Fragment>
            <Card>
                <CardHeader className="border-bottom">
                    <CardTitle tag="h4">Category</CardTitle>
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
        </Fragment>
    )
}

export default Category
