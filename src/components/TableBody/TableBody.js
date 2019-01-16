import React from 'react'

const tBSheet = (props) => {
  return (
    <tbody>
        <tr>
            <th scope="row">#1</th>
            <td>{props.data[0][0]}</td>
            <td>{props.data[0][1]}</td>
            <td>{props.data[0][2]}</td>
            <td>{props.data[0][3]} s</td>
            <td><button className="btn btn-primary btn-sm"
                onClick={() => props.selectClick(0)} >Select</button></td>
        </tr>
        <tr>
            <th scope="row">#2</th>
            <td>{props.data[1][0]}</td>
            <td>{props.data[1][1]}</td>
            <td>{props.data[1][2]}</td>
            <td>{props.data[1][3]} s</td>
            <td><button className="btn btn-primary btn-sm"
                onClick={() => props.selectClick(1)} >Select</button></td>
        </tr>
        <tr>
            <th scope="row">#3</th>
            <td>{props.data[2][0]}</td>
            <td>{props.data[2][1]}</td>
            <td>{props.data[2][2]}</td>
            <td>{props.data[2][3]} s</td>
            <td><button className="btn btn-primary btn-sm"
                onClick={() => props.selectClick(2)} >Select</button></td>
        </tr>
    </tbody>
  )
}

export default tBSheet