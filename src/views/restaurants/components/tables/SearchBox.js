import React from 'react'
import {Input, Label} from "reactstrap"


const SearchBox = (props) => {
    const {searchValue, handleFilter} = props
    return (
        <>
            <Label className="me-1" for="search-input">
                Search
            </Label>
            <Input
                className="dataTable-filter w-50"
                type="text"
                bsSize="sm"
                id="search-input"
                value={searchValue}
                onChange={(e) => handleFilter(e)}
            />
        </>
    )

}
export default SearchBox