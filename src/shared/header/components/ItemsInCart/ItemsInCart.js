import React from 'react'
import {X} from "react-feather"
import {Button} from "reactstrap"

const ItemsInCart = ({foodItems, index, removeMeal}) => {

    const mealName = foodItems.mealName
    const mainItems = [...foodItems.selectedProVeg, ...foodItems.selectedRice, ...foodItems.selectedTopping, ...foodItems.selectedBeans, ...foodItems.selectedSide, ...foodItems.selectedDrinks]

    let mainItemsPrice
    if (foodItems.selectedProVeg.length === 2) {
        mainItemsPrice = foodItems.selectedProVeg[0].price > foodItems.selectedProVeg[1].price ? foodItems.selectedProVeg[0].price : foodItems.selectedProVeg[1].price
    } else {
        mainItemsPrice = foodItems.selectedProVeg[0].price
    }
    const totalAddiItemsPrice = 0
    const totalPrice = Number((mainItemsPrice + totalAddiItemsPrice).toFixed(2))

    return (
        <div>
            <div className='row'>
                <div className='col-12'>
                    <Button className='btn-icon btn-sm rounded-circle float-end' outline color='danger' onClick={() => removeMeal(index)}>
                        <X size='12'/>
                    </Button>
                </div>
            </div>
            <div className="row">
                <div className='col-9 fs-3 fw-bolder text-uppercase'> {mealName}</div>
                <div className='col-md-2' style={{marginLeft: -15}}>
                    <h6 style={{
                        fontSize: 20,
                        marginLeft: -15,
                        fontWeight: 'bolder'

                    }}>${totalPrice}</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-md-9"
                     style={{fontSize: "1.3rem", fontWeight: 'bolder', color: 'rgb(129 190 65)'}}>Pollo
                    Asado
                    Burrito
                </div>
            </div>
            {mainItems.map((item, id) => (
                <div className="container-fluid" key={id}>
                    <div className="row">
                        <div className="col-9 fs-4 font-medium-1">{item.title}</div>
                        <div className="col-3 fs-3 font-medium-1">{item.price ? `$${item.price}` : `-`}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemsInCart
