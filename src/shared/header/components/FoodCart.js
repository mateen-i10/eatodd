import { useState } from 'react'
import {
    Button,
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Input,
    CardFooter,
    Modal,
    ModalBody,
    ModalFooter
} from 'reactstrap'
import {UserPlus, ChevronDown, ChevronUp} from "react-feather"
import './FoodCart.css'
import LoginModal from "./loginModal/LoginModal"

const OffCanvasPlacement = (props) => {
    const [canvasPlacement, setCanvasPlacement] = useState('end')
    const [canvasOpen, setCanvasOpen] = useState(true)
    const [basicNameFoodModal, setBasicNameFoodModal] = useState(false)
    const [openModel, SetModelOpen] = useState(false)
    const [taxDropDown, SetTaxDropdown] = useState(true)

    const toggleCanvasStart = () => {
        setCanvasPlacement('start')
        setCanvasOpen(!canvasOpen)
        props.openDrawer(!props.isOpenDrawer)
    }

    const RenderDuplicateModal = () => {
        return (
            <div className='basic-modal'>
                <Modal isOpen={basicNameFoodModal} toggle={() => setBasicNameFoodModal(!basicNameFoodModal)}>
                    <div toggle={() => setBasicNameFoodModal(!basicNameFoodModal)} className='name-meal-model' ><p style={{textAlign:'center', fontSize:'1.7em', textTransform: 'uppercase', fontWeight:'bolder', marginTop:50, color:'#451400'}}>give this meal a name</p></div>
                    <ModalBody>
                        <div className='col-8' style={{marginLeft:80}}>
                            <Input type='text' placeholder='Enter Meal Name' style={{color:'#451400', borderRadius:0, borderLeft:0, borderRight:0, borderTop:0}} />
                        </div>
                    </ModalBody>
                    <ModalFooter style={{justifyContent:'center', marginBottom:20, marginTop:30}}>
                        <Button color='primary' onClick={() => setBasicNameFoodModal(!basicNameFoodModal)}>
                            Cancel
                        </Button>
                        <Button color='primary' onClick={() => setBasicNameFoodModal(!basicNameFoodModal)}>
                            Save
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

    return (
        <div className='demo-inline-spacing'>
            <Offcanvas style={{width:430}} direction={canvasPlacement} isOpen={canvasOpen} toggle={toggleCanvasStart}>
                <OffcanvasHeader toggle={toggleCanvasStart} style={{marginTop: 30, justifyContent: 'center'}}>
                    <div style={{display:'flex'}}>
                        <UserPlus  style={{marginRight:10, color:'#e08d31', marginTop:2}} />
                        <a href="#"><h6 className='header-offCanvas' onClick={() => SetModelOpen(true)} >Make It a group Order.</h6></a>
                    </div>
                </OffcanvasHeader>

                {openModel === true && (
                    <div>
                        <LoginModal setModal={SetModelOpen} IsModelOpen={openModel}/>
                    </div>
                )}

                <hr/>
                <OffcanvasBody style={{paddingBottom:0}}>
                    <div className="row">
                        <div className='col-md-10'>
                            <Input type='text' placeholder='Meal Name' style={{borderRadius:0, borderTop:0, borderRight:0, borderColor:'#451400',  borderLeft:0, borderWidth:2, marginBottom:10, padding:0, fontSize:16, fontWeight:'bolder', color:'#451400'}} />
                        </div>
                        <div className='col-md-2' style={{marginLeft:-15}}>
                            <h6 style={{fontSize:20, marginLeft:-15, fontWeight:'bolder', color:'primary' }}>$13.05</h6>
                        </div>
                    </div>

                    <div>
                        <div className="row">
                            <div className="col-md-9" style={{fontSize:15, fontWeight:'bolder', color:'primary'}}>Pollo Asado Burrito</div>
                            <div className="col-md" style={{fontSize:15, fontWeight:'bolder', color:'primary'}}>$13.05</div>
                        </div>
                        <div>
                            <div className='col-md-12'>
                                <p style={{marginTop:10, color:'black'}}>Pollo Asado, Guacamole ($2.85), White Rice, and Black Beans</p>
                            </div>
                            <div>
                                <a href="#"><div className="row" style={{color:'primary', fontWeight:'bolder', textTransform: 'uppercase', textDecoration:'underline', fontSize:13, justifyContent:'left'}}>
                                    <div className="col">remove</div>
                                    <div className="col" style={{marginLeft:-190}}>edit</div>
                                    <div className="col" style={{marginLeft:-220}} onClick={() => setBasicNameFoodModal((!basicNameFoodModal))} >duplicate</div>
                                </div></a>
                            </div>
                        </div>

                        <div style={{marginTop:10}}>
                            <h5 style={{textAlign:'center', color:'#786259', fontWeight:'bolder', marginBottom:15}}>Complete your meal</h5>
                            <div className="row" style={{justifyContent: 'center'}}>
                                <div className="col-md-3" style={{padding:0}}>
                                    <div style={{backgroundColor:'black', width:100, height:100}} />
                                    <h6 style={{textAlign:'center', marginTop:10}}>Chips</h6>
                                    <p style={{textAlign:'center', marginTop:22}}>$1.95</p>
                                </div>
                                <div className="col-md-3" style={{padding:0, marginLeft: 35, marginRight:35}}>
                                    <div style={{backgroundColor:'black', width:100, height:100}} />
                                    <h6 style={{textAlign:'center', marginTop:10}}>Chips & Guac</h6>
                                    <p style={{textAlign:'center', marginTop:22}}>$4.80</p>
                                </div>
                                <div className="col-md-3" style={{padding:0}}>
                                    <div style={{backgroundColor:'black', width:100, height:100}} />
                                    <h6 style={{textAlign:'center', marginTop:10}}>Mexican Coco-Cola</h6>
                                    <p style={{textAlign:'center'}}>$3.65</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <Button
                        outline
                        color='secondary'
                        onClick={toggleCanvasStart}
                        style={{marginBottom:30, borderRadius:0}}
                        {...(canvasPlacement === 'start' || canvasPlacement === 'end' ? { block: true } : {})}
                    >
                        Add Another menu item
                    </Button>

                    <div style={{backgroundColor:'#e3e3e3', marginLeft:-20, marginRight:-20, padding:20}}>
                        <div className="row">
                            <div className="col-md-10" style={{fontWeight: 500, color:'primary'}}>Bag Total</div>
                            <div className="col-md-2" style={{fontWeight: 500, color:'primary'}}>$14.20</div>
                        </div>

                        <Button
                            outline
                            color='secondary'
                            onClick={() => SetModelOpen(true)}
                            style={{marginBottom:20, marginTop:30, borderRadius:0}}
                            {...(canvasPlacement === 'start' || canvasPlacement === 'end' ? { block: true } : {})}
                            >
                            sign in to use rewards
                        </Button>

                        <div className="row" style={{marginBottom:-10}}>
                            <div className="col-md-10" style={{fontWeight: 500}}>Enter a Promo Code</div>
                            <div className="col-md-2" style={{fontWeight: 500, color:'primary'}}>apply</div>
                        </div>

                        <hr style={{color:'#451400'}} />

                        <div className="row">
                            <div className="col-md-10" style={{fontWeight: 700, color:'primary'}}>Subtotal</div>
                            <div className="col-md-2" style={{fontWeight: 700, color:'primary'}}>14.20</div>
                        </div>

                        <div className="row">
                            <div className="col-md-10" style={{fontWeight: 500, color:'primary'}}>Delivery Fee</div>
                            <div className="col-md-2" style={{fontWeight: 500, color:'primary'}}>$1.00</div>
                        </div>

                        <a href="#">
                        <div className="row">
                            <div className="col-md-10" style={{fontWeight: 500, color:'primary'}} onClick={() => {
                                if (taxDropDown === true) {
                                    SetTaxDropdown(false)
                                } else {
                                    SetTaxDropdown(true)
                                }
                            }}>Tax & Fees {taxDropDown ? <ChevronDown size={18} /> : <ChevronUp size={18} />}</div>
                            {
                                taxDropDown && <div className="col-md-2" style={{fontWeight: 500, color:'primary'}}>$2.94</div>
                            }
                        </div>
                        </a>

                        {
                            taxDropDown === false ? <div style={{ textAlign:'left'}}>
                                <div className="row">
                                    <div className="col" style={{paddingLeft: 60, color:'primary'}}>Tax</div>
                                    <div className="col" style={{paddingLeft: 235, color:'primary'}}>$1.44</div>
                                </div>
                                <div className="row">
                                    <div className="col" style={{paddingLeft: 60, color:'primary'}}>Service Fee</div>
                                    <div className="col" style={{ maxWidth: 70, paddingLeft:16, color:'primary'}}>$1.34</div>
                                </div>
                            </div> : []
                        }

                        <hr style={{color:'primary'}} />

                        <div className="row">
                            <div className="col-md-9" style={{fontWeight: 'bolder', color:'primary', fontSize:20}}>Total</div>
                            <div className="col-md-2" style={{fontWeight: 'bolder', color:'primary', fontSize:20}}>$18.14</div>
                        </div>

                        <p style={{color:'primary', marginTop:20}}>Delivery includes higher menu prices and additional fees to help offset the costs of delivery.</p>

                    </div>

                </OffcanvasBody>
                <CardFooter style={{padding:0}}>
                    <Button
                        color='primary'
                        onClick={toggleCanvasStart}
                        style={{marginBottom:0, height:60, borderRadius:0, fontSize: '2em', textTransform:'uppercase'}}
                        {...(canvasPlacement === 'start' || canvasPlacement === 'end' ? { block: true } : {})}
                    >
                        Checkout
                    </Button>
                </CardFooter>
            </Offcanvas>
            {RenderDuplicateModal()}
        </div>
    )
}

export default OffCanvasPlacement