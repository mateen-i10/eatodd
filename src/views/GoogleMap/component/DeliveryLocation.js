import React from 'react'
import {Input, InputGroup, InputGroupText} from "reactstrap"
import {Search} from "react-feather"
import {BiCurrentLocation} from "react-icons/all"

const DeliveryLocation = () => {
    // const [autoComplete, setAutoComplete] = useState(null)
    //
    // const onLoad = (autoC) => setAutoComplete(autoC)
    //
    // const onPlaceChanged = () => {
    //     const lat = autoComplete.getPlace().geometry.location.lat()
    //     const lng = autoComplete.getPlace().geometry.location.lng()
    //     setCoordinates({lat, lng})
    // }
    return (
        <div style={{}}>
            <div className=" mt-1">
                <InputGroup className="bg-white input-group-merge">
                    <InputGroupText>
                        <Search size={20}/>
                    </InputGroupText>
                    <Input color='primary' type='text'/>
                    <InputGroupText><BiCurrentLocation size={20}/>
                    </InputGroupText>
                </InputGroup>
                <div className=" align-items-center justify-content-center text-center">
                    <div className="col-12 mt-2">
                        <img className="disabled" src={require('../../../assets/images/logo/OMG_logo.png').default}
                             alt="EatOMG-image" width="70px"
                             height="70px"
                             style={{color: "gray"}}
                        />
                    </div>
                    <div className="col-12 mt-1">
                        <p>Find a EatOMG to order online for Delivery, see a menu, and get info.</p>
                    </div>

                    <div className="text-uppercase text-start mb-1 mt-5"
                         style={{color: "#81be41", fontWeight: "600", fontSize: "1.1rem"}}>
                        near by
                        <hr className="m-0 p-0 divider-dashed"/>
                    </div>
                    <div className="col-12 ">
                        <img className=""
                             src={require('../../../assets/images/icons/delivery.png').default}
                             alt="EatOMG-image" width="70px" height="70px"/>
                        <div className="col-12">
                            <div>Tap the target to find the closest EatOMG.</div>
                        </div>
                    </div>
                </div>

            </div>

        </div>


    )
}

export default DeliveryLocation
