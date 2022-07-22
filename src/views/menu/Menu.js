import {Card, InputGroup, Input, Button, Tooltip} from 'reactstrap'
import {ArrowRight} from "react-feather"
import Header from "../../shared/header/Header"
import Footer from "../../shared/footer/Footer"
import logo from './components/assests/images/bbb.png'
import food from './components/assests/images/bbb-2.png'
import './components/stylesheet/Menu.css'
import Link from "react-router-dom/es/Link"
import React, {useState} from "react"

const Menu = () => {
    const [tooltipOpen, setTooltipOpen] = useState(false)

    return (
        <div>
            <Header/>
            <div className='bg-white'>
                <Card style={{backgroundColor:'#402914'}}>
                    <ul className="nav justify-content-center" style={{marginTop: 15}}>
                        <li className="nav-item">
                            <p className='text-white' style={{marginTop:3}}>VIEW LOCAL PRICING & AVAILABILITY</p>
                        </li>
                        <li className="nav-item" style={{marginLeft:20}}>
                            <InputGroup>
                                <Input style={{width:90, height: 25}} placeholder="ZIP" />
                                <Button.Ripple style={{width:25, height: 25}} className='btn-icon' onClick={() => console.log('the zip code')}>
                                    <ArrowRight style={{marginTop: -12, marginLeft: -6, color: '#402914'}} size={16} />
                                </Button.Ripple>
                            </InputGroup>
                        </li>
                    </ul>
                </Card>

                <section id="banner-3" className="bg-yellow banner-section division">
                    <div className="container-sm">
                        <div className="row d-flex align-items-center">

                            <div className="col-md-7 col-lg-6">
                                <div className="banner-3-img" style={{textAlign:'left', paddingLeft:135}}>
                                    <div>
                                        <h1 style={{color:'#81be41', verticalAlign: 'middle', fontWeight: 700, fontSize: 60, textAlign:'left', width: 300, letterSpacing: -1, lineHeight:.9, fontFamily: 'Helvetica, TradeGothic'}}>BURRITOS</h1>
                                        <h1 style={{color:'#81be41', verticalAlign: 'middle', fontWeight: 700, fontSize: 60, textAlign:'left', width: 350, letterSpacing: -2, lineHeight:.9, fontFamily: 'Helvetica, TradeGothic'}}>BY THE BOX</h1>
                                        <h6 style={{color:'#81be41', fontFamily: 'Helvetica,Arial,sans-serif'}}>Minimum 6 people</h6>
                                        <Link to = "/EventDetails">
                                            <button type="button" className="col-md-10 btn but" id='condition' style={{height:50, marginBottom: 30, marginTop: 30}}>
                                                START A BURRITO BOX
                                                <ArrowRight style={{ marginTop: -3, marginLeft: 6, color: 'white'}} size={16} />
                                            </button>
                                        </Link>
                                        <div style={{ color: '#786259', fontSize:10, fontFamily: 'Helvetica' }}>
                                            <p>Please place your order at least 24 hours in advance, so we can coordinate making it along with all of the food we prepare fresh every day.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-5 col-lg-6">
                                <div id='ControlledExample' style={{paddingLeft :100}}>
                                    <img src = {logo} width='350' height='270' />
                                </div>
                                <Tooltip
                                    placement='top'
                                    isOpen={tooltipOpen}
                                    target='condition'
                                    style={{backgroundColor:'white'}}
                                    toggle={() => setTooltipOpen(!tooltipOpen)}
                                >
                                    <div style={{color: '#736357', fontSize: 12}}>
                                        <p>*Pricing & availability vary by location.</p>
                                    </div>
                                </Tooltip>
                            </div>

                        </div>
                    </div>
                </section>

                <section id="banner-3" className="bg-yellow banner-section division" style={{backgroundColor: '#f2f2f1'}}>
                    <div className="container-sm">
                        <div className="row d-flex align-items-center">

                            <div className="col-md-7 col-lg-6" style={{border:'solid', borderLeft:0, borderTop:0, borderBottom:0, borderColor:'#81be41'}}>
                                <div id='ControlledExample' style={{textAlign:'center'}}>
                                    <h1 style={{color:'#81be41', fontSize:110, lineHeight:.92, fontFamily:'TradeGothicLTCom,TradeGothic,sans-serif', display:'block', letterSpacing:-5, fontWeight:700}}>BUILD</h1>
                                    <h1 style={{color:'#81be41', fontSize:110, lineHeight:.92, fontFamily:'TradeGothicLTCom,TradeGothic,sans-serif', display:'block', letterSpacing:-5, fontWeight:700}}>YOUR</h1>
                                    <h1 style={{color:'#81be41', fontSize:110, lineHeight:.92, fontFamily:'TradeGothicLTCom,TradeGothic,sans-serif', display:'block', letterSpacing:-5, fontWeight:700}}>OWN</h1>
                                    <h6 style={{color:'#81be41', fontFamily: 'Helvetica,Arial,sans-serif'}}>Minimum 10 people</h6>
                                </div>
                            </div>

                            <div className="col-md-5 col-lg-6">
                                <div className="banner-3-img" style={{textAlign:'center'}}>
                                    <img src = {food} width='400' height='250' style={{marginLeft:80}} />
                                    <button type="button" className="col-md-8 btn but" id='condition' style={{height:50, marginBottom: 30, marginTop: 30}}>
                                        START A BURRITO BOX
                                        <ArrowRight style={{ marginTop: -3, marginLeft: 6, color: 'white'}} size={16} />
                                    </button>
                                    <h6 style={{color:'#786259', fontSize:10}}>Please place your order at least 24 hours in advance, so we can<br /> coordinate making it along with all of the food we prepare fresh every day.</h6>
                                </div>
                                <Tooltip
                                    placement='top'
                                    isOpen={tooltipOpen}
                                    target='condition'
                                    style={{backgroundColor:'white'}}
                                    toggle={() => setTooltipOpen(!tooltipOpen)}
                                >
                                    <div style={{color: '#736357', fontSize: 12}}>
                                        <p>*Pricing & availability vary by location.</p>
                                    </div>
                                </Tooltip>
                            </div>

                        </div>
                    </div>
                </section>

                <div className="container-fluid">
                    <div className="row" style={{textAlign:'center', paddingTop: 120}}>
                        <div className="col-sm">
                            <h1 style={{color:'#57ab00', fontSize: 40, lineHeight:.92, fontFamily:'TradeGothicLTCom,TradeGothic,sans-serif', display:'block', letterSpacing:-5, fontWeight:700, width: '100%'}}>NEED TO FEED</h1>
                            <h6 style={{color:'#57ab00', fontSize: 40, lineHeight:.92, fontFamily:'TradeGothicLTCom,TradeGothic,sans-serif', display:'block', letterSpacing:-5, fontWeight:700, width: '100%'}}>A TEAM TODAY?</h6>
                            <h6 style={{color:'#736357', fontSize: 18, marginTop:35, marginBottom: 50, fontFamily: 'Helvetica,Arial,sans-serif'}}>Invite colleagues and clients to build<br /> a group order. Minimum 2 people.</h6>
                            <a style={{color:'#57ab00', fontSize:24, fontWeight:700}} href = "#">SWITCH TO GROUP ORDER</a>
                            <div style={{marginTop:60}}></div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Menu