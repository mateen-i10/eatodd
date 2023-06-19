import {
    Row,
    Col,
    Table,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    Badge,
    Card, CardBody, CardTitle, CardText
} from 'reactstrap'
import {MoreVertical, Edit, Trash} from "react-feather"
// ** React Imports
import React, {Fragment, useContext, useState} from 'react'
// ** Context
import { ThemeColors } from '../../utility/context/ThemeColors'
// ** Demo Components
import Earnings from '../../ui-elements/Cards/analytics/Earnings'
import CardMedal from '../../ui-elements/Cards/advance/CardMedal'
import StatsCard from '../../ui-elements/Cards/statistics/StatsCard'
import CardTransactions from '../../ui-elements/Cards/advance/CardTransactions'
import CardBrowserStates from '../../ui-elements/Cards/advance/CardBrowserState'
import AsyncSelect from "react-select/async"
import {loadOptions} from "../../utility/Utils"
import {useDispatch, useSelector} from "react-redux"
import {test, tesst} from "../../redux/adminDashboard/actions"
import confirmed from "../../assets/images/empDashboard/confirmation.png"
import cooking from "../../assets/images/empDashboard/cooking.png"
import cooked from "../../assets/images/empDashboard/done.png"
import foodTruck from "../../assets/images/empDashboard/delivery-car.png"
import deliverd from "../../assets/images/empDashboard/delivery-man.png"
import refund from "../../assets/images/empDashboard/refund.png"
import schedule from "../../assets/images/empDashboard/calendar.png"
import all from "../../assets/images/empDashboard/all-inclusive.png"

