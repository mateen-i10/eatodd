import React from 'react'
import {PlusCircle} from "react-feather"
import img from '../../../assets/images/foodItems/kebab.jpg'
import '../stylesheet/Nutrition.css'

const NutrtionIngredients = () => {

    const list = [
        {
            image : img,
            title: 'Avacado'
        },
        {
            image : img,
            title: 'Bay Leaf'
        },
        {
            image : img,
            title: 'Black Beans'
        },
        {
            image : img,
            title: 'Beef'
        },
        {
            image : img,
            title: 'Bell Pepper'
        }
    ]

    return (
        <div>
            <div style={{backgroundColor: '#e3e3e3', textAlign:'center', paddingTop:'5em', fontHeight:100}}>
                <h1 style={{color:'#451400', fontSize:'3em', fontWeight:'bolder'}} >53 REAL INGREDIENTS</h1>
                <p style={{marginLeft:200, marginRight:200, marginBottom: 70, color:'#451400'}}>We have always been committed to preparing real food made with real ingredients. You know, the kind you can recognize and pronounce. In fact, we’ve listed every single one of them right here. We wish everyone would do the same.
                </p>
                <hr style={{color:'#451400'}} />
                <div>
                    <h3 style={{paddingTop:20, paddingBottom: 20, color:'#451400'}}>See how these 53 Real ingredients make our recipie <PlusCircle /></h3>
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'center', marginTop: 80}}>
            {list.map(e => (
                    <div key={e.title} className='highlight' style={{marginRight:20, marginLeft:20, textAlign:'center'}}>
                        <div><img className='rounded-circle' src={e.image} width='170' /></div>
                        <div style={{marginTop:10, fontSize:'1.4em', color:'#451400'}}>{e.title}</div>
                    </div>
            ))}
            </div>

        </div>
    )
}

export default NutrtionIngredients
