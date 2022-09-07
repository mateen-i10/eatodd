import React from 'react'
import {GoogleMap, LoadScript, Marker} from "@react-google-maps/api"


function DeliveryGMap({places, userLocation}) {
    const containerStyle = {
        width: '100%',
        height: '100%'
    }
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyD7O5Uv69qzHpX7OaZEfE5mla2FuJBXehQ"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={userLocation ? userLocation.position : places.length === 0 ? {
                    lat: 41.884176754378224,
                    lng: -87.64085700264113
                } : places[0].position}
                zoom={userLocation ? 12 : 9}
            >
                { /* Child components, such as markers, info windows, etc. */}
                {userLocation ? <Marker position={userLocation.position}/> : null}
            </GoogleMap>
        </LoadScript>


    )
}

export default React.memo(DeliveryGMap)

