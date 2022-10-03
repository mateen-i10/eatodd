import React, {useEffect, useState} from 'react'
import TopShelf from "../../home/options/components/TopShelf"
import Header from "../../../shared/header/Header"
import Footer from "../../../shared/footer/Footer"
import CatMealItems from "../components/CatMealItems"
import useAPI from "../../../utility/customHooks/useAPI"
import {useParams} from "react-router-dom"
import UILoader from "../../../@core/components/ui-loader"
import {SectionItemType} from "../../../utility/enums/Types"
import {addCateringItem, isObjEmpty} from "../../../utility/Utils"
import CateringMenuFooter from "../components/CateringMenuFooter"

const COMenu = () => {
    const {id} = useParams()

    // local states
    const [menuItem, setMenuItem] = useState({})
    const [sections, setSections] = useState([])
    const [selectedItems, setSelectedItems] = useState([])

    // hooks
    const [isLoading, response] = useAPI(`cateringMenuItem/${id}`, 'get', {}, {}, true)
    useEffect(() => {
        if (response && response.data) {
            const {data} = response
            setMenuItem({
                id: data.id,
                name: data.name,
                description: data.description,
                attachment: data.attachment
            })
            if (data.cateringMenuItemSections && data.cateringMenuItemSections.length > 0) {
                const sec = data.cateringMenuItemSections.map(c => {
                    return c.section ? {
                        id: c.section.id,
                        name: c.section.name,
                        items: c.section && c.section.sectionItems ? c.section.sectionItems.map(i => ({
                            id: i.id,
                            name: i.name,
                            image: require("../../../assets/images/eatOmg pics 100size/Lamb Sandwich.jpg").default,
                            description: '',
                            price: i.price,
                            attachment: i.attachment,
                            item: {
                                ...i,
                                sectionId: c.section.id,
                                sectionType: c.section.sectionType,
                                sectionItemType: c.section.sectionItemType
                            }
                        })) : []
                    } : undefined
                })
                setSections([...sec])
            }
        }
    }, [response])

    // functions
    const handleSelect = (item) => {
        console.log('iii', item)
        let finalItems = []

        // remove item case
        if (selectedItems && selectedItems.find(c => c.id === item.id)) {
            finalItems = selectedItems.filter(c => c.id !== item.id)
        } else if (item.sectionItemType === SectionItemType.Radio) {
            // add new item when type is radio
            finalItems = [...selectedItems.filter(c => c.sectionId !== item.sectionId), item]
        } else {
            // add new item when type is checkbox
            finalItems = [...selectedItems, item]
        }
        setSelectedItems([...finalItems])
    }
    const addToCart = () => {
        // calculating meal total price
        let finalItems = []
        let totalPrice = 0

        if (selectedItems && selectedItems.length > 0) {
            finalItems = selectedItems.map(item => {
                if (!isObjEmpty(item)) {
                    const price = item.price
                    totalPrice = totalPrice + price
                    return {...item, calculatedPrice: price, price}
                }
            })
        }

        const item = {
            id: menuItem.id,
            name: menuItem.name,
            totalPrice,
            selectedProducts: [...finalItems]
        }
        addCateringItem(item)
        //history.push('/home')
    }

    console.log('responses', response)
    console.log('sec', sections)
    console.log('addToCart', addToCart)


    return (
        <div>
            <UILoader blocking={isLoading}>
                <Header/>
                <div className="container-sm mb-0">
                    <TopShelf attachment={menuItem?.attachment}
                              name={menuItem.name}
                              description={menuItem.description}
                    />
                    <hr className="text-dark m-0"/>
                </div>
                {sections.map(s => {
                    return <div className="container-sm mt-3 mb-4 text-center">
                        <h1>{s.name}</h1>
                        <div className="row align-items-center justify-content-center my-1">
                            {s.items.map((product) => (
                                <div className="col-9 col-xl-5" key={product.id}>
                                    <CatMealItems
                                        product={product}
                                        handleSelect={handleSelect}
                                        selectedItems={selectedItems}
                                        attachment={product.attachment}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                })}
                {/*<Button onClick={addToCart}>Add To Cart</Button>*/}
                <CateringMenuFooter/>
                <Footer/>
            </UILoader>
        </div>
    )
}

export default COMenu
