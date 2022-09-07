import {Button, Col, Row} from 'reactstrap'


const Tabs = ({toggleTab}) => {
    return (
        <div className='text-center' style={{marginTop: 30}}>
            <section>
                <div className="container-sm">
                    <Row>
                        <Col xl={2}>
                            <Button.Ripple color='primary' className="fs-4 fw-bolder" onClick={() => toggleTab('1')}>Account</Button.Ripple>
                        </Col>
                        <Col xl={2}>
                            <Button.Ripple color='primary' className="fs-4 fw-bolder" onClick={() => toggleTab('2')}>Billing</Button.Ripple>
                        </Col>
                        <Col xl={2}>
                            <Button.Ripple color='primary' className="fs-4 fw-bolder" onClick={() => toggleTab('3')}>Address</Button.Ripple>
                        </Col>
                        <Col xl={2}>
                            <Button.Ripple color='primary' className="fs-4 fw-bolder" onClick={() => toggleTab('4')}>Security</Button.Ripple>
                        </Col>
                        <Col xl={2}>
                            <Button.Ripple color='primary' className="fs-4 fw-bolder" onClick={() => toggleTab('5')}>Meals</Button.Ripple>
                        </Col>
                        <Col xl={2}>
                            <Button.Ripple color='primary' className="fs-4 fw-bolder" onClick={() => toggleTab('6')}>History</Button.Ripple>
                        </Col>
                    </Row>
                </div>
            </section>

        </div>
    )
}

export default Tabs