const Dashboard = () => {
    // ** Context
    const { colors } = useContext(ThemeColors)

    const [catId, setCatId] = useState(0)

    const obj = useSelector(state => state.AdminDashReducer.obj)
    const obj2 = useSelector(state => state.AdminDashReducer.objj)

    const dispatch = useDispatch()

    const restaurants = async (input) => {
        return loadOptions('Restaurant', input, 1, 12)
    }

    const handleChange = (e) => {
        setCatId(e.value)
        console.log(catId, "catID")

        if (catId !== null) {
            dispatch(test(catId))
            dispatch(tesst(catId))
        }
    }

    console.log(obj, 'obj')
    console.log(obj2, 'obj2')

    return (
        <Fragment>
            <div id='dashboard-ecommerce'>
            <div className='card'>
                <section>
                    <Row>
                        <Col lg={9}>
                            <h2 style={{padding: '10px', fontWeight: 'bolder', marginTop: '5px'}}>Welcome user</h2>
                        </Col>
                        <Col lg={3}>
                            <div style={{padding: '10px'}}>
                                <AsyncSelect
                                    loadOptions={restaurants}
                                    defaultOptions
                                    isLoading={true}
                                    onChange={e => handleChange(e)}
                                />
                            </div>
                        </Col>
                    </Row>
                </section>
            </div>
            {/**/}
            {catId ? <Card>
                <CardBody>
                    <section>
                        <div className="container-sm">
                            <Row>
                                <Col lg={3} md={6} sm={12} style={{paddingBottom: '5px'}} onClick={(e) => console.log(e.title, 'selected card title')}>
                                    <Card style={{backgroundColor: `rgba(40, 199, 111, 0.4)`, height: '85%', padding:'5px'}} role='button'>
                                        <div className="container-sm">
                                            <Row>
                                                <Col style={{marginTop:'40px'}}>
                                                    <h3 style={{fontWeight: 'bolder'}}>{obj.confirmedCount}</h3>
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
                                                    <h3 style={{fontWeight: 'bolder'}}>{obj.cookingCount}</h3>
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
                                                    <h3 style={{fontWeight: 'bolder'}}>{obj.readyToDeliverCount}</h3>
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
                                                    <h3 style={{fontWeight: 'bolder'}}>{obj.foodOnTheWayCount}</h3>
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
                                                        <h4 style={{fontWeight: 'bolder', paddingTop: '5px'}}>{obj.deliveredCount}</h4>
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
                                                        <h4 style={{fontWeight: 'bolder', paddingTop: '5px'}}>{obj.refundedCount}</h4>
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
                                                        <h4 style={{fontWeight: 'bolder', paddingTop: '5px'}}>{obj.scheduledCount}</h4>
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
                                                        <h4 style={{fontWeight: 'bolder', paddingTop: '5px'}}>{obj.totalOrders}</h4>
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
            </Card> : []}
            {/**/}
            <Row className='match-height'>
                <Col xl='4' md='6' xs='12'>
                    <CardMedal />
                </Col>
                <Col xl='8' md='6' xs='12'>
                    <StatsCard cols={{ xl: '3', sm: '6' }} />
                </Col>
            </Row>
            <Row className='match-height'>
                <Col lg='4' md='4'>
                    <Row className='match-height'>
                        <Col lg='12' md='6' xs='12'>
                            <Earnings success={colors.success.main} />
                        </Col>
                        <Col lg='12' md='6' xs='12'>
                            <Card className='earnings-card'>
                                <CardBody>
                                    <Row>
                                        <Col xs='6'>
                                            <CardTitle className='mb-1'>Top Restaurant</CardTitle>
                                            <div className='font-small-2'>This Month</div>
                                        </Col>
                                        <Col xs='6'>
                                            <h5 className='mb-1'>North Ave</h5>
                                            <h6 className='mb-1'>$6055.56</h6>
                                            <CardText className='text-muted font-small-2'>
                                                <span className='fw-bolder'>68.2%</span>
                                                <span> more earnings than last month.</span>
                                            </CardText>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col lg='8' xs='12'>
                    <div className='card'>
                        <div className="card-body">
                            <Table responsive>
                                <thead>
                                <tr>
                                    <th>JOb Name</th>
                                    <th>Project Name</th>
                                    <th>Started Date</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Job 1</td>
                                    <td>Project Test</td>
                                    <td>March 30, 2022</td>
                                    <td>
                                        <Badge pill color='light-primary' className='me-1'>
                                            Active
                                        </Badge>
                                    </td>
                                    <td>
                                        <UncontrolledDropdown>
                                            <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                                                <MoreVertical size={15} />
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                                                    <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>
                                                </DropdownItem>
                                                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                                                    <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Job 1</td>
                                    <td>Project Test</td>
                                    <td>March 30, 2022</td>
                                    <td>
                                        <Badge pill color='light-primary' className='me-1'>
                                            Active
                                        </Badge>
                                    </td>
                                    <td>
                                        <UncontrolledDropdown>
                                            <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                                                <MoreVertical size={15} />
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                                                    <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>
                                                </DropdownItem>
                                                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                                                    <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Job 1</td>
                                    <td>Project Test</td>
                                    <td>March 30, 2022</td>
                                    <td>
                                        <Badge pill color='light-primary' className='me-1'>
                                            Active
                                        </Badge>
                                    </td>
                                    <td>
                                        <UncontrolledDropdown>
                                            <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                                                <MoreVertical size={15} />
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                                                    <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>
                                                </DropdownItem>
                                                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                                                    <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Job 1</td>
                                    <td>Project Test</td>
                                    <td>March 30, 2022</td>
                                    <td>
                                        <Badge pill color='light-primary' className='me-1'>
                                            Active
                                        </Badge>
                                    </td>
                                    <td>
                                        <UncontrolledDropdown>
                                            <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                                                <MoreVertical size={15} />
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                                                    <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>
                                                </DropdownItem>
                                                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                                                    <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </td>
                                </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className='match-height'>
                <Col lg='6' md='6' xs='12'>
                    <CardBrowserStates colors={colors}  />
                </Col>
                <Col lg='6' md='6' xs='12'>
                    <CardTransactions />
                </Col>
            </Row>
        </div>
        </Fragment>
    )
}

export default Dashboard