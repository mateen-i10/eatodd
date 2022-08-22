import React from 'react'

const UserDashboard = () => {
    // const user = [{username: "user@gmail.com"}, {}]
    return (
        <div>
            <div className="fs-3 fw-bold">Account Information</div>
            <div>
                <div className="fs-3 fw-bold">User</div>
                <table className="table fs-4">
                    <tbody>
                    <tr>
                        <th scope="row">username</th>
                        <td>user 1</td>

                    </tr>
                    <tr>
                        <th scope="row">Email Address</th>
                        <td>user@gmail.com</td>

                    </tr>
                    <tr>
                        <th scope="row">Phone Number</th>
                        <td colSpan="2">+123458382</td>
                    </tr>
                    <tr>
                        <th scope="row">City</th>
                        <td colSpan="2">California</td>
                    </tr>
                    </tbody>
                </table>

                <div className="fs-3 fw-bold mt-5 mb-2">Recent Order</div>
                <table className="table mb-5">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Order Number</th>
                        <th scope="col">type</th>
                        <th scope="col">Serving Method</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td>Thornton</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default UserDashboard
