import React, {Component} from 'react'
import "./Build.css"
import Header from "../../shared/header/Header"
import Footer from "../../shared/footer/Footer"
class Build extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div data-v-7e3257a2="" data-v-648fe8ef=""
                             className="meal-builder-header-container header default">
                            <div data-v-7e3257a2="" className="meal-builder-header">
                                <img data-v-7e3257a2="" src="https://www.chipotle.com/content/dam/chipotle/global/menu/meal-types/cmg-10001-burrito/web-desktop/order.png"
                                       alt="Burrito"
                                       aria-hidden="true"
                                       className="banner-image"/>
                                <div className="header-content">
                                    <div role="definition"
                                         className="heading mealbuilder-header-focus">BUILD YOUR
                                    </div>
                                    <div className="name">PLATE
                                    </div>
                                    <div className="description">Your
                                        choice of freshly grilled meat or sofritas wrapped in a warm flour tortilla with
                                        rice, beans, or fajita veggies, and topped with guac, salsa, queso blanco, sour
                                        cream or cheese.
                                    </div>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Build