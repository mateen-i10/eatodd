import React from 'react'
import CheckSign from "../../home/options/components/Utility/CheckSign"
import ProductImage from "../../home/components/product/ProductImage"
import {Input, Label} from "reactstrap"


const CatMealItems = ({product, handleSelect, selectedItems, attachment}) => {
    const isChecked = selectedItems && selectedItems.find(i => i.id === product.id)
    return (
        <div className="card mb-lg-2 mb-1 overflow-hidden" onClick={() => {
            handleSelect(product?.item)
        }}
             style={!isChecked ? {
                 marginBottom: 25,
                 maxHeight: 98,
                 minHeight: 98,
                 borderWidth: 1
             } : {
                 marginBottom: 25,
                 maxHeight: 98,
                 minHeight: 98,
                 borderWidth: 1,
                 borderColor: "black"
             }}>
            <div className="row cursor-pointer">
                <div className=" col-9 ">
                    <div className="row g-0">
                        <div className=" col-4">
                            {isChecked &&
                                <div className="check3" >
                                    <div>
                                        <CheckSign />
                                    </div>
                                </div>}
                            <ProductImage
                                attachment={attachment}
                                classes={"img-fluid rounded-start"}
                                styles={{
                                    width: "100%",
                                    height: 98,
                                    backgroundColor: 'transparent',
                                    overflow: "hidden"
                                }}/>
                        </div>
                        <div className="col-8 ">
                            <div className="card-body" style={{
                                marginTop: -4
                            }}>
                                <div
                                    className="card-title mb-0 text-start text-uppercase text-primary fw-bolder"
                                    style={{fontSize: '1.2rem'}}>{product.name}
                                   <h5 className=" fw-bolder text-dark me-2 text-lowercase" style={{marginTop: 15}}> ${product.price}</h5>
                                </div>
                                <p className="text-dark">{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" col-3 mt-2 text-end">
                    <div className='demo-inline-spacing'>
                        <div className='form-check form-check-success'>
                            {isChecked ? <Input type='checkbox' id='success-checkbox' checked /> : <Input type='checkbox' />}
                            {isChecked ? <Label className='form-check-label'>
                                Remove
                            </Label> : <Label className='form-check-label'>
                                Add
                            </Label>}
                            {/*<Label className='form-check-label' for='success-checkbox'>
                                Add
                            </Label>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CatMealItems
