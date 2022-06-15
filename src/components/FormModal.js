/* eslint-disable multiline-ternary */
import React, {forwardRef, useImperativeHandle, useState} from "react"
import {Button, Form, FormFeedback, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from "reactstrap"
import Joi from "joi-browser"
import Flatpickr from 'react-flatpickr'
import {FieldTypes} from "../utility/enums/FieldType"
import Select from "react-select"
import AsyncSelect from 'react-select/async'
import BlockUi from "react-block-ui"

const FormModal =  (props, ref) => {
    const [errors, setErrors] = useState({})

    const onModalToggle = () => {
        setErrors({})
        props.toggleModal(null)
    }
    useImperativeHandle(ref, () => ({
        validate(currentState) {

            // validating form object only provided schema
            const schemaKeys = props.schema._inner.children.map(sc => sc.key)
            const newState = {...currentState}
            for (const key in currentState) {
                if (!schemaKeys.find(sc => sc === key)) delete newState[key]
            }

            const result = Joi.validate(newState, props.schema, {abortEarly: false})
            if (!result.error) {
                setErrors({})
                return false
            }

            const errors = {}
            result.error.details.map(d => {
                errors[d.path[0]] = d.message
            })
            setErrors({...errors})

            return true
        }
    }), [])
    const handleDateChange = (date, key) => {
        props.setFormState({...props.formState, [key]: date})
    }
    const handleSelectChange = (e, key, isMulti) => {
        if (isMulti) props.setFormState({...props.formState, [key]: Array.isArray(e) ? e.map(opt => opt.value)  : [] })

        else props.setFormState({...props.formState, [key]: e.value})
    }
    const handleInputChange = (e, key) => {
        if (e.target.checked) {
            props.setFormState({...props.formState, [key]: e.target.checked})
        } else if (e.target.files) {
            props.setFormState({...props.formState, [key]:e.target.files[0]})
        } else {
            props.setFormState({...props.formState, [key]: e.target.value})
        }
    }
    const renderInputGroup = (name, type, index, label, placeholder, options, isTime, rows, isMulti, isAsyncSelect = false, loadOptions, fieldGroupClasses = 'col-6', isRequired = false) => {
        return <FormGroup key={index} className={fieldGroupClasses}>
            { type !== FieldTypes.CheckBox && type !== FieldTypes.Radio && type !== FieldTypes.SwitchButton && <><Label for={name}>{label}</Label> {isRequired && <span className="text-danger ml-1">*</span>}</>}
            {type === FieldTypes.File ? <div className="custom-file">
                    <Input
                        type='file'
                        className="custom-file-input"
                        id={name + index}
                        /*value={props.formState[name]}*/
                        onChange={(e) => handleInputChange(e, name)}

                    />
                </div> :
                type === FieldTypes.Date ?
                    <Flatpickr
                        value={props.formState[name]}
                        className='form-control'
                        onChange={date => handleDateChange(date)}
                    /> :
                    type === FieldTypes.DateTime ?
                        <Flatpickr
                            value={props.formState[name]}
                            data-enable-time
                            className='form-control'
                            onChange={date => handleDateChange(date)}
                        /> :
                        type === FieldTypes.Select && isAsyncSelect ?
                            <AsyncSelect
                                defaultOptions
                                loadOptions={loadOptions}
                                closeMenuOnSelect={true}
                                isMulti = {isMulti}
                                onChange={(e) => handleSelectChange(e, name, isMulti)}
                            />
                            :
                            type === FieldTypes.Select && !isAsyncSelect ?
                                <Select
                                    closeMenuOnSelect={true}
                                    isMulti = {isMulti}
                                    options={options}
                                    value={options.find(opt => opt.value === props.formState[name])}
                                    onChange={(e) => handleSelectChange(e, name, isMulti)}
                                /> : type === FieldTypes.CheckBox ?
                                    <FormGroup check inline>
                                        <Input type='checkbox' type="checkbox" name={name} id={`${name + index}`} value={props.formState[name]} onChange={(e) => handleInputChange(e, name)} />
                                        <Label for={`${name + index}`} check>{label}</Label> {isRequired && <span className="text-danger ml-1">*</span>}
                                    </FormGroup> :
                                    type === FieldTypes.Radio ?
                                        <FormGroup check inline>
                                            <Label check>
                                                <Input type='radio' name={name} id={`${name + index}`} value={props.formState[name]} onChange={(e) => handleInputChange(e, name)} /> {label}
                                            </Label>
                                        </FormGroup> :
                                        type === FieldTypes.SwitchButton ?
                                            <FormGroup switch inline>
                                                <Input type='checkbox' type="checkbox" name={name} id={`${name + index}`} value={props.formState[name]} onChange={(e) => handleInputChange(e, name)} />
                                                <Label for={`${name + index}`} switch>{label}</Label>
                                            </FormGroup>  :
                                            <Input
                                                placeholder={placeholder}
                                                type= {type === FieldTypes.Number ? 'number' : type === FieldTypes.Password ? 'password' : type === FieldTypes.Date ? 'date' : type === FieldTypes.Email ? 'email' : type === FieldTypes.TextArea ? 'textarea' : 'text' }
                                                rows = {type === FieldTypes.TextArea ? rows : ''}
                                                value={props.formState[name]}
                                                id={name + index}
                                                name={name}
                                                onChange={(e) => handleInputChange(e, name)}
                                                /*valid={props.formState[name] !=='' && props.formState[name] && !errors[name]}*/
                                                invalid={!!(errors[name]) && props.formState[name] === ''}
                                            />
            }
            {errors[name] && <FormFeedback className="ml-1">{errors[name]}</FormFeedback>}
        </FormGroup>
    }
    const renderButtonGroup = (btn1Label, btn2Label) => {
        return <FormGroup className='col-12'>
            <Button color="primary" className="float-end">
                {btn1Label}
            </Button>
            <Button
                color="danger"
                className="me-1 float-end"
                onClick={onModalToggle}
            >
                {btn2Label}
            </Button>
        </FormGroup>
    }
    const renderModal = () => {
        return <Modal isOpen={props.isModal}  fade={true} size="lg" backdrop={false} toggle={onModalToggle}>
            <BlockUi blocking={props.isLoading}>
                <ModalHeader toggle={onModalToggle}>{props.modalTitle}</ModalHeader>
                <ModalBody className="px-4">
                    <Form onSubmit={(event) => props.handleSubmit(event)}>
                        <div className='row'>
                            {props.formData && props.formData.length > 0 ? props.formData.map((obj, index) => {
                                const {type, label, placeholder, name, options, isTime, rows, isMulti, isAsyncSelect, loadOptions, fieldGroupClasses, isRequired} = obj
                                return renderInputGroup(name, type, index, label, placeholder, options, isTime, rows, isMulti, isAsyncSelect, loadOptions, fieldGroupClasses, isRequired)
                            }) : ''}
                            {renderButtonGroup(props.primaryBtnLabel, props.secondaryBtnLabel)}
                        </div>
                    </Form>
                </ModalBody>
            </BlockUi>
        </Modal>
    }

    return (<div>
            {renderModal()}
        </div>
    )
}

export default forwardRef(FormModal)