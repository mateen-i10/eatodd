// ** React Imports
import { Fragment, useState } from 'react'

// ** Third Party Components
// import axios from 'axios'

// ** Reactstrap Imports
import { Row, Col, TabContent, TabPane } from 'reactstrap'

import Header from "../../shared/header/Header"
import Footer from "../../shared/footer/Footer"
// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/pages/page-account-settings.scss'
import Tabs from "./components/Tabs"
import Breadcrumbs from "../../@core/components/breadcrumbs"
import UserDashboard from "./components/UserDashboard"
import AccountTabs from "./components/AccountTabsContent"
import BillingPlans from "./components/BillingPlans"


const Customer = () => {
// ** States
    const [activeTab, setActiveTab] = useState('1')
    // const [data, setData] = useState(null)

    const toggleTab = tab => {
        setActiveTab(tab)
    }
    return (
        <div>
            <Header/>
            <div className='container'>
                <div className='row'>
                    <Fragment>
                        <Breadcrumbs breadCrumbTitle='Account Settings' breadCrumbParent='Pages' breadCrumbActive='Account Settings' />
                        { (
                            <Row>
                                <Col xs={12}>
                                    <Tabs className='mb-2' activeTab={activeTab} toggleTab={toggleTab} />
                                    <TabContent activeTab={activeTab}>
                                        <TabPane tabId='1'>
                                            <UserDashboard/>
                                        </TabPane>
                                        <TabPane tabId='2'>
                                            1
                                        </TabPane>
                                        <TabPane tabId='3'>
                                            2
                                        </TabPane>
                                        <TabPane tabId='4'>
                                            3
                                        </TabPane>
                                        <TabPane tabId='5'>
                                            4
                                        </TabPane>
                                    </TabContent>
                                </Col>
                            </Row>
                        )}
                    </Fragment>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Customer