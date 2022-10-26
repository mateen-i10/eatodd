import React, {useEffect, useState} from 'react'
import './Membership.css'
import HeroSection from "../components/HeroSection"
import NewsLetter from "../components/NewsLetter"
import Headerwine from "../../../shared/wine-header/Header-wine"
import Footer from "../../../shared/footer/Footer"
import {getUserData, isCustomer, isUserLoggedIn} from "../../../auth/utils"
import useAPI from "../../../utility/customHooks/useAPI"
import {useHistory} from "react-router-dom"
import UILoader from "../../../@core/components/ui-loader"

const Membership = ({}) => {

    const [packages, setPackages] = useState([])
    const [currentPackage, setCurrentPackage] = useState(null)
    const [currentPackageUrl, setCurrentPackageUrl] = useState('')
    const history = useHistory()

    // hooks
    const [isLoading, response] = useAPI(`winePackage?pageIndex=1&&pageSize=20&&searchQuery`, 'get')
    const [isLoadingPackage, currentPackageResponse] = useAPI(currentPackageUrl, 'get')

    useEffect(() => {
        console.log('isLoadingPackage', isLoadingPackage)
        console.log('response', response)
        if (currentPackageResponse && currentPackageResponse.data) {
            const {data} = currentPackageResponse
            console.log('response data', data)
            if (data && data.isExist) {
                setCurrentPackage(data.package)
            } else {
                setCurrentPackage(null)
            }
        }

    }, [currentPackageResponse])
    useEffect(() => {
        if (response && response.data) {
            const {data} = response
            const values = Object.values(data)
            setPackages([...values])
            if (isUserLoggedIn() && isCustomer()) setCurrentPackageUrl(`winePackage/CustomerPackage/${getUserData().customerId}`)
        }

    }, [response])

    const handleSelected = (pkg) => {
        isUserLoggedIn() && isCustomer() ? history.push('/winePayment', {package: pkg, currentPackage}) : history.push('/login', {returnURL: '/wine/membership'})
    }

    return (
        <div>
            <Headerwine />
            <HeroSection />
            <UILoader blocking={isLoading}>
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
                                    {currentPackage && currentPackage.winePackageId === d.id ? <div className="mt-2 btn fw-bolder btn-danger disabled">
                                        Selected
                                    </div> : <div className="mt-2 btn fw-bolder btn-green" onClick={() => handleSelected(d)}>
                                        Join Now
                                    </div>}
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            </UILoader>
            <NewsLetter />
            <Footer />
        </div>
    )
}
export default Membership
