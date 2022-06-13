// ** React Imports
import {Fragment, memo, useState} from 'react'
// ** Table Columns
import {recipeColumns} from "../../tableColumns"
// ** data from datatable
import {getInvRecipeData} from "../../../../fakeData"
// ** Third Party Components
import ReactPaginate from "react-paginate"
import DataTable from "react-data-table-component"
import {ChevronDown} from "react-feather"
// ** Reactstrap Imports
import {Card, CardHeader, CardTitle, Col, Input, Label, Row} from "reactstrap"

const InvRecipeTable = () => {

    // // ** States
    const items = getInvRecipeData()
    const [currentPage, setCurrentPage] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState(7)
    const [searchValue, setSearchValue] = useState('')

    // console.log((items.length))

    // const handlePageChange = () => {
    //     return null
    // }
    // ** Function to handle filter
    const handleFilter = e => {
        setSearchValue(e.target.value)
    }

    // ** Function to handle Pagination and get data
    const handlePagination = page => {
        setCurrentPage(page.selected + 1)
        console.log(rowsPerPage)

    }

    // ** Function to handle per page
    const handlePerPage = e => {
        setRowsPerPage(parseInt(e.target.value))

    }

    // ** Custom Pagination
    const CustomPagination = () => {
        const count = Math.ceil(items.length / rowsPerPage)
        // console.log(count)
        return (
            <ReactPaginate
                previousLabel={''}
                nextLabel={''}
                breakLabel='...'
                pageCount={Math.ceil(count) || 1}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                forcePage={currentPage !== 0 ? currentPage - 1 : 0}
                onPageChange={page => handlePagination(page)}
                activeClassName='active'
                pageClassName='page-item'
                breakClassName='page-item'
                nextLinkClassName='page-link'
                pageLinkClassName='page-link'
                breakLinkClassName='page-link'
                previousLinkClassName='page-link'
                nextClassName='page-item next-item'
                previousClassName='page-item prev-item'
                containerClassName={
                    'pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1'
                }
            />
        )
    }

    // ** Table data to render
    const dataToRender = () => {
        const filters = {
            q: searchValue
        }

        const isFiltered = Object.keys(filters).some(function (k) {
            return filters[k].length > 0
        })

        if (items.length > 0) {
            return items
        } else if (items.length === 0 && isFiltered) {
            return []
        } else {
            return items.slice(0, rowsPerPage)
        }

    }

    return (
        <Fragment>
            <Card>
                <CardHeader className='border-bottom'>
                    <CardTitle tag='h4'>Inventory Recipe</CardTitle>
                </CardHeader>
                <Row className='mx-0 mt-1 mb-50'>
                    <Col sm="6">
                        <div className="d-flex align-items-center">
                            <Label for="sort-select" className="m-1">show</Label>
                            <Input
                                className="dataTable-select w-25"
                                type="select"
                                id="sort-select"
                                value={rowsPerPage}
                                onChange={(e) => handlePerPage(e)}
                            >
                                <option value={7}>7</option>
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                                <option value={50}>50</option>
                                <option value={75}>75</option>
                                <option value={100}>100</option>
                            </Input>
                            <Label for="sort-select" className="m-1">entries</Label>
                        </div>
                    </Col>
                    <Col
                        className="d-flex align-items-center justify-content-sm-end mt-sm-0 mt-1"
                        sm="6"
                    >
                        <Label className="me-1" for="search-input">
                            Search
                        </Label>
                        <Input
                            className="dataTable-filter"
                            type="text"
                            bsSize="sm"
                            id="search-input"
                            value={searchValue}
                            onChange={handleFilter}
                        />
                    </Col>
                </Row>
                <div className='react-dataTable'>
                    <DataTable
                        noHeader
                        pagination
                        // paginationServer
                        className='react-dataTable'
                        columns={recipeColumns}
                        sortIcon={<ChevronDown size={10}/>}
                        paginationComponent={CustomPagination}
                        data={dataToRender()}
                    />
                </div>
                {/*<CustomPagination itemsCount={items.length} rowsPerpage={rowsPerPage}*/}
                {/*                  onPageChange={handlePageChange} currentPage={currentPage}/>*/}
            </Card>
        </Fragment>
    )
}

export default memo(InvRecipeTable)
