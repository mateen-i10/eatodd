import {Button, Card, CardBody, CardHeader, CardTitle, Col, Row} from "reactstrap"
import React, {useState} from "react"
import UILoader from "../../../@core/components/ui-loader"
import {useDispatch} from "react-redux"
import {locationAdded} from "../../../redux/restaurantLocation/restaurantLocation"
import {useHistory, useLocation} from "react-router-dom"
import {userLocationAdded} from "../../../redux/userLocation/userLocation"
import DateTimePicker from "react-datetime-picker"
import 'react-datetime-picker/dist/DateTimePicker.css'
import 'react-calendar/dist/Calendar.css'
import 'react-clock/dist/Clock.css'
import moment from "moment/moment"

const NearByPlaces = ({places, isLoading, userLocation, returnURl}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {state} = useLocation()
    const {categoryId} = state

    const [pickUpDate, setPickUpDate] = useState(moment(new Date()).format())
    console.log('pickUpDate', pickUpDate)

    const [isDivVisible, setDivVisible] = useState(true)

    const toggleDivVisibility = () => {
        setDivVisible(!isDivVisible)
    }

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
                                {isDivVisible ?  <div className=''>
                                    <div>
                                        <h6 className='transaction-title' color="primary">{place.name}</h6>
                                        <small>{place.address}</small>
                                    </div>
                                </div> : <>
                                    <DateTimePicker className='mt-1' onChange={setPickUpDate} value={pickUpDate}/>
                                    <div onClick={() => {
                                        localStorage.setItem('restaurantId', place.id)
                                        localStorage.setItem('pickUpAt', pickUpDate)
                                        returnURl ? history.push(`/${returnURl}`) : history.push('/OmgPlate', categoryId ? {
                                            categoryId,
                                            restaurantId: place.id,
                                            pickUpAt: pickUpDate
                                        } : null)
                                    }}>
                                        <Button className='text-uppercase mt-1' color='primary' outline onClick={() => {
                                            dispatch(locationAdded(place))
                                            if (userLocation !== null) dispatch(userLocationAdded({...userLocation, restaurantId: place.id, pickUpAt: pickUpDate}))
                                        }}>
                                            Select
                                        </Button>

                                    </div>
                                </>}

                            </div>
                            {isDivVisible ? <Button className='text-uppercase mt-1' color='primary' onClick={toggleDivVisibility}>Select</Button> : ''}

                        </CardBody>
                    )) : ""}
                </Card>
            </Col>
        </Row>
    </UILoader>
}

export default NearByPlaces
