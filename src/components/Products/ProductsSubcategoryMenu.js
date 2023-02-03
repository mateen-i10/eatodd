import React, {memo} from "react"
import ProductDetail from "../../views/home/components/product/ProductCard"
// import NoCard from "../../views/home/components/NoCard/NoCard"
import SampleCard from "../../views/home/options/components/SampleCard"

const ProductsSubcategoryMenu = ({heading, limit, products, subCatId, selectedProducts, handleSelectProduct, handleSelectOption, handleChangeQuantity}) => {
    // const [noneSelected, setNoneSelected] = useState(false)
    // const testArray = [1, 2, 3]
    return <>
        <div className='text-center text-uppercase text-primary fw-bolder my-2'>
            <div className="text-primary fs-1">{heading}</div>
            {(limit && limit > 1) ? <div className="text-dark h4">Choose up to {limit}</div> : ''}
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
        {/*{subCatId === 7 ? (*/}
        {/*    <div className="row align-items-center justify-content-center " >*/}
        {/*        <div className="col-xl-5 col-lg-6" onClick={() => setNoneSelected(!noneSelected)}>*/}
        {/*            <div className="row g-0 ">*/}
        {/*                <div className="col-12 card justify-content-center align-items-start " style={!noneSelected ? {*/}
        {/*                    marginBottom: 25,*/}
        {/*                    maxHeight: 98,*/}
        {/*                    minHeight: 98,*/}
        {/*                    borderWidth: 2,*/}
        {/*                    borderColor: "rgba(235,235,235, 0.9)"*/}
        {/*                } : {*/}
        {/*                    marginBottom: 25,*/}
        {/*                    maxHeight: 98,*/}
        {/*                    minHeight: 98,*/}
        {/*                    borderWidth: 2,*/}
        {/*                    borderColor: "black"*/}
        {/*                }}>*/}
        {/*                    <div className="form-check text-uppercase mx-5">*/}
        {/*                        <input className="form-check-input " style={{marginTop:3}} type="checkbox" value="" id="flexCheckChecked"*/}
        {/*                               checked={noneSelected} />*/}
        {/*                        <label className="form-check-label fs-4 " htmlFor="flexCheckChecked">*/}
        {/*                            No Beans*/}
        {/*                        </label>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}


        {/*            /!*<NoCard/>*!/*/}
        {/*            /!*<button className="btn btn-primary" onClick={() => {*!/*/}
        {/*            /!*    window.history.back()*!/*/}
        {/*            /!*}}>Back*!/*/}
        {/*            /!*</button>*!/*/}
        {/*        </div>*/}

        {/*    </div>*/}
        {/*) : null}*/}

        {/*{noneSelected ? <div className="row align-items-center justify-content-center"> {testArray.map(() => (<div className="col-xl-5 col-lg-6">*/}
        {/*    <div className="row g-0 ">*/}
        {/*        <SampleCard/>*/}
        {/*    </div>*/}
        {/*    </div>))*/}
        {/*}*/}
        {/*</div> : null}*/}

    </>
}

export default memo(ProductsSubcategoryMenu)
