import React from 'react'
import {Button, CardBody, CardText, CardTitle} from "reactstrap"

const PlaceDetail = ({place}) => {

    // console.log(selected)
    // if (selected) refProps?.current?.scrollIntoView({behavior: 'smooth', block: 'start'})

    // console.log(place.id)
    return (
        <CardBody>
            <CardTitle tag='h4'
                       style={{color: "rgb(129 190 65)"}}>{place.name}</CardTitle>
            <CardText>{place.address}</CardText>
            <Button className='text-uppercase' color='primary' outline>
                Select Restaurant
            </Button>
        </CardBody>
    )
}

export default PlaceDetail
