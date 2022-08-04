import React, {useState} from 'react'
import TopShelf from "./components/TopShelf"
import img from '../../../assets/images/images/image2.png'
import NutrtionPrefModel from "./components/NutrtionPrefModel"
import ProteinVege from "./components/ProteinVege"
import SideOrder from "./components/SideOrder"

import Header from "../../../shared/header/Header"
import Footer from "./components/Footer"
import Rice from "./components/Rice"
import Beans from "./components/Beans"
import Drinks from "./components/Drinks"
import ToppingThingOff from "./components/ToppingThingOff"


const Menu = (props) => {
    const [selectedProVeg, setSelectedProVeg] = useState([])
    const [doubled, setDoubled] = useState(false)
    const [selectedRice, setSelectedRice] = useState([])
    const [selectedBeans, setSelectedBeans] = useState([])
    const [selectedTopping, setSelectedTopping] = useState([])

    const img = props.image
    const proteinImage = require("../../../assets/images/Menu&Order/proteing.png").default
    const vegies = require("../../../assets/images/Menu&Order/veg.png").default
    const chips = require("../../../assets/images/Menu&Order/chips.png").default
    const drink1 = require("../../../assets/images/Menu&Order/drink1.png").default
    const drink2 = require("../../../assets/images/Menu&Order/drink2.png").default

    const protein = [
        {
            id: 1,
            title: 'chicken Kebab',
            image: proteinImage,
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum ",
            price: 11.99,
            single: false,
            half: false,
            doubled: false
        },
        {
            id: 2,
            title: 'Lamb',
            image: proteinImage,
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum ",
            price: 14.99,
            single: false,
            half: false,
            doubled: false
        },
        {
            id: 3,
            title: 'Chicken Shawarma',
            image: proteinImage,
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum ",
            price: 11.99,
            single: false,
            half: false,
            doubled: false
        },
        {
            id: 4,
            title: 'Okra Stew',
            image: proteinImage,
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
            price: 11.99,
            single: false,
            half: false,
            doubled: false
        },
        {
            id: 5,
            title: 'Falafel',
            image: proteinImage,
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum ",
            price: 10.99,
            single: false,
            half: false,
            doubled: false
        },
        {
            id: 6,
            title: 'MeatBalls',
            image: vegies,
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
            price: 12.99,
            single: false,
            half: false,
            doubled: false
        },
        {
            id: 7,
            title: 'Fish',
            image: vegies,
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum and ",
            price: 14.99,
            single: false,
            half: false,
            doubled: false
        },
        {
            id: 8,
            title: 'Steak',
            image: vegies,
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
            price: 12.99,
            single: false,
            half: false,
            doubled: false
        }
    ]

    const sideitems = [
        {
            image: chips,
            title: 'Garlic Sauce',
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
            Price: 1.80
        },
        {
            image: chips,
            title: 'Baba Ghanoush',
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
            Price: 5.99
        },
        {
            image: chips,
            title: 'Red Hot Sauce',
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum and",
            Price: 7.80
        },
        {
            image: chips,
            title: 'Hummus',
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
            Price: 5.99
        },
        {
            image: chips,
            title: 'Zhoug Sauce',
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
            Price: 2.30
        }
    ]

    const rice = [
        {
            id: 1,
            image: require("../../../assets/images/Menu&Order/whiteRice.png").default,
            title: 'White Rice',
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum"

        },
        {
            id: 2,
            image: require("../../../assets/images/Menu&Order/brownRice.png").default,
            title: 'Brown Rice',
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum"

        }
    ]

    const beans = [
        {
            id: 1,
            image: require("../../../assets/images/Menu&Order/blackBeans.png").default,
            title: 'Black Beans',
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum"

        },
        {
            id: 2,
            image: require("../../../assets/images/Menu&Order/PintoBeans.png").default,
            title: 'Pinto Beans',
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum"

        }
    ]

    const drinks = [
        {
            id: 1,
            title: 'Organic watermelon limeade',
            image: drink1,
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum ",
            price: 11.99,
            single: false,
            half: false,
            doubled: false
        },
        {
            id: 2,
            title: 'Organic Lemonade',
            image: drink1,
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum ",
            price: 14.99,
            single: false,
            half: false,
            doubled: false
        },
        {
            id: 3,
            title: 'organic mandarin agua fresca',
            image: drink2,
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum ",
            price: 11.99,
            single: false,
            half: false,
            doubled: false
        },
        {
            id: 4,
            title: 'organic berry agua fresca',
            image: drink1,
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
            price: 11.99,
            single: false,
            half: false,
            doubled: false
        },
        {
            id: 5,
            title: 'Fountain Drink',
            image: drink2,
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum ",
            price: 10.99,
            single: false,
            half: false,
            doubled: false
        },
        {
            id: 6,
            title: 'Maxican CocaCola',
            image: drink1,
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
            price: 12.99,
            single: false,
            half: false,
            doubled: false
        },
        {
            id: 7,
            title: 'Maxican Sprite',
            image: drink2,
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum and ",
            price: 14.99,
            single: false,
            half: false,
            doubled: false
        },
        {
            id: 8,
            title: 'Tractor organic black tea',
            image: drink1,
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
            price: 12.99,
            single: false,
            half: false,
            doubled: false
        }
    ]

    const toppings = [
        {
            id: 1,
            title: 'guacamule',
            image: proteinImage,
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum ",
            price: 11.99,
            customize: {
                normal: "normal",
                side: "side"
            }

        },
        {
            id: 2,
            title: 'Fresh Tomato Salsa',
            image: proteinImage,
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum ",
            price: 14.99
        },
        {
            id: 3,
            title: 'Roasted Chilli Corn Salsa',
            image: proteinImage,
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum ",
            price: 11.99

        },
        {
            id: 4,
            title: 'Tomatillo green chilli salsa',
            image: proteinImage,
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
            price: 11.99

        },
        {
            id: 5,
            title: 'Tomatillo Red chilli salsa',
            image: proteinImage,
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum ",
            price: 10.99

        },
        {
            id: 6,
            title: 'Sour Cream',
            image: vegies,
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
            price: 12.99

        },
        {
            id: 7,
            title: 'Fajita Veggies',
            image: vegies,
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum and ",
            price: 14.99

        },
        {
            id: 8,
            title: 'Chease',
            image: vegies,
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
            price: 12.99

        }
    ]


    const handleItemClick = (element) => {
        if (selectedProVeg.length === 2) {
            const rmSelected = selectedProVeg.filter(item => item.id !== element.id)

            setSelectedProVeg(rmSelected)

            // eslint-disable-next-line brace-style
        } else if (selectedProVeg.length === 1) {
            if (element.id === selectedProVeg[0].id) {
                selectedProVeg.pop()
            } else setSelectedProVeg([...selectedProVeg, {...element, single: true}])
            // eslint-disable-next-line brace-style
        } else setSelectedProVeg([...selectedProVeg, {...element, single: true}])

    }
    // console.log("selected bEans", selectedBeans)
    // console.log("selected Rice", selectedRice)
    const handleSelectedRice = (element) => {

        if (selectedRice.length === 1 && element.id === selectedRice[0].id) {
            const rmSelected = selectedRice.filter(item => item.id !== element.id)
            setSelectedRice(rmSelected)
            // eslint-disable-next-line brace-style
        } else if (selectedRice.length === 2) {
            const rmSelected = selectedRice.filter(item => item.id !== element.id)

            setSelectedRice(rmSelected)

            // eslint-disable-next-line brace-style
        } else setSelectedRice([...selectedRice, element])


    }

    const handleSelectedBeans = (element) => {

        if (selectedBeans.length === 1 && element.id === selectedBeans[0].id) {
            const rmSelected = selectedBeans.filter(item => item.id !== element.id)
            setSelectedBeans(rmSelected)
            // eslint-disable-next-line brace-style
        } else if (selectedBeans.length === 2) {
            const rmSelected = selectedBeans.filter(item => item.id !== element.id)
            setSelectedBeans(rmSelected)
            // eslint-disable-next-line brace-style
        } else setSelectedBeans([...selectedBeans, element])

    }

    console.log("selected Toppoing", selectedTopping)
    const handleSelectedTopping = (element) => {

        if (selectedTopping.length >= 1) {

            const filteredItem = selectedTopping.map(item => {
                if (element.id === item.id) {
                    return selectedTopping.filter(i => i.id !== item.id)
                }
            })
            setSelectedTopping(filteredItem)
        }

        setSelectedTopping([...selectedTopping, element])

        // if (selectedTopping.length > 0) {
        //     const filteredItem = selectedTopping.map(item => {
        //         if (item.id === element.id) {
        //             const rmSelected = selectedTopping.filter(item => item.id !== element.id)
        //             return rmSelected
        //         }
        //     })
        //     setSelectedTopping(filteredItem)
        // } else {
        //     setSelectedTopping([...selectedTopping, element])
        // }


    }

    return (
        <>
            <Header/>
            {/*<Card style={{marginBottom: -50}}>*/}
            <div className="container-sm ">
                <TopShelf image={img} fooditem='Burritto'/>
                <hr className="text-dark"/>
                <NutrtionPrefModel/>
                <div className="container-sm">
                    <div className="container-sm">
                        <div className='text-center text-uppercase text-primary fw-bolder my-2'>
                            <h1 className="text-primary">Protein or Vegie</h1>
                            <h4 className="text-dark">Choose up to two</h4>
                        </div>
                        <div className="row align-items-center justify-content-center ">
                            {protein.map((element) => {
                                return <div className="col-xl-5 col-lg-6" key={element.title}
                                >
                                    <ProteinVege
                                        itemId={element.id}
                                        element={element}
                                        foodImage={element.image}
                                        title={element.title}
                                        price={element.price}
                                        ingredient={element.ingredient}
                                        selectedProVeg={selectedProVeg}
                                        doubled={doubled}
                                        setDoubled={setDoubled}
                                        onItemClick={handleItemClick}
                                    />
                                </div>
                            })}
                        </div>
                        <div className='text-center text-uppercase text-primary fw-bolder my-2'>
                            <h1 className="text-primary">Rice</h1>

                        </div>
                        <div className="row align-items-center justify-content-center ">

                            {rice.map((element) => {
                                return <div className="col-xl-5 col-lg-6" key={element.id}
                                >
                                    <Rice
                                        element={element}
                                        foodImage={element.image}
                                        itemId={element.id}
                                        title={element.title}
                                        ingredient={element.ingredient}
                                        selectedRice={selectedRice}
                                        onRiceSelected={handleSelectedRice}

                                    />
                                </div>
                            })}
                        </div>
                        <div className='text-center text-uppercase text-primary fw-bolder my-2'>
                            <h1 className="text-primary">Beans</h1>
                        </div>
                        <div className="row align-items-center justify-content-center ">

                            {beans.map((element) => {
                                return <div className="col-xl-5 col-lg-6" key={element.id}
                                >
                                    <Beans
                                        element={element}
                                        foodImage={element.image}
                                        itemId={element.id}
                                        title={element.title}
                                        ingredient={element.ingredient}
                                        selectedBeans={selectedBeans}
                                        onBeanSelected={handleSelectedBeans}

                                    />
                                </div>
                            })}
                        </div>
                        <div className='text-center text-uppercase text-primary fw-bolder my-2'>
                            <h1 className="text-primary">Topping Thing Off</h1>
                        </div>
                        <div className="row align-items-center justify-content-center ">

                            {toppings.map((element) => {
                                return <div className="col-xl-5 col-lg-6" key={element.id}
                                >
                                    <ToppingThingOff
                                        element={element}
                                        itemId={element.id}
                                        foodImage={element.image}
                                        title={element.title}
                                        price={element.price}
                                        ingredient={element.ingredient}
                                        topppingAddOn={element.customize}
                                        onItemSelect={handleSelectedTopping}
                                        toppingItems={selectedTopping}
                                    />
                                </div>
                            })}
                        </div>
                        <div className='text-center text-uppercase fw-bolder my-2'>
                            <h1 className="text-primary">Side</h1>
                        </div>
                        <div className="row justify-content-center ">
                            {sideitems.map((element) => {
                                return <div className="col-xl-5 col-lg-6" key={element.title}
                                >
                                    <SideOrder
                                        foodImage={element.image}
                                        title={element.title}
                                        price={element.Price}
                                        ingredient={element.ingredient}
                                    />
                                </div>
                            })}
                        </div>
                        <div className='text-center text-uppercase fw-bolder my-2'>
                            <h1 className="text-primary">Drinks</h1>
                        </div>
                        <div className="row justify-content-center ">
                            {drinks.map((element) => {
                                return <div className="col-xl-5 col-lg-6" key={element.title}
                                >
                                    <Drinks
                                        foodImage={element.image}
                                        title={element.title}
                                        price={element.price}
                                        ingredient={element.ingredient}
                                    />
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Menu

Menu.defaultProps = {
    image: img
}