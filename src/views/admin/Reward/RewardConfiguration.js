import React, {useEffect, useState} from 'react'
import UILoader from "../../../@core/components/ui-loader"
import {Button, Card, CardBody, CardHeader, Input, Label} from "reactstrap"
import {useDispatch, useSelector} from "react-redux"
import {loadRewards, updateReward} from "../../../redux/Reward/action"
import {toast} from "react-toastify"

const RewardConfiguration = () => {

    const rewardsList = useSelector(state => state.reward.list)
    //const miscData = useSelector(state => state.reward.miscData)
    //const formInitialState = useSelector(state => state.reward.list)
    const isSuccess = useSelector(state => state.reward.isSuccess)
    //const isEdit = useSelector(state => state.reward.isEdit)
    const isLoading = useSelector(state => state.reward.isLoading)

    const newReward = rewardsList[0]
    console.log('newReward', newReward)

    const newUsd = newReward?.usd
    const newOmgPoints = newReward?.omgPoints
    const newMiniOrderAmount = newReward?.miniOrderAmount
    const newMiniAllowedPoints = newReward?.miniAllowedPoints
    const newDiscountOnMiniAllowedPoints = newReward?.discountOnMiniAllowedPoints

    const [usd, setUsd] = useState(localStorage.getItem('myComponentValue') || newUsd)
    const [omgPoints, setOmgPoints] = useState(localStorage.getItem('myComponentValue1') || newOmgPoints)
    const [miniOrderAmount, setMiniOrderAmount] = useState(localStorage.getItem('myComponentValue2') || newMiniOrderAmount)
    const [miniAllowedPoints, setMiniAllowedPoints] = useState(localStorage.getItem('myComponentValue3') || newMiniAllowedPoints)
    const [discountOnMiniAllowedPoints, setDiscountOnMiniAllowedPoints] = useState(localStorage.getItem('myComponentValue4') || newDiscountOnMiniAllowedPoints)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadRewards())
    }, [isSuccess])

    useEffect(() => {
        localStorage.setItem('myComponentValue', newUsd)
        localStorage.setItem('myComponentValue1', newOmgPoints)
        localStorage.setItem('myComponentValue2', newMiniOrderAmount)
        localStorage.setItem('myComponentValue3', newMiniAllowedPoints)
        localStorage.setItem('myComponentValue4', newDiscountOnMiniAllowedPoints)
    }, [usd, omgPoints, miniOrderAmount, miniAllowedPoints, discountOnMiniAllowedPoints])

    const handleSubmit = () => {
        try {
            const finalData = {
                id: newReward.id,
                usd,
                omgPoints,
                miniOrderAmount,
                miniAllowedPoints,
                discountOnMiniAllowedPoints
            }
            console.log('submit data', finalData)
            dispatch(updateReward(finalData))

        } catch (e) {
            toast.error(e.message)
        }

    }


    return (
        <div>
            <UILoader blocking={isLoading}>
                <Card>
                    <CardHeader>
                        <h1 style={{color: '#81be41'}}>Reward Configuration</h1>
                    </CardHeader>
                    <hr style={{width: '25%', marginLeft: '20px', marginTop: '-5px'}} />

                    <CardBody>
                        <div className='container-sm'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='mb-2'>
                                        <Label className='form-label fw-bolder font-medium-1' for='usd'>USD: </Label>
                                        <Input type='number' defaultValue={usd} onChange={(e) => setUsd(e.target.value)} id='' placeholder='' />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='mb-2'>
                                        <Label className='form-label fw-bolder font-medium-1' for='omgPoints'>OMG Points: </Label>
                                        <Input type='number' name='omgPoints' value={omgPoints} onChange={(e) => setOmgPoints(e.target.value)} id='omgPoints' placeholder='Enter OMG Points' />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='mb-2'>
                                        <Label className='form-label fw-bolder font-medium-1' for='miniOrderAmount'>Minimum Order Amount: </Label>
                                        <Input type='number' name='miniOrderAmount' value={miniOrderAmount} onChange={(e) => setMiniOrderAmount(e.target.value)} id='miniOrderAmount' placeholder='Enter Mini Order Amount' />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='mb-2'>
                                        <Label className='form-label fw-bolder font-medium-1' for='miniAllowedPoints'>Minimum Allowed Points: </Label>
                                        <Input type='number' name='miniAllowedPoints' value={miniAllowedPoints} onChange={(e) => setMiniAllowedPoints(e.target.value)} id='miniAllowedPoints' placeholder='Enter Minimum Allowed Points' />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='mb-2'>
                                        <Label className='form-label fw-bolder font-medium-1' for='discountOnMiniAllowedPoints'>Discount On Minimum Allowed Points: </Label>
                                        <Input type='number' name='discountOnMiniAllowedPoints' value={discountOnMiniAllowedPoints} onChange={(e) => setDiscountOnMiniAllowedPoints(e.target.value)} id='discountOnMiniAllowedPoints' placeholder='Enter Discount On Minimum Allowed Points' />
                                    </div>
                                </div>
                                <div className='col-md-6'></div>

                                <div className='col-md-6'>
                                    <div className='mb-2'>
                                    <Button color='primary' onClick={handleSubmit}>
                                        Save
                                    </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </UILoader>
        </div>
    )
}

export default RewardConfiguration