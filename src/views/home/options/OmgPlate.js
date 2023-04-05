import React, {useEffect, useState, memo} from 'react'
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
import {useDispatch, useSelector} from "react-redux"
import OrdersList from "./OrdersList"
import {FaTimes} from "react-icons/all"


const Menu = () => {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState({})
    //const [subCatIdToShow, setSubCatIdToShow] = useState(null)
    const [isPageLoading, setIsLoading] = useState(false)
    const [selectedProducts, setSelectedProducts] = useState([])
    const [mealName, setMealName] = useState("")
    const {userLocation} = useSelector(state => state)
    const [hiddenSubcategories, setHiddenSubcategories] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([...products, ...hiddenSubcategories.map(subCat => ({...subCat, isHidden: true}))])
    // const data = useSelector(state => state)
    const history = useHistory()
    const dispatch = useDispatch()
    const {state} = useLocation()
    const {categoryId, restaurantId} = state
    console.log('iss', isPageLoading)

    // hooks
    const [isLoading, response] = useAPI(`product/categoryProducts?categoryId=${categoryId}&&restaurantId=${userLocation.length ? userLocation[0].action.payload.restaurantId : restaurantId} `, 'get', {}, '', true)
    /*function filterProductsBySubCatId(products, subCatId) {
        return products.filter(prod => prod.id !== subCatId)
    }*/
    function toggleSubcategory(subCatId) {
        const found = filteredProducts.find(c => c.id === subCatId)
        const remaining = filteredProducts.filter(c => c.id !== subCatId)

        if (found.isHidden) {
            setHiddenSubcategories(hiddenSubcategories.filter(c => c.id !== subCatId))
        } else {
            setHiddenSubcategories([...hiddenSubcategories, found])
        }

        setFilteredProducts([...remaining, {...found, isHidden: !found.isHidden}])
    }

    useEffect(() => {
            if (products && products.length > 0) {
                const subCatIdToHide = products.map(pro => {
                     if (products.find(prod => pro.id === prod.subCatId)) {
                        pro.isHidden = true
                    }
                     return pro
                })
                setFilteredProducts([...subCatIdToHide])
                console.log('setFilteredProducts', subCatIdToHide, products)
                /*if (subCatIdToHide) {
                    toggleSubcategory(subCatIdToHide.id)
                }*/
            }


    }, [products])
    useEffect(() => {
        console.log('isLoading', isLoading)
        if (response && response.data) {
            const {data} = response
            console.log(response)
            setCategory({
                name: data.categoryName,
                id: data.id,
                description: data.description,
                attachment: data.attachment,
                isWinePaired: data.isWinePaired,
                isBlank: data.isBlank,
                priority: data.priority
            })
            // grouping products by sub category
            const final = data.products && data.products.length > 0 ? data.products.reduce((acc, currentValue) => {
                const a = currentValue['squareItemId']
                if (!acc[currentValue.subCategory['name']]) {
                    acc[currentValue.subCategory['name']] = {}
                }
                console.log('currentValue.options', currentValue.options)
                currentValue.price = currentValue.options && currentValue.options.length > 0 ? currentValue.options.find(op => op.isDefault)?.price : null
                if (currentValue.options && currentValue.options.length > 0 && currentValue.options.find(op => op.isDefault))  currentValue.options.find(op => op.isDefault).isSelected = true
                acc[currentValue.subCategory['name']] = {
                    id: currentValue.subCategory['id'],
                    name: currentValue.subCategory['name'],
                    isBlank: currentValue.subCategory['isBlank'],
                    priority: currentValue.subCategory['priority'],
                    fillingLimit: currentValue.subCategory['fillingLimit'],
                    subCatId: currentValue.subCategory['subCatId'],
                    products: acc[currentValue.subCategory['name']].products ? [...acc[currentValue.subCategory['name']].products, {...currentValue }] : [{...currentValue}]
                }
                console.log('ccc', a)
                console.log('ccc2', acc)
                return acc
            }, {}) : []
            const values = Object.values(final)
            // const ArrValues = [...values]
            // ArrValues.sort((a, b) => a?.priority - b?.priority)
            // console.log("arrayValues", ArrValues)
            // setProducts([...ArrValues])
            console.log('mmmm', final)
            console.log('mmmm', values)
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
                        toast.success(`${mealName} Added to cart`)
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
        console.log('proorrrr', product)
        if (product.isBlank) return
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
            const proIndex = final.findIndex((item) => item.id === product.id)
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

    console.log(selectedProducts, "Lets see the selection")

    return (
        <>
            <Header/>
            <div className="sticky-top headerScroll">
                <div className="" style={{marginBottom: 0, height: "45px"}}>
                    <div className="">
                        <div className='btn btn-primary btn-lg text-uppercase me-1 returnBtn'
                             onClick={() => {
                                 history.push('/#orderSection')
                             }}>Return to Menu
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-sm" style={{marginTop: '45px'}}>
                <TopShelf
                    attachment={category?.attachment}
                    name={category?.name}
                    description={category?.description}
                />
                <hr className="text-dark"/>
                {/*<NutritionPrefModel/>*/}
                <div className="container-sm">
                    <div className="container-sm">
                        {filteredProducts.map(prod => (
                            <div key={prod.id}>
                                {!prod.isHidden && (
                                    <ProductsSubcategoryMenu
                                        heading={prod.name}
                                        limit={prod.fillingLimit}
                                        products={prod.products}
                                        subCatId={prod.id}
                                        isBlank={prod.isBlank}
                                        ispriority={prod.priority}
                                        handleSelectOption={handleSelectOption}
                                        handleChangeQuantity={handleChangeQuantity}
                                        handleSelectProduct={handleSelectProduct}
                                        selectedProducts={selectedProducts}
                                    />
                                )}
                                {prod.subCatId && (
                                    <div className="row">
                                        <div className="col-md-6" style={{margin: 'auto'}}>
                                            <div onClick={() => toggleSubcategory(prod.subCatId)} className="card add mb-lg-2 mb-1 overflow-hidden" style={{maxHeight: '98px', minHeight: '98px'}}>
                                                <h2 style={{margin: 'auto'}}>No {prod.name}</h2>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {prod.subCatId && hiddenSubcategories.filter(subCat => subCat.subCatId === prod.id).map(subCat => (
                                    <ProductsSubcategoryMenu
                                        key={subCat.id}
                                        heading={subCat.name}
                                        limit={subCat.fillingLimit}
                                        products={subCat.products}
                                        subCatId={subCat.id}
                                        isBlank={subCat.isBlank}
                                        ispriority={subCat.priority}
                                        handleSelectOption={handleSelectOption}
                                        handleChangeQuantity={handleChangeQuantity}
                                        handleSelectProduct={handleSelectProduct}
                                        selectedProducts={selectedProducts}
                                    />
                                ))}
                            </div>
                        ))}
                        {category?.isWinePaired && <Wines
                            restaurantId={userLocation.length ? userLocation[0].action.payload.restaurantId : restaurantId}
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
                productList={selectedProducts}
            />
            <OrdersList openCan={canvasOpen} onCloseModal={setCanvasOpen} productList={selectedProducts} />
        </>
    )
}
export default memo(Menu)
