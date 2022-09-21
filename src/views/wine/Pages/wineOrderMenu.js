import React, {Fragment} from 'react'
import Header from "../../../shared/header/Header"
import Footer from "../../../shared/footer/Footer"
import {wineHomePgData} from "../../../tempData/wineClubData"
import WineCards from "../components/WineCards"

const wineOrderMenu = () => {
    const xl = 3
    const md = 6
    return (
        <div>
            <Header/>

            <Fragment>
                <div className="container-sm mt-5 mb-4">
                    <div className="row align-items-center justify-content-center">
                        {wineHomePgData.map(item => (
                            <WineCards key={item.id} item={item} xl={xl} md={md}/>
                        ))}
                    </div>
                </div>
            </Fragment>


            <Footer/>
        </div>
    )
}

export default wineOrderMenu
