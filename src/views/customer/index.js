import Header from "../../shared/header/Header"
import Footer from "../../shared/footer/Footer"
import React, {Fragment, useState} from "react"
// import MainComponent from "./components/MainComponent"
import {Col, Row, TabContent, TabPane} from "reactstrap"
import Tabs from "./components/Tabs"
import ProfileDetails from "./components/ProfileDetails"

const data = {
    accountSetting: {
        general: {
            avatar: require('@src/assets/images/portrait/small/avatar-s-11.jpg').default,
            username: 'johndoe',
            fullName: 'John Doe',
            email: 'granger007@hogward.com',
            company: 'PIXINVENT'
        },
        info: {
            bio: '',
            dob: null,
            country: 'USA',
            website: '',
            phone: 6562542568
        },
        social: {
            socialLinks: {
                twitter: 'https://www.twitter.com',
                facebook: '',
                google: '',
                linkedIn: 'https://www.linkedin.com',
                instagram: '',
                quora: ''
            },
            connections: {
                twitter: {
                    profileImg: require('@src/assets/images/avatars/11-small.png').default,
                    id: 'johndoe'
                },
                google: {
                    profileImg: require('@src/assets/images/avatars/3-small.png').default,
                    id: 'luraweber'
                },
                facebook: {},
                github: {}
            }
        },
        notification: {
            commentOnArticle: true,
            answerOnForm: true,
            followMe: false,
            newAnnouncements: true,
            productUpdates: true,
            blogDigest: false
        }
    }
}


const Customer = () => {
    const [activeTab, setActiveTab] = useState('1')
    // const [selectedOption, setSelectedOption] = useState({id: 1, title: "DashBoard", category: "dashboard"})
    // const customerDashboard = [
    //     {id: 1, title: "DashBoard", category: "dashboard"},
    //     {id: 2, title: "My Order", category: "my_order"},
    //     {id: 3, title: "Edit Profile", category: "edit_profile"},
    //     {id: 4, title: "Shipping Details", category: "shipping_details"},
    //     {id: 5, title: "Billing Detail", category: "billing_detail"},
    //     {id: 6, title: "Change Password", category: "change_password"},
    //     {id: 7, title: "Logout", category: "logout"}
    // ]
    // methods
    // const toggleList = item => {
    //     if (selectedOption !== item) {
    //         setSelectedOption(item)
    //     }
    // }
    // console.log(selectedOption)
    const toggleTab = tab => {
        setActiveTab(tab)
    }
    return (
        <div>
            <Header/>
            <Fragment>
                <Row>
                    <Col xs={12}>
                        <Tabs className='mb-2 ' activeTab={activeTab} toggleTab={toggleTab}/>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId='1'>
                                <div className="row justify-content-center">
                                    <div className="col-md-11 mt-4"><ProfileDetails data={data}/></div>
                                </div>
                            </TabPane>
                            <TabPane tabId='2'>
                                2
                                {/*<SecurityTabContent/>*/}
                            </TabPane>
                            <TabPane tabId='3'>
                                3
                                {/*<BillingTabContent/>*/}
                            </TabPane>
                            <TabPane tabId='4'>
                                4
                                {/*<NotificationsTabContent/>*/}
                            </TabPane>
                            <TabPane tabId='5'>
                                5
                                {/*<ConnectionsTabContent/>*/}
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </Fragment>
            {/*{customerDashboard.map((item, i) => (*/}
            {/*    <div key={i}*/}
            {/*         className={`fs-3 fw-bolder  ms-2 cursor-pointer text-primary `}*/}
            {/*         style={{lineHeight: "35px"}}*/}

            {/*         onClick={() => {*/}
            {/*             toggleList(item)*/}
            {/*         }}*/}
            {/*    >*/}
            {/*        <div className="text-end">{item.title}</div>*/}
            {/*    </div>*/}
            {/*))}*/}


            {/*<MainComponent selectedOption={selectedOption}/>*/}

            <Footer/>
        </div>
    )
}
export default Customer