import React, {useState} from 'react'
import chickenKebab from '../../../assets/images/foodItems/kebab.jpg'
import lamb from '../../../assets/images/foodItems/lamb.jpg'
import shawarma from '../../../assets/images/foodItems/shawarma.jpg'
import falafel from '../../../assets/images/foodItems/falafel.jpg'
import fish from '../../../assets/images/foodItems/fish.jpg'
import meatBalls from '../../../assets/images/foodItems/meatBalls.jpg'
import okra from '../../../assets/images/foodItems/okra.png'
import steak from '../../../assets/images/foodItems/steak.jpg'
import Header from "../../../shared/header/Header"

const OmgTacos = () => {

    const [option, SetOption] = useState(0)

    const handleSelect = () => {
        if (option === 0) {
            SetOption(1)
        } else {
            SetOption(0)
        }
    }

    return (
        <div>
            <Header/>
        <div className="container">
            <div className="row">
                <div>
                    <div style={{align:'left', padding:40}}>
                        <h1 style={{color:'#451400'}}>Protein or Vegie</h1>
                        <h6 style={{color:'#451400'}}>Choose up to two</h6>
                    </div>
                    <div style={{paddingLeft:40, paddingRight:40}}>
                        <div className="row gx-5">
                            <div className="col" onClick={handleSelect}>
                                <div style={option === 0 ? { display:'flex', flexDirection: 'row', width: '100%', border:'solid', borderWidth: 1, borderColor:'grey'} : { display:'flex', flexDirection: 'row', width: '100%', border:'solid', borderWidth: 2, borderColor:'#9c6127'}}>
                                    <img src={chickenKebab} width='200' height='110'/>
                                    <div className='col' style={{backgroundColor:'white', paddingTop:30, textAlign:'center'}}>
                                        <h4 style={{color:'#451400'}}>CHICKEN KEBAB</h4>
                                        <div style={{display:'flex', flexDirection: 'row', justifyContent:'center'}}>
                                            <h6>$11.99</h6>
                                            <h6 style={{paddingLeft:80}}>Cals</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col" onClick={handleSelect}>
                                <div style={option === 1 ? { display:'flex', flexDirection: 'row', width: '100%', border:'solid', borderWidth: 1, borderColor:'grey'} : { display:'flex', flexDirection: 'row', width: '100%', border:'solid', borderWidth: 2, borderColor:'#9c6127'}}>
                                    <img src={lamb} width='200' height='110' />
                                    <div className='col' style={{backgroundColor:'white', paddingTop:30, textAlign:'center'}}>
                                        <h4 style={{color:'#451400'}}>LAMB</h4>
                                        <div style={{display:'flex', flexDirection: 'row', justifyContent:'center'}}>
                                            <h6>$14.99</h6>
                                            <h6 style={{paddingLeft:80}}>Cals</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{paddingLeft:40, paddingRight:40, marginTop:20}}>
                        <div className="row gx-5">
                            <div className="col" onClick={handleSelect}>
                                <div style={{ display:'flex', flexDirection: 'row', width: '100%', border:'solid', borderWidth: 1, borderColor:'grey'}}>
                                    <img src={shawarma} width='200' height='110' />
                                    <div className='col' style={{backgroundColor:'white', paddingTop:30, textAlign:'center'}}>
                                        <h4 style={{color:'#451400'}}>CHICKEN SHAWARMAH</h4>
                                        <div style={{display:'flex', flexDirection: 'row', justifyContent:'center'}}>
                                            <h6>$11.99</h6>
                                            <h6 style={{paddingLeft:80}}>Cals</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col" onClick={handleSelect}>
                                <div style={{ display:'flex', flexDirection: 'row', width: '100%', border:'solid', borderWidth: 1, borderColor:'grey'}}>
                                    <img src={okra} width='200' height='110' />
                                    <div className='col' style={{backgroundColor:'white', paddingTop:30, textAlign:'center'}}>
                                        <h4 style={{color:'#451400'}}>OKRA STEW</h4>
                                        <div style={{display:'flex', flexDirection: 'row', justifyContent:'center'}}>
                                            <h6>$11.99</h6>
                                            <h6 style={{paddingLeft:80}}>Cals</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{paddingLeft:40, paddingRight:40, marginTop:20}}>
                        <div className="row gx-5">
                            <div className="col" onClick={handleSelect}>
                                <div style={{ display:'flex', flexDirection: 'row', width: '100%', border:'solid', borderWidth: 1, borderColor:'grey'}}>
                                    <img src={falafel} width='200' height='110' />
                                    <div className='col' style={{backgroundColor:'white', paddingTop:30, textAlign:'center'}}>
                                        <h4 style={{color:'#451400'}}>FALAFEL</h4>
                                        <div style={{display:'flex', flexDirection: 'row', justifyContent:'center'}}>
                                            <h6>$10.99</h6>
                                            <h6 style={{paddingLeft:80}}>Cals</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col" onClick={handleSelect}>
                                <div style={{ display:'flex', flexDirection: 'row', width: '100%', border:'solid', borderWidth: 1, borderColor:'grey'}}>
                                    <img src={meatBalls} width='200' height='110' />
                                    <div className='col' style={{backgroundColor:'white', paddingTop:30, textAlign:'center'}}>
                                        <h4 style={{color:'#451400'}}>MEATBALLS</h4>
                                        <p style={{fontSize:10, marginTop:-10}}>Includes Guacamole</p>
                                        <div style={{display:'flex', flexDirection: 'row', justifyContent:'center', marginTop:-10}}>
                                            <h6>$12.99</h6>
                                            <h6 style={{paddingLeft:80}}>Cals</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{paddingLeft:40, paddingRight:40, marginTop:20}}>
                        <div className="row gx-5">
                            <div className="col">
                                <div style={{ display:'flex', flexDirection: 'row', width: '100%', border:'solid', borderWidth: 1, borderColor:'grey'}}>
                                    <img src={fish} width='200' height='110' />
                                    <div className='col' style={{backgroundColor:'white', paddingTop:30, textAlign:'center'}}>
                                        <h4 style={{color:'#451400'}}>FISH</h4>
                                        <p style={{fontSize:10, marginTop:-10}}>Includes Guacamole</p>
                                        <div style={{display:'flex', flexDirection: 'row', justifyContent:'center', marginTop:-10}}>
                                            <h6>14.99</h6>
                                            <h6 style={{paddingLeft:80}}>Cals</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div style={{ display:'flex', flexDirection: 'row', width: '100%', border:'solid', borderWidth: 1, borderColor:'grey'}}>
                                    <img src={steak} width='200' height='110' />
                                    <div className='col' style={{backgroundColor:'white', paddingTop:30, textAlign:'center'}}>
                                        <h4 style={{color:'#451400'}}>STEAK</h4>
                                        <p style={{fontSize:10, marginTop:-10}}>Includes Guacamole</p>
                                        <div style={{display:'flex', flexDirection: 'row', justifyContent:'center', marginTop:-10}}>
                                            <h6>12.99</h6>
                                            <h6 style={{paddingLeft:80}}>Cals</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="container-fluid">
                <div style={{display:'flex', flexDirection:'row', backgroundColor:'#d4cfcb', padding:20, marginTop: 30 }}>
                    <div style={{marginLeft:30}}>
                        <h1 style={{color:'#451400'}}>Your Meal</h1>
                        <h6 style={{color:'#451400'}}>Select a protien or a vegie to get started</h6>
                    </div>
                    <div>
                        <button type="button" style={{width:'20%', marginRight:-80, height:50, marginLeft:800, backgroundColor:'#451400', color:'white'}}>
                            ADD TO BAG
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OmgTacos