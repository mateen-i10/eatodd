import React, {useEffect, useRef, useState} from 'react'
import "../home/components/Order/Order.css"
import icon from "../../assets/images/my-images/OMG_icon.png"
import {useSelector} from "react-redux"
import httpService, {baseURL} from "../../utility/http"
import {toast} from "react-toastify"
import {useHistory, useParams} from "react-router-dom"
import ComponentSpinner from "../../@core/components/spinner/Loading-spinner"
import ProductImage from "../home/components/product/ProductImage"
import Header from "../../shared/header/Header"
import useAPI from "../../utility/customHooks/useAPI"
import {clearGroupOrder, clearJoinByLink, isGroupOrderMemberName, joinByLink, setMemberName} from "../../utility/Utils"
import {Button, Form, FormFeedback, FormGroup, Input, Modal, ModalBody, ModalFooter} from "reactstrap"


const GroupOrderMenu = () => {
    //get redux state
    const {scrollSlice} = useSelector(state => state)
    const [mainCategory, setMainCategory] = useState([])
    const [isModal, setModal] = useState(false)
    const [mealName, setMealName] = useState('')
    const history = useHistory()
    const {code} = useParams()
    const orderRef = useRef(null)
    const [isLoading, response] = useAPI(`${baseURL}groupOrder/getByCode/${code}`, 'get', {}, {}, true)
    console.log('loading', isLoading)

    const friendName = localStorage.getItem('groupOrderMemberName')
    // console.log("username---------", friendName.length)

    useEffect(() => {
        console.log('ggggg', response)
        if (response && response.data) {
            const {data} = response
            !isGroupOrderMemberName() ? setModal(true) : setModal(false)
            joinByLink(data.restaurantId, data.customerId, data.id)
        } else if (response && !response.data) {
            clearGroupOrder()
            clearJoinByLink()
            toast('This group order has been canceled or completed.')
            history.push('/home')
        } else clearGroupOrder()

        httpService._get(`${baseURL}Category?pageIndex=1&&pageSize=12`)
            .then(response => {
                // success case
                if (response.status === 200 && response.data.statusCode === 200) {
                    const data = response.data.data
                    // console.log("data", data)
                    const final = data.map(item => ({
                        attachment: item.attachment,
                        id: item.id,
                        name: item.name,
                        description: item.description
                    }))
                    setMainCategory(final)
                } else {
                    //general Error Action
                    toast.error(response.data.message)
                    return null
                }
            })
            .catch(error => {
                toast.error(error.message)
            })

    }, [response])

    const scrollToOrder = scrollSlice[0]?.action.payload.toLowerCase() || ""
    if (scrollToOrder === 'order') {
        useEffect(() => {
            orderRef.current?.scrollIntoView({behavior: 'smooth'})
        }, [])
    }

    const memberNameModal = () => {
        return (
            <div className='basic-modal '>
                <Modal isOpen={isModal} toggle={() => setModal(isModal)}>
                    <div className='name-meal-model text-center my-1'><h1>Enter Your Name</h1></div>
                    <Form>
                        <ModalBody>
                            <FormGroup>
                                <div className='col-8' style={{marginLeft: 80}}>
                                    <Input type='text' placeholder='Enter Name' invalid={mealName.length === 0}
                                           style={{color: '#81be41'}}
                                           value={mealName}
                                           onChange={e => setMealName(e.target.value)}/>
                                    <FormFeedback>
                                        Name is required
                                    </FormFeedback>
                                </div>
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter style={{justifyContent: 'center', marginBottom: 20, marginTop: 30}}>
                            <Button color='primary' onClick={() => {
                                if (mealName.length === 0) {
                                    setModal(true)
                                } else {
                                    setMemberName(mealName)
                                    setModal(false)
                                }
                            }}>
                                Save
                            </Button>
                        </ModalFooter>
                    </Form>
                </Modal>
            </div>
        )
    }

    return (
        <>
            <Header isSimple={true}/>
            {memberNameModal()}
            <div className="order-main">
                {friendName.length > 0 ? <div className="container-fluid mt-5">
                    <div className="row align-items-center justify-content-center section-joined">
                        <div className="col-12 text-center">
                            {/*<img className=" d-lg-inline-flex d-none me-2" src={icon}*/}
                            {/*     alt="JOIN THE OMG WINE CLUB. UNLOCK"/>*/}
                            <div
                                className="loyalty-text "
                                style={{fontSize: "2.5rem"}}> {`Hey ${friendName}, YOU JOINED the ORDER.`}</div>
                        </div>
                    </div>
                </div> : <div className="container-fluid unlock-section">
                    <div className="container-sm">
                        <div className="row align-items-center justify-content-center pt-1 pb-1">
                            <div className="col-md-8" style={{display: 'flex', paddingTop: '3px'}}>
                                <img className="unlock-img d-lg-inline-flex d-none me-2" src={icon}
                                     alt="JOIN THE OMG WINE CLUB. UNLOCK"/>
                                <div className="loyalty-text">JOIN THE OMG WINE CLUB. UNLOCK VENDOR PRICING.</div>
                            </div>
                        </div>
                    </div>
                </div>}
                <div className="menu-list container-sm pb-5 pt-5  mx-auto" id="orderSection" ref={orderRef}>
                    <div className="row ms-0 me-1 ">
                        {
                            mainCategory.length ? mainCategory.map(item => {
                                // eslint-disable-next-line multiline-ternary
                                return item.name.toString().toLowerCase() !== "wine" ?
                                    <div className="col-md-3  col-12 top-level-menu" key={item.id}>
                                        <div className="menu-item-1" onClick={() => {
                                            history.push("/OmgPlate", {
                                                categoryId: item.id,
                                                restaurantId: response?.data?.restaurantId
                                            })
                                        }}>
                                            <div className="thumbnail ">
                                                <ProductImage attachment={item.attachment}
                                                              styles={{
                                                                  width: "200px",
                                                                  height: "180px",
                                                                  margin: "auto"
                                                              }}/>
                                            </div>
                                            <div className="text2">
                                                <div className="display-name">{item.name}</div>
                                                <div className="order-cta">Order
                                                    <div className="arrow-right"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : ""
                            }) : <ComponentSpinner/>
                            // <div className="fs-1 fw-bolder text-center mt-5"> No item found in Database</div>
                        }
                        {mainCategory.length ? <div
                            className=" top-wine-menu col-md-3 col-12 d-flex flex-column align-items-center justify-content-center zindex-2 cursor-pointer ">
                            <div className="wine-item "
                                 onClick={() => {
                                     history.push("/wine/homepage")
                                 }}
                            >
                                <div className="wine-thumbnail align-items-center justify-content-center">
                                    <img
                                        src={require("../../assets/images/wineClub/Ferrari Carrano.png").default}
                                        alt="wine"
                                        width={150}
                                        height={180}
                                    />
                                </div>
                                <div className="text-center">
                                    <div className="wine-name fs-3 fw-bolder text-primary">Wine</div>
                                    <div className="wine-order fs-4 text-black fw-bolder">Order
                                        <div className="arrow-right" style={{height: 20, width: 20}}></div>
                                    </div>
                                </div>
                            </div>
                        </div> : ""}
                    </div>
                </div>
            </div>
        </>
    )
}
export default GroupOrderMenu
