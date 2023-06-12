import React, {useState} from 'react'
import {
    Button,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Form,
    FormFeedback,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    UncontrolledDropdown
} from "reactstrap"
import {ChevronDown} from "react-feather"

const Footer = ({addToCartClick}) => {

    const [basicNameFoodModal, setBasicNameFoodModal] = useState(false)
    const [value, setValue] = useState(10)
    const [instructions, setInstructions] = useState('')
    const onSaveClick = () => {
        addToCartClick(value, instructions)
        setBasicNameFoodModal(!basicNameFoodModal)
    }

    const RenderMealNameModal = () => {
        return (
            <div className='basic-modal '>
                <Modal isOpen={basicNameFoodModal} toggle={() => setBasicNameFoodModal(!basicNameFoodModal)}>
                    <div className='name-meal-model text-center my-1'><h1>Details</h1></div>
                    <Form>
                        <ModalBody>
                            <FormGroup>
                                <div className='col-8' style={{marginLeft: 80}}>
                                    <Label className='form-label' for='qty'>
                                        Quantity:
                                    </Label>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-around',
                                        marginTop: "-29px",
                                        marginBottom: 10
                                    }}>
                                        <UncontrolledDropdown>
                                            <DropdownToggle
                                                caret
                                                color="transparent"
                                                style={{border: "1px solid #81be41", color: '#81be41', fontWeight: 700}}
                                            >
                                                {value} <ChevronDown size={18}/>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem onClick={() => setValue(10)}>
                                                    10 People
                                                </DropdownItem>
                                                <DropdownItem onClick={() => setValue(15)}>
                                                    15 People
                                                </DropdownItem>
                                                <DropdownItem onClick={() => setValue(20)}>
                                                    20 People
                                                </DropdownItem>
                                                <DropdownItem onClick={() => setValue(25)}>
                                                    25 People
                                                </DropdownItem>
                                                <DropdownItem onClick={() => setValue(30)}>
                                                    30 People
                                                </DropdownItem>
                                                <DropdownItem
                                                    onClick={() => setValue(100)}>100 People</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </div>

                                    <FormFeedback>
                                        Quantity is required
                                    </FormFeedback>
                                    <Label className='form-label' for='instructions'>
                                        Instructions:
                                    </Label>
                                    <Input value={instructions} onChange={e => setInstructions(e.target.value)} id="instructions" type='textarea'/>
                                </div>

                            </FormGroup>
                        </ModalBody>
                        <ModalFooter style={{justifyContent: 'center', marginBottom: 20, marginTop: 30}}>
                            <Button color='danger' onClick={() => {
                                setBasicNameFoodModal(!basicNameFoodModal)
                            }}>
                                Cancel
                            </Button>
                                <Button
                                    color='primary'
                                    onClick={onSaveClick}>
                                Save
                            </Button>
                        </ModalFooter>
                    </Form>
                </Modal>
            </div>
        )
    }
    return (
        <>
            <div className="container-fluid mt-2"
                 style={{
                     backgroundColor: 'whitesmoke',
                     position: "sticky",
                     bottom: 0,
                     borderTop: "1px solid black",
                     zIndex: 10,
                     minHeight: 100

                 }}>
                <div className="row mb-2">
                    <div className="col-lg-7 col-12 mt-1 mb-2 d-lg-block d-none" style={{}}>
                        <div className="text-center text-uppercase fw-bolder"
                             style={{color: 'black', fontSize: "1.6rem"}}> Select Your Menu Items
                        </div>
                    </div>
                    <div className="col-lg-5 col-12 mt-1 mb-1 mb-lg-0 " style={{textAlign: 'center'}}>
                        <button
                            type="button"
                            style={{
                                width: '90%',
                                height: 60,
                                backgroundColor: '#81be41',
                                border: "0px",
                                color: 'white',
                                borderRadius: "5px",
                                fontSize: '1.2em',
                                fontWeight: 700
                            }}
                            onClick={() => {
                                setBasicNameFoodModal((!basicNameFoodModal))
                            }}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
            {RenderMealNameModal()}
        </>
    )
}

export default Footer
