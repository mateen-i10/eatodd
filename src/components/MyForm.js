/* eslint-disable multiline-ternary */
import React, {forwardRef, useImperativeHandle, useState} from "react"
import {Button, Form, FormFeedback, FormGroup, Input, Label} from "reactstrap"
import Joi from "joi-browser"
import {FieldTypes} from "../utility/enums/FieldType"
import Select from "react-select"
import AsyncSelect from 'react-select/async'
import Datetime from "react-datetime"

const MyForm =  (props, ref) => {
    const [errors, setErrors] = useState({})

    const onCancel = () => {
        setErrors({})
        if (props.toggleModal) props.toggleModal(null)
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
    const handleDateChange = (e, key) => {
        if (typeof (e) === "object") {
            props.setFormState({...props.formState, [key]: e.toDate()})
        }

    }
    const handleSelectChange = (e, key, isMulti, isAsync) => {
        if (isMulti) props.setFormState({...props.formState, [key]: Array.isArray(e) ? e.map(opt => { return {label:opt.label, value: opt.value } })  : [] })

        else if (isAsync) props.setFormState({...props.formState, [key]: {label:e.label, value: e.value}})
        else props.setFormState({...props.formState, [key]: e.value})
    }
    const handleInputChange = (e, key) => {
        if (e.target.type === 'checkbox') {
            props.setFormState({...props.formState, [key]: e.target.checked})
        } else if (e.target.files) {
            props.setFormState({...props.formState, [key]:e.target.files[0]})
        } else {
            props.setFormState({...props.formState, [key]: e.target.value})
        }
    }
    const renderInputGroup = (name, type, index, label, placeholder, options, isTime, rows, isMulti, isAsyncSelect = false, loadOptions, fieldGroupClasses = 'col-6', isRequired = false, isFormGroup = true) => {
        const html = <>{ type !== FieldTypes.CheckBox && type !== FieldTypes.Radio && type !== FieldTypes.SwitchButton && <><Label for={name}>{label}</Label> {isRequired && <span className="text-danger ml-1">*</span>}</>}
            {console.log('yess', name, props.formState[name])}
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
                    <Datetime
                        locale="en-gb"
                        timeFormat={isTime}
                        inputProps={{ placeholder }}
                        value={props.formState[name]}
                        closeOnSelect={true}
                        onChange={(e) => handleDateChange(e, name)}
                    />
                    /*<Flatpickr
                        value={props.formState[name]}
                        className='form-control'
                        onMount
                        onChange={(date) => {
                            handleDateChange(date, name)
                        }}
                    />*/ :
                    type === FieldTypes.Select && isAsyncSelect ?
                        <AsyncSelect
                            defaultOptions
                            loadOptions={loadOptions}
                            closeMenuOnSelect={true}
                            isMulti = {isMulti}
                            isLoading={true}
                            value={props.formState[name]}
                            onChange={(e) => handleSelectChange(e, name, isMulti, isAsyncSelect)}
                        />

                        :
                        type === FieldTypes.Select && !isAsyncSelect ?
                            <Select
                                closeMenuOnSelect={true}
                                isMulti = {isMulti}
                                options={options}
                                value={options.find(opt => opt.value === props.formState[name])}
                                onChange={(e) => handleSelectChange(e, name, isMulti, isAsyncSelect)}
                            />
                            : type === FieldTypes.CheckBox ?
                                <FormGroup check inline>
                                    <Input type='checkbox' type="checkbox" checked={props.formState[name]} name={name} id={`${name + index}`} value={props.formState[name]} onChange={(e) => handleInputChange(e, name)} />
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
                                            <Input type='checkbox' type="checkbox" name={name} id={`${name + index}`} value={props.formState[name]} checked={props.formState[name]} onChange={(e) => handleInputChange(e, name)} />
                                            <Label for={`${name + index}`} switch>{label}</Label>
                                        </FormGroup> :
                                        <Input
                                            placeholder={placeholder}
                                            type= {type === FieldTypes.Number ? 'number' : type === FieldTypes.Password ? 'password' : type === FieldTypes.Email ? 'email' : type === FieldTypes.TextArea ? 'textarea' : 'text' }
                                            rows = {type === FieldTypes.TextArea ? rows : ''}
                                            value={props.formState[name]}
                                            id={name + index}
                                            name={name}
                                            onChange={(e) => handleInputChange(e, name)}
                                            /*valid={props.formState[name] !=='' && props.formState[name] && !errors[name]}*/
                                            invalid={!!(errors[name]) && props.formState[name] === ''}
                                        />
            }
            {(type === FieldTypes.Select || type === FieldTypes.Date) && errors[name] && <span className="ml-1" style = {{ width: '100%', fontSize: '0.857rem', color: '#ea5455'}}>{errors[name]}</span>}
            {(type !== FieldTypes.Select || type !== FieldTypes.Date) && errors[name] && <FormFeedback className="ml-1">{errors[name]}</FormFeedback>}
        </>
        if (isFormGroup) {
            return <FormGroup key={index} className={fieldGroupClasses}>{html}</FormGroup>
        } else {
            return <div key={index} className={fieldGroupClasses}>{html}</div>
        }
    }
    const renderButtonGroup = (btn1Label, btn2Label) => {
        return <FormGroup className='col-12'>
            <Button color="primary" className="float-end">
                {btn1Label}
            </Button>
            {btn2Label && <Button
                color="danger"
                className="me-1 float-end"
                onClick={onCancel}
            >
                {btn2Label}
            </Button> }
        </FormGroup>
    }
    const renderForm = () => {
        return <Form onSubmit={(event) => props.handleSubmit(event)}>
                        <div className='row'>
                            {props.formData && props.formData.length > 0 ? props.formData.map((obj, index) => {
                                const {type, label, placeholder, name, options, isTime, rows, isMulti, isAsyncSelect, loadOptions, fieldGroupClasses, isRequired, isFormGroup} = obj
                                return renderInputGroup(name, type, index, label, placeholder, options, isTime, rows, isMulti, isAsyncSelect, loadOptions, fieldGroupClasses, isRequired, isFormGroup)
                            }) : ''}
                            {props.children}
                            {props.buttonHtml ? <div className='col-12'>{props.buttonHtml}</div> : renderButtonGroup(props.primaryBtnLabel, props.secondaryBtnLabel)}
                        </div>
                    </Form>
    }

    return renderForm()
}

export default forwardRef(MyForm)
