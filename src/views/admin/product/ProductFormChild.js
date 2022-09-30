import React from 'react'
import {Button} from "reactstrap"
import {Plus} from "react-feather"
import ProductOption from "../Components/ProductOption"
import SubcategoryDropdown from "../Components/SubcategoryDropdown"

const ProductFormChild = (props) => {
    return (
        <>
            {props.showOption === true && (
                <div>
                    <SubcategoryDropdown
                        categoryId={props.categoryId}
                        subcategoryId={props.subcategoryId}
                        setSubcategory={props.setSubcategoryId}
                        isFormSubmit={props.isFormSubmit}
                    />
                    <h5>Product Options</h5>
                    {props.options.map((i, index) => {
                        return <ProductOption
                            key={index}
                            index={index}
                            option={i}
                            optionsLength = {props.options.length}
                            removeOption = {props.removeOption}
                            onValueChange = {props.onValueChange}
                            optionType = {props.optionType}
                        />
                    })}
                        <div className='col-2'>
                            <Button.Ripple className='btn-icon mt-1 ms-1' color='primary' onClick={props.addOption}>
                                <Plus size={12} />
                            </Button.Ripple>
                        </div>
                </div>
            )}

            {props.formFeilds === 0 && (
                <div className='col-md-12 mt-2 mb-3 text-end'>
                    <Button type="button" color='primary' onClick={props.AddNewData}>Add new</Button>
                </div>
            )}
            {props.formFeilds === 1 && (
                <div className='col-md-12 mt-2 text-center mb-3'>
                    <h5 className='mb-3' color='primary'>Or</h5>
                    <Button type="button" color='primary' onClick={props.AddFromExistingData}>Choose from existing one</Button>
                </div>
            )}
        </>
    )
}

export default ProductFormChild