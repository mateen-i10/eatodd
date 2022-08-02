import React, {useState} from 'react'
import {List, X} from "react-feather"
import {Modal, ModalBody, ModalFooter} from "reactstrap"

const NutrtionPrefModel = () => {

    const [basicModal, setBasicModal] = useState(false)
    const [plantBased, SetplantBased] = useState(0)
    const [lifeStyle, SetLifeStyle] = useState(0)
    const [avoiding, SetAvoiding] = useState(0)

    const handlePlantBased1 = () => {
        console.log("the vegan button is being clicked on")

        if (plantBased === 0) {
            SetplantBased(1)
        } else if (plantBased === 1) {
            SetplantBased(0)
        } else if (plantBased === 2) {
            SetplantBased(1)
        }
    }

    const handlePlantBased2 = () => {
        if (plantBased === 0) {
            SetplantBased(2)
        } else if (plantBased === 2) {
            SetplantBased(0)
        } else if (plantBased === 1) {
            SetplantBased(2)
        }
    }

    const handleLifeStyle1 = () => {
        if (lifeStyle === 0) {
            SetLifeStyle(1)
        } else if (lifeStyle === 1) {
            SetLifeStyle(0)
        } else if (lifeStyle === 2) {
            SetLifeStyle(1)
        } else if (lifeStyle === 3) {
            SetLifeStyle(1)
        }
    }

    const handleLifeStyle2 = () => {
        if (lifeStyle === 0) {
            SetLifeStyle(2)
        } else if (lifeStyle === 1) {
            SetLifeStyle(2)
        } else if (lifeStyle === 2) {
            SetLifeStyle(0)
        } else if (lifeStyle === 3) {
            SetLifeStyle(2)
        }
    }

    const handleLifeStyle3 = () => {
        if (lifeStyle === 0) {
            SetLifeStyle(3)
        } else if (lifeStyle === 1) {
            SetLifeStyle(3)
        } else if (lifeStyle === 2) {
            SetLifeStyle(3)
        } else if (lifeStyle === 3) {
            SetLifeStyle(0)
        }
    }

    const handleAvoiding1 = () => {
        if (avoiding === 0) {
            SetAvoiding(1)
        } else if (avoiding === 1) {
            SetAvoiding(0)
        } else if (avoiding === 2) {
            SetAvoiding(1)
        } else if (avoiding === 3) {
            SetAvoiding(1)
        } else if (avoiding === 4) {
            SetAvoiding(1)
        }
    }

    const handleAvoiding2 = () => {
        if (avoiding === 0) {
            SetAvoiding(2)
        } else if (avoiding === 1) {
            SetAvoiding(2)
        } else if (avoiding === 2) {
            SetAvoiding(0)
        } else if (avoiding === 3) {
            SetAvoiding(2)
        } else if (avoiding === 4) {
            SetAvoiding(2)
        }
    }

    const handleAvoiding3 = () => {
        if (avoiding === 0) {
            SetAvoiding(3)
        } else if (avoiding === 1) {
            SetAvoiding(3)
        } else if (avoiding === 2) {
            SetAvoiding(3)
        } else if (avoiding === 3) {
            SetAvoiding(0)
        } else if (avoiding === 4) {
            SetAvoiding(3)
        }
    }

    const handleAvoiding4 = () => {
        if (avoiding === 0) {
            SetAvoiding(4)
        } else if (avoiding === 1) {
            SetAvoiding(4)
        } else if (avoiding === 2) {
            SetAvoiding(4)
        } else if (avoiding === 3) {
            SetAvoiding(4)
        } else if (avoiding === 4) {
            SetAvoiding(0)
        }
    }

    const RenderModal = () => {
        return (
            <div className='basic-modal'>
                <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)}>
                    <div className='d-flex' style={{padding: 20}}>
                        <h1 className="modal-head flex-fill">
                            Nutrition Preferences
                        </h1>
                        <a href="#"><X className='close-modal-button' onClick={() => setBasicModal(!basicModal)}/></a>
                    </div>
                    <hr/>
                    <ModalBody style={{paddingRight: 50, paddingLeft: 50}}>
                        <h5 style={{color: "#451400"}}>Set these tags for now or Sign In to keep them saved for
                            later.</h5>
                        <div style={{display: 'flex', marginTop: 20}}>
                            <div className='badge rounded-pill' style={{backgroundColor: '#6e7c1b'}}>
                                V
                            </div>
                            <div style={{color: '#6e7c1b', marginLeft: 10}}>Plant based</div>
                        </div>
                        <div style={{marginTop: 10}}>
                            <a href="#">
                                <div className="badge rounded-pill" onClick={handlePlantBased1}
                                     style={plantBased === 1 ? {
                                         border: 'solid',
                                         borderWidth: 1,
                                         borderColor: '#6e7c1b',
                                         backgroundColor: '#6e7c1b',
                                         color: 'white'
                                     } : {border: 'solid', borderWidth: 1, borderColor: '#6e7c1b', color: '#6e7c1b'}}>
                                    Vegetarian
                                </div>
                            </a>
                            <a href="#">
                                <div className="badge rounded-pill" onClick={handlePlantBased2}
                                     style={plantBased === 2 ? {
                                         border: 'solid',
                                         borderWidth: 1,
                                         borderColor: '#6e7c1b',
                                         backgroundColor: '#6e7c1b',
                                         color: 'white',
                                         marginLeft: 10,
                                         marginBottom: 10
                                     } : {
                                         border: 'solid',
                                         borderWidth: 1,
                                         borderColor: '#6e7c1b',
                                         color: '#6e7c1b',
                                         marginLeft: 10,
                                         marginBottom: 10
                                     }}>
                                    Vegan
                                </div>
                            </a>
                        </div>

                        <div style={{display: 'flex', marginTop: 10}}>
                            <div className='badge rounded-pill' style={{backgroundColor: '#786259'}}>
                                L
                            </div>
                            <div style={{color: '#786259', marginLeft: 10}}>Lifestyle</div>
                        </div>
                        <div style={{marginTop: 10}}>
                            <a href="#">
                                <div className="badge rounded-pill" onClick={handleLifeStyle1}
                                     style={lifeStyle === 1 ? {
                                         border: 'solid',
                                         borderWidth: 1,
                                         borderColor: '#786259',
                                         backgroundColor: '#786259',
                                         color: 'white'
                                     } : {border: 'solid', borderWidth: 1, borderColor: '#786259', color: '#786259'}}>
                                    Paleo
                                </div>
                            </a>
                            <a href="#">
                                <div className="badge rounded-pill" onClick={handleLifeStyle2}
                                     style={lifeStyle === 2 ? {
                                         border: 'solid',
                                         borderWidth: 1,
                                         borderColor: '#786259',
                                         backgroundColor: '#786259',
                                         marginLeft: 10,
                                         marginBottom: 10,
                                         color: 'white'
                                     } : {
                                         border: 'solid',
                                         borderWidth: 1,
                                         borderColor: '#786259',
                                         color: '#786259',
                                         marginLeft: 10,
                                         marginBottom: 10
                                     }}>
                                    Keto
                                </div>
                            </a>
                            <a href="#">
                                <div className="badge rounded-pill" onClick={handleLifeStyle3}
                                     style={lifeStyle === 3 ? {
                                         border: 'solid',
                                         borderWidth: 1,
                                         borderColor: '#786259',
                                         backgroundColor: '#786259',
                                         color: 'white',
                                         marginLeft: 10,
                                         marginBottom: 10
                                     } : {
                                         border: 'solid',
                                         borderWidth: 1,
                                         borderColor: '#786259',
                                         color: '#786259',
                                         marginLeft: 10,
                                         marginBottom: 10
                                     }}>
                                    Whole30
                                </div>
                            </a>
                        </div>
                        <div style={{display: 'flex', marginTop: 10}}>
                            <div className='badge rounded-pill' style={{backgroundColor: '#ad2118'}}>
                                !
                            </div>
                            <div style={{color: '#ad2118', marginLeft: 10}}>I'm Avoiding</div>
                        </div>

                        <h6 style={{marginTop: 10, color: '#786259'}}>Tagged items contain your selection.</h6>

                        <div style={{marginTop: 10, marginBottom: 20}}>
                            <a href="#">
                                <div className="badge rounded-pill" onClick={handleAvoiding1} style={avoiding === 1 ? {
                                    border: 'solid',
                                    borderWidth: 1,
                                    borderColor: '#ad2118',
                                    backgroundColor: '#ad2118',
                                    color: 'white'
                                } : {border: 'solid', borderWidth: 1, borderColor: '#ad2118', color: '#ad2118'}}>
                                    Gluten
                                </div>
                            </a>
                            <a href="#">
                                <div className="badge rounded-pill" onClick={handleAvoiding2} style={avoiding === 2 ? {
                                    border: 'solid',
                                    borderWidth: 1,
                                    borderColor: '#ad2118',
                                    backgroundColor: '#ad2118',
                                    color: 'white',
                                    marginLeft: 10,
                                    marginBottom: 10
                                } : {
                                    border: 'solid',
                                    borderWidth: 1,
                                    borderColor: '#ad2118',
                                    color: '#ad2118',
                                    marginLeft: 10,
                                    marginBottom: 10
                                }}>
                                    Dairy
                                </div>
                            </a>
                            <a href="#">
                                <div className="badge rounded-pill" onClick={handleAvoiding3} style={avoiding === 3 ? {
                                    border: 'solid',
                                    borderWidth: 1,
                                    borderColor: '#ad2118',
                                    backgroundColor: '#ad2118',
                                    color: 'white',
                                    marginLeft: 10,
                                    marginBottom: 10
                                } : {
                                    border: 'solid',
                                    borderWidth: 1,
                                    borderColor: '#ad2118',
                                    color: '#ad2118',
                                    marginLeft: 10,
                                    marginBottom: 10
                                }}>
                                    Soy
                                </div>
                            </a>
                            <a href="#">
                                <div className="badge rounded-pill" onClick={handleAvoiding4} style={avoiding === 4 ? {
                                    border: 'solid',
                                    borderWidth: 1,
                                    borderColor: '#ad2118',
                                    backgroundColor: '#ad2118',
                                    color: 'white',
                                    marginLeft: 10,
                                    marginBottom: 10
                                } : {
                                    border: 'solid',
                                    borderWidth: 1,
                                    borderColor: '#ad2118',
                                    color: '#ad2118',
                                    marginLeft: 10,
                                    marginBottom: 10
                                }}>
                                    Sulphites
                                </div>
                            </a>
                        </div>

                        <h5 style={{color: '#786259'}}>We do not use eggs, mustard, peanuts, tree nuts, sesame,
                            shellfish, or fish as ingredients.</h5>
                    </ModalBody>
                    <ModalFooter style={{justifyContent: 'center'}}>
                        <button style={{
                            backgroundColor: '#451400',
                            color: 'white',
                            alignText: 'center',
                            paddingLeft: 60,
                            paddingRight: 60,
                            paddingTop: 10,
                            paddingBottom: 10,
                            marginBottom: 30
                        }} onClick={() => setBasicModal(!basicModal)}>
                            Apply
                        </button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

    return (
        <>
            <div className="container-sm">
                <div className="row">
                    <div className="col-12" style={{textAlign: 'right'}}>
                        <a href="#"><h3
                            style={{
                                textTransform: 'uppercase',
                                color: "black",
                                fontWeight: 'bolder'
                            }}>Nutrtion
                            Preferences <List onClick={() => setBasicModal((!basicModal))} color="black"/>
                        </h3>
                        </a>
                    </div>
                </div>
            </div>
            {RenderModal()}
        </>
    )
}

export default NutrtionPrefModel