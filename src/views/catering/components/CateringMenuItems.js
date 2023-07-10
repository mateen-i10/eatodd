import React from 'react'
import { Button, Col, Row } from "reactstrap"
import { Link } from "react-router-dom"

const CateringMenuItems = (props) => {
    const { item } = props

    return (
        <div className="member-card card border" style={{ width: "100%", height: "550px" }}>
                        <div className='mt-3'>
                            <h2 className="fw-bolder text-center text-primary mb-2" style={{ fontSize: '20px' }}>
                                {item.title.toUpperCase()}
                            </h2>
                            <div className="fw-bolder text-center amountMargin">
                                <sup className="fs-4 dollarSign text-primary"></sup>
                                <span className="text-primary" style={{ fontSize: "3rem" }}>${item.price}</span>
                                {item.price !== 0 && (
                                    <>
                                        <span className="fw-bolder text-primary text-center"> / </span>
                                        <span className="fw-bolder text-primary text-center">persons</span><br></br>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="card-body align-items-center justify-content-center">
                            <h5 className="text-capitalize text-center mt-3" style={{ fontSize: '16px', fontWeight: '500' }}>
                                {item.detail}
                            </h5>
                        </div>
                        <div className="card-footer" style={{ margin: 'auto', borderTop:'0px'}}>
                            <Link to={`/cateringMenuOrder/${item.id}`}>
                                <Button className="text-uppercase" color="primary" style={{ width: "150px"}}>
                                    Select
                                </Button>
                            </Link>
                        </div>
                    </div>
    )
}

export default CateringMenuItems
