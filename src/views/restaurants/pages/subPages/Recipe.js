import React, {Fragment, useEffect, useState} from 'react'
import {getInvRecipeData} from "../../fakeData"
import {Card, CardHeader, CardTitle, Col, Row} from "reactstrap"
import PageItemsInput from "../../components/table/tables/PageItemsInput"
import SearchBox from "../../components/table/tables/SearchBox"
import PaginatedDataTable from "../../components/table/tables/PaginatedDataTable"
import {recipeColumns} from "../../components/table/tableColumns"

const Recipe = () => {
    const [itemsPerPage, setItemsPerPage] = useState(7)
    const [searchValue, setSearchValue] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const InvRecipeData = getInvRecipeData()
    const [getPageData, setPageData] = useState(InvRecipeData)

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
            updatedData = InvRecipeData.filter(item => {
                const startsWith =
                    item.item.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.recipe_item.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.actions.toLowerCase().startsWith(value.toLowerCase())

                const includes =
                    item.item.toLowerCase().includes(value.toLowerCase()) ||
                    item.recipe_item.toLowerCase().includes(value.toLowerCase()) ||
                    item.actions.toLowerCase().includes(value.toLowerCase())
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
        setPageData(searchValue.length > 0 ? filteredData : InvRecipeData)
        setPageCount(searchValue.length > 0 ? Math.ceil(filteredData.length / itemsPerPage) : Math.ceil(getPageData.length / itemsPerPage))
    }, [itemsPerPage, searchValue])
    return (
        <Fragment>
            <Card>
                <CardHeader className="border-bottom">
                    <CardTitle tag="h4">Modifier</CardTitle>
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
                    columns={recipeColumns}
                    currentPage={currentPage}
                    pageCount={pageCount}/>
            </Card>
        </Fragment>
    )
}

export default Recipe
