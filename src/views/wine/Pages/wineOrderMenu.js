import React, {Fragment, useEffect, useState} from 'react'
import WineCards from "../components/WineCards"
import useAPI from "../../../utility/customHooks/useAPI"
import {addCateringItem} from "../../../utility/Utils"
import {useLocation} from "react-router-dom"
import UILoader from "../../../@core/components/ui-loader"

const WineOrderMenu = () => {
    const xl = 3
    const md = 6
    const [wines, setWines] = useState([])
    const {state} = useLocation()
    const restaurantId = state ? state.restaurantId : 0
    console.log('restaurantId', restaurantId)

    // hooks
    const [isLoading, response] = useAPI(`product/getWineProducts?pageIndex=1&&pageSize=20`, 'get', {}, {}, true)
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

    // functions
    const handleAddToCart = (wine) => {
        addCateringItem(wine, true)
    }
    return (
        <div>
            <Fragment>
                <div className="container-sm mt-5 mb-4">
                    <UILoader blocking={isLoading}>
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
                    </UILoader>
                </div>
            </Fragment>
        </div>
    )
}

export default WineOrderMenu
