import React from 'react'

import { Card, CardTitle, CardBody, Row, Col } from 'reactstrap'

import dashboard from '../../../assets/images/empDashboard/layout.png'
import cutlery from '../../../assets/images/empDashboard/cutlery.png'
import growth from '../../../assets/images/empDashboard/growth.png'

import confirmed from '../../../assets/images/empDashboard/confirmation.png'
import cooking from '../../../assets/images/empDashboard/cooking.png'
import cooked from '../../../assets/images/empDashboard/done.png'
import foodTruck from '../../../assets/images/empDashboard/delivery-car.png'
import deliverd from '../../../assets/images/empDashboard/delivery-man.png'
import refund from '../../../assets/images/empDashboard/refund.png'
import schedule from '../../../assets/images/empDashboard/calendar.png'
import all from '../../../assets/images/empDashboard/all-inclusive.png'

import Select from 'react-select'

const EmpCards = () => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const customStyles = {
        control: base => ({
            ...base,
            height: 35,
            minHeight: 35,
            fontSize: '15px'
        })
    }

    return (
        <>
            <div style={{marginBottom: '10px'}}>
                <section>
                    <Row style={{justifyContent: 'space-between'}}>
                        <Col lg={4} md={6} sm={12}>
                            <div>
                                <section>
                                    <Row>
                                        <Col>
                                            <div style={{display:'flex'}}>
                                                <img src={dashboard} width={30} height={30}/>
                                                <h2 style={{marginLeft: '10px', marginTop: '1px'}}>Dashboard</h2>
                                            </div>
                                        </Col>
                                    </Row>
                                </section>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div>
                                <section>
                                    <Row>
                                        <Col>
                                            <div style={{display:'flex'}}>
                                                <p style={{marginTop: '0px'}}>Follow Up your restaurants Activity</p>
                                                <img src={cutlery} width={25} height={25}/>
                                            </div>
                                        </Col>
                                    </Row>
                                </section>
                            </div>
                        </Col>
                    </Row>
                </section>
            </div>

            <Card>
                <CardTitle>
                    <section>
                        <Row style={{justifyContent: 'space-between', padding: '15px', marginBottom: '-36px'}}>
                            <Col md={5}>
                                <div style={{display:'flex'}}>
                                    <img src={growth} width={35}/>
                                    <h4 style={{marginTop: '10px', marginLeft: '5px'}}>Dashboard order statistics</h4>
                                </div>
                            </Col>
                            <Col md={3}>
                                <Select options={options}  styles={customStyles} />
                            </Col>
                        </Row>
                    </section>
                </CardTitle>
                <hr/>
                <CardBody>
                    <section>
                        <div className="container-sm">
                            <Row>
                                <Col lg={3} md={6} sm={12} style={{paddingBottom: '5px'}}>
                                    <Card style={{backgroundColor: '#28c76f66', height: '85%', padding:'5px'}}>
                                        <div className="container-sm">
                                            <Row>
                                                <Col style={{marginTop:'40px'}}>
                                                    <h3 style={{fontWeight: 'bolder'}}>1</h3>
                                                </Col>
                                                <Col style={{textAlign: 'end', marginTop: '10px', padding: '0px'}}>
                                                    <img src={confirmed} width={35}/>
                                                </Col>
                                            </Row>
                                            <h6>Confirmed</h6>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={3} md={6} sm={12} style={{paddingBottom: '5px'}}>
                                    <Card style={{backgroundColor: '#28c76f33', height: '85%', padding:'5px'}}>
                                        <div className="container-sm">
                                            <Row>
                                                <Col style={{marginTop:'40px'}}>
                                                    <h3 style={{fontWeight: 'bolder'}}>0</h3>
                                                </Col>
                                                <Col style={{textAlign: 'end', marginTop: '10px', padding: '0px'}}>
                                                    <img src={cooking} width={35}/>
                                                </Col>
                                            </Row>
                                            <h6>Cooking</h6>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={3} md={6} sm={12} style={{paddingBottom: '5px'}}>
                                    <Card style={{backgroundColor: '#BDFF7E', height: '85%', padding:'5px'}}>
                                        <div className="container-sm">
                                            <Row>
                                                <Col style={{marginTop:'40px'}}>
                                                    <h3 style={{fontWeight: 'bolder'}}>0</h3>
                                                </Col>
                                                <Col style={{textAlign: 'end', marginTop: '10px', padding: '0px'}}>
                                                    <img src={cooked} width={35}/>
                                                </Col>
                                            </Row>
                                            <h6>Ready for delivery</h6>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={3} md={6} sm={12} style={{paddingBottom: '5px'}}>
                                    <Card style={{backgroundColor: '#D7FFDE', height: '85%', padding:'5px'}}>
                                        <div className="container-sm">
                                            <Row>
                                                <Col style={{marginTop:'40px'}}>
                                                    <h3 style={{fontWeight: 'bolder'}}>0</h3>
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
                                <Col lg={3} md={6} sm={12} style={{paddingBottom: '5px'}}>
                                    <Card style={{backgroundColor: '#e8eaed'}}>
                                        <div className="container-sm">
                                            <Row>
                                                <Col style={{padding:'0px'}}>
                                                    <div style={{display:'flex', justifyContent:'space-between', margin:'6px'}}>
                                                        <div style={{display:'flex'}}>
                                                            <img src={deliverd} width={35}/>
                                                            <h6 style={{marginTop:'8px', marginLeft:'5px'}}>Delivered</h6>
                                                        </div>
                                                        <h4 style={{fontWeight: 'bolder', paddingTop: '5px'}}>15</h4>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={3} md={6} sm={12} style={{paddingBottom: '5px'}}>
                                    <Card style={{backgroundColor: '#e8eaed'}}>
                                        <div className="container-sm">
                                            <Row>
                                                <Col style={{padding:'0px'}}>
                                                    <div style={{display:'flex', justifyContent:'space-between', margin:'6px'}}>
                                                        <div style={{display:'flex'}}>
                                                            <img src={refund} width={35}/>
                                                            <h6 style={{marginTop:'8px', marginLeft:'5px'}}>Refunded</h6>
                                                        </div>
                                                        <h4 style={{fontWeight: 'bolder', paddingTop: '5px'}}>0</h4>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={3} md={6} sm={12} style={{paddingBottom: '5px'}}>
                                    <Card style={{backgroundColor: '#e8eaed'}}>
                                        <div className="container-sm">
                                            <Row>
                                                <Col style={{padding:'0px'}}>
                                                    <div style={{display:'flex', justifyContent:'space-between', margin:'6px'}}>
                                                        <div style={{display:'flex'}}>
                                                            <img src={schedule} width={35}/>
                                                            <h6 style={{marginTop:'8px', marginLeft:'5px'}}>Scheduled</h6>
                                                        </div>
                                                        <h4 style={{fontWeight: 'bolder', paddingTop: '5px'}}>0</h4>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={3} md={6} sm={12} style={{paddingBottom: '5px'}}>
                                    <Card style={{backgroundColor: '#e8eaed'}}>
                                        <div className="container-sm">
                                            <Row>
                                                <Col style={{padding:'0px'}}>
                                                    <div style={{display:'flex', justifyContent:'space-between', margin:'6px'}}>
                                                        <div style={{display:'flex'}}>
                                                            <img src={all} width={35}/>
                                                            <h6 style={{marginTop:'8px', marginLeft:'5px'}}>All</h6>
                                                        </div>
                                                        <h4 style={{fontWeight: 'bolder', paddingTop: '5px'}}>21</h4>
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
        </>
    )
}

export default EmpCards