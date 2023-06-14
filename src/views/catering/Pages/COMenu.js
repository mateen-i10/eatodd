import React, {useEffect, useState} from 'react'
import TopShelf from "../../home/options/components/TopShelf"
import Header from "../../../shared/header/Header"
import Footer from "../../../shared/footer/Footer"
import CatMealItems from "../components/CatMealItems"
import useAPI from "../../../utility/customHooks/useAPI"
import {useHistory, useParams} from "react-router-dom"
import UILoader from "../../../@core/components/ui-loader"
import {SectionItemType} from "../../../utility/enums/Types"
import {addCateringItem, isObjEmpty} from "../../../utility/Utils"
import CateringMenuFooter from "../components/CateringMenuFooter"
import {
    Button,
    Col,
    DropdownItem,
    DropdownMenu,
    DropdownToggle, Form, FormFeedback,
    FormGroup, Input,
    Label,
    ModalBody, ModalFooter,
    Row,
    UncontrolledDropdown
} from "reactstrap"
import {ChevronDown} from "react-feather"
import Select from "react-select"

const COMenu = () => {
    const {id} = useParams()
    const history = useHistory()

    // local states
    const [menuItem, setMenuItem] = useState({})
    const [sections, setSections] = useState([])
    const [selectedItems, setSelectedItems] = useState([])
    console.log(selectedItems, "see")

    const [quantity, setQuantity] = useState(10)

    // hooks
    const [isLoading, response] = useAPI(`cateringMenuItem/${id}`, 'get', {}, {}, true)
    useEffect(() => {
        if (response && response.data) {
            const {data} = response
            setMenuItem({
                id: data.id,
                name: data.name,
                price: data.price,
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
                            price: i.price * quantity,
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
    }, [response, quantity])

    // functions
    const handleSelect = (item) => {
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
    const addToCart = (instructions) => {
        // calculating meal total price
        let finalItems = []
        let totalPrice = 0
        console.log('ins', instructions)

        if (selectedItems && selectedItems.length > 0) {
            finalItems = selectedItems.map(item => {
                if (!isObjEmpty(item)) {
                    const price = item.price
                    totalPrice = totalPrice + (price * quantity)
                    return {...item, selectedQuantity: quantity, calculatedPrice: price * quantity, price}
                }
            })
        }
        totalPrice = totalPrice + (menuItem.price * quantity)
        const item = {
            id: menuItem.id,
            name: menuItem.name,
            totalPrice,
            perPersonPrice: menuItem.price,
            quantity,
            selectedProducts: [...finalItems]
        }
        addCateringItem(item)
        history.push('/catering')
    }

    console.log('responses', response)
    console.log('sec', sections)


    return (
        <div>
            <UILoader blocking={isLoading}>
                <Header/>
                <div className="container-sm mb-0">
                    <TopShelf attachment={menuItem?.attachment}
                              name={menuItem.name}
                              description={menuItem.description}
                              price={menuItem.price}
                    />
                    <hr className="text-dark mt-1"/>
                </div>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <Form>
                            <div className='col-8'>
                                <h2 className='form-label mt-2' htmlFor='qty' style={{fontSize: '20px'}}>
                                    Select Quantity:
                                </h2>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    marginTop: "-36px",
                                    marginBottom: 10
                                }}>
                                    {/*<Select>
                                        <option value={10} onClick={() => setQuantity(10)} > 10 People</option>
                                    </Select>*/}
                                    <UncontrolledDropdown style={{width: '0%'}}>
                                        <DropdownToggle caret color="transparent" style={{
                                            border: "1px solid #81be41",
                                            color: '#81be41',
                                            fontWeight: 700
                                        }}>
                                            {quantity} <ChevronDown size={18}/>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem onClick={() => setQuantity(10)}>
                                                10 People
                                            </DropdownItem>
                                            <DropdownItem onClick={() => setQuantity(15)}>
                                                15 People
                                            </DropdownItem>
                                            <DropdownItem onClick={() => setQuantity(20)}>
                                                20 People
                                            </DropdownItem>
                                            <DropdownItem onClick={() => setQuantity(25)}>
                                                25 People
                                            </DropdownItem>
                                            <DropdownItem onClick={() => setQuantity(30)}>
                                                30 People
                                            </DropdownItem>
                                            <DropdownItem
                                                onClick={() => setQuantity(100)}>100 People</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </div>

                                <FormFeedback>
                                    Quantity is required
                                </FormFeedback>
                            </div>
                        </Form>
                    </Col>
                    <Col md={2}></Col>
                </Row>
                {sections.map(s => {
                    return <div key={`${s.name}`} className="container-sm mt-3 mb-4 text-center">
                        <h1>{s.name}</h1>
                        <div className="row align-items-center justify-content-center my-1">
                            {s.items.map((product) => (
                                <div className="col-12 col-xl-5" key={`${product.id}`}>
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
                <CateringMenuFooter addToCartClick={addToCart}/>
                <Footer/>
            </UILoader>
        </div>
    )
}

export default COMenu
