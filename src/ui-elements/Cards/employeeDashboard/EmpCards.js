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

import {Blocks, LineCards} from "./components/Blocks"

import Select from 'react-select'

const EmpCards = () => {

    const options = [
        { value: 'Overall Stats', label: 'Overall Stats' },
        { value: 'Todays Stats', label: 'Todays Stats' },
        { value: 'This Month Stats', label: 'This Month Stats' }
    ]

    const customStyles = {
        control: base => ({
            ...base,
            height: 35,
            minHeight: 35,
            fontSize: '15px'
        })
    }

    const dashboardBlockCardData = [
        {
            id:0,
            stats: 0,
            img: confirmed,
            title: 'Confirmed',
            bg: '#28c76f66'
        },
        {
            id:1,
            stats: 0,
            img: cooking,
            title: 'Cooking',
            bg: '#28c76f33'
        },
        {
            id:2,
            stats: 0,
            img: cooked,
            title: 'Ready for delivery',
            bg: '#BDFF7E'
        },
        {
            id:3,
            stats: 0,
            img: foodTruck,
            title: 'Food on the way',
            bg: '#D7FFDE'
        }
    ]

    const dashboardLineCharts = [
        {
            id: 0,
            stats: 15,
            title: 'Delivered',
            img: deliverd
        },
        {
            id: 0,
            stats: 0,
            title: 'Refunded',
            img: refund
        },
        {
            id: 0,
            stats: 0,
            title: 'Scheduled',
            img: schedule
        },
        {
            id: 0,
            stats: 15,
            title: 'All',
            img: all
        }
    ]

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
                                                <img src={dashboard} width={20} height={20}/>
                                                <h2 style={{marginLeft: '10px', marginTop: '-5px'}}>Dashboard</h2>
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
                                            <div style={{display:'flex', justifyContent: 'end'}}>
                                                <p style={{marginTop: '0px', marginRight: '5px'}}>Follow Up your restaurants Activity</p>
                                                <img src={cutlery} width={20} height={20}/>
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
                                {dashboardBlockCardData !== null ? dashboardBlockCardData.map(e => (
                                    <Col lg={3} md={6} sm={12} style={{paddingBottom: '5px'}} key={e.id} onClick={() => console.log(e.title, 'selected card title')}>
                                        <Blocks stats={e.stats} img={e.img} title={e.title} bg={e.bg} />
                                    </Col>
                                )) : [] }
                            </Row>
                        </div>
                    </section>
                    <section>
                        <div className="container-sm">
                            <Row>
                                {dashboardLineCharts !== null ? dashboardLineCharts.map(e => (
                                    <Col lg={3} md={6} sm={12} style={{paddingBottom: '5px'}} key={e.id} onClick={() => console.log(e.title)}>
                                        <LineCards stats={e.stats} img={e.img} title={e.title}/>
                                    </Col>
                                )) : []}
                            </Row>
                        </div>
                    </section>
                </CardBody>
            </Card>
        </>
    )
}

export default EmpCards