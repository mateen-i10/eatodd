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
import { useContext } from 'react'
// ** Context
import { ThemeColors } from '../../utility/context/ThemeColors'
// ** Demo Components
// import CompanyTable from './CompanyTable'
import Earnings from '../../ui-elements/Cards/analytics/Earnings'
import CardMedal from '../../ui-elements/Cards/advance/CardMedal'
// import CardMeetup from '../../ui-elements/Cards/advance/CardMeetup'
import StatsCard from '../../ui-elements/Cards/statistics/StatsCard'
import CardTransactions from '../../ui-elements/Cards/advance/CardTransactions'
import CardBrowserStates from '../../ui-elements/Cards/advance/CardBrowserState'

const Dashboard = () => {
    // ** Context
    const { colors } = useContext(ThemeColors)

    return (
        <div id='dashboard-ecommerce'>
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
    )
}

export default Dashboard