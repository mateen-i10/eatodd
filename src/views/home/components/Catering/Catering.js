import React, {useEffect, useState} from 'react'
import MenuItemsCatering from "./MenuItemsCatering"
import {Row} from "reactstrap"
import useAPI from "../../../../utility/customHooks/useAPI"

const Catering = () => {
    const [catMenu, setCatMenu] = useState([])
    const [catHomeId, setCatHomeId] = useState(0)

    const [isLoading, response] = useAPI('CateringMenu?TotalPages=1&PageIndex=1&PageSize=12', 'get', {}, {}, true)

    useEffect(() => {
        if (response !== null && response.statusCode === 200) {
            const data = response.data
            // console.log("data LLLLLLLLLLLLL", data)
            const final = data.map(item => ({
                id: item.id,
                name: item.name,
                description: item.description,
                priority: item.priority,
                isLoading
            }))

            setCatMenu(final)
        }


    }, [response])

    // console.log("cat Manu", catMenu)

    useEffect(() => {
        if (catMenu.length) {
            catMenu.map((item) => {
                if (item.name.toLowerCase() === 'home') {
                    setCatHomeId(item.id)
                }
            })
        }
    }, [catMenu])


    // console.log("cat Home Id ", catHomeId)
    return (
        <>
            <div style={{backgroundColor: 'white', paddingTop: 40}}>
                <div className="text-center" style={{marginBottom: 30}}>
                    <div className="pleaser-title col-12 text-center mt-3">POPULAR BUILDS</div>
                    <h4 className='my-2' style={{color: '#2f2f2f'}}>Order the perfect crowd-pleaser spread for any
                        occasion <br/> 24 hours advance notice to order</h4>
                </div>
                <section>
                    <div className="container-sm">
                        <div className="text-center">
                            <Row className="pb-5">
                                <MenuItemsCatering id={catHomeId}
                                />

                            </Row>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Catering