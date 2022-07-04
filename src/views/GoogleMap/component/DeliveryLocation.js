import React from 'react'
import Select from "react-select"

const DeliveryLocation = () => {
    const colourOptions = [
        {value: 'ocean', label: 'Ocean'},
        {value: 'blue', label: 'Blue'},
        {value: 'purple', label: 'Purple'},
        {value: 'red', label: 'Red'},
        {value: 'orange', label: 'Orange'}
    ]
    return (
        <div style={{}}>
            <div className=" mt-1">
                <Select
                    className='react-select'
                    classNamePrefix='select'
                    name='clear'
                    options={colourOptions}
                    isClearable
                />
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

                    <div className="text-uppercase text-start mb-1"
                         style={{color: "#81be41", fontWeight: "600", fontSize: "1.1rem"}}>
                        near by
                        <hr className="m-0 p-0 divider-dashed"/>
                    </div>
                    <div className="col-12">
                        <img className=""
                             src={require('../../../assets/images/icons/delivery.png').default}
                             alt="EatOMG-image" width="70px" height="70px"/>
                        <div className="col-12">
                            <div>Tap the target to find the closest EatOMG.</div>
                        </div>
                    </div>
                    <div className="col-12">
                        <img className=""
                             src={require('../../../assets/images/icons/delivery.png').default}
                             alt="EatOMG-image" width="70px" height="70px"/>
                        <div className="col-12">
                            <div>Tap the target to find the closest EatOMG.</div>
                        </div>
                    </div>
                    <div className="col-12">
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
