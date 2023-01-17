import {Card, CardBody, CardHeader, CardText, CardTitle} from "reactstrap"
import {CreditCard, PaymentForm} from "react-square-web-payments-sdk"
import {memo} from "react"

const SquareCard = ({cardVerificationFunc, getTokenFunc, stepper}) => {
    return <Card>
                <CardHeader className='flex-column align-items-start'>
                    <CardTitle tag='h4'>Payment Details</CardTitle>
                    <CardText className='text-muted mt-25'>
                        Be sure to enter the correct payment data
                    </CardText>
                </CardHeader>
                <CardBody>
                                    <PaymentForm
                                        applicationId={process.env.REACT_APP_SQUARE_APPLICATION_ID}
                                        locationId={process.env.REACT_APP_SQUARE_LOCATION_ID}
                                        createVerificationDetails={cardVerificationFunc}
                                        cardTokenizeResponseReceived={getTokenFunc}>
                                        <CreditCard/>
                                    </PaymentForm>
                    <div className='btn btn-primary btn-sm my-2' onClick={() => stepper.previous()}>Go Back</div>
                </CardBody>
            </Card>
}

export default memo(SquareCard)