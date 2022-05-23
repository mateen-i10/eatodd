import React, {useState} from 'react'
import {Minus, Plus} from "react-feather"

const FoodItemAdder = (props) => {

    const [counter, SetCounter] = useState(0)

    const style1 = {
        position: 'absolute',
        paddingTop:60,
        marginLeft:130
    }

    const style2 = {
        position: 'absolute',
        paddingTop:60,
        marginLeft:615
    }

    const style3 = {
        position: 'absolute',
        paddingTop:210,
        marginLeft:130
    }

    const style4 = {
        position: 'absolute',
        paddingTop:210,
        marginLeft:615
    }

    const style5 = {
        position: 'absolute',
        paddingTop:365,
        marginLeft:130
    }

    return (
        <div style={props.FoodItemName === 'Garlic Sauce' ? style1 : props.FoodItemName === 'Baba Ghanoush' ? style2 : props.FoodItemName === 'Red Hot Sauce' ? style3 : props.FoodItemName === 'Hummus' ? style4 : props.FoodItemName === 'Zhoug Sauce' ? style5 : [] }>
            {console.log(props.FoodItemName)}
            <div className='rounded-circle' style={{backgroundColor: '#b8a12c', color: 'white', maxWidth:30, marginLeft: 20, textAlign: 'center'}}>
                <label className='rounded-circle' style={{fontSize: 25}}>{counter}</label>
            </div>
            <div style={{display:'flex'}}>
                <div>
                    <Minus onClick={() => {
                        SetCounter(counter - 1)
                        if (counter === 0) {
                            props.ResetFoodItemName('')
                            SetCounter(0)
                        }
                    }} className="rounded-circle" style={{backgroundColor:'white'}} />
                </div>
                <div style={{marginLeft:20}}>
                    <Plus onClick={() => SetCounter(counter + 1)} className="rounded-circle" style={{backgroundColor:'white'}} />
                </div>
            </div>
        </div>
    )
}

export default FoodItemAdder