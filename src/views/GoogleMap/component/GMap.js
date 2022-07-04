import React, {useState} from 'react'
import {GoogleMap, InfoWindow, LoadScript, Marker} from '@react-google-maps/api'

const containerStyle = {
    width: '100%',
    height: '100%'
}
const markers = [
    {
        id: 1,
        name: "Olive Mediterranean Grill(N Clinton St)",
        position: {lat: 41.884368455887184, lng: -87.64088918914914},
        address: "131 N Clinton St, Chicago, IL 60661"
    },
    {
        id: 2,
        name: "Olive Mediterranean Grill(North Ave)",
        position: {lat: 41.91054923356103, lng: -87.65339767380419},
        address: "1001 W North Ave, Chicago, IL 60642, USA"
    },
    {
        id: 3,
        name: "Olive Mediterranean Grill (Illinois St)",
        position: {lat: 41.89128095068051, lng: -87.63188029999294},
        address: "111 W Illinois St, Chicago, IL 60654, USA"
    },
    {
        id: 4,
        name: "Olive Mediterranean Grill(Van Buren)",
        position: {lat: 41.877148702396454, lng: -87.63329308729737},
        address: "186 W Van Buren St, Chicago, IL 60605"
    },
    {
        id: 5,
        name: "Olive Mediterranean Grill (Sherman Ave)",
        position: {lat: 42.04962135098707, lng: -87.68193880078313},
        address: "1726 Sherman Ave, Evanston, IL 60201, USA"
    }
]

// console.log("center", positions[0].lat)

// const onLoad = marker => {
//     console.log('marker: ', marker)
// }

function GMap() {
    const [activeMarker, setActiveMarker] = useState(null)
    const handleActiveMarker = (marker) => {
        console.log(marker)

        if (marker === activeMarker) {
            return
        }
        setActiveMarker(marker)
    }
    const handleOnLoad = (map) => {
        const bounds = new google.maps.LatLngBounds()

        markers.forEach(({position}) => bounds.extend(position))
        map.fitBounds(bounds)
    }

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyD7O5Uv69qzHpX7OaZEfE5mla2FuJBXehQ"
        >
            <GoogleMap
                onLoad={handleOnLoad}
                onClick={() => setActiveMarker(null)}
                mapContainerStyle={containerStyle}
                center={markers[0].position}
                zoom={14}
            >
                { /* Child components, such as markers, info windows, etc. */}
                {markers.map(({id, name, position}) => (
                    <Marker
                        key={id}
                        position={position}
                        onClick={() => handleActiveMarker(position)}
                        // onMouseOver={() => setIcon(largeIcon)}
                        // icon={icon}
                    >
                        {activeMarker === id ? (
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

export default React.memo(GMap)