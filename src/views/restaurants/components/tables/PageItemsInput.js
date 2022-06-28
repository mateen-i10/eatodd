import React, {Fragment} from 'react'
import {Input, Label} from "reactstrap"

const PageItemsInput = (props) => {
    const {itemsPerPage, onPageChange} = props
    return (
        <Fragment>
            <div className="d-flex align-items-center">
                <Label for="sort-select" className="m-1">show</Label>
                <Input
                    className="w-25"
                    type="select"
                    id="sort-select"
                    value={itemsPerPage}
                    onChange={(e) => onPageChange(e)}
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
        </Fragment>
    )
}

export default PageItemsInput
