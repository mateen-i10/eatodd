import Select from "react-select"
import React, {memo, useEffect, useState} from "react"
import httpService, {baseURL} from "../../../utility/http"
import {toast} from "react-toastify"

const SubcategoryDropdown = ({ categoryId, subcategoryId, setSubcategory, isFormSubmit }) => {

    const [subCategories, setSubCategories] = useState([])
    console.log('subcatID', subcategoryId)
    const loadSubCategories = async (input, categoryId) => {
        console.log('CategoryId', categoryId)
        if (categoryId) {
            httpService._get(`${baseURL}SubCategory/GetSubCategories?CategoryId=${categoryId}`)
                .then(response => {
                    // success case
                    if (response.status === 200 && response.data.statusCode === 200) {
                        const final = response.data.data.map(d =>  {
                            return {label: `${d.name}`, value: d.id}
                        })
                        setSubCategories(final)
                    } else {
                        //general Error Action
                        toast.error(response.data.message)
                    }
                }).catch(error => {
                toast.error(error.message)
            })
        }
        return []
    }

    useEffect(async () => {
        if (categoryId) {
            await loadSubCategories('', categoryId)
        }
    }, [categoryId])

    return <div className='col-md-6 mb-2' style={{width:'100%'}}>
        <label>Select Sub Category <span className='text-danger'>*</span></label>
        <Select
            closeMenuOnSelect={true}
            name = "subCategory"
            isMulti = {false}
            options = {subCategories}
            value = {subCategories.find(opt => opt.value === subcategoryId) }
            onChange = {(e) => { setSubcategory(e.value) }}
        />

        {isFormSubmit && (!subcategoryId || subcategoryId === 0) && <span className='text-danger'>'Subcategory' is required</span> }
    </div>
}

export default memo(SubcategoryDropdown)