import React from "react"
import '../footer/Footer.css'
import {Row} from "reactstrap"

export default function WineFooter() {
    return (
        <footer className="footer" style={{backgroundColor: "black", color: "white", textAlign: "center", padding: "20 0"}}>
            <div className="container">
                <Row className='pt-5 pb-4'>
                        <p>
                            Copyright OMG Wine Club © 2023. All rights reserved.
                        </p>
                </Row>
            </div>
        </footer>
    )
}