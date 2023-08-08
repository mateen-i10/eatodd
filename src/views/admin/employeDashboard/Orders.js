import {
    Row,
    Col,
    Table,
    Input, Label, Card, CardBody, CardTitle, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap'
// ** React Imports
import React, {useEffect, useState} from 'react'
// ** Demo Components
import ReactPaginate from "react-paginate"
import {useDispatch, useSelector} from "react-redux"
import UILoader from "../../../@core/components/ui-loader"
import {
    getEmployeeOrdersStats,
    getEmployeesOrders,
    onChangeOrderStatus
} from "../../../redux/employeeDashboard/employeeOrders/action"
import Select from "react-select"
import {selectThemeColors} from "../../../utility/Utils"
import {useParams} from "react-router-dom"
import confirmed from '../../../assets/images/empDashboard/confirmation.png'
import cooking from '../../../assets/images/empDashboard/cooking.png'
import cooked from '../../../assets/images/empDashboard/done.png'
import foodTruck from '../../../assets/images/empDashboard/delivery-car.png'
import deliverd from '../../../assets/images/empDashboard/delivery-man.png'
import refund from '../../../assets/images/empDashboard/refund.png'
import schedule from '../../../assets/images/empDashboard/calendar.png'
import all from '../../../assets/images/empDashboard/all-inclusive.png'
import growth from "../../../assets/images/empDashboard/growth.png"
import {ChevronDown, Edit, FileText, MoreVertical, Trash} from "react-feather"
import DataTable from "react-data-table-component"
/*import {
    BsXSquare, CgPlayTrackPrev, FaFirstOrder,
    FaPrescription,
    FcCancel, FcPrevious, GoListOrdered,
    MdCancel,
    MdIncompleteCircle,
    MdOutlineSmsFailed,
    MdSmsFailed, RiReservedFill
} from "react-icons/all"*/

/*const orderStatus = [
    { value: 1, label: 'Proposed' },
    { value: 2, label: 'Reserved' },
    { value: 3, label: 'Prepared' },
    { value: 4, label: 'Completed' },
    { value: 5, label: 'Canceled' },
    { value: 6, label: 'Failed' }
]*/

const orderStatus = [
    { value: 1, label: 'Paid' },
    { value: 2, label: 'Pending' },
    { value: 3, label: 'Cancelled' },
    { value: 4, label: 'Completed' },
    { value: 5, label: 'Cooking' },
    { value: 6, label: 'Read To Deliver' },
    { value: 7, label: 'Food On Th eWay' },
    { value: 8, label: 'Delivered' },
    { value: 9, label: 'Confirmed' },
    { value: 10, label: 'Refunded' },
    { value: 11, label: 'Scheduled' }
]

const EmployeeOrders = () => {

    const customStyles = {
        control: base => ({
            ...base,
            height: 35,
            minHeight: 35,
            fontSize: '15px'
        })
    }

    const options = [
        { value: 'Overall Stats', label: 'Overall Stats' },
        { value: 'Todays Stats', label: 'Todays Stats' },
        { value: 'This Month Stats', label: 'This Month Stats' }
    ]

    //getting data from store
    const isLoading = useSelector(state => state.empOrder.isDetailLoading)
    const miscData = useSelector(state => state.empOrder.miscData)
    const empOrders = useSelector(state => state.empOrder.list)
    const empOrdersStat = useSelector(state => state.empOrder.object)
    const isSuccess = useSelector(state => state.reorderHistory.isSuccess)
    console.log('empOrders', empOrders)
    console.log('empOrdersStat', empOrdersStat)

    const [changeState, setChangeState] = useState({ value: 2, label: 'Pending' })
    const [totalOrders, setTotalOrders] = useState(0)


    useEffect(() => {
        if (empOrdersStat !== null) {
            const totalOrder =
                empOrdersStat.confirmedCount +
                empOrdersStat.cookingCount +
                empOrdersStat.readyToDeliverCount +
                empOrdersStat.foodOnTheWayCount +
                empOrdersStat.deliveredCount +
                empOrdersStat.refundedCount +
                empOrdersStat.scheduledCount
            setTotalOrders(totalOrder)
            console.log('total', totalOrder)
        }
    }, [empOrdersStat, isSuccess])
    // hooks
    const dispatch = useDispatch()
    const {id} = useParams()
    console.log('id', id)

    const changeStatus = (e) => {
        console.log('yyy', e)
        setChangeState(e)
    }

    useEffect(() => {
        dispatch(getEmployeesOrders(1, 12, null, id, changeState.value))
    }, [changeState, id])

    useEffect(() => {
        dispatch(getEmployeeOrdersStats(id))
    }, [empOrders])

    // ** refs
    const [currentPage, setCurrentPage] = useState(miscData && miscData.pageIndex ? miscData.pageIndex : 1)
    const [pageSize] = useState(12)
    const [searchValue, setSearchValue] = useState('')

    const changeOrderStatus = (id, status) => {
        console.log("e", status, id)
        dispatch(onChangeOrderStatus(id, status?.value))
    }

    const handleFilter = e => {
        console.log('e.keyCode', e.keyCode)
        const value = e.target.value
        if (e.keyCode === 13) {
            dispatch(getEmployeesOrders(currentPage, pageSize, value, id, changeState.value))
        }
        setSearchValue(value)
    }

    const handlePagination = page => {
        dispatch(getEmployeesOrders(page.selected + 1, pageSize, searchValue, id, changeState.value))
        setCurrentPage(page.selected + 1)
    }

    const columns = [
        {
            name: 'Quantity',
            selector: (row) => row.quantity,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Total Price',
            selector: (row) => row.totalPrice,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'City',
            selector: (row) => row.shippingAddress?.city,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Status',
            selector: (row) => { return row.status === 1 ? "Paid" : row.status === 2 ? "Pending" : row.status === 3 ? "Cancelled" : row.status === 4 ? "Completed" : row.status === 5 ? "Cooking" : row.status === 6 ? "Read To Deliver" : row.status === 7 ? "Food On Th eWay" : row.status === 8 ? "Delivered" : row.status === 9 ? "Confirmed" : row.status === 10 ? "Refunded" : row.status === 11 ? "Scheduled"  : '' },
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Change Status',
            allowOverflow: true,
            cell: row => {
                return (

                        <Select
                            options={orderStatus}
                            onChange={(e) => { changeOrderStatus(row.id, e) }}
                            theme={selectThemeColors}
                            className='react-select'
                            classNamePrefix='select'
                            styles={{maxWidth: '200px'}}
                        />

                )
            }
        }
    ]

    const CustomPagination = () => {
        const count = miscData?.totalPages ?? 0

        return <ReactPaginate
            previousLabel={''}
            nextLabel={''}
            breakLabel='...'
            pageCount={count || 1}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            activeClassName='active'
            forcePage={currentPage !== 0 ? currentPage - 1 : 0}
            onPageChange={page => handlePagination(page)}
            pageClassName={'page-item'}
            nextLinkClassName={'page-link'}
            nextClassName={'page-item next'}
            previousClassName={'page-item prev'}
            previousLinkClassName={'page-link'}
            pageLinkClassName={'page-link'}
            breakClassName='page-item'
            breakLinkClassName='page-link'
            containerClassName={
                'pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1'
            }
        />
    }

    const dataToRender = () => {
        if (empOrders.length > 0) {
            return empOrders
        }  else {
            return empOrders.slice(0, pageSize)
        }
    }

    return (
        <UILoader blocking={isLoading}>

            <Card>
                <CardTitle>
                    <section>
                        <Row style={{justifyContent: 'space-between', padding: '15px', marginBottom: '-36px'}}>
                            <Col md={5}>
                                <div style={{display:'flex'}}>
                                    <img src={growth} width={20} height={20} style={{marginTop:'8px'}}/>
                                    <h4 style={{marginTop: '10px', marginLeft: '5px'}}>Dashboard order statistics</h4>
                                </div>
                            </Col>
                            <Col md={3}>
                                <Select options={options}  styles={customStyles} maxMenuHeight={100} />
                            </Col>
                        </Row>
                    </section>
                </CardTitle>
                <hr/>
                <CardBody>
                    <section>
                        <div className="container-sm">
                            <Row>
                                <Col lg={3} md={6} sm={12} style={{paddingBottom: '5px'}} onClick={(e) => console.log(e.title, 'selected card title')}>
                                    <Card style={{backgroundColor: `rgba(40, 199, 111, 0.4)`, height: '85%', padding:'5px'}} role='button'>
                                        <div className="container-sm">
                                            <Row>
                                                <Col style={{marginTop:'40px'}}>
                                                    <h3 style={{fontWeight: 'bolder'}}>{empOrdersStat.confirmedCount}</h3>
                                                </Col>
                                                <Col style={{textAlign: 'end', marginTop: '10px', padding: '0px'}}>
                                                    <img src={confirmed} width={35}/>
                                                </Col>
                                            </Row>
                                            <h6>Confirmed</h6>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={3} md={6} sm={12} style={{paddingBottom: '5px'}} onClick={(e) => console.log(e.title, 'selected card title')}>
                                    <Card style={{backgroundColor: `rgba(40, 199, 111, 0.2)`, height: '85%', padding:'5px'}} role='button'>
                                        <div className="container-sm">
                                            <Row>
                                                <Col style={{marginTop:'40px'}}>
                                                    <h3 style={{fontWeight: 'bolder'}}>{empOrdersStat.cookingCount}</h3>
                                                </Col>
                                                <Col style={{textAlign: 'end', marginTop: '10px', padding: '0px'}}>
                                                    <img src={cooking} width={35}/>
                                                </Col>
                                            </Row>
                                            <h6>Cooking</h6>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={3} md={6} sm={12} style={{paddingBottom: '5px'}} onClick={(e) => console.log(e.title, 'selected card title')}>
                                    <Card style={{backgroundColor: `rgb(189, 255, 126)`, height: '85%', padding:'5px'}} role='button'>
                                        <div className="container-sm">
                                            <Row>
                                                <Col style={{marginTop:'40px'}}>
                                                    <h3 style={{fontWeight: 'bolder'}}>{empOrdersStat.readyToDeliverCount}</h3>
                                                </Col>
                                                <Col style={{textAlign: 'end', marginTop: '10px', padding: '0px'}}>
                                                    <img src={cooked} width={35}/>
                                                </Col>
                                            </Row>
                                            <h6>Ready for delivery</h6>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={3} md={6} sm={12} style={{paddingBottom: '5px'}} onClick={(e) => console.log(e.title, 'selected card title')}>
                                    <Card style={{backgroundColor: `rgb(215, 255, 222)`, height: '85%', padding:'5px'}} role='button'>
                                        <div className="container-sm">
                                            <Row>
                                                <Col style={{marginTop:'40px'}}>
                                                    <h3 style={{fontWeight: 'bolder'}}>{empOrdersStat.foodOnTheWayCount}</h3>
                                                </Col>
                                                <Col style={{textAlign: 'end', marginTop: '10px', padding: '0px'}}>
                                                    <img src={foodTruck} width={35}/>
                                                </Col>
                                            </Row>
                                            <h6>Food on the way</h6>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </section>

                    <section>
                        <div className="container-sm">
                            <Row>
                                <Col lg={3} md={6} sm={12} style={{paddingBottom: '5px'}} onClick={(e) => console.log(e.title)}>
                                    <Card style={{backgroundColor: '#e8eaed'}} role='button'>
                                        <div className="container-sm">
                                            <Row>
                                                <Col style={{padding:'0px'}}>
                                                    <div style={{display:'flex', justifyContent:'space-between', margin:'6px'}}>
                                                        <div style={{display:'flex'}}>
                                                            <img src={deliverd} width={35}/>
                                                            <h6 style={{marginTop:'8px', marginLeft:'5px'}}>Delivered</h6>
                                                        </div>
                                                        <h4 style={{fontWeight: 'bolder', paddingTop: '5px'}}>{empOrdersStat.deliveredCount}</h4>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={3} md={6} sm={12} style={{paddingBottom: '5px'}} onClick={(e) => console.log(e.title)}>
                                    <Card style={{backgroundColor: '#e8eaed'}} role='button'>
                                        <div className="container-sm">
                                            <Row>
                                                <Col style={{padding:'0px'}}>
                                                    <div style={{display:'flex', justifyContent:'space-between', margin:'6px'}}>
                                                        <div style={{display:'flex'}}>
                                                            <img src={refund} width={35}/>
                                                            <h6 style={{marginTop:'8px', marginLeft:'5px'}}>Refunded</h6>
                                                        </div>
                                                        <h4 style={{fontWeight: 'bolder', paddingTop: '5px'}}>{empOrdersStat.refundedCount}</h4>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={3} md={6} sm={12} style={{paddingBottom: '5px'}} onClick={(e) => console.log(e.title)}>
                                    <Card style={{backgroundColor: '#e8eaed'}} role='button'>
                                        <div className="container-sm">
                                            <Row>
                                                <Col style={{padding:'0px'}}>
                                                    <div style={{display:'flex', justifyContent:'space-between', margin:'6px'}}>
                                                        <div style={{display:'flex'}}>
                                                            <img src={schedule} width={35}/>
                                                            <h6 style={{marginTop:'8px', marginLeft:'5px'}}>Scheduled</h6>
                                                        </div>
                                                        <h4 style={{fontWeight: 'bolder', paddingTop: '5px'}}>{empOrdersStat.scheduledCount}</h4>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={3} md={6} sm={12} style={{paddingBottom: '5px'}} onClick={(e) => console.log(e.title)}>
                                    <Card style={{backgroundColor: '#e8eaed'}} role='button'>
                                        <div className="container-sm">
                                            <Row>
                                                <Col style={{padding:'0px'}}>
                                                    <div style={{display:'flex', justifyContent:'space-between', margin:'6px'}}>
                                                        <div style={{display:'flex'}}>
                                                            <img src={all} width={35}/>
                                                            <h6 style={{marginTop:'8px', marginLeft:'5px'}}>All</h6>
                                                        </div>
                                                        <h4 style={{fontWeight: 'bolder', paddingTop: '5px'}}>{totalOrders}</h4>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </section>
                </CardBody>
            </Card>

            <Row>
                <Col xl={12} md={12} sm={12}>
                    <div className="card">

                            <Row>
                                <Col xl={6} sm={12}>
                                    <div className="card-header d-flex align-items-start pb-2">
                                        <h3 className="font-weight-bolder">Orders List</h3>
                                    </div>
                                </Col>
                                <Col xl={6} sm={12}>
                                    <div>
                                        <Label className='form-label pt-2'><b>Select Status</b></Label>
                                        <Select
                                            theme={selectThemeColors}
                                            className='react-select'
                                            classNamePrefix='select'
                                            options={orderStatus}
                                            onChange={changeStatus}
                                            value={changeState}
                                            isClearable={false}
                                        />
                                    </div>
                                </Col>
                            </Row>

                        <Row className='justify-content-end mx-0'>
                            <Col className='mt-1' md='12' sm='12'>
                                <Input
                                    className='dataTable-filter mb-50'
                                    type='text'
                                    placeholder='Search'
                                    bsSize='sm'
                                    id='search-input'
                                    value={searchValue}
                                    onKeyUp={handleFilter}
                                    onChange={handleFilter}
                                />
                            </Col>
                        </Row>

                        <div className="card-body">
                           {/* <Table className="table table-responsive" paginationComponent={CustomPagination}>
                                <thead>
                                <tr>
                                    <th>Meal Name</th>
                                    <th>Quantity</th>
                                    <th>Total Price</th>
                                    <th>City</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                {empOrders && empOrders.map((e, index) => {
                                    return <>
                                        <tr key={`optionsKey-${index}`}>
                                            <td>{e.ordersDetail?.map(m => { return m.meal?.name })}</td>
                                            <td>{e.quantity}</td>
                                            <td>{e.totalPrice}</td>
                                            <td>{e.shippingAddress?.city}</td>
                                            <td>{e.status === 1 ? "Proposed" : e.status === 2 ? "Reserved" : e.status === 3 ? "Prepared" : e.status === 4 ? "Completed" : e.status === 5 ? "Canceled" : e.status === 6 ? "Failed" : ""}</td>
                                            <td>{moment(new Date(d.expectedStartDate)).format('YYYY-MM-DD') }</td>
                                            <td>{moment(new Date(d.expectedEndDate)).format('YYYY-MM-DD') }</td>
                                        </tr>
                                    </>
                                })

                                }

                                </tbody>
                            </Table>*/}
                            <DataTable
                                noHeader
                                pagination
                                paginationServer
                                className='react-dataTable'
                                columns={columns}
                                sortIcon={<ChevronDown size={10} />}
                                paginationComponent={CustomPagination}
                                data={dataToRender()}
                            />
                        </div>

                    </div>
                </Col>
            </Row>
        </UILoader>
    )
}

export default EmployeeOrders
