import React from 'react'
import {Card, CardBody, CardTitle, Col, Input, Label} from "reactstrap"

const OmgFamilyDine = (props) => {
    const {item, xl, md} = props
    return (

        <Col xl={xl} md={md}>
            <Card className='mb-3  justify-content-center bg-transparent'>
                <CardBody>
                    <CardTitle tag='h4' className="text-start ">{item.title}</CardTitle>
                    {item.options.map((item, index) => (
                        <div className='form-check form-check-inline' key={index}>
                            <Input type='checkbox' id='basic-cb-unchecked'/>
                            <Label for='basic-cb-unchecked' className='form-check-label fs-4 fw-bold'>
                                {item}
                            </Label>
                        </div>)
                    )}
                </CardBody>
            </Card>
        </Col>
    )
}

export default OmgFamilyDine
