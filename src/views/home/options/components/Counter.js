import React, {useEffect, useState} from 'react'
import {Minus, Plus} from "react-feather"

const Counter = ({min, max, setProductQuantity, selectedProductIndex, handleSelectProduct, product}) => {

    const [value, setValue] = useState(min)

    useEffect(() => {
        setProductQuantity(selectedProductIndex, value)
    }, [value])

    return (
        <>
            <div className='container-fluid' style={{padding: 0, maxWidth: 55}}>
                <div className="rounded-circle border-white bg-primary mx-1 text-center"
                     style={{backgroundColor: 'rgb(220 220 220 / 80%)', width: 47}}>
                    <h1 className="text-white fw-bolder" style={{marginTop: 4}}>{value}</h1>
                </div>
                <div className="d-flex">
                    <div className='rounded-circle border-primary  bg-white cursor-pointer '
                         style={{backgroundColor: 'rgb(220 220 220 / 80%)', zIndex: '100'}}>
                        <Plus color='black' size={25} onClick={() => {
                            if (value === max) {
                                setValue(value)
                            } else {
                                setValue(value + 1)
                            }
                        }}/>
                    </div>
                    <div className='rounded-circle border-primary mx-2 bg-white cursor-pointer'
                         style={{backgroundColor: 'rgb(220 220 220 / 80%)'}}>
                        <Minus color='black' size={25} onClick={() => {
                            if (value > min) {
                                setValue(value - 1)
                            } else if (value === 1) {
                                handleSelectProduct(product)
                            }
                        }}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter
