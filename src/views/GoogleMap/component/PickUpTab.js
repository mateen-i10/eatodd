import React from 'react'
import {Input, InputGroup, InputGroupText} from 'reactstrap'
import {Search} from 'react-feather'
import "./index.css"
import NearByPlaces from "./NearByPlaces"

const PickUpTab = ({places, userLocation}) => {
    return (
        <div style={{}}>
            <div className="mt-1">
                <InputGroup className="bg-white input-group-merge">
                    <InputGroupText>
                        <Search className="cursor-pointer" size={20}/>
                    </InputGroupText>
                    <Input color='primary' type='text'/>
                    {/*<InputGroupText><BiCurrentLocation className="cursor-pointer" size={20} onClick={onClick}/>*/}
                    {/*</InputGroupText>*/}
                </InputGroup>

                <div className=" align-items-center justify-content-center text-center">
                    <div className="col-12 mt-2">
                        <img className="disabled" src={require('../../../assets/images/logo/OMG_logo.png').default}
                             alt="EatOMG-image" width="100px"
                             height="50px"
                             style={{color: "gray"}}
                        />
                    </div>
                    <div>
                        <NearByPlaces places={places} userLocation={userLocation}/>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default PickUpTab
