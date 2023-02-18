import React from 'react'
import {X} from "react-feather"
import {Button} from "reactstrap"

const ItemsInCart = ({foodItems, index, removeMeal, mainSectionName, menuName, isCatering}) => {

    const {selectedProducts, guestName} = foodItems
    const mealName = mainSectionName
    const categoryName = menuName
    const totalPrice = foodItems.totalPrice
    const mainItems = selectedProducts && selectedProducts.length > 0 ? [...foodItems.selectedProducts.filter(p => !p.isWine)] : []
    const wines = selectedProducts && selectedProducts.length > 0 ? [...foodItems.selectedProducts.filter(p => p.isWine)] : []

    return (
        <div className='text-uppercase'>
            <div className='row'>
                <div className='col-12'>
                    <Button className='btn-icon btn-sm rounded-circle float-end' outline color='danger' onClick={() => removeMeal(index, isCatering)}>
                        <X size='12' />
                    </Button>
                </div>
            </div>
            <div className="row">
                <div className='col-9 fs-3 fw-bolder text-uppercase'> {mealName} {guestName && `(${guestName}'s Meal)`}</div>
                <div className='col-md-2' style={{marginLeft: -15}}>
                    <h6 style={{
                        fontSize: 20,
                        marginLeft: -15,
                        fontWeight: 'bolder'
                    }}>${totalPrice?.toFixed(2)}</h6>
                </div>
            </div>
            {categoryName && <div className="row">
                <div className="col-md-9 ms-1" style={{fontSize: "1.3rem", fontWeight: 'bolder', color: 'rgb(129 190 65)'}}>
                    {categoryName}
                </div>
            </div> }
            {isCatering && <div className="row">
                <div className="col-md-9 ms-1" style={{fontSize: "1.3rem", fontWeight: 'bolder', color: 'rgb(129 190 65)'}}>
                    { }
                </div>
            </div> }
            { isCatering && <div className="container-fluid">
                <div className="row">
                    <div className="col-8 fs-4 font-medium-1">Quantity * Price/Person </div>
                    <div className="col-4">{`${foodItems?.quantity} x $${foodItems?.perPersonPrice} = $${foodItems?.perPersonPrice * foodItems?.quantity}`}</div>
                </div>
            </div>}
            {mainItems.map((item, id) => (
                <div className="container-fluid" key={`products-${id}`}>
                    <div className="row">
                        <div className="col-8 fs-4 font-medium-1">{item.name}</div>
                        <div className="col-4">{item.calculatedPrice && item.selectedQuantity ? `${item.selectedQuantity} x $${item.price } = $${item.calculatedPrice.toFixed(2)}` : item.calculatedPrice ? `1 x $${item.price } = $${item.calculatedPrice.toFixed(2)}` : `-`}</div>
                    </div>
                </div>
            ))}

            {wines && wines.length > 0 && <div className="row">
                <div className="col-md-9 ms-1 mt-1" style={{fontSize: "1.3rem", fontWeight: 'bolder', color: 'rgb(129 190 65)'}}>
                    Wines
                </div>
            </div>}
            {wines && wines.map((item, id) => (
                <div className="container-fluid" key={`products-${id}`}>
                    <div className="row">
                        <div className="col-8 fs-4 font-medium-1">{item.name}</div>
                        <div className="col-4">{item.calculatedPrice ? `${item.selectedQuantity} x $${item.price} = $${item.calculatedPrice.toFixed(2)}` : `-`}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemsInCart
