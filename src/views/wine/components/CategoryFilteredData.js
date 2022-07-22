import React, {Fragment} from 'react'
import {Row} from "reactstrap"
import WineCards from "./WineCards"

const CategoryFilteredData = ({selectedCategory, sparkling, white, rose, red, xl, md}) => {


    const showItems = () => {
        if (selectedCategory === "Sparkling") {
            return <Fragment>
                <Row className="align-items-center justify-content-center ">
                    {sparkling.map(item => (
                        <WineCards key={item.id} item={item} xl={xl} md={md}/>
                    ))}
                </Row>
            </Fragment>
        }
        if (selectedCategory === "White") {
            return <Fragment>
                <Row className="align-items-center justify-content-center ">
                    {white.map(item => (
                        <WineCards key={item.id} item={item} xl={xl} md={md}/>
                    ))}
                </Row>
            </Fragment>
        }
        if (selectedCategory === "Rose") {
            return <Fragment>
                <Row className="align-items-center justify-content-center ">
                    {rose.map(item => (
                        <WineCards key={item.id} item={item} xl={xl} md={md}/>
                    ))}
                </Row>
            </Fragment>
        }
        if (selectedCategory === "Red") {
            return <Fragment>
                <Row className="align-items-center justify-content-center ">
                    {red.map(item => (
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

export default CategoryFilteredData
