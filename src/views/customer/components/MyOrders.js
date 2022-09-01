import React from 'react'

const MyOrder = () => {
    return (
        <div>
            <div className="fs-3 fw-bold mt-5 mb-2 text-center">Billing History</div>
            <table className="table mb-5">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Order Number</th>
                    <th scope="col">type</th>
                    <th scope="col">Serving Method</th>
                    <th scope="col">price</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>$18</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>$18</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>Thornton</td>
                    <td>@twitter</td>
                    <td>$18</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MyOrder
