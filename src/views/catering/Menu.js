import {Button, Card, Input, InputGroup, Tooltip} from 'reactstrap'
import {ArrowRight} from "react-feather"
import Header from "../../shared/header/Header"
import Footer from "../../shared/footer/Footer"
import './components/stylesheet/Menu.css'
import React from "react"
import {Link} from "react-router-dom"

const Menu = () => {
    return (
        <div>
            <Header/>
            <div className='bg-white'>
                <div className="container-fluid">
                    <div className="row" style={{textAlign: 'center', paddingTop: 120}}>
                        <div className="col-sm">
                            <h1 style={{
                                color: '#57ab00',
                                fontSize: 40,
                                lineHeight: .92,
                                fontFamily: 'TradeGothicLTCom,TradeGothic,sans-serif',
                                display: 'block',
                                letterSpacing: -5,
                                fontWeight: 700,
                                width: '100%'
                            }}>NEED TO FEED</h1>
                            <h6 style={{
                                color: '#57ab00',
                                fontSize: 40,
                                lineHeight: .92,
                                fontFamily: 'TradeGothicLTCom,TradeGothic,sans-serif',
                                display: 'block',
                                letterSpacing: -5,
                                fontWeight: 700,
                                width: '100%'
                            }}>A TEAM TODAY?</h6>
                            <h6 style={{
                                color: '#736357',
                                fontSize: 18,
                                marginTop: 35,
                                marginBottom: 50,
                                fontFamily: 'Helvetica,Arial,sans-serif'
                            }}>Invite colleagues and clients to build<br/> a group order. Minimum 2 people.</h6>
                            <div style={{marginTop: 60}}></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Menu