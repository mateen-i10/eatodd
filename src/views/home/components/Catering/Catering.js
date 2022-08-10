import React from 'react'
import MenuItemsCatering from "./MenuItemsCatering"
import cat1 from "../../../../assets/images/images/cat-1.png"
import cat2 from "../../../../assets/images/images/cat-2.png"
import cat3 from "../../../../assets/images/images/cat-3.png"
import cat4 from "../../../../assets/images/images/cat-4.png"
import {Col, Row} from "reactstrap"

const Catering = () => {
    return (
        <>
            <div style={{backgroundColor:'white', paddingTop: 40}}>
            <div className="text-center" style={{marginBottom: 30}}>
                <div className="pleaser-title col-12 text-center mt-3">POPULAR BUILDS</div>
                <h4 className='my-2' style={{color:'#2f2f2f'}}>Order the perfect crowd-pleaser spread for any occasion <br/> 24 hours advance notice to order</h4>
            </div>
            <section>
                <div className="container-sm">
                    <div className="text-center">
                        <Row className="pb-5">
                            <Col md={3}>
                                <div>
                                    <MenuItemsCatering img={cat1} mealTittle="SIGNATURE" price='8' menu="Chiken Shawarma, Steak Shawarma, Falafel, Hummus, Mediterranean Salad, Turmeric Rice & OMG Sauces."/>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div>
                                    <MenuItemsCatering img={cat2} mealTittle="CLASSIC" price='5' menu="Chicken Kebob, Chicken Shawarma, Falafel, Hummus, Mediterranean Salad, Turmeric Rice & OMG Sauces." />
                                </div>
                            </Col>
                            <Col md={3}>
                                <div>
                                    <MenuItemsCatering img={cat3} mealTittle="VEGETARIAN" price='5' menu="Falafel, Grape Leaves, Hummus, Baba Ghanouj, Persion Yogurt, Mediterranean Salad, Tabbouli Salad, Okra Stew, Rice & OMG Sauces." />
                                </div>
                            </Col>
                            <Col md={3}>
                                <div>
                                    <MenuItemsCatering img={cat4} mealTittle="BOXED LUNCH" price='15' menu="Choice of Sandwich (Chicken Shawarma/ Chicken Kebob/ Steak Shawarma/ Falafel) Salad & Dessert." />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
            </div>
        </>
    )
}

export default Catering