import React, {useState} from 'react'
import Howler from 'react-howler'
import Switch from 'react-switch'

function PlaySound() {
    const [playing, setPlaying] = useState(true)
    return (
        <div>
            <Howler
                src={'https://remote.vu360solutions.org/static/mixkit-tech.mp3'}
                playing={playing}
                loop={true}
                volume={0.06}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
            />
            <div className="sticky-switch" style={{position:'sticky', top:'0', right:'0'}}>
            <Switch
                onChange={() => setPlaying(!playing)}
                checked={playing}
                onColor="#81be45"
                onHandleColor="#81be41"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                className="react-switch"
                id="material-switch"
            />
            </div>
        </div>
    )
}

export default PlaySound