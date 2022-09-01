import React, {Fragment} from 'react'
import {Row} from "reactstrap"
import WineCards from "../../wine/components/WineCards"
import OmgCorporate from "./OmgCorporate"
import {omgCorporate, omgFamilyDine} from "../../../tempData/cateringDb"
import OmgFamilyDine from "./OmgFamilyDine"
import {wineHomePgData} from "../../../tempData/wineClubData"

const DetailsMenuPage = ({selectedCategory, xl, md}) => {


    const showItems = () => {
        if (selectedCategory === 1) {
            return <Fragment>
                <Row className="align-items-center justify-content-center ">
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
                    {omgCorporate.map(item => (
                        <OmgCorporate key={item.id} item={item} xl={xl} md={md}/>
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
