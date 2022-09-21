import React, {useEffect, useState} from 'react'
import TopShelf from "./components/TopShelf"
import NutrtionPrefModel from "./components/NutrtionPrefModel"
import Header from "../../../shared/header/Header"
import Footer from "./components/Footer"
import {useHistory, useLocation} from "react-router-dom"
import {addMealToCart, isObjEmpty} from "../../../utility/Utils"
import ProductDetail from "../components/product/ProductCard"
import useAPI from "../../../utility/customHooks/useAPI"
import {toast} from "react-toastify"
const Menu = () => {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState({})
    const [selectedProducts, setSelectedProducts] = useState([])
    //const [selectedMenuItems, setSelectedMenuItems] = useState({})
    const [mealName, setMealName] = useState("")
    const history = useHistory()
    const {state} = useLocation()
    const {categoryId, restaurantId} = state

    // hooks
    const [isLoading, response] = useAPI(`product/categoryProducts?categoryId=${categoryId}&&restaurantId=${restaurantId} `, 'get', {}, '', true)
    useEffect(() => {
        console.log('isLoading', isLoading)
        if (response && response.data) {
            const {data} = response
            setCategory({name: data.categoryName, id: data.id, description: data.description, attachment: data.attachment})

            // grouping products by sub category
            const final = data.products && data.products.length > 0 ? data.products.reduce((acc, currentValue) => {
                if (!acc[currentValue.subCategory['name']]) {
                    acc[currentValue.subCategory['name']] = {}
                }
                currentValue.price = currentValue.options && currentValue.options.length > 0 ? currentValue.options[0].price : null
                if (currentValue.options && currentValue.options.length > 0) currentValue.options[0].isSelected = true
                acc[currentValue.subCategory['name']] = {
                    id: currentValue.subCategory['id'],
                    name: currentValue.subCategory['name'],
                    fillingLimit: currentValue.subCategory['fillingLimit'],
                    products: acc[currentValue.subCategory['name']].products ? [...acc[currentValue.subCategory['name']].products, currentValue] : [currentValue]
                }
                return acc
            }, {}) : []
            const values = Object.values(final)
            setProducts([...values])
        }

    }, [response])

    useEffect(() => {
        console.log('selected products', selectedProducts)
    }, [selectedProducts])

    /*const handleAllMenuItems = () => {
        setSelectedMenuItems({
            ...selectedMenuItems,
            mealName,
           selectedProducts
        })
    }*/
    const dispatchingItems = () => {
        // calculating meal total price
        let finalItems = []
        if (selectedProducts && selectedProducts.length > 0) {
            finalItems = selectedProducts.map(item => {
                if (!isObjEmpty(item)) {
                    const price = item.options.find(op => op.isSelected).price
                    return {...item, calculatedPrice: price * item.selectedQuantity, price}
                }
            })
        }
        let totalPrice = 0
        finalItems.forEach(p => {
            totalPrice =  totalPrice + p.calculatedPrice
        })
        const meal = {
            mealName,
            totalPrice,
            categoryName: category?.name,
            selectedProducts : [...finalItems]
        }
        addMealToCart(meal)
        history.push('/home')
    }
    const handleSelectProduct = (product, subCatId, limit) => {
        const finalProducts = [...selectedProducts]

        if (selectedProducts && selectedProducts.length > 0) {
            const index = selectedProducts.findIndex(pro => pro.id === product.id)
            if (index > -1) {
                // remove case
                finalProducts.splice(index, 1)
                setSelectedProducts([...finalProducts])
            } else {
                // add case
                const existingProducts = selectedProducts.filter(p => p.subCategory.id === subCatId)
                let updatedProducts = [...selectedProducts]
                const sectionLimit = existingProducts.length
                if (limit !== 0 && sectionLimit === limit) {
                    toast.info(`You can select only ${limit} items from '${product.subCategory.name.toUpperCase()}'`)
                    return
                } else if (limit !== 0 && sectionLimit > 0 && sectionLimit < limit) {
                    updatedProducts = [
                        ...selectedProducts.filter(p => p.subCategory.id !== subCatId),
                        ...existingProducts.map(p => (
                        {...p, selectedQuantity: 1 / limit}
                    ))
                    ]
                    product.selectedQuantity = 1 / limit
                } else {
                    product.selectedQuantity = 1
                }

                setSelectedProducts([...updatedProducts, product])
            }
        } else {
            // empty list case
            product.selectedQuantity = 1
            setSelectedProducts([product])
        }
    }
    const handleSelectOption = (product, index, limit, subCatId) => {
        const final = [...selectedProducts]

        // if selected products list in not empty
        if (final && final.length > 0) {
            const proIndex = final.indexOf(product)
            // existing product case
            if (proIndex > -1) {
                final[proIndex].options.forEach(op => { op.isSelected = false })
                final[proIndex].options[index].isSelected = true
                setSelectedProducts([...final])
            } else {
                // new product case
                if (limit !== 0 && final.filter(p => p.subCategory.id === subCatId).length === limit) return
                product.options.forEach(op => { op.isSelected = false })
                product.options[index].isSelected = true
                setSelectedProducts([...final, product])
            }

        } else {
            //empty case
            product.options.forEach(op => { op.isSelected = false })
            product.options[index].isSelected = true
            setSelectedProducts([product])
        }
    }
    const handleChangeQuantity = (index, value) => {
        const final = [...selectedProducts]
        final[index].selectedQuantity = value
        setSelectedProducts([...final])
    }
    const subcategoryMenu = (heading, limit, pro, subCatId) => (
        <>
            <div className='text-center text-uppercase text-primary fw-bolder my-2'>
            <h1 className="text-primary">{heading}</h1>
            {(limit && limit > 1) ? <h4 className="text-dark">Choose up to {limit}</h4> : ''}
        </div>
            <div className="row align-items-center justify-content-center ">
            {pro && pro.length > 0 && pro.map((element) => {
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
    )
    return (
        <>
            <Header/>
            <div className="container-sm ">
                <TopShelf
                    attachment={category?.attachment}
                    name={category?.name}
                    description={category?.description}
                />
                <hr className="text-dark"/>
                <NutrtionPrefModel/>
                <div className="container-sm">
                    <div className="container-sm">
                        {products && products.length > 0 && products.map(prod => {
                            return subcategoryMenu(prod.name, prod.fillingLimit, prod.products, prod.id)
                        })}
                    </div>
                </div>
            </div>
            <Footer
                mealName={mealName}
                dispatchingItems={dispatchingItems}
                setMealName={setMealName}
            />
        </>
    )
}
export default Menu
