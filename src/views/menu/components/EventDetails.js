import React, {useState} from "react"
import {Button} from "reactstrap"

const EventDetails = () => {

    const [Selected, SetSelected] = useState(0)

    const HandlePickUp = () => {
        SetSelected(0)
    }

    const HandleDelivery = () => {
        SetSelected(1)
    }

    return (
        <div style={{backgroundColor: 'white', padding: 50}}>

            <div style={{textAlign:'center'}}>
                <h3 style={{fontSize: 24, color:'#54392d', fontWeight:400, fontStretch: 'normal', fontFamily:'TradeGothicLTStd-BdCn20'}}>EVENT DETAILS</h3>
                <h5 style={{fontSize: 16, color:'#54392d', fontWeight:400, fontStretch: 'normal', fontFamily:'TradeGothicLTStd-BdCn20', marginTop:20}}>We'll need some info before you can build your order.</h5>

                <div style={{marginTop: 50, marginBottom: 40, fontSize:20}}>
                    <div className="form-check form-check-inline" style={{marginRight: 140}}>
                        <label className="form-check-label" onClick={() => HandlePickUp()}>PickUp</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <label className="form-check-label" onClick={() => HandleDelivery()}>Delivery</label>
                    </div>
                </div>

            </div>


            { Selected === 0 ? (
                <div style={{ display:'grid', placeItems: 'center'}}>
                    <div className="mb-3 row">
                        <div className="col-sm-12">
                            <label className="col-sm-3 col-form-label">Pickuip Restruent</label>
                            <input type="text" className="form-control" size='15' placeholder="Search by City, State or Zip" />
                        </div>
                        <div className="col-sm-12">
                            <label className="col-sm-2 col-form-label">Pickup Date</label>
                            <input type="Text" className="form-control" size='15' placeholder="Select PickUp Date" disabled />
                        </div>
                        <div className="col-sm-12">
                            <label className="col-sm-2 col-form-label">Pickup time</label>
                            <input type="password" className="form-control" size='15' placeholder="Select PickUp Time" disabled />
                        </div>
                        <div className="col-sm-12">
                            <label className="col-sm-2 col-form-label">Event Type</label>
                            <input type="password" className="form-control" size='15' placeholder="Event Type (Optional)" disabled />
                        </div>
                    </div>
                    <Button>
                        Save and Build Your Order
                    </Button>
                </div>) : [] }

            { Selected === 1 ? (
                <div style={{ display:'grid', placeItems: 'center'}}>
                    <div className="mb-3 row">
                        <div className="col-sm-12">
                            <label className="col-sm-3 col-form-label">Delivery Address</label>
                            <input type="text" className="form-control" size='15' placeholder="Enter Delivery Address" />
                        </div>
                        <div className="col-sm-12">
                            <label className="col-sm-2 col-form-label">Delivery Date</label>
                            <input type="Text" className="form-control" size='15' placeholder="Select Delivery Date" disabled />
                        </div>
                        <div className="col-sm-12">
                            <label className="col-sm-2 col-form-label">Delivery time</label>
                            <input type="password" className="form-control" size='15' placeholder="Select Delivery Time" disabled />
                        </div>
                        <div className="col-sm-12">
                            <label className="col-sm-2 col-form-label">Event Type</label>
                            <input type="password" className="form-control" size='15' placeholder="Event Type (Optional)" disabled />
                        </div>
                    </div>
                    <Button>
                        Save and Build Your Order
                    </Button>
                </div>) : [] }

        </div>
    )
}

export default EventDetails