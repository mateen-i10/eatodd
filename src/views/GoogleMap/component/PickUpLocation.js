import React from 'react'
import {Button, Card, CardBody, CardHeader, CardTitle, Col, Input, InputGroup, InputGroupText, Row} from 'reactstrap'
import {Search} from 'react-feather'
import {BiCurrentLocation} from "react-icons/all"

const PickupLocation = ({places}) => {

    return (
        <div style={{}}>
            <div className=" mt-1">

                <InputGroup className="bg-white input-group-merge">
                    <InputGroupText>
                        <Search size={20}/>
                    </InputGroupText>
                    <Input color='primary' type='text'/>
                    <InputGroupText><BiCurrentLocation size={20}/>
                    </InputGroupText>
                </InputGroup>

                <div className=" align-items-center justify-content-center text-center">
                    <div className="col-12 mt-2">
                        <img className="disabled" src={require('../../../assets/images/logo/OMG_logo.png').default}
                             alt="EatOMG-image" width="50px"
                             height="50px"
                             style={{color: "gray"}}
                        />
                    </div>
                    {/*<div className="col-12 mt-1">*/}
                    {/*    <p>Find a EatOMG to order online for Pickup or select from list below</p>*/}
                    {/*</div>*/}

                    {/*<div className="text-uppercase text-start mb-1"*/}
                    {/*     style={{color: "#81be41", fontWeight: "600", fontSize: "1.1rem"}}>*/}
                    {/*    near by*/}
                    {/*    <hr className="m-0 p-0 divider-dashed"/>*/}
                    {/*</div>*/}
                    <div>
                        <Row className="align-items-center, justify-content-center mt-3 pickup-list">
                            <Col sm='12'>

                                <Card>
                                    {/*<PlaceDetail*/}
                                    {/*    place={place}*/}
                                    {/*/>*/}
                                    <CardHeader>
                                        <CardTitle tag='h5'
                                                   style={{color: "rgb(129 190 65)"}}>Near By</CardTitle>
                                    </CardHeader>
                                    {places.map((place, i) => (
                                        <CardBody key={i}>
                                            {/*<CardTitle tag='h5'*/}
                                            {/*           style={{color: "rgb(129 190 65)"}}>{place.name}</CardTitle>*/}
                                            {/*<CardText>{place.address}</CardText>*/}
                                            {/*<Button className='text-uppercase' color='primary' outline>*/}
                                            {/*    Select*/}
                                            {/*</Button>*/}
                                            <div className='justify-content-center align-items-center'>
                                                <div className='d-flex'>
                                                    <div>
                                                        <h6 className='transaction-title'
                                                            color="primary">{place.name}</h6>
                                                        <small>{place.address}</small>
                                                    </div>
                                                </div>
                                                <Button className='text-uppercase mt-1' color='primary' outline>
                                                    Select
                                                </Button>
                                            </div>
                                        </CardBody>
                                    ))}
                                </Card>

                            </Col>
                        </Row>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default PickupLocation
