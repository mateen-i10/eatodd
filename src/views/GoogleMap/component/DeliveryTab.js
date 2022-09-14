import React from 'react'
import {Button, Input, InputGroup, InputGroupText} from "reactstrap"
import {Search} from "react-feather"
import {Autocomplete, useLoadScript} from "@react-google-maps/api"
import NearByPlaces from "./NearByPlaces"
import {userLocationAdded} from "../../../redux/userLocation/userLocation"
import {useDispatch} from "react-redux"
import {Link} from "react-router-dom"

const DeliveryTab = ({onPlaceChanged, userLocation, onLoad, places, isLoading}) => {
    const dispatch = useDispatch()
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: "AIzaSyD7O5Uv69qzHpX7OaZEfE5mla2FuJBXehQ",
        libraries: ['places']
    })
    if (!isLoaded) {
        return <div>Loading</div>
    }
    if (loadError) {
        return <div>Please enter valid name</div>
    }
    return (
        <div style={{}}>

            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <InputGroup className="bg-white input-group-merge">
                    <InputGroupText>
                        <Search className="cursor-pointer" size={20}/>
                    </InputGroupText>
                    <Input color='primary' type='text'/>
                </InputGroup>
            </Autocomplete>
            {/*</LoadScript>*/}
            {places && places.length > 0 ? <NearByPlaces places={places} isLoading={isLoading} userLocation={userLocation}/> : <div className=" align-items-center justify-content-center text-center">
                    <div className="col-12 mt-2">
                        <img className="disabled" src={require('../../../assets/images/logo/OMG_logo.png').default}
                             alt="EatOMG-image" width="100px"
                             height="50px"
                             style={{color: "gray"}}
                        />
                    </div>
                    <div className="col-12 mt-1">
                        <p>Find a EatOMG to order online for Delivery, see a menu, and get info.</p>
                    </div>
                    {userLocation !== null ? <Link to="/OmgPlate"><Button className='text-uppercase mt-1' color='primary' outline
                                                     onClick={() => dispatch(userLocationAdded(userLocation))
                                                     }>Proceed Your
                            Order</Button></Link> : <div>
                            <div className="text-uppercase text-start mb-1 mt-5"
                                 style={{color: "#81be41", fontWeight: "600", fontSize: "1.1rem"}}>
                                near by
                                <hr className="m-0 p-0 divider-dashed"/>
                            </div>
                            <div className="col-12 ">
                                <img className=""
                                     src={require('../../../assets/images/icons/delivery.png').default}
                                     alt="EatOMG-image" width="70px" height="70px"/>
                                <div className="col-12">
                                    <div>Tap the target to find the closest EatOMG.</div>
                                </div>
                            </div>
                        </div>}
                </div>
            }
        </div>
    )
}

export default DeliveryTab
