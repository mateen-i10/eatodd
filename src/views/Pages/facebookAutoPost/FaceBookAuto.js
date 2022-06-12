import React, {useEffect, useState} from 'react'
import Table from "../components/Table"
import {Edit, Trash} from "react-feather"

const FaceBookAuto = () => {
    const array = [
        {
            id:1,
            description: 'Some Description',
            image:'Some Image File',
            published: 'Published Date',
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
                name: 'Description',
                sortable: true,
                minWidth: '200px',
                selector: row => row.description
            },
            {
                name: 'Image',
                sortable: true,
                minWidth: '200px',
                selector: row => row.image
            },
            {
                name: 'Published',
                sortable: true,
                minWidth: '200px',
                selector: row => row.published
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

            <h1 style={{fontSize:"20px"}}>Facebook Auto Post</h1>
            <h5>Friday June 10, 2022, 08:10 AM</h5>

            <Table heading={headingData} data={tabData.filter(i => i.isDelete === false)} tabletitle="FaceBook Auto Post" />
        </>
    )
}

export default FaceBookAuto