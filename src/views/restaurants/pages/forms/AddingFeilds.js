import React, {useState} from 'react'
import {Button, Input} from "reactstrap"

const AddingFeilds = () => {

    const [inputList, setInputList] = useState([{item: '', price: ''}])

    const handleOnChange = (e, i) => {
        const {name, value} = e.target
        const list = [...inputList]
        list[i][name] = value
        setInputList(list)
    }

    const handleAddInput = () => {
        setInputList([...inputList, {item: '', price: ''}])
    }

    const handleRemoveInput = (i) => {
        const list = [...inputList]
        list.splice(i, 1)
        setInputList(list)
    }

    return (
        <>
            <div>
                
                <div className="row">
                    <div className="col-md-3">Item</div>
                    <div className="col-md-3">Price</div>
                    <div className="col-md-4">Choose a new Image</div>
                    <div className="col-md-2">Action</div>
                </div>

                {inputList.map((item, index) => {
                    return (
                        <div className="row my-1" key={index}>
                            <div className="col-md-3">
                                <Input type="text" name='item' placeholder='Item' value={item.item} onChange={e => handleOnChange(e, index)} />
                            </div>
                            <div className="col-md-3">
                                <Input type="text" name='price' placeholder='Price' value={item.price} onChange={e => handleOnChange(e, index)} />
                            </div>
                            <div className="col-md-4">
                                <Input className="form-control" type="file" id="formFile" />
                            </div>
                            <div className="col-md-2">
                                <Button.Ripple color='danger' onClick={() => handleRemoveInput(index)}>Delete</Button.Ripple>
                            </div>
                        </div>
                    )
                })}

                <Button.Ripple color='primary' onClick={handleAddInput}>Add More</Button.Ripple>
                {/*<input type="button" value='add' onClick={handleAddInput} />*/}
            </div>
        </>
    )
}

export default AddingFeilds