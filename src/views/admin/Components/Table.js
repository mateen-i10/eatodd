import DataTable from 'react-data-table-component'
// ** Reactstrap Imports
import {Button, Card, CardHeader, CardTitle, Input} from 'reactstrap'
import {ChevronDown} from "react-feather"
import Link from "react-router-dom/es/Link"

const DataTablesBasic = (props) => {

    const columns = props.heading
    console.log("basicColumns", columns)

    const data = props.data

    return (
        <Card className='overflow-hidden'>
            <CardHeader>
                <CardTitle tag='h4'>{props.tabletitle}</CardTitle>
                {
                    props.tabletitle === 'Users' ? <Link to = '/AddUser'>
                        <Button.Ripple color='primary'>Add a new User</Button.Ripple>
                    </Link> : props.tabletitle === 'FaceBook Auto Post' ? <Link to = '/AddFacebookPost'>
                        <Button.Ripple color='primary'>Add a new Post</Button.Ripple>
                    </Link> : props.tabletitle === 'Scheduled Sms' ? <Link to = '/SechduledSms'>
                        <Button.Ripple color='primary'>Schedule a New Sms</Button.Ripple>
                    </Link> : []
                }
            </CardHeader>

            <hr/>

            <div className="row">
                <div className="col-md-11 mx-3">
                    <Input type="text" placeholder="Search by Name, Email or Role." />
                </div>
            </div>

            <div className='react-dataTable'>
                <DataTable
                    noHeader
                    pagination
                    data={data}
                    columns={columns}
                    className='react-dataTable'
                    sortIcon={<ChevronDown size={10} />}
                    paginationRowsPerPageOptions={[10, 25, 50, 100]}
                />
            </div>
        </Card>
    )
}

export default DataTablesBasic