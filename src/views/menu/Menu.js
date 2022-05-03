import {Card, InputGroup, Input, Button} from 'reactstrap'
import {ArrowRight} from "react-feather"
import logo from './components/assests/images/bbb.png'
import food from './components/assests/images/bbb-2.png'
import logo2 from './components/assests/images/bbb-3.gif'
import './components/stylesheet/Menu.css'
import Link from "react-router-dom/es/Link"

const Menu = () => {

    return (
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

            <div className="container-fluid" style={{backgroundColor:'white', marginTop: -30}}>
                <div className="row" style={{marginLeft: 50, marginRight: 100, paddingTop: 50, paddingBottom: 30}}>
                    <div className="col-sm">
                        <img src = {logo} width='350' height='270' align='right' />
                    </div>
                    <div className="col-sm">
                        <div>
                        <h1 style={{color:'#451400', verticalAlign: 'middle', fontWeight: 700, fontSize: 60, textAlign:'left', width: 300, letterSpacing: -1, lineHeight:.9, fontFamily: 'TradeGothic'}}>BURRITOS</h1>
                        <h1 style={{color:'#451400', verticalAlign: 'middle', fontWeight: 700, fontSize: 60, textAlign:'left', width: 350, letterSpacing: -2, lineHeight:.9, fontFamily: 'Helvetica, TradeGothic'}}>BY THE BOX</h1>
                        </div>
                        <div>
                        <h6 style={{ color:'#9d8d80', fontSize:16, fontFamily: 'Helvetica' }}>Minimum 6 people</h6>
                        <h6 style={{ color:'#836f67', fontSize:12, marginTop: 40, fontFamily: 'Helvetica' }}>/persons*</h6>
                        </div>
                        <Link to = "/EventDetails">
                            <button type="button" className="col-sm-10 btn but" style={{height:50}}>
                                START A BURRITO BOX
                                <ArrowRight style={{ marginTop: -3, marginLeft: 6, color: 'white'}} size={16} />
                            </button>
                        </Link>
                        <h6 style={{ color:'#736357', marginTop: 20, fontSize:12 }}>*Pricing & availability vary by location.</h6>
                    </div>
                    <div className="col-sm-3" style={{ color: '#786259', marginTop: 200, fontSize:10, align:'left', fontFamily: 'Helvetica', marginLeft: -70 }}>
                        <p>Please place your order at least 24 hours in advance, so we can coordinate making it along with all of the food we prepare fresh every day.</p>
                    </div>
                </div>
            </div>


            <div className="container-fluid" style={{backgroundColor: '#f2f2f1'}}>
                <div className="row" style={{paddingTop:30, paddingBottom: 30, marginLeft: 100, marginRight:100}}>
                    <div className="col-sm align-right">
                        <h1 style={{color:'#451400', fontSize:110, lineHeight:.92, fontFamily:'TradeGothicLTCom,TradeGothic,sans-serif', display:'block', letterSpacing:-5, fontWeight:700}}>BUILD</h1>
                        <h1 style={{color:'#451400', fontSize:110, lineHeight:.92, fontFamily:'TradeGothicLTCom,TradeGothic,sans-serif', display:'block', letterSpacing:-5, fontWeight:700}}>YOUR</h1>
                        <h1 style={{color:'#451400', fontSize:110, lineHeight:.92, fontFamily:'TradeGothicLTCom,TradeGothic,sans-serif', display:'block', letterSpacing:-5, fontWeight:700}}>OWN</h1>
                        <h6 style={{color:'#736357', fontFamily: 'Helvetica,Arial,sans-serif'}}>Minimum 10 people</h6>
                    </div>
                    <div className="col-sm-2" style={{ marginTop: 100, color: '#736357', fontSize: 12, marginLeft:-60 }}>
                        <p>*Pricing & availability vary by location.</p>
                    </div>
                    <div className="col-sm">
                        <img src = {food} width='380' height='200'  />
                        <button type="button" className="col-sm-11 btn but" style={{height:50, marginBottom: 30}}>
                            START A BURRITO BOX
                            <ArrowRight style={{ marginTop: -3, marginLeft: 6, color: 'white'}} size={16} />
                        </button>
                        <h6 style={{color:'#786259', marginTop: 20, fontSize:10}}>Please place your order at least 24 hours in advance, so we can coordinate making it along with all of the food we prepare fresh every day.</h6>
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={{backgroundColor: '#e8e8e5'}}>
                <div className="row" style={{paddingTop:30, paddingBottom: 30, marginLeft: 100, marginRight:100}}>
                    <div className="col-sm align-right">
                        <h1 style={{color:'#451400', fontSize: 60, lineHeight:.92, fontFamily:'TradeGothicLTCom,TradeGothic,sans-serif', display:'block', letterSpacing:-5, fontWeight:700, width: '100%'}}>CHIPS & DIPS</h1>
                        <h6 style={{color:'#786259', fontFamily: 'Helvetica,Arial,sans-serif'}}>Serves 10-15</h6>
                        <h6 style={{color:'#736357', fontFamily: 'Helvetica,Arial,sans-serif'}}>$*</h6>
                        <button type="button" className="col-sm-11 btn but" style={{height:50}}>
                            GET CHIPS AND DIPS
                            <ArrowRight style={{ marginTop: -3, marginLeft: 6, color: 'white'}} size={16} />
                        </button>
                        <p>*Pricing & availability vary by location.</p>
                    </div>
                    <div className="col-sm">
                        <img src = {logo2} width='300' height='230' align='center' />
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row" style={{textAlign:'center', paddingTop: 120}}>
                    <div className="col-sm">
                        <h1 style={{color:'#451400', fontSize: 40, lineHeight:.92, fontFamily:'TradeGothicLTCom,TradeGothic,sans-serif', display:'block', letterSpacing:-5, fontWeight:700, width: '100%'}}>NEED TO FEED</h1>
                        <h6 style={{color:'#451400', fontSize: 40, lineHeight:.92, fontFamily:'TradeGothicLTCom,TradeGothic,sans-serif', display:'block', letterSpacing:-5, fontWeight:700, width: '100%'}}>A TEAM TODAY?</h6>
                        <h6 style={{color:'#736357', fontSize: 18, marginTop:35, marginBottom: 50, fontFamily: 'Helvetica,Arial,sans-serif'}}>Invite colleagues and clients to build<br /> a group order. Minimum 2 people.</h6>
                        <a style={{color:'#c08b15', fontSize:24, fontWeight:700}} href = "#">SWITCH TO GROUP ORDER</a>
                        <div style={{marginTop:60}}></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Menu