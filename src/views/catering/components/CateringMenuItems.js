import React from 'react'
import { Button, Col, Row } from "reactstrap"
import { Link } from "react-router-dom"
import cardImage from "../../../assets/images/pages/wine/about/Layer-456.png"

const CateringMenuItems = (props) => {
    const { item } = props

    return (
        <div className="container-sm" style={{ backgroundColor: "#f4f6f9" }}>
            <div className="row align-items-center justify-content-center" style={{ marginTop: '0px !important' }}>
                <div className="col-md-12 mt-5">
                    <div className="member-card card border" style={{ width: "100%", height: "550px" }}>
                        <div className='card-header'>
                            <h2 className="fw-bolder text-center text-primary mb-2" style={{ fontSize: '20px', textTransform: 'capitalize' }}>
                                {item.title.toUpperCase()}
                            </h2>
                        </div>

                        <div className="card-body align-items-center justify-content-center">
                            <Row>
                                <Col lg={12} className='text-center'>
                                    <img className='imgCenter imgStyle' width="25%" src={cardImage} height="auto" alt="standard-plan-img" />
                                </Col>
                            </Row>
                            <h5 className="text-capitalize text-center mt-3" style={{ fontSize: '16px', fontWeight: '500' }}>
                                {item.detail}
                            </h5>
                            <div className="mt-1 fw-bolder text-center amountMargin">
                                <sup className="fs-4 dollarSign text-primary"></sup>
                                <span className="text-primary" style={{ fontSize: "2rem" }}>${item.price}</span>
                                {item.price !== 0 && (
                                    <>
                                        <span className="fw-bolder text-primary text-center"> / </span>
                                        <span className="fw-bolder text-primary text-center">persons</span>
                                        <Link to={`/cateringMenuOrder/${item.id}`}>
                                            <Button className="text-uppercase" color="primary" style={{ width: "150px" }}>
                                                Select
                                            </Button>
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CateringMenuItems
