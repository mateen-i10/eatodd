import React from 'react'
import SubcategoryDropdown from "../../Components/SubcategoryDropdown"

const SubCatChild = (props) => {
    console.log(props.formState.isBlank, "lets see ")
    return (
        <div className='col-lg-6'>
            {props.formState.isBlank && <SubcategoryDropdown
                categoryId={props.categoryId}
                subcategoryId={props.subcategoryId}
                setSubcategory={props.setSubcategoryId}
                isFormSubmit={props.isFormSubmit}
            />}
        </div>
    )
}

export default SubCatChild