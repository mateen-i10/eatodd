import React, {useEffect, useState} from 'react'
import Table from "./components/Table"
import {Edit, Trash} from "react-feather"

const Users = () => {
    const array = [
        {
            id:1,
            name: 'OMG - Catering',
            email:'omgnorthcatering@tasteolive.com',
            role: 'Branch Manager',
            restaurant: 'Catering',
            isDelete: false
        },
        {
            id:2,
            name: 'OMG - French Market',
            email:'omgfrenchmarket@tasteolive.com',
            role: 'Branch Manager',
            restaurant: 'French Market',
            isDelete: false
        },
        {
            id:3,
            name: 'OMG - North Eve',
            email:'omgfrenchmarket@tasteolive.com',
            role: 'Branch Manager',
            restaurant: 'North Eve',
            isDelete: false
        },
        {
            id:4,
            name: 'OMG - Van Buran',
            email:'omgfrenchmarket@tasteolive.com',
            role: 'Branch Manager',
            restaurant: 'Van Buran',
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
             name: 'Role',
             sortable: true,
             minWidth: '200px',
             selector: row => row.role
         },
         {
             name: 'Restaurant',
             sortable: true,
             minWidth: '200px',
             selector: row => row.restaurant
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

            <h1 style={{fontSize:"20px"}}>Users</h1>
            <h5>Friday June 10, 2022, 08:10 AM</h5>

            <Table heading={headingData} data={tabData.filter(i => i.isDelete === false)} tabletitle="Users" />
        </>
    )
}

export default Users