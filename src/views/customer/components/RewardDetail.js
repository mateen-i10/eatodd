import React, {Fragment, useEffect} from 'react'
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Col,
    Form,
    FormFeedback,
    Input,
    Label,
    Row
} from "reactstrap"
import UILoader from "../../../@core/components/ui-loader"
import {useDispatch, useSelector} from "react-redux"
import {getCustomersReward} from "../../../redux/customer/actions"
//import {getUserData} from "../../../auth/utils"

const RewardDetail = () => {

    const isLoading = useSelector(state => state.customer.isLoading)
    const customerReward = useSelector(state => state.customer.rewardObject)
    //const isRequestCompleted = useSelector(state => state.customer.isRequestCompleted)
    //const isSuccess = useSelector(state => state.customer.isSuccess)

    console.log('customerReward', customerReward)

    //const customerId = getUserData().customerId

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCustomersReward())
    }, [])

    return (
        <Fragment>
            <UILoader blocking={isLoading}>
                <Card>
                    <CardHeader className='border-bottom'>
                        <CardTitle tag='h4'>Reward Points</CardTitle>
                    </CardHeader>
                    <CardBody className='pt-2'>
                        <div className='container-sm'>
                            <div className='row'>
                                <div className='col-md-3'></div>
                                <div className='col-md-6' style={{marginBottom: '30px', textAlign: '-webkit-center'}}>
                                    <img className="img-fluid" style={{width: "100%", height: "100%", maxWidth: '35%'}}
                                         src={require('../../../assets/images/trophy/cup2.png').default}
                                         alt="about-image"/>
                                </div>
                                <div className='col-md-3'></div>
                            </div>
                            <div className='row'>
                                <div className='col-md-3'></div>
                                <div className='col-md-6' style={{marginLeft: '6px', textAlign: '-webkit-center'}}>
                                    <Badge className="" color={'light-success'} style={{fontSize: '50px'}}>
                                        {customerReward.totalEATOMGPoints !== null ? Number((customerReward.totalEATOMGPoints) / 100) : '-'}
                                    </Badge>
                                </div>
                                <div className='col-md-3'></div>

                            </div>
                        </div>
                    </CardBody>
                </Card>
            </UILoader>
        </Fragment>
    )
}

export default RewardDetail