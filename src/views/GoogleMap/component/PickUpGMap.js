import React, {useState} from 'react'
// import GoogleMapReact from "google-map-react"
import {GoogleMap, InfoWindow, LoadScript, Marker} from '@react-google-maps/api'
import "./index.css"
import {useSelector} from "react-redux"
// import {HiLocationMarker} from "react-icons/all"


const containerStyle = {
    width: '100%',
    height: '100%'
}


function PickUpGMap({places, setSelectedSidebar, setMarkerClicked}) {
    const [activeMarker, setActiveMarker] = useState(null)

    const {restaurantLocation} = useSelector(state => state)
    console.log("restaurantLocation", restaurantLocation)

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return
        }
        setActiveMarker(marker)
    }
    const defaultPlaces = [
        {
            id: 1,
            name: "Olive Mediterranean Grill(N Clinton St)",
            position: {lat: 41.884176754378224, lng: -87.64085700264113},
            address: "131 N Clinton St, Chicago, IL 60661",
            opens: "Mon-Fri 10:30 AM - 4PM"
        },
        {
            id: 5,
            name: "Olive Mediterranean Grill (Sherman Ave)",
            position: {lat: 42.04962135098707, lng: -87.68193880078313},
            address: "1726 Sherman Ave, Evanston, IL 60201, USA",
            opens: "Mon-Fri 10:30 AM - 4PM"
        }

    ]
    const handleOnLoad = (map) => {
        const bounds = new google.maps.LatLngBounds()

        if (places.length) {
            places.forEach(({position}) => bounds.extend(position))
        } else {
            defaultPlaces.forEach(({position}) => bounds.extend(position))
        }

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
                defaultCenter={places.length ? places[0].position : {
                    lat: 41.884176754378224,
                    lng: -87.64085700264113
                }}
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
