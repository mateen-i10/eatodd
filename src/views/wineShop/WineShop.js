import React from 'react'
import './WineShop.css'
import {Button} from 'reactstrap'
import img from '../../assets/images/my-images/wine1.jpg'

const WineShop = () => {

    return (
        <div style={{backgroundColor:'white'}}>
            <div className='container'>
                <div className='testing'>
                    <Button style={{marginTop:360}}>
                        Join Now
                    </Button>
                </div>
            </div>

            <div className="container">

                <div style={{textAlign:'center', marginTop: 50, marginBottom: 30}}>
                    <h1>Sparkling</h1>
                </div>

                <div className="row" style={{textAlign:'center'}}>
                    <div className="col">
                        <img src={img} style={{width:290, height:400}} className='imgStyles'/>
                        <p>Mumm</p>
                        <p>$14.00</p>
                    </div>
                    <div className="col">
                        <img src={img} style={{width:290, height:400}} />
                        <p>Ruffino Prosecco</p>
                        <p>$12.00</p>
                    </div>
                    <div className="col">
                        <img src={img} style={{width:290, height:400}} />
                        <p>Veuve Clicquot</p>
                        <p>$47.00</p>
                    </div>
                </div>

            </div>

            <div className="container">

                <div style={{textAlign:'center', marginTop: 50, marginBottom: 30}}>
                    <h1>White</h1>
                </div>

                <div className="row" style={{textAlign:'center'}}>
                    <div className="col">
                        <img src={img} style={{width:290, height:400}} className='imgStyles'/>
                        <p>Ferrari Carrano</p>
                        <p>$13.00</p>
                    </div>
                    <div className="col">
                        <img src={img} style={{width:290, height:400}} />
                        <p>Oysters Bay</p>
                        <p>$9.00</p>
                    </div>
                    <div className="col">
                        <img src={img} style={{width:290, height:400}} />
                        <p>Santa Margarita</p>
                        <p>$16.00</p>
                    </div>
                    <div className="col">
                        <img src={img} style={{width:290, height:400}} />
                        <p>Cakebread</p>
                        <p>$30.00</p>
                    </div>
                </div>

            </div>

        </div>
    )

}

export default WineShop