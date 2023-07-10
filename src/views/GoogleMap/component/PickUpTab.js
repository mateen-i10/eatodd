import React from 'react'
import {Input, InputGroup, InputGroupText} from 'reactstrap'
import {Search} from 'react-feather'
import "./index.css"
import NearByPlaces from "./NearByPlaces"
import UILoader from "../../../@core/components/ui-loader"

const PickUpTab = ({places, userLocation, netStatus, returnURl}) => {
    console.log('places', places)
    return (
        <div className="mt-1">
            <InputGroup className="bg-white input-group-merge">
                <InputGroupText>
                    <Search className="cursor-pointer" size={20}/>
                </InputGroupText>
                <Input color='primary' type='text'/>
            </InputGroup>
            <UILoader blocking={netStatus !== 200}>
                {places.length === 0 ? <div className=" align-items-center justify-content-center text-center">
                    <div className="col-12 mt-2">
                        <img className="disabled" src={require('../../../assets/images/logo/OMG_logo.png').default}
                             alt="EatOMG-image" width="100px"
                             height="50px"
                             style={{color: "gray"}}
                        />
                    </div>
                    <div className="col-12 mt-1">
                        <p>No restaurant available.</p>
                    </div>
                </div> : <div className=" align-items-center justify-content-center text-center">
                    <div className="col-12 mt-2">
                        <img className="disabled" src={require('../../../assets/images/logo/OMG_logo.png').default}
                             alt="EatOMG-image" width="100px"
                             height="50px"
                             style={{color: "gray"}}
                        />
                    </div>
                    <div>
                        <NearByPlaces returnURl={returnURl} places={places} userLocation={userLocation}/>
                    </div>
                </div>}

            </UILoader>
        </div>


    )
}

export default PickUpTab
