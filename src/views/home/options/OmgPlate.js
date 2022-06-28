import React, {useEffect, useState} from 'react'
import {Button, Card} from "reactstrap"
import TopShelf from "./components/TopShelf"
import img from '../../../assets/images/images/image2.png'
import img2 from '../../../assets/images/images/images.jpg'
import NutrtionPrefModel from "./components/NutrtionPrefModel"
import MenuItem from "./components/MenuItem"
import SideOrderCounter from "./components/SideOrderCounter"
import Footer from "./components/Footer"
import { useDispatch} from "react-redux"
import {setCrmEmail} from "../../../redux/test/reducer"
import Header from "../../../shared/header/Header"
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
            price: 11.99
        },
        {
            image: img2,
            title: 'Lamb',
            price: 14.99
        },
        {
            image: img2,
            title: 'Chicken Shawarma',
            price: 11.99
        },
        {
            image: img2,
            title: 'Okra Stew',
            price: 11.99
        },
        {
            image: img2,
            title: 'Falafel',
            price: 10.99
        },
        {
            image: img2,
            title: 'MeatBalls',
            price: 12.99
        },
        {
            image: img2,
            title: 'Fish',
            price: 14.99
        },
        {
            image: img2,
            title: 'Steak',
            price: 12.99
        }
    ]

    const Side = [
        {
            image: img2,
            title: 'Garlic Sauce',
            Price: 1.80
        },
        {
            image: img2,
            title: 'Baba Ghanoush',
            Price: 5.99
        },
        {
            image: img2,
            title: 'Red Hot Sauce',
            Price: 7.80
        },
        {
            image: img2,
            title: 'Hummus',
            Price: 5.99
        },
        {
            image: img2,
            title: 'Zhoug Sauce',
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
            <Header />
            <Card style={{marginBottom: -50}}>
                <div className="container">
                    <TopShelf image={img} fooditem='Burritto'/>

                    <hr style={{color:'black'}}/>

                    <NutrtionPrefModel />

                    <div className="container">
                        <div className="container">

                            <div className='text-center'>
                                <h1>Protein or Vegie</h1>
                                <h4>Choose up to two</h4>
                            </div>

                            <div className="row">
                                {protein.map((element) => {
                                    return <div className="col-md-6" key={element.title} onClick={() => handleClick(element)}>
                                        <MenuItem foodImage={element.image} title={element.title} price={element.price} currentTitle={currentItem} />
                                    </div>
                                })}
                            </div>

                            <div className='text-center'>
                                <h1>Side</h1>
                            </div>
                            {/*<Button type='button' onClick={(e) => {*/}
                            {/*    e.preventDefault()*/}
                            {/*    history.push('home')*/}
                            {/*}}>gooooo</Button>*/}

                            <div className="row">
                                {Side.map((element) => {
                                    return <div className="col-md-6" key={element.title} onClick={() => handleClick(element)}>
                                        <SideOrderCounter foodImage={element.image} title={element.title} price={element.price} currentTitle={currentItem} />
                                    </div>
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </Card>
            <Footer />
        </>
    )
}

export default Menu

Menu.defaultProps = {
    image: img
}