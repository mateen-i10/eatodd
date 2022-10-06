// ** React Imports
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Badge, Button, Card, CardBody, CardHeader, CardText, CardTitle, Col, Input, Label, Row, Table} from 'reactstrap'
// ** Styles
import '../../../../@core/scss/base/pages/app-invoice.scss'
import UILoader from "../../../../@core/components/ui-loader"
import {getCateringMenuItem, updateImage} from "../../../../redux/Catering/cateringMenuItem/action"
import {isObjEmpty} from "../../../../utility/Utils"
import ProductImage from "../../../home/components/product/ProductImage"

const CateringMenuItemDetail = ({match}) => {


    const id = match.params.id
    const dispatch = useDispatch()

    //getting data from store
    const isLoading = useSelector(state => state.cateringMenuItem.isLoading)
    const cateringMenuItemObj = useSelector(state => state.cateringMenuItem.object)
    console.log('cateringMenuItemObj', cateringMenuItemObj)

    // modifier and addon array
    const modifierArray = !isObjEmpty(cateringMenuItemObj) &&
    cateringMenuItemObj.cateringMenuItemSections ? cateringMenuItemObj?.cateringMenuItemSections.filter(item => item?.section?.sectionType === 1) : null

    const addonArray = !isObjEmpty(cateringMenuItemObj) &&
    cateringMenuItemObj.cateringMenuItemSections ? cateringMenuItemObj?.cateringMenuItemSections.filter(item => item?.section?.sectionType === 2) : null

    useEffect(() => {
        dispatch(getCateringMenuItem(id))
    }, [cateringMenuItemObj.attachment])

    const onChange = e => {
        const formData = new FormData()
        formData.append("image", e.target.files[0])
        formData.append("attachmentId", cateringMenuItemObj?.attachmentId)
        formData.append("entityId", cateringMenuItemObj?.attachmentId)
        formData.append("entityName", null)

        dispatch(updateImage(formData))
    }


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
                                            <h3 className='text-primary invoice-logo text-capitalize'>{cateringMenuItemObj.name}</h3>
                                        </div>
                                    </div>
                                    {/* /Header */}
                                </CardBody>

                                <hr className=''/>

                                {/* Address and Contact */}
                                <CardBody className='invoice-padding pt-0'>
                                    <Row className='invoice-spacing'>
                                        <Col md='3' xs='12'>
                                            <div className='text-center' style={{marginRight: 10, marginTop: 30}}>
                                                <div className='me-25'>
                                                    <ProductImage attachment={cateringMenuItemObj.attachment}
                                                                  styles={{height: "60%", width: "60%"}}/>
                                                </div>
                                                <div className='text-center align-items-end mt-75 '>
                                                    <Button tag={Label} className='' size='sm'
                                                            color='primary'>
                                                        Change Image
                                                        <Input type='file' onChange={onChange} hidden accept='image/*'/>
                                                    </Button>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={9}>
                                            <Row className='invoice-spacing'>
                                                <Col xl={6} className="p-0">
                                                    <div className='mt-1 invoice-date-wrapper ps-1'>
                                                        <p className='fw-bolder'>Name:</p>
                                                        <CardText
                                                            className="mmb-25 ms-1 mb-1">{cateringMenuItemObj.name}</CardText>
                                                    </div>
                                                </Col>
                                                <Col xl={6} className="p-0">
                                                    <div className='mt-2 invoice-date-wrapper ps-1'>
                                                        <p className='fw-bolder'> Limit:</p>
                                                        <CardText
                                                            className="mmb-25 ms-1 mb-1">{cateringMenuItemObj.limit}</CardText>
                                                    </div>
                                                </Col>
                                                <Col xl={6} className="p-0">
                                                    <div className='mt-2 invoice-date-wrapper ps-1'>
                                                        <p className='fw-bolder'> Price:</p>
                                                        <CardText
                                                            className="mmb-25 ms-1 mb-1">{cateringMenuItemObj.price}</CardText>
                                                    </div>
                                                </Col>
                                                <Col xl={6} className="p-0">
                                                    <div className='mt-2 invoice-date-wrapper ps-1'>
                                                        <p className='fw-bolder'> Catering Menu:</p>
                                                        <CardText className="mmb-25 ms-1 mb-1">
                                                            <Badge className="mmb-25 ms-1 font-medium-1"
                                                                   color='light-success'
                                                                   pill>
                                                                {cateringMenuItemObj.cateringMenu?.name}
                                                            </Badge>
                                                        </CardText>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>

                                    <hr className='invoice-spacing'/>

                                    <Row className='invoice-spacing'>
                                        <Col col={12} className="p-0">
                                            <div className='mt-2 invoice-date-wrapper ps-1'>
                                                <p className='fw-bolder'>Description:</p>
                                                <CardText className="mmb-25 ms-1 mb-1">
                                                    {cateringMenuItemObj.description}
                                                </CardText>
                                            </div>
                                        </Col>
                                    </Row>

                                </CardBody>
                                <hr className='invoice-spacing m-0'/>
                                <CardBody>


                                    {modifierArray !== null && modifierArray.length !== 0 ? <Row className='invoice-spacing'>
                                            <div
                                                className='invoice-spacing mt-0 fs-3 fw-bolder  text-primary'>Modifiers
                                            </div>
                                            <hr className='invoice-spacing m-0'/>
                                            {modifierArray !== null ? modifierArray.map((item, i) => (
                                                <Col col={6} className="p-0" key={i}>
                                                    <CardHeader>
                                                        <CardTitle>
                                                            <div className='fw-bolder fs-5'>{item?.section?.name}</div>
                                                        </CardTitle>
                                                    </CardHeader>
                                                    <CardBody>
                                                        <Table borderless responsive>
                                                            <thead>
                                                            <tr>
                                                                <th>
                                                                    Name
                                                                </th>
                                                                <th>
                                                                    price
                                                                </th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            {
                                                                item?.section.sectionItems.map((secItem, i) => (
                                                                    <tr key={i}>
                                                                        <td>
                                                                            {secItem.name}
                                                                        </td>
                                                                        <td>
                                                                            {secItem.price} $
                                                                        </td>
                                                                    </tr>
                                                                ))
                                                            }

                                                            </tbody>
                                                        </Table>

                                                    </CardBody>
                                                </Col>
                                            )) : null}


                                        </Row> : null}
                                    {addonArray !== null && addonArray.length !== 0 ? <Row className='invoice-spacing'>

                                        <div
                                            className='invoice-spacing mt-0 fs-3 fw-bolder  text-primary'>Addons
                                        </div>
                                        <hr className='invoice-spacing m-0'/>
                                        {addonArray !== null ? addonArray.map((item, i) => (
                                            <Col col={6} className="p-0" key={i}>
                                                <CardHeader>
                                                    <CardTitle>
                                                        <div className='fw-bolder fs-5'>{item?.section?.name}</div>
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardBody>
                                                    <Table borderless responsive>
                                                        <thead>
                                                        <tr>
                                                            <th>
                                                                Name
                                                            </th>
                                                            <th>
                                                                price
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {
                                                            item?.section.sectionItems.map((secItem, i) => (
                                                                <tr key={i}>
                                                                    <td>
                                                                        {secItem.name}
                                                                    </td>
                                                                    <td>
                                                                        {secItem.price} $
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        }
                                                        </tbody>
                                                    </Table>
                                                </CardBody>
                                            </Col>
                                        )) : null}

                                    </Row> : null}

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </UILoader>
        </div>
    )
}

export default CateringMenuItemDetail

