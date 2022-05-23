import React from 'react'
import {PlusCircle} from "react-feather"
// import img from '../../../assets/images/foodItems/kebab.jpg'
import '../stylesheet/Nutrition.css'
import Header from "../../../shared/header/Header"
import Footer from "../../../shared/footer/Footer"
//
// import chipotleChilli from "../../../../public/assets/images/ChipotleChile-md.png"
// import blackBeans from "../../../../public/assets/images/BlackBeans-sm.png"
// import tomatoPaste from "../../../../public/assets/images/TomatoPaste-sm.png"
// import romanLattuce from "../../../../public/assets/images/RomainLettuce-sm.png"
// import redChilli from "../../../../public/assets/images/RedChili-sm.png"
const NutrtionIngredients = () => {

    // const list = [
    //     {
    //         image : img,
    //         title: 'Avacado'
    //     },
    //     {
    //         image : img,
    //         title: 'Bay Leaf'
    //     },
    //     {
    //         image : img,
    //         title: 'Black Beans'
    //     },
    //     {
    //         image : img,
    //         title: 'Beef'
    //     },
    //     {
    //         image : img,
    //         title: 'Bell Pepper'
    //     }
    // ]

    return (
        <div>
            <Header/>
            <div style={{backgroundColor: '#e3e3e3', textAlign:'center', paddingTop:'5em', fontHeight:100}}>
                <h1 style={{color:'#57ab00', fontSize:'3em', fontWeight:'bolder'}} >53 REAL INGREDIENTS</h1>
                <p style={{marginLeft:200, marginRight:200, marginBottom: 70, color:'#57ab00'}}>We have always been committed to preparing real food made with real ingredients. You know, the kind you can recognize and pronounce. In fact, we’ve listed every single one of them right here. We wish everyone would do the same.
                </p>
                <hr style={{color:'#57ab00'}} />
                <div>
                    <h3 style={{paddingTop:20, paddingBottom: 20, color:'#57ab00'}}>See how these 53 Real ingredients make our recipie <PlusCircle /></h3>
                </div>
            </div>
            {/*<div style={{display:'flex', justifyContent:'center', marginTop: 80}}>*/}
            {/*{list.map(e => (*/}
            {/*        <div key={e.title} className='highlight' style={{marginRight:20, marginLeft:20, textAlign:'center'}}>*/}
            {/*            <div><img className='rounded-circle' src={e.image} width='170' /></div>*/}
            {/*            <div style={{marginTop:10, fontSize:'1.4em', color:'#451400'}}>{e.title}</div>*/}
            {/*        </div>*/}
            {/*))}*/}
            {/*</div>*/}
            <div className="RealIngredients__ingredients mt-5">
                <div className="RealIngredients__ingredients_list">
                    <div className="Ingredient">
                        <div className="Ingredient__img-container">
                            <img src={chipotleChilli} alt="Black Beans"/>
                        </div>
                        <span className="mt-1 Ingredient__text">Black Beans</span>
                    </div>
                    <div className="Ingredient">
                        <div className="Ingredient__img-container">
                            <img src={blackBeans} alt="Black Beans"/>
                        </div>
                        <span className="mt-1 Ingredient__text">Black Beans</span>
                    </div>
                    <div className="Ingredient">
                        <div className="Ingredient__img-container">
                            <img src={tomatoPaste} alt="Black Beans"/>
                        </div>
                        <span className="mt-1 Ingredient__text">Black Beans</span>
                    </div>
                    <div className="Ingredient">
                        <div className="Ingredient__img-container">
                            <img src={romanLattuce} alt="Black Beans"/>
                        </div>
                        <span className="mt-1 Ingredient__text">Black Beans</span>
                    </div>
                </div>
            </div>
            <div className="RealIngredients__ingredients">
                <div className="RealIngredients__ingredients_list">
                    <div className="Ingredient">
                        <div className="Ingredient__img-container">
                            <img src={redChilli} alt="Black Beans"/>
                        </div>
                        <span className="mt-1 Ingredient__text">Black Beans</span>
                    </div>
                    <div className="Ingredient">
                        <div className="Ingredient__img-container">
                            <img src={blackBeans} alt="Black Beans"/>
                        </div>
                        <span className="mt-1 Ingredient__text">Black Beans</span>
                    </div>
                    <div className="Ingredient">
                        <div className="Ingredient__img-container">
                            <img src={blackBeans} alt="Black Beans"/>
                        </div>
                        <span className="mt-1 Ingredient__text">Black Beans</span>
                    </div>
                    <div className="Ingredient">
                        <div className="Ingredient__img-container">
                            <img src={blackBeans} alt="Black Beans"/>
                        </div>
                        <span className="mt-1 Ingredient__text">Black Beans</span>
                    </div>
                </div>
            </div>
            <div className="RealIngredients__ingredients mb-5">
                <div className="RealIngredients__ingredients_list">
                    <div className="Ingredient">
                        <div className="Ingredient__img-container">
                            <img src={chipotleChilli} alt="Black Beans"/>
                        </div>
                        <span className="mt-1 Ingredient__text">Black Beans</span>
                    </div>
                    <div className="Ingredient">
                        <div className="Ingredient__img-container">
                            <img src={blackBeans} alt="Black Beans"/>
                        </div>
                        <span className="mt-1 Ingredient__text">Black Beans</span>
                    </div>
                    <div className="Ingredient">
                        <div className="Ingredient__img-container">
                            <img src={tomatoPaste} alt="Black Beans"/>
                        </div>
                        <span className="mt-1 Ingredient__text">Black Beans</span>
                    </div>
                    <div className="Ingredient">
                        <div className="Ingredient__img-container">
                            <img src={romanLattuce} alt="Black Beans"/>
                        </div>
                        <span className="mt-1 Ingredient__text">Black Beans</span>
                    </div>
                </div>
            </div>
        <Footer/>
        </div>
    )
}

export default NutrtionIngredients
