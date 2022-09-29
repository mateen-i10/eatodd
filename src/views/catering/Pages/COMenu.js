import React, {useEffect, useState} from 'react'
import TopShelf from "../../home/options/components/TopShelf"
import Header from "../../../shared/header/Header"
import Footer from "../../../shared/footer/Footer"
import CatMealItems from "../components/CatMealItems"
import useAPI from "../../../utility/customHooks/useAPI"
import {useParams} from "react-router-dom"

const COMenu = () => {
    const {id} = useParams()
    const [menuItem, setMenuItem] = useState({})
    const [sections, setSections] = useState([])
    const [isLoading, response] = useAPI(`cateringMenuItem/${id}`, 'get', {}, {}, true)
    console.log('isLoading', isLoading)
    console.log('id', id)
    console.log('responses', response)
    console.log('sec', sections)
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
                            price: i.price
                        })) : []
                    } : undefined
                })
                setSections([...sec])
            }
        }
    }, [response])
    return (
        <div>
            <Header/>
            <div className="container-sm ">
                <TopShelf attachment={menuItem?.attachment}
                          name={menuItem.name}
                          description={menuItem.description}
                />
                <hr className="text-dark"/>
            </div>
            {sections.map(s => {
                    return <div className="container-sm mt-5 mb-4 text-center">
                    <h1>{s.name}</h1>
                    <div className="row align-items-center justify-content-center my-1">
                        {s.items.map((product) => (
                            <div className="col-9 col-xl-5" key={product.id}>
                                <CatMealItems product={product}/>
                            </div>
                        ))}
                    </div>
                </div>
            })}

            <Footer/>
        </div>
    )
}

export default COMenu
