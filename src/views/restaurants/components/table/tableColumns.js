// ** Table for order page
import {Badge} from "reactstrap"
import {Edit, Trash} from "react-feather"


// ** Vars
// const states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary']

const status = {
    1: {title: 'Current', color: 'light-primary'},
    2: {title: 'Professional', color: 'light-success'},
    3: {title: 'Rejected', color: 'light-danger'},
    4: {title: 'Resigned', color: 'light-warning'},
    5: {title: 'Applied', color: 'light-info'}
}
export const orderColumns = [
    {
        sortable: true,
        name: 'Full Name',
        minWidth: '225px',
        selector: row => row.full_name
    },
    {
        sortable: true,
        name: 'Email',
        minWidth: '250px',
        selector: row => row.email
    },
    {
        sortable: true,
        name: 'Position',
        minWidth: '250px',
        selector: row => row.post
    },
    {
        sortable: true,
        name: 'Office',
        minWidth: '150px',
        selector: row => row.city
    },
    {
        sortable: true,
        name: 'Start Date',
        minWidth: '150px',
        selector: row => row.start_date
    },
    {
        sortable: true,
        name: 'Salary',
        minWidth: '150px',
        selector: row => row.salary
    }
]
// ** Table for Menu item page
export const menuItemColumns = [
    {
        sortable: true,
        name: 'Images',
        minWidth: '200px',
        selector: row => row.images,
        cell: row => <img height="84px" width="56px" alt={row.name} src={row.posterUrl}/>
    },
    {
        sortable: true,
        name: 'Name',
        minWidth: '350px',
        selector: row => row.name
    },
    {
        sortable: true,
        name: 'Category',
        minWidth: '250px',
        selector: row => row.category
    },
    {
        sortable: true,
        name: 'Modifier',
        minWidth: '150px',
        selector: row => row.modifier,
        cell: row => {
            return (
                <Badge color={status[row.status].color} pill>
                    {status[row.status].title}
                </Badge>
            )
        }
    },
    {
        sortable: true,
        name: 'Addon',
        minWidth: '150px',
        selector: row => row.addon,
        cell: row => {
            return (
                <Badge color={status[row.status].color} pill>
                    {status[row.status].title}
                </Badge>
            )
        }
    },
    {
        sortable: true,
        name: 'Price',
        minWidth: '150px',
        selector: row => row.price
    },
    {
        sortable: true,
        name: 'Actions',
        minWidth: '150px',
        selector: row => row.actions,
        cell: () => {
            return (<div className="d-flex flex-row m-1">
                    <span className="btn btn-warning"><Trash size={15}/> </span>
                    <span className="btn btn-danger"><Edit size={15}/></span>
                </div>
            )
        }
    }
]
// ** Table for  category page
export const categoryColumns = [
    {
        sortable: true,
        name: 'Priority',
        minWidth: '225px',
        selector: row => row.priority
    },
    {
        sortable: true,
        name: 'Name',
        minWidth: '250px',
        selector: row => row.name
    },
    {
        sortable: true,
        name: 'Pairing',
        minWidth: '250px',
        selector: row => row.pairing
    },
    {
        sortable: true,
        name: 'Action',
        minWidth: '150px',
        selector: row => row.action,
        cell: () => {
            return (<div className="d-flex flex-row m-1">
                    <span className="btn btn-warning"><Trash size={15}/> </span>
                    <span className="btn btn-danger"><Edit size={15}/></span>
                </div>
            )
        }
    }
]
// ** Table for  modifier page
export const modifierColumns = [
    {
        sortable: true,
        name: 'Name',
        minWidth: '225px',
        selector: row => row.name
    },
    {
        sortable: true,
        name: 'Instruction',
        minWidth: '250px',
        selector: row => row.instruction
    },
    {
        sortable: true,
        name: 'Options',
        minWidth: '250px',
        selector: row => row.options,
        cell: row => {
            return (
                <Badge color={status[row.status].color} pill>
                    {status[row.status].title}
                </Badge>
            )
        }
    },
    {
        sortable: true,
        name: 'Actions',
        minWidth: '150px',
        selector: row => row.actions,
        cell: () => {
            return (<div className="d-flex flex-row m-1">
                    <span className="btn btn-warning"><Trash size={15}/> </span>
                    <span className="btn btn-danger"><Edit size={15}/></span>
                </div>
            )
        }
    }
]
// ** Table for  addon page
export const addonColumns = [
    {
        sortable: true,
        name: 'Name',
        minWidth: '225px',
        selector: row => row.name
    },
    {
        sortable: true,
        name: 'Instruction',
        minWidth: '250px',
        selector: row => row.instruction
    },
    {
        sortable: true,
        name: 'Options',
        minWidth: '250px',
        selector: row => row.options,
        cell: row => {
            return (
                <Badge color={status[row.status].color} pill>
                    {status[row.status].title}
                </Badge>
            )
        }
    },
    {
        sortable: true,
        name: 'Actions',
        minWidth: '150px',
        selector: row => row.actions,
        cell: () => {
            return (<div className="d-flex flex-row m-1">
                    <span className="btn btn-warning"><Trash size={15}/> </span>
                    <span className="btn btn-danger"><Edit size={15}/></span>
                </div>
            )
        }
    }
]
// ** Table for  promotion page
export const promotionColumns = [
    {
        sortable: true,
        name: 'Status',
        minWidth: '225px',
        selector: row => row.status,
        cell: row => {
            return (
                <Badge color={status[row.status].color} pill>
                    {status[row.status].title}
                </Badge>
            )
        }
    },
    {
        sortable: true,
        name: 'Name',
        minWidth: '250px',
        selector: row => row.name
    },
    {
        sortable: true,
        name: 'Code',
        minWidth: '250px',
        selector: row => row.code
    },
    {
        sortable: true,
        name: 'Type',
        minWidth: '150px',
        selector: row => row.type
    },
    {
        sortable: true,
        name: 'Amount',
        minWidth: '150px',
        selector: row => row.amount
    },
    {
        sortable: true,
        name: 'Actions',
        minWidth: '150px',
        selector: row => row.actions,
        cell: () => {
            return (<div className="d-flex flex-row m-1">
                    <span className="btn btn-warning"><Trash size={15}/> </span>
                    <span className="btn btn-danger"><Edit size={15}/></span>
                </div>
            )
        }
    }
]

