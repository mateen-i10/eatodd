// ** React Imports
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {
    Row,
    Col,
    CardBody,
    CardText,
    Card,
    Table,
    Badge,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    Button
} from 'reactstrap'
// ** Styles
import '../../../@core/scss/base/pages/app-invoice.scss'
import UILoader from "../../../@core/components/ui-loader"
import {getMeal} from "../../../redux/meal/actions"
import Header from "../../../shared/header/Header"
import Footer from "../../../shared/footer/Footer"
import {ArrowLeft, ShoppingCart} from "react-feather"

import {Link, useHistory} from "react-router-dom"

const MealDetail = ({match}) => {
    const id = match.params.id
    const dispatch = useDispatch()

    // const mls = [{id: 1, name:"pro 1"}, {id: 2, name:"pro 2"}, {id: 3, name:"pro 3"}]

    //getting data from store
    // const isLoading = useSelector(state => state.employee.isDetailLoading)
    const Meals = useSelector(state => state.meals.object)

    const history = useHistory()

    const handleback = () => {
        history.push('/user')
    }

    console.log('meals', Meals)
    useEffect(() => {
        dispatch(getMeal(id))
    }, [])

    return (
        <div>
            <Header />
            <UILoader>
                <Card>
                    <section>
                        <div className="container-sm">
                            <Row className='p-2'>
                                <Col md='12' xs='12'>
                                    <CardBody style={{maxHeight: 450}}>
                                        <div className='d-flex'>
                                            <h2 className='flex-fill mb-75'><ArrowLeft color='#81be41' size={25} className='cursor-pointer' onClick={handleback} /> Meal Details</h2>
                                            <div>
                                                <Button.Ripple className="text-center btn-sm" color='primary'>Add to <ShoppingCart size={20}/></Button.Ripple>
                                            </div>
                                        </div>
                                        <Row>
                                            <Col xl={6}>
                                                <div className='mt-2 row'>
                                                    <div className='col-5'>
                                                        <h5 className='mb-75'>Meal Name:</h5>
                                                    </div>
                                                    <div className='col-7'>
                                                        <CardText className="text-capitalize">{Meals.name}</CardText>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Col>
                            </Row>

                            {/*///////*/}

                            <Table responsive className='mb-5'>
                                <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Discount</th>
                                    <th>Price</th>
                                    <th>Total Price</th>
                                </tr>
                                </thead>
                                    <tbody>
                                    {Meals.mealProducts?.map(item => (
                                    <tr key={item.id}>
                                        <td>
                                            {item.product.name}
                                        </td>
                                        <td>
                                            {item.quantity}
                                        </td>
                                        <td>
                                            {item.discount}
                                        </td>
                                        <td>
                                            {item.option.price}
                                        </td>
                                        <td>
                                            {(item.quantity * item.option.price) - item.discount}
                                        </td>
                                    </tr>
                                        ))}
                                    </tbody>
                            </Table>
                        </div>
                    </section>
                </Card>
            </UILoader>
            <Footer />
        </div>
    )
}

export default MealDetail