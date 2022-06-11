import React, {useEffect, useState} from 'react'
import Table from "../components/Table"
import {Edit, Trash} from "react-feather"

const Restaurant = () => {
    const array = [
        {
            id:1,
            priority: 1,
            name:'North Ave',
            address: '1001 W. North Ave, Chicago, IL 60642',
            phone: '(312) 274-5525',
            url: 'https://north-avenue.ninetofab.com',
            isDelete: false
        },
        {
            id:2,
            priority: 2,
            name:'Van Buren',
            address: '186 W. Van Buren, Chicago, IL 60605',
            phone: '(312) 754-0483',
            url: 'https://van-buren.ninetofab.com',
            isDelete: false
        },
        {
            id:3,
            priority: 3,
            name:'French Market',
            address: '131 N. Clinton Ave, Chicago, IL 60661',
            phone: '(312) 526-3105',
            url: 'https://french-market.ninetofab.com',
            isDelete: false
        },
        {
            id:4,
            priority: 4,
            name:'Catering',
            address: '1001 W. North Ave, Chicago, IL 60642',
            phone: '(312) 274-5525',
            url: 'https://omg-catering.ninetofab.com',
            isDelete: false
        }
    ]
    const [headingData] = useState(
        [
            {
                name: 'Priority',
                sortable: true,
                maxWidth: '200px',
                selector: row => row.priority
            },
            {
                name: 'Name',
                sortable: true,
                minWidth: '200px',
                selector: row => row.name
            },
            {
                name: 'Address',
                sortable: true,
                minWidth: '200px',
                selector: row => row.address
            },
            {
                name: 'Phone',
                sortable: true,
                minWidth: '200px',
                selector: row => row.phone
            },
            {
                name: 'Url',
                sortable: true,
                minWidth: '200px',
                selector: row => row.url
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

            <h1 style={{fontSize:"20px"}}>Restaurants</h1>
            <h5>Friday June 10, 2022, 08:10 AM</h5>

            <Table heading={headingData} data={tabData.filter(i => i.isDelete === false)} tabletitle="Restaurants" />
        </>
    )
}

export default Restaurant