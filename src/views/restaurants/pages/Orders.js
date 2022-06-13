import React from 'react'
import {Col, Row} from 'reactstrap'
import StatsCard from "../../../ui-elements/Cards/StatsCard"
import Tables from "../components/table/tables"
// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'

const Orders = () => {
    return (
        <div id='dashboard-ecommerce'>
            <Row className='match-height'>
                <Col xs='12'>
                    <StatsCard cols={{xl: '2', sm: '6'}}/>
                </Col>
                <Col xs='12'>
                    <Tables/>
                    {/*<PaginatedItems itemsPerPage={5}/>*/}
                </Col>
            </Row>
        </div>
    )
}

export default Orders
