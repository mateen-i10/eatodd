// ** React Imports
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Card, CardBody, CardText, Row, Col, Badge, Table} from 'reactstrap'
// ** Styles
import '../../../@core/scss/base/pages/app-invoice.scss'
import UILoader from "../../../@core/components/ui-loader"
import {getMemberShipType} from "../../../redux/memberShipType/action"


const SectionsDetail = ({match}) => {
    const id = match.params.id
    const dispatch = useDispatch()

    //getting data from store
    const isLoading = useSelector(state => state.memberShip.isLoading)
    const membershipObj = useSelector(state => state.memberShip.object)
    console.log('membershipObj', membershipObj)

    useEffect(() => {
        dispatch(getMemberShipType(id))
    }, [])

    return (
        <div>
            <UILoader blocking={isLoading}>
                <div className='invoice-preview-wrapper'>
                    <Row className='invoice-preview'>
                        <Col xl={12} md={12} sm={12}>
                            <Card className='invoice-preview-card'>
                                <CardBody className='invoice-padding pb-0'>
                                    {/* Header */}
                                    <div className='d-flex justify-content-between flex-md-row flex-column mt-1 '>
                                        <div className='logo-wrapper'>
                                            <h3 className='text-primary invoice-logo text-capitalize'>{membershipObj.name}</h3>
                                        </div>
                                    </div>
                                    {/* /Header */}
                                </CardBody>

                                <hr className='' />

                                {/* Address and Contact */}
                                <CardBody className='invoice-padding pt-0'>
                                    <Row className='invoice-spacing'>

                                        <Col xl={6} className="p-0">
                                            <div className='mt-1 invoice-date-wrapper ps-1'>
                                                <p className='fw-bolder'>Name:</p>
                                                <CardText className="mmb-25 ms-1 mb-1">{membershipObj.name}</CardText>
                                            </div>
                                        </Col>
                                        <Col xl={6} className="p-0">
                                            <div className='mt-2 invoice-date-wrapper ps-1'>
                                                <p className='fw-bolder'> Limit:</p>
                                                <CardText className="mmb-25 ms-1 mb-1">{membershipObj.amount}</CardText>
                                            </div>
                                        </Col>
                                        <Col xl={6} className="p-0">
                                            <div className='mt-2 invoice-date-wrapper ps-1'>
                                                <p className='fw-bolder'> BillType:</p>
                                                <CardText className="mmb-25 ms-1 mb-1">
                                                    <Badge className="mmb-25" color= 'light-info' pill>
                                                        {membershipObj.billType === 1 ? 'Weekly' : membershipObj.billType === 2 ? 'Monthly' : membershipObj.billType === 3 ? 'Yearly' : 'null'}
                                                    </Badge>
                                                </CardText>
                                            </div>
                                        </Col>
                                        <Col xl={6} className="p-0">
                                            <div className='mt-2 invoice-date-wrapper ps-1'>
                                                <p className='fw-bolder'> Limit:</p>
                                                <CardText className="mmb-25 ms-1 mb-1">{membershipObj.showContactUsForm ? "True" : "False"}</CardText>
                                            </div>
                                        </Col>
                                    </Row>

                                    <hr className='invoice-spacing' />

                                    <Row className='invoice-spacing'>
                                        <Col col={12} className="p-0">
                                            <div className='mt-2 invoice-date-wrapper ps-1'>
                                                <p className='fw-bolder'>Description:</p>
                                                <CardText  className="mmb-25 ms-1 mb-1">
                                                    {membershipObj.description}
                                                </CardText>
                                            </div>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <h3 className='ms-2 card-title'>Section Items List</h3>
                                        <Col xs={12}>
                                            <table className="table table-responsive">
                                                <thead>
                                                <tr>
                                                    <th scope="col" style={{backgroundColor: "transparent"}}>Name</th>
                                                    <th scope="col" style={{backgroundColor: "transparent"}}>Description</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {membershipObj && membershipObj.packageItems && membershipObj.packageItems.map(i => {
                                                    console.log('find application user', i.employee)
                                                    return <tr>
                                                        <td>{i.name}</td>
                                                        <td>{i.description}</td>
                                                    </tr>
                                                })}

                                                </tbody>
                                            </table>
                                        </Col>
                                    </Row>
                                </CardBody>

                            </Card>
                        </Col>
                    </Row>
                </div>
            </UILoader>
        </div>
    )
}

export default SectionsDetail

