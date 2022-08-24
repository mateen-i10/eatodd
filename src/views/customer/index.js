import Header from "../../shared/header/Header"
import Footer from "../../shared/footer/Footer"
import React, {useState} from "react"
import MainComponent from "./components/MainComponent"

const Customer = () => {
    const [selectedOption, setSelectedOption] = useState({id: 1, title: "DashBoard", category: "dashboard"})
    const customerDashboard = [
        {id: 1, title: "DashBoard", category: "dashboard"},
        {id: 2, title: "My Order", category: "my_order"},
        {id: 3, title: "Edit Profile", category: "edit_profile"},
        {id: 4, title: "Shipping Details", category: "shipping_details"},
        {id: 5, title: "Billing Detail", category: "billing_detail"},
        {id: 6, title: "Change Password", category: "change_password"},
        {id: 7, title: "Logout", category: "logout"}
    ]
    // methods
    const toggleList = item => {
        if (selectedOption !== item) {
            setSelectedOption(item)
        }
    }
    console.log(selectedOption)

    return (
        <div>
            <Header/>
            <div className="container-sm">
                <div className="row">
                    <div className="col-3">
                        {customerDashboard.map((item, i) => (
                            <div key={i}
                                 className={`fs-3 fw-bolder  ms-2 cursor-pointer text-primary `}
                                 style={{lineHeight: "35px"}}

                                 onClick={() => {
                                     toggleList(item)
                                 }}
                            >
                                <div className="text-end">{item.title}</div>
                            </div>
                        ))}
                    </div>
                    <div className="col-9">
                        <MainComponent selectedOption={selectedOption}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Customer