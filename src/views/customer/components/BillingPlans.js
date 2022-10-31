// ** React Imports
import {Fragment, useEffect, useState} from 'react'

// ** Reactstrap Imports
import {
    Row,
    Col,
    Card,
    Badge,
    Alert,
    Modal,
    Label,
    Button,
    CardBody,
    Progress,
    CardTitle,
    ModalBody,
    CardHeader,
    ModalHeader
} from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/base/plugins/extensions/ext-component-sweet-alerts.scss'
import PaymentMethods from "./PaymentMethod"
import {getUserData} from "../../../auth/utils"
import {useHistory} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { deleteSubscription, getWinePackageByCustomer} from "../../../redux/memberShipType/action"
import UILoader from "../../../@core/components/ui-loader"
import Swal from "sweetalert2"
import {isObjEmpty} from "../../../utility/Utils"

const BillingPlan = () => {
    //const id = match.params.id

    const dispatch = useDispatch()
    const history = useHistory()
    const [isBilling, setIsBilling] = useState(0)
    const customerId = getUserData()?.customerId

    //getting data from store
    const isLoading = useSelector(state => state.memberShip.isLoading)
    const membershipObj = useSelector(state => state.memberShip.object)
    console.log('membershipObj', membershipObj)

    useEffect(() => {
        dispatch(getWinePackageByCustomer(customerId))
    }, [])


    const goPackagesPage = () => {
        history.push('/wine/membership')
    }

    const deleteClick = (id, e) => {
        e.preventDefault()
        // show sweet alert here
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#7367f0',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteSubscription(customerId))
                history.push('/user')
            }
        })
    }

    return (
        <Fragment>
            {isBilling === 0 && (
                <UILoader blocking={isLoading}>
                    <Card>
                        <CardHeader className='border-bottom'>
                            <CardTitle tag='h4'>Current plan</CardTitle>
                        </CardHeader>
                        <CardBody className='mt-2'>
                            <Row>
                                {membershipObj && !isObjEmpty(membershipObj) ?  <Row>
                                    <Col md='6'>
                                        <div className='mb-2 pb-50'>
                                            <h5>
                                                Subscription Name:
                                                <strong className='success ms-1'>
                                                    <Badge className="mmb-25 text-capitalize" color= 'light-info' pill>
                                                        {membershipObj.name}
                                                    </Badge>
                                                </strong>
                                            </h5>
                                        </div>
                                    </Col>
                                    <Col md='6'>
                                        <div className='mb-2 pb-50'>
                                            <h5>
                                                Amount:
                                                <strong className='success ms-1'>
                                                    $ {membershipObj.amount}
                                                </strong>
                                            </h5>
                                        </div>
                                    </Col>
                                    <Col md='6'>
                                        <div className='mb-2 pb-50'>
                                            <h5>
                                                Your Current Plan is
                                                <strong className='success ms-1'>
                                                    <Badge className="mmb-25" color= 'light-info' pill>
                                                        {membershipObj.billType === 1 ? 'Weekly' : membershipObj.billType === 2 ? 'Monthly' : membershipObj.billType === 3 ? 'Yearly' : 'null'}
                                                    </Badge>
                                                </strong>
                                            </h5>
                                        </div>
                                    </Col>
                                    <Col md='6'></Col>
                                    <Col md='6'>
                                        <div className='mb-2 pb-50'>
                                            <h5>
                                                Description:
                                            </h5>
                                            <span>{membershipObj.description}</span>
                                        </div>
                                    </Col>
                                 </Row> : <div>No Subscription Added, Kindly Select a Package !</div>}

                                <Col xs={12}>
                                    <Button color='primary' className='me-1 mt-1' onClick={goPackagesPage}>
                                        {membershipObj && isObjEmpty(membershipObj) ? 'Select' : 'Upgrade'} Plan
                                    </Button>
                                    {membershipObj && !isObjEmpty(membershipObj) && <Button outline color='danger' className='mt-1' onClick={e => deleteClick(customerId, e)}>
                                        Cancel Subscription
                                    </Button>}
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </UILoader>
            )}

            {isBilling === 1 && (
                <PaymentMethods setIsBilling={setIsBilling} />
            )}

        </Fragment>
    )
}

export default BillingPlan
