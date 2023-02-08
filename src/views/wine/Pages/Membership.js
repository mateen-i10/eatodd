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
        localStorage.setItem("isMember", pkg.id)
        isUserLoggedIn() && isCustomer() ? history.push('/winePayment', {
            package: pkg,
            currentPackage
        }) : history.push('/login', {returnURL: '/wine/membership'})
    }

    return (
        <div>
            <Headerwine/>
            <HeroSection/>
            <UILoader blocking={isLoading}>
                <div className="container-sm ">
                    <div className="row align-items-center justify-content-center my-2">
                        {packages && packages.length > 0 && packages.map(d => {
                            return <div className="col-md-3" key={d}>
                                <div className="member-card card border" style={{width: "100%", height: "22rem"}}>
                                    <div className="card-body align-items-center justify-content-center">
                                        <h2 className="fw-bolder text-center text-primary fs-1">{d.name}</h2>
                                        <h5 className="fs-4 text-center text-capitalize"> {d.description}</h5>
                                        <div className="mt-1 fw-bolder text-center"> <span
                                            className="" style={{fontSize: "3.5rem"}}>{d.amount}</span><sub
                                            className="fs-3 ">$</sub></div>
                                        <h5 className="fw-bolder text-center">{d.billType === 1 ? 'Weekly' : d.billType === 2 ? 'Monthly' : d.billType === 3 ? 'Yearly' : ''}</h5>
                                        <div className="row">
                                            <div
                                                className="col-7 mx-auto">{currentPackage && currentPackage.winePackageId === d.id ? <div className="mt-2 btn fw-bolder btn-danger mx-auto disabled">
                                                    Selected
                                                </div> : <div className="mt-2 fw-bolder btn btn-primary btn-join ms-2"
                                                              onClick={() => handleSelected(d)}>
                                                    Join Now
                                                </div>}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </UILoader>
            <NewsLetter/>
            <Footer/>
        </div>
    )
}
export default Membership
