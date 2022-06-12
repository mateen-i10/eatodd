import React, {useEffect, useState} from 'react'
import Table from "../components/Table"
import {Edit, Trash} from "react-feather"

const CrmEmail = () => {
    const array = [
        {
            id:1,
            name:'Template 1',
            //data for 2nd table
            schedule: '2021-06-16 10:00:00',
            subject: 'Get Your Hand on OMG & Treat yourself with Delightful Middle Eastern Cuisine',
            filter:'',
            status:'sent',
            //
            isDelete: false
        },
        {
            id:2,
            name:'Template 2',
            //data for 2nd table
            schedule: '2021-06-16 10:00:00',
            subject: 'Get Your Hand on OMG & Treat yourself with Delightful Middle Eastern Cuisine',
            filter:'',
            status:'sent',
            //
            isDelete: false
        },
        {
            id:3,
            name:'Template 3',
            //data for 2nd table
            schedule: '2021-06-16 10:00:00',
            subject: 'Get Your Hand on OMG & Treat yourself with Delightful Middle Eastern Cuisine',
            filter:'',
            status:'sent',
            //
            isDelete: false
        }
    ]
    const [headingData] = useState(
        [
            {
                name: 'Name',
                sortable: true,
                maxWidth: '500px',
                selector: row => row.name
            },
            {
                name: 'Actions',
                sortable: true,
                minWidth: '500px',
                selector: row => row.actions
            }
        ])

    const [headingData1] = useState(
        [
            {
                name: 'Schedule',
                sortable: true,
                maxWidth: '200px',
                selector: row => row.schedule
            },
            {
                name: 'Subject',
                sortable: true,
                maxWidth: '500px',
                selector: row => row.subject
            },
            {
                name: 'Filters',
                sortable: true,
                maxWidth: '200px',
                selector: row => row.filter
            },
            {
                name: 'Status',
                sortable: true,
                maxWidth: '200px',
                selector: row => row.status
            },
            {
                name: 'Actions',
                sortable: true,
                minWidth: '200px',
                selector: row => row.actions
            }
        ])

    /*const [cache, setCache] = useState([])*/

    const [tabData, setTabData] = useState([])

    const handleFilter = (e) => {
        console.log('id', e)
        const final = array.map(i => {
            if (i.id === e.id && i.isDelete === false) {
                i.isDelete = true
            }
            return {...i, actions: <><Edit onClick={() => console.log("edit button Clicked")} /> <Trash onClick={() => { handleFilter(i) }}>Edit</Trash></>}
        })
        console.log('final', final)
        setTabData([...final])

    }


    useEffect(() => {
        const final = array.map(i => {
            return {...i, actions: <><Edit onClick={() => console.log("edit button Clicked")} /> <Trash onClick={() => { handleFilter(i) }}>Edit</Trash></>}
        })
        setTabData(final)
    }, [])
    return (
        <>

            <h1 style={{fontSize:"20px"}}>Emails</h1>
            <h5>Friday June 10, 2022, 08:10 AM</h5>

            <Table heading={headingData} data={tabData.filter(i => i.isDelete === false)} tabletitle="Email Template" />

            <Table heading={headingData1} data={tabData.filter(i => i.isDelete === false)} tabletitle="Scheduled Emails" />

        </>
    )
}

export default CrmEmail