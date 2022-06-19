import React from "react"
import ReactPaginate from "react-paginate"
import DataTable from "react-data-table-component"
import {ChevronDown} from "react-feather"

export default function PaginatedDataTable(props) {
    const {data, handlePageClick, pageCount, itemsPerPage, currentPage, columns} = props
    const CustomPagination = () => (
        <ReactPaginate
            previousLabel={''}
            nextLabel={''}
            pageCount={pageCount}
            forcePage={currentPage}
            onPageChange={(page) => handlePageClick(page)}
            breakLabel='...'
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
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
    return (
        <div>
            <div className='react-dataTable'>
                <DataTable
                    noHeader
                    pagination
                    selectableRowsNoSelectAll
                    className='react-dataTable'
                    columns={columns}
                    sortIcon={<ChevronDown size={10}/>}
                    paginationPerPage={itemsPerPage}
                    onChangeRowsPerPage={(e) => handlePageClick(e)}
                    paginationDefaultPage={currentPage + 1}
                    data={data}
                    paginationComponent={CustomPagination}
                />
            </div>


        </div>
    )

}

