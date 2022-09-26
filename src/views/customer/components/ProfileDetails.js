// ** React Imports
import {Fragment, useState, useEffect} from 'react'

// ** Third Party Components
import '../../../@core/scss/base/pages/app-invoice.scss'

// ** Reactstrap Imports
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    CardText,
    CardTitle,
    Col,
    Form,
    FormFeedback,
    Input,
    Label,
    Row
} from 'reactstrap'
import {useDispatch, useSelector} from "react-redux"
import UILoader from "../../../@core/components/ui-loader"
import {getCustomer, updateCustomer} from "../../../redux/customer/actions"
import {getUserData} from "../../../auth/utils"
import {toast} from "react-toastify"
import {setDetailLoading} from "../../../redux/customer/reducer"

const ProfileDetails = ({}) => {

    const userData = getUserData()
    const customerId = getUserData().customerId

    const dispatch = useDispatch()

    //getting data from store
    const isLoading = useSelector(state => state.customer.isDetailLoading)
    const customerObj = useSelector(state => state.customer.object)
    const isRequestCompleted = useSelector(state => state.customer.isRequestCompleted)
    const isSuccess = useSelector(state => state.customer.isSuccess)

    console.log("customerObj", customerObj)

    const  [showEdit, setShowEdit] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [contactNo, setContactNo] = useState('')

    useEffect(() => {
        dispatch(getCustomer(customerId))
    }, [])

    const setData = () => {
        try {
            setFirstName(customerObj?.applicationUser?.firstName)
            setLastName(customerObj?.applicationUser?.lastName)
            setContactNo(customerObj?.applicationUser?.contactNo)
        } catch (e) {
            toast.error(e.message)
        }

    }
    useEffect(() => {
            setData()
    }, [customerObj])

    useEffect(() => {
        if (isSuccess) {
            setShowEdit(false)
            dispatch(getCustomer(customerId))
            setData()
        }
    }, [isRequestCompleted, isSuccess])

    const EditProfileDetail = () => {
        try {
            const data = {id: customerId,
                applicationUserId: userData.id,
                applicationUser: {
                    id: userData.id,
                    firstName,
                    lastName,
                    contactNo
                }
            }
            console.log('edit data', data)
            dispatch(setDetailLoading(true))
            dispatch(updateCustomer(data))
        } catch (e) {
            toast.error(e.message)
        }

    }

    return (
        <Fragment>
            <UILoader blocking={isLoading}>
                <Card>
                <CardHeader className='border-bottom'>
                    <CardTitle tag='h4'>Account Details</CardTitle>
                </CardHeader>
                    <CardBody className='py-2 my-25'>
                        {/*<div className='d-flex'>
                            <div className='me-25'>
                                <img className='rounded me-50' src={avatar} alt='Generic placeholder image' height='100' width='100'/>
                            </div>
                            <div className='d-flex align-items-end mt-75 ms-1'>
                                <div>
                                    <Button tag={Label} className='mb-75 me-75' size='sm' color='primary'>
                                        Upload
                                        <Input type='file' onChange={onChange} hidden accept='image/*'/>
                                    </Button>
                                    <Button className='mb-75' color='secondary' size='sm' outline onClick={handleImgReset}>
                                        Reset
                                    </Button>
                                    <p className='mb-0'>Allowed JPG, GIF or PNG. Max size of 800kB</p>
                                </div>
                            </div>
                        </div>*/}
                        <Form className='mt-2 pt-50'>

                            <Row>
                                <Col xl='6'></Col>
                                {showEdit === false && <Col className='p-0' xl='6'>
                                    <Button color='success' className='float-end me-5' onClick = {() => setShowEdit(true)}>
                                        <span className='align-middle d-sm-inline-block d-none'>Edit</span>
                                    </Button>
                                </Col>}
                                {showEdit === true && <Col className='p-0' xl='6'>
                                    <Button color='primary' className='float-end' onClick={EditProfileDetail}>
                                        <span className='align-middle d-sm-inline-block d-none'>Save</span>
                                    </Button>
                                    <Button color='danger' className='float-end me-2' onClick = {() => {
                                        setShowEdit(false)
                                    }}>
                                        <span className='align-middle d-sm-inline-block d-none'>Cancel</span>
                                    </Button>
                                </Col>}
                            </Row>

                            <Row className='mt-3'>
                                {showEdit === false &&  <>
                                    <Col tag='dt' sm='2' className='fw-bolder mb-1'>
                                        First Name:
                                    </Col>
                                    <Col tag='dd' sm='4' className='mb-1'>
                                        {customerObj.applicationUser?.firstName}
                                    </Col>
                                </>}
                                {showEdit === true &&  <Col sm='6' className='mb-1'>
                                    <Label className='form-label' for='firstName'>
                                        First Name
                                    </Label>
                                    <Input value={firstName} onChange={e => setFirstName(e.target.value)} placeholder='John'/>
                                </Col>}

                                {showEdit === false && <>
                                    <Col tag='dt' sm='2' className='fw-bolder mb-1'>
                                        Last Name:
                                    </Col>
                                    <Col tag='dd' sm='4' className='mb-1'>
                                        {customerObj.applicationUser?.lastName}
                                    </Col>
                                </>}
                                {showEdit === true &&  <Col sm='6' className='mb-1'>
                                    <Label className='form-label' for='lastName'>
                                        Last Name
                                    </Label>
                                    <Input value={lastName} onChange={e => setLastName(e.target.value)} placeholder='Doe' />
                                </Col>}

                                {showEdit === false && <>
                                    <Col tag='dt' sm='2' className='fw-bolder mb-1'>
                                        Email:
                                    </Col>
                                    <Col tag='dd' sm='4' className='mb-1'>
                                        {customerObj.applicationUser?.email}
                                    </Col>
                                </>}
                                {/*{showEdit === true &&  <Col sm='6' className='mb-1'>
                                    <Label className='form-label' for='email'>
                                        E-mail
                                    </Label>
                                    <Input id='email' type='email' name='email' placeholder='email@gmail.com'/>
                                </Col>}*/}

                                {showEdit === false && <>
                                    <Col tag='dt' sm='2' className='fw-bolder mb-1'>
                                        Phone Number:
                                    </Col>
                                    <Col tag='dd' sm='4' className='mb-1'>
                                        {customerObj.applicationUser?.contactNo}
                                    </Col>
                                </>}
                                {showEdit === true &&  <Col sm='6' className='mb-1'>
                                    <Label className='form-label' for='contactNo'>
                                        Phone Number
                                    </Label>
                                    <Input value={contactNo} onChange={e => setContactNo(e.target.value)} className='form-control' placeholder='1 234 567 8900'/>
                                </Col>}
                            </Row>
                        </Form>
                    </CardBody>

            </Card>
            </UILoader>
        </Fragment>
    )
}

export default ProfileDetails
