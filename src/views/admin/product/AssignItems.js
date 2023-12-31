import React, {Fragment, useState} from 'react'
import {useDispatch} from "react-redux"
import httpService, {baseURL} from "../../../utility/http"
import {toast} from "react-toastify"
import {Button, Col, Label, Modal, ModalBody, ModalHeader, Row} from "reactstrap"
import AsyncSelect from "react-select/async"
import {Delete, Plus, Search} from "react-feather"
import {addItemsToProduct} from "../../../redux/products/actions"
import {setDetailLoading} from "../../../redux/products/reducer"
import Tooltip from 'react-tooltip'

const AssignLocationAndItems = (props) => {

    const itemObject = {generalProducts: {label: null, value: null}, squareItems: {label: null, value: null}}
    const [item, setItem] = useState([itemObject])

    const dispatch = useDispatch()

    const [d, setD] = useState()
    console.log(d, "the d")

    const locations = async () => {
        return httpService._get(`${baseURL}restaurant/getLocations`)
            .then(response => {
                // success case
                if (response.status === 200 && response.data.statusCode === 200) {
                    return response.data.data.locations.map(d =>  {
                        return {label: `${d.locationName}`, value: d.locationId}
                    })
                } else {
                    //general Error Action
                    toast.error(response.data.message)
                }
            }).catch(error => {
                toast.error(error.message)
            })
    }

    /*const generalProducts = async () => {
        return httpService._get(`${baseURL}generalProduct/ItemsFromSqaure`)
            .then(response => {
                // success case
                console.log('ressss', response)
                if (response.status === 200 && response.data.statusCode === 200) {
                    console.log('ressss1', response)
                    return response.data.data.generalProducts.map(d =>  {
                        return {label: `${d.name}`, value: d.id}
                    })
                } else {
                    //general Error Action
                    toast.error(response.data.message)
                }
            }).catch(error => {
                toast.error(error.message)
            })
    }*/
    const generalProducts = (input) => {
        return httpService._get(`${baseURL}GeneralProduct?pageIndex=1&&pageSize=12&&searchQuery=${input}&&refId=${props.subcategoryId}`)
            .then(response => {
                console.log(response, "gp response")
                // success case
                if (response.status === 200 && response.data.statusCode === 200) {
                    return response.data.data.map(d =>  {
                        setD(response.data.data)
                        return {label: `${d.name}`, value: d.id}
                    })
                } else {
                    //general Error Action
                    toast.error(response.data.message)
                }
            }).catch(error => {
                toast.error(error.message)
            })
    }


    const Items = async () => {
        return httpService._get(`${baseURL}generalProduct/ItemsFromSqaure`)
            .then(response => {
                // success case
                console.log('ressss2', response)
                if (response.status === 200 && response.data.statusCode === 200) {
                    console.log('ressss21', response)
                    return response.data.data.items?.map(d =>  {
                        return {label: `${d.result?.itemName}-(${d.result?.categoryName})`, value: d.result?.itemId}
                    })
                } else {
                    //general Error Action
                    toast.error(response.data.message)
                }
            }).catch(error => {
                toast.error(error.message)
            })
    }

    const removeCompareList = (index) => {
        const newArray = [...item]
        newArray.splice(index, 1)
        setItem(newArray)
    }

    const addCompareList = () => {
        const newArray = [...item, itemObject]
        setItem(newArray)
    }

    const onSelectGeneralProduct = (index, e) => {
        console.log('eee', e)
        const newArray = item.map((s, i) => {
            if (i === index) {
                s = {...s, generalProducts: e}
            }
            return s
            console.log('s', s)
        })
        console.log('newArrayRe', newArray)
        setItem(newArray)
    }

    const onSelectItems = (index, e) => {
        console.log('eee', e)
        const newArray = item.map((s, i) => {
            if (i === index) {
                s = {...s, squareItems: e}
            }
            return s
            console.log('s', s)
        })
        console.log('newArrayRe', newArray)
        setItem(newArray)
    }

    const onSelectLocation = (index, e) => {
        console.log('eee', e)
        const newArray = item.map((s, i) => {
            if (i === index) {
                s = {...s, location: e}
            }
            return s
            console.log('s', s)
        })
        setItem(newArray)
        console.log('newArrayRe1', newArray)
    }

    const handleClose = () => {
        setItem([{generalProducts: {label: null, value: null}, squareItems: {label: null, value: null}}])
    }

    const onModalClose = (event) => {
        props.onCloseModal(event)
        handleClose()
    }

    const handleSubmit = () => {
        try {
            console.log('itemsGet', item)
            const finalData = item.map(r => {
                return {generalProductId: r.generalProducts.value, squareItemId: r.squareItems.value, locationIds: [r.location.map(l => l.value).toString()]}
            })
            dispatch(setDetailLoading(true))
            dispatch(addItemsToProduct(finalData))
            console.log('finalData', finalData)
            onModalClose()
        } catch (e) {
            toast.error(e.message)
        }

    }

    return (
        <Fragment>
            <Modal isOpen={props.IsModalOpened} className='modal-dialog-centered modal-xl'>
                <ModalHeader className='bg-transparent' onClick={e => onModalClose(e)}></ModalHeader>
                <ModalBody className='mx-50 pb-5'>
                    <div className='text-center mb-2'>
                        <h1 className='mb-1'>Assign items To Product</h1>
                        <hr/>
                    </div>
                    <Row tag='form' className='gy-1 pt-75' /*onSubmit={handleSubmit(onSubmit)}*/>
                        <div className='col-md-3 text-center'><h4 className='fw-bolder'>EATOMG</h4></div>
                        <div className='col-md-7 text-center'><h4 className='fw-bolder'>SQUARE</h4></div>
                        <div>
                            {item.map((i, index) => {
                                return <div key={`list-${index}`} className='row mt-1'>
                                    <div className='col-3' style={{borderRight: '1px solid #c2b8b8'}}>
                                        <Label className='form-label' for='name'>Select General Product:</Label>
                                        <AsyncSelect
                                            cacheOptions
                                            defaultOptions
                                            defaultValue={i.generalProductId}
                                            onChange={(e) => onSelectGeneralProduct(index, e)}
                                            loadOptions={generalProducts}
                                            closeMenuOnSelect={true}
                                            isMulti = {false}
                                        />
                                    </div>
                                    <div className='col-4'>
                                        <Label className='form-label' for='name'>Select Items:</Label>
                                        <AsyncSelect
                                            cacheOptions
                                            defaultOptions
                                            defaultValue={i.squareItemId}
                                            onChange={(e) => onSelectItems(index, e)}
                                            loadOptions={Items}
                                            closeMenuOnSelect={true}
                                            isMulti = {false}
                                        />
                                    </div>
                                    <Tooltip
                                        place="top"
                                        type="dark"
                                        effect="float"
                                        className='text-white'
                                        data-width="200"
                                    />
                                    <div className='col-1 text-center' data-tip="Search From Item" sm='12' style={{marginTop:'22px'}}>
                                        <Button style={{padding:'0.715rem 0.736rem'}} type="button" color='primary'><Search size={18}/></Button>
                                    </div>
                                    <div className='col-3'>
                                        <Label className='form-label' for='name'>Select Location:</Label>
                                        <AsyncSelect
                                            cacheOptions
                                            defaultOptions
                                            defaultValue={i.locationIds}
                                            onChange={(e) => onSelectLocation(index, e)}
                                            loadOptions={locations}
                                            closeMenuOnSelect={true}
                                            isMulti = {true}
                                        />
                                    </div>
                                    <div className='col-1'>
                                        {item.length > 1 && <div className='col-2'>
                                            <Button.Ripple className='btn-icon' style={{marginTop: '26px'}} color='danger' onClick={() => removeCompareList(index)}>
                                                <Delete size={12}/>
                                            </Button.Ripple>
                                        </div>
                                        }
                                    </div>
                                </div>
                            })}
                            <div className='col-2'>
                                <Button.Ripple className='btn-icon mt-1 ms-1' color='primary' onClick={addCompareList}>
                                    <Plus size={12} />
                                </Button.Ripple>
                            </div>
                        </div>
                        <Col xs={12} className='text-end mt-2 pt-50'>
                            <Button type='reset' color='secondary' onClick={e => onModalClose(e)}>
                                Close
                            </Button>
                            <Button className='ms-1' color='primary' onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </Fragment>
    )
}

export default AssignLocationAndItems