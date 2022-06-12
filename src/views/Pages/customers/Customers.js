import React, {useEffect, useState} from 'react'
import Table from "../components/Table"
import {Edit, Trash} from "react-feather"

const Customer = () => {
    const array = [
        {
            id:1,
            name:'Aaron Bohnhoff',
            email: 'Aaron.Bohnhoff@effem.com',
            phone: '3128487155',
            registered: 'Yes',
            dob:'-',
            address: '-',
            city: '-',
            state: '-',
            isDelete: false
        },
        {
            id:2,
            name:'Aaron Bohnhoff',
            email: 'Aaron.Bohnhoff@effem.com',
            phone: '3128487155',
            registered: 'Yes',
            dob:'-',
            address: '-',
            city: '-',
            state: '-',
            isDelete: false
        },
        {
            id:3,
            name:'Aaron Bohnhoff',
            email: 'Aaron.Bohnhoff@effem.com',
            phone: '3128487155',
            registered: 'Yes',
            dob:'-',
            address: '-',
            city: '-',
            state: '-',
            isDelete: false
        },
        {
            id:4,
            name:'Aaron Bohnhoff',
            email: 'Aaron.Bohnhoff@effem.com',
            phone: '3128487155',
            registered: 'Yes',
            dob:'-',
            address: '-',
            city: '-',
            state: '-',
            isDelete: false
        },
        {
            id:5,
            name:'Aaron Bohnhoff',
            email: 'Aaron.Bohnhoff@effem.com',
            phone: '3128487155',
            registered: 'Yes',
            dob:'-',
            address: '-',
            city: '-',
            state: '-',
            isDelete: false
        },
        {
            id:6,
            name:'Aaron Bohnhoff',
            email: 'Aaron.Bohnhoff@effem.com',
            phone: '3128487155',
            registered: 'Yes',
            dob:'-',
            address: '-',
            city: '-',
            state: '-',
            isDelete: false
        },
        {
            id:7,
            name:'Aaron Bohnhoff',
            email: 'Aaron.Bohnhoff@effem.com',
            phone: '3128487155',
            registered: 'Yes',
            dob:'-',
            address: '-',
            city: '-',
            state: '-',
            isDelete: false
        }
    ]
    const [headingData] = useState(
        [
            {
                name: 'Name',
                sortable: true,
                maxWidth: '200px',
                selector: row => row.name
            },
            {
                name: 'Email',
                sortable: true,
                minWidth: '200px',
                selector: row => row.email
            },
            {
                name: 'Phone',
                sortable: true,
                minWidth: '200px',
                selector: row => row.phone
            },
            {
                name: 'Has registered',
                sortable: true,
                minWidth: '200px',
                selector: row => row.registered
            },
            {
                name: 'DOB',
                sortable: true,
                minWidth: '200px',
                selector: row => row.dob
            },
            {
                name: 'Address',
                sortable: true,
                minWidth: '200px',
                selector: row => row.address
            },
            {
                name: 'City',
                sortable: true,
                minWidth: '200px',
                selector: row => row.city
            },
            {
                name: 'State',
                sortable: true,
                minWidth: '200px',
                selector: row => row.state
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

            <h1 style={{fontSize:"20px"}}>Customers</h1>
            <h5>Friday June 10, 2022, 08:10 AM</h5>

            <Table heading={headingData} data={tabData.filter(i => i.isDelete === false)} tabletitle="Customers" />
        </>
    )
}

export default Customer