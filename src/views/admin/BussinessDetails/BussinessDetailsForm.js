import React from 'react'
import {Card, CardBody, CardHeader} from "reactstrap"

const BussinessDetailsForm = (props) => {

    return (
        <>
            <Card>
                <CardHeader>
                    <h3>{props.FormTitle}</h3>
                </CardHeader>

                <hr/>

                <CardBody>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Business Name</label>
                            <input type="email" placeholder='Olive Mediterranean Grill' className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Business Contact</label>
                            <input type="password" placeholder='(312) 274-5525' className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputAddress" className="form-label">Business Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1001 W. North Ave, Chicago, IL 60642" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputAddress2" className="form-label">Push Sales Title</label>
                            <input type="text" className="form-control" id="inputAddress2"
                                   placeholder="Would you like to add something more?" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">Website URL</label>
                            <input type="text" className="form-control" id="inputCity" placeholder='http://eatomg.com' />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">FaceBook URL</label>
                            <input type="text" className="form-control" id="inputCity" placeholder='https://www.facebook.com/eatomg' />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">Twitter URL</label>
                            <input type="text" className="form-control" id="inputCity" placeholder='..' />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">Instagram URL</label>
                            <input type="text" className="form-control" id="inputCity" placeholder='https://www.instagram.com/olivemediterranean/' />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="formFile" className="form-label">Default file input example</label>
                            <input className="form-control" type="file" id="formFile" />
                        </div>
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </form>
                </CardBody>
            </Card>
        </>
        )
}

export default BussinessDetailsForm