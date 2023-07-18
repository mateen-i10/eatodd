import Header from "../../shared/header/Header"
import Footer from "../../shared/footer/Footer"
import React, {Fragment, useState} from "react"
import {Col, Row, TabContent, TabPane} from "reactstrap"
import Tabs from "./components/Tabs"
import ProfileDetails from "./components/ProfileDetails"
import BillingPlans from "./components/BillingPlans"
import BillingAddress from "./components/BillingAddress"
import SecurityTab from "./components/ChangePassword"
import MyOrder from "./components/MyOrders"
import OrderHistory from "./components/OrderHistory"
import '@styles/base/pages/page-faq.scss'
import RewardDetail from "./components/RewardDetail"
import ActiveOrders from "./components/ActiveOrders"

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
    const toggleTab = tab => {
        setActiveTab(tab)
    }
    return (
        <div>
            <Header/>
            <Fragment>
               <section>
                   <div className='container-md'>
                       <Row className="justify-content-center">
                           <Col xl={3} style={{marginTop: 20}}>
                               <Tabs className='mb-2' activeTab={activeTab} toggleTab={toggleTab}/>
                           </Col>
                           <Col xl={9}>
                               <TabContent activeTab={activeTab}>
                                   <TabPane tabId='1'>
                                       <div className="row justify-content-center">
                                           <div className="col-md-12 mt-4"><ProfileDetails data={data}/></div>
                                       </div>
                                   </TabPane>
                                   <TabPane tabId='2'>
                                       <div className="row justify-content-center">
                                           <div className="col-md-12 mt-4"><BillingPlans data={data}/></div>
                                       </div>
                                   </TabPane>
                                   <TabPane tabId='3'>
                                       <div className="row justify-content-center">
                                           <div className="col-md-12 mt-4"><RewardDetail data={data}/></div>
                                       </div>
                                   </TabPane>
                                   <TabPane tabId='4'>
                                       <div className="row justify-content-center">
                                           <div className="col-md-12 mt-4"><BillingAddress data={data}/></div>
                                       </div>
                                   </TabPane>
                                   <TabPane tabId='5'>
                                       <div className="row justify-content-center">
                                           <div className="col-md-12 mt-4"><SecurityTab data={data}/></div>
                                       </div>
                                   </TabPane>
                                   <TabPane tabId='8'>
                                       <div className="row justify-content-center">
                                           <div className="col-md-12 mt-4"><ActiveOrders data={data}/></div>
                                       </div>
                                   </TabPane>
                                   <TabPane tabId='6'>
                                       <div className="row justify-content-center">
                                           <div className="col-md-12 mt-4"><MyOrder data={data}/></div>
                                       </div>
                                   </TabPane>
                                   <TabPane tabId='7'>
                                       <div className="row justify-content-center">
                                           <div className="col-md-12 mt-4"><OrderHistory data={data}/></div>
                                       </div>
                                   </TabPane>
                               </TabContent>
                           </Col>
                       </Row>
                   </div>
               </section>
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