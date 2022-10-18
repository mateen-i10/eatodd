import React, {useEffect, useState} from 'react'
import Header from "../../shared/header/Header"
import Footer from "../../shared/footer/Footer"
import {Button} from "reactstrap"
import {Link, useHistory} from "react-router-dom"
import {getUserData, isCustomer, isUserLoggedIn} from "../../auth/utils"
import {getCartData, isGroupOrder, setGroupOrder} from "../../utility/Utils"
import UILoader from "../../@core/components/ui-loader"
import useAPI from "../../utility/customHooks/useAPI"
import GroupOrderCreated from "./groupOrderCreated"

const CreateGroupOrder = () => {
    const history = useHistory()
    const [url, setUrl] = useState('')
    const [data, setData] = useState('')
    const [groupOrder, setIsGroupOrder] = useState(isGroupOrder())
    const [isLoading, response] = useAPI(url, 'post', data, {}, true)

    useEffect(() => {
        console.log('resss', response)
        if (response && response.data) {
            setIsGroupOrder(true)
            console.log('response.data.id', response.data.id)
            console.log('response.data', response.data)
            setGroupOrder(true, response.data.id)
        }
    }, [response])

 const createGroupOrder = (e) => {
     e.preventDefault()
     if (!getUserData() || !isCustomer()) history.push('/login', {returnURL: '/groupOrder'})
     if (isUserLoggedIn() && isCustomer()) {
         const restaurantId = localStorage.getItem('restaurantId')
         const customerId = getUserData().customerId
         const cartData = getCartData()
         let meals = []
         // adding meals to order
         if (cartData && cartData.meals && cartData.meals.length > 0) {
             meals = cartData.meals.map(m => {
                 return {
                     name: m.mealName,
                     categoryId: m.categoryId,
                     customerId,
                     mealProducts : m.selectedProducts && m.selectedProducts.length > 0 ? m.selectedProducts.map(p => {
                         return {
                             productId : p.id,
                             quantity: p.selectedQuantity,
                             unitPrice : p.price,
                             optionId: p.options && p.options.length > 0 ? p.options.find(p => p.isSelected)?.id : null
                         }
                     }) : []
                 }
             })
         }

         setData({
             meals,
             restaurantId,
             customerId
         })
         setUrl('groupOrder')
     }
 }
    return (
        <div>
            <Header/>
            {groupOrder ? <div className='container-sm my-4'><GroupOrderCreated groupCode={`${response?.data?.groupCode}`}/></div>  : <UILoader blocking={isLoading}>
                <div className="container-sm">
                <div className="row justify-content-center align-items-center">
                    <div className="col-sm-8 col-10 text-center">
                        <div className="text-uppercase fw-bolder text-black mt-2 mb-2"
                             style={{fontSize: 27}}> start a group
                            order
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-4 col-md-5 col-sm-7 col-8 text-center ">

                        <img src={require("../../assets/images/Menu&Order/dancing-veggies.gif").default}
                             alt="vegeis" height={200} width={"100%"}/>
                        <div className=" fw-bold mb-2" style={{fontSize: "1.2rem", color: "black"}}>Sign in to start a
                            group
                            order, earn rewards
                            and get status
                            updates
                        </div>
                        {/*{userdata !== null && <div className=" fw-bold mb-2" style={{fontSize: "2.3rem", color: "black", textTransform: 'capitalize'}}>User has invited you to eat EatOmg today.</div>}*/}

                        <div className="mb-2" style={{fontSize: "1.1rem"}}>We will provide a link to share with your
                            group. Up to 20
                            participant meals can be added
                            and you get all the points.
                        </div>

                        {/*{userdata !== null && <div style={{textAlign: 'start'}}>*/}
                        {/*    <Label>Full Name</Label>*/}
                        {/*    <Input placeholder='Enter your full name' />*/}
                        {/*</div>}*/}

                        {/*{userdata !== null && <div className="mb-2 mt-2">*/}
                        {/*    <Button*/}
                        {/*        style={{width: "100%", fontSize: "1.2rem", textTransform: "uppercase"}} color="primary">Join*/}
                        {/*        Group*/}
                        {/*        order</Button>*/}
                        {/*</div>}*/}

                        <div className="mb-2">
                            <Button
                            onClick= {createGroupOrder}
                            style={{width: "100%", fontSize: "1.2rem", textTransform: "uppercase"}} color="primary">
                                Create Group order
                            </Button>
                        </div>
                        <div className="mb-1" style={{fontSize: "1.1rem"}}>Need more than 20 participant meals?</div>
                        <Link to="/catering">
                            <div className="text-decoration-underline text-black fw-bold mb-2 cursor-pointer"
                                 style={{fontSize: "1.1rem"}}>Try
                                Catering
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            </UILoader>}
            <Footer/>
        </div>
    )
}

export default CreateGroupOrder
