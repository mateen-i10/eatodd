import React from 'react'
import MenuItemsCatering from "./MenuItemsCatering"
import img from "../../../../assets/images/images/images.jpg"
import {Col, Row} from "reactstrap"

const Catering = () => {
    return (
        <>
            <div style={{backgroundColor:'white', paddingTop: 40}}>
            <div className="text-center" style={{marginBottom: 30}}>
                <h2 style={{color:'#81be41'}}>Popular Builds</h2>
                <h4 className='my-2' style={{color:'#81be41'}}>Order the perfect crowd-pleaser spread for ant occasion</h4>
                <h4 style={{color:'#81be41'}}>24 hours advance notice to order</h4>
            </div>
            <section>
                <div className="container-sm">
                    <div className="text-center">
                        <Row>
                            <Col md={3}>
                                <div>
                                    <MenuItemsCatering img={img} mealTittle="SIGNATURE" price='8' menu="Chiken Shawarma, Steak Shawarma, Falafel, Hummus, Mediterranean Salad, Turmeric Rice & OMG Sauces."/>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div>
                                    <MenuItemsCatering img={img} mealTittle="CLASSIC" price='5' menu="Chicken Kebob, Chicken Shawarma, Falafel, Hummus, Mediterranean Salad, Turmeric Rice & OMG Sauces." />
                                </div>
                            </Col>
                            <Col md={3}>
                                <div>
                                    <MenuItemsCatering img={img} mealTittle="VEGETARIAN" price='5' menu="Falafel, Grape Leaves, Hummus, Baba Ghanouj, Persion Yogurt, Mediterranean Salad, Tabbouli Salad, Okra Stew, Rice & OMG Sauces." />
                                </div>
                            </Col>
                            <Col md={3}>
                                <div>
                                    <MenuItemsCatering img={img} mealTittle="BOXED LUNCH" price='15' menu="Choice of Sandwich (Chicken Shawarma/ Chicken Kebob/ Steak Shawarma/ Falafel) Salad & Dessert." />
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