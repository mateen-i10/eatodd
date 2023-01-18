import React, {Fragment, useEffect, useState} from 'react'
import {Row} from "reactstrap"
import WineCards from "../../wine/components/WineCards"
import CateringMenuItems from "./CateringMenuItems"
import {wineHomePgData} from "../../../tempData/wineClubData"
import useAPI from "../../../utility/customHooks/useAPI"
import UILoader from "../../../@core/components/ui-loader"

const CateringDetailMenu = ({md, id}) => {

    const [isLoading, response] = useAPI(`CateringMenu/GetCateringMenuItem?PageIndex=1&PageSize=4&RefId=${id}`, 'get', {}, {}, true)

    const [omgCorporateItems, setOmgCorporateItems] = useState([])

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
            setOmgCorporateItems(final)
        }
    }, [response])

    console.log("MenuItem", isLoading, response)
    console.log("corporate Items", omgCorporateItems)
    const showItems = () => {
        if (id === 1) {
            return <Fragment>
                <Row className="align-items-center ">
                    {omgCorporateItems.length ? omgCorporateItems.map(item => (
                        <div key={item.id} className="col-lg-4 col-sm-6 col-9 mx-auto"><CateringMenuItems key={item.id} item={item}/>
                        </div>
                    )) : <UILoader/>}
                </Row>
            </Fragment>
        }
        if (id === 2) {
            return <Fragment>
                <Row className="align-items-center ">
                    {omgCorporateItems.length ? omgCorporateItems.map(item => (
                        <div key={item.id} className="col-lg-4 col-sm-6 col-9 mx-auto"><CateringMenuItems key={item.id} item={item}/>
                        </div>
                    )) : <UILoader/>}
                </Row>
            </Fragment>
        }
        if (id === 3) {
            return <Fragment>
                <Row className="align-items-center ">
                    {omgCorporateItems.length ? omgCorporateItems.map((item) => (
                        <div key={item.id} className="col-lg-4 col-sm-6 col-9 mx-auto" key={item.id}><CateringMenuItems item={item}/>
                        </div>
                    )) : <UILoader/>}
                </Row>
            </Fragment>
        }
        if (id === 4) {
            return <Fragment>
                <Row className="align-items-center justify-content-center ">
                    {wineHomePgData.map(item => (
                        <WineCards key={item.id} item={item} xl='4' md={md}/>
                    ))}
                </Row>
            </Fragment>
        }
    }
    return (
        <div> {showItems()}</div>
    )
}

export default CateringDetailMenu
