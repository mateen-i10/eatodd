import React, {useState} from 'react'
import {Button, Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row} from "reactstrap"

const CrmForm = (props) => {

    const [isHtml, setIsHtml] = useState(false)

    const handleFeildsShow = () => {
        if (isHtml === false) {
            setIsHtml(true)
        } else {
            setIsHtml(false)
        }
    }

    return (
        <>
            <Modal
                isOpen={props.isModal}
                className='modal-dialog-top modal-lg'
            >
                <ModalHeader toggle={() => {
                    props.setModal(!props.isModal)
                    setIsHtml(false)
                }}>Add Template</ModalHeader>
                <ModalBody>
                    <form>
                        <section>
                            <div className="container-sm">
                                <Row>
                                    <Col lg={6} style={{marginTop:'10px', marginBottom:'10px'}}>
                                        <Label for="name" >Name</Label>
                                        <Input type="text" name="name" placeholder="Enter Template Name" />
                                    </Col>
                                    <Col lg={6} style={{marginTop:'10px', marginBottom:'10px'}}>
                                        <Label for="name">IsHtml</Label>
                                        <div>
                                            <Input type="switch" name="name" value={isHtml} onChange={handleFeildsShow} />
                                        </div>
                                    </Col>
                                    {isHtml === true ? <Col lg={6} style={{marginTop:'10px', marginBottom:'10px'}}>
                                        <Label for="name" >Subject</Label>
                                        <Input type="text" placeholder="Enter Template Subject"/>
                                    </Col> : [] }
                                    <Col lg={6} style={{marginTop:'10px', marginBottom:'10px'}}>
                                        <Label for="name" >body</Label>
                                        <Input type="textarea" placeholder="Enter Template Body" />
                                    </Col>
                                </Row>
                            </div>
                        </section>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={() => console.log("clicked")}>
                        cancel
                    </Button>
                    <Button color="primary" onClick={() => console.log("clicked")}>
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default CrmForm