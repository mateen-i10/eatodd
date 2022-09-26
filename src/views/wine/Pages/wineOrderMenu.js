import React, {Fragment, useEffect, useState} from 'react'
import Header from "../../../shared/header/Header"
import Footer from "../../../shared/footer/Footer"
import WineCards from "../components/WineCards"
import useAPI from "../../../utility/customHooks/useAPI"
import {addItemToCart} from "../../../utility/Utils"
import {useHistory, useLocation} from "react-router-dom"
import {Button} from "reactstrap"
import {ArrowLeft} from "react-feather"

const wineOrderMenu = () => {
    const xl = 3
    const md = 6
    const [wines, setWines] = useState([])
    const history = useHistory()
    const {state} = useLocation()
    const restaurantId = state ? state.restaurantId : 0
    console.log('restaurantId', restaurantId)

    // hooks
    const [isLoading, response] = useAPI(`product/getWineProducts?pageIndex=1&&pageSize=12`, 'get', {}, {}, true)
    useEffect(() => {
    if (response && response.data && response.data.length > 0) {
        const {data} = response
        const items = data.map(p => {
            return {
                id: p.id,
                title: p.name,
                price: p.options && p.options.length > 0 ? p.options.find(p => p.isDefault).price : 0,
                product: p
            }
        })
        setWines([...items])
    }

    }, [response])
    console.log('isLoading', isLoading)
    console.log('res', response)
    // functions
    const handleAddToCart = (wine) => {
        addItemToCart(wine, true)
    }
    return (
        <div>
            <Header/>
            <Fragment>
                <div className="container-sm mt-5 mb-4">
                        <Button className='btn-icon rounded-circle mb-1 cursor-pointer' color='secondary' outline onClick={() => {
                            history.goBack()
                        }}><ArrowLeft size='18'/></Button>
                    <div className="row align-items-center justify-content-center">
                        {wines.map(item => (
                            <WineCards
                                key={item.id}
                                item={item}
                                xl={xl}
                                md={md}
                                onAddToCart={handleAddToCart}
                            />
                        ))}
                    </div>
                </div>
            </Fragment>
            <Footer/>
        </div>
    )
}

export default wineOrderMenu
