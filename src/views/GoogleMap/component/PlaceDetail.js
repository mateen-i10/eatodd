import React from 'react'
import {Button, CardBody, CardText, CardTitle} from "reactstrap"

const PlaceDetail = ({place}) => {

    // const renderTransactions = () => {
    //     return (
    //         <div key={place.id} className='transaction-item'>
    //             <div className='d-flex'>
    //                 <Avatar className='rounded' icon={<item.Icon size={18}/>}/>
    //                 <div>
    //                     <h6 className='transaction-title'>{place.name}</h6>
    //                     <small>{place.address}</small>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

    return (
        <CardBody>
            <CardTitle tag='h5' style={{color: "rgb(129 190 65)"}}>{place.name}</CardTitle>
            <CardText>{place.address}</CardText>
            <Button className='text-uppercase' color='primary' outline>
                Select
            </Button>
        </CardBody>
    )
}

export default PlaceDetail
