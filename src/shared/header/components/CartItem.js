import React from 'react'
import {Trash, X} from "react-feather"
import {Button} from "reactstrap"

const CartItem = ({item, index, removeItem}) => {

    return (
        <div>
            <div className="row my-1">
                <div className="col-md-8 ps-2" style={{fontSize: "1.3rem", fontWeight: 'bolder', color: 'rgb(129 190 65)'}}>
                    {`${item.name}`}
                </div>
                <div className='col-md-3'>
                    {`${item.selectedQuantity} x ${item.price} = $${item.selectedQuantity * item.price}`}
                </div>
                <div className='col-md-1'>
                    <Button className='btn-icon btn-sm rounded-circle float-end' outline color='danger' onClick={() => removeItem(index)}>
                        <Trash size='12'/>
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default CartItem
