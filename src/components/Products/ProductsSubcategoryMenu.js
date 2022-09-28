import React, {memo} from "react"
import ProductDetail from "../../views/home/components/product/ProductCard"

const ProductsSubcategoryMenu = ({heading, limit, products, subCatId, selectedProducts, handleSelectProduct, handleSelectOption, handleChangeQuantity}) => {
    return <> <div className='text-center text-uppercase text-primary fw-bolder my-2'>
        <h1 className="text-primary">{heading}</h1>
        {(limit && limit > 1) ? <h4 className="text-dark">Choose up to {limit}</h4> : ''}
    </div>
    <div className="row align-items-center justify-content-center ">
        {products && products.length > 0 && products.map((element) => {
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
                />
            </div>
        })}
    </div>
    </>
}

export default memo(ProductsSubcategoryMenu)
