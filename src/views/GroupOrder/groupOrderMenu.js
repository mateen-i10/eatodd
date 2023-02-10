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
import {Button, Form, FormFeedback, FormGroup, Input, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap"


const GroupOrderMenu = () => {
    //get redux state
    const {scrollSlice} = useSelector(state => state)
    const [mainCategory, setMainCategory] = useState([])
    const [isModal, setModal] = useState(false)
    const [mealName, setMealName] = useState('')
    const [omgPlate, setOmgPlate] = useState([])
    const [omgSandwich, setSandwich] = useState([])
    const [modalClicked, setModalClicked] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState(0)
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
                // new changes
                if (response.status === 200 && response.data.statusCode === 200) {
                    const data = response.data.data
                    const finalData = data.map(item => ({
                        attachment: item.attachment,
                        id: item.id,
                        name: item.name,
                        description: item.description
                    }))
                    const finalCategory = finalData.filter((item) => item.name.toString().trim().toLowerCase() !== 'signature plates' && item.name.toString().trim().toLowerCase() !== 'signature sandwich')
                    const finalOmgPlate = finalData.filter((item) => item.name.toString().trim().toLowerCase() === 'signature plates' || item.name.toString().trim().toLowerCase() === 'omg plate')
                    const finalSandwich = finalData.filter((item) => item.name.toString().trim().toLowerCase() === 'signature sandwich' || item.name.toString().trim().toLowerCase() === 'omg sandwich')
                    setOmgPlate(finalOmgPlate)
                    setSandwich(finalSandwich)
                    setMainCategory(finalCategory)
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
                {friendName?.length > 0 ? <div className="container-fluid mt-5">
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
                                // item.name.toString().toLowerCase() !== "wine" ?
                                return (
                                    <div className="col-md-3  col-12 top-level-menu" key={item.id}>
                                        <div className="menu-item-1" onClick={() => {
                                            if (item.name.toString().trim().toLowerCase() === "omg plate") {
                                                setModalClicked(!modalClicked)
                                                setSelectedCategory(1)
                                            } else if (item.name.toString().trim().toLowerCase() === "omg sandwich") {
                                                setModalClicked(!modalClicked)
                                                setSelectedCategory(2)
                                            } else {
                                                history.push("/OmgPlate", {
                                                    categoryId: item.id,
                                                    restaurantId: response?.data?.restaurantId
                                                })
                                            }
                                        }}>
                                            <div className="thumbnail ">
                                                <ProductImage attachment={item.attachment}
                                                              styles={{width: "200px", height: "180px", margin: "auto"}} classes="categoryImage"/>
                                            </div>
                                            <div className="text2">
                                                <div className="display-name">{item.name}</div>
                                                <div className="order-cta">Order
                                                    <div className="arrow-right"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                            }) : <ComponentSpinner/>
                        }

                    </div>
                </div>
            </div>
            <Modal  isOpen={modalClicked} toggle={() => setModalClicked(!modalClicked)} className='modal-dialog-centered modal-lg'>
                <ModalHeader toggle={() => setModalClicked(!modalClicked)}>PLEASE SELECT</ModalHeader>
                <ModalBody>
                    <div className="container-sm">
                        <div className="row">
                            {selectedCategory === 1 && omgPlate.map((item) => (

                                <div className="col-6 text-center cursor-pointer " onClick={() => history.push("/OmgPlate", {
                                    categoryId: item.id,
                                    restaurantId: response?.data?.restaurantId
                                })}>
                                    <div className=" ">
                                        <ProductImage attachment={item.attachment}
                                                      styles={{width: "200px", height: "200px", margin: "auto"}}/>
                                    </div>
                                    <div className="">
                                        <div className="text-uppercase fs-3 fw-bolder">{item.name.toString().trim().toLowerCase() === "omg plate" ? "build your own plate" : item.name}</div>
                                    </div>
                                </div>))}
                        </div>
                    </div>
                    <div className="container-sm">
                        <div className="row">
                            {selectedCategory === 2 && omgSandwich.map((item) => (
                                <div className="col-6 text-center cursor-pointer " onClick={() => history.push("/OmgPlate", {
                                    categoryId: item.id,
                                    restaurantId: response?.data?.restaurantId
                                })}>
                                    <div className=" ">
                                        <ProductImage attachment={item.attachment}
                                                      styles={{width: "200px", height: "200px", margin: "auto"}}/>
                                    </div>
                                    <div className="">
                                        <div className="text-uppercase fs-3 fw-bolder">{item.name.toString().trim().toLowerCase() === "omg sandwich" ? "build your own sandwich" : item.name}</div>
                                    </div>
                                </div>))}
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </>
    )
}
export default GroupOrderMenu
