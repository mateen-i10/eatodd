import React, {useState} from 'react'
import {Plus, Minus} from "react-feather"

const Counter = () => {

    const [value, setValue] = useState(0)

    return (
        <>
            {value === -1 ? [] : <div className='container' style={{padding:0, maxWidth: 55}}>
                <div className="rounded-circle border-dark mx-1 text-center" style={{backgroundColor:'rgb(212 241 79 / 80%)', width: 45}}>
                    <h1 style={{color: 'black'}}>{value}</h1>
                </div>
                <div className="d-flex my-1">
                    <div className='rounded-circle border-dark' style={{backgroundColor:'rgb(212 241 79 / 80%)'}}>
                        <Plus color='black' onClick={() => setValue(value + 1)} />
                    </div>
                    <div className='rounded-circle border-dark mx-2' style={{backgroundColor:'rgb(212 241 79 / 80%)'}}>
                        <Minus color='black' onClick={() => {
                            return setValue(value - 1)
                        }} />
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default Counter