// ** Table for customer page
export const customerColumns = [
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
// ** Table for item page
export const itemColumns = [
    {
        sortable: true,
        name: 'ID',
        minWidth: '225px',
        selector: row => row.id
    },
    {
        sortable: true,
        name: 'Code',
        minWidth: '250px',
        selector: row => row.code
    },
    {
        sortable: true,
        name: 'Description',
        minWidth: '250px',
        selector: row => row.description
    },
    {
        sortable: true,
        name: 'Unit',
        minWidth: '150px',
        selector: row => row.unit
    },
    {
        sortable: true,
        name: 'Price',
        minWidth: '150px',
        selector: row => row.price
    },
    {
        sortable: true,
        name: 'Unit/item',
        minWidth: '150px',
        selector: row => row.unit_item
    },
    {
        sortable: true,
        name: 'Quantity/Item',
        minWidth: '150px',
        selector: row => row.qty_item
    },
    {
        sortable: true,
        name: 'Stock',
        minWidth: '150px',
        selector: row => row.stock
    },
    {
        sortable: true,
        name: 'Distributor',
        minWidth: '150px',
        selector: row => row.distributor
    },
    {
        sortable: true,
        name: 'Actions',
        minWidth: '150px',
        selector: row => row.actions,
        cell: () => {
            return (<div className="d-flex flex-row m-1">
                    <span className="btn btn-warning"><Trash size={15}/> </span>
                    <span className="btn btn-danger"><Edit size={15}/></span>
                </div>
            )
        }
    }
]
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
        cell: () => {
            return (<div className="d-flex flex-row m-1">
                    <span className="btn btn-warning"><Trash size={15}/> </span>
                    <span className="btn btn-danger"><Edit size={15}/></span>
                </div>
            )
        }
    }
]
// ** Table for distributor page
export const distributorColumns = [
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
        name: 'Abbreviation',
        minWidth: '250px',
        selector: row => row.abbreviation
    },
    {
        sortable: true,
        name: 'Contact Person',
        minWidth: '250px',
        selector: row => row.contact_person
    },
    {
        sortable: true,
        name: 'Email',
        minWidth: '150px',
        selector: row => row.email
    },
    {
        sortable: true,
        name: 'Phone',
        minWidth: '150px',
        selector: row => row.phone
    },
    {
        sortable: true,
        name: 'Actions',
        minWidth: '150px',
        selector: row => row.actions,
        cell: () => {
            return (<div className="d-flex flex-row m-1">
                    <span className="btn btn-warning"><Trash size={15}/> </span>
                    <span className="btn btn-danger"><Edit size={15}/></span>
                </div>
            )
        }
    }
]
// ** Table for recipe page
export const recipeColumns = [
    {
        sortable: true,
        name: 'ID',
        minWidth: '225px',
        selector: row => row.id
    },
    {
        sortable: true,
        name: 'Item',
        minWidth: '250px',
        selector: row => row.item
    },
    {
        sortable: true,
        name: 'Recipe Items',
        minWidth: '250px',
        selector: row => row.recipe_item
    },
    {
        sortable: true,
        name: 'Actions',
        minWidth: '150px',
        selector: row => row.actions,
        cell: () => {
            return (<div className="d-flex flex-row m-1">
                    <span className="btn btn-warning"><Trash size={15}/> </span>
                    <span className="btn btn-danger"><Edit size={15}/></span>
                </div>
            )
        }
    }
]