import React, {useEffect, useState} from 'react'
import useAPI from "../../../utility/customHooks/useAPI"
import ProductsSubcategoryMenu from "../../../components/Products/ProductsSubcategoryMenu"

const Wines = ({restaurantId, handleSelectOption, handleChangeQuantity, handleSelectProduct, selectedProducts }) => {
    const [wines, setWines] = useState([])

    // hooks
    const [isLoading, response] = useAPI(`product/getWineProducts?refId=${restaurantId}pageIndex=1&&pageSize=20`, 'get', {}, {}, true)
    useEffect(() => {
        if (response && response.data && response.data.length > 0) {
            const {data} = response
            const items = data.map(p => {
                return {
                    ...p,
                    options: p.options && p.options.length > 0 ? p.options.map(op => {
                        return op.isDefault ? {...op, isSelected: true} : op
                        }) : [],
                    price: p.options && p.options.length > 0 ? p.options.find(p => p.isDefault).price : 0
                }
            })
            setWines([...items])
        }

    }, [response])
    console.log('isLoading', isLoading)
    console.log('res in wines', response)

    return  (wines && wines.length > 0 && <ProductsSubcategoryMenu
            heading="Wines"
            limit={2}
            products={wines}
            subCatId={0}
            handleSelectOption={handleSelectOption}
            handleChangeQuantity={handleChangeQuantity}
            handleSelectProduct={handleSelectProduct}
            selectedProducts={selectedProducts}
        />
)

}

export default Wines
