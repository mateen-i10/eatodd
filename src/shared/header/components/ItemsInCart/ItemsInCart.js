import React from 'react'
// import {useDispatch} from "react-redux"
// import {useSelector} from "react-redux"

const ItemsInCart = (props) => {

    const {foodItems} = props
    // const [updatedMealName, setUpdatedMealName] = useState("")


    const mealName = foodItems.action.payload.mealName
    const mainItems = [...foodItems.action.payload.selectedProVeg, ...foodItems.action.payload.selectedRice, ...foodItems.action.payload.selectedTopping, ...foodItems.action.payload.selectedBeans]
    const additionalItems = [...foodItems.action.payload.selectedSide, ...foodItems.action.payload.selectedDrinks]

    let mainItemsPrice
    if (foodItems.action.payload.selectedProVeg.length === 2) {
        mainItemsPrice = foodItems.action.payload.selectedProVeg[0].price > foodItems.action.payload.selectedProVeg[1].price ? foodItems.action.payload.selectedProVeg[0].price : foodItems.action.payload.selectedProVeg[1].price
    } else {
        mainItemsPrice = foodItems.action.payload.selectedProVeg[0].price
    }
    // console.log(mainItemsPrice)


    let totalAddiItemsPrice = 0
    for (let i = 0; i <= additionalItems.length - 1; i++) {
        // console.log(additionalItems[i].price)
        totalAddiItemsPrice = totalAddiItemsPrice + additionalItems[i].price
    }
    // console.log(totalAddiItemsPrice)

    const totalPrice = Number((mainItemsPrice + totalAddiItemsPrice).toFixed(2))


    return (
        <div>
            <div className="row">
                <div className='col-9 fs-3 fw-bolder text-uppercase'> {mealName}
                    {/*<Input type='text' placeholder="Who's this Meal for?"*/}
                    {/*       value={updatedMealName.length ? updatedMealName : mealName}*/}
                    {/*       onChange={e => setUpdatedMealName(e.target.value)}*/}
                    {/*       style={{*/}
                    {/*           borderTop: 0,*/}
                    {/*           borderRight: 0,*/}
                    {/*           borderLeft: 0,*/}
                    {/*           borderWidth: 2,*/}
                    {/*           marginBottom: 10,*/}
                    {/*           padding: 0,*/}
                    {/*           fontSize: "1.4rem",*/}
                    {/*           fontWeight: 'bolder',*/}
                    {/*           lineHeight: 2*/}
                    {/*       }}/>*/}
                </div>
                <div className='col-md-2' style={{marginLeft: -15}}
                >
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
                <div className="col-md"
                     style={{fontSize: "1.3rem", fontWeight: 'bolder', color: 'primary'}}>${mainItemsPrice}
                </div>
            </div>
            {mainItems.map((item, id) => (
                <span className="text-capitalize  fs-4 " key={id}>{item.title}, </span>
            ))}
            {
                additionalItems.map((item, id) => (
                    <div className="container-fluid" key={id}>
                        <div className="row">
                            <div className="col-9 fs-4">{item.title}</div>
                            <div className="col-3 fs-3">$ {item.price}</div>
                        </div>
                    </div>
                ))
            }
            {/*<div className="row fw-bolder fs-3">*/}
            {/*    <div className="col-6 text-start ">*/}
            {/*        <div className="ms-1">Total Price :</div>*/}
            {/*    </div>*/}
            {/*    <div className="col-6 text-end ">*/}
            {/*        <div className="me-2">${totalPrice}</div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <a href="#">*/}
            {/*        <div className="row" style={{*/}
            {/*            color: 'rgb(129 190 65)',*/}
            {/*            fontWeight: 'bolder',*/}
            {/*            textTransform: 'uppercase',*/}
            {/*            textDecoration: 'underline',*/}
            {/*            fontSize: "1.3rem",*/}
            {/*            justifyContent: 'left'*/}

            {/*        }}>*/}
            {/*            <div className="col" onClick={null}>remove</div>*/}
            {/*            <div className="col" style={{marginLeft: -190}}>edit</div>*/}
            {/*            <div className="col" style={{marginLeft: -220}}*/}
            {/*                // onClick={() => setBasicNameFoodModal((!basicNameFoodModal))}*/}
            {/*            >duplicate*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </a>*/}
            {/*</div>*/}

        </div>
    )
}

export default ItemsInCart
