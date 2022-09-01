import React, {useState} from 'react'
// import GoogleMapReact from "google-map-react"
import {GoogleMap, InfoWindow, LoadScript, Marker} from '@react-google-maps/api'
import "./index.css"
// import {HiLocationMarker} from "react-icons/all"


const containerStyle = {
    width: '100%',
    height: '100%'
}


function PickUpGMap({places, setSelectedSidebar, setMarkerClicked}) {
    const [activeMarker, setActiveMarker] = useState(null)

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return
        }
        setActiveMarker(marker)
    }
    const handleOnLoad = (map) => {
        const bounds = new google.maps.LatLngBounds()

        places.forEach(({position}) => bounds.extend(position))
        map.fitBounds(bounds)
    }

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyD7O5Uv69qzHpX7OaZEfE5mla2FuJBXehQ"
            libraries={["places"]}
        >
            <GoogleMap
                onLoad={handleOnLoad}
                onClick={() => setActiveMarker(null)}
                mapContainerStyle={containerStyle}
                defaultCenter={places[0].position}
                // zoom={8}
            >
                { /* Child components, such as markers, info windows, etc. */}
                {places.map(({id, name, position}) => (
                    <Marker
                        key={id}
                        position={position}
                        // className="locationIcon"
                        onClick={() => {
                            handleActiveMarker(position)
                            setSelectedSidebar(true)
                            setMarkerClicked(id)
                        }}
                    >
                        {activeMarker === position ? (
                            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                                <div>{name}</div>
                            </InfoWindow>
                        ) : null}
                    </Marker>
                ))}
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(PickUpGMap)

