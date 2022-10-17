import React from 'react'
import Header from "../../shared/header/Header"
import Footer from "../../shared/footer/Footer"
import {Button, Input, Label} from "reactstrap"
import {Link} from "react-router-dom"
// import {getUserData} from "../../auth/utils"

const JoinGroupOrder = () => {
    // const userdata = getUserData()
    // console.log(userdata, "userdata")
    return (
        <div>
            <Header/>
            <div className="container-sm">
                <div className="row justify-content-center align-items-center">
                    <div className="col-sm-8 col-10 text-center">
                        <div className="text-uppercase fw-bolder text-black mt-2 mb-2"
                             style={{fontSize: 27}}> start a group
                            order
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-4 col-md-5 col-sm-7 col-8 text-center mx-auto">
                        <div className=''>
                            <img src={require("../../assets/images/ORDER/management.png").default} style={{display: 'initial'}} alt="vegeis" height={150} width={150}/>
                        </div>

                        <div className=" fw-bold mb-2" style={{fontSize: "2.3rem", color: "black", textTransform: 'capitalize'}}>
                            User has invited you to eat EatOmg today.
                        </div>

                        <div style={{textAlign: 'start'}}>
                            <Label>Full Name</Label>
                            <Input placeholder='Enter your full name' />
                        </div>

                        <div className="mb-2 mt-2">
                            <Link to = "/group-order-menu">
                                <Button
                                    style={{width: "100%", fontSize: "1.2rem", textTransform: "uppercase"}} color="primary">Join
                                    Group
                                    order
                                </Button>
                            </Link>
                        </div>

                        <div className="mb-1" style={{fontSize: "1.1rem"}}>Need more than 20 participant meals?</div>
                        <Link to="/catering">
                            <div className="text-decoration-underline text-black fw-bold mb-2 cursor-pointer"
                                 style={{fontSize: "1.1rem"}}>Try
                                Catering
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default JoinGroupOrder
