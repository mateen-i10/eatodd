import React from 'react'
import BussinessDetailsForm from "./BussinessDetailsForm"

const BussinessDetails = () => {
    return (
        <>
            <h1 style={{fontSize:"20px"}}>Business Details</h1>
            <h5>Friday June 10, 2022, 08:10 AM</h5>
            <BussinessDetailsForm FormTitle="Update Business Information" />
        </>
    )
}

export default BussinessDetails