import React from 'react'
import {Col, Row, Table} from "reactstrap"
// import classnames from "classnames"

const Items = (props) => {
    const {item, isQuantity} = props
    console.log('foodItems', item)
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
                                            {item?.mealName ? item.mealName : item.name}
                                        </td>
                                        <td className='text-end text-primary text-uppercase fw-bolder fs-4'>$ {item?.totalPrice?.toFixed(2)}
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
                                        {isQuantity === true ? <th className='text-center'>Quantity</th> : null}
                                        {/*<th className='text-center'>Price</th>*/}
                                        <th className='text-center'>Total Price</th>
                                    </tr>
                                    </thead>
                                    {item?.selectedProducts.map((subItem, id) => (<tbody key={id}>
                                        <tr className=' '>
                                            <td className='text-start'>
                                                {subItem.name}
                                            </td>
                                            {/*{isQuantity === true ? <td className='text-center'>{subItem.selectedQuantity}*/}
                                            {/*    </td> : null}*/}
                                            {/*<td className='text-center'>*/}
                                            {/*    $ {subItem.price}*/}
                                            {/*</td>*/}
                                            <td className='text-center'>$ {subItem.calculatedPrice}
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

export default Items
