import React, {useState} from 'react'
// import GoogleMapReact from "google-map-react"
import {GoogleMap, InfoWindow, LoadScript, Marker} from '@react-google-maps/api'
import "./GMap.css"
// import {HiLocationMarker} from "react-icons/all"


const containerStyle = {
    width: '100%',
    height: '100%'
}


function GMap({places}) {
    const [activeMarker, setActiveMarker] = useState(null)
    // const [gIcon, setGIcon] = useState({})
    const handleActiveMarker = (marker) => {
        // console.log(marker)

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
        // <GoogleMapReact
        //     bootstrapURLKeys={{key: "AIzaSyD7O5Uv69qzHpX7OaZEfE5mla2FuJBXehQ"}}
        //     defaultCenter={places[0].position}
        //     center={places[0].position}
        //     defaultZoom={9}
        //     margin={[50, 50, 50, 50]}
        //     // options={{zoomControl: true}}
        //     onChange={(e) => {
        //         console.log(e)
        //         // setCoords({ lat: e.center.lat, lng: e.center.lng });
        //         // setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        //     }}
        //     // onChildClick={(child) => setChildClicked(child)}
        // >
        //     {places.length && places.map((place, i) => (
        //         <HiLocationMarker className="locationIcon" size={48} lat={Number(place.position.lat)}
        //                           lng={Number(place.position.lng)}
        //                           key={i}/>
        //
        //
        //     ))}

        // </GoogleMapReact>

        <LoadScript
            googleMapsApiKey="AIzaSyD7O5Uv69qzHpX7OaZEfE5mla2FuJBXehQ"
        >
            <GoogleMap
                onLoad={handleOnLoad}
                onClick={() => setActiveMarker(null)}
                // onResize={(e) => {
                //     console.log(e)
                // }}
                mapContainerStyle={containerStyle}
                center={places[0].position}
                zoom={14}
            >
                { /* Child components, such as markers, info windows, etc. */}
                {places.map(({id, name, position}) => (
                    <Marker
                        key={id}
                        position={position}
                        className="locationIcon"
                        // icon={gIcon}
                        // onMouseOver={(e) => {
                        //     // setGIcon({})
                        //     console.log(e)
                        // }}
                        onClick={() => {

                            handleActiveMarker(position)
                            // setChildClicked(id)
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

export default React.memo(GMap)

