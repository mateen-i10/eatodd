import {Button, Card, CardBody, CardHeader, CardTitle, Col, Row} from "reactstrap"
import React from "react"
import UILoader from "../../../@core/components/ui-loader"
import {useDispatch} from "react-redux"
import {locationAdded} from "../../../redux/restaurantLocation/restaurantLocation"
import {Link} from "react-router-dom"

const NearByPlaces = ({places, isLoading}) => {

    const dispatch = useDispatch()

    return <UILoader blocking={isLoading}>
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
                                <Link to="/OmgPlate"> <Button className='text-uppercase mt-1' color='primary' outline
                                                              onClick={() => dispatch(locationAdded(place))}>
                                    Select
                                </Button>
                                </Link>
                            </div>
                        </CardBody>
                    ))}
                </Card>
            </Col>
        </Row>
    </UILoader>
}

export default NearByPlaces
