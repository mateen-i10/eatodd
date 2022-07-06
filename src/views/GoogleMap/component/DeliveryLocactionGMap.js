import React from 'react'
import {GoogleMap, LoadScript} from "@react-google-maps/api"


function DeliveryLocationGMap({places}) {
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
                center={places[0].position}
                zoom={5}
            >
                { /* Child components, such as markers, info windows, etc. */}
            </GoogleMap>
        </LoadScript>


    )
}

export default React.memo(DeliveryLocationGMap)

