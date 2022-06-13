// ** React Imports
import {Fragment} from 'react'
// ** Third Party Components
import {Col, Row} from 'reactstrap'
// ** Demo Components
import TableServerSide from './TableServerSide'
// ** Styles


const Tables = () => {
    return (
        <Fragment>
            <Row>
                <Col sm='12'>
                    <TableServerSide/>
                </Col>

            </Row>
        </Fragment>
    )
}

export default Tables
