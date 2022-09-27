import React from 'react'
import {X} from "react-feather"
import {Button} from "reactstrap"

const ItemsInCart = ({foodItems, index, removeMeal}) => {

    const {selectedProducts} = foodItems
    const mealName = foodItems.mealName
    const categoryName = foodItems.categoryName
    const totalPrice = foodItems.totalPrice
    const mainItems = selectedProducts && selectedProducts.length > 0 ? [...foodItems.selectedProducts.filter(p => !p.isWine)] : []
    const wines = selectedProducts && selectedProducts.length > 0 ? [...foodItems.selectedProducts.filter(p => p.isWine)] : []

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
                <div className="col-md-9 ms-1" style={{fontSize: "1.3rem", fontWeight: 'bolder', color: 'rgb(129 190 65)'}}>
                    {categoryName}
                </div>
            </div>
            {mainItems.map((item, id) => (
                <div className="container-fluid" key={`products-${id}`}>
                    <div className="row">
                        <div className="col-8 fs-4 font-medium-1">{item.name}</div>
                        <div className="col-4">{item.calculatedPrice ? `${item.selectedQuantity} x $${item.price} = $${item.calculatedPrice}` : `-`}</div>
                    </div>
                </div>
            ))}
            <div className="row">
                <div className="col-md-9 ms-1 mt-1" style={{fontSize: "1.3rem", fontWeight: 'bolder', color: 'rgb(129 190 65)'}}>
                    Wines
                </div>
            </div>
            {wines.map((item, id) => (
                <div className="container-fluid" key={`products-${id}`}>
                    <div className="row">
                        <div className="col-8 fs-4 font-medium-1">{item.name}</div>
                        <div className="col-4">{item.calculatedPrice ? `${item.selectedQuantity} x $${item.price} = $${item.calculatedPrice}` : `-`}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemsInCart
