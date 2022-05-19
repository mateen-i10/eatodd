import React, {Component} from 'react'
import Header from "../../shared/header/Header"
import './OurValues.css'
import heroBowlsm from './images/hero-bowl-sm.png'
import heroBowltext from './images/subtitle-01-lg.svg'
import heroBurritolg from './images/hero-burrito-lg.png'
// import foodThoughtimg from './images/foodthought.png'
import freshfoodVideo from './video/food_sequence_xlarge.mp4'
import no1lg from './images/no-01-lg.svg'
import no2 from "./images/no-02.svg"
import freshFood from "./images/freshfood.svg"
import foodThought from './images/foodThought.svg'
import foodHasPower from "./images/foodHasPower.svg"
import ingredients53 from "./images/ingredients.svg"
import blackBeans from './images/BlackBeans-sm.png'
import redChilli from './images/RedChili-sm.png'
import romanLattuce from "./images/RomainLettuce-sm.png"
import tomatoPaste from "./images/TomatoPaste-sm.png"
import chipotleChilli from "./images/ChipotleChile-md.png"
import headline from './images/headline-10.svg'
import logoWithTag from './images/logo-with-tagline.svg'

class OurValues extends Component {
    render() {
        return (
            <div className="main-container">
            <Header />
                <div className="container-fluid FoodHasThePower__power">
                    {/*<h2 className="sr-only" >We believe that food has the power to change the world</h2>*/}
                    <img className="FoodHasThePower__power_img h-sm-100 " src={foodHasPower} alt= "We believe that food has the power to change the world"/>
                </div>
                <div className="container-fluid FoodHasThePower__bowl">
                    <div className="row ">
                    <div className="col col-md-6 col-auto  FoodHasThePower__hero-bowl">
                                <img className="FoodHasThePower__hero-bowl_img"
                                     src={heroBowlsm}
                                     alt="burrito bowl" />
                </div>
                <div className="col col-md-6 col-auto FoodHasThePower__subtext " >

                        <img className="FoodHasThePower__subtext_title"
                             src={heroBowltext}
                             alt="headline: We Do It By Being Real" />

                    <p className="FoodHasThePower__subtext_text">
                        Chipotle was born of the radical belief that there is a connection between
                        how food is raised and prepared, and how it tastes.
                        <strong>Real is better. Better for You, Better for People, Better for Our
                            Planet.</strong>
                        It may be the hard way to do things, but it’s the right way.
                    </p>
                    <div className="FoodHasThePower__hero-burrito ">

                            <img className="FoodHasThePower__hero-burrito_img"
                                 src={heroBurritolg}
                                 alt="burrito with a bite out of it" />
                    </div>
                </div>

               </div>
                </div>
                <div className="container-fluid FoodHasThePower__thought-animation">
                   <img className="w-sm-auto h-sm-auto" src={foodThought} alt="This isn't just food for thought, it's thought for food" />
               </div>
                <div className="position-relative top-0 start-0 container-fluid VideoSection">
                    <video className="position-absolute top-0 start-0 VideoSection-video" muted loop playsInline autoPlay >
                        <source src={freshfoodVideo} type="video/mp4"/>
                    </video>
                    <img className="position-absolute top-0 start-50 translate-middle-x w-75" src={freshFood} alt="Being real means making food fresh every day"/>
                    <div className="position-absolute bottom-0 start-50 translate-middle-x w-50">
                    <div className="VideoSection__text">
                        <div className="FreshFood__text-area text-center text-sm-left d-sm-flex">
                            <div className="d-lg-inline-flex d-sm-flex  justify-content-center align-items-center">
                                    <img className=" h-25 FreshFood__text-area_img"
                                         src={no1lg}
                                         alt="No" />
                                <div className="FreshFood__text-area_text" role="text">
                                    {/*<span className="sr-only">No</span>*/}
                                    <p >Artificial flavors,</p>
                                    <p >colors, or preservatives.</p>
                                </div>
                            </div>
                            <div className="d-lg-inline-flex d-sm-flex  justify-content-center align-items-center">
                                    <img className="FreshFood__text-area_img"
                                        src={no2}
                                        alt="No" />
                                <div className=" FreshFood__text-area_text" role="text">
                                    {/*<span className="sr-only">No</span>*/}
                                    <p >Freezers, can openers,</p>
                                    <p >or shortcuts.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid RealIngredients__intro">
                    <div className="RealIngredients__intro_animation w-100 mb-4">
                        <img className="mt-5" src={ingredients53} alt="Being real means we only use 53 ingredients you can pronounce"/>
                        <div className="RealIngredients__intro_animation_container" aria-hidden="true">
                            <div className="trigger" style={{top:360}}>

                        </div>
                    </div>
                    <p className="RealIngredients__intro_subtitle">
                        And the only ingredient that is hard to pronounce at
                        <strong>Chipotle</strong> is
                        <strong>“Chipotle.”</strong>
                    </p>
                    <p className="RealIngredients__intro_hint">(It’s Chih-poat-lay, by the way)</p>
                </div>
                </div>
                <div className="RealIngredients__ingredients ">
                    <div className="RealIngredients__ingredients_list">
                        <div className="Ingredient">
                            <div className="Ingredient__img-container">
                                <img className="" src={chipotleChilli} alt="Black Beans"/>
                            </div>
                            <span className="mt-1 Ingredient__text">Black Beans</span>
                        </div>
                        <div className="Ingredient">
                            <div className="Ingredient__img-container">
                                <img src={blackBeans} alt="Black Beans"/>
                            </div>
                            <span className="mt-1 Ingredient__text">Black Beans</span>
                        </div>
                        <div className=" Ingredient">
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
                <div className="container-fluid RealIngredients__ingredients ">
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
                <div className="container-fluid RealIngredients__ingredients ">
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
                <div className="container-fluid text-center mt-1">
                    <button className="RealIngredients__see-all btn btn-link "
                       aria-label="See them all ">
                        <span aria-hidden="true">See them all</span>
                        {/*<span className="sr-only">See full list of ingredients</span>*/}
                    </button>
                </div>
                <div className="container-fluid Realx3" aria-label="real">
                    <img className="Realx3__headlines  w-75 h-75" alt="Real ingredients, real purpose, real flavor."
                         src={headline} />
                    <img className="Realx3__logo-for-real  w-sm-50 h-auto"
                             src={logoWithTag}
                             alt="Chipotle - For Real" />
                    <button className="Realx3__order-btn btn btn-primary mt-5 mb-2 "
                         aria-label="Order Now ">Order Now</button>
                </div>
            </div>
        )
    }
}
export default OurValues
