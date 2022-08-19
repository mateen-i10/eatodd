import React, {useState} from 'react'
import {Input, InputGroup, InputGroupText} from "reactstrap"
import {Search} from "react-feather"
import {BiCurrentLocation} from "react-icons/all"
import {Autocomplete, useLoadScript} from "@react-google-maps/api"

// const libraries = ['places']

const DeliveryTab = ({setUserLocation, onPlaceChanged, onLoad}) => {
    const [libraries] = useState(['places'])
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: "AIzaSyD7O5Uv69qzHpX7OaZEfE5mla2FuJBXehQ",
        libraries
    })
    if (!isLoaded) {
        return <div>Loading</div>
    }
    if (loadError) {
        return <div>Please enter valid name</div>
    }
    const onClick = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            // console.log("Latitude is :", position.coords.latitude)
            // console.log("Longitude is :", position.coords.longitude)
            setUserLocation({position: {lat: position.coords.latitude, lng: position.coords.longitude}})
        })
    }
    return (
        <div style={{}}>
            <div className=" mt-1">
                {/*<LoadScript*/}
                {/*    googleMapsApiKey="AIzaSyD7O5Uv69qzHpX7OaZEfE5mla2FuJBXehQ"*/}
                {/*    libraries={["places"]}*/}
                {/*>*/}
                <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                    <InputGroup className="bg-white input-group-merge">
                        <InputGroupText>
                            <Search className="cursor-pointer" size={20}/>
                        </InputGroupText>
                        <Input color='primary' type='text'/>
                        <InputGroupText><BiCurrentLocation className="cursor-pointer" size={20} onClick={onClick}/>
                        </InputGroupText>
                    </InputGroup>
                </Autocomplete>
                {/*</LoadScript>*/}
                <div className=" align-items-center justify-content-center text-center">
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
                </div>

            </div>

        </div>


    )
}

export default DeliveryTab
