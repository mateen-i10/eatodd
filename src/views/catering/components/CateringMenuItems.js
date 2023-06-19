import React from 'react'
import {Button, Col, ListGroup, ListGroupItem, Row} from "reactstrap"
import {Link} from "react-router-dom"
import ProductImage from "../../home/components/product/ProductImage"
import cardImage from "../../../assets/images/pages/wine/about/Layer-456.png"

const CateringMenuItems = (props) => {
    const {item} = props

    return (
        <>
            {/*<div className="card" style={{height: "450px", paddingBottom: "15px"}}>
                <div>
                    <ProductImage attachment={item.attachment} classes="card-img-top" styles={{height: 185, objectFit: "cover"}}/>
                    <img src={item.image} className="card-img-top" style={{height: 185, objectFit: "cover"}} alt="..."/>
                </div>
                <div style={{
                    position: 'absolute',
                    marginTop: 155,
                    backgroundColor: '#2f2f2f',
                    height: 30,
                    width: "100%",
                    opacity: "65%"
                }}>
                </div>
                <div style={{position: 'absolute', marginTop: 155, width: "100%"}}>
                    <h5 className="text-center"
                        style={{fontSize: 18, color: 'white', fontFamily: 'Gotham Bold', paddingTop: '4px'}}>{item.title.toUpperCase()}</h5>
                </div>
                <div className="card-body" style={{
                    maxHeight: 120,
                    textOverflow: 'ellipsis',
                    overflow: "hidden"
                }}>
                    <p style={{
                        fontFamily: 'sans-serif',
                        textAlign: 'left',
                        textTransform: 'capitalize',
                        marginTop: -10
                    }}>{item.detail}</p>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-around', marginTop: "-29px", marginBottom: 10}}>
                    <h6 className="mt-5">${`${item.price}/persons`}</h6>
                </div>
                <div className="text-center text-uppercase ">
                    <Link to={`/cateringMenuOrder/${item.id}`}>
                        <Button className=" text-uppercase " color="primary"
                                style={{width: "150px", margin: "auto"}}>
                            Select
                        </Button>
                    </Link>
                </div>
            </div>*/}

            {/*<div className="card">
                <div className="card-header heading1" style={{backgroundColor: '#bebebe'}}>
                    <h3 className='fw-bolder text-center' style={{color: 'black'}}>
                        {item.title.toUpperCase()}
                    </h3>
                </div>
                <div className="card-body">
                    <div className="mb-2 mt-2">
                        <h5 className="card-title">{item.detail}</h5>
                    </div>

                    <div className="text-center  mb-2 mt-2">
                        <p className="card-text">${`${item.price}/persons`}</p>
                    </div>

                    <div className="text-center text-uppercase ">
                        <Link to={`/cateringMenuOrder/${item.id}`}>
                            <Button className=" text-uppercase " color="primary"
                                    style={{width: "150px", margin: "auto"}}>
                                Select
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>*/}

            <div>
                <div className="container-sm" style={{backgroundColor: "#f4f6f9"}}>
                    <div className="row align-items-center justify-content-center" style={{marginTop: '0px !important'}}>
                        <div className="col-md-12 mt-5" >
                            <div className="member-card card border" style={{width: "100%", height: "auto"}}>
                                <div className="card-body align-items-center justify-content-center">
                                    <h2 className="fw-bolder text-center text-primary mb-2" style={{fontSize: '20px', textTransform: 'capitalize'}}>{item.title.toUpperCase()}</h2>
                                    <Row>
                                        <Col lg={12} className='text-center imgBefore'>
                                            <img className='imgCenter imgStyle' width="35%" src={cardImage} height="auto" alt="standard-plan-img"/>
                                        </Col>
                                    </Row>
                                    <h5 className=" text-capitalize text-center mt-2" style={{fontSize: '18px', fontWeight: '500'}}> {item.detail}</h5>
                                    <div className="mt-1 fw-bolder text-center amountMargin">
                                        <sup className="fs-4 dollarSign text-primary"></sup>
                                        <span className="text-primary" style={{fontSize: "2rem"}}>${item.price}</span>
                                        <span className="fw-bolder text-primary text-center"> / </span>
                                        <span className="fw-bolder text-primary text-center">persons</span>
                                    </div>

                                    <div className="text-center text-uppercase ">
                                        <Link to={`/cateringMenuOrder/${item.id}`}>
                                            <Button className=" text-uppercase " color="primary"
                                                    style={{width: "150px", margin: "auto"}}>
                                                Select
                                            </Button>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CateringMenuItems
