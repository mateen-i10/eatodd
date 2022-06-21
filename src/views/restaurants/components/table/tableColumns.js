// ** Table for order page
import {Edit, FileText, MoreVertical, Trash} from "react-feather"
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap"
import React from "react"


// ** Vars
// const states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary']

// const status = {
//     1: {title: 'Current', color: 'light-primary'},
//     2: {title: 'Professional', color: 'light-success'},
//     3: {title: 'Rejected', color: 'light-danger'},
//     4: {title: 'Resigned', color: 'light-warning'},
//     5: {title: 'Applied', color: 'light-info'}
// }


// ** Table for  promotion page


// ** Table for invCategory page
export const invCategoryColumns = [

    {
        sortable: true,
        name: 'ID',
        minWidth: '250px',
        selector: row => row.id
    },
    {
        sortable: true,
        name: 'Name',
        minWidth: '225px',
        selector: row => row.name
    },
    {
        sortable: true,
        name: 'Actions',
        minWidth: '250px',
        selector: row => row.actions,
        cell: (row) => {
            return (
                <div className='d-flex'>
                    <UncontrolledDropdown>
                        <DropdownToggle className='pe-1' tag='span'>
                            <MoreVertical size={15}/>
                        </DropdownToggle>
                        <DropdownMenu end>
                            <DropdownItem tag='a' href='/' className='w-100'
                                          onClick={e => detailOptClick(row.id, e)}>
                                <FileText size={15}/>
                                <span className='align-middle ms-50'>Details</span>
                            </DropdownItem>
                            <DropdownItem tag='a' href='/' className='w-100'
                                          onClick={e => deleteClick(row.id, e)}>
                                <Trash size={15}/>
                                <span className='align-middle ms-50'>Delete</span>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <span onClick={() => {
                        editClick(row.id)
                    }}><Edit size={15}/></span>
                </div>
            )
        }
    }
]
