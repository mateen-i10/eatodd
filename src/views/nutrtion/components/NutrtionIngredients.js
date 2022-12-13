import React from 'react'
import {PlusCircle} from "react-feather"
import '../stylesheet/Nutrition.css'

const NutrtionIngredients = () => {

    return (
        <div>
            <div style={{backgroundColor: '#e3e3e3', textAlign:'center', paddingTop:'5em', fontHeight:100}}>
                <h1 style={{color:'#451400', fontSize:'3em', fontWeight:'bolder'}} >53 REAL INGREDIENTS</h1>
                <p style={{marginLeft:200, marginRight:200, marginBottom: 70, color:'#451400'}}>We have always been committed to preparing real food made with real ingredients. You know, the kind you can recognize and pronounce. In fact, we’ve listed every single one of them right here. We wish everyone would do the same.
                </p>
                <hr style={{color:'#451400'}} />
                <div>
                    <a href="#"><h3 className='highlight' style={{paddingTop:20, paddingBottom: 20}}>See how these 53 Real ingredients make our recipie <PlusCircle /></h3></a>
                </div>
            </div>

            <div className="RealIngredients__ingredients" style={{marginTop:40}}>
                <div className="RealIngredients__ingredients_list">
                    {/*<div className="Ingredient">*/}
                    {/*    <div className="Ingredient__img-container">*/}
                    {/*        <img className="" src={chipotleChilli} alt="Black Beans"/>*/}
                    {/*    </div>*/}
                    {/*    <span className="mt-1 Ingredient__text">Black Beans</span>*/}
                    {/*</div>*/}
                    {/*<div className="Ingredient">*/}
                    {/*    <div className="Ingredient__img-container">*/}
                    {/*        <img src={blackBeans} alt="Black Beans"/>*/}
                    {/*    </div>*/}
                    {/*    <span className="mt-1 Ingredient__text">Black Beans</span>*/}
                    {/*</div>*/}
                    {/*<div className=" Ingredient">*/}
                    {/*    <div className="Ingredient__img-container">*/}
                    {/*        <img src={tomatoPaste} alt="Black Beans"/>*/}
                    {/*    </div>*/}
                    {/*    <span className="mt-1 Ingredient__text">Black Beans</span>*/}
                    {/*</div>*/}
                    {/*<div className="Ingredient">*/}
                    {/*    <div className="Ingredient__img-container">*/}
                    {/*        <img src={romanLattuce} alt="Black Beans"/>*/}
                    {/*    </div>*/}
                    {/*    <span className="mt-1 Ingredient__text">Black Beans</span>*/}
                    {/*</div>*/}
                </div>
            </div>

        </div>
    )
}

export default NutrtionIngredients
