import React, {Fragment, useEffect, useState} from 'react'
import {Card, CardHeader, CardTitle, Col, Row} from "reactstrap"
import PageItemsInput from "../components/table/tables/PageItemsInput"
import SearchBox from "../components/table/tables/SearchBox"
import PaginatedDataTable from "../components/table/tables/PaginatedDataTable"
import {menuItemColumns} from "../components/table/tableColumns"
import {getMenuItem} from "../fakeData"

const MenuItems = () => {
    const [itemsPerPage, setItemsPerPage] = useState(7)
    const [searchValue, setSearchValue] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const menuData = getMenuItem()
    const [getPageData, setPageData] = useState(menuData)

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
            updatedData = menuData.filter(item => {
                const startsWith =
                    item.name.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.category.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.modifier.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.prices.toLowerCase().startsWith(value.toLowerCase())

                const includes =
                    item.name.toLowerCase().includes(value.toLowerCase()) ||
                    item.category.toLowerCase().includes(value.toLowerCase()) ||
                    item.modifier.toLowerCase().includes(value.toLowerCase()) ||
                    item.prices.toLowerCase().includes(value.toLowerCase())
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
        setPageData(searchValue.length > 0 ? filteredData : menuData)
        setPageCount(searchValue.length > 0 ? Math.ceil(filteredData.length / itemsPerPage) : Math.ceil(getPageData.length / itemsPerPage))
    }, [itemsPerPage, searchValue])

    return (
        <Fragment>
            <Card>
                <CardHeader className="border-bottom">
                    <CardTitle tag="h4">Menu Items</CardTitle>
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
                    columns={menuItemColumns}
                    currentPage={currentPage}
                    pageCount={pageCount}/>
            </Card>
        </Fragment>
    )
}

export default MenuItems
