import React, {useState} from 'react'
import TopShelf from "./components/TopShelf"
import img from '../../../assets/images/images/image2.png'
import NutrtionPrefModel from "./components/NutrtionPrefModel"
import MenuItem from "./components/MenuItem"
import SideOrderCounter from "./components/SideOrderCounter"

import Header from "../../../shared/header/Header"
import Footer from "./components/Footer"


const Menu = (props) => {

    const img = props.image
    const proteinImage = require("../../../assets/images/Menu&Order/proteing.png").default
    const vegies = require("../../../assets/images/Menu&Order/veg.png").default
    const chips = require("../../../assets/images/Menu&Order/chips.png").default

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

    const Side = [
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

    const [currentItem, setCurrentItem] = useState('')
    const [selectedProVeg, setSelectedProVeg] = useState([])
    const [doubled, setDoubled] = useState(false)


    const handleItemClick = (element) => {
        if (selectedProVeg.length === 2) {
            const rmSelected = selectedProVeg.filter(item => item.id !== element.id)
            // const selectedItems = rmSelected.map(item => ({...item, single: false, half: true}))

            setSelectedProVeg(rmSelected)

            // eslint-disable-next-line brace-style
        } else if (selectedProVeg.length === 1) {
            if (element.id === selectedProVeg[0].id) {
                selectedProVeg.pop()
            } else setSelectedProVeg([...selectedProVeg, {...element, single: true}])
            // eslint-disable-next-line brace-style
        } else setSelectedProVeg([...selectedProVeg, {...element, single: true}])

        setCurrentItem(element)

    }
    const handleSidItemClicked = (element) => {
        console.log("side item clicked", element)
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
                                    <MenuItem
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
                        <div className='text-center text-uppercase fw-bolder my-2'>
                            <h1 className="text-primary">Side</h1>
                        </div>
                        <div className="row justify-content-center ">
                            {Side.map((element) => {
                                return <div className="col-xl-5 col-lg-6" key={element.title}
                                >
                                    <SideOrderCounter
                                        element={element}
                                        foodImage={element.image}
                                        title={element.title}
                                        price={element.Price}
                                        currentTitle={currentItem}
                                        ingredient={element.ingredient}
                                        onSideItemClicked={handleSidItemClicked}/>
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