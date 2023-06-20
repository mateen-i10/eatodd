// ** React Imports
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Card, CardBody, CardText, Row, Col, Badge, Table} from 'reactstrap'
// ** Styles
import '../../../@core/scss/base/pages/app-invoice.scss'
import {getSection} from "../../../redux/section/action"
import UILoader from "../../../@core/components/ui-loader"


const SectionsDetail = ({match}) => {
    const id = match.params.id
    const dispatch = useDispatch()

    //getting data from store
    const isLoading = useSelector(state => state.section.isLoading)
    const section = useSelector(state => state.section.object)
    console.log('sectionDetail', section)

    useEffect(() => {
        dispatch(getSection(id))
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
                                            <h3 className='text-primary invoice-logo text-capitalize'>{section.name}</h3>
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
                                                <CardText className="mmb-25 ms-1 mb-1">{section.name}</CardText>
                                            </div>
                                        </Col>
                                        <Col xl={6} className="p-0">
                                            <div className='mt-2 invoice-date-wrapper ps-1'>
                                                <p className='fw-bolder'> Limit:</p>
                                                <CardText className="mmb-25 ms-1 mb-1">{section.limit}</CardText>
                                            </div>
                                        </Col>
                                        <Col xl={6} className="p-0">
                                            <div className='mt-2 invoice-date-wrapper ps-1'>
                                                <p className='fw-bolder'> Section Type:</p>
                                                <CardText className="mmb-25 ms-1 mb-1">{section.sectionType === 1 ? "Modifier" : section.sectionType === 2 ? "Add-on" : ''}</CardText>
                                            </div>
                                        </Col>
                                        <Col xl={6} className="p-0">
                                            <div className='mt-2 invoice-date-wrapper ps-1'>
                                                <p className='fw-bolder'> Section Item Type:</p>
                                                <CardText className="mmb-25 ms-1 mb-1">{section.sectionItemType === 1 ? "Radio" : section.sectionItemType === 2 ? "Checkbox" : ''}</CardText>
                                            </div>
                                        </Col>
                                    </Row>

                                    <hr className='invoice-spacing' />

                                    <Row className='invoice-spacing'>
                                        <Col col={12} className="p-0">
                                            <div className='mt-2 invoice-date-wrapper ps-1'>
                                                <p className='fw-bolder'>Description:</p>
                                                <CardText  className="mmb-25 ms-1 mb-1">
                                                    {section.description}
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
                                                    <th scope="col" style={{backgroundColor: "transparent"}}>General Product</th>
                                                    <th scope="col" style={{backgroundColor: "transparent"}}>Name</th>
                                                    <th scope="col" style={{backgroundColor: "transparent"}}>Price</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {section && section.sectionItems && section.sectionItems.map((i, index) => {
                                                    console.log('find application user', i.employee)
                                                    return <tr key={`optionKey-${index} `}>
                                                        <td>{i?.name}</td>
                                                        <td>{i.name}</td>
                                                        <td>{i.price}</td>
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

