import React, {memo, useState} from "react"
import ProductDetail from "../../views/home/components/product/ProductCard"
const ProductsSubcategoryMenu = ({heading, limit, products, subCatId, selectedProducts, handleSelectProduct, handleSelectOption, handleChangeQuantity}) => {
    const [showExtra, setShowExtra] = useState(false)

    // console.log("Products----- ---- ---", products)
    const mainProducts = products?.filter(product => product.isExtra === false)
    const extraProducts = products?.filter(product => product.isExtra === true)
    return <>
        <div className='text-center text-uppercase text-primary fw-bolder my-2'>
            <div className="text-primary fs-1">{heading}</div>
            {(limit && limit > 1) ? <div className="text-dark h4">Choose up to{limit}</div> : ''}
        </div>
        <div className="row align-items-center justify-content-center ">
            {mainProducts && mainProducts.length > 0 && mainProducts.map((element) => {
                return <div className="col-xl-5 col-lg-6" key={`productDetail-${element.id}`}>
                    <ProductDetail
                        item={element}
                        attachment={element.attachment}
                        selectedItems={selectedProducts}
                        onItemClick={handleSelectProduct}
                        limit={limit}
                        subCatId={subCatId}
                        onOptionClick={handleSelectOption}
                        onQuantityChange={handleChangeQuantity}
                        setShowExtra={setShowExtra}
                        showExtra={showExtra}
                    />
                </div>
            })}
        </div>
        {showExtra ? <div className="row align-items-center justify-content-center"> {extraProducts && extraProducts.length > 0 && extraProducts.map((element) => (<div className="col-xl-5 col-lg-6" key={`productDetail-${element.id}`}>
            <ProductDetail
                item={element}
                attachment={element.attachment}
                selectedItems={selectedProducts}
                onItemClick={handleSelectProduct}
                limit={limit}
                subCatId={subCatId}
                onOptionClick={handleSelectOption}
                onQuantityChange={handleChangeQuantity}

            />
        </div>))
        }
        </div> : null}

    </>
}

export default memo(ProductsSubcategoryMenu)
