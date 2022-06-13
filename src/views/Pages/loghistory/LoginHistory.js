import React, {useEffect, useState} from 'react'
import Table from "../components/Table"
import {Edit, Trash} from "react-feather"

const LoginHistory = () => {
    const array = [
        {
            id:1,
            username:'Aaron Bohnhoff',
            datetime: 'Aaron.Bohnhoff@effem.com',
            device: '3128487155',
            isDelete: false
        },
        {
            id:2,
            username:'Aaron Bohnhoff',
            datetime: 'Aaron.Bohnhoff@effem.com',
            device: '3128487155',
            isDelete: false
        },
        {
            id:3,
            username:'Aaron Bohnhoff',
            datetime: 'Aaron.Bohnhoff@effem.com',
            device: '3128487155',
            isDelete: false
        },
        {
            id:4,
            username:'Aaron Bohnhoff',
            datetime: 'Aaron.Bohnhoff@effem.com',
            device: '3128487155',
            isDelete: false
        },
        {
            id:5,
            username:'Aaron Bohnhoff',
            datetime: 'Aaron.Bohnhoff@effem.com',
            device: '3128487155',
            isDelete: false
        }
    ]
    const [headingData] = useState(
        [
            {
                name: 'Id',
                sortable: true,
                maxWidth: '200px',
                selector: row => row.id
            },
            {
                name: 'UserName',
                sortable: true,
                minWidth: '200px',
                selector: row => row.username
            },
            {
                name: 'DateTime',
                sortable: true,
                minWidth: '200px',
                selector: row => row.datetime
            },
            {
                name: 'Device',
                sortable: true,
                minWidth: '200px',
                selector: row => row.device
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

            <h1 style={{fontSize:"20px"}}>Login History</h1>
            <h5>Friday June 10, 2022, 08:10 AM</h5>

            <Table heading={headingData} data={tabData.filter(i => i.isDelete === false)} tabletitle="Login History" />
        </>
    )
}

export default LoginHistory