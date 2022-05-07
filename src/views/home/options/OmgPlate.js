import React from 'react'
import MenuItem from '../options/components/MenuItems'
import chickenKebab from '../../../assets/images/foodItems/kebab.jpg'
import lamb from '../../../assets/images/foodItems/lamb.jpg'

const OmgPlate = () => {

    return (
        <div style={{backgroundColor: 'white'}}>
        <div style={{textAlign:'center', paddingTop:20, paddingBottom:20}}>
            <h1 style={{color:'#451400', fontWeight: 700, fontSize: 60}}>Protein or Vegie</h1>
            <h6 className="text-muted" style={{color:'#451400'}}>Choose up to two</h6>
        </div>

            <MenuItem item1={chickenKebab} item2={lamb} itemTitle1="CHICKEN KEBAB" itemTitle2="LAMB" itemPrice1="$11.99" itemPrice1="$14.99"/>
            <MenuItem item1={chickenKebab} item2={lamb} itemTitle1="CHICKEN SHAWARMA" itemTitle2="OKRA STEW" itemPrice1="$11.99" itemPrice1="$14.99"/>
            <MenuItem item1={chickenKebab} item2={lamb} itemTitle1="FLAFEL" itemTitle2="MEATBALLS" itemPrice1="$10.99" itemPrice1="$12.99"/>
            <MenuItem item1={chickenKebab} item2={lamb} itemTitle1="FISH" itemTitle2="STEAK" itemPrice1="$14.99" itemPrice1="$12.99"/>

            <div style={{display:'flex', flexDirection:'row', backgroundColor:'#d4cfcb', padding:20, marginTop: 30 }}>
                <div style={{flex:1}}>
                    <h1 style={{color:'#451400'}}>Your Meal</h1>
                    <h6 style={{color:'#451400'}}>Select a protien or a vegie to get started</h6>
                </div>
                <div>
                    <button type="button" style={{width:'120%', height:50, backgroundColor:'#451400', color:'white'}}>
                        ADD TO BAG
                    </button>
                </div>
            </div>

        </div>
    )
}

export default OmgPlate