import React, {useState} from 'react'
import {Button, Form, FormFeedback, FormGroup, Input, Modal, ModalBody, ModalFooter} from "reactstrap"
import "./Plate.css"
import {toast} from "react-toastify"
import {cartName} from "../../../../utility/constants"

const Footer = (props) => {

    const items = localStorage.getItem(cartName)
    const cart = JSON.parse(items)

    console.log(cart, "cart")

    const {dispatchingItems, setMealName, mealName, productList} = props

    const [basicNameFoodModal, setBasicNameFoodModal] = useState(false)

    console.log(productList, "product list coming from footer")

    // methods
    const handleKeyDown = event => {
        if (event.key === 'Enter') {
            // 👇️ your logic here
            event.preventDefault()
            dispatchingItems()
            setBasicNameFoodModal(!basicNameFoodModal)
        }
    }

    const RenderMealNameModal = () => {
        return (
            <div className='basic-modal '>
                <Modal isOpen={basicNameFoodModal} toggle={() => setBasicNameFoodModal(!basicNameFoodModal)}  >
                    <div className='name-meal-model text-center my-1'><h1>Give this meal a name</h1></div>
                    <Form>
                        <ModalBody>
                            <FormGroup>
                                <div className='col-8' style={{marginLeft: 80}}>
                                    <Input type='text' placeholder='Enter Meal Name' invalid={mealName.length === 0}
                                           style={{color: '#81be41'}}
                                           value={mealName}
                                           onChange={e => setMealName(e.target.value)}
                                           onKeyDown={handleKeyDown}
                                    />
                                    <FormFeedback>
                                        Meal Name is required
                                    </FormFeedback>
                                </div>
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter style={{justifyContent: 'center', marginBottom: 20, marginTop: 30}}>
                            <Button color='danger' onClick={() => {
                                setBasicNameFoodModal(!basicNameFoodModal)
                            }}>
                                Cancel
                            </Button>
                            <Button color='primary' disabled={mealName.length < 1}
                                    onClick={() => {
                                        if (cart?.meals?.length === undefined) {
                                            toast.info("Catering has been removed")
                                        }
                                        dispatchingItems()
                                        setBasicNameFoodModal(!basicNameFoodModal)
                                    }}
                            >
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
                     zIndex: 10

                 }}>
                <div className="row mb-2">
                    <div className="col-lg-7 col-12 mt-1 mb-2 d-lg-block d-none" style={{}}>
                        <div className="text-center text-uppercase fw-bolder"
                             style={{color: 'black', fontSize: "1.6rem"}}>Your
                            Menu Items
                        </div>
                        <div className="text-center fw-bolder" style={{color: 'black', fontSize: "1.3rem"}}>Select a
                            protein or vegie to get started
                        </div>
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
                                borderRadius: "5px"
                            }}
                            onClick={() => {
                                if (productList.length !== 0) {
                                setBasicNameFoodModal((!basicNameFoodModal))
                                } else {
                                    toast.error(". Select a meal to continue")
                                }
                            }}>
                            ADD TO BAG
                        </button>
                    </div>
                </div>
            </div>
            {RenderMealNameModal()}
        </>
    )
}

export default Footer
