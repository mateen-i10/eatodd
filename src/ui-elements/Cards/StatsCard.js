// ** Third Party Components
import {
    Box,
    DollarSign,
    TrendingUp,
    User,
    BarChart,
    BarChart2,
    CheckCircle,
    CheckSquare,
    Compass,
    RefreshCcw, Percent
} from 'react-feather'

// ** Custom Components
// import Avatar from '@core/components/avatar'
import Avatar from "../../@core/components/avatar"
// ** Reactstrap Imports
import {Card, CardBody, CardHeader, CardText, CardTitle, Col, Row} from 'reactstrap'
import {useSelector, useDispatch} from "react-redux"
import {useEffect} from "react"
import {adminDashboardRestData} from "../../redux/adminDashboard/actions"


const StatsCard = () => {
    const dispatch = useDispatch()

    const AdminDash = useSelector(state => state.AdminDashReducer.object)

    useEffect(() => {
        dispatch(adminDashboardRestData(1))
    }, [])

    console.log(AdminDash, 'lets see')

    const today = () => {
        const d = new Date()
        const month = d.getMonth()
        const year = d.getFullYear()
        const hour = d.getHours()
        const mins = d.getMinutes()
        const day = d.getDay()

        return (`${day  }:${  month  }:${  year  }:${  hour  }:${  mins}`)
    }

    return (
        <Card className='card-statistics'>
            <CardHeader>
                <CardTitle tag='h4'>Orders</CardTitle>
                <CardText className='card-text font-small-2 me-25 mb-0'>{today()}</CardText>
            </CardHeader>
            <CardBody className='statistics-body'>
                {/*<Row>{renderData()}</Row>*/}
                <Row>
                    <Col xl={3} sm={6}>
                        <div className='d-flex align-items-center mb-2'>
                            <Avatar color='light-primary' icon={<CheckCircle size={24}/>} className='me-2'/>
                            <div className='my-auto'>
                                <h4 className='fw-bolder mb-0' style={{color: "green"}}>{AdminDash.confirmedCount}</h4>
                                <CardText className='font-small-3 mb-0'>Confirmed orders</CardText>
                            </div>
                        </div>
                    </Col>
                    {/*//*/}
                    <Col xl={3} sm={6}>
                        <div className='d-flex align-items-center mb-2'>
                            <Avatar color='light-info' icon={<BarChart size={24}/>} className='me-2'/>
                            <div className='my-auto'>
                                <h4 className='fw-bolder mb-0' style={{color: "blue"}}>{AdminDash.cookingCount}</h4>
                                <CardText className='font-small-3 mb-0'>cookingCount</CardText>
                            </div>
                        </div>
                    </Col> {/*//*/}
                    <Col xl={3} sm={6}>
                        <div className='d-flex align-items-center mb-2'>
                            <Avatar color='light-success' icon={<User size={24}/>} className='me-2'/>
                            <div className='my-auto'>
                                <h4 className='fw-bolder mb-0' style={{color: "green"}}>{AdminDash.customers}</h4>
                                <CardText className='font-small-3 mb-0'>customers</CardText>
                            </div>
                        </div>
                    </Col>
                    {/*//*/}
                    <Col xl={3} sm={6}>
                        <div className='d-flex align-items-center mb-2'>
                            <Avatar color='light-danger' icon={<BarChart2 size={24}/>} className='me-2'/>
                            <div className='my-auto'>
                                <h4 className='fw-bolder mb-0' style={{color: "red"}}>{AdminDash.deliveredCount}</h4>
                                <CardText className='font-small-3 mb-0'>deliveredCount</CardText>
                            </div>
                        </div>
                    </Col>
                    {/*//*/}
                    <Col xl={3} sm={6}>
                        <div className='d-flex align-items-center mb-2'>
                            <Avatar color='light-primary' icon={<Compass size={24}/>} className='me-2'/>
                            <div className='my-auto'>
                                <h4 className='fw-bolder mb-0' style={{color: "green"}}>{AdminDash.foodOnTheWayCount}</h4>
                                <CardText className='font-small-3 mb-0'>foodOnTheWayCount</CardText>
                            </div>
                        </div>
                    </Col>
                    {/*//*/}
                    <Col xl={3} sm={6}>
                        <div className='d-flex align-items-center mb-2'>
                            <Avatar color='light-info' icon={<Box size={24}/>} className='me-2'/>
                            <div className='my-auto'>
                                <h4 className='fw-bolder mb-0' style={{color: "blue"}}>{AdminDash.products}</h4>
                                <CardText className='font-small-3 mb-0'>products</CardText>
                            </div>
                        </div>
                    </Col>
                    {/*//*/}
                    <Col xl={3} sm={6}>
                        <div className='d-flex align-items-center mb-2'>
                            <Avatar color='light-success' icon={<CheckSquare size={24}/>} className='me-2'/>
                            <div className='my-auto'>
                                <h4 className='fw-bolder mb-0' style={{color: "green"}}>{AdminDash.readyToDeliverCount}</h4>
                                <CardText className='font-small-3 mb-0'>readyToDeliverCount</CardText>
                            </div>
                        </div>
                    </Col>
                    {/*//*/}
                    <Col xl={3} sm={6}>
                        <div className='d-flex align-items-center mb-2'>
                            <Avatar color='light-danger' icon={<RefreshCcw size={24}/>} className='me-2'/>
                            <div className='my-auto'>
                                <h4 className='fw-bolder mb-0' style={{color: "red"}}>{AdminDash.refundedCount}</h4>
                                <CardText className='font-small-3 mb-0'>refundedCount</CardText>
                            </div>
                        </div>
                    </Col>
                    {/*//*/}
                    <Col xl={3} sm={6}>
                        <div className='d-flex align-items-center mb-2'>
                            <Avatar color='light-primary' icon={<DollarSign size={24}/>} className='me-2'/>
                            <div className='my-auto'>
                                <h4 className='fw-bolder mb-0' style={{color: "green"}}>{AdminDash.revenue}</h4>
                                <CardText className='font-small-3 mb-0'>revenue</CardText>
                            </div>
                        </div>
                    </Col> {/*//*/}
                    <Col xl={3} sm={6}>
                        <div className='d-flex align-items-center mb-2'>
                            <Avatar color='light-info' icon={<TrendingUp size={24}/>} className='me-2'/>
                            <div className='my-auto'>
                                <h4 className='fw-bolder mb-0' style={{color: "green"}}>{AdminDash.sales}</h4>
                                <CardText className='font-small-3 mb-0'>sales</CardText>
                            </div>
                        </div>
                    </Col> {/*//*/}
                    <Col xl={3} sm={6}>
                        <div className='d-flex align-items-center mb-2'>
                            <Avatar color='light-success' icon={<Percent size={24}/>} className='me-2'/>
                            <div className='my-auto'>
                                <h4 className='fw-bolder mb-0' style={{color: "green"}}>{AdminDash.scheduledCount}</h4>
                                <CardText className='font-small-3 mb-0'>scheduledCount</CardText>
                            </div>
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

export default StatsCard
