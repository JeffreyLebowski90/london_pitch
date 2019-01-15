import React from 'react'

const table = () => {

  return (
    <table className="table table-dark">
    <thead>
        <tr>
        <th scope="col">Number</th>
        <th scope="col">Description</th>
        <th scope="col">Matching</th>
        <th scope="col">Price</th>
        <th scope="col">Delivery</th>
        <th scope="col">Select</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
        </tr>
        <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        <td>@fat</td>
        <td>@fat</td>
        </tr>
        <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
        <td>@twitter</td>
        <td>@twitter</td>
        </tr>
    </tbody>
    </table>
  )
}

export default table
