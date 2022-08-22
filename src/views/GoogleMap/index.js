import React, {useEffect, useState} from 'react'
import Sidebar from "./Sidebar"
import PickUpGMap from "./component/PickUpGMap"
import DeliveryGMap from "./component/DeliveryGMap"
import DetailSidebar from "./component/DetailSidebar"

const styles = {
    container: isRowBased => ({
        display: 'flex',
        flexDirection: isRowBased ? 'row' : 'column-reverse',
        minWidth: isRowBased ? '100%' : 'null',
        justifyContent: 'space-around'
    }),
    height: isRowBased => ({
        height: isRowBased ? "100vh" : "30vh"
    })
}

const Gmaps = () => {

    const mediaMatch = window.matchMedia('(min-width: 768px)')
    const [matches, setMatches] = useState(mediaMatch.matches)
    const [pickDelivery, setPickDelivery] = useState(true)
    const [selectedSidebar, setSelectedSidebar] = useState(false)
    const [markerClicked, setMarkerClicked] = useState(null)
    const [userLocation, setUserLocation] = useState(null)
    const [autocomplete, setAutocomplete] = useState(null)


    // console.log(userLocation)


    useEffect(() => {
        const handler = e => setMatches(e.matches)
        mediaMatch.addEventListener('change', handler)
        return () => mediaMatch.removeEventListener('change', handler)
    })
    const onLoad = (autoC) => setAutocomplete(autoC)

    const onPlaceChanged = () => {
        const place = autocomplete.getPlace()
        if (!place) {
            window.alert("Please enter valid place")
        }
        console.log(place)
        const lat = place.geometry.location.lat()
        const lng = place.geometry.location.lng()
        console.log(autocomplete)
        setUserLocation({position: {lat, lng}})
    }

    const places = [
        {
            id: 1,
            name: "Olive Mediterranean Grill(N Clinton St)",
            position: {lat: 41.884176754378224, lng: -87.64085700264113},
            address: "131 N Clinton St, Chicago, IL 60661",
            opens: "Mon-Fri 10:30 AM - 4PM"
        },
        {
            id: 2,
            name: "Olive Mediterranean Grill(North Ave)",
            position: {lat: 41.91054923356103, lng: -87.65339767380419},
            address: "1001 W North Ave, Chicago, IL 60642, USA",
            opens: "Mon-Fri 10:30 AM - 4PM"
        },
        {
            id: 3,
            name: "Olive Mediterranean Grill (Illinois St)",
            position: {lat: 41.89067380035631, lng: -87.6317488707196},
            address: "111 W Illinois St, Chicago, IL 60654, USA",
            opens: "Mon-Fri 10:30 AM - 4PM"
        },
        {
            id: 4,
            name: "Olive Mediterranean Grill(Van Buren)",
            position: {lat: 41.87696893313858, lng: -87.63345543147736},
            address: "186 W Van Buren St, Chicago, IL 60605",
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


    return (
        <div style={styles.container(matches)}>
            {selectedSidebar ? <div className="col-md-4 col-12">
                <DetailSidebar
                    setSelectedSidebar={setSelectedSidebar}
                    places={places}
                    markerClicked={markerClicked}

                /></div> : <div className="col-md-4 col-12">
                <Sidebar
                    places={places}
                    setPickDelivery={setPickDelivery}
                    setUserLocation={setUserLocation}
                    onPlaceChanged={onPlaceChanged}
                    onLoad={onLoad}
                /></div>}
            {pickDelivery ? <div className="col-md-8 col-12" style={styles.height(matches)}>
                <PickUpGMap
                    places={places}
                    setSelectedSidebar={setSelectedSidebar}
                    setMarkerClicked={setMarkerClicked}
                /></div> : <div className="col-md-8 col-12" style={styles.height(matches)}>
                <DeliveryGMap places={places} userLocation={userLocation}/></div>}
        </div>)
}

export default Gmaps