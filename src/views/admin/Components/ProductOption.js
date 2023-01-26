import {Button, Input} from "reactstrap"
import {Delete} from "react-feather"
import React, {memo} from "react"

const ProductOption = (props) => {
    console.log(props.optionType, 'the opt type')
    return <div className='row mt-1'>
        <div className='col-2'>
            <Input
                placeholder='Enter name'
                type= 'text'
                value={props.option.name}
                onChange={(e) => props.onValueChange(props.index, 'name', e)}
            />
        </div>
        <div className= {props.optionType === 2 ? 'col-2' : 'col-3'}>
            <Input
                placeholder='Enter Price'
                type= 'number'
                value={props.option.price}
                onChange={(e) => props.onValueChange(props.index, 'price', e)}
            />
        </div>
        <div className='col-3'>
            <Input
                placeholder='Enter description'
                type= 'text'
                value={props.option.description}
                onChange={(e) => props.onValueChange(props.index, 'description', e)}
            />
        </div>
        {props.optionType === 2 && (
            <div className='col-2'>
                <Input
                    placeholder='Enter max value'
                    type= 'number'
                    value={props.option.max}
                    onChange={(e) => props.onValueChange(props.index, 'max', e)}
                />
            </div>
        )}
        {props.optionType === 2 && (
            <div className='col-2'>
                <Input
                    placeholder='Enter min value'
                    type= 'number'
                    value={props.option.min}
                    onChange={(e) => props.onValueChange(props.index, 'min', e)}
                />
            </div>
        )}
        {props.optionsLength >= 1 && <div className='col-1'>
            <Button.Ripple className='btn-icon' color='danger' onClick={() => props.removeOption(props.index)}>
                <Delete size={12}/>
            </Button.Ripple>
        </div>
        }
    </div>
}

export default memo(ProductOption)