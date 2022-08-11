import React from 'react'
import {Button, Input, Label, Modal, ModalBody, ModalFooter} from 'reactstrap'
import {X, MessageCircle} from 'react-feather'

const ModalBasic = (props) => {

    return (
        <div className='demo-inline-spacing'>
            <div className='basic-modal'>
                <Modal className='modal-xl' isOpen={props.IsModelOpen} toggle={() => props.setModal(!props.IsModelOpen)}>
                    <div style={{textAlign:'right', padding:10}}>
                        <X size={40} onClick={() => props.setModal(!props.IsModelOpen)} />
                    </div>

                    <ModalBody>
                        <div style={{textAlign:'center', marginTop:10}}>
                            <div style={{backgroundColor:'black', width:90, height:90, marginLeft:570}}>
                            </div>
                            <h5 style={{fontSize:35, marginTop:20, fontFamily:'fantasy', letterSpacing:2, wordSpacing:2, textTransform:'uppercase', color:'#451400'}}>SIGN IN TO CREATE A GROUP</h5>
                            <h5 style={{fontSize:35, textTransform:'uppercase', marginTop:-10, fontFamily:'fantasy', letterSpacing:2, color:'#451400'}}>ORDER</h5>
                        </div>

                        <div style={{paddingLeft:410, paddingRight:410, marginTop:50}}>
                            <Input style={{borderColor:'black', borderRadius:0, borderLeft:0, borderRight:0, borderTop:0, padding:0, fontSize:'1.1em'}} placeholder='Email' type='text' />
                            <Input style={{borderColor:'black', borderRadius:0, borderLeft:0, borderRight:0, borderTop:0, padding:0, fontSize:'1.1em', marginTop:35, placeholderTextColor:'#451400'}} placeholder='Password' type='password'/>

                            <div style={{display:'flex', marginTop:10}}>
                                <div style={{flex:1}}>
                                    <Input type='checkbox' defaultChecked id='basic-cb-checked' />
                                    <Label for='basic-cb-checked' className='form-check-label' style={{fontSize:12, marginLeft:10, marginTop:3, color:'#451400' }} >
                                        Remember me
                                    </Label>
                                </div>
                                <div>
                                    <p style={{fontSize:11, color:'#451400', textDecoration:'underline', fontWeight:'bolder'}}>Forgot Password?</p>
                                </div>
                            </div>

                            <div style={{textAlign:'center', padding:0}}>
                                <Button color='primary' className='col-md-12' style={{marginTop:20, borderRadius:0}}>Sign In</Button>
                            </div>

                            <hr style={{marginTop:40, color:'#451400'}}/>

                            <div style={{textAlign:'center'}}>
                                <h2 style={{fontSize:25, marginTop:20, fontFamily:'fantasy', letterSpacing:2, wordSpacing:2, textTransform:'uppercase', color:'#451400'}}>NOT A MEMBER?</h2>
                                <h3 style={{fontSize:18, marginTop:10, fontWeight:'bolder', textTransform:'uppercase', color:'#786259'}}>join rewards. get reewarded.</h3>
                            </div>

                            <div style={{textAlign:'center', padding:0}}>
                                <Button color='primary' outline className='col-md-12' style={{marginTop:20}}>Create an account</Button>
                            </div>

                            <div style={{textAlign:'center', marginTop:50}}>
                                <p style={{color:'#451400'}}><MessageCircle/>Need Help? <b>Chat with Pepper</b></p>
                            </div>

                            <div style={{display:'flex', justifyContent: 'center', marginTop:40}}>
                                <div style={{backgroundColor:'black', width:30, height:30, borderRadius:15}} />
                                <div>
                                    <h5 style={{marginLeft:15, marginTop:5, color:'#451400'}}>United States</h5>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        </div>
    )
}
export default ModalBasic