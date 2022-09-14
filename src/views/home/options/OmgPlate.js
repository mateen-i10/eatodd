import React, {useEffect, useState} from 'react'
import TopShelf from "./components/TopShelf"
import img from '../../../assets/images/images/image2.png'
import NutrtionPrefModel from "./components/NutrtionPrefModel"
import SideOrder from "./components/SideOrder"
import Header from "../../../shared/header/Header"
import Footer from "./components/Footer"
import Rice from "./components/Rice"
import Beans from "./components/Beans"
import Drinks from "./components/Drinks"
import {useHistory} from "react-router-dom"
import {addMealToCart} from "../../../utility/Utils"
import ProductDetail from "../components/product/ProductCard"
const Menu = (props) => {
    const [products, setProducts] = useState([])
    const [selectedProducts, setSelectedProducts] = useState([])
    const [selectedMenuItems, setSelectedMenuItems] = useState({})
    const [mealName, setMealName] = useState("")
    const history = useHistory()

    const img = props.image
    const vegies = require("../../../assets/images/Menu&Order/veg.png").default
    const drink1 = require("../../../assets/images/Menu&Order/drink1.png").default
    const drink2 = require("../../../assets/images/Menu&Order/drink2.png").default

    // hooks
    useEffect(() => {
        setProducts([
            {
                id: 1,
                name: 'Protein or Veggie',
                fillingLimit: 2,
                products : [
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
                    }
                ]
            }, {
                id: 2,
                name: 'Rice',
                fillingLimit: 1,
                products : [
                    {
                        id: 9,
                        image: require("../../../assets/images/eatOmg pics 100size/White Rice.jpg").default,
                        name: 'White Rice',
                        description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                        price: 14.99,
                        optionType: 1,
                        options: [{id: 1, name: 'Normal'}, {id: 2, name: 'Extra'}, {id: 3, name: 'Large'}, {id: 4, name: 'Side'}]
                    },
                    {
                        id: 10,
                        image: require("../../../assets/images/eatOmg pics 100size/yellow rice.jpg").default,
                        name: 'Brown Rice',
                        description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                        optionType: 1,
                        options: [{id: 1, name: 'Normal'}, {id: 2, name: 'Extra'}, {id: 3, name: 'Large'}, {id: 4, name: 'Side'}]
                    }
                ]
            }, {
                id: 3,
                name: 'Beans',
                fillingLimit: 1,
                products : [
                    {
                        id: 11,
                        image: require("../../../assets/images/eatOmg pics 100size/chickpea option.jpg").default,
                        name: 'Chick Pea',
                        description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                        optionType: 1,
                        options: [{id: 1, name: 'Normal'}, {id: 2, name: 'Extra'}, {id: 3, name: 'Large'}, {id: 4, name: 'Side'}]
                    },
                    {
                        id: 12,
                        image: require("../../../assets/images/eatOmg pics 100size/Tabboili.jpg").default,
                        name: 'Tebboili',
                        description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                        optionType: 1,
                        options: [{id: 1, name: 'Normal'}, {id: 2, name: 'Extra'}, {id: 3, name: 'Large'}, {id: 4, name: 'Side'}]
                    }
                ]
            }, {
                id: 4,
                name: 'Topping Thing Off HEALTHY SPREAD',
                fillingLimit: 1,
                products : [
                    {
                        id: 13,
                        name: 'baba ganoush',
                        image: require("../../../assets/images/eatOmg pics 100size/Baba G.jpg").default,
                        description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                        optionType: 1,
                        options: [{id: 1, name: 'Normal'}, {id: 2, name: 'Extra'}]

                    },
                    {
                        id: 14,
                        name: 'Persian Yogurt',
                        image: require("../../../assets/images/eatOmg pics 100size/Persian Yogurt.jpg").default,
                        description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                        optionType: 1,
                        options: [{id: 1, name: 'Normal'}, {id: 2, name: 'Extra'}]
                    },
                    {
                        id: 15,
                        name: "Hummus",
                        image: require("../../../assets/images/eatOmg pics 100size/hummus.jpg").default,
                        description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                        optionType: 1,
                        options: [{id: 1, name: 'Normal'}, {id: 2, name: 'Extra'}]

                    },
                    {
                        id: 16,
                        name: 'Roasted Red Papper Dip',
                        image: require("../../../assets/images/eatOmg pics 100size/Hot Sauce.jpg").default,
                        description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                        optionType: 1,
                        options: [{id: 1, name: 'Normal'}, {id: 2, name: 'Extra'}]
                    },
                    {
                        id: 17,
                        name: 'lebneh',
                        image: require("../../../assets/images/eatOmg pics 100size/Hot Sauce.jpg").default,
                        description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                        optionType: 1,
                        options: [{id: 1, name: 'Normal'}, {id: 2, name: 'Extra'}]
                    },
                    {
                        id: 18,
                        name: 'Sour Cream',
                        image: vegies,
                        description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                        optionType: 1,
                        options: [{id: 1, name: 'Normal'}, {id: 2, name: 'Extra'}]
                    }

                ]
            }, {
                id: 5,
                name: 'Side',
                fillingLimit: 1,
                products : [
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
                    }
                ]
            }, {
                id: 6,
                name: 'Drinks',
                fillingLimit: 1,
                products : [
                    {
                        id: 24,
                        title: 'Organic watermelon limeade',
                        image: drink1,
                        price: 14.99,
                        description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                        optionType: 2,
                        options: [{id: 1, name: '32L OZ', price: 3.75}, {id: 1, name: '22L OZ', price: 2.75}]
                    },
                    {
                        id: 25,
                        title: 'Organic Lemonade',
                        image: drink1,
                        price: 14.99,
                        description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                        optionType: 2,
                        options: [{id: 1, name: '32L OZ', price: 3.75}, {id: 1, name: '22L OZ', price: 2.75}, {id: 1, name: '22L OZ', price: 2.75}]
                    },
                    {
                        id: 26,
                        title: 'organic mandarin agua fresca',
                        image: drink2,
                        price: 14.99,
                        description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                        optionType: 2,
                        options: [{id: 1, name: '32L OZ', price: 3.75}, {id: 1, name: '22L OZ', price: 2.75}]
                    },
                    {
                        id: 27,
                        title: 'organic berry agua fresca',
                        image: drink1,
                        price: 14.99,
                        description: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
                        optionType: 2,
                        options: [{id: 1, name: '32L OZ', price: 3.75}, {id: 1, name: '22L OZ', price: 2.75}]
                    }
                ]
            }
        ])
    }, [])

    const handleAllMenuItems = () => {
        setSelectedMenuItems({
            ...selectedMenuItems,
            mealName,
           selectedProducts
        })
    }
    const dispatchingItems = () => {
        const meal = {
            mealName,
            selectedProducts
        }
        addMealToCart(meal)
        history.push('/home')
    }

    const handleSelectProduct = (product) => {
        //changed after api implementation
        setSelectedProducts([...selectedProducts, product])
    }

    const subcategoryMenu = (heading, limit, products) => (
        <>
            <div className='text-center text-uppercase text-primary fw-bolder my-2'>
            <h1 className="text-primary">{heading}</h1>
            {limit && limit > 1 && <h4 className="text-dark">Choose up to {limit}</h4>}
        </div>
            <div className="row align-items-center justify-content-center ">
            {products.map((element) => {
            return <div className="col-xl-5 col-lg-6" key={`productDetail-${element.id}`}
            >
                <ProductDetail
                    item={element}
                    imgURL={element.image}
                    selectedItems={selectedProducts}
                    onItemClick={handleSelectProduct}
                    limit={limit}
                />
            </div>
        })}
    </div>
        </>
    )
    return (
        <>
            <Header/>
            <div className="container-sm ">
                <TopShelf image={img} fooditem='Burritto'/>
                <hr className="text-dark"/>
                <NutrtionPrefModel/>
                <div className="container-sm">
                    <div className="container-sm">
                        {products && products.length > 0 && products.map(prod => {
                            return subcategoryMenu(prod.name, prod.fillingLimit, prod.products)
                        })}
                    </div>
                </div>
            </div>
            <Footer
                mealName={mealName}
                addToBag={handleAllMenuItems}
                dispatchingItems={dispatchingItems}
                setMealName={setMealName}
            />
        </>
    )
}
export default Menu

Menu.defaultProps = {
    image: img
}
