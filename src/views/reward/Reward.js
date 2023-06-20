import React, {Fragment} from 'react'
import Header from "../../shared/header/Header"
import Footer from "../../shared/footer/Footer"
import './Reward.css'
import {Col, Container, Row} from "reactstrap"

const Reward = () => {
    return (
        <Fragment>
        <div>
            <Header />
            <Container>
                <Row>
                    <Col xs={12} md={6} className="d-flex flex-column align-items-start" style={{marginTop: '150px' }}>
                        <p className="text-primary fs-2 fw-bolder">OMG LOYALISTS</p>
                        <h1 className="text-black text-uppercase" style={{ fontSize: '45px' }}>
                            The More you EAT, the More we TREAT.
                        </h1>
                        <div className="fs-4 mb-1">
                            <p>Earn points while enjoying your favorite flavorful plates and sandwiches, and cash them out in a variety of ways in the Loyalists Trade Desk! Not a member yet?</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <img
                            className="new mt-5 imgWidth"
                            alt="image"
                            src={require("../../assets/images/updated/position 3.jpeg").default}
                            style={{
                                width: "100%",
                                height: "auto",
                                maxWidth: "100%",
                                display: "block"
                            }}
                        />
                    </Col>
                </Row>
                <Row className="row mb-2" style={{marginTop:'150px'}}>
                    <div className="col-12 d-flex flex-column align-items-center justify-content-center">
                        <div className="text-uppercase text-black fs-1 fw-bolder">Rewards Rules for OMG Rewards.
                        </div>
                    </div>
                </Row>
                <Row style={{ marginTop: '100px' }}>
                    <Col xs={12} md={6} style={{ margin: 'auto', padding: '20px' }}>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                            <li className="fs-4 mb-2">
                                <strong>Earn Points:</strong> As a member of OMG Rewards, you will earn 1 point for every dollar spent on eligible purchases at Olive Mediterranean Grill.
                            </li>
                            <li className="fs-4 mb-2">
                                <strong>Reward Threshold:</strong> Once you accumulate 100 points, you will qualify for a $10 discount on your next order at Olive Mediterranean Grill.
                            </li>
                            <li className="fs-4 mb-2">
                                <strong>Redemption:</strong> When you reach the reward threshold of 100 points, you can choose to redeem your points for a $10 discount on any future order. The discount will be automatically applied to your total bill.
                            </li>
                            <li className="fs-4 mb-2">
                                <strong>Point Calculation:</strong> Points will be calculated based on the pre-tax full dollar amount of your eligible purchases. For example, if your order subtotal is $15.50, you will earn 15 points.
                            </li>
                            <li className="fs-4 mb-2">
                                <strong>Eligible Purchases:</strong> Points will be earned on all food and beverage purchases made at Olive Mediterranean Grill. Exclusions may apply to gift card purchases, alcohol, taxes, tips, and other non-food items.
                            </li>
                            <li className="fs-4">
                                <strong>Point Tracking:</strong> Your point balance will be tracked automatically and updated in your OMG Rewards account. You can view your current point balance and transaction history by logging into your account on our website or mobile app.
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} md={6} style={{padding: '20px' }}>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                            <li className="fs-4 mb-2">
                                <strong>Non-Transferable:</strong> Points earned through OMG Rewards are non-transferable and cannot be combined with points from another account.
                            </li>
                            <li className="fs-4 mb-2">
                                <strong>Expiration:</strong> Points earned through OMG Rewards do not expire as long as your account remains active. However, if your account becomes inactive for a period of 12 months, your points may be forfeited.
                            </li>
                            <li className="fs-4 mb-2">
                                <strong>Membership Requirements:</strong> To participate in OMG Rewards, you must be a registered member with a valid email address. Membership is free and open to individuals aged 18 years or older.
                            </li>
                                <li className="fs-4">
                                <strong>Program Changes:</strong> Olive Mediterranean Grill reserves the right to modify or terminate the OMG Rewards program at any time, including changes to point accumulation, redemption thresholds, and program benefits. Any changes will be communicated to members via email or through the OMG Rewards website and mobile app.
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
        </Fragment>
    )
}

export default Reward
