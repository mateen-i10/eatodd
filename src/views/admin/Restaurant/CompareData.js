import React, {Fragment, useState} from 'react'
import {Button, Col, Input, Label, Modal, ModalBody, ModalHeader, Row} from "reactstrap"
import AsyncSelect from "react-select/async"
import {Delete, Plus} from "react-feather"
//import {loadOptions} from "../../../utility/Utils"
import httpService, {baseURL} from "../../../utility/http"
import {toast} from "react-toastify"
import Joi from "joi-browser"
import {useDispatch} from "react-redux"
import {addLocationToRestaurant} from "../../../redux/restaurant/actions"
import {setDetailLoading} from "../../../redux/restaurant/reducer"


const CompareData = (props) => {

    const compareObject = {restaurant: {label: null, value: null}, location: {label: null, value: null}}
    const [compare, setCompare] = useState([compareObject])

    const dispatch = useDispatch()


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

    const restaurants = async () => {
        return httpService._get(`${baseURL}restaurant/getLocations`)
            .then(response => {
                // success case
                if (response.status === 200 && response.data.statusCode === 200) {
                    return response.data.data.restaurants.map(d =>  {
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

    const removeCompareList = (index) => {
        const newArray = [...compare]
        newArray.splice(index, 1)
        setCompare(newArray)
    }

    const addCompareList = () => {
        const newArray = [...compare, compareObject]
        setCompare(newArray)
    }

    const onSelectRestaurant = (index, e) => {
        console.log('eee', e)
        const newArray = compare.map((s, i) => {
            if (i === index) {
                s = {...s, restaurant: e}
            }
            return s
            console.log('s', s)
        })
        console.log('newArrayRe', newArray)
        setCompare(newArray)
    }

    const onSelectLocation = (index, e) => {
        console.log('eee', e)
        const newArray = compare.map((s, i) => {
            if (i === index) {
                s = {...s, location: e}
            }
            return s
            console.log('s', s)
        })
        setCompare(newArray)
        console.log('newArrayRe1', newArray)
    }

    const handleClose = () => {
        setCompare([{restaurant: {label: null, value: null}, location: {label: null, value: null}}])
    }

    const onModalClose = (event) => {
        props.onCloseModal(event)
        handleClose()
    }

    const handleSubmit = () => {
        try {
            console.log('compare', compare)
            const finalData = compare.map(r => {
                return {locationId: r.location.value, restaurantId: r.restaurant.value}
            })
            dispatch(setDetailLoading(true))
            dispatch(addLocationToRestaurant(finalData))
            console.log('finalData', finalData)
            onModalClose()
        } catch (e) {
            toast.error(e.message)
        }

    }

    return (
        <Fragment>
            <Modal isOpen={props.IsModalOpened} className='modal-dialog-centered modal-lg'>
                <ModalHeader className='bg-transparent' onClick={e => onModalClose(e)}></ModalHeader>
                <ModalBody className='mx-50 pb-5'>
                    <div className='text-center mb-2'>
                        <h1 className='mb-1'>Assign Location To Restaurant</h1>
                    </div>
                    <Row tag='form' className='gy-1 pt-75' /*onSubmit={handleSubmit(onSubmit)}*/>
                        <div className='ms-1'>
                            {compare.map((i, index) => {
                                return <div key={`list-${index}`} className='row mt-1'>
                                    <div className='col-5'>
                                        <Label className='form-label' for='name'>Select Restaurant:</Label>
                                        <AsyncSelect
                                            cacheOptions
                                            defaultOptions
                                            defaultValue={i.restaurant}
                                            onChange={(e) => onSelectRestaurant(index, e)}
                                            loadOptions={restaurants}
                                            closeMenuOnSelect={true}
                                            isMulti = {false}
                                        />
                                    </div>
                                    <div className='col-5'>
                                        <Label className='form-label' for='name'>Select Location:</Label>
                                        <AsyncSelect
                                            cacheOptions
                                            defaultOptions
                                            defaultValue={i.location}
                                            onChange={(e) => onSelectLocation(index, e)}
                                            loadOptions={locations}
                                            closeMenuOnSelect={true}
                                            isMulti = {false}
                                        />
                                    </div>
                                    {compare.length > 1 && <div className='col-2'>
                                        <Button.Ripple className='btn-icon' style={{marginTop: '26px'}} color='danger' onClick={() => removeCompareList(index)}>
                                            <Delete size={12}/>
                                        </Button.Ripple>
                                    </div>
                                    }
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

export default CompareData
