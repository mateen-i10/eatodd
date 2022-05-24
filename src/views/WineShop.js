import React from 'react'
import wineImage from '../assets/images/foodItems/wineBack.jpg'
import wine from '../assets/images/my-images/wine1.jpg'

import {Button} from "reactstrap"

const WineShop = () => {

    return (
        <div style={{backgroundColor:'white'}}>
            <div className="container">
                <img src={wineImage} width={1180} height={400}/>

                <Button style={{position:'absolute', top:320, marginLeft:460, fontSize:40 }}>JOIN NOW</Button>
            </div>

            <div className='container-fluid' style={{backgroundColor:'black', marginTop:70}}>
                <div className="container" style={{backgroundColor:'white'}}>
                    <h2 style={{fontWeight:'bolder', color:'black', fontSize:40, paddingBottom: 30, marginLeft:17}}>Sparkling</h2>

                    <div className="row" style={{padding:20, paddingBottom: 90}}>
                        <div className="col-md-3">
                            <img src={wine} className="card-img-top" style={{width:280, height:380, borderRadius:0}} />
                                <div style={{width:280, marginTop:15}}>
                                    <h5 className="card-title">Mumm</h5>
                                    <h4 style={{textAlign:'right'}}>$14.00</h4>
                                </div>
                        </div>
                        <div className="col-md-3">
                            <img src={wine} className="card-img-top" style={{width:280, height:380, borderRadius:0}} />
                                <div style={{width:280, marginTop:15}}>
                                    <h5 className="card-title">ruffino processco</h5>
                                    <h4 style={{textAlign:'right'}}>$12.00</h4>
                                </div>
                        </div>
                        <div className="col-md-3">
                            <img src={wine} className="card-img-top" style={{width:280, height:380, borderRadius:0}} />
                                <div style={{width:280, marginTop:15}}>
                                    <h5 className="card-title">Veuve clicquot</h5>
                                    <h4 style={{textAlign:'right'}}>$47.00</h4>
                                </div>
                        </div>
                    </div>

                </div>

                <div className="container" style={{backgroundColor:'white'}}>
                    <h2 style={{fontWeight:'bolder', color:'black', fontSize:40, paddingBottom: 30, marginLeft:17}}>Sparkling</h2>

                    <div className="row" style={{padding:20, paddingBottom: 90}}>
                        <div className="col-md-3">
                            <img src={wine} className="card-img-top" style={{width:280, height:380, borderRadius:0}} />
                            <div style={{width:280, marginTop:15}}>
                                <h5 className="card-title">Mumm</h5>
                                <h4 style={{textAlign:'right'}}>$14.00</h4>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <img src={wine} className="card-img-top" style={{width:280, height:380, borderRadius:0}} />
                            <div style={{width:280, marginTop:15}}>
                                <h5 className="card-title">ruffino processco</h5>
                                <h4 style={{textAlign:'right'}}>$12.00</h4>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <img src={wine} className="card-img-top" style={{width:280, height:380, borderRadius:0}} />
                            <div style={{width:280, marginTop:15}}>
                                <h5 className="card-title">Veuve clicquot</h5>
                                <h4 style={{textAlign:'right'}}>$47.00</h4>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="container" style={{backgroundColor:'white'}}>
                    <h2 style={{fontWeight:'bolder', color:'black', fontSize:40, paddingBottom: 30, marginLeft:17}}>Sparkling</h2>

                    <div className="row" style={{padding:20, paddingBottom: 90}}>
                        <div className="col-md-3">
                            <img src={wine} className="card-img-top" style={{width:280, height:380, borderRadius:0}} />
                            <div style={{width:280, marginTop:15}}>
                                <h5 className="card-title">Mumm</h5>
                                <h4 style={{textAlign:'right'}}>$14.00</h4>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <img src={wine} className="card-img-top" style={{width:280, height:380, borderRadius:0}} />
                            <div style={{width:280, marginTop:15}}>
                                <h5 className="card-title">ruffino processco</h5>
                                <h4 style={{textAlign:'right'}}>$12.00</h4>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <img src={wine} className="card-img-top" style={{width:280, height:380, borderRadius:0}} />
                            <div style={{width:280, marginTop:15}}>
                                <h5 className="card-title">Veuve clicquot</h5>
                                <h4 style={{textAlign:'right'}}>$47.00</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container-fluid" style={{backgroundColor:'white'}}>
                <div className="container" style={{backgroundColor:'black', textAlign:'center'}}>
                    <p style={{paddingTop:80, paddingBottom:80}}>
                        Copyright OMG Wine Club © 2022. All rights reserved.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default WineShop