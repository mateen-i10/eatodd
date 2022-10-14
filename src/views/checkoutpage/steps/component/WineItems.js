import React from 'react'
import {Col, Row, Table} from "reactstrap"
// import classnames from "classnames"

const WineItems = (props) => {
    const {item} = props
    console.log('foodItems', item)
    let total = 0
    for (const i in item) {
        total = total + (item[i]?.price * item[i]?.selectedQuantity)
    }
    // console.log("total price", total)
    return (
        <section>
            <div className='container-sm' style={{maxHeight: 'auto'}}>

                <Row>
                    <Col xl={12}>
                        <Row>
                            <Col xl={12}>
                                <Table responsive>
                                    <tbody>
                                    <tr className=' '>
                                        <td className='text-start text-primary text-uppercase fw-bolder fs-4'>
                                            Wines
                                        </td>
                                        <td className='text-end text-primary text-uppercase fw-bolder fs-4'>
                                            $ {total}
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <div className="row">
                            <div className="col-12">
                                <Table responsive size='sm'>
                                    <thead>
                                    <tr>
                                        <th className='text-start'>Name</th>
                                        <th className='text-center'>Quantity</th>
                                        <th className='text-center'>Price</th>
                                        <th className='text-center'>Total Price</th>
                                    </tr>
                                    </thead>
                                    {item?.map((subItem, id) => (<tbody key={id}>
                                        <tr className=' '>
                                            <td className='text-start'>
                                                {subItem.name}
                                            </td>
                                            <td className='text-center'>{subItem.selectedQuantity}
                                            </td>
                                            <td className='text-center'>
                                                $ {subItem.price}
                                            </td>
                                            <td className='text-center'>$ {subItem?.price * subItem?.selectedQuantity}
                                            </td>
                                        </tr>
                                        </tbody>
                                    ))}
                                </Table>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="mt-2"/>

            </div>
        </section>
    )
}

export default WineItems
