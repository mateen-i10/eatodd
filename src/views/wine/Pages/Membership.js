import React, {useEffect, useState} from 'react'
import './Membership.css'
import HeroSection from "../components/HeroSection"
import NewsLetter from "../components/NewsLetter"
import Headerwine from "../../../shared/wine-header/Header-wine"
import Footer from "../../../shared/footer/Footer"
import {getUserData} from "../../../auth/utils"
import useAPI from "../../../utility/customHooks/useAPI"
import {useHistory} from "react-router-dom"

const Membership = ({}) => {

    const [packages, setPackages] = useState([])
    const customerId = getUserData()?.customerId
    const history = useHistory()

    // hooks
    const [isLoading, response] = useAPI(`winePackage?pageIndex=1&&pageSize=20&&searchQuery`, 'get')
    useEffect(() => {
        console.log('isLoading', isLoading)
        console.log('response', response)
        if (response && response.data) {
            const {data} = response
            const values = Object.values(data)
            setPackages([...values])
        }

    }, [response])

    const handleSelected = (pkg) => {
        console.log('ids', pkg)
        history.push('/winePayment', {package: pkg, customerId})
    }

    return (
        <div>
            <Headerwine />
            <HeroSection />
            <div className="container-sm membership-page">
                <div className="row align-items-center justify-content-center">
                    {packages && packages.length > 0 && packages.map(d => {
                       return  <div className="col-md-4">
                            <div className="member-card" style={{width: "100%", height:"30rem", boxShadow:"0 6px 20px 0 rgb(34 41 47 / 10%)"}}>
                                <div className="card-body-sec d-flex flex-column align-items-center justify-content-center m-3">
                                    <h2 className="mt-3 fw-bolder text-center">{d.name}</h2>
                                    <h5 className="text-center" > {d.description}</h5>
                                    <div className="mt-2 fw-bolder member-price"><span className="fs-5 doller-sign">$</span>{d.amount}</div>
                                    <h5 className="fw-bolder text-center">{d.billType === 1 ? 'Weekly' : d.billType === 2 ? 'Monthly' : d.billType === 3 ? 'Yearly' : ''}</h5>
                                    <div className="mt-2 btn fw-bolder btn-green" onClick={() => handleSelected(d)}>
                                        Join Now
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <NewsLetter />
            <Footer />
        </div>
    )
}
export default Membership
