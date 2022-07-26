import React, {useEffect, useState} from 'react'
import TopShelf from "./components/TopShelf"
import img from '../../../assets/images/images/image2.png'
import img2 from '../../../assets/images/images/images.jpg'
import NutrtionPrefModel from "./components/NutrtionPrefModel"
import MenuItem from "./components/MenuItem"
import SideOrderCounter from "./components/SideOrderCounter"
import {useDispatch} from "react-redux"
import {setCrmEmail} from "../../../redux/test/reducer"
import Header from "../../../shared/header/Header"
import Footer from "./components/Footer"
// import {useHistory} from "react-router-dom"

const Menu = (props) => {

    // const testData = useSelector(state => state.testReducer.testData)
    // const isLoading = useSelector(state => state.testReducer.isLoading)
    const dispatch = useDispatch()
    // const history = useHistory()

    const img = props.image

    const protein = [
        {
            image: img2,
            title: 'chicken Kebab',
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum ",
            price: 11.99
        },
        {
            image: img2,
            title: 'Lamb',
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum ",
            price: 14.99
        },
        {
            image: img2,
            title: 'Chicken Shawarma',
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum ",
            price: 11.99
        },
        {
            image: img2,
            title: 'Okra Stew',
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
            price: 11.99
        },
        {
            image: img2,
            title: 'Falafel',
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum ",
            price: 10.99
        },
        {
            image: img2,
            title: 'MeatBalls',
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
            price: 12.99
        },
        {
            image: img2,
            title: 'Fish',
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum and ",
            price: 14.99
        },
        {
            image: img2,
            title: 'Steak',
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
            price: 12.99
        }
    ]

    const Side = [
        {
            image: img2,
            title: 'Garlic Sauce',
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
            Price: 1.80
        },
        {
            image: img2,
            title: 'Baba Ghanoush',
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
            Price: 5.99
        },
        {
            image: img2,
            title: 'Red Hot Sauce',
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum and",
            Price: 7.80
        },
        {
            image: img2,
            title: 'Hummus',
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
            Price: 5.99
        },
        {
            image: img2,
            title: 'Zhoug Sauce',
            ingredient: "Integer ultrice an aligula lectus luctus neque a purus ipsum",
            Price: 2.30
        }
    ]

    const [currentItem, setCurrentItem] = useState('')
    const [arr, setArr] = useState([])

    useEffect(() => {
        console.log('arr', arr)
        dispatch(setCrmEmail([...arr]))
        // if (isLoading) {
        //
        // }

    }, [arr])


    const handleClick = (element) => {
        // dispatch(setCrmEmail({name: [element.title]}))
        console.log(element)
        setCurrentItem(element)
        if (arr.title === null) setArr(element)
        else setArr(arr => [...arr, element.title])

    }

    return (
        <>
            <Header/>
            {/*<Card style={{marginBottom: -50}}>*/}
            <div className="container-sm ">
                <TopShelf image={img} fooditem='Burritto'/>

                <hr className="text-primary"/>

                <NutrtionPrefModel/>

                <div className="container-sm">
                    <div className="container-sm">

                        <div className='text-center text-uppercase text-primary fw-bolder my-2'>
                            <h1 className="text-primary">Protein or Vegie</h1>
                            <h4 className="text-primary">Choose up to two</h4>
                        </div>

                        <div className="row">
                            {protein.map((element) => {
                                return <div className="col-lg-6" key={element.title}
                                            onClick={() => handleClick(element)}>
                                    <MenuItem foodImage={element.image} title={element.title} price={element.price}
                                              currentTitle={currentItem} ingredient={element.ingredient}/>
                                </div>
                            })}
                        </div>

                        <div className='text-center text-uppercase fw-bolder my-2'>
                            <h1 className="text-primary">Side</h1>
                        </div>
                        {/*<Button type='button' onClick={(e) => {*/}
                        {/*    e.preventDefault()*/}
                        {/*    history.push('home')*/}
                        {/*}}>gooooo</Button>*/}

                        <div className="row">
                            {Side.map((element) => {
                                return <div className="col-lg-6" key={element.title}
                                            onClick={() => handleClick(element)}>
                                    <SideOrderCounter foodImage={element.image} title={element.title}
                                                      price={element.Price} currentTitle={currentItem}
                                                      ingredient={element.ingredient}/>
                                </div>
                            })}
                        </div>

                    </div>
                </div>
            </div>
            {/*</Card>*/}
            <Footer/>
        </>
    )
}

export default Menu

Menu.defaultProps = {
    image: img
}