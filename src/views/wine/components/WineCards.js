import React, {memo} from 'react'
import {Button, Card, CardBody, CardTitle, Col} from "reactstrap"
import ProductImage from "../../home/components/product/ProductImage"

const WineCards = (props) => {
    const {item, xl, md, onAddToCart} = props

    return (

        <Col xl={xl} md={md}>
            <Card className='mb-3  justify-content-center bg-transparent'>
                <ProductImage
                    attachment={item.attachment ? item.attachment : null}
                    styles={{marginLeft: "23%", marginTop: "15px", height: "100%", width: "55%"}}
                />
                {/*<CardImg top
                         src={item.image}
                         alt='card-top'
                         style={{marginLeft: "23%", marginTop: "15px", height: "100%", width: "55%"}}
                />*/}
                <CardBody>
                    <CardTitle tag='h4' className="text-start ">{item.title}</CardTitle>
                    <div className="fw-bolder fs-4 text-primary text-end mb-1">${item.price}</div>
                    <Col className='d-grid' sm='12'>
                        <Button color='primary' className="text-uppercase fw-bolder" onClick={() => onAddToCart({...item.product, price: item.price})}>
                            Add To Cart
                        </Button>
                    </Col>
                </CardBody>
            </Card>
        </Col>

    )
}

export default memo(WineCards)
