import React, {useEffect, useLayoutEffect, useState} from 'react'
import Sidebar from "./Sidebar"
import PickUpGMap from "./component/PickUpGMap"
import DeliveryGMap from "./component/DeliveryGMap"
import DetailSidebar from "./component/DetailSidebar"
import {toast} from "react-toastify"
import httpService, {baseURL} from "../../utility/http"
import {useLocation} from "react-router-dom"

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
    const {state} = useLocation()
    const isCatering = state && state.isCatering
    console.log('state', state)

    // local states
    const [matches, setMatches] = useState(mediaMatch.matches)
    const [pickDelivery, setPickDelivery] = useState(true)
    const [selectedSidebar, setSelectedSidebar] = useState(false)
    const [markerClicked, setMarkerClicked] = useState(null)
    const [userLocation, setUserLocation] = useState(null)
    const [autocomplete, setAutocomplete] = useState(null)
    const [nearestPlaces, setNearestPlaces] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [places, setPlaces] = useState([])
    const [netStatus, setNetStatus] = useState(0)

    useEffect(() => {
        const handler = e => setMatches(e.matches)
        mediaMatch.addEventListener('change', handler)
        return () => mediaMatch.removeEventListener('change', handler)
    })
    const onLoad = (autoC) => setAutocomplete(autoC)

    const [resList, setResList] = useState(null)
    useLayoutEffect(() => {
        const url = isCatering ? 'restaurant/cateringRestaurants' : 'restaurant'
        httpService._get(`${baseURL}${url}?pageIndex=1&&pageSize=12`)
            .then(response => {
                // success case
                if (response.status === 200 && response.data.statusCode === 200) {
                    setResList(response)
                    setNetStatus(response.status)
                    if (response.data.data.length > 0) {
                        setPlaces(
                            response.data.data.map(place => ({
                                id: place.id,
                                name: place.name,
                                address: place.address?.address1,
                                position: {lat: Number(place.address?.latitude), lng: Number(place.address?.longitude)},
                                status: response.data.statusCode
                            }))
                        )
                    }
                }
            })

    }, [])

    console.log("restaurant List", resList)

    const onPlaceChanged = async () => {
        setLoading(true)
        const place = autocomplete.getPlace()
        // setUserLocation(place)
        if (!place) {
            window.alert("Please enter valid place")
            setNearestPlaces([])
            setLoading(false)
            return
        }

        const lat = place.geometry?.location?.lat()
        const lng = place.geometry?.location?.lng()
        if (places && places.length > 0 && place.geometry && place.geometry.location) {
            const origin = new google.maps.LatLng(lat, lng)
            let nearest = {}
            let distance = 0
            const directionsService = new google.maps.DirectionsService()
            try {
                for (const p of places) {
                    if (p.address && p.address !== '') {
                        const res = await directionsService.route({
                            origin,
                            destination: p.address,
                            travelMode: google.maps.TravelMode.DRIVING
                        })
                        if ((distance === 0) || (distance > res.routes[0].legs[0].distance.text)) {
                            distance = res.routes[0].legs[0].distance.text
                            nearest = p
                        }
                    }
                }
                setNearestPlaces([{...nearest}])
                setLoading(false)
            } catch (e) {
                setNearestPlaces([])
                setLoading(false)
                toast.error(e)
            }
        }
        setUserLocation(place)
    }
    return (
        <div style={styles.container(matches)}>
            {selectedSidebar ? <div className="col-md-4 col-12">
                <DetailSidebar
                    setSelectedSidebar={setSelectedSidebar}
                    places={places}
                    markerClicked={markerClicked}
                /></div> : <div className="col-md-4 col-12">
                <Sidebar
                    isLoading={isLoading}
                    isCatering={isCatering}
                    returnURl={state?.returnURL}
                    places={places}
                    nearPlaces={nearestPlaces}
                    setPickDelivery={setPickDelivery}
                    setUserLocation={setUserLocation}
                    onPlaceChanged={onPlaceChanged}
                    onLoad={onLoad}
                    userLocation={userLocation}
                    netStatus={netStatus}
                /></div>}
            {pickDelivery ? <div className="col-md-8 col-12" style={styles.height(matches)}>
                <PickUpGMap
                    places={places}
                    setSelectedSidebar={setSelectedSidebar}
                    setMarkerClicked={setMarkerClicked}
                /></div> : <div className="col-md-8 col-12" style={styles.height(matches)}>
                <DeliveryGMap
                    places={places}
                    userLocation={userLocation}
                /></div>}
        </div>)
}

export default Gmaps
