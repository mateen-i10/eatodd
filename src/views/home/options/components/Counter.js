import React, {useState} from 'react'
import {Minus, Plus} from "react-feather"

const Counter = () => {

    const [value, setValue] = useState(1)

    return (
        <>
            {value === 0 ? [] : <div className='container-fluid' style={{padding: 0, maxWidth: 55}}>
                <div className="rounded-circle border-white bg-primary mx-1 text-center"
                     style={{backgroundColor: 'rgb(220 220 220 / 80%)', width: 47}}>
                    <h1 className="text-white fw-bolder" style={{marginTop: 4}}>{value}</h1>
                </div>
                <div className="d-flex ">
                    <div className='rounded-circle border-primary  bg-white cursor-pointer '
                         style={{backgroundColor: 'rgb(220 220 220 / 80%)'}}>
                        <Plus color='black' size={25} onClick={() => {
                            if (value === 5) {
                                setValue(value)
                            } else {
                                setValue(value + 1)
                            }
                        }}/>
                    </div>
                    <div className='rounded-circle border-primary mx-2 bg-white cursor-pointer'
                         style={{backgroundColor: 'rgb(220 220 220 / 80%)'}}>
                        <Minus color='black' size={25} onClick={() => {
                            return setValue(value - 1)
                        }}/>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default Counter