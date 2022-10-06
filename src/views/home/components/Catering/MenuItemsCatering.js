// eslint-disable-next-line no-unused-vars
import React, {Fragment, useEffect, useState} from 'react'
import {Row} from "reactstrap"
import useAPI from "../../../../utility/customHooks/useAPI"
import CateringMenuItems from "../../../catering/components/CateringMenuItems"
import UILoader from "../../../../@core/components/ui-loader"

const MenuItemsCatering = (props) => {

    const [cateringItems, setCateringItems] = useState([])
    const [isLoading, response] = useAPI(`CateringMenu/GetCateringMenuItem?PageIndex=1&PageSize=4&RefId=${props.id}`)
    console.log("cat home response *********", response, isLoading)


    useEffect(() => {
        if (response !== null && response.statusCode === 200) {
            const data = response.data
            // console.log("data******", data)
            const final = data.map(item => ({
                id: item.id,
                attachment: item.attachment,
                title: item.name,
                detail: item.description,
                price: item.price,
                limit: item.limit,
                isLoading
            }))
            setCateringItems(final)
        }
    }, [response])
    console.log("cat items array", cateringItems)

    // const [value, setValue] = useState("People")

    return (
        <Fragment>
            <Row className="align-items-center ">
                {cateringItems.length ? cateringItems.map(item => (
                    <div key={item.id} className="col-lg-3 col-sm-6 col-9 mx-auto"><CateringMenuItems key={item.id}
                                                                                                      item={item}/>
                    </div>
                )) : <UILoader/>}
            </Row>
        </Fragment>

    )
}

export default MenuItemsCatering