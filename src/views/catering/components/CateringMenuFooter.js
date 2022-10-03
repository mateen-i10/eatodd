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
// import "./Plate.css"
import {Link} from "react-router-dom"
import {ChevronDown} from "react-feather"

const Footer = () => {

    // const {dispatchingItems, setMealName, mealName} = props

    const [basicNameFoodModal, setBasicNameFoodModal] = useState(false)
    const [value, setValue] = useState("10 People")

    const RenderMealNameModal = () => {
        return (
            <div className='basic-modal '>
                <Modal isOpen={basicNameFoodModal} toggle={() => setBasicNameFoodModal(!basicNameFoodModal)}>
                    <div className='name-meal-model text-center my-1'><h1>Give More Instructions</h1></div>
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
                                                <DropdownItem onClick={() => setValue("10 People")}>10
                                                    People</DropdownItem>
                                                <DropdownItem onClick={() => setValue("50 People")}>50
                                                    People</DropdownItem>
                                                <DropdownItem
                                                    onClick={() => setValue(`100 People`)}>100 People</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </div>

                                    <FormFeedback>
                                        Quantity is required
                                    </FormFeedback>
                                    <Label className='form-label' for='instructions'>
                                        Instructions:
                                    </Label>
                                    <Input id="instructions" type='textarea'/>
                                </div>

                            </FormGroup>
                        </ModalBody>
                        <ModalFooter style={{justifyContent: 'center', marginBottom: 20, marginTop: 30}}>
                            <Button color='danger' onClick={() => {
                                setBasicNameFoodModal(!basicNameFoodModal)
                            }}>
                                Cancel
                            </Button>
                            <Link to="/"><Button color='primary'
                                                 onClick={() => setBasicNameFoodModal(!basicNameFoodModal)}

                            >
                                Save
                            </Button></Link>
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
                             style={{color: 'black', fontSize: "1.6rem"}}> Select Your
                            Menu Items
                        </div>
                        {/*<div className="text-center fw-bolder" style={{color: 'black', fontSize: "1.3rem"}}>Select a*/}
                        {/*    protein or vegie to get started*/}
                        {/*</div>*/}
                    </div>
                    <div className="col-lg-5 col-12 mt-1 mb-1 mb-lg-0 " style={{textAlign: 'center'}}>
                        {/*<div
                            className={(!proteinVege.length || !Rice.length || !Beans.length) ? "selectAtLeastOne " : "hideNote"}>Please
                            Select at least one item from<strong> Protein or
                                vegetable,
                                Beans and Rice</strong>
                        </div>*/}
                        <button
                            type="button" /*disabled={!proteinVege.length || !Rice.length || !Beans.length}*/
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
