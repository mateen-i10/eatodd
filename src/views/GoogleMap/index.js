import React, {useEffect, useState} from 'react'
import Sidebar from "./Sidebar"
import GoogleMap from "./component/GMap"

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

    useEffect(() => {
        const handler = e => setMatches(e.matches)
        mediaMatch.addEventListener('change', handler)
        return () => mediaMatch.removeEventListener('change', handler)
    })
    const places = [
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


    return (
        <div style={styles.container(matches)}>
            <div className="col-md-4 col-12"><Sidebar/></div>
            <div className="col-md-8 col-12" style={styles.height(matches)}><GoogleMap places={places}/></div>
        </div>)
}

export default Gmaps
