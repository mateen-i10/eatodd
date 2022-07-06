import React from 'react'
import {Card, Col, Input, InputGroup, InputGroupText, Row} from 'reactstrap'
import {Search} from 'react-feather'
import {BiCurrentLocation} from "react-icons/all"
import PlaceDetail from "./PlaceDetail"

const PickupLocation = ({places}) => {
    // const arrLength = places.length
    // const elRefs = useRef([])
    // if (elRefs.current.length !== arrLength) {
    //     // add or remove refs
    //     elRefs.current = Array(arrLength)
    //         .fill()
    //         .map((_, i) => elRefs.current[i] || createRef())
    // }
    // console.log(elRefs)

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
                    <div className="col-12 mt-1">
                        <p>Find a EatOMG to order online for Pickup or select from list below</p>
                    </div>

                    <div className="text-uppercase text-start mb-1"
                         style={{color: "#81be41", fontWeight: "600", fontSize: "1.1rem"}}>
                        near by
                        <hr className="m-0 p-0 divider-dashed"/>
                    </div>
                    <div>
                        <Row className="align-items-center, justify-content-center mt-3 pickup-list">
                            <Col sm='12'>
                                {places.map((place, i) => (
                                    <Card className='mb-3' key={i}>
                                        <PlaceDetail
                                            // selected={Number(childClicked) === i}
                                            // refProps={elRefs.current[i]}
                                            place={place}
                                        />
                                    </Card>
                                ))}
                            </Col>
                        </Row>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default PickupLocation
