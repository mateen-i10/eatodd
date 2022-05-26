import React from 'react'
import {CheckCircle} from "react-feather"

const FoodCheckItem = (props) => {

    const style1 = {
        position:'absolute',
        marginTop:60,
        marginLeft:155,
        backgroundColor:'#8f6901',
        borderColor: 'white',
        borderWidth:1,
        color:'white'
    }

    const style2 = {
        position:'absolute',
        marginTop:60,
        marginLeft:640,
        backgroundColor:'#8f6901',
        borderColor: 'white',
        borderWidth:1,
        color:'white'
    }

    const style3 = {
        position:'absolute',
        marginTop:210,
        marginLeft:155,
        backgroundColor:'#8f6901',
        borderColor: 'white',
        borderWidth:1,
        color:'white'
    }

    const style4 = {
        position:'absolute',
        marginTop:360,
        marginLeft:640,
        backgroundColor:'#8f6901',
        borderColor: 'white',
        borderWidth:1,
        color:'white'
    }

    const style5 = {
        position:'absolute',
        marginTop:515,
        marginLeft:155,
        backgroundColor:'#8f6901',
        borderColor: 'white',
        borderWidth:1,
        color:'white'
    }

    const style6 = {
        position:'absolute',
        marginTop:360,
        marginLeft:155,
        backgroundColor:'#8f6901',
        borderColor: 'white',
        borderWidth:1,
        color:'white'
    }

    const style7 = {
        position:'absolute',
        marginTop:210,
        marginLeft:640,
        backgroundColor:'#8f6901',
        borderColor: 'white',
        borderWidth:1,
        color:'white'
    }

    const style8 = {
        position:'absolute',
        marginTop:515,
        marginLeft:640,
        backgroundColor:'#8f6901',
        borderColor: 'white',
        borderWidth:1,
        color:'white'
    }

    // const style = {
    //     position:'absolute',
    //     marginTop:515,
    //     marginLeft:640,
    //     borderColor: 'white',
    //     borderWidth:1,
    //     color:'white'
    // }

    return (
        <div>
            <CheckCircle className='rounded-circle' size={50} style={props.proteinName === 'chicken Kebab' ? style1 : props.proteinName === 'Lamb' ? style2 : props.proteinName === 'Chicken Shawarma' ? style3 : props.proteinName === 'MeatBalls' ? style4 : props.proteinName === 'Fish' ? style5 : props.proteinName === 'Falafel' ? style6 : props.proteinName === 'Okra Stew' ? style7 : props.proteinName === 'Steak' ? style8 : [] } />
        </div>
    )
}

export default FoodCheckItem