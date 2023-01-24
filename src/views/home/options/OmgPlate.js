import React, {useEffect, useState} from 'react'
import TopShelf from "./components/TopShelf"
import Header from "../../../shared/header/Header"
import Footer from "./components/Footer"
import {useHistory, useLocation} from "react-router-dom"
import {addItemToCart, isGroupOrder, isGroupOrderMemberName, isJoinedByLink, isObjEmpty} from "../../../utility/Utils"
import useAPI from "../../../utility/customHooks/useAPI"
import {toast} from "react-toastify"
import ProductsSubcategoryMenu from "../../../components/Products/ProductsSubcategoryMenu"
import Wines from "../../wine/Pages/wines"
// import NutritionPrefModel from "./components/NutrtionPrefModel"
import {getUserData, isCustomer, isUserLoggedIn} from "../../../auth/utils"
import http, {baseURL} from "../../../utility/http"
import {groupOrderId, groupOrderMemberName} from "../../../utility/constants"
import {calculateTotalItems} from "../../../redux/cartItems/actions"
import {useDispatch} from "react-redux"
import OrdersList from "./OrdersList"


const Menu = () => {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState({})

    // const [, set] = useState({})

    const [isPageLoading, setIsLoading] = useState(false)
    const [selectedProducts, setSelectedProducts] = useState([])
    const [mealName, setMealName] = useState("")
    const history = useHistory()
    const dispatch = useDispatch()
    const {state} = useLocation()
    const {categoryId, restaurantId} = state
    console.log('iss', isPageLoading)
    // hooks
    const [isLoading, response] = useAPI(`product/categoryProducts?categoryId=${categoryId}&&restaurantId=${restaurantId} `, 'get', {}, '', true)
    useEffect(() => {
        console.log('isLoading', isLoading)
        if (response && response.data) {
            const {data} = response
            setCategory({
                name: data.categoryName,
                id: data.id,
                description: data.description,
                attachment: data.attachment,
                isWinePaired: data.isWinePaired
            })

            // grouping products by sub category
            const final = data.products && data.products.length > 0 ? data.products.reduce((acc, currentValue) => {
                if (!acc[currentValue.subCategory['name']]) {
                    acc[currentValue.subCategory['name']] = {}
                }
                currentValue.price = currentValue.options && currentValue.options.length > 0 ? currentValue.options.find(op => op.isDefault).price : null
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

    const [canvasOpen, setCanvasOpen] = useState(false)
    //console.log('canvas', canvasOpen)

    useEffect(() => {
        if (selectedProducts.length > 0) {
            setCanvasOpen(true)
        }
    }, [selectedProducts])

    const dispatchingItems = () => {
        // calculating meal total price
        let finalItems = []
        let totalPrice = 0

        if (selectedProducts && selectedProducts.length > 0) {
            finalItems = selectedProducts.map(item => {
                if (!isObjEmpty(item)) {
                    const found = item.options.find(op => op.isSelected)
                    const price = found ? found.price  : item.price
                    totalPrice =  totalPrice + (price * item.selectedQuantity)
                    return {...item, calculatedPrice: price * item.selectedQuantity, price}
                }
            })
        }

        if (isGroupOrder()) {
            setIsLoading(true)
            const meal =  {
                    name: mealName,
                    categoryId,
                    guestName: isUserLoggedIn() && isCustomer() ? getUserData().name : isGroupOrderMemberName() ? localStorage.getItem(groupOrderMemberName) : null,
                    customerId: isUserLoggedIn() && isCustomer() ? getUserData().customerId : null,
                    mealProducts : selectedProducts && selectedProducts.length > 0 ? selectedProducts.map(p => {
                        return {
                            productId : p.id,
                            quantity: p.selectedQuantity,
                            unitPrice : p.price,
                            optionId: p.options && p.options.length > 0 ? p.options.find(p => p.isSelected)?.id : null
                        }
                    }) : []
                }
                http._post(`${baseURL}groupOrder/addMeals/${Number(localStorage.getItem(groupOrderId))}`, {...meal}).then(res => {
                    setIsLoading(false)
                    if (res.status === 200 && res.data && res.data.statusCode === 200) {
                        dispatch(calculateTotalItems(res?.data.data?.mealCount))
                        toast.success(`${mealName} added to cart`)
                        isJoinedByLink() ? history.goBack() : history.push('/home')
                    } else {
                        toast.error(res.data.message)
                    }
                }).catch(error => {
                    toast.error(error.message)
                })
        } else {
            const meal = {
                mealName,
                totalPrice,
                categoryName: category?.name,
                categoryId,
                selectedProducts : [...finalItems]
            }
            addItemToCart(meal)
            history.push('/home')
        }

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
                const existingProducts = product.isWine ? selectedProducts.filter(p => p.isWine) : selectedProducts.filter(p => !p.isWine && p?.subCategory?.id === subCatId)
                let updatedProducts = [...selectedProducts]
                const sectionLimit = existingProducts.length
                if (limit !== 0 && sectionLimit === limit) {
                    const message = product.isWine ? `You can select up to ${limit} wines` : `You can select up to ${limit} items from '${product?.subCategory?.name?.toUpperCase()}'`
                    toast.info(message)
                    return
                } else if (limit !== 0 && sectionLimit > 0 && sectionLimit < limit && !product.isWine) {
                    updatedProducts = [
                        ...selectedProducts.filter(p => p.subCategory.id !== subCatId || p.isWine),
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
                {/*<NutritionPrefModel/>*/}
                <div className="container-sm">
                    <div className="container-sm">
                        {products && products.length > 0 && products.map(prod => {
                            return <ProductsSubcategoryMenu
                                heading={prod.name}
                                limit={prod.fillingLimit}
                                products={prod.products}
                                subCatId={prod.id}
                                handleSelectOption={handleSelectOption}
                                handleChangeQuantity={handleChangeQuantity}
                                handleSelectProduct={handleSelectProduct}
                                selectedProducts={selectedProducts}
                            />
                        })}
                        {category?.isWinePaired && <Wines
                            restaurantId={restaurantId}
                            handleSelectOption={handleSelectOption}
                            handleChangeQuantity={handleChangeQuantity}
                            handleSelectProduct={handleSelectProduct}
                            selectedProducts={selectedProducts}
                        />}
                    </div>
                </div>
            </div>
            <Footer
                mealName={mealName}
                dispatchingItems={dispatchingItems}
                setMealName={setMealName}
            />
            <OrdersList openCan={canvasOpen} onCloseModal={setCanvasOpen} productList={selectedProducts} />
        </>
    )
}
export default Menu
