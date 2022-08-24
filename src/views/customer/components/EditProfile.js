import React from 'react'

const EditProfile = () => {
    return (
        <div>
            <div className="fw-bold fs-3">Edit Profile</div>
            <div className="container-sm">
                <div className="row">
                    <div className="col">
                        <div className="avatar fs-1">FN</div>
                    </div>
                    <div className="col btn btn-primary"> Upload Image</div>
                    <div className="row mt-3">
                        <div className="col">
                            <div className="mb-3 row">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" value="FN" placeholder="First Name"/>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-sm-10">
                                <input type="text" className="form-control" value="LN" placeholder="Last Name"/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-sm-10">
                                <input type="text" className="form-control" value="+330596886" placeholder="Last Name"/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-sm-10">
                                <input type="text" className="form-control" value="User@gmail.com"
                                       placeholder="Last Name"/>
                            </div>
                        </div>
                        <div className="btn btn-sm btn-primary">Submit</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EditProfile
