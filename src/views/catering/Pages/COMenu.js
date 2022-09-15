import React, {useEffect, useState} from 'react'
import TopShelf from "../../home/options/components/TopShelf"
import Header from "../../../shared/header/Header"
import Footer from "../../../shared/footer/Footer"
import {default as vegies} from "../../../assets/images/Menu&Order/veg.png"
import {default as drink1} from "../../../assets/images/Menu&Order/drink1.png"
import {default as drink2} from "../../../assets/images/Menu&Order/drink2.png"
import CatMenuItems from "../components/CatMenuItems"

const COMenu = () => {
    const [products, setProducts] = useState([])

    const menuName = "Catering Order"
    const img = require("../../../assets/images/images/image2.png").default

    useEffect(() => {
        setProducts([
            {
                id: 1,
                name: 'chicken Kebab',
                image: require("../../../assets/images/eatOmg pics 100size/Chicken Kebob.jpg").default,
                description: "Integer ultrice an aligula lectus luctus neque a purus ipsum ",
                price: 11.99,
                optionType: 1,
                options: [{id: 1, name: 'Normal', price: 222}, {id: 2, name: 'Double', price: 227}]
            },
            {
                id: 2,
                name: 'Lamb',
                image: require("../../../assets/images/eatOmg pics 100size/Lamb Sandwich.jpg").default,
                description: "Integer ultrice an aligula lectus luctus neque a purus ipsum ",
                price: 14.99,
                optionType: 1,
                options: [{id: 1, name: 'Normal', price: 222}, {id: 2, name: 'Double', price: 227}]
            },
            {
                id: 3,
                name: 'Chicken Shawarma',
                image: require("../../../assets/images/eatOmg pics 100size/Chicken Shawarma.jpg").default,
                description: "Integer ultrice an aligula lectus luctus neque a purus ipsum ",
                price: 11.99,
                optionType: 1,
                options: [{id: 1, name: 'Normal', price: 222}, {id: 2, name: 'Double', price: 227}]
            },
            {
                id: 4,
                name: 'Okra Stew',
                image: require("../../../assets/images/eatOmg pics 100size/Okra Stew.jpg").default,
                description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                price: 11.99,
                optionType: 1,
                options: [{id: 1, name: 'Normal', price: 222}, {id: 2, name: 'Double', price: 227}]
            },
            {
                id: 5,
                name: 'Falafel',
                image: require("../../../assets/images/eatOmg pics 100size/Falafel.jpg").default,
                description: "Integer ultrice an aligula lectus luctus neque a purus ipsum ",
                price: 10.99,
                optionType: 1,
                options: [{id: 1, name: 'Normal', price: 222}, {id: 2, name: 'Double', price: 227}]
            },
            {
                id: 6,
                name: 'MeatBalls',
                image: require("../../../assets/images/eatOmg pics 100size/Turkish Meatballs.jpg").default,
                description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                price: 12.99,
                optionType: 1,
                options: [{id: 1, name: 'Normal', price: 222}, {id: 2, name: 'Double', price: 227}]
            },
            {
                id: 7,
                name: 'Fish',
                image: require("../../../assets/images/eatOmg pics 100size/Beef Dish.jpg").default,
                description: "Integer ultrice an aligula lectus luctus neque a purus ipsum and ",
                price: 14.99,
                optionType: 1,
                options: [{id: 1, name: 'Normal', price: 222}, {id: 2, name: 'Double', price: 227}]
            },
            {
                id: 8,
                name: 'Steak',
                image: require("../../../assets/images/eatOmg pics 100size/Steak Kabsa.jpg").default,
                description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                price: 12.99,
                optionType: 1,
                options: [{id: 1, name: 'Normal', price: 222}, {id: 2, name: 'Double', price: 227}]
            },
            {
                id: 9,
                image: require("../../../assets/images/eatOmg pics 100size/White Rice.jpg").default,
                name: 'White Rice',
                description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                price: 14.99,
                optionType: 1,
                options: [
                    {id: 1, name: 'Normal'}, {id: 2, name: 'Extra'}, {id: 3, name: 'Large'}, {
                        id: 4,
                        name: 'Side'
                    }
                ]
            },
            {
                id: 10,
                image: require("../../../assets/images/eatOmg pics 100size/yellow rice.jpg").default,
                name: 'Brown Rice',
                description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                price: 14.99,
                optionType: 1,
                options: [
                    {id: 1, name: 'Normal'}, {id: 2, name: 'Extra'}, {id: 3, name: 'Large'}, {
                        id: 4,
                        name: 'Side'
                    }
                ]
            },
            {
                id: 11,
                image: require("../../../assets/images/eatOmg pics 100size/chickpea option.jpg").default,
                name: 'Chick Pea',
                description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                price: 14.99,
                optionType: 1,
                options: [
                    {id: 1, name: 'Normal'}, {id: 2, name: 'Extra'}, {id: 3, name: 'Large'}, {
                        id: 4,
                        name: 'Side'
                    }
                ]
            },
            {
                id: 12,
                image: require("../../../assets/images/eatOmg pics 100size/Tabboili.jpg").default,
                name: 'Tebboili',
                description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                price: 14.99,
                optionType: 1,
                options: [
                    {id: 1, name: 'Normal'}, {id: 2, name: 'Extra'}, {id: 3, name: 'Large'}, {
                        id: 4,
                        name: 'Side'
                    }
                ]
            },
            {
                id: 13,
                name: 'baba ganoush',
                image: require("../../../assets/images/eatOmg pics 100size/Baba G.jpg").default,
                description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                price: 14.99,
                optionType: 1,
                options: [{id: 1, name: 'Normal'}, {id: 2, name: 'Extra'}]

            },
            {
                id: 14,
                name: 'Persian Yogurt',
                image: require("../../../assets/images/eatOmg pics 100size/Persian Yogurt.jpg").default,
                description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                price: 14.99,
                optionType: 1,
                options: [{id: 1, name: 'Normal'}, {id: 2, name: 'Extra'}]
            },
            {
                id: 15,
                name: "Hummus",
                image: require("../../../assets/images/eatOmg pics 100size/hummus.jpg").default,
                description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                price: 14.99,
                optionType: 1,
                options: [{id: 1, name: 'Normal'}, {id: 2, name: 'Extra'}]

            },
            {
                id: 16,
                name: 'Roasted Red Papper Dip',
                image: require("../../../assets/images/eatOmg pics 100size/Hot Sauce.jpg").default,
                description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                price: 14.99,
                optionType: 1,
                options: [{id: 1, name: 'Normal'}, {id: 2, name: 'Extra'}]
            },
            {
                id: 17,
                name: 'lebneh',
                image: require("../../../assets/images/eatOmg pics 100size/Hot Sauce.jpg").default,
                description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                price: 14.99,
                optionType: 1,
                options: [{id: 1, name: 'Normal'}, {id: 2, name: 'Extra'}]
            },
            {
                id: 18,
                name: 'Sour Cream',
                image: vegies,
                description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                price: 14.99,
                optionType: 1,
                options: [{id: 1, name: 'Normal'}, {id: 2, name: 'Extra'}]
            },
            {
                id: 19,
                image: require("../../../assets/images/eatOmg pics 100size/Tahini Sauce.jpg").default,
                name: 'Garlic Sauce',
                price: 3.80,
                description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                optionType: 2,
                options: [{id: 1, name: 'Normal'}]
            },
            {
                id: 20,
                image: require("../../../assets/images/eatOmg pics 100size/Baba G.jpg").default,
                name: 'Baba Ghanoush',
                price: 5.99,
                description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                optionType: 2,
                options: [{id: 1, name: 'Normal'}]

            },
            {
                id: 21,
                image: require("../../../assets/images/eatOmg pics 100size/Hot Sauce.jpg").default,
                name: 'Red Hot Sauce',
                price: 7.80,
                description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                optionType: 2,
                options: [{id: 1, name: 'Normal'}]
            },
            {
                id: 22,
                image: require("../../../assets/images/eatOmg pics 100size/hummus.jpg").default,
                name: 'Hummus',
                price: 5.99,
                description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                optionType: 2,
                options: [{id: 1, name: 'Normal'}]
            },
            {
                id: 23,
                image: require("../../../assets/images/eatOmg pics 100size/Tahini Sauce.jpg").default,
                name: 'Zhoug Sauce',
                price: 6.30,
                description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                optionType: 2,
                options: [{id: 1, name: 'Normal'}]
            },
            {
                id: 24,
                name: 'Organic watermelon limeade',
                image: drink1,
                price: 14.99,
                description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                optionType: 2,
                options: [{id: 1, name: '32L OZ', price: 3.75}, {id: 1, name: '22L OZ', price: 2.75}]
            },
            {
                id: 25,
                name: 'Organic Lemonade',
                image: drink1,
                price: 14.99,
                description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                optionType: 2,
                options: [
                    {id: 1, name: '32L OZ', price: 3.75}, {id: 1, name: '22L OZ', price: 2.75}, {
                        id: 1,
                        name: '22L OZ',
                        price: 2.75
                    }
                ]
            },
            {
                id: 26,
                name: 'organic mandarin agua fresca',
                image: drink2,
                price: 14.99,
                description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                optionType: 2,
                options: [{id: 1, name: '32L OZ', price: 3.75}, {id: 1, name: '22L OZ', price: 2.75}]
            },
            {
                id: 27,
                name: 'organic berry agua fresca',
                image: drink1,
                price: 14.99,
                description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                optionType: 2,
                options: [{id: 1, name: '32L OZ', price: 3.75}, {id: 1, name: '22L OZ', price: 2.75}]
            }
        ])
    }, [])

    console.log(products)
    return (
        <div>
            <Header/>
            <div className="container-sm ">
                <TopShelf image={img} fooditem={menuName}/>
                <hr className="text-dark"/>
            </div>
            <div className="container-sm mt-5 mb-4">
                <div className="row align-items-center justify-content-center">
                    {products.map((product) => (
                        <div className="col-9 col-xl-5" key={product.id}>
                            <CatMenuItems product={product}/>
                        </div>
                    ))}
                </div>
            </div>


            <Footer/>
        </div>
    )
}

export default COMenu
