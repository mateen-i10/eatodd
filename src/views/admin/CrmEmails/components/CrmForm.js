import React, {useState} from 'react'
import {Button, Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row} from "reactstrap"
import {useDispatch} from "react-redux"
import {addTemplate} from "../../../../redux/template/action"

import Joi from 'joi-browser'

const CrmForm = (props) => {

    // states
    const [name, setTempName] = useState("")
    const [subject, setSubject] = useState("")
    const [body, setBody] = useState("")

    // bool
    const [isHtml, setIsHtml] = useState(true)

    // Schema
    const schema = Joi.object({
        name: Joi.string().required().label("Name"),
        body: Joi.string().required().label("Body")
    })

    //setting errors
    const [errors, setErrors] = useState({})

    // dispatcher initialization
    const dispatch = useDispatch()

    const handleFeildsShow = () => {
        if (isHtml === false) {
            setIsHtml(true)
        } else {
            setIsHtml(false)
        }
    }

    const handleClose = () => {
        setTempName('')
        setSubject('')
        setBody('')
        setIsHtml(false)
    }

    const handleSubmit = () => {
        const data = {
            name,
            body
        }
        const finaldata = {
            name,
            isHtml,
            subject,
            body
        }

        const isError = Joi.validate(data, schema, {abortEarly: false})
        console.log(isError, "errors")
        const {error} = isError
        if (!error) {
            dispatch(addTemplate(finaldata))
            handleClose()
            props.setModal(!props.isModal)
        } else {
            const errorData = {}
            for (const item of error?.details) {
                console.log(item, "ITEM MSG")
                const name = item.path[0]
                const message = item.message
                errorData[name] = message
            }
            setErrors(errorData)
            // return errorData
        }
    }

    console.log(errors)

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
                                        <Input type="text" name="name" value={name} onChange={(e) => setTempName(e.target.value)} placeholder="Enter Template Name" invalid={!name ? errors.name && true : null}/>
                                        {!name ? errors.name && (
                                            <div className="text-danger">
                                                {errors.name}
                                            </div>
                                        ) : null}
                                    </Col>
                                    <Col lg={6} style={{marginTop:'10px', marginBottom:'10px'}}>
                                        <Label for="html">IsHtml</Label>
                                        <div>
                                            <Input type="switch" name="html" value={isHtml} onChange={handleFeildsShow} />
                                        </div>
                                    </Col>
                                    {isHtml === true ? <Col lg={6} style={{marginTop:'10px', marginBottom:'10px'}}>
                                        <Label for="subject" >Subject</Label>
                                        <Input type="text" name='subject' value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Enter Template Subject"/>
                                    </Col> : [] }
                                    <Col lg={6} style={{marginTop:'10px', marginBottom:'10px'}}>
                                        <Label for="body" >body</Label>
                                        <Input type="textarea" name='body' value={body} onChange={(e) => setBody(e.target.value)} placeholder="Enter Template Body" invalid={!body ? errors.body && true : null} />
                                        {!body ? errors.body && (
                                            <div className="text-danger">
                                                {errors.body}
                                            </div>
                                        ) : null}
                                    </Col>
                                </Row>
                            </div>
                        </section>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={() => {
                        props.setModal(!props.isModal)
                        handleClose()
                    }}>
                        cancel
                    </Button>
                    <Button color="primary" onClick={() => handleSubmit()}>
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default CrmForm