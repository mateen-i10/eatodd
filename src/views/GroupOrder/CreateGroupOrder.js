import React from 'react'
import Header from "../../shared/header/Header"
import Footer from "../../shared/footer/Footer"
import {Button} from "reactstrap"
import {Link} from "react-router-dom"

const CreateGroupOrder = () => {
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
                    <div className="col-lg-4 col-md-5 col-sm-7 col-8 text-center ">

                        <img src={require("../../assets/images/Menu&Order/dancing-veggies.gif").default}
                             alt="vegeis" height={200} width={"100%"}/>
                        <div className=" fw-bold mb-2" style={{fontSize: "1.2rem", color: "black"}}>Sign in to start a
                            group
                            order, earn rewards
                            and get status
                            updates
                        </div>
                        <div className="mb-2" style={{fontSize: "1.1rem"}}>We will provide a link to share with your
                            group. Up to 20
                            participant meals can be added
                            and you get all the points.
                        </div>

                        <div className="mb-2"><Button
                            style={{width: "100%", fontSize: "1.2rem", textTransform: "uppercase"}} color="primary">Create
                            Group
                            order</Button></div>
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

export default CreateGroupOrder
