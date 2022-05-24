import React, {useState} from 'react'
import img1 from '../../../assets/images/my-images/background.jpg'
import img2 from '../../../assets/images/foodItems/kebab.jpg'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Input} from 'reactstrap'
import {CheckCircle, Plus, Minus, List, MoreVertical, X} from 'react-feather'
import './components/Plate.css'
import FoodItemAdder from "./components/FoodItemAdder"
import FoodCheckItem from "./components/FoodCheckItem"

const Plate = () => {
    const [basicModal, setBasicModal] = useState(false)
    const [basicNameFoodModal, setBasicNameFoodModal] = useState(false)
    const [plantBased, SetplantBased] = useState(0)
    const [lifeStyle, SetLifeStyle] = useState(0)
    const [avoiding, SetAvoiding] = useState(0)

    const [riceQuantity, SetriceQuantity] = useState('')
    const [increment, SetIncrement] = useState('')

    const [protienQuantity, SetProteinQuantity] = useState('')

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

    const Rice = [
        {
            image:  img2,
            title: 'White Rice',
            cal: 210
        },
        {
            image:  img2,
            title: 'Brown Rice',
            cal: 210
        },
        {
            title: 'No Rice'
        }
    ]

    const Beans = [
        {
            image: img2,
            title: 'Black Beans',
            cal: 130
        },
        {
            image: img2,
            title: 'Pinto Beans',
            cal: 130
        },
        {
            title: 'No Beans'
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

    const handlePlantBased1 = () => {
        console.log("the vegan button is being clicked on")

        if (plantBased === 0) {
            SetplantBased(1)
        } else if (plantBased === 1) {
            SetplantBased(0)
        } else if (plantBased === 2) {
            SetplantBased(1)
        }
    }

    const handlePlantBased2 = () =>  {
        if (plantBased === 0) {
            SetplantBased(2)
        } else if (plantBased === 2) {
            SetplantBased(0)
        } else if (plantBased === 1) {
            SetplantBased(2)
        }
    }

    const handleLifeStyle1 = () => {
        if (lifeStyle === 0) {
            SetLifeStyle(1)
        } else if (lifeStyle === 1) {
            SetLifeStyle(0)
        } else if (lifeStyle === 2) {
            SetLifeStyle(1)
        } else if (lifeStyle === 3) {
            SetLifeStyle(1)
        }
    }

    const handleLifeStyle2 = () => {
        if (lifeStyle === 0) {
            SetLifeStyle(2)
        } else if (lifeStyle === 1) {
            SetLifeStyle(2)
        } else if (lifeStyle === 2) {
            SetLifeStyle(0)
        } else if (lifeStyle === 3) {
            SetLifeStyle(2)
        }
    }

    const handleLifeStyle3 = () => {
        if (lifeStyle === 0) {
            SetLifeStyle(3)
        } else if (lifeStyle === 1) {
            SetLifeStyle(3)
        } else if (lifeStyle === 2) {
            SetLifeStyle(3)
        } else if (lifeStyle === 3) {
            SetLifeStyle(0)
        }
    }

    const handleAvoiding1 = () => {
        if (avoiding === 0) {
            SetAvoiding(1)
        } else if (avoiding === 1) {
            SetAvoiding(0)
        } else if (avoiding === 2) {
            SetAvoiding(1)
        } else if (avoiding === 3) {
            SetAvoiding(1)
        } else if (avoiding === 4) {
            SetAvoiding(1)
        }
    }

    const handleAvoiding2 = () => {
        if (avoiding === 0) {
            SetAvoiding(2)
        } else if (avoiding === 1) {
            SetAvoiding(2)
        } else if  (avoiding === 2) {
            SetAvoiding(0)
        } else if (avoiding === 3) {
            SetAvoiding(2)
        } else if (avoiding === 4) {
            SetAvoiding(2)
        }
    }

    const handleAvoiding3 = () => {
        if (avoiding === 0) {
            SetAvoiding(3)
        } else if (avoiding === 1) {
            SetAvoiding(3)
        } else if  (avoiding === 2) {
            SetAvoiding(3)
        } else if (avoiding === 3) {
            SetAvoiding(0)
        } else if (avoiding === 4) {
            SetAvoiding(3)
        }
    }

    const handleAvoiding4 = () => {
        if (avoiding === 0) {
            SetAvoiding(4)
        } else if (avoiding === 1) {
            SetAvoiding(4)
        } else if  (avoiding === 2) {
            SetAvoiding(4)
        } else if (avoiding === 3) {
            SetAvoiding(4)
        } else if (avoiding === 4) {
            SetAvoiding(0)
        }
    }

    const RenderMealNameModal = () => {
        return (
            <div className='basic-modal'>
                <Modal isOpen={basicNameFoodModal} toggle={() => setBasicNameFoodModal(!basicNameFoodModal)}>
                    <div toggle={() => setBasicNameFoodModal(!basicNameFoodModal)} className='name-meal-model' ><p>give this meal a name</p></div>
                    <ModalBody>
                        <div className='col-8' style={{marginLeft:80}}>
                            <Input type='text' placeholder='Enter Meal Name' style={{color:'#451400'}} />
                        </div>
                    </ModalBody>
                    <ModalFooter style={{justifyContent:'center', marginBottom:20, marginTop:30}}>
                        <Button color='primary' onClick={() => setBasicNameFoodModal(!basicNameFoodModal)}>
                            Cancel
                        </Button>
                        <Button color='primary' onClick={() => setBasicNameFoodModal(!basicNameFoodModal)}>
                            Save
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

    const RenderModal = () => {
        return (
            <div className='basic-modal'>
                <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)}>
                    <h1 className="modal-head">
                        Nutrition Preferences
                        <X className='close-modal-button' onClick={() => setBasicModal(!basicModal)} />
                    </h1>
                    <hr/>
                    <ModalBody style={{paddingRight:50, paddingLeft:50}}>
                        <h5 style={{color:"#451400"}}>Set these tags for now or Sign In to keep them saved for later.</h5>
                        <div style={{display:'flex', marginTop:20}}>
                            <div className='badge rounded-pill' style={{backgroundColor:'#6e7c1b'}} >
                                V
                            </div>
                            <div style={{color: '#6e7c1b', marginLeft:10}}>Plant based</div>
                        </div>
                        <div style={{marginTop:10}}>
                            <div className="badge rounded-pill" onClick={handlePlantBased1} style={plantBased === 1 ? {border:'solid', borderWidth:1, borderColor: '#6e7c1b', backgroundColor: '#6e7c1b', color:'white'} : {border:'solid', borderWidth:1, borderColor: '#6e7c1b', color: '#6e7c1b'}}>
                                Vegetarian
                            </div>
                            <div className="badge rounded-pill" onClick={handlePlantBased2} style={plantBased === 2 ? {border:'solid', borderWidth:1, borderColor: '#6e7c1b', backgroundColor: '#6e7c1b', color:'white', marginLeft:10, marginBottom: 10} : {border:'solid', borderWidth:1, borderColor: '#6e7c1b', color: '#6e7c1b', marginLeft:10, marginBottom: 10}}>
                                Vegan
                            </div>
                        </div>

                        <div style={{display:'flex', marginTop:10}}>
                            <div className='badge rounded-pill' style={{backgroundColor: '#786259'}}>
                                L
                            </div>
                            <div style={{color: '#786259', marginLeft:10}}>Lifestyle</div>
                        </div>
                        <div style={{marginTop:10}}>
                            <div className="badge rounded-pill" onClick={handleLifeStyle1} style={lifeStyle === 1 ? {border:'solid', borderWidth:1, borderColor: '#786259', backgroundColor: '#786259', color: 'white'} : {border:'solid', borderWidth:1, borderColor: '#786259', color: '#786259'}}>
                                Paleo
                            </div>
                            <div className="badge rounded-pill" onClick={handleLifeStyle2} style={lifeStyle === 2 ? {border:'solid', borderWidth:1, borderColor: '#786259', backgroundColor: '#786259', marginLeft:10, marginBottom: 10, color: 'white'} : {border:'solid', borderWidth:1, borderColor: '#786259', color: '#786259', marginLeft:10, marginBottom: 10}}>
                                Keto
                            </div>
                            <div className="badge rounded-pill" onClick={handleLifeStyle3} style={lifeStyle === 3 ? {border:'solid', borderWidth:1, borderColor: '#786259', backgroundColor: '#786259', color:'white', marginLeft:10, marginBottom: 10} : {border:'solid', borderWidth:1, borderColor: '#786259', color: '#786259', marginLeft:10, marginBottom: 10}}>
                                Whole30
                            </div>
                        </div>
                        <div style={{display:'flex', marginTop:10}}>
                            <div className='badge rounded-pill' style={{backgroundColor:'#ad2118'}}>
                                !
                            </div>
                            <div style={{color: '#ad2118', marginLeft:10}}>I'm Avoiding</div>
                        </div>

                        <h6 style={{marginTop:10, color:'#786259'}}>Tagged items contain your selection.</h6>

                        <div style={{marginTop:10, marginBottom:20}}>
                            <div className="badge rounded-pill" onClick={handleAvoiding1} style={avoiding === 1 ? {border:'solid', borderWidth:1, borderColor: '#ad2118', backgroundColor: '#ad2118', color:'white'} : {border:'solid', borderWidth:1, borderColor: '#ad2118', color: '#ad2118'}}>
                                Gluten
                            </div>
                            <div className="badge rounded-pill" onClick={handleAvoiding2} style={avoiding === 2 ? {border:'solid', borderWidth:1, borderColor: '#ad2118', backgroundColor: '#ad2118', color:'white', marginLeft:10, marginBottom: 10} : {border:'solid', borderWidth:1, borderColor: '#ad2118', color: '#ad2118', marginLeft:10, marginBottom: 10}}>
                                Dairy
                            </div>
                            <div className="badge rounded-pill" onClick={handleAvoiding3} style={avoiding === 3 ? {border:'solid', borderWidth:1, borderColor: '#ad2118', backgroundColor: '#ad2118', color:'white', marginLeft:10, marginBottom: 10} : {border:'solid', borderWidth:1, borderColor: '#ad2118', color: '#ad2118', marginLeft:10, marginBottom: 10}}>
                                Soy
                            </div>
                            <div className="badge rounded-pill" onClick={handleAvoiding4} style={avoiding === 4 ? {border:'solid', borderWidth:1, borderColor: '#ad2118', backgroundColor: '#ad2118', color:'white', marginLeft:10, marginBottom: 10} :  {border:'solid', borderWidth:1, borderColor: '#ad2118', color: '#ad2118', marginLeft:10, marginBottom: 10}}>
                                Sulphites
                            </div>
                        </div>

                        <h5 style={{color:'#786259'}}>We do not use eggs, mustard, peanuts, tree nuts, sesame, shellfish, or fish as ingredients.</h5>
                    </ModalBody>
                    <ModalFooter style={{justifyContent:'center'}}>
                        <button style={{backgroundColor:'#451400', color : 'white', alignText: 'center', paddingLeft: 60, paddingRight: 60, paddingTop:10, paddingBottom:10, marginBottom: 30}} onClick={() => setBasicModal(!basicModal)}>
                            Apply
                        </button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

    const handleRiceSectionClick = (e) => {
        if (riceQuantity === '') {
            SetriceQuantity(e.title)
        } else if (riceQuantity === 'White Rice') {
            SetriceQuantity(e.title)
        } else if (riceQuantity === 'Brown Rice') {
            SetriceQuantity(e.title)
        } else if (riceQuantity === 'No Rice') {
            SetriceQuantity(e.title)
        }
    }

    const ProteinQuantity = (e) => {
        if (protienQuantity === '') {
            SetProteinQuantity(e.title)

        } else if (protienQuantity === 'chicken Kebab') {
            SetProteinQuantity(e.title)

        } else if (protienQuantity === 'Lamb') {
            SetProteinQuantity(e.title)

        } else if (protienQuantity === 'Chicken Shawarma') {
            SetProteinQuantity(e.title)

        } else if (protienQuantity === 'Okra Stew') {
            SetProteinQuantity(e.title)

        } else if (protienQuantity === 'Falafel') {
            SetProteinQuantity(e.title)

        } else if (protienQuantity === 'MeatBalls') {
            SetProteinQuantity(e.title)

        } else if (protienQuantity === 'Fish') {
            SetProteinQuantity(e.title)

        } else if (protienQuantity === 'Steak') {
            SetProteinQuantity(e.title)
        }
    }

    const handleSideSectionClick = (e) => {
        if (e.title === 'Garlic Sauce') {
            SetIncrement('Garlic Sauce')
        } else if (e.title === 'Baba Ghanoush') {
            SetIncrement('Baba Ghanoush')
        } else if (e.title === 'Red Hot Sauce') {
            SetIncrement('Red Hot Sauce')
        } else if (e.title === 'Hummus') {
            SetIncrement('Hummus')
        } else if (e.title === 'Zhoug Sauce') {
            SetIncrement('Zhoug Sauce')
        }
    }

    return (
        <div style={{backgroundColor: 'white'}}>
            <div className="container">
                <div className="row" style={{marginBottom: 60}}>
                    <div className="col" style={{marginTop:30}}>
                        <img src={img1} width={500} height={300}/>
                    </div>
                    <div className="col intro-para-container">
                        <h5 className='intro-para' style={{ color: '#786259'}}>Build your</h5>
                        <h1 className='intro-para' style={{fontSize:'4em', color: '#451400', marginTop:-2}}>Burritto</h1>
                        <p style={{color: '#451400'}}>Your choice of freshly grilled meat or sofritas served in a delicious bowl with rice, beans, or fajita veggies, and topped with guac, salsa, queso blanco, sour cream or cheese.</p>
                    </div>
                </div>

                <hr style={{color:'black'}} />

                <div className="container" style={{paddingLeft: 115}}>
                    <div className="row">
                        <div className="col section-area-heading">
                            <h1>Protein or vegie</h1>
                            <h6>Choose up to two</h6>
                        </div>
                        <div className="col" style={{textAlign:'right'}}>
                            <h5 style={{textTransform: 'uppercase', color: '#a77821', fontWeight: 'bolder'}}>Nutrtion Preferences <List onClick={() => setBasicModal((!basicModal))} color='#a77821' /></h5>
                        </div>
                    </div>
                </div>

                {protienQuantity.length !== 0 ? (
                    <FoodCheckItem proteinName={protienQuantity} />
                ) : []}

                <div className="container" style={{backgroundColor: 'white', marginBottom: 80}}>
                    <div className="row" style={{display:'flex', justifyContent: 'left', marginLeft:100, marginRight:-50}}>
                        {
                            protein.map(e => (
                                <div onClick = {() => ProteinQuantity(e)} className = "col-md-5 Fooditems">
                                    <div>
                                        <img src={e.image} style={{width: 100, height: 130}} />
                                    </div>
                                    <div style={{marginTop: 40, marginLeft: 20}} className='food-item-data'>
                                        <h1>{e.title}</h1>
                                        <div style={{display: 'flex'}}>
                                            <h6>{e.price}</h6>
                                            <h6 style={{marginLeft:20}}>{e.cal}</h6>
                                        </div>
                                    </div>
                                    <div style={{flex:1, textAlign:'right', marginTop: 50, marginRight: 15}}>
                                        <MoreVertical />
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>

                <h1 className="container" style={{paddingLeft: 115, color:'#451400', textTransform:'uppercase', fontWeight: 'bolder'}}>Rice</h1>

                {riceQuantity === 'White Rice' ? (
                    <div>
                        <CheckCircle className='rounded-circle' size={50} style={{position:'absolute', marginTop:60, marginLeft:155, backgroundColor:'#8f6901', borderColor: 'white', borderWidth:1, color:'white'}} />
                    </div>
                ) : []}

                {riceQuantity === 'Brown Rice' ? (
                    <div>
                        <CheckCircle className='rounded-circle' size={50} style={{position:'absolute', marginTop:60, marginLeft:640, backgroundColor:'#8f6901', borderColor: 'white', borderWidth:1, color:'white'}} />
                    </div>
                ) : []}

                {riceQuantity === 'No Rice' ? (
                    <div>
                        <CheckCircle className='rounded-circle' size={50} style={{position:'absolute', marginTop:210, marginLeft:155, backgroundColor:'#8f6901', borderColor: 'white', borderWidth:1, color:'white'}} />
                    </div>
                ) : []}

                <div className="container" style={{backgroundColor: 'white', marginBottom: 80}}>
                    <div className="row" style={{display:'flex', justifyContent: 'left', marginLeft:100, marginRight:-50}}>
                        {
                            Rice.map(e => (
                                <div className="col-md-5 Fooditems" onClick={() => handleRiceSectionClick(e)}>
                                    <div>
                                        <img src={e.image} style={{width: 100, height: 130}} />
                                    </div>
                                    <div style={{marginTop: 40, marginLeft: 20}} className='food-item-data'>
                                        <h1>{e.title}</h1>
                                        <div style={{display: 'flex'}}>
                                            <h6>{e.price}</h6>
                                            <h6 style={{marginLeft:20}}>cals</h6>
                                        </div>
                                    </div>
                                    <div style={{flex:1, textAlign:'right', marginTop: 50, marginRight: 15}}>
                                        <MoreVertical />
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>


                <h1 className="container" style={{paddingLeft: 115, color:'#451400', textTransform:'uppercase', fontWeight: 'bolder'}}>Beans</h1>

                <div className="container" style={{backgroundColor: 'white', marginBottom: 80}}>
                    <div className="row" style={{display:'flex', justifyContent: 'left', marginLeft:100, marginRight:-50}}>
                        {
                            Beans.map(e => (
                                <div className="col-md-5 Fooditems" onClick={() => handleRiceSectionClick(e)}>
                                    <div>
                                        <img src={e.image} style={{width: 100, height: 130}} />
                                    </div>
                                    <div style={{marginTop: 40, marginLeft: 20}} className='food-item-data'>
                                        <h1>{e.title}</h1>
                                        <div style={{display: 'flex'}}>
                                            <h6>{e.price}</h6>
                                            <h6 style={{marginLeft:20}}>cals</h6>
                                        </div>
                                    </div>
                                    <div style={{flex:1, textAlign:'right', marginTop: 50, marginRight: 15}}>
                                        <MoreVertical />
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>

                <h1 className="container" style={{paddingLeft: 115, color:'#451400', textTransform:'uppercase', fontWeight: 'bolder'}}>Healthy Spread</h1>

                <div className="container" style={{backgroundColor: 'white', marginBottom: 80}}>
                    <div className="row" style={{display:'flex', justifyContent: 'left', marginLeft:100, marginRight:-50}}>
                        {
                            Rice.map(e => (
                                <div className="col-md-5 Fooditems" onClick={() => handleRiceSectionClick(e)}>
                                    <div>
                                        <img src={e.image} style={{width: 100, height: 130}} />
                                    </div>
                                    <div style={{marginTop: 40, marginLeft: 20}} className='food-item-data'>
                                        <h1>{e.title}</h1>
                                        <div style={{display: 'flex'}}>
                                            <h6>{e.price}</h6>
                                            <h6 style={{marginLeft:20}}>cals</h6>
                                        </div>
                                    </div>
                                    <div style={{flex:1, textAlign:'right', marginTop: 50, marginRight: 15}}>
                                        <MoreVertical />
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>

                <h1 className="container" style={{paddingLeft: 115, color:'#451400', textTransform:'uppercase', fontWeight: 'bolder'}}>Side</h1>

                {increment.length !== 0 ? (
                    <FoodItemAdder ResetFoodItemName={SetIncrement} FoodItemName={increment}/>
                ) : []}

                <div className="container" style={{backgroundColor: 'white', marginBottom: 80}}>
                    <div className="row" style={{display:'flex', justifyContent: 'left', marginLeft:100, marginRight:-50}}>
                        {
                            Side.map(e => (
                                <div className="col-md-5 Fooditems" onClick={() => handleSideSectionClick(e)}>
                                    <div>
                                        <img src={e.image} style={{width: 100, height: 130}} />
                                    </div>
                                    <div style={{marginTop: 40, marginLeft: 20}} className='food-item-data'>
                                        <h1>{e.title}</h1>
                                        <div style={{display: 'flex'}}>
                                            <h6>{e.price}</h6>
                                            <h6 style={{marginLeft:20}}>cals</h6>
                                        </div>
                                    </div>
                                    <div style={{flex:1, textAlign:'right', marginTop: 50, marginRight: 15}}>
                                        <MoreVertical />
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>

            </div>


            <div className="container-fluid navbar-sticky" style={{backgroundColor: '#d4cfcb', padding:20, marginTop: 50 }}>
                <div className="row">
                    <div className="col" style={{paddingLeft:140}}>
                        <h1 style={{color:'#451400'}}>Your Menu Items</h1>
                        <h6 style={{color:'#451400'}}>Select a protein or vegie to get started</h6>
                    </div>
                    <div className="col" style={{textAlign:'right', paddingRight: 140}}>
                        <button type="button" style={{width:'50%', height:50, backgroundColor:'#451400', color:'white'}} onClick={() => setBasicNameFoodModal((!basicNameFoodModal))} >
                            ADD TO BAG
                        </button>
                    </div>
                </div>
            </div>

            {RenderModal()}
            {RenderMealNameModal()}

        </div>
    )
}

export default Plate