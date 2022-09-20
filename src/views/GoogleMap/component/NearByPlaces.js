import {Button, Card, CardBody, CardHeader, CardTitle, Col, Row} from "reactstrap"
import React from "react"
import UILoader from "../../../@core/components/ui-loader"
import {useDispatch} from "react-redux"
import {locationAdded} from "../../../redux/restaurantLocation/restaurantLocation"
import {useHistory, useLocation} from "react-router-dom"
import {userLocationAdded} from "../../../redux/userLocation/userLocation"

const NearByPlaces = ({places, isLoading, userLocation}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {state} = useLocation()
    const {categoryId} = state

    return <UILoader blocking={isLoading}>
        <Row className="align-items-center, justify-content-center mt-3 pickup-list">
            <Col sm='12'>
                <Card>
                    <CardHeader>
                        <CardTitle tag='h5'
                                   style={{color: "rgb(129 190 65)"}}>Near By</CardTitle>
                    </CardHeader>
                    {places.length ? places.map((place, i) => (
                        <CardBody key={i}>
                            <div className='justify-content-center align-items-center'>
                                <div className='d-flex'>
                                    <div>
                                        <h6 className='transaction-title'
                                            color="primary">{place.name}</h6>
                                        <small>{place.address}</small>
                                    </div>
                                </div>
                                <div onClick={() => {
                                    history.push('/OmgPlate', categoryId ? { categoryId, restaurantId: place.id } : null)
                                }}>
                                    <Button className='text-uppercase mt-1' color='primary' outline onClick={() => {
                                                                  dispatch(locationAdded(place))
                                                                  if (userLocation !== null) dispatch(userLocationAdded(userLocation))
                                                              }}>
                                    Select
                                </Button>
                                </div>
                            </div>
                        </CardBody>
                    )) : ""}
                </Card>
            </Col>
        </Row>
    </UILoader>
}

export default NearByPlaces
