import React from 'react'
import { Card, Row, Col } from 'reactstrap'

export const Blocks = (props) => {
    return (
        <Card style={{backgroundColor: `${props.bg}`, height: '85%', padding:'5px'}} role='button'>
            <div className="container-sm">
                <Row>
                    <Col style={{marginTop:'40px'}}>
                        <h3 style={{fontWeight: 'bolder'}}>{props.stats}</h3>
                    </Col>
                    <Col style={{textAlign: 'end', marginTop: '10px', padding: '0px'}}>
                        <img src={props.img} width={35}/>
                    </Col>
                </Row>
                <h6>{props.title}</h6>
            </div>
        </Card>
    )
}

export const LineCards = (props) => {
    return (
        <Card style={{backgroundColor: '#e8eaed'}} role='button'>
            <div className="container-sm">
                <Row>
                    <Col style={{padding:'0px'}}>
                        <div style={{display:'flex', justifyContent:'space-between', margin:'6px'}}>
                            <div style={{display:'flex'}}>
                                <img src={props.img} width={35}/>
                                <h6 style={{marginTop:'8px', marginLeft:'5px'}}>{props.title}</h6>
                            </div>
                            <h4 style={{fontWeight: 'bolder', paddingTop: '5px'}}>{props.stats}</h4>
                        </div>
                    </Col>
                </Row>
            </div>
        </Card>
    )
}

