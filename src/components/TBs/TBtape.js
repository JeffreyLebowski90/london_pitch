import React from 'react'

const tBtape = (props) => {
  return (
    <tbody>
        <tr>
            <th scope="row">#1</th>
            <td>Atape5</td>
            <td>100%</td>
            <td>100 IMI₵</td>
            <td>60s</td>
            <td><button className="btn btn-primary btn-sm"
                onClick={() => props.selectClick(0)} >Select</button></td>
        </tr>
        <tr>
            <th scope="row">#2</th>
            <td>A4</td>
            <td>100%</td>
            <td>200 IMI₵</td>
            <td>120s</td>
            <td><button className="btn btn-primary btn-sm"
                onClick={() => props.selectClick(1)} >Select</button></td>
        </tr>
        <tr>
            <th scope="row">#3</th>
            <td>A3</td>
            <td>100%</td>
            <td>300 IMI₵</td>
            <td>180s</td>
            <td><button className="btn btn-primary btn-sm"
                onClick={() => props.selectClick(2)} >Select</button></td>
        </tr>
    </tbody>
  )
}

export default tBtape