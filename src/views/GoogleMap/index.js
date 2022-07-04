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


    return (
        <div style={styles.container(matches)}>
            <div className="col-md-4 col-12"><Sidebar/></div>
            <div className="col-md-8 col-12" style={styles.height(matches)}><GoogleMap/></div>
        </div>)
}

export default Gmaps
