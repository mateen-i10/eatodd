import React from 'react'
import {Button, Card, CardBody, CardHeader, CardTitle, Col, Input, InputGroup, InputGroupText, Row} from 'reactstrap'
import {Search} from 'react-feather'
import "./index.css"

const PickUpTab = ({places}) => {

    // const onClick = () => {
    //     // navigator.geolocation.getCurrentPosition(function (position) {
    //     //     // console.log("Latitude is :", position.coords.latitude)
    //     //     console.log("Longitude is :", position.coords.longitude)
    //     // })
    //
    // }
    return (
        <div style={{}}>
            <div className=" mt-1">

                <InputGroup className="bg-white input-group-merge">
                    <InputGroupText>
                        <Search className="cursor-pointer" size={20}/>
                    </InputGroupText>
                    <Input color='primary' type='text'/>
                    {/*<InputGroupText><BiCurrentLocation className="cursor-pointer" size={20} onClick={onClick}/>*/}
                    {/*</InputGroupText>*/}

                </InputGroup>

                <div className=" align-items-center justify-content-center text-center">
                    <div className="col-12 mt-2">
                        <img className="disabled" src={require('../../../assets/images/logo/OMG_logo.png').default}
                             alt="EatOMG-image" width="50px"
                             height="50px"
                             style={{color: "gray"}}
                        />
                    </div>
                    <div>
                        <Row className="align-items-center, justify-content-center mt-3 pickup-list">
                            <Col sm='12'>

                                <Card>

                                    <CardHeader>
                                        <CardTitle tag='h5'
                                                   style={{color: "rgb(129 190 65)"}}>Near By</CardTitle>
                                    </CardHeader>
                                    {places.map((place, i) => (
                                        <CardBody key={i}>
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

export default PickUpTab
