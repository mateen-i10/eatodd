import React, {Fragment} from 'react'
import {Row} from "reactstrap"
import WineCards from "../../wine/components/WineCards"
import OmgCorporate from "./OmgCorporate"
import {omgCorporate, omgFamilyDine, omgFriends} from "../../../tempData/cateringDb"
import OmgFamilyDine from "./OmgFamilyDine"
import {wineHomePgData} from "../../../tempData/wineClubData"
import OmgFriends from "./OmgFriends"
// import useAPI from "../../../utility/customHooks/useAPI"

const DetailsMenuPage = ({selectedCategory, xl, md}) => {

    // const [isLoading, response] = useAPI('CateringMenuItem?PageIndex=1&PageSize=4', 'get', {}, {}, true)
    //
    // console.log("MenuItem", isLoading, response)
    const showItems = () => {
        if (selectedCategory === 1) {
            return <Fragment>
                <Row className="align-items-center ">
                    {omgCorporate.map(item => (
                        <OmgCorporate key={item.id} item={item} xl={xl} md={md}/>
                    ))}
                </Row>
            </Fragment>
        }
        if (selectedCategory === 2) {
            return <Fragment>
                <Row className="align-items-center justify-content-center ">
                    {omgFamilyDine.map(item => (
                        <OmgFamilyDine key={item.id} item={item} xl={xl} md={md}/>
                    ))}
                </Row>
            </Fragment>
        }
        if (selectedCategory === 3) {
            return <Fragment>
                <Row className="align-items-center justify-content-center ">
                    {omgFriends.map(item => (
                        <OmgFriends key={item.id} item={item} xl={xl} md={md}/>
                    ))}
                </Row>
            </Fragment>
        }
        if (selectedCategory === 4) {
            return <Fragment>
                <Row className="align-items-center justify-content-center ">
                    {wineHomePgData.map(item => (
                        <WineCards key={item.id} item={item} xl={xl} md={md}/>
                    ))}
                </Row>
            </Fragment>
        }
    }
    return (
        <div> {showItems()}</div>
    )
}

export default DetailsMenuPage